# Os quatro motores — especificação funcional

> Estado: fronteiras e gates DECIDIDOS; entrevista de 20/11/2026 incorporada. Pesos exatos, esquemas de adaptadores e cron técnico PROPOSTOS / por provar. Este ficheiro não autoriza instalar dependências nem executar publicações.

## Fronteiras

- **Nexus**: interface Social, sessões e limites de agentes, permissões, aprovações humanas persistentes, pausa, diagnóstico e coordenação.
- **Motor 1 — Intelligence**: encontra e avalia oportunidades. Não gera o guião antes da aprovação.
- **Motor 2 — Production**: cria recursos e pacote a partir do tema aprovado.
- **Motor 3 — Distribution & Scheduling (Postiz)**: recebe apenas pacotes aprovados, agenda/publica no Postiz e devolve estados operacionais e recibos ao dashboard Nexus e ao Motor 4.
- **Motor 4 — Analytics & Learning**: recolhe métricas, conversões e custos com proveniência, compara experiências e envia recomendações justificadas ao Motor 1; **não agenda nem publica**.
- **Adaptadores**: traduzem chamadas para serviços externos e ferramentas locais; nenhum fornecedor deve definir o modelo de domínio.
- **Dados**: o seletor **Adicionar** mostra todos os projetos Nexus. Para o **Motor 1** executar, o projeto tem de ter sido adicionado ao Social, estar **ativo e com perfil/branding completo** e conta/canal configurado, mesmo sem OAuth; identidade canónica Nexus em todas as etapas. Nunca inferir projeto pelo cwd nem criar projeto independente no Social.

## Motor 1 — Intelligence

### Entradas

Perfil do projeto, público, objetivo, campanhas, orçamento/tempo disponível, histórico do projeto, resultados anteriores, regras de marca, temas recusados e fontes elegíveis. Memória global só de padrões gerais, sem copiar assets, conteúdo ou dados privados entre marcas.

### Pesquisa — cadência e fontes decididas

**Operação diária leve:** **apenas projetos Social configurados, com branding completo e ativos**; varrer sinais novos e alterações com custo limitado e registar fontes, sem guião/storyboard/geração. Um projeto configurado mas inativo nunca é pesquisado. **Estratégia adaptativa C:** todos os ativos/configurados têm pesquisa diária leve; projetos com campanhas, tendências fortes ou alta prioridade recebem investigação adicional. **Relatório semanal aprofundado:** abrange todos os ativos/configurados com profundidade proporcional, sintetiza concorrentes/histórico e **reavalia temas com validade expirada**. O scheduler é o Nexus quando suportar a periodicidade; execução manual até lá. Relatório semanal não equivale a soma sem análise das pesquisas diárias.

Fontes candidatas acordadas: **YouTube, Instagram, Google/Google Trends, Reddit, TikTok, X e LinkedIn**, além de sites e documentação oficiais, quando acessíveis. Distinguir dados oficiais, observação pública, comentário comunitário e inferência. Uma tendência que aparece numa fonte não é automaticamente tendência global. Dados temporais têm período, mercado/região, plataforma e método de recolha.

**Concorrência híbrida:** perfis de referência explicitamente escolhidos + descoberta de contas/conteúdos comparáveis pelo motor, sempre com motivo e evidência. Sem acesso, declarar limitação em vez de inventar métricas.

Investigar:
- temas e pesquisas com interesse crescente;
- posts que resultam comparados com o histórico da conta/segmento, não só número absoluto de views;
- concorrentes/contas de referência autorizados;
- formatos, duração, hook, ritmo, tipo visual, CTA e timings publicados;
- perguntas recorrentes do público e ângulos originais, sem copiar criativos de terceiros;
- relação com objetivos do projeto e viabilidade dos recursos/licenças.

**Ritmo de referência:** pesquisa leve diária, síntese semanal com oportunidades recomendadas. Implementação de agendamento só quando demonstrada no Nexus; pesquisa manual na fase inicial.

### Cadência semanal adaptativa — P18-B (DECIDIDO)

