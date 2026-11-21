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

## Branding inteligente, rastreável e aprovado — P10-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R53 | Importação inteligente em modo de leitura | A partir de um projeto Nexus adicionado, examinar **apenas fontes explicitamente autorizadas** (Nexus, site, documentação, repo, assets) e preparar perfil Social proposto, **sem escrever nas fontes** |
| R54 | Proveniência e incerteza | Cada dado inferido apresenta origem/data/confiança ou é marcado em falta/conflitante; não inventar cores, fontes, funcionalidades ou claims |
| R55 | Validação humana do branding | Operador revê, edita/completa e **aprova uma versão**; antes disso o perfil não é branding validado/completo |
| R56 | Ativação independente da importação | Mesmo com branding aprovado, se projeto estiver **inativo**, Motor 1 não pesquisa nem recomenda. Ativar explicitamente com canais configurados; importação não cria contas nem projetos |
| R57 | Segurança e isolamento | Repo em leitura, permissões por projeto, não misturar assets de outras marcas nem guardar segredos/binários em GitHub; sem acesso, fornecer preenchimento manual |
| R58 | Versão e gate de marca | Identificar perfil de marca validado e seu histórico; alterações posteriores não substituem silenciosamente assets/pacotes aprovados |

**Contrato funcional:** [BRANDING.md](BRANDING.md). A política de deteção/revalidação de mudanças após aprovação é uma decisão separada (P11).

## Atualização supervisionada de branding — P11-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R59 | Deteção periódica de alterações | Verificar periodicamente **fontes autorizadas**, por projeto, comparando com o último branding validado; não assumir mudança definitiva |
| R60 | Proposta com evidência e comparação | Apresentar campos anteriores e propostos, origem/data, confiança/conflitos; evitar avisos duplicados sobre mesma diferença |
| R61 | Aprovação humana de nova versão | Operador aceita, rejeita ou corrige. **Só aprovação explícita** cria nova versão oficial; alterações detetadas não substituem perfil validado |
| R62 | Segurança/limites | Leitura apenas com permissão vigente, sem escrita em repo/website, sem custos não aprovados; falhas da fonte não são tratadas como mudança confirmada |
| R63 | Isolamento e conteúdos existentes | P11 não inicia pesquisa para projetos Social inativos nem altera automaticamente posts agendados no Postiz, posts publicados ou identidades de outras marcas |

**Horário exato do scan, notificações e política para criativos ainda por publicar não estão fechados**; este último tema passa à P12. Contrato [BRANDING.md](BRANDING.md).

## Auditoria dos criativos após mudança de branding — P12-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R64 | Auditoria desencadeada por branding aprovado | Após aprovação de **nova versão de marca**, identificar criativos do mesmo projeto potencialmente afetados, com versão anterior/atual e referências a assets |
| R65 | Cobertura de estados do conteúdo | Verificar **em produção, pendente de aprovação, aprovado não enviado e agendado no Postiz**, sem editar conteúdos automaticamente |
| R66 | Proposta de revisão localizada | Mostrar elementos divergentes, impacto e correções locais sugeridas; operador **decide individualmente atualizar, manter ou adiar**, respeitando custos e QA |
| R67 | Gates e histórico de versões | Revisão de conteúdo altera versão/hash e exige **nova aprovação final**; peça aprovada com dependência material afetada é assinalada para decisão antes de envio, sem reutilizar autorização obsoleta |
| R68 | Postiz só com revisão manual | Para posts agendados, exibir alerta e ligação para o Postiz, **sem editar/cancelar/reagendar nem travar remotamente**; sincronizar depois a ação feita pelo operador |
| R69 | Sem impacto transversal | Preservar publicações anteriores, histórico e marcas de outros projetos; falhas da auditoria não são tratadas como prova de conformidade |

**P12-B não autoriza regeneração automática nem alteração da agenda do Postiz.** Contrato: [BRANDING.md](BRANDING.md) §4.2.

