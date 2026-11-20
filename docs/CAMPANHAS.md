# Conteúdo contínuo e campanhas opcionais — contrato funcional

> **DECIDIDO nas entrevistas P13-B e P14-B (20/11/2026):** cada projeto Social tem uma **estratégia editorial contínua** e pode ter **campanhas opcionais**, com objetivo, público, prazo, mensagem, CTA e indicadores próprios. O Motor 1 recomenda oportunidades para as campanhas quando existirem, **sem interromper as recomendações gerais da marca**. O Motor 4 avalia resultados de campanha e evolução global do projeto. Estado: **especificação, não implementação**.

## 1. Estrutura funcional e isolamento

- O **projeto Nexus** continua a ser a identidade canónica. A sua configuração Social inclui marca, objetivos gerais, público, canais e estratégia editorial contínua. Nem todos os projetos Nexus precisam de usar o Social.
- **Campanha é opcional**, pertence a um único projeto Nexus/Social e **não cria um projeto Nexus**. O operador pode criar, editar, pausar e concluir campanhas dentro do perfil Social, com controlos de autorização e histórico.
- **Conteúdo contínuo** funciona mesmo sem nenhuma campanha ativa: educação, demonstração, notoriedade, crescimento de audiência e outros objetivos gerais. Um tema/peça/publicação **pode não ter `campaignId`**; isto não é um erro.
- **Campanha** agrupa um objetivo específico, público, janela temporal, mensagem/ângulo, CTA, canais/formato, restrições e KPIs. O conteúdo pertencente à campanha mantém vínculo ao projeto e branding vigente.
- Para campanhas com datas ou marcos críticos, indicar dependências, validade da mensagem e atenção editorial — **não** publicar por falta de aprovação nem modificar o Postiz automaticamente.
- Não misturar identidade, dados de clientes, recursos, contas ou aprendizagem de marcas diferentes. Uma campanha não concede permissões adicionais.

## 2. Configuração mínima de uma campanha

**Campos funcionais aprovados pelo conceito P13-B:** nome/identificador, projeto, **objetivo**, **público**, **prazo ou janela**, **mensagem**, **CTA** e **métricas/KPIs próprios**. O operador pode escolher canais/contas e formatos apropriados, e especificar os assets e restrições de marca. Há sempre uma identidade de projeto subjacente.

**Modelo técnico proposto** (por validar no contrato Nexus): `campaignId`, `nexusProjectId`, `name`, `objective`, `audience`, `startAt/endAt`, `message`, `cta`, `kpiDefinitions`, `status=draft|active|paused|completed|archived`, `accounts`, `constraints`, `brandProfileVersionId`. A associação `campaignId` em `Opportunity`, `Creative`, `Publication`, `MetricSnapshot` e `ConversionEvent` pode ser **nula** para conteúdo contínuo. Não obrigar a envolver todos os conteúdos numa campanha.

**P14-B decidiu prioridades adaptativas**, sem percentagem fixa, com explicação e ajuste humano **antes da escolha dos temas**. Permanecem **por decidir** número máximo de campanhas simultâneas, fórmulas/pesos de scoring, limites numéricos de esforço, efeitos de expiração de campanha e conflitos no calendário. A proposta de prioridades não é calendário de publicações.

## 3. Como os quatro motores trabalham

### Motor 1 — Intelligence
- Mantém investigação diária leve e relatório semanal do projeto Social elegível, tanto sobre **oportunidades gerais** como sobre campanhas ativas.
- Quando existe campanha ativa, pode pesquisar e recomendar temas **específicos do seu objetivo/público/janela**, com evidência, formato, duração e CTA pretendidos.
- Sem campanha, continua a produzir recomendações gerais. Com campanha, **não suprime** o fluxo contínuo; **P14-B** recomenda prioridade adaptativa baseada em urgência/prazos, tendências, objetivos, desempenho anterior e capacidade real do Motor 2, sempre explicada e ajustável pelo operador antes do primeiro gate de temas.
- Apresentar a origem de cada tema (conteúdo contínuo ou campanha X) e permitir selecionar múltiplos temas no primeiro gate, **sem calendário inicial**. Respeitar lotes de ≥5 sustentados ou assinalar insuficiência, validade máxima de 7 dias/reavaliação semanal.

### Motor 2 — Production
- A fila automática de produção P4-B recebe temas aprovados e respeita voz, recursos, CTA e regras do projeto e da campanha, se aplicável.
- Continua a permitir revisões localizadas P7-B, notas temporizadas P8-B, até 3 tentativas de QA P9-B e segundo gate com prévia e proposta de calendário **só após produção**.
- Uma campanha pode sugerir urgência e mensagem; **não autoriza gerar ou publicar** sem gates e recursos válidos.

### Motor 3 — Distribution & Scheduling (Postiz)
- Recebe apenas versões e calendários aprovados. O **Postiz** executa agendamento/publicação; o Nexus apresenta calendário e estados em modo leitura.
- Associar o post à campanha, quando existe, para relatórios e filtros, sem presumir que o Postiz tem uma entidade campanha nativa idêntica; **a associação é da camada Social/Nexus**.
- Reagendar, editar ou cancelar posts agendados é feito **no Postiz**, não no dashboard Nexus (P5-C).

### Motor 4 — Analytics & Learning
- Avalia **KPIs da campanha** por objetivo, janela e métrica definida, incluindo conversões/UTMs apenas se observáveis e atribuíveis, **separadamente** das métricas de **crescimento geral do projeto**.
- Conteúdo contínuo permanece analisável sem ID de campanha. Os resultados de campanha podem contribuir para aprendizagem do projeto, mas não somar métricas com definições/denominadores incompatíveis.
- Relatórios distinguem dados observados, estimados, ausentes e atribuição incerta. Motor 4 não altera agendamento nem aloca produção automaticamente.