M1 recomenda **metas de conteúdos/publicações por semana, separadas por projeto Nexus Social e plataforma**, dentro de **mínimos/máximos definidos e ajustáveis pelo operador**. Considera objetivos, tendências e oportunidades, métricas reais M4, campanhas, agenda e **capacidade/quota provada do Motor 2/Nexus**, com justificação e incerteza. A falta de dados não justifica precisão falsa. Uma meta não constitui tema aprovado e **não inicia renders nem publicação**. Quando o mínimo não for alcançável por temas de qualidade ou capacidade, apresentar défice/limitação em vez de inventar conteúdos. Mantém-se o gate 1 **apenas para escolher temas**; a meta semanal não antecipa a proposta de datas/horas do gate 2, após produção. Contrato [HORARIOS.md](HORARIOS.md) §1.1.

### Alternativas de qualidade perante défice — P19-B (DECIDIDO)

Quando as metas semanais de P18-B não puderem ser cumpridas por falta de temas aprovados/viáveis, o Motor 1 realiza **investigação complementar seletiva e limitada em recursos** para propor **temas evergreen, novos ângulos editoriais com diferenças substantivas e oportunidades históricas revalidadas com fontes e datas**. Não reclassificar automaticamente tema caducado como vigente: manter a validade **até sete dias a contar da última validação** e as regras de lotes com cinco temas distintos/insuficiência declarada. Evidência e confiança obrigatórias, incluindo histórico e risco de duplicação. **O utilizador decide temas no gate 1; a investigação não autoriza produção nem publicação.**

Se a investigação não trouxer opções suficientemente fortes, qualidade/recursos impedirem a produção ou o utilizador não aprovar alternativas, **assinalar défice e aceitar semana com menos posts**, mostrando causa e eventual sugestão de ajustar a cadência, sem alterar limites do operador. Nunca usar fornecedores pagos não autorizados nem alterar o Postiz. Ver [HORARIOS.md](HORARIOS.md) §1.2 e [CICLO_TEMAS.md](CICLO_TEMAS.md) §5.5.

### Deteção de repetição semântica e revisitas úteis — P20-B (DECIDIDO)

Motor 1 compara **novos temas com o histórico editorial do mesmo projeto**: pergunta, ângulo, argumentos/factos, publicações anteriores, propostas em produção/aprovadas e, quando acessíveis, agendamentos. **Mostrar conteúdos parecidos e respetivos links/IDs**, explicar grau/razão da semelhança, e **recomendar revisita apenas quando houver valor novo concreto** (factos/evidências novas, atualização, ponto de vista substantivamente diferente ou aprofundamento). **Não confundir assunto geral com ideia duplicada** nem apresentações em várias redes de uma mesma peça-base com temas repetidos.

A regra aplica-se também a oportunidades evergreen, ângulos e revalidações P19-B: **não inflacionar os cinco temas distintos do lote nem preencher cadência com variações triviais**. Marcar evidência/confiança, reconhecer falta de histórico, e conservar o primeiro gate humano **só para escolha de temas**. Memória e licenças **isoladas por projeto Nexus**, sem cópias cruzadas de marcas. **Não definir algoritmos, limiares numéricos nem fornecedores antes de provas técnicas.** Contrato [MEMORIA_EDITORIAL.md](MEMORIA_EDITORIAL.md).

### Plataformas recomendadas por tema — P16-B (DECIDIDO)

Motor 1 deve recomendar **as redes mais adequadas ao tema e projeto Social**, não todas as redes configuradas por defeito. Usar público e contexto editorial, formatos e duração, tendências verificáveis, histórico comparável do Motor 4, capacidade de produção e elegibilidade de conta/canal. Registar **origem, razão e confiança**; não inventar métricas ou afirmar capacidade de API não testada. A ficha pode apresentar redes **recomendadas** e outras **não selecionadas** com limitações quando relevante. A escolha do tema no primeiro gate **não exige selecionar redes definitivas nem calendário**; M2 apenas inicia variantes dos destinos recomendados e elegíveis. Na revisão pós-produção o utilizador pode acrescentar ou remover destinos, pedindo QA/produção adicionais antes do segundo gate. Contrato [VARIANTES.md](VARIANTES.md).

### Saída antes do gate

Ficha económica com: id/versão/projeto/campanha, tema/pergunta, público, proposta de hook, ângulo e diferenciação, fontes+consultadoEm, sinais mensuráveis, formato e duração sugeridos, canal, CTA previsto, estimativa de esforço/custo, riscos editoriais/licenças, pontuação e confiança.