## Conteúdo contínuo e campanhas opcionais — P13-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R70 | Estratégia editorial contínua por projeto | Projeto Social ativo e elegível recebe recomendações gerais mesmo sem nenhuma campanha ativa |
| R71 | Campanhas opcionais por projeto Nexus | Operador pode criar campanha com **objetivo, público, prazo, mensagem, CTA e KPIs próprios**; a campanha não cria projeto Nexus nem conta social |
| R72 | Recomendações gerais e de campanha simultâneas | M1 recomenda temas alinhados com campanhas ativas **sem deixar de pesquisar e recomendar conteúdo geral**, identificando o contexto de cada oportunidade |
| R73 | Conteúdo sem campanha | Temas, criativos, publicações e métricas de conteúdo contínuo funcionam com `campaignId` ausente/nulo; não obrigar a campanha fictícia |
| R74 | Medição separada | M4 mostra KPIs por campanha e crescimento geral do projeto, com janelas/atribuição e dados observados sem dupla contagem de conversões |
| R75 | Gates e distribuição preservados | Conteúdo de campanha segue aprovações normais e o Postiz é o único agendador; campanhas ativas não autorizam despesas ou publicações por si |

**P14-B decidido:** prioridade adaptativa e justificável, ajustável pelo operador antes de escolher temas, sem percentagens fixas. Pesos e quotas concretos ficam para validação técnica. Contrato [CAMPANHAS.md](CAMPANHAS.md).

## Prioridade adaptativa para campanhas e conteúdo contínuo — P14-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R76 | Proposta adaptativa e explicada | M1 sugere prioridade entre conteúdo contínuo e campanhas ativas com base em **urgência/prazos, tendências comprovadas, objetivos, desempenho anterior (M4) e capacidade real de M2**; apresenta motivos e incertezas |
| R77 | Sem divisão fixa nem exclusão do fluxo geral | Nenhuma quota/percentagem rígida é obrigatória; uma campanha urgente pode ganhar destaque mas **as recomendações gerais continuam disponíveis** |
| R78 | Ajuste humano antes da escolha de temas | Operador pode ajustar a prioridade proposta **antes de selecionar temas**; continua a escolher **apenas temas** no primeiro gate, sem calendário, datas ou horas |
| R79 | Sem autonomia adicional | Proposta/ajuste não aprova temas, não inicia renders não selecionados, não autoriza gastos, não altera conteúdos aprovados nem reprograma publicações no Postiz |
| R80 | Capacidade e evidência | Proposta respeita recursos Nexus e dados M4 reais; capacidades/ROI desconhecidos ficam declarados como desconhecidos, e risco de deadline é assinalado |
| R81 | Independência do segundo gate | Datas/horas, canais/contas e ordem de publicação são apresentados **após produção** e aprovados na revisão final, não confundidos com prioridade editorial |

**P14-B não define pesos exatos nem percentagens.** Ver [CAMPANHAS.md](CAMPANHAS.md), [CICLO_TEMAS.md](CICLO_TEMAS.md).

## Peça-base e variantes por plataforma — P15-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R82 | Peça-base reutilizável | M2 produz peça-base editável por tema aprovado, com manifesto de cenas/recursos, versão/hash, projeto Nexus, branding e campanha opcional |
| R83 | Adaptação seletiva por rede | Adaptar hook, duração, proporção, legendas, thumbnail, título, copy/hashtags e CTA **só quando há justificação** editorial/técnica; reutilizar render quando adequado |
| R84 | Histórico e dependências entre variantes | Cada variante referencia a base/versão e regista alterações, recursos reutilizados, custo e QA; alteração da peça-base identifica variantes afetadas, sem sobrescrever aprovações |
| R85 | Compatibilidade e direitos reais | Validar restrições/formatos e capacidades por plataforma e conta; não inventar elegibilidade de API, não violar brand kit/licenças, fallback manual explicitado |
| R86 | Aprovação individual por destino | **Depois da produção**, mostrar prévia/variante + plataforma/conta + copy/CTA + data/hora sugerida; exigir segundo gate por versão/hash e pacote específico antes de M3/Postiz |
| R87 | Primeiro gate permanece sem calendário | Seleção inicial apenas de temas; formatos/redes podem ser recomendações fundamentadas, mas **datas e horas só são propostas após produção** |
| R88 | Sem regeneração/duplicação por obrigação | Se a base é adequada para várias redes, reutilizar componentes ou ficheiro; não gerar variantes artificiais nem consumir fornecedor pago sem aprovação |

**P16-B decidido:** o Motor 2 produz inicialmente só para destinos recomendados pelo M1; o operador acrescenta/remove destinos na revisão final. Contrato [VARIANTES.md](VARIANTES.md).

