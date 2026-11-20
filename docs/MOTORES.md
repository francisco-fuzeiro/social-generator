# Os três motores — especificação funcional

> Estado: fronteiras e gates DECIDIDOS; entrevista de 20/11/2026 incorporada. Pesos exatos, esquemas de adaptadores e cron técnico PROPOSTOS / por provar. Este ficheiro não autoriza instalar dependências nem executar publicações.

## Fronteiras

- **Nexus**: interface Social, sessões e limites de agentes, permissões, aprovações humanas persistentes, pausa, diagnóstico e coordenação.
- **Motor 1 — Intelligence**: encontra e avalia oportunidades. Não gera o guião antes da aprovação.
- **Motor 2 — Production**: cria recursos e pacote a partir do tema aprovado.
- **Motor 3 — Distribution, Analytics & Learning**: exporta/distribui sob autorização, recolhe métricas, avalia experiências e produz sinais para o Motor 1.
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

### Saída antes do gate

Ficha económica com: id/versão/projeto/campanha, tema/pergunta, público, proposta de hook, ângulo e diferenciação, fontes+consultadoEm, sinais mensuráveis, formato e duração sugeridos, canal, CTA previsto, estimativa de esforço/custo, riscos editoriais/licenças, pontuação e confiança.

**Lote de escolha:** cada ronda de recomendações entregue ao utilizador contém **pelo menos cinco temas distintos e fundamentados por projeto**. A pesquisa diária pode atualizar o catálogo sem apresentar um lote novo. Se houver menos de cinco temas credíveis, mostrar `lote-incompleto`, nunca inventar ideias ou evidência. Temas ainda vigentes podem ser reutilizados na semana, mas não duplicados como originais.

**Validade temática:** tema pode ser reutilizado até **7 dias desde a última validação de relevância**. Ao atingir esse limite, passa a `em-reavaliacao` e deixa de ser recomendado para nova seleção/agendamento até à **pesquisa semanal aprofundada**, que decide, com fontes e data, se renova por nova janela máxima de 7 dias, arquiva ou mantém inconclusivo. Preservar histórico e não confundir expiração com retirada de publicações já feitas.

**Seleção múltipla:** o utilizador **escolhe apenas um ou vários temas**; cada seleção positiva da versão atual constitui a **aprovação humana do tema** e permite iniciar o Motor 2. **Não pedir calendário, datas ou horas nesta fase.** A proposta detalhada de agendamento só aparece **depois de a peça estar produzida**, no segundo gate humano de revisão pré-publicação.

Não produzir guião completo, imagens, música, voz, animação ou render antes de receber **aprovação humana do tema/versão**. Contrato completo: [CICLO_TEMAS.md](CICLO_TEMAS.md).

### Classificação adaptativa por projeto (princípio decidido; pesos propostos)

O score é calibrado para o objetivo, público e histórico **do projeto Nexus selecionado**, nunca universal. Critérios candidatos: relevância para projeto, tendência/velocidade, procura real, saturação da concorrência, histórico comparável, impacto potencial na conversão, esforço/custo e confiança dos dados. Guardar rubrica, pesos e evidências usados. Na ausência de dados, a confiança cai; nunca inventar percentagens ou potencial de viralidade.

## Motor 2 — Production

**Pré-condição:** projeto Nexus adicionado ao Social, ativo, configuração e branding completos, conta/formatos permitidos e oportunidade aprovada para a versão atual.

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

Saídas: pacote e manifesto por versão, **ficheiros de projeto editáveis**, guião, storyboard, recursos editáveis, prévia, MP4 em formato vídeo ou ficheiros de carrossel quando aplicável, checklist de **QA técnico, editorial, factual, visual e de direitos**, resumo de custos. **Gate final ainda dentro da revisão pré-publicação:** apresentar ao operador a prévia e proposta completa e explicada de agendamento (ordem entre peças, datas/horas, canais e contas), assim como copy, CTA, legendas, alertas e verificações; permitir correções antes de aprovar. Um pacote reprovado pode ser revisto numa nova versão; um pacote alterado tem de ser reaprovado.

