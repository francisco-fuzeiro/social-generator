# Postiz — contrato do Motor 3 e calendário no Nexus

> Decisões da entrevista de 20/11/2026. **Motor 3 utiliza o Postiz** para agendar/publicar; **Nexus mostra o calendário e estados lidos do Postiz**, sem ser o scheduler. Integração ainda por implementar e testar. **Entrevista P6-C: validar primeiro; Cloud/self-hosted será decidido após provas.**

## 1. Separação de responsabilidades (DECIDIDO)

| Sistema | Responsabilidade |
|---|---|
| **Motor 1 — Intelligence** | Pesquisa e recomenda temas para projetos Social ativos/configurados; operador seleciona temas |
| **Motor 2 — Production** | **Fila automática** de produção (P4-B), dentro dos limites do Nexus; uma peça pronta segue para revisão independente sem bloquear a produção das seguintes |
| **Revisão final no dashboard Nexus** | Mostra prévia e copy, formatos, contas, canais, proposta de calendário com ordem/datas/horas, checks de qualidade e direitos; operador ajusta e **aprova a versão exata do pacote/calendário** |
| **Motor 3 — Postiz Adapter** | Apenas após aprovação final: envia pacote ao Postiz, cria agendamento quando a conta/canal permite, acompanha estados e confirma recibos |
| **Postiz** | **É o scheduler e executor da publicação** nas horas marcadas; guarda o estado operacional das publicações, independentemente de uma sessão LLM Nexus |
| **Dashboard Social no Nexus** | Mostra o **calendário sincronizado com o Postiz** e detalhes dos posts. Permite consultar agendas e histórico mesmo sem entrar no Postiz. É **visualização de leitura e supervisão**, não um segundo scheduler. |
| **Motor 4 — Analytics & Learning** | Motor lógico **aprovado** e separado do M3: recolhe/normaliza métricas da rede, dados do Postiz e do site/app quando disponíveis, analisa resultados/experiências e retroalimenta o Motor 1. M3 só entrega eventos/recibos operacionais |

**Fonte de verdade:** Postiz para agendamento/execução e estados operacionais das publicações geridas por ele; Social/Nexus para identidade de projeto, aprovações, conteúdo produzido, autoria e links à investigação. Espelho no Nexus é cache/snapshot de leitura, não fila alternativa de execução. A falta de disponibilidade do Nexus **não** deve impedir o disparo de uma publicação já confirmada no Postiz; a falta de disponibilidade do Postiz **deve** ser sinalizada como erro/estado desconhecido no dashboard.

## 2. Fluxo decidido

```text
Motor 1 → temas sugeridos → escolha humana dos temas (gate 1)
  → Motor 2: fila automática, produz conteúdos
  → revisão final por peça no Nexus: vídeo/carrossel + texto + contas + datas/horas
  → aprovação humana da peça e calendário (gate 2)
  → Motor 3 envia ao Postiz e confirma ID e estado agendado
  → Postiz publica no momento previsto
  → consulta/sincronização: Postiz → Nexus (calendário e histórico)
  → dados observados para analytics/aprendizagem
```

**Uma proposta de calendário ainda não aprovada não aparece como post «Agendado».** Pode aparecer no fluxo de revisão como **proposta/por aprovar**, com aparência/estado claramente distintos dos posts confirmados pelo Postiz.

## 3. Calendário consultável no dashboard Social (DECIDIDO)

O dashboard deve disponibilizar um **calendário editorial funcional**, com navegação por datas e filtro por **projeto Nexus, conta/plataforma, estado** e período. Agendar no Postiz **não** significa que o utilizador tenha de sair do Nexus para saber o que está previsto.

Mostrar, pelo menos:

- **Agendados/na fila:** data, hora e fuso horário, plataforma, conta, projeto, título/preview, tipo de conteúdo, ID Postiz e estado/última sincronização.
- **Já publicados:** data/hora real quando conhecida, plataforma/conta, miniatura, ligação ao post publicado e resultado confirmado.
- **Falhados ou incertos:** erro legível, última tentativa/sincronização e indicação de necessidade de intervenção; não repetir automaticamente.
- **Por aprovar / por agendar / agendamento manual pendente:** estados do Social/Nexus **distintos** do calendário confirmado no Postiz; não inventar agendamento remoto.
- **Cancelados/rascunhos**, se disponíveis através do fornecedor, diferenciados de publicações agendadas.
- **Detalhe de cada post:** identificação do projeto, tema/peça/variante, copy e CTA, plataformas de destino, prévia, data prevista/efetiva, histórico de eventos e recibos relevantes, além do estado de métricas (quando acessíveis).

**Vistas funcionais mínimas:** calendário por período (por exemplo semana/mês) e uma lista de posts com estados. **O design visual detalhado continua adiado** até os motores e dados reais estarem validados. F1 pode ter estrutura/fixtures claramente assinaladas; uma integração Postiz real e o calendário sincronizado pertencem à fase de distribuição.

