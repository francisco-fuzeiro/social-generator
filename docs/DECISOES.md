# Registo de decisões — Social Generator

> Consolidado em 20/11/2026 a partir das conversas recuperáveis e da auditoria F0. Aprovado como registo documental, **não** como autorização de implementar/cobrar/publicar. Novas decisões devem ser acrescentadas com data, estado, razão e impactos; não reescrever silenciosamente o passado.

## A. Decisões confirmadas

| ID | Decisão | Consequência |
|---|---|---|
| SG-D001 | **Adicionar projeto** lista todos os projetos existentes no Nexus, com configuração Social independente e opcional para cada um | O Social não cria novos projetos Nexus; adicionar cria um perfil Social em preparação, não inicia pesquisa nem publicação |
| SG-D002 | Dashboard é o separador Social do Nexus (PC/móvel) | Não criar aplicação, sistema de contas ou servidor concorrente |
| SG-D003 | **Histórico (substituído por SG-D042):** proposta original com três motores, Pesquisa → Produção → Distribuição/Métricas/Aprendizagem | As funções foram preservadas, mas Analytics & Learning foi separado em quarto motor após aprovação explícita |
| SG-D004 | Investigar tendências/publicações bem-sucedidas, fontes e concorrência | Fichas de oportunidades com fontes, datas e justificação |
| SG-D005 | Ideia/tema aprovado **antes** de produzir guião/recursos | Gate humano separado de produção |
| SG-D006 | Peça final aprovada **antes** de publicação, por versão/conta/plataforma | Alterações invalidam aprovação anterior |
| SG-D007 | Ferramentas substituíveis e capacidade de adotar ferramentas futuras | Adaptadores sem lock-in de fornecedor |
| SG-D008 | Remotion como primeiro caminho a provar, FFmpeg auxiliar; HyperFrames continua alternativa | Benchmark antes de instalação definitiva |
| SG-D009 | Preferir ferramentas/subscrições existentes; alvo 0 € extra, até 25 €/mês apenas com aprovação | Sem chamadas pagas silenciosas |
| SG-D010 | **Pesquisa leve diária e relatório semanal aprofundado** com fontes, concorrentes, tendências e recomendações | Reutilizar agendamento e execução do Nexus quando existirem; início manual permitido |
| SG-D011 | Meta de 5–10 conteúdos/semana; 1–3 h supervisão/semana; 3–6 h desenvolvimento/semana | Planeamento, não promessa de produção |
| SG-D012 | **MVP de três conteúdos reais**, um por The Hidden Layer, Vefi e UtopIA | Um piloto técnico não satisfaz o MVP; sem contar exemplos sintéticos como conteúdo real |
| SG-D013 | Publicação e recolha de métricas podem começar manualmente | APIs oficiais só quando comprovadas e autorizadas |
| SG-D014 | Medir resultados de negócio (UTM, eventos, conversões) além de alcance/interação | Atribuição declarada como observação, sem prometer causalidade |
| SG-D015 | Código/projeto local C:\Claude\Social Generator; biblioteca em D:\AI\Biblioteca | Biblioteca fora de Git; caminhos configuráveis |
| SG-D016 | Repositórios servidos (Vefi/UtopIA/etc.) são só leitura por omissão | Sem alterações cruzadas não autorizadas |
| SG-D017 | GitHub inicialmente público até segunda 23/11/2026, depois privado | Não publicar segredos nem assumir retroatividade da privacidade |
| SG-D018 | The Hidden Layer: mini-documentários faceless em inglês, voz consistente, sem personagens, motion graphics programáticos | Identidade editorial e visual separadas |
| SG-D019 | Só projetos do Nexus podem ser adicionados ao Social, mas **o seletor mostra todos**, mesmo sem socials | Os requisitos de canais/contas e branding são verificados na configuração/ativação e nunca ocultam projetos no seletor Adicionar |
| SG-D020 | Pesquisa por YouTube, Instagram, Google/Google Trends, Reddit, TikTok, X e LinkedIn; concorrência híbrida (referências fixadas e descoberta) | Marcar fontes, datas, permissões e confiança; não prometer API disponível sem prova |
| SG-D021 | Scoring das oportunidades **adaptativo ao projeto**, com custo/viabilidade e evidências; propostas económicas antes do gate | Não gastar em guião, storyboard ou render antes de tema aprovado |
| SG-D022 | **Formatos**: The Hidden Layer — vídeo vertical narrado; Vefi/UtopIA — vídeos e carrosséis | Perfis por projeto decidem o que se produz; não impor o mesmo template |
| SG-D023 | **Canais pretendidos**: Hidden Layer — Instagram, YouTube, X, TikTok; Vefi — Instagram, TikTok, X, LinkedIn, YouTube; UtopIA — Instagram, LinkedIn, TikTok, X, YouTube | Intenção editorial não prova contas conectadas nem autorização de API |
| SG-D024 | Remotion-first e IA generativa apenas quando traz valor; Higgsfield requer aprovação específica; pacote editável e QA técnico/editorial/factual/visual/direitos | Produção funcional e responsável antes de volume |
| SG-D025 | Publicação híbrida: automática por API oficial quando for elegível e aprovada, senão manual; adaptar pacote a cada plataforma | Dupla aprovação humana mantém-se; respeitar limites e termos |
| SG-D026 | Medir UTMs, tráfego, eventos e conversões além de indicadores sociais; experiências controladas e aprendizagem por projeto | Separar métricas observadas, estimadas e atribuição incerta |
| SG-D027 | **Design visual detalhado do dashboard só depois da funcionalidade** | F1 tem UI mínima funcional e acessível, não um redesign prematuro |
| SG-D028 | Biblioteca externa `D:\AI\Biblioteca`, usada com catálogo de licenças e isolamento por projeto | Não versionar os assets no Git; acesso através de configuração autorizada |