**Lote de escolha:** cada ronda de recomendações entregue ao utilizador contém **pelo menos cinco temas distintos e fundamentados por projeto**. A pesquisa diária pode atualizar o catálogo sem apresentar um lote novo. Se houver menos de cinco temas credíveis, mostrar `lote-incompleto`, nunca inventar ideias ou evidência. Temas ainda vigentes podem ser reutilizados na semana, mas não duplicados como originais.

**Validade temática:** tema pode ser reutilizado até **7 dias desde a última validação de relevância**. Ao atingir esse limite, passa a `em-reavaliacao` e deixa de ser recomendado para nova seleção/agendamento até à **pesquisa semanal aprofundada**, que decide, com fontes e data, se renova por nova janela máxima de 7 dias, arquiva ou mantém inconclusivo. Preservar histórico e não confundir expiração com retirada de publicações já feitas.

**Seleção múltipla:** o utilizador **escolhe apenas um ou vários temas**; cada seleção positiva da versão atual constitui a **aprovação humana do tema** e permite iniciar o Motor 2. **Não pedir calendário, datas ou horas nesta fase.** A proposta detalhada de agendamento só aparece **depois de a peça estar produzida**, no segundo gate humano de revisão pré-publicação.

Não produzir guião completo, imagens, música, voz, animação ou render antes de receber **aprovação humana do tema/versão**. Contrato completo: [CICLO_TEMAS.md](CICLO_TEMAS.md).

### Classificação adaptativa por projeto (princípio decidido; pesos propostos)

O score é calibrado para o objetivo, público e histórico **do projeto Nexus selecionado**, nunca universal. Critérios candidatos: relevância para projeto, tendência/velocidade, procura real, saturação da concorrência, histórico comparável, impacto potencial na conversão, esforço/custo e confiança dos dados. Guardar rubrica, pesos e evidências usados. Na ausência de dados, a confiança cai; nunca inventar percentagens ou potencial de viralidade.

### Campanhas opcionais e conteúdo contínuo — P13-B (DECIDIDO)

O Motor 1 mantém **recomendações gerais e contínuas para cada projeto Social elegível** e, quando houver campanhas ativas criadas pelo utilizador, acrescenta **recomendações focadas nos objetivos, público, mensagem, CTA e prazos de cada campanha**. Cada oportunidade identifica se é geral ou a qual campanha pertence; **não obrigar `campaignId` para o conteúdo contínuo**. Campanhas não desativam pesquisa geral nem substituem gates, mínimos de temas e prazo de validade. **P14-B decidiu prioridade adaptativa** entre conteúdo contínuo e campanhas, baseada em prazos/urgência, tendências comprovadas, objetivos, histórico (M4) e capacidade real de produção (M2). O Motor 1 **explica e propõe** prioridades sem percentagens fixas, mantém oportunidades gerais e **permite ajuste humano antes da escolha de temas**, sem pedir calendário nem datas/horas nesta etapa. Ver [CAMPANHAS.md](CAMPANHAS.md).

## Motor 2 — Production

**Pré-condição:** projeto Nexus adicionado ao Social, ativo, configuração e branding completos, conta/formatos permitidos e oportunidade aprovada para a versão atual.

**P19-B:** a investigação adicional do Motor 1 **não acrescenta trabalho à fila de M2** até o operador selecionar explicitamente temas novos. Um défice de cadência **não** suspende QA, não reduz critérios editoriais e não provoca renders repetidos para preencher a meta.

**P18-B:** metas semanais por projeto/plataforma são **objetivos indicativos**, não ordens para renderizar. A fila automática recebe apenas temas efetivamente selecionados no primeiro gate; capacidade insuficiente ou limites/QA não cumpridos devem gerar estado de défice e decisão humana, nunca criação automática para preencher quota.

**P14-B:** a fila automática de produção usa as prioridades aceites para ordenar o trabalho selecionado **quando possível** e sempre sob os limites reais de capacidade/quota do Nexus. Ajustar prioridades não inicia produção de temas não escolhidos, não interrompe renders aprovados, não altera a agenda do Postiz e não concede custos adicionais.

**P13-B:** o Motor 2 recebe conteúdos **gerais** ou **ligados a uma campanha opcional**. Preserva o identificador de campanha, objetivo, mensagem e CTA nos manifests/variantes para verificação e métricas; mesma fila automática e mesmas aprovações. Uma campanha nunca concede publicação automática.

