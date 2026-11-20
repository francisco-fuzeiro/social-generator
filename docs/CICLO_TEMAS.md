# Ciclo de pesquisa, temas e planeamento editorial

> Decisões da entrevista de 20/11/2026 (incluindo P2 — opção C). Este documento é o contrato funcional; nomes dos estados, schemas, horários e pesos exatos são propostas técnicas a validar com o Nexus. **Não representa código implementado.**

## 1. Projetos pesquisáveis — gate obrigatório

O botão **Adicionar projeto** apresenta **todos os projetos do Nexus**, sem exigir contas sociais, branding ou Social ativo. A adição cria apenas um perfil Social em rascunho.

**Pesquisa, recomendações diárias/semanais e recomendações sob pedido só são permitidas quando as três condições se verificam simultaneamente:**

1. Projeto Nexus foi **adicionado ao Social Generator**.
2. Perfil Social foi **configurado e validado**, incluindo branding completo (identidade visual, público, tom, idioma, objetivos, formatos e canais/contas apropriados ao trabalho).
3. Projeto Social está **ativo**, por escolha explícita do utilizador.

Um projeto **configurado mas inativo** permanece visível no Social para consulta e edição, **sem pesquisa nem novas recomendações de temas** e sem consumir orçamento de investigação. Um rascunho ou perfil com branding incompleto também não é pesquisado. OAuth/API autenticada não é requisito para pesquisa nem trabalho manual; se estiver em falta, as capacidades automáticas da rede permanecem indisponíveis.

Ao desativar, preservar temas, versões, fontes, decisões, calendários e resultados históricos; não emitir novas pesquisas/recomendações nem executar operações externas. Se uma tarefa de pesquisa estiver em curso, o Nexus deve verificar o estado antes de entregar/recomendar resultados, evitando prosseguir após desativação (modo técnico a validar).

## 2. Distribuição adaptativa — P2, opção C (DECIDIDO)

**Todos os projetos Social ativos e configurados recebem uma pesquisa diária leve.** O motor aloca investigação mais aprofundada aos projetos com campanhas ativas, sinais de tendências fortes, oportunidades relevantes, maior prioridade explícita ou necessidade de reavaliar temas. **Relatório semanal** abrange todos os projetos ativos/configurados, com profundidade proporcional à prioridade e evidências. Não pesquisar projetos Social inativos ou incompletos.

Reutilizar o orquestrador, agendador e guardas de custo/RAM/limites do Nexus; não criar um scheduler paralelo. Execução manual é fallback até existir suporte comprovado. Prioridade/calendário podem mudar sem autorizar gasto, produção ou publicação.

## 3. Lotes de recomendações — mínimo cinco temas (DECIDIDO)

Cada **ronda/lote de recomendações apresentado ao utilizador** para um projeto deve incluir **pelo menos 5 temas distintos, com contexto suficiente para escolher**, organizados por pontuação justificada. O relatório diário leve não tem de gerar um novo lote diariamente: pode atualizar sinais, recência e backlog; quando o sistema apresenta uma nova ronda de escolha, aplica-se o mínimo de cinco.

Cada tema inclui: título/pergunta, ângulo, hook provisório, público/objetivo de projeto, canal/formato/duração propostos, fontes verificáveis com data, tendência/recência, confiança, viabilidade/tempo/custo, motivo do score e validade. Temas reutilizados ainda válidos podem integrar o lote, **sem serem duplicados como ideias novas**.

**Proteção de qualidade proposta:** se não houver 5 temas genuinamente fundamentados, declarar `lote-incompleto` e motivo, continuar a pesquisar fontes autorizadas ou pedir revisão humana; **nunca inventar temas ou inflacionar evidência** apenas para atingir cinco. O utilizador deve perceber que a regra do mínimo não foi cumprida.

## 4. Validade máxima de uma semana e reavaliação (DECIDIDO)

- A recomendação de um tema tem **validade/reutilização máxima de 7 dias** a partir da última **validação de relevância registada**, não desde a primeira publicação ou desde cada visualização no dashboard.
- Dentro dessa janela, pode voltar a ser apresentado/reaproveitado no mesmo projeto, desde que continue adequado à marca e às plataformas, sem criar entradas duplicadas. Guardar referência ao tema original, histórico de uso, data da última validação e expiração.
- **Quando completar 7 dias, o tema passa a estado `em-reavaliacao`**: não se oferece como recomendação atual e não é elegível para **nova aprovação/novo agendamento** até revalidar. Mantêm-se histórico, decisões e referências.
- **Na pesquisa semanal aprofundada**, reavaliar relevância e fontes: se ainda for atual, **renovar com nova validação datada**, versão/justificação e novo período máximo de 7 dias; se estiver ultrapassado, marcar `desatualizado/arquivado`. A revisão pode também concluir **inconclusivo** ou precisar de fonte adicional, sem reintroduzir automaticamente.
- Se a expiração acontecer antes da próxima análise semanal, manter o tema **pendente de reavaliação** até essa análise, sem prolongamento tácito.
- A expiração de uma **recomendação** não apaga um conteúdo já publicado nem altera métricas; peças já aprovadas/em produção têm o seu próprio controlo de versões e gates. Antes de uma **nova publicação** de tema potencialmente desatualizado, pedir verificação editorial apropriada.
- Uma revalidação não equivale a aprovação humana do tema ou da publicação. Alterações materiais ao ângulo/brief requerem nova versão e novo gate de tema.