**Perfis Social inativos:** não gerar novas pesquisas/produções nem novo agendamento; **manter visível o calendário/histórico**, incluindo posts futuros já enviados ao Postiz, para supervisão. A política de cancelar agendamentos existentes quando um perfil é desativado é **decisão separada por fechar**; não cancelar automaticamente por inferência.

## 4. Contrato de sincronização Postiz → Nexus (PROPOSTO técnico)

Postiz disponibiliza API pública para **listar posts agendados/publicados** (por exemplo `GET /public/v1/posts`, sujeito a versão/permissões atuais da instalação) e criar agendamentos. Integrar um adaptador com contrato estável e capacidades verificadas; não assumir que todos os estados ou métricas de todas as plataformas são retornados da mesma forma.

**Chaves mínimas para um registo espelhado**:
`nexusProjectId`, `socialProjectId` (se aplicável), `creativeId`, `creativeVersion`, `approvalId`, `postizPostId`/identificador de grupo, `postizIntegrationId`, `platform`, `accountId`, `scheduleAtUtc`, `publishedAtUtc`, `timezone`, `providerStatus`, `normalizedStatus`, `remotePostId`, `remoteUrl`, `lastSyncedAt`, `source`, `receiptRef`, `error`, `confidence`.

Usar um mapeamento explícito **projeto Nexus ↔ integração/conta Postiz ↔ ID do post**. Uma conta só deve aparecer no contexto dos projetos aos quais foi autorizada. Posts criados diretamente no Postiz que não tenham correspondência comprovada a um projeto Nexus **não podem ser atribuídos por palpite**; podem aparecer numa vista global «não associados», dependendo das permissões da ligação, com opção futura de associação manual.

**Estados normalizados propostos:**
`proposta`, `aguarda-aprovacao`, `aprovado-nao-enviado`, `envio-incerto`, `agendamento-manual-pendente`, `rascunho-postiz`, `agendado`, `em-publicacao`, `publicado`, `falhou`, `cancelado`, `desconhecido`.

Os estados `proposta`/`aguarda-aprovacao` são locais; `agendado` e `publicado` exigem **confirmação do Postiz e/ou da rede**. Não converter ausência de dados em sucesso ou em cancelamento.

### Atualização e consistência

- Sincronização **na abertura/consulta do calendário** e após operações, quando API e quotas permitirem; cache com hora de última atualização.
- Eventos/webhooks apenas se existir mecanismo seguro suportado pela implantação; **consulta periódica/polling** como alternativa autorizada sem criar scheduler de publicação. A política de refresh é técnica por validar.
- Em modo offline, mostrar último snapshot local com aviso **«Dados desatualizados desde ...»**, nunca «Atualizado agora».
- Conciliação de posts agendados/publicados/falhados, incluindo alterações feitas diretamente no Postiz. Não duplicar posts importados a cada atualização; preservar ID do fornecedor e histórico.
- Entrega ao Postiz com chave idempotente e verificação remota após timeout. Não reenviar às cegas. Mudança de texto, recurso, conta, plataforma, data ou hora no pacote aprovado exige novo gate final conforme contrato.

## 5. Operações do dashboard

**Consulta de calendário e detalhe é requisito decidido.** O dashboard apresenta prévias, datas e estados e pode oferecer um link para abrir a publicação no Postiz ou na rede quando disponível.

**DECIDIDO — Entrevista P5, opção C:** **o calendário do Nexus é de consulta**, sem botões para editar, reagendar ou cancelar no Nexus. Para essas ações, o utilizador **abre a publicação no Postiz** por ligação contextual quando disponível e altera-a lá. Depois a sincronização atualiza o calendário Nexus, identificando alterações de data, hora, conta, copy, estado ou cancelamento, sem efetuar alterações ocultas. O fluxo de produção continua a permitir ajustes **antes** da aprovação e da submissão inicial ao Postiz.

**DECIDIDO — Entrevista P6, opção C:** **não escolher já Postiz Cloud vs. self-hosted**. Primeiro validar a integração e as capacidades reais usando uma opção gratuita ou experimental **se estiver efetivamente disponível**, sem assumir duração, elegibilidade ou isenção de custos. Investigar autenticação e API, canais, formatos e limites, agendamento/publicação, calendário, estados, recibos, edição diretamente no Postiz, sincronização e funcionamento independente de sessões Nexus. Medir preço, infraestrutura, uptime, segurança, backups e manutenção de ambas as opções; só depois propor a escolha para produção, com aprovação do utilizador. **Não criar conta paga, consumir trial com cobrança, instalar serviço definitivo nem adquirir novas APIs por inferência.** Não colocar API keys e segredos no repositório nem nas respostas do dashboard.