**Formatos por perfil da entrevista:** The Hidden Layer — vídeo vertical narrado em inglês, faceless, voz consistente; Vefi e UtopIA — vídeos e carrosséis. Canais desejados: Hidden Layer (Instagram/YouTube/X/TikTok), Vefi (Instagram/TikTok/X/LinkedIn/YouTube), UtopIA (Instagram/LinkedIn/TikTok/X/YouTube). Não confundir intenção editorial com ligação à API de cada conta.

Pipeline parametrizável:
1. Brief/objetivo/público e restrições do projeto.
2. Pesquisa factual e verificação de direitos/afirmações.
3. Guião, storyboard, ritmo, marcações de tempo, CTA e variantes.
4. Assets: imagens geradas/licenciadas, gráficos, elementos de marca, narração e áudio permitidos.
5. Contact sheet/animatic para revisão antes de renders pesados.
6. Composição programática, legendas, grafismos, motion design.
7. Validação técnica e editorial, prévia, pacote editável e exportações adaptadas por plataforma.
8. Registo de hashes, proveniência, versões, falhas e custos.

Ferramentas:
- **Remotion-first** e FFmpeg quando a integração e as licenças estiverem provadas; HyperFrames mantém-se opção alternativa.
- **Imagem/vídeo generativo**: sessão Codex/Nexus ou ferramentas das subscrições já existentes se a capacidade real for comprovada, **apenas quando acrescenta valor**; caso contrário produção supervisionada. **Higgsfield** apenas aprovado pontualmente, sem custo não autorizado.
- **Voz/TTS**: adaptador (voz humana ou fornecedor legalmente autorizado), sem promessa de ElevenLabs ou custo recorrente. Timing/legendas carecem de prova.
- **Marcas**: usar bibliotecas próprias e assets autorizados; nenhuma marca/voz deve passar para outro projeto por engano.

### Peça-base e variantes por plataforma — P15-B (DECIDIDO)

O Motor 2 cria **uma peça-base editável, versionada e reutilizável**, associada a tema aprovado, projeto Nexus, branding e campanha opcional. Para as plataformas configuradas e tecnicamente elegíveis, prepara **adaptações seletivas e justificadas** quando o benefício editorial/técnico o exigir, em vez de criar produções inteiramente independentes ou duplicar renders por sistema. Exemplos: hook, duração, proporção, legendas, thumbnail, título, copy/hashtags e CTA. **Se a base já serve numa rede, reutilizar render e modificar só metadados necessários**.

Cada variante conserva referência à base, manifesto de alterações/recursos reaproveitados, versão/hash, custo, restrições de canal e QA por plataforma. Mudanças de base não alteram silenciosamente variantes já aprovadas; assinalar descendentes afetadas. **Não assumir compatibilidade nem capacidades API sem prova**, mesmo que exista conta configurada.

**P16-B decidiu o conjunto inicial:** M1 **recomenda plataformas com maior adequação por tema**, tendo em conta audiência, formato, tendências e histórico real (M4), com motivos/confiança; M2 **prepara somente destinos recomendados e elegíveis** inicialmente, sem um número fixo de versões. **Primeiro gate mantém-se apenas escolha de temas** e a recomendação de redes não é aprovação ou pedido de datas. **Depois da produção**, o dashboard apresenta prévias e pacote/calendário por plataforma+conta para aprovação humana **individual** de versão/hash, copy/CTA e horário. O operador pode **acrescentar/remover destinos** na revisão final; novos destinos requerem compatibilidade, preparação e QA pela M2 antes da aprovação. Ver [VARIANTES.md](VARIANTES.md).

### Verificação factual por afirmação e risco — P21-B (DECIDIDO)

O **Motor 2** deve identificar afirmações verificáveis no **guião, narração, texto em cena, números/gráficos, títulos/copy e CTA das variantes**, relacionar cada afirmação com evidências que realmente a suportem (origem, data, país/período e limitações) e classificar **risco, confiança e estado**. A verificação é **proporcional ao risco**, exigindo provas mais fortes para temas financeiros/fiscais, legais, médicos, de segurança, alegações comerciais sensíveis e história controversa. Distinguir facto, inferência, opinião e projeção; fontes contraditórias e dados desatualizados **não são considerados confirmação**.