**Modelo técnico sugerido:** `temaId`, `projetoId`, `versao`, `primeiraDetecaoEm`, `ultimaValidacaoEm`, `validoAte`, `estadoRelevancia`, `fontes`, `historicoReutilizacao`, `reavaliacaoId`, `resultadoReavaliacao`. Estados sugeridos `vigente`, `em-reavaliacao`, `renovado`, `desatualizado`, `inconclusivo`. Os estados de relevância são **ortogonais** a selecionado/aprovado/rejeitado e produção/publicação.

## 5. Seleção múltipla e sugestão de agendamento (DECIDIDO)

O utilizador pode **selecionar um ou vários temas** de um lote (incluindo todos), rejeitar outros e pedir a proposta de planeamento. Não há obrigação de escolher apenas o primeiro ou o de score mais elevado.

Depois da seleção, o Motor 1/planeador recomenda **a ordem de produção e de agendamento por projeto/canal**, com razão explícita:
- urgência/frescura e expiração (temas sensíveis ao tempo primeiro quando fizer sentido);
- relevância para objetivos/público e prioridade indicada pelo utilizador;
- capacidade de produção, dependências e esforço/custo;
- sequência narrativa, diversidade editorial e evitar canibalização/repetição;
- horários/cadência e padrões observados por plataforma, **apenas se houver evidência**, sem inventar «melhor hora»;
- compromissos/campanhas existentes e eventual tema já aprovado/publicado.

**Propor ordem não é executar agendamento nem publicar.** O utilizador pode reordenar, remover e aprovar os temas individualmente; o gate de tema mantém-se obrigatório antes de produzir qualquer peça e o gate final de publicação mantém-se por pacote/conta/plataforma. O plano deve ter estados proposto/aceite/em-curso e versões; alterar agenda/plano não deve criar trabalho pago nem republicação sem autorização.

## 6. Testes de aceitação mínimos

1. O seletor Adicionar mostra um projeto Nexus sem socials; adicioná-lo não inicia pesquisa.
2. Projeto Social configurado, branding completo, mas **inativo**: zero pesquisa/zero novas recomendações.
3. Projeto ativo mas com branding incompleto: bloqueio explícito; nenhuma pesquisa.
4. Dois projetos ativos e dois inativos: só os ativos recebem investigação diária/semanal; os ativos com campanhas/tendências recebem profundidade adicional (opção C).
5. Cada novo lote de recomendações visível para escolha contém **≥5 temas distintos e fundamentados** ou estado explícito de lote incompleto, sem conteúdo inventado.
6. Selecionar 2, 3 ou todos os temas produz uma proposta de ordem, mantendo os restantes intactos.
7. Tema com 6 dias de validação pode ser reutilizado; ao completar 7 dias passa a `em-reavaliacao` e é retirado das novas sugestões/autorizações até à revisão semanal.
8. Reavaliação semanal documenta fontes e decisão: renovação cria nova validade máxima 7 dias, rejeição arquiva; falta de evidência não renova.
9. A reavaliação não apaga decisões, conteúdos, publicações, métricas nem simula aprovação humana.
10. Ordem sugerida é explicável e editável; não envia publicações, não cobra API, não cria guião antes do gate.

## 7. Pontos técnicos por fechar

- Dia/hora do relatório semanal e pesquisa diária (timezone Portugal) e comportamento quando o computador Nexus estiver desligado.
- Frequência mínima de lotes de cinco vs. pedidos do utilizador; critérios de qualidade/score de entrada.
- Representação final dos estados de relevância e filas no schema v1/v2 e idempotência do calendário.
- Se o algoritmo propõe **datas e horas concretas**, além da ordem — depende de canais conectados, calendário editorial e aprovação.

Consultar: `docs/DECISOES.md`, `docs/PROJETOS.md`, `docs/MOTORES.md`, `docs/ALINHAMENTO_CONTRATO_V1.md` e `docs/ROADMAP.md`.