| SG-D029 | **Entrevista P1 — opção B:** basta configurar uma conta social identificável, sem autenticação por API, para habilitar capacidades manuais do Social | Ter a conta não é requisito para surgir em Adicionar projeto; é requisito de configuração para ativar operações que dependem de um canal. A API continua opcional e só habilita capacidades comprovadas |

| SG-D030 | **Correção da entrevista P2:** ao clicar em **Adicionar projeto**, aparecem **todos os projetos do Nexus**; só os que forem adicionados/configurados no Social, **ativos e com branding completo** entram na pesquisa | Fluxo: catálogo Nexus completo → adicionar perfil Social (rascunho) → configurar branding, objetivos e canais → ativar → pesquisa diária/semanal. Projetos sem preparação completa ficam visíveis para configurar, mas não consomem recursos | 

| SG-D031 | **Entrevista P2 — opção C:** distribuir pesquisa **adaptativamente por prioridade** entre os projetos Social **configurados, ativos e com branding completo** | Todos estes projetos recebem pesquisa diária leve e relatório semanal; projetos com campanhas/tendências fortes/maior prioridade recebem aprofundamento. Projetos inativos, mesmo configurados, **não são pesquisados nem recebem novas recomendações** |
| SG-D032 | **Reutilizar temas até ao máximo de 7 dias** da última validação; depois passam a **reavaliação** na pesquisa semanal aprofundada | Sem renovação tácita; reavaliação fundamentada decide se o tema continua relevante e pode renovar a validade por mais 7 dias ou arquivar; histórico não se perde |
| SG-D033 | **Cada lote de recomendações deve apresentar no mínimo 5 temas distintos** e fundamentados por projeto | Não inventar temas para atingir cinco; se faltarem evidências, informar lote incompleto e continuar pesquisa. Pesquisa diária leve não obriga a gerar lote novo todos os dias |
| SG-D034 | **Seleção múltipla de temas**, sem calendário na escolha inicial | Utilizador escolhe apenas os temas, em qualquer quantidade; essa seleção constitui o gate humano de tema para as versões escolhidas e autoriza o Motor 2 a produzir, mas não agendar nem publicar |

| SG-D035 | **Entrevista P3 — opção B adaptada:** só **depois de o Motor 2 produzir cada peça** é apresentada uma prévia com proposta de calendário completo (ordem, datas, horas, plataformas) e demais informação relevante | Mostrar a proposta no gate final **antes de publicar**. O operador pode rever/corrigir; só após aprovação do pacote + conta/canal + agendamento o trabalho passa ao **Motor 3**, que agenda via conector autorizado ou prepara agendamento manual quando a API não o permitir |
| SG-D036 | Separar **escolha de temas**, **revisão final da peça** e **execução do agendamento** | Motor 1 recomenda temas, utilizador escolhe; Motor 2 produz e apresenta prévia + proposta; utilizador aprova a publicação; Motor 3 executa. Nunca marcar «agendado» ou «publicado» sem confirmação comprovada |

