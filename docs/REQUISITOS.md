# Requisitos funcionais e não funcionais — contrato de produto

> Atualizado em 20/11/2026 para refletir a entrevista. **DECIDIDO** = requisito aceite; **PROPOSTO** = pormenor técnico/a validar; **IMPLEMENTADO** exige prova. O dashboard é o separador Social do Nexus, não uma segunda app. A auditoria F0 permanece histórica; diferenças estão em ALINHAMENTO_CONTRATO_V1.md.

## Regras essenciais

1. O Social **não cria projetos Nexus**. Em **Adicionar projeto** apresenta **todos os projetos existentes no catálogo Nexus**, mesmo sem redes ou branding. Selecionar cria um perfil Social em rascunho. **Apenas projetos configurados, ativos e com branding completo** entram na pesquisa. Nem todos os projetos Nexus precisam de ser adicionados.
2. Cada etapa funciona no contexto **do projeto Nexus elegível/ativado e do seu perfil editorial**. Não permitir projetos inventados, contas de outros projetos, identidades de marca cruzadas ou publicação sem permissão.
3. **Quatro motores lógicos aprovados:** **M1 Intelligence**, **M2 Production**, **M3 Distribution & Scheduling (Postiz)** e **M4 Analytics & Learning**. Nexus é dono de UI, aprovações e orquestração de pesquisa/produção; **Postiz agenda e publica independentemente do scheduler Nexus**. Não criar quatro agentes permanentes.
4. **Aprovação humana do tema** antes de iniciar guião/recursos; **aprovação humana do pacote/conta/canal** antes de qualquer publicação.
5. **Design visual detalhado do dashboard depois da funcionalidade**. F1 deve apresentar apenas os controlos e estados mínimos necessários para validar dados e fluxos.

## Requisitos verificáveis

| ID | Obrigação | Critério de aceitação |
|---|---|---|
| R01 | Fonte única de projetos: Nexus | Apenas IDs canónicos de projetos existentes no Nexus |
| R02 | Seletor Adicionar projeto | **Todos os projetos Nexus disponíveis** aparecem independentemente de branding, canais, configuração Social ou OAuth; não há criação de projeto Nexus |
| R03 | Rascunho, configuração, ativação | Adicionar = rascunho; pesquisa só se **Social configurado + ativo + branding completo**; desativar mantém histórico e interrompe trabalho novo |
| R04 | Perfis editoriais e canais | Marca, públicos, objetivos, voz, licenças, formatos e contas por Nexus project; canais associados/permitidos |
| R05 | Pesquisa **diária leve** | Observações com fontes, data, mudança relevante e custo; sem guião antes de gate |
| R06 | Relatório **semanal aprofundado** | Síntese de tendências, concorrência híbrida, oportunidades, evidências e priorização por projeto |
| R07 | Fontes acordadas | YouTube, Instagram, Google/Trends, Reddit, TikTok, X e LinkedIn quando acessíveis legal/tecnicamente, mais fontes oficiais |
| R08 | Scoring adaptativo por projeto | Pontuação/justificação, pesos/versão/confiança; considerar objetivos, tendência, saturação, histórico, viabilidade e custos |
| R09 | Ficha de oportunidade económica | Hook, ângulo, formato, duração, CTA, fontes, riscos e esforço; sem storyboard completo antes da aprovação |
| R10 | Gate de tema | Versão não aprovada não inicia guião, imagens ou render; mudança de versão exige reaprovação |
| R11 | Produção por projeto/formato | Hidden Layer: vídeo vertical narrado; Vefi/UtopIA: vídeo+carrossel; Remotion-first e exportação adaptada por rede |
| R12 | Pacote editável e QA | Guião, storyboard, recursos, prévia, render quando aplicável, relatório técnico/editorial/factual/visual/direitos e licenças |
| R13 | Biblioteca externa reutilizável | `D:\AI\Biblioteca` referenciada por IDs e direitos; media e paths privados fora do Git e do browser |
| R14 | Gate de publicação | Aprovação por versão+hash+plataforma+conta Nexus; alteração relevante invalida autorização |
| R15 | Distribuição híbrida | Conta configurada não significa API autenticada. API oficial só se possível, autenticada, autorizada e com termos cumpridos; caso contrário exportação/publicação manual com comprovativo |
| R16 | Métricas avançadas e atribuição | Retenção, alcance, interação, CTR, UTM, visitas, eventos, conversões e custos, com proveniência, unidade, janela, denominador |
| R17 | Aprendizagem e experiências | Testes controlados com hipótese/variável, amostra, confiança; sinaliza `inconclusiva` e alimenta Motor 1 com dados citáveis |
| R18 | Interface Social mínima no Nexus | **Adicionar mostra todos os projetos Nexus**; configuração e ativação separadas; lista de investigação só ativos+completos; estados de pesquisa/produção e aprovações, sem redesign prematuro |
| R19 | MVP de 3 peças reais | 1 conteúdo real/publicável para cada Hidden Layer, Vefi e UtopIA; fixtures e protótipos não contam |
| R20 | Metas e controlo de custo | Pretender 5–10 peças/semana, 1–3h supervisão, 3–6h desenvolvimento; alvo extra 0€ e teto 25€/mês **não autorizam gastos** |
| R21 | Adaptadores de fornecedores | Trocar render, pesquisa, TTS, imagem e rede sem reescrever núcleo nem duplicar ferramentas Nexus |