**As afirmações centrais não verificadas bloqueiam a marcação da peça como «pronta» e a entrega a M3/Postiz.** Casos sensíveis, contraditórios ou insuficientes devem ser apresentados com fontes/trechos e escalados para **revisão humana na etapa final**, sem substituir o segundo gate por confirmação manual de todas as frases. O operador pode pedir **correção localizada (P7-B) e feedback por timestamp (P8-B)**; alterações materiais ou em títulos/CTA de variantes exigem reexecutar QA na parte afetada, guardar versão/hash e obter aprovação final do pacote corrigido. **QA de peça-base não valida automaticamente todas as variantes.**

**M1 recolhe fontes para a oportunidade, mas a aprovação de tema não verifica automaticamente o guião final.** M4/engagement não constituem prova factual. Não inventar pesquisas, métricas, fontes nem provas quando inacessíveis; sem gastos pagos não aprovados. O modo de apresentar fontes **ao público** é decisão pendente P22; o relatório interno por afirmação é obrigatório. Contrato [FACT_CHECK.md](FACT_CHECK.md).

### Revisões inteligentes e localizadas (DECIDIDO, P7-B)

Durante a revisão pré-publicação, o utilizador pode solicitar alterações pontuais (texto, narração, imagens, animações, ritmo, transições). O Motor 2 deve **preservar as partes já validadas** e alterar/renderizar apenas as partes afetadas, **quando tecnicamente possível**, sem regeneração integral por omissão. Identificar dependências entre cenas/áudio/legendas, justificar quando a mudança tiver de abranger mais partes e manter QA coerente.

Cada revisão gera **nova versão identificável e imutável**, com histórico, comparação e possibilidade de restaurar versões anteriores; preservar ficheiros de projeto/recursos, hashes e proveniência. Versões não aprovadas permanecem no Motor 2, e **só a versão exata aprovada no segundo gate** chega ao Motor 3/Postiz. A revisão de uma peça não bloqueia a fila automática das restantes quando os recursos Nexus o permitam. Custos extra/fornecedores pagos exigem autorização.

**P8-B decidiu** que a UI funcional do Nexus associa **comentários ao instante pausado da prévia** (com vários comentários e notas gerais), e que cada pedido referencia a versão exata para evitar notas deslocadas após alterações de duração. **Não** criar editor visual completo. **P9-B decidido: máximo de 3 tentativas por ronda de revisão (1 execução inicial + até 2 correções automáticas)**, com QA após cada uma, paragem antecipada em caso de sucesso/bloqueio/limite de custos e relatório de defeitos remanescentes; sem envio ao Postiz enquanto não houver gate final e QA adequados. Contrato: [REVISOES.md](REVISOES.md).

Saídas: pacote e manifesto por versão, **ficheiros de projeto editáveis**, guião, storyboard, recursos editáveis, prévia, MP4 em formato vídeo ou ficheiros de carrossel quando aplicável, checklist de **QA técnico, editorial, factual, visual e de direitos**, resumo de custos. **Gate final ainda dentro da revisão pré-publicação:** apresentar ao operador a prévia e proposta completa e explicada de agendamento (ordem entre peças, datas/horas, canais e contas), assim como copy, CTA, legendas, alertas e verificações; permitir correções antes de aprovar. Um pacote reprovado pode ser revisto numa nova versão; um pacote alterado tem de ser reaprovado.

### Horários e calendário propostos — P17-B (DECIDIDO)

**Só depois da produção, no gate final**, propor datas/horas/ordem por conta+plataforma, com justificações e confiança: dados de desempenho do **Motor 4** quando observáveis e comparáveis, público/fuso, tipo de conteúdo, prazo/urgência de campanhas e **agenda confirmada do Postiz**. Sem histórico suficiente, mostrar **estimativas iniciais identificadas**, não «melhor horário» inventado. Mostrar avisos de conflito e dados de calendário potencialmente desatualizados. O operador **edita qualquer horário ou destino antes de aprovar** o pacote, respeitando versão/hash e gates por variante/conta/copy. **Motor 2 não cria scheduler próprio**; só o Motor 3 envia agendamentos finais aprovados ao Postiz. Horários fixos/pesos técnicos não estão decididos. Ver [HORARIOS.md](HORARIOS.md).