## Seleção inicial de variantes recomendadas — P16-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R89 | Recomendação de plataformas por tema | M1 indica os destinos mais adequados por **público, formato, tendências, histórico M4 e contexto do projeto**, com evidência/confiança, sem assumir OAuth/capacidades de API |
| R90 | Produção seletiva inicial | M2 cria peça-base e prepara **apenas variantes dos destinos recomendados e elegíveis**, sem gerar uma para todas as contas configuradas por omissão ou estabelecer número fixo |
| R91 | Reutilização de render | Se duas plataformas recomendadas podem usar a mesma peça-base, reutilizar artefacto e adaptar só o necessário, sem custo/renders redundantes |
| R92 | Acrescentar/remover redes na revisão final | **Depois da produção**, operador pode adicionar ou retirar redes da proposta; novos destinos são preparados e sujeitos a QA por M2 antes de serem elegíveis para aprovação |
| R93 | Primeiro gate sem redes/calendário finais | Na seleção inicial operador **escolhe apenas temas**; redes sugeridas por M1 são informativas, datas/horas e contas definitivas apenas na proposta de revisão após produção |
| R94 | Controlo de aprovação por destino | Apenas variantes+versões/hashes+plataforma+conta+copy+calendário **explicitamente aprovadas no gate 2** podem seguir a M3/Postiz; remover proposta não afeta post já agendado |
| R95 | Incerteza e restrições explícitas | Sem evidência plausível/viabilidade de destinos, mostrar ausência/limitação em vez de inventar recomendações, publicar automaticamente ou consumir serviços pagos |

**P16-B fechado:** redes recomendadas por tema, com possibilidade de ajuste na revisão final. A escolha de **horários/dias por rede no calendário pós-produção** é uma decisão separada (P17). Ver [VARIANTES.md](VARIANTES.md).

## Dias e horários recomendados por plataforma — P17-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R96 | Sugestão pós-produção por conta/plataforma | Depois da produção, mostrar **dias e horas propostos** por variante, rede e conta, com fuso horário e justificação; **nunca no primeiro gate de escolha de temas** |
| R97 | Evidência e adaptação | Considerar histórico M4 real quando disponível, audiência/fuso, formato/tipo, janela/urgência de campanha e agenda existente no Postiz; não alegar causalidade ou garantia de alcance |
| R98 | Estimativa honesta sem métricas | Sem dados suficientes, mostrar fallback **explicitamente rotulado como estimativa**, sem apresentar «melhor horário» como facto |
| R99 | Conflitos e qualidade da agenda | Consultar posts agendados no Postiz quando possível, assinalar sobreposições, prazos inviáveis ou agenda desatualizada; **não alterar posts remotamente** |
| R100 | Controlo total no segundo gate | Operador pode alterar **datas, horas, contas, plataformas e ordem** da proposta antes de aprovar cada pacote (variante/hash/copy/agendamento); só o aprovado passa ao M3 |
| R101 | Fusos e calendário real | Guardar horário e fuso claros, incluindo horário de verão; «agendado» exige recibo Postiz; Nexus não cria scheduler nem edita agendamentos enviados |
| R102 | Aprendizagem sem autonomia de distribuição | M4 fornece métricas datadas e confiança para melhorar sugestões futuras, sem mudar a agenda ou ultrapassar gates |

**Política de frequência/volume por projeto permanece por decidir (P18).** Contrato [HORARIOS.md](HORARIOS.md).

## Cadência semanal adaptativa por projeto e plataforma — P18-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R103 | Meta semanal adaptativa por projeto/rede | Motor 1 propõe **quantidade de posts por semana** por projeto Social e plataforma, baseada em objetivos, campanhas, tendências, resultados reais M4 e capacidade M2/Nexus, com razões/incertezas |
| R104 | Limites humanos | Operador define **mínimos e máximos** por projeto/plataforma e pode rever a recomendação; não inventar valores globais nem exigir a mesma cadência de todas as marcas |
| R105 | Viabilidade e qualidade | Propostas consideram quotas, tempo, custos e disponibilidade de temas aprovados; **mínimo inviável gera indicação de défice e causa**, não conteúdo fictício/baixo critério |
| R106 | Cadência não é aprovação | Definir/alterar frequência **não** gera conteúdos sem gate 1, não dispensa QA/segundo gate, não agenda/publica e não autoriza APIs pagas |
| R107 | Diferenciar frequência e horário | Quantidade semanal planeada é separada dos dias/horas P17-B, propostos **apenas após produção** e aprovados por pacote na revisão final |
| R108 | Estados rastreáveis | Distinguir metas recomendadas/ajustadas de temas selecionados, produção concluída, agendamento Postiz confirmado e publicação verificada; sem falsa contagem |

