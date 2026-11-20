# Postiz — contrato do Motor 3 e calendário no Nexus

> Decisões da entrevista de 20/11/2026. **Motor 3 utiliza o Postiz** para agendar/publicar; **Nexus mostra o calendário e estados lidos do Postiz**, sem ser o scheduler. Integração ainda por implementar e testar. **Modo Postiz Cloud/self-hosted ainda por decidir.**

## 1. Separação de responsabilidades (DECIDIDO)

| Sistema | Responsabilidade |
|---|---|
| **Motor 1 — Intelligence** | Pesquisa e recomenda temas para projetos Social ativos/configurados; operador seleciona temas |
| **Motor 2 — Production** | **Fila automática** de produção (P4-B), dentro dos limites do Nexus; uma peça pronta segue para revisão independente sem bloquear a produção das seguintes |
| **Revisão final no dashboard Nexus** | Mostra prévia e copy, formatos, contas, canais, proposta de calendário com ordem/datas/horas, checks de qualidade e direitos; operador ajusta e **aprova a versão exata do pacote/calendário** |
| **Motor 3 — Postiz Adapter** | Apenas após aprovação final: envia pacote ao Postiz, cria agendamento quando a conta/canal permite, acompanha estados e confirma recibos |
| **Postiz** | **É o scheduler e executor da publicação** nas horas marcadas; guarda o estado operacional das publicações, independentemente de uma sessão LLM Nexus |
| **Dashboard Social no Nexus** | Mostra o **calendário sincronizado com o Postiz** e detalhes dos posts. Permite consultar agendas e histórico mesmo sem entrar no Postiz. É **visualização de leitura e supervisão**, não um segundo scheduler. |
| **Analytics & Learning** | Consome resultados confirmados do Postiz e métricas adicionais disponíveis da rede/site/app; permanece como módulo lógico do domínio Social, sem pressupor que foi aprovado um quarto motor autónomo |

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

**Editar, reagendar ou cancelar diretamente pelo dashboard Nexus** permanece **por decidir**. Até essa decisão, o contrato só garante consulta e aprovação do pacote *antes* do envio ao Postiz; alterações feitas no Postiz devem regressar ao Nexus pela sincronização. Não implementar controlos de edição inertes ou que alterem o Postiz sem autorização.

**Cloud vs self-hosted** também é decisão pendente: validar uptime, preço real, limites de contas, autenticação, formatos, condições e capacidade de listar/editar posts para cada canal, **antes de contratar/instalar**. Não colocar API keys e segredos no repositório nem nas respostas do dashboard.

## 6. Testes de aceitação

1. Com posts confirmados no Postiz, o dashboard Nexus apresenta **agendados** no dia/hora/conta corretos e **publicados** com ligação e data real quando disponíveis.
2. O calendário pode ser filtrado por projeto, plataforma, conta, estado e período sem misturar marcas. Posts não associados não são atribuídos sem confirmação.
3. Uma proposta de data/horário e um pacote pendente de aprovação não aparecem como `agendado`.
4. Após gate final, Postiz confirma criação do agendamento e o Nexus atualiza estado/ID; se falhar, não apresenta falso sucesso.
5. Alteração feita diretamente no Postiz fica refletida após sincronização; snapshots repetidos não duplicam posts.
6. Erros, posts falhados e expiração de autenticação são visíveis, com causa e última atualização.
7. Desativar projeto Social não apaga posts já agendados nem métricas; bloqueia novo trabalho. Cancelamento automático não pode ocorrer sem política aprovada.
8. Postiz indisponível não apaga calendário: mostrar **snapshot desatualizado** e falha de sincronização.
9. O Nexus não executa o scheduler; uma publicação confirmada permanece agendada no Postiz independentemente de sessão LLM.
10. Publicação manual não surge como `agendada` sem comprovativo; publicação já efetuada exige confirmação própria.

## 7. Fontes de referência técnica

- [Postiz — Website](https://postiz.com/) — produto e calendário.
- [Postiz — API e OAuth](https://postiz.com/blog/direct-postiz-integration-oauth-api) — inclui `GET /public/v1/posts` e `POST /public/v1/posts`.
- [Ciclo dos temas](CICLO_TEMAS.md); [decisões](DECISOES.md); [requisitos](REQUISITOS.md); [alinhamento F0](ALINHAMENTO_CONTRATO_V1.md).
