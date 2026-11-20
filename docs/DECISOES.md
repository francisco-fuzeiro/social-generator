# Registo de decisões — Social Generator

> Consolidado em 20/11/2026 a partir das conversas recuperáveis e da auditoria F0. Aprovado como registo documental, **não** como autorização de implementar/cobrar/publicar. Novas decisões devem ser acrescentadas com data, estado, razão e impactos; não reescrever silenciosamente o passado.

## A. Decisões confirmadas

| ID | Decisão | Consequência |
|---|---|---|
| SG-D001 | Multi-projeto **exclusivamente a partir do catálogo do Nexus**, com ativação Social opcional apenas para projetos Nexus com redes sociais configuradas | O Social **não cria projetos independentes**; mostra só projetos elegíveis do Nexus, e apenas os ativados entram na produção |
| SG-D002 | Dashboard é o separador Social do Nexus (PC/móvel) | Não criar aplicação, sistema de contas ou servidor concorrente |
| SG-D003 | Três motores: Pesquisa → Produção → Distribuição/Métricas/Aprendizagem | Recomendações específicas por projeto; feedback para pesquisa |
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
| SG-D019 | **Projetos elegíveis só do Nexus e só com socials**; inclusão no Social é opt-in | Filtro no catálogo do Nexus, não formulário de criação de projeto independente |
| SG-D020 | Pesquisa por YouTube, Instagram, Google/Google Trends, Reddit, TikTok, X e LinkedIn; concorrência híbrida (referências fixadas e descoberta) | Marcar fontes, datas, permissões e confiança; não prometer API disponível sem prova |
| SG-D021 | Scoring das oportunidades **adaptativo ao projeto**, com custo/viabilidade e evidências; propostas económicas antes do gate | Não gastar em guião, storyboard ou render antes de tema aprovado |
| SG-D022 | **Formatos**: The Hidden Layer — vídeo vertical narrado; Vefi/UtopIA — vídeos e carrosséis | Perfis por projeto decidem o que se produz; não impor o mesmo template |
| SG-D023 | **Canais pretendidos**: Hidden Layer — Instagram, YouTube, X, TikTok; Vefi — Instagram, TikTok, X, LinkedIn, YouTube; UtopIA — Instagram, LinkedIn, TikTok, X, YouTube | Intenção editorial não prova contas conectadas nem autorização de API |
| SG-D024 | Remotion-first e IA generativa apenas quando traz valor; Higgsfield requer aprovação específica; pacote editável e QA técnico/editorial/factual/visual/direitos | Produção funcional e responsável antes de volume |
| SG-D025 | Publicação híbrida: automática por API oficial quando for elegível e aprovada, senão manual; adaptar pacote a cada plataforma | Dupla aprovação humana mantém-se; respeitar limites e termos |
| SG-D026 | Medir UTMs, tráfego, eventos e conversões além de indicadores sociais; experiências controladas e aprendizagem por projeto | Separar métricas observadas, estimadas e atribuição incerta |
| SG-D027 | **Design visual detalhado do dashboard só depois da funcionalidade** | F1 tem UI mínima funcional e acessível, não um redesign prematuro |
| SG-D028 | Biblioteca externa `D:\AI\Biblioteca`, usada com catálogo de licenças e isolamento por projeto | Não versionar os assets no Git; acesso através de configuração autorizada |

| SG-D029 | **Entrevista P1 — opção B:** basta ter pelo menos uma conta social **configurada no Nexus** (plataforma e identificador/handle/URL); **não é exigida autenticação por API** para a elegibilidade Social | Projeto elegível pode fazer pesquisa, produção, exportação/publicação manual e introduzir métricas manuais após opt-in. Recolha/publicação automática por API só após ligação, permissões e gates aplicáveis; nunca tratar conta configurada como API autenticada |

## B. Tecnologia/contrato existente na F0 — **proposta técnica**, não decisão confirmada de produto

A auditoria docs/auditoria-f0.md (20/11/2026) propõe JSON local + JSONL, leitor validado, operações `social.ler` / `social.aprovarTema` / `social.aprovarPublicacao`, autorização imutável e fases F1–F3. São um bom ponto de partida, mas o schema de §3.3 tem IDs/canais fixos e métricas insuficientes para os requisitos confirmados. **Não implementar literalmente esse schema sem alinhar a adenda**.

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
- Público e métricas-alvo exatos por projeto; **cadência de pesquisa já decidida** (diária + relatório semanal); hora de execução e rubrica numérica ainda pendentes.
- Fluxo de contas/plataformas e permissões oficiais, sobretudo X/LinkedIn e restrições de publicação por API.
- Qual ferramenta de voz inglesa/PT-PT e respetivos direitos, sincronização de legendas e custos reais.
- Licença Remotion aplicável à entidade/uso comercial; benchmarks de render e imagem no Nexus.
- Limite de armazenamento, retenção, backups e catálogo de direitos da biblioteca D:\AI\Biblioteca.
- Modelo final de pontuação e critérios de confiança; métricas prioritárias disponibilizadas por cada conta.
- Versão final do schema e da adenda após revisão conjunta com o Núcleo Nexus.
- Preservar a cópia exata do SOCIAL_GENERATOR.md (489 linhas) e da adenda anterior (284 linhas) se forem recuperadas; **esta consolidação não finge ser transcrição desses dois ficheiros**.

## E. Regra de conflitos

Em conflito entre este registo e uma proposta F0: **decisão explícita posterior do utilizador prevalece como requisito de produto**, mas alterações ao contrato técnico dependem de uma missão aprovada e de migração/testes. Não apagar provas ou substituir a auditoria histórica. Para mudanças futuras anotar data, decisão anterior, nova opção, razão, responsável e artefactos afetados.