## Pesquisa adaptativa, recomendações e calendário — decisões vinculativas

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R22 | Apenas projetos ativos recebem investigação | Perfil Social **adicionado/configurado, branding completo e ativo** é pesquisado; perfil completo mas inativo não gera pesquisa nem novas recomendações |
| R23 | Pesquisa adaptativa (P2-C) | Todos os projetos aptos recebem pesquisa leve diária e relatório semanal; projetos prioritários/campanhas/tendências fortes recebem aprofundamento adicional |
| R24 | Lote mínimo de cinco temas | Cada lote visível de seleção oferece **≥5 temas distintos e fundamentados**, ou sinaliza explicitamente insuficiência de temas credíveis sem os inventar |
| R25 | Validade e reutilização | Tema reutilizável por no máximo **7 dias** após última validação; depois estado de reavaliação, com decisão documentada na investigação semanal |
| R26 | Seleção múltipla | Utilizador pode selecionar 2 ou mais temas, não apenas o primeiro ou de maior score |
| R27 | Calendário pós-produção (P3-B adaptada) | **Ao escolher temas não aparecem datas/horas.** Depois do vídeo/carrossel produzido, prévia e informação relevante incluem proposta justificada e editável com ordem/datas/horas/plataformas; operador aprova pacote+calendário no segundo gate; **só então Motor 3 agenda** (automático permitido ou manual assistido) |

Distinguir `estadoRelevancia` da aprovação editorial e do estado de publicação. A **seleção de temas** é o gate 1 e **não inclui calendário**; o gate 2 **após produção** inclui prévia, pacote e calendário, antes de entregar ao Motor 3. A caducidade não apaga posts ou métricas. Contrato completo: [CICLO_TEMAS.md](CICLO_TEMAS.md).

## Postiz como agendador e calendário consultável — decisões vinculativas

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R28 | **Agendamento/publicação através de Postiz** | Depois do segundo gate, Motor 3 envia agendamento aprovado ao Postiz; **Nexus não dispara publicações**. Estado agendado exige recibo real |
| R29 | **Consultar calendário Postiz no dashboard Nexus** | Mostrar publicações agendadas e já publicadas, com data/hora, plataforma, conta, projeto, preview e ligação quando disponível |
| R30 | Consultar todos os estados operacionais | Mostrar também falhadas, incertas, canceladas e pendentes (com proveniência distinguida de propostas locais), filtros por projeto/conta/rede/período |
| R31 | Sincronização segura e identificável | IDs Postiz preservados, reconciliação sem duplicação, última atualização visível, snapshots desatualizados assinalados e erros explícitos |
| R32 | Isolamento e história | Projetos Social inativos mantêm consulta histórica e agendamentos previamente confirmados. Alterações diretas no Postiz refletem-se após sincronização; não cancelar automaticamente |