## Motor 3 — Distribution & Scheduling (Postiz)

### Distribuição

**O Motor 3 usa o Postiz** para **agendar e publicar**, sem depender do scheduler de publicações do Nexus. A UI Social do Nexus deve **consultar o calendário Postiz**: agendados, publicados, falhados, cancelados e pendentes, com filtros, previews, datas/horas e última sincronização. O Nexus não mantém uma segunda fila de disparo. Ver [POSTIZ.md](POSTIZ.md).

**P13-B:** a publicação pode estar associada a campanha opcional ou ao fluxo editorial contínuo. Preservar o vínculo na camada Social/Nexus para medição; não pressupor entidade de campanha nativa no Postiz. O Postiz continua a publicar apenas pacotes aprovados, sem alterar o calendário por prioridade da campanha.

**Pré-condição de entrada no Motor 3:** o Motor 2 terminou a peça e o utilizador aprovou explicitamente **a versão/hash do pacote final, conta/plataforma, texto e calendário proposto** na revisão pré-publicação. Antes desse ponto, não executar agendamento nem publicação. Motor 3 é o executor do agendamento aprovado; não pede ao utilizador que decida datas na primeira seleção de temas. Em caso de mudança material no pacote ou calendário, o segundo gate tem de ser repetido.

- **P15-B:** distribuir a partir da peça-base e das **variantes por plataforma** criadas pelo M2 só quando úteis; preservar IDs, versões/hashes, QA e diferenças de texto/CTA. M3 **não gera vídeos novos** nem escolhe variações de forma autónoma. Adapta metadados técnicos quando autorizado e compatível, sem desvirtuar a ideia.
- Preparar pacote por **conta+plataforma+versão/hash da variante** e respetiva copy/data aprovada; **cada destino tem gate final independente** e só os aprovados seguem para Postiz.
- **Aprovação final explícita e persistente** antes de enviar/publicar.
- Na fase inicial, validar o **Postiz** e capacidade real dos canais; se integração não for elegível, preparar agendamento manual com instruções, ficheiros e estado pendente até prova de ação humana. Nunca usar scheduler do Nexus como alternativa para publicação. Integração automática apenas via Postiz e permissões verificadas. Não chamar `agendado` a um pacote somente exportado. Registar confirmação de agendamento e, separadamente, de publicação.
- Estados separados: rascunho, por aprovar, autorizado, exportado, em envio, publicado, falhou, incerto. Uma falha após envio sem recibo não autoriza retry cego.

### Leitura do calendário Postiz pelo Nexus

- O Postiz é a fonte de verdade para estados e horas de publicações **agendadas/publicadas** através dele.
- O Motor 3 disponibiliza um leitor/sincronizador de posts e recibos para o dashboard Social do Nexus, incluindo histórico de publicados, posts previstos, falhas e cancelamentos.
- O calendário Nexus é **somente uma projeção com filtros**, não mecanismo de execução nem editor. **Reagendar, editar e cancelar só no Postiz** (P5-C), através de ligação contextual no Nexus quando disponível. Alterações feitas no Postiz regressam pela sincronização. Mostrar `lastSyncedAt` e erros; na indisponibilidade do Postiz, mostrar último snapshot como desatualizado, não ocultar dados nem indicar êxito.
- Cruzar IDs `nexusProjectId`, `postizIntegrationId`, `postizPostId` sem atribuição adivinhada; posts sem mapeamento podem ser apresentados sem projeto na vista global, quando autorizado.
- **O Motor 3 disponibiliza recibos e estados operacionais ao Motor 4**, através de contratos versionados; não calcula scores, funis ou conclusões de experiências.

## Motor 4 — Analytics & Learning

**Motor lógico aprovado, independente do mecanismo de publicação:** consome eventos/recibos e IDs comprovados do Motor 3/Postiz, recolhas próprias ou autorizadas de APIs de redes, métricas manuais, UTMs e eventos agregados de sites/apps. Se Postiz estiver indisponível, manter histórico e analisar dados já existentes sem afetar a agenda.

**Entradas:** `PublicationStatusReceipt` (M3), `MetricSnapshot` (fontes de rede/Postiz com data), `ConversionEvent`, `CreativeMetadata`, custos e objetivos do projeto Nexus.