**Números mínimos/máximos ainda não foram fornecidos. P19-B decide procurar alternativas de qualidade para seleção humana e aceitar cadência inferior se houver insuficiência**. Contrato [HORARIOS.md](HORARIOS.md) §1.1.

## Resposta a défices de cadência com alternativas de qualidade — P19-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R109 | Detetar défice com dados fiáveis | Meta semanal por projeto/rede superior ao volume viável/selecionado → mostrar défice e distinguir temas por aprovar, em produção, posts agendados comprovados e publicações reais |
| R110 | Pesquisar alternativas editoriais fundamentadas | M1 procura **evergreen, novos ângulos e oportunidades históricas revalidadas** do mesmo projeto, com fontes, datas, qualidade e grau de confiança |
| R111 | Preservar 7 dias e diversidade real | Tema histórico caducado só volta a estar vigente com **revalidação fundamentada**, sem contar reformulações triviais como temas distintos nem inventar lote de cinco |
| R112 | Seleção humana e gates intactos | Alternativas surgem como **recomendações para seleção no gate 1**; não converter em temas aprovados, renders ou calendário; gate 2 continua obrigatório por pacote/conta/canal |
| R113 | Cadência inferior é resultado legítimo | Se as alternativas não forem boas/viáveis ou o operador não as selecionar, **aceitar menos publicações** e mostrar causas, sem alterar silenciosamente os limites mínimos/máximos |
| R114 | Recuperação limitada e sem gastos surpresa | Investigar apenas em fontes e quotas permitidas pelo Nexus; sem serviços pagos não aprovados, sem baixar QA/direitos e **sem cancelar/reagendar/agendar posts Postiz** |

**P19-B fecha a política de défice; P20 deverá decidir a deteção de redundância e revisita de temas já publicados.** Ver [HORARIOS.md](HORARIOS.md) §1.2 e [CICLO_TEMAS.md](CICLO_TEMAS.md) §5.5.

## Deteção de repetição e revisitas com valor — P20-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R115 | Memória editorial por projeto Nexus | M1 compara semanticamente cada oportunidade com peças **publicadas, agendadas e aprovadas/em produção quando disponíveis** do mesmo projeto, com isolamento de marcas e referências reais |
| R116 | Comparação por significado e ângulo | Detetar sobreposição de pergunta, mensagem, factos e ângulo, não apenas título/palavras-chave; distinguir assunto amplo de duplicação efetiva |
| R117 | Explicar semelhanças ao operador | A proposta mostra ID/link, data/estado e resumo dos conteúdos relacionados, motivos de similitude e incerteza do diagnóstico |
| R118 | Revisita só com valor acrescentado fundamentado | Tema conhecido só regressa às recomendações quando há **nova evidência, perspetiva substantivamente diferente, atualização ou aprofundamento**, identificando fontes e diferenças |
| R119 | Qualidade de lotes e recuperação P19 | Reformulações triviais não contam como temas independentes para atingir cinco recomendações nem preencher cadência; revisitas respeitam validade/revalidação temática de 7 dias |
| R120 | Variantes e revisões não são novos temas | Publicações multirrede da mesma peça-base ou correções de versão conservam identidade editorial; não bloquear criação de variante por falsa duplicação |
| R121 | Seleção humana preservada | M1 nunca converte avaliação de novidade em tema aprovado ou publicação; operador seleciona no primeiro gate e os pacotes seguem gate final/Postiz; falta de histórico é assinalada sem falsa certeza |

**P20-B não define um limiar numérico de similaridade nem obriga a bloquear para sempre um assunto já abordado.** Ver [MEMORIA_EDITORIAL.md](MEMORIA_EDITORIAL.md). **P21:** política específica de evidências e validação factual por risco editorial.

