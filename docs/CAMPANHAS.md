# Conteúdo contínuo e campanhas opcionais — contrato funcional

> **DECIDIDO na entrevista P13-B (20/11/2026):** cada projeto Social tem uma **estratégia editorial contínua** e pode ter **campanhas opcionais**, com objetivo, público, prazo, mensagem, CTA e indicadores próprios. O Motor 1 recomenda oportunidades para as campanhas quando existirem, **sem interromper as recomendações gerais da marca**. O Motor 4 avalia resultados de campanha e evolução global do projeto. Estado: **especificação, não implementação**.

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

**Por decidir:** prioridades relativas, número de campanhas simultâneas, divisão de esforço/cadência entre conteúdos gerais e de campanha, políticas de expiração dos conteúdos após a data final e conflitos no calendário. Estes assuntos não resultam implicitamente da opção B.

## 3. Como os quatro motores trabalham

### Motor 1 — Intelligence
- Mantém investigação diária leve e relatório semanal do projeto Social elegível, tanto sobre **oportunidades gerais** como sobre campanhas ativas.
- Quando existe campanha ativa, pode pesquisar e recomendar temas **específicos do seu objetivo/público/janela**, com evidência, formato, duração e CTA pretendidos.
- Sem campanha, continua a produzir recomendações gerais. Com campanha, **não suprime** o fluxo contínuo; pesos e distribuição de recursos permanecem **P14 pendente**.
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

## 6. Próxima pergunta da entrevista — P14

**Como distribuir prioridade e capacidade do Motor 1/2 entre campanhas ativas e conteúdo contínuo?** Uma divisão fixa, adaptação por desempenho/urgência e supervisão, ou prioridade total às campanhas? Até ser decidido, não fixar percentagens nem implementar uma política de conflito como requisito.

Ver [DECISOES.md](DECISOES.md), [MOTORES.md](MOTORES.md), [METRICAS.md](METRICAS.md), [CICLO_TEMAS.md](CICLO_TEMAS.md) e [ALINHAMENTO_CONTRATO_V1.md](ALINHAMENTO_CONTRATO_V1.md).