**Regras:** calendário do Nexus = **projeção de leitura do Postiz**, não scheduler paralelo. O visual avançado permanece adiado, mas consulta funcional e filtros são requisitos da integração Motor 3. O Postiz pode disponibilizar posts de outras origens; não associar ao projeto Nexus sem mapa de identificação válido. **P5-C decidiu que editar/reagendar/cancelar só se faz no Postiz**, a partir de uma ligação contextual no Nexus quando disponível. O Nexus não executa operações mutáveis do calendário. Ver [POSTIZ.md](POSTIZ.md).

## Motor 4 e calendário somente de leitura — decisões confirmadas

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R33 | Calendário Nexus com edição externa (P5-C) | Consultar agendados/publicados/falhas/pendentes no Nexus; abrir post no Postiz para editar, reagendar ou cancelar. **Nenhuma mutação Postiz iniciada pelo dashboard** |
| R34 | Quatro motores lógicos separados | M1 pesquisa, M2 produz, M3 Postiz distribui/agende e sincroniza estados, **M4 analisa métricas e aprendizagem**, sem sobreposição de proprietário da publicação |
| R35 | Motor 4 — métricas independentes | Ingerir dados com fonte, janela e disponibilidade de Postiz/rede/site/app, guardar observações e experiências, atribuição prudente, e devolver sinais ao M1 sem poder agendar/publicar |
| R36 | Isolamento de falhas | Falha de métricas/experiências M4 não suspende publicação já confirmada no Postiz; falha M3 não apaga análises anteriores. Sem duplicar scheduler Nexus |
| R37 | Atualização após alteração externa | Reagendamento/cancelamento feito no Postiz aparece no Nexus após sincronização, com hora de atualização; sem falsificar aprovação de conteúdo alterado |

**Quatro motores** não significa quatro daemons, quatro LLMs residentes ou quatro serviços isolados. A fronteira é **lógica e contratual**; o Nexus continua com UI/autorizações e Postiz com execução real de publicação.

## Revisões localizadas e recuperação de versões — P7-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R38 | Revisão localizada de conteúdo | Ao pedir alteração em cena/narração/animação, Motor 2 preserva partes não afetadas **quando possível**; se a alteração implicar dependências, explica impacto e reconstrói apenas o necessário |
| R39 | Histórico imutável das versões | Cada revisão alterada tem versão/hash distintos e registo do que foi reutilizado/reconstruído; operador compara e recupera uma versão anterior |
| R40 | Gate de publicação por versão | A aprovação final não se transfere para pacote editado; Motor 3/Postiz só recebe a versão exata e calendário final aprovados |
| R41 | Revisão integrada na fila de produção | Rever a peça A não suspende desnecessariamente a produção das peças B/C; garantir isolamento de versões/ficheiros e respeitar quotas |
| R42 | QA e custo de revisão | Validar elementos afetados e produto final; não regenerar o vídeo integral por omissão, não consumir fornecedor pago sem aprovação |

**P7-B é a decisão funcional; detalhes de UI, orçamento de revisões e técnica de render parcial são posteriores.** Contrato: [REVISOES.md](REVISOES.md).

## Feedback associado ao vídeo — P8-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R43 | Feedback no instante do vídeo | Ao pausar a prévia, operador pode criar nota ligada ao instante e à versão visualizada, com texto do pedido |
| R44 | Múltiplas notas e comentários gerais | Uma revisão pode incluir várias notas temporizadas e instruções globais, sem render automático por cada comentário |
| R45 | Rastreabilidade entre versões | Feedback guarda a versão de origem; se timings mudarem, não reaplicar timestamps antigos à nova versão sem validação |
| R46 | UI mínima de revisão (sem editor completo) | Reprodutor, pausa, comentário temporizado, lista de notas e instruções gerais, com envio explícito; sem exigência de timeline completa ou desenho de anotações |
| R47 | Aprovação preservada | Enviar notas para revisão não aprova a versão nem entrega a peça ao Postiz; após alterações exige revisão final da nova versão |

**P8-B é funcionalidade a implementar no dashboard Social do Nexus na fase de revisão, mas não autoriza antecipar o design visual avançado.** Ver [REVISOES.md](REVISOES.md).