## Verificação factual adaptada ao risco — P21-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R122 | Extrair afirmações do pacote final | M2 associa IDs a factos de **guião, locução, legendas, cenas, gráficos, títulos, CTA e copy por variante**, com trecho ou posição e versão/hash |
| R123 | Risco e confiança por alegação | Registar tipo de alegação, risco/consequência, centralidade, confiança e estado; distinguir factos, inferências, opinião, projeções e dados atualizáveis sem falso score |
| R124 | Evidência rastreável | Para afirmações verificáveis, indicar **fontes concretas que sustentem a alegação específica**, origem, data, país/período e limitações; não contar fontes derivadas como confirmação independente |
| R125 | Escalamento nos domínios sensíveis | Finanças, fiscalidade, direito, medicina, segurança, histórico controverso e promessas comerciais sensíveis exigem **prova mais forte** e análise humana de conflitos ou informação insuficiente |
| R126 | Bloqueio de alegações centrais não verificadas | **QA factual bloqueado impede «pronto para publicar» e encaminhamento a Postiz**, mesmo com aprovação editorial genérica; dar possibilidade de corrigir/retirar/reformular e repetir QA |
| R127 | Relatório legível na revisão final | Mostrar afirmações incertas/contraditórias, evidências/fontes, impacto e confiança para supervisão humana, sem obrigar confirmação manual de todas as frases de baixo risco |
| R128 | Novas variantes e correções | Alterações factuais, números, títulos/copy ou CTA materialmente diferentes exigem QA das partes afetadas, nova versão/hash e segundo gate para pacote corrigido |
| R129 | Sem confirmação inventada | Fonte inacessível/dado antigo/não aplicável fica **não verificado ou inconclusivo** conforme risco; sem APIs pagas não autorizadas e sem alegar que uma pesquisa ou teste foi feito sem prova |

**P22-B decidiu divulgar referências relevantes conforme as possibilidades verificadas da plataforma, com on-screen seletivo e gate humano.** Contrato [FACT_CHECK.md](FACT_CHECK.md).

## Referências públicas adaptadas às plataformas — P22-B

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R130 | Bibliografia pública relevante | Derivar do QA interno P21-B referências **públicas e verificáveis** relacionadas com os factos importantes; identificar fonte, data e ligação/referência adequada |
| R131 | Formato apropriado ao destino | Usar **descrição/caption, comentário fixado ou página de fontes** quando o suporte efetivo existir; não prometer funcionalidades não testadas na rede/Postiz |
| R132 | Referência no ecrã seletiva | Mostrar discretamente fontes junto de afirmações sensíveis/controversas quando acrescentem valor e forem legíveis; **sem obrigação de citação visual frase a frase** |
| R133 | Revisão por variante e destino | Apresentar fontes/URLs/copy e eventuais referências no vídeo na **revisão final** por variante/conta/plataforma/versão/hash, para edição e aprovação explícita |
| R134 | Privacidade, direitos e QA preservados | Não expor documentos privados, dados pessoais, credenciais ou materiais sem licença; bibliografia não desbloqueia afirmações essenciais sem verificação factual |

## Motor 1 comum com instâncias lógicas por projeto — SG-D060

| ID | Requisito | Critério de aceitação |
|---|---|---|
| R135 | Núcleo M1 único e partilhado | Conectores, execução, pipeline de pesquisa/scoring configurável e novas integrações residem num núcleo **reutilizado por todos os projetos Social**; sem forks por marca |
| R136 | Especialização/isolamento por `nexusProjectId` | Cada execução recebe branding, público, fontes, objetivos, concorrentes, campanhas, memória, scoring e quotas **isolados por projeto**; nenhum dado/credencial/resultado privado migra para outra marca |
| R137 | Ciclo de execução sem LLM residente | Instâncias são **lógicas, não processos/LLMs permanentes**; contexto carregado por execução, quotas e reservas geridas pelo Nexus e estado persistido corretamente |
| R138 | Elegibilidade e modularidade | Só projetos Social elegíveis e ativos são pesquisados, embora o catálogo Adicionar mostre todos; um novo adaptador pode ser partilhado sem exigir múltiplas implementações |

**Entrevista encerrada em SG-D061.** Casos técnicos ainda abertos ficam em prova/roadmap, não numa sequência adicional de perguntas. Contratos [CITACOES_PUBLICAS.md](CITACOES_PUBLICAS.md), [ARQUITETURA_MOTOR1.md](ARQUITETURA_MOTOR1.md).

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