## 3.1. Prioridades adaptativas — P14-B (DECIDIDO)

**Quando coexistem campanhas ativas e conteúdo editorial contínuo**, Motor 1 deve **propor uma distribuição de atenção e prioridade**, sem percentagens pré-definidas e sem eliminar o fluxo geral. Usar informação disponível e com origem conhecida:

- **Prazo, urgência e elegibilidade temporal** da campanha (lançamento com janela real versus campanha sem urgência); nenhuma urgência suspende gates.
- **Tendências e oportunidades comprovadas**, qualidade/confiança e caducidade de temas, sem inventar que um tema é viral.
- **Objetivos e público do projeto/campanha**, impacto esperado qualificado como hipótese e adequação editorial.
- **Desempenho histórico e aprendizagem do Motor 4**, com incerteza e comparabilidade explícitas; sem dados, não inventar ROI.
- **Capacidade efetiva da fila Motor 2**, tempos/recursos de render, limites e custos do Nexus; não atribuir capacidade não demonstrada.

**A proposta mostra o motivo** por que uma campanha recebe mais ou menos atenção e que oportunidades gerais continuam recomendadas. **O operador pode ajustar a proposta de prioridade antes de selecionar temas**, sem ser obrigado a preencher uma percentagem. Pode continuar a escolher vários temas, apenas temas, no **primeiro gate P3-B**; **datas, horas, canais finais e calendário completo só aparecem após produção**, no segundo gate humano. O ajuste de prioridade **não equivale a aprovação de temas** nem a ordem de publicação. Podes ignorar recomendações de prioridade e escolher outros temas apresentados.

**Motor 2:** a produção automática de temas já selecionados respeita os limites P4-B e as prioridades aceites quando viáveis. Alterar prioridades não deve cancelar renders em curso, alterar versões já aprovadas, ultrapassar reservas do Nexus nem agir sobre agendamentos Postiz. Se uma campanha terminar antes de poder ser produzida, assinalar risco de caducidade e pedir decisão, em vez de inventar data ou publicar sem aprovação.

**Motor 4:** fornecer resultados observados e comparáveis, sem escolher temas ou realocar autonomamente capacidade. **Postiz continua responsável apenas por publicações previamente aprovadas**.

**Propostas técnicas por validar:** `PriorityProposal` com `projectId`, `campaignId?`, `priorityReasons`, `evidenceRefs`, `urgency`, `estimatedProductionLoad`, `confidence`, `operatorAdjustments` e revisão. Não fixar pesos/quotas/percentagens sem decisão ou medição real.

## 4. Interface funcional mínima no Nexus

- Cada perfil Social ativo/configurado tem **conteúdo contínuo** por defeito, sem campanha obrigatória.
- Operador pode **criar uma campanha opcional** com objetivo/público/prazo/mensagem/CTA/KPIs, mantendo as configurações de marca do projeto.
- As sugestões do Motor 1 distinguem campanhas de temas gerais e permitem escolher ambos.
- Uma peça e a respetiva publicação apresentam contexto **campanha ou conteúdo contínuo**; filtros e resultados não perdem o ID do projeto.
- Evitar antecipar design gráfico detalhado; a interface mínima funcional pode mostrar estados e seleção.

## 5. Testes de aceitação

1. Projeto Social ativo **sem campanhas** recebe oportunidades e produz conteúdo contínuo mediante os gates habituais.
2. Criar campanha opcional na Vefi não cria outro projeto Nexus, não altera branding e não liga contas sem autorização.
3. Com uma campanha ativa, o Motor 1 apresenta oportunidades para o objetivo da campanha **e continua a recomendar temas gerais**.
4. Um tema geral pode ser selecionado, produzido, aprovado, publicado e medido **sem `campaignId`**.
5. Uma peça de campanha preserva `campaignId` desde a oportunidade até à publicação e à medição, quando disponível.
6. O Motor 4 permite consultar a campanha e o desempenho geral do projeto **sem misturar janelas ou afirmar conversões não observadas**.
7. Suspender/terminar campanha não apaga publicações nem altera agendamentos no Postiz. O efeito sobre novos trabalhos fica sujeito a decisões posteriores; nenhum gasto ou envio automático.
8. Temas de campanha não ultrapassam gate de tema, revisão final ou limites de produção/custo por terem prazo curto.
9. Uma campanha urgente pode receber maior prioridade fundamentada, mas **continuam visíveis oportunidades gerais** e o operador pode ajustar a proposta antes de escolher os temas.
10. Não há datas/horas de agendamento no ecrã de seleção dos temas, apesar de existir prioridade; o calendário só é proposto depois de M2 produzir.
11. Uma campanha com dados históricos fracos não recebe um ROI inventado nem força cancelamento de peças ou alteração de posts já agendados no Postiz.

## 6. Próxima pergunta da entrevista — P15

**P14-B fechado:** prioridade adaptativa justificada e ajustável antes da escolha de temas, sem quotas fixas. **P15 por decidir:** ao produzir um conteúdo destinado a várias redes, usar o mesmo ficheiro/copy, variantes adaptadas por plataforma a partir de uma peça-base ou produções integralmente independentes? Esta decisão não altera o gate final nem a execução no Postiz.

Ver [DECISOES.md](DECISOES.md), [MOTORES.md](MOTORES.md), [METRICAS.md](METRICAS.md), [CICLO_TEMAS.md](CICLO_TEMAS.md) e [ALINHAMENTO_CONTRATO_V1.md](ALINHAMENTO_CONTRATO_V1.md).