## Motor 3 — Distribution + Analytics + Learning

### Distribuição

**Pré-condição de entrada no Motor 3:** o Motor 2 terminou a peça e o utilizador aprovou explicitamente **a versão/hash do pacote final, conta/plataforma, texto e calendário proposto** na revisão pré-publicação. Antes desse ponto, não executar agendamento nem publicação. Motor 3 é o executor do agendamento aprovado; não pede ao utilizador que decida datas na primeira seleção de temas. Em caso de mudança material no pacote ou calendário, o segundo gate tem de ser repetido.

- Adaptar legenda, proporção, duração, thumbnail, CTA, hashtags e dados por rede sem desvirtuar a ideia.
- Preparar pacote por **conta+plataforma+versão**; apresentar ao humano o que será enviado.
- **Aprovação final explícita e persistente** antes de enviar/publicar.
- Na fase inicial: preparar **agendamento manual** com instruções, ficheiros e estado pendente até prova de ação humana; integração automática apenas com API oficial autorizada e capacidade de scheduling validada. Não chamar `agendado` a um pacote somente exportado. Registar confirmação de agendamento e, separadamente, de publicação.
- Estados separados: rascunho, por aprovar, autorizado, exportado, em envio, publicado, falhou, incerto. Uma falha após envio sem recibo não autoriza retry cego.

### Medição

Conceitos decididos: retenção (tempo médio, conclusão e curva quando acessível), impressões/alcance, engagement, CTR, UTMs, tráfego, eventos do site/app e conversões (registo, ativação, lead, wishlist/venda conforme projeto). O KPI prioritário é configurado no perfil de cada projeto, não apenas views. 

Guardar observações com origem, data de recolha, período e estado de disponibilidade. Ligar IDs de publicação e, quando houver, UTMs / analytics do site / eventos da app. Separar resultados observados, estimativas e atribuição indireta. Usar métricas específicas por projeto, não pressupor equivalência entre redes.

### Aprendizagem e experiências controladas

Combinar observações reais por **projeto Nexus**, sem cruzar públicos/branding. Cada hipótese de experiência é registada antes de publicar, compara uma variável principal e uma janela/medida compatível; amostra insuficiente produz resultado **inconclusivo**. Conclusões são recomendações explicáveis para a próxima pesquisa, não licença de autopublicação.

Guardar características criativas estruturadas: tema, categoria, hook e duração, modelo narrativo, ritmo, voz, estilo, legendas, CTA, formato, horário, variantes, custos e fornecedores. Uma experiência tem hipótese, variável principal, métricas, janelas comparáveis, resultados e grau de confiança.

**Loop**: observação real → análise por projeto → recomendação justificada para Motor 1. Sem promover automaticamente uma conclusão baseada em poucos dados; experiências inconclusivas continuam visíveis. O modelo não pode publicar com base numa boa pontuação sem aprovação humana.

## Ordenação de desenvolvimento e UI

A **funcionalidade vem antes do design visual detalhado**. F1 usa somente o separador Social existente do Nexus com interface mínima e acessível para dados, estado e aprovações; só depois dos motores, contas e métricas funcionarem deve ser desenhada a experiência visual avançada do dashboard. Não criar uma app à parte nem sete páginas decorativas para representar dados fictícios.

## Erros, interrupção e auditabilidade

Cada etapa devolve estados como concluída, bloqueada, indisponível ou erro com motivo, evidência e recibos. Ações externas exigem verificações antes de repetir; outputs incompletos não são resultados válidos. A posse de execução e limites continuam no Nexus. Produtos futuros podem usar outros provedores com o mesmo contrato.

## Relações

- Contrato de ciclo de temas e prioridades: [CICLO_TEMAS.md](CICLO_TEMAS.md).
- Contrato técnico histórico: auditoria-f0.md §3 e §6.
- Mudanças necessárias: ALINHAMENTO_CONTRATO_V1.md.
- Métricas e experiência: METRICAS.md.
- Segurança, direitos e biblioteca: BIBLIOTECA.md.