## Correções automáticas com limite — P9-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R48 | Máximo três tentativas por ronda de revisão | Uma aplicação inicial do feedback + até duas correções automáticas após falhas QA, **no máximo 3 tentativas no total**; não reiniciar automaticamente o ciclo |
| R49 | QA e paragem antecipada | Verificar depois de cada tentativa; parar se atingir critérios, bloqueio técnico, quota/tempo ou necessidade de fornecedor pago não aprovado |
| R50 | Falhas persistentes transparentes | Após insucesso, apresentar melhor rascunho disponível e lista de falhas/inconclusões; não declarar validado nem passar a Postiz automaticamente |
| R51 | Evidência por tentativa | Guardar versão, índice 1–3, testes executados, falhas e alterações, distinguindo automação validada de revisão editorial/factual humana |
| R52 | Novo ciclo mediante pedido humano | Uma ronda adicional só começa com pedido explícito do operador, sem loop infinito nem chamadas pagas silenciosas |

**P9-B é limite funcional de qualidade, não autorização para gastos nem para ultrapassar os gates humanos.** Contrato em [REVISOES.md](REVISOES.md).

## Canais e formatos contratados

| Projeto (apenas se existir no Nexus com socials e Social ativado) | Formato | Canais de intenção |
|---|---|---|
| The Hidden Layer | Vídeo vertical narrado em inglês, faceless | Instagram, YouTube, X, TikTok |
| Vefi | Vídeo, carrossel | Instagram, TikTok, X, LinkedIn, YouTube |
| UtopIA Solutions | Vídeo, carrossel | Instagram, LinkedIn, TikTok, X, YouTube |

Canais de intenção **não são contas ligadas**. Conectores só operam após verificação de permissões reais. Car Enterprise ou outros projetos só entram se cumprirem critérios Nexus, sociais e opt-in.

## Qualidade, resiliência e segurança

- Fonte/dados externos são não confiáveis; distinguir afirmação factual, inferência e hipótese, com revisão humana para publicações factuais.
- Credenciais, chaves, contas, paths absolutos e ficheiros privados nunca entram no Git/JSON destinado ao browser.
- Validar recursos por manifestos, hashes, direitos de uso e permissões da marca. IA generativa só onde acrescenta valor; Higgsfield apenas quando expressamente autorizado.
- Uma chamada de aprovação é **decisão gravada**, não prova de publicação. Na ausência de ID/URL/recibo remoto, usar estado explícito; timeout pós-envio exige reconciliação, nunca repetição cega.
- Escrita atómica e donos separados (motor vs servidor Nexus); repos de outras marcas só leitura.
- Novas versões de schema não podem reinterpretar ou apagar histórico, decisões, observações ou provas.
- Números observados, estimados e não disponíveis são estados distintos; não tratar `null` como zero nem correlação como causalidade.
- Pesquisa/manual e publicação/manual são modos legítimos até adaptadores oficiais estarem comprovados; não simular resultados.
- Cumprir condições dos fornecedores e lei aplicável (direitos, RGPD, consentimento) sem presumir acesso irrestrito.

## Definição de MVP e sequência

**F1 — funcionalidade do Nexus antes do visual:** seletor de todos os projetos Nexus, adição como rascunho Social, validação de branding e ativação, leitura real do contrato e UI mínima, gates persistentes, prévias protegidas. **F2 — conteúdo:** pesquisa e produção com prova de Remotion/imagem e um piloto técnico publicável. **F3 — Postiz e publicação/métricas:** pacote aprovado é agendado/publicado pelo Postiz, e o Nexus consulta calendário e histórico de posts com estados sincronizados. Resultados datados, primeira aprendizagem e comparação honesta.

**MVP de produto:** três conteúdos reais/publicáveis, um por cada projeto inicial elegível e ativado no Nexus, com marca, fontes, gates, pacote, custos e estado de publicação/medição. Conteúdo preparado e conteúdo publicado têm estados diferentes; se faltar publicação não inventar métricas.

**Só depois**: estudo de UX/arquitetura da informação visual aprofundado, layouts, gráficos, animações e acabamento final do dashboard Social, apoiado em fluxos e dados que já funcionem.

Ver docs/PROJETOS.md, MOTORES.md, METRICAS.md, BIBLIOTECA.md, ALINHAMENTO_CONTRATO_V1.md e ROADMAP.md.