**P18-B:** M4 fornece resultados reais/atribuição por projeto, plataforma e campanha para que M1 **proponha cadência semanal adaptativa sob limites humanos**. Não determina quotas sozinho, não produz temas e não força publicações quando a proposta não é viável.

**P17-B:** o Motor 4 fornece **observações reais datadas de desempenho por conta/plataforma/horário**, com janelas, amostras e incerteza, para apoiar sugestões pós-produção; sem dados, sinaliza ausência e não inventa picos de audiência. Não escolhe horários de publicação autonomamente nem altera o calendário Postiz.

**P13-B:** medir **KPIs por campanha** (janela/objetivo) e **desempenho geral do projeto** (incluindo conteúdos sem campanha) em vistas diferenciadas, sem duplicar conversões ou inventar dados/causalidade. A aprendizagem devolve sinais de ambos ao Motor 1.

**Saídas:** medições normalizadas/históricas, resultados comparativos, hipóteses e experiências com confiança, e `EvidenceBasedLearning` para M1. **Nunca altera a agenda do Postiz, não produz conteúdo e não aprova publicações.**

### Medição

Conceitos decididos: retenção (tempo médio, conclusão e curva quando acessível), impressões/alcance, engagement, CTR, UTMs, tráfego, eventos do site/app e conversões (registo, ativação, lead, wishlist/venda conforme projeto). O KPI prioritário é configurado no perfil de cada projeto, não apenas views. 

Guardar observações com origem, data de recolha, período e estado de disponibilidade. Ligar IDs de publicação e, quando houver, UTMs / analytics do site / eventos da app. Separar resultados observados, estimativas e atribuição indireta. Usar métricas específicas por projeto, não pressupor equivalência entre redes.

### Aprendizagem e experiências controladas

Combinar observações reais por **projeto Nexus**, sem cruzar públicos/branding. Cada hipótese de experiência é registada antes de publicar, compara uma variável principal e uma janela/medida compatível; amostra insuficiente produz resultado **inconclusivo**. Conclusões são recomendações explicáveis para a próxima pesquisa, não licença de autopublicação.

**P20-B:** o Motor 4 mantém metadados observáveis e histórico de peças/publicações do **mesmo projeto Nexus** para fundamentar memória editorial; não é prova automática de novidade, não define bloqueio absoluto de temas e não permite cruzar dados privados entre marcas. Aprendizagens passadas servem como evidência, sem autorizar novos renders/posts.

Guardar características criativas estruturadas: tema, categoria, hook e duração, modelo narrativo, ritmo, voz, estilo, legendas, CTA, formato, horário, variantes, custos e fornecedores. Uma experiência tem hipótese, variável principal, métricas, janelas comparáveis, resultados e grau de confiança.

**Loop**: observação real → análise por projeto → recomendação justificada para Motor 1. Sem promover automaticamente uma conclusão baseada em poucos dados; experiências inconclusivas continuam visíveis. O Motor 4 não pode publicar nem agendar com base numa boa pontuação; apenas propõe hipóteses e recomendações para o Motor 1.

## Ordenação de desenvolvimento e UI

A **funcionalidade vem antes do design visual detalhado**. F1 usa somente o separador Social existente do Nexus com interface mínima e acessível para dados, estado e aprovações; só depois dos motores, contas e métricas funcionarem deve ser desenhada a experiência visual avançada do dashboard. Não criar uma app à parte nem sete páginas decorativas para representar dados fictícios.

## Erros, interrupção e auditabilidade

Cada etapa devolve estados como concluída, bloqueada, indisponível ou erro com motivo, evidência e recibos. Ações externas exigem verificações antes de repetir; outputs incompletos não são resultados válidos. A posse de execução e limites continuam no Nexus. Produtos futuros podem usar outros provedores com o mesmo contrato.

## Relações

- Arquitetura de **quatro motores lógicos** aprovada: [DECISOES.md](DECISOES.md) SG-D042; não implica quatro agentes permanentes.

- Contrato de ciclo de temas e prioridades: [CICLO_TEMAS.md](CICLO_TEMAS.md).
- Contrato técnico histórico: auditoria-f0.md §3 e §6.
- Mudanças necessárias: ALINHAMENTO_CONTRATO_V1.md.
- Métricas e experiência: METRICAS.md.
- Segurança, direitos e biblioteca: BIBLIOTECA.md.