| SG-D037 | **Entrevista P4 — opção B:** produção em **fila automática de conteúdos selecionados**, com paralelismo apenas se compatível com os limites/recursos da máquina | O Motor 2 continua a produzir as próximas peças sem esperar pela aprovação final das anteriores. Cada peça fica disponível para revisão independente. Nenhuma segue ao Motor 3 sem gate final |
| SG-D038 | **Motor 3 usa o Postiz para agendamento e publicação, sem depender do scheduler de publicações do Nexus** | O Postiz recebe apenas pacotes aprovados, mantém a agenda e executa a publicação na hora prevista; Motor 3 integra API/eventos e sincroniza estados/recibos. Nexus continua com dashboard, aprovação e orquestração das fases de pesquisa/produção, mas não executa os disparos da publicação |
| SG-D039 | **Histórico, superado por SG-D042:** Postiz como infraestrutura de distribuição; separação de Analytics & Learning ainda aguardava aprovação | A aprovação posterior criou quatro **motores lógicos**, sem quatro agentes permanentes. Cloud/self-hosted permanece por decidir |

| SG-D040 | **Dashboard Nexus consulta o calendário completo do Postiz**, incluindo **agendados, já publicados, falhados, pendentes e cancelados**, com filtros por projeto/rede/conta/período e detalhes dos posts | **Postiz é a fonte de verdade operacional** de agendamento e publicação; Nexus mantém uma vista/snapshot sincronizado e assinala última atualização/erros, sem executar um segundo scheduler nem atribuir posts a projetos por adivinhação. O design visual detalhado mantém-se para depois da funcionalidade |

| SG-D041 | **Entrevista P5 — opção C:** calendário e estados **consultáveis no Nexus**, mas **editar/reagendar/cancelar diretamente no Postiz** | Nexus disponibiliza vista de leitura e ligação para abrir post no Postiz; sincroniza de volta as alterações. Não criar operações mutáveis de calendário no Nexus nesta fase |
| SG-D042 | **Arquitetura definitiva de quatro motores lógicos:** M1 Intelligence, M2 Production, M3 Distribution & Scheduling (Postiz), M4 Analytics & Learning | **SG-D042 substitui SG-D003 e a indecisão SG-D039.** M4 recolhe/normaliza métricas, atribuição, experiências e aprendizagem e devolve sinais ao M1; M3 fica restrito a distribuição/agendamento/estados operacionais. Sem quatro agentes permanentes, sem scheduler de publicação Nexus |

| SG-D043 | **Entrevista P6 — opção C:** **validar primeiro a integração com o Postiz**, sem fechar desde já Postiz Cloud vs. self-hosted | Testar, com meios gratuitos/experimentais **apenas se realmente disponíveis**, API, contas, formatos, calendário, agendamento, estados, limites, custos e operação independente do Nexus. Comparar opções e escolher alojamento **antes de ir para produção**, sem contratar/pagar/instalar serviço definitivo por inferência |

## B. Tecnologia/contrato existente na F0 — **proposta técnica**, não decisão confirmada de produto

A auditoria docs/auditoria-f0.md (20/11/2026) é histórica e contém a hipótese anterior de usar o agendamento do Nexus. **SG-D038 substitui essa hipótese para publicações: o agendamento e disparo ficam no Postiz.** O leitor de dados e gates do Nexus mantêm-se. A auditoria propõe JSON local + JSONL, leitor validado, operações `social.ler` / `social.aprovarTema` / `social.aprovarPublicacao`, autorização imutável e fases F1–F3. São um bom ponto de partida, mas o schema de §3.3 tem IDs/canais fixos e métricas insuficientes para os requisitos confirmados. **Não implementar literalmente esse schema sem alinhar a adenda**.

## C. Recomendações ainda por aprovar