## 5.1. Regra P5-C — editar só no Postiz

O dashboard Nexus apresenta o calendário do Postiz **em modo de leitura**. Pode ter ligação `Abrir no Postiz` para que o utilizador edite/reagende/cancele o post lá. **Não criar formulário de reagendamento, botão de cancelar nem editor de posts no Nexus.** Depois de qualquer ação no Postiz, a sincronização atualiza estado/hora/copy e assinala origem externa quando possível. O fluxo de pré-publicação dentro do Nexus **continua editável antes de aprovar e enviar**; só a agenda já submetida fica sob controlo do Postiz.

## 5.2. Alertas de marca P12-B — sem editar a agenda

Quando for **aprovada uma nova versão de branding**, o Social Generator audita dependências de conteúdos por projeto. Se um post já agendado no Postiz usar materiais potencialmente desatualizados, o **dashboard Nexus pode mostrar alerta de revisão de marca** e ligação para abrir esse post no Postiz. **Não há cancelamento, reagendamento, edição ou bloqueio remoto automático**. Um alerta não altera o estado operacional remoto; a execução continua exclusivamente sob controlo do Postiz até o operador intervir. Depois de editar no Postiz, o Motor 3 sincroniza o estado/recibos reais. Preservar a decisão humana e distinguir alerta de marca de erro de publicação.

Ver [BRANDING.md](BRANDING.md) §4.2 e decisão SG-D049.

## 6. Testes de aceitação

1. Com posts confirmados no Postiz, o dashboard Nexus apresenta **agendados** no dia/hora/conta corretos e **publicados** com ligação e data real quando disponíveis.
2. O calendário pode ser filtrado por projeto, plataforma, conta, estado e período sem misturar marcas. Posts não associados não são atribuídos sem confirmação.
3. Uma proposta de data/horário e um pacote pendente de aprovação não aparecem como `agendado`.
4. Após gate final, Postiz confirma criação do agendamento e o Nexus atualiza estado/ID; se falhar, não apresenta falso sucesso.
5. Alteração feita diretamente no Postiz fica refletida após sincronização; snapshots repetidos não duplicam posts.
6. Erros, posts falhados e expiração de autenticação são visíveis, com causa e última atualização.
7. No Nexus, cada post com ligação disponível pode ser **aberto no Postiz para edição**, mas o dashboard não faz `PATCH/DELETE` ou reagendamento por si; alteração no Postiz volta por sincronização.
8. Desativar projeto Social não apaga posts já agendados nem métricas; bloqueia novo trabalho. Cancelamento automático não pode ocorrer sem política aprovada.
9. Postiz indisponível não apaga calendário: mostrar **snapshot desatualizado** e falha de sincronização.
10. O Nexus não executa o scheduler; uma publicação confirmada permanece agendada no Postiz independentemente de sessão LLM.
11. Publicação manual não surge como `agendada` sem comprovativo; publicação já efetuada exige confirmação própria.

## 6.1. Gate de validação P6-C — antes de escolher alojamento

**Plano de prova (a executar apenas numa missão autorizada):**

1. Confirmar na documentação atual que existe modo de teste utilizável e quais as suas restrições/possíveis custos; se não existir, avaliar demonstração ou prova local sem contratar.
2. Testar ligação segura e listagem de contas e publicações do Postiz, identificando quais os canais reais de cada projeto.
3. Testar sem efeitos públicos, sempre que possível, criação de rascunho/agenda, retorno de ID, estados e leitura pelo Nexus; **não publicar material real sem aprovação final**.
4. Confirmar cobertura de formatos e permissões Instagram, YouTube, TikTok, LinkedIn e X, registando limitações por canal.
5. Exercitar sincronização de alterações feitas no Postiz para calendário Nexus (modo leitura), casos de timeout/indisponibilidade, idempotência e recibos.
6. Comparar Cloud vs. self-hosted quanto a preço total, disponibilidade 24/7, manutenção, backups, segurança, escalabilidade e independência do PC Nexus.
7. Publicar relatório de evidências e **recomendação de alojamento para aprovação**, antes de ativar publicação em produção.

Critérios: não declarar capacidades comprovadas sem evidência, não transformar teste em envio/publicação, não incorrer em novos custos sem autorização.

## 7. Fontes de referência técnica

- [Postiz — Website](https://postiz.com/) — produto e calendário.
- [Postiz — API e OAuth](https://postiz.com/blog/direct-postiz-integration-oauth-api) — inclui `GET /public/v1/posts` e `POST /public/v1/posts`.
- [Ciclo dos temas](CICLO_TEMAS.md); [decisões](DECISOES.md); [requisitos](REQUISITOS.md); [alinhamento F0](ALINHAMENTO_CONTRATO_V1.md).