| Item | Proposta | Estado |
|---|---|---|
| SG-P001 | North Star KPI configurável por projeto/campanha e KPIs secundários | PROPOSTO |
| SG-P002 | Snapshots em 2h, 24h, 72h, 7d e 30d; sincronização diária quando possível | PROPOSTO |
| SG-P003 | Comparar por plataforma, formato, idade, orgânico/pago e mediana histórica | PROPOSTO |
| SG-P004 | A/B: hipótese e variável principal pré-registadas; resultado inconclusivo possível | PROPOSTO, alinhado com F0 |
| SG-P005 | Rubrica de oportunidades com tendência, relevância, conversão, esforço, concorrência, confiança | PROPOSTO; pesos não definidos |
| SG-P006 | Sete áreas de informação para eventual UI: Overview, Intelligence, Studio, Publishing, Analytics, Experiments, Costs | **ADIADO**: design visual detalhado apenas depois de funcionalidade validada |
| SG-P007 | Contrato com entidades Campanha/Variante/Evento/Conversão e qualidade de dados | PROPOSTO; desenho em adenda |
| SG-P008 | JSON Schema 2020-12, canonicalização RFC 8785 e SHA-256 para hash de pacote | PROPOSTO técnico da adenda |
| SG-P009 | Notificações Windows e checkpoints por etapa | PROPOSTO; reutilizar Nexus |
| SG-P010 | Dados reais/estimados/indisponíveis/não sincronizados explícitos | PROPOSTO de qualidade, recomendado |

## D. Questões pendentes de decisão ou prova

- Primeiro piloto técnico: projeto, tema, plataformas e contas concretas. O MVP de três conteúdos reais está fechado, sujeito à elegibilidade dos respetivos projetos no Nexus.
- Público e métricas-alvo exatos por projeto; **cadência C**, lotes de ≥5, validade de 7 dias e escolha múltipla decididas. **P3-B adaptada:** apresentar calendário (datas/horas/canais) **após produção e antes da aprovação final**, com execução do agendamento pelo Motor 3. Horários da pesquisa e pesos exatos do scoring continuam pendentes.
- **P6-C fechada:** validar primeiro o Postiz, **Cloud vs. self-hosted permanece em aberto até haver provas** de capacidades/contas/credenciais por plataforma (incluindo X/LinkedIn/TikTok/YouTube), uptime, custo total e operação fora do Nexus. Nada de custos ou instalação definitiva sem autorização.
- Qual ferramenta de voz inglesa/PT-PT e respetivos direitos, sincronização de legendas e custos reais.
- Licença Remotion aplicável à entidade/uso comercial; benchmarks de render e imagem no Nexus.
- Limite de armazenamento, retenção, backups e catálogo de direitos da biblioteca D:\AI\Biblioteca.
- Modelo final de pontuação e critérios de confiança; métricas prioritárias disponibilizadas por cada conta.
- Versão final do schema e da adenda após revisão conjunta com o Núcleo Nexus.
- Preservar a cópia exata do SOCIAL_GENERATOR.md (489 linhas) e da adenda anterior (284 linhas) se forem recuperadas; **esta consolidação não finge ser transcrição desses dois ficheiros**.

## E. Ciclo de temas e agenda

Ciclo de temas: [CICLO_TEMAS.md](CICLO_TEMAS.md). Distribuição, Postiz e calendário Nexus: [POSTIZ.md](POSTIZ.md). **SG-D041/042 definem calendário só de leitura no Nexus e quatro motores lógicos; prevalecem sobre a proposta antiga de três motores.** **SG-D035/036 prevalecem sobre qualquer menção anterior a propor calendário logo após a seleção dos temas.** Distinguir **relevância do tema** (vigente / em reavaliação / desatualizado) de **aprovação humana e execução** (selecionado / aprovado / em produção / publicado). Reutilização dentro da semana não significa repost automático.

## F. Regra de conflitos

A decisão SG-D030 esclarece e substitui os filtros de listagem implícitos em SG-D001, SG-D019 e na leitura anterior de SG-D029. **Não excluir projetos sem socials do seletor «Adicionar projeto»**.

Em conflito entre este registo e uma proposta F0: **decisão explícita posterior do utilizador prevalece como requisito de produto**, mas alterações ao contrato técnico dependem de uma missão aprovada e de migração/testes. Não apagar provas ou substituir a auditoria histórica. Para mudanças futuras anotar data, decisão anterior, nova opção, razão, responsável e artefactos afetados.
