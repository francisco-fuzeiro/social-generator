# Contrato de alinhamento F0 → Social Generator — decisões da entrevista

> **Versão documental:** 20/11/2026, revisão pós-entrevista. **Decisões de produto deste documento são vinculativas**; escolhas técnicas de campos e schemas marcadas PROPOSTO dependem de revisão do Nexus. Não representa software já implementado. Preservar docs/auditoria-f0.md como prova histórica; esta revisão prevalece para requisitos novos e conflitos de produto.

## 0. Autoridade e fronteiras

- **Nexus** é fonte de verdade dos projetos e respetivas redes sociais, contas, permissões, sessões, limites, agendamento existente e dashboard Social.
- **Social Generator** implementa motores/contratos de domínio para pesquisa, produção, distribuição, métricas e aprendizagem; não cria novos projetos Nexus nem outro painel ou scheduler.
- **Decisão humana** aprova tema e aprova pacote/conta/canal antes da publicação; operações administrativas, custos e políticas seguem gates do Nexus.
- **GitHub** documenta código/contratos; **D:\AI\Biblioteca** guarda recursos autorizados fora do Git. Projeto/clonagem local: **C:\Claude\Social Generator**.

## 1. Alterações obrigatórias face à F0

| # | F0 ou lacuna | Contrato que tem de vigorar |
|---|---|---|
| C01 | IDs editoriais fixos com três projetos | **Não existe criação de projeto Social independente**. O catálogo de elegíveis vem exclusivamente do Nexus: apenas projetos Nexus existentes com socials configurados; opt-in explícito para ativar Social |
| C02 | `projetoId` livre/fixo sem relação | Todas as entidades usam identidade canónica Nexus (ou mapeamento legado explícito), com `nexusProjectId` obrigatório; catálogo e autorização consultados ao Nexus |
| C03 | Plataformas limitadas a três enums | Modelo de dados extensível; Instagram, YouTube, X, TikTok e LinkedIn conforme os perfis; conectores podem estar indisponíveis e exportação manual ser o único modo |
| C04 | Pouco detalhe de pesquisa | Pesquisa leve **diária** + **relatório semanal aprofundado**, sem novo scheduler; fontes YouTube, Instagram, Google/Trends, Reddit, TikTok, X, LinkedIn e fontes oficiais |
| C05 | Score e concorrência genéricos | Pontuação **adaptativa por projeto** com evidências, pesos/versão e confiança; concorrência **híbrida**: referências introduzidas manualmente + descoberta justificada |
| C06 | Formato `video/carrossel` sem política de projeto | Hidden Layer: **vídeo vertical narrado**; Vefi e UtopIA: **vídeo + carrossel**; adaptar formatos e entrega às capacidades de cada rede |
| C07 | Produção em geral | **Remotion-first** e pacote editável; imagem/vídeo generativo só se acrescentar valor; Higgsfield apenas com aprovação; QA técnico, factual, editorial, visual e direitos |
| C08 | Perfiles limitados a nome/idioma | **Perfil de marca versionado, derivado/ligado ao projeto Nexus**, com objetivos, tom, voz, kit, assets, restrições, canais/contas e conversões |
| C09 | Média/socials só números base | Métricas avançadas e **atribuição**: tempos e curvas de retenção, conclusão, CTR, engagement, custos, UTMs, tráfego, eventos de app/site, conversões, definição da métrica e disponibilidade |
| C10 | Experiência e aprendizagem genéricas | Registar características criativas, hipóteses/variantes controladas, amostras, comparações justas, confiança e recomendações citáveis para Motor 1 |
| C11 | Recursos só em outputs Nexus | Biblioteca externa **D:\AI\Biblioteca** como fonte reutilizável por referência/manifesto/licença; outputs com hashes; nada externo servido diretamente pela UI |
| C12 | F2 propõe um piloto e F1 UI simples | **MVP transversal de 3 conteúdos reais** (Hidden Layer, Vefi, UtopIA), depois de piloto técnico. **Design visual detalhado do dashboard adiado** até a funcionalidade e dados reais estarem validados |
| C13 | API de publicação futura | Publicação **híbrida**: API oficial quando permitida e autorizada; fallback manual; pacote adaptado por conta/rede, dupla aprovação e estado incerto sem retry cego |
| C14 | Metas não ligadas a operações | Pesquisa + síntese previstas, meta 5–10 conteúdos/semana, 1–3h supervisão, 3–6h desenvolvimento, alvo custo extra 0€ e teto de planeamento 25€/mês **sem autorizar compras** |

## 2. Elegibilidade e estados de projeto (DECIDIDO)

**Filtro de projetos disponíveis para ativar Social:**

```text
ProjetosNexus
  → existem e são acessíveis no Nexus
  → têm socials/canais sociais configurados no Nexus
  → são elegíveis para opt-in Social
  → operador ativa Social (opt-in)
  → perfil Social e canais autorizados → pesquisa/produção/publicação
```

Projetos do Nexus sem socials **não aparecem no seletor de ativação Social**. Projetos com socials mas não ativados não entram no seletor de produção/relatórios. Não há formulário ou endpoint `criarProjetoSocial`. O Social também não pode criar ligações de contas sociais em nome do Nexus para contornar esta regra.

**PROPOSTO técnico:** representar no Nexus `nexusProjectId`, `hasSocials`, `socialEnabled`, `socialProfileVersion`, `eligibleChannels` e `eligibilityReason`; o leitor Social recebe referências validadas pelo Nexus, não caminhos arbitrários do browser. A fonte autoritativa de `hasSocials` é a configuração real de redes do Nexus, não um booleano editável no JSON do motor.

Se um projeto for removido/arquivado no Nexus ou perder o último social: desativar novas investigações que pressupõem conta e impedir envio; preservar histórico, decisões, media e métricas e mostrar motivo de indisponibilidade. Reativar requer nova validação. Um projeto pode ter dados históricos mesmo não estando atualmente ativo.

## 3. Modelo de dados — adenda proposta ao contrato v1

Preservar retrato `painel.json` pequeno e validado, decisões humanas imutáveis, eventos de domínio/históricos datados e outputs com hashes da F0; **não implementar novos campos sem revisão técnica**.

| Entidade / extensão | Campos mínimos propostos | Regra |
|---|---|---|
| `NexusSocialProjectRef` | `nexusProjectId`, `socialEnabled`, `perfilVersao`, canais/contas autorizados, `eligibilityStatus` | Nexus define elegibilidade e autenticação |
| `BrandProfile` | idioma, público, proposta, tom, voz, visuais, recursos, claims restritos, CTAs, objetivos, formatos, canais e restrições | Kit e direitos por projeto; versionado |
| `ResearchRun` | projeto, janela, tipo `daily/weekly/on-demand`, fontes/data/método, custos, estado | Relatório semanal não é soma cega da pesquisa diária |
| `Opportunity` | tema, ângulo, hooks, formato, duração, concorrência, tendência, relevância, esforço, conversão provável, rubrica/pesos/confiança e fonte | Ficha económica antes do gate; não gerar guião |
| `Campaign` | projeto, objetivo, janela, CTA, orçamento, referências UTM | Relacionar resultados com conteúdo |
| `Creative/Variant` | ideia aprovada/versão, guião, storyboard, hook, ritmo, voz, style, assets/licenças, gates, versão/hash | Não misturar marcas; alterações relevantes invalidam autorização |
| `Publication` | peça/variante, projeto, canal, conta Nexus, modo manual/API, pacote e hash, estado/recibo, URL/ID remoto, horário | Aprovação por canal+conta+versão |
| `MetricSnapshot` | publicação, definição, origem, observadoEm, janela, valor, unidade, numerador/denominador, disponibilidade | `null` não é zero; não misturar rede |
| `ConversionEvent` | projeto, campanha, origem/UTM, tipo, agregado, momento, regra de atribuição e confiança | Minimização de dados pessoais |
| `Experiment` | hipótese, variável, variantes, métricas, comparação/janelas, amostra, conclusão, evidência/confiança | Conclusão `inconclusiva` é válida |
| `LibraryAssetRef` | ID, catálogo, digest, tipo, licença, projetos autorizados, localizador lógico | Nunca expor `D:\...` à UI |

**Versões:** ajustar v1 antes da primeira fixture definitiva, se possível. Se fixtures/dados v1 já existirem em produção, migrar explicitamente para v2 em vez de reinterpretar silenciosamente. Não aumentar sem controlo o tamanho de `painel.json`; analítica longa vai para histórico consultado/agregado.

## 4. Contrato temporal do Motor 1 (DECIDIDO)

- **Diário leve**: detectar alterações relevantes e recolher evidências recentes, com orçamento de pesquisa limitado; não deve produzir media.
- **Semanal aprofundado**: sintetizar dados da semana, medir variações, estudar concorrentes e fontes mais amplas, comparar com histórico e propor prioridades por projeto.
- Fonte elegível: YouTube, Instagram, **Google e Google Trends**, Reddit, TikTok, X, LinkedIn, sites oficiais e pesquisas web documentadas. Só vias autorizadas; ausência de API significa ausência/limitação identificada, não scraping forçado.
- Concorrência híbrida: perfis/concorrentes que o operador define + descoberta dinâmica com motivo. Nunca inferir desempenho de alcance total sem dados.
- Scoring adaptado a objetivo/público/projeto; rubrica e confiança explícitas. **Pesos numéricos exatos não foram fechados**; são configuração versionada/experiência.
- Saída: ficha de oportunidade de baixo custo, sem guião/storyboard/render ou assets caros. O gate de tema decide a passagem ao Motor 2.
- Execução inicial pode ser manual. Agendamento recorrente, quando existir, é capacidade reutilizada do Nexus; não criar daemon paralelo.

## 5. Canais, formatos e produção (DECIDIDO)

| Projeto elegível/ativado | Formatos aprovados | Plataformas pretendidas |
|---|---|---|
| The Hidden Layer | Vídeo vertical narrado em inglês, faceless, motion graphics | Instagram, YouTube, X, TikTok |
| Vefi | Vídeo, carrossel | Instagram, TikTok, X, LinkedIn, YouTube |
| UtopIA | Vídeo, carrossel | Instagram, LinkedIn, TikTok, X, YouTube |

Esta tabela é intenção editorial; `capability` e estado de conta no Nexus decidem o que é **tecnicamente possível**. Para rede que não aceita um formato, o adaptador explica restrição e propõe exportação apropriada para aprovação; não publica outro formato automaticamente.

Produção **Remotion-first**, FFmpeg auxiliar quando validado; HyperFrames em avaliação. Ferramenta de imagem/vídeo IA só quando acrescenta valor e não traz custo/risco não aprovado; Higgsfield exige autorização. Entrega deve incluir MP4 quando vídeo, editáveis, guião/storyboard e referências, relatório QA factual/editorial/técnico/visual/direitos, hashes, versões e custos.

## 6. Biblioteca (DECIDIDO) e segurança (proposta de integração)

Raiz autorizada `D:\AI\Biblioteca`, acessível pelo projeto local `C:\Claude\Social Generator` **sem entrar em Git**. Configurar caminho via Nexus/variável de ambiente, inventariar antes de alterar. Catálogo identifica licenças, restrições e projetos permitidos. O contrato expõe somente IDs relativos e recursos permitidos; valida `realpath` e junctions para impedir escape. Render usa cópias/derivados em outputs do Nexus com recibos. Não depender de nomes/estrutura imaginados na biblioteca.

## 7. Analytics, atribuição e aprendizagem (DECIDIDO no conceito)

Medir views/impressões/alcance/engagement, retenção (média, conclusão e curva se acessíveis), cliques, CTR, visitas, UTMs, registos/leads/ativação/wishlists/vendas quando aplicável, receitas e custos (quando observáveis). Guardar fonte, janela e definição por plataforma, e separar dados observados, estimados, pendentes e indisponíveis. Atribuição por UTM e eventos de produto **não prova causalidade**, e pode ser parcial.

Aprendizagem por projeto com características criativas (hook, voz, duração, estrutura, CTA, estilo, canais), experiências controladas de uma variável, comparações por idade/plataforma/formato, amostra e confiança. Recomendação nova cita dados e hipótese, não altera autonomia de publicação. Implementação incremental: primeiro métricas manuais rastreáveis, depois APIs oficiais conforme autorização.

Detalhe em docs/METRICAS.md.

## 8. MVP e ordem do dashboard (DECIDIDO)

- **Piloto técnico**: uma peça para provar um fluxo end-to-end, sem confundir com MVP completo.
- **MVP transversal**: **3 conteúdos reais e publicáveis**, 1 The Hidden Layer, 1 Vefi, 1 UtopIA, cada um com identidade, fontes, gates, produção, pacote final, canal/conta e resultado registado. Não contar fixtures sintéticas. Distinguir `preparado` de `publicado`; nunca inventar métricas se a publicação ainda não ocorreu.
- **Dashboard funcional primeiro**: UI mínima no separador Social do Nexus para selecionar projeto elegível, ler estados, aprovar temas/publicações, consultar outputs e métricas reais quando existirem. Não fazer protótipo visual detalhado, grande redesign, dashboards de sete abas ou gráficos decorativos durante F1.
- **Design visual detalhado só após** prova de funcionamento dos motores/contratos e fluxos reais. O desenho final deve derivar de utilização e dados observados.

## 9. Aprovações, recuperação e testes (preservar F0)

Duas aprovações persistentes e inequívocas: tema antes de guião; publicação por pacote/hash/conta/plataforma antes de efeito externo. Nexus guarda identidade/autorização. Em publicação API: conferir elegibilidade, consentimento, limites; `em-envio` + timeout sem recibo = `incerta`, não reenvio cego. Não comprar ferramentas, partilhar credenciais ou modificar repos externos por pressuposto.

**Testes obrigatórios antes de F1.1 e no progresso F1–F3:**
1. Nexus project sem socials não aparece; com socials elegível não fica ativado automaticamente; ID inventado pelo Social rejeitado.
2. Remover último social torna projeto indisponível para novo trabalho sem apagar histórico; conta de outro projeto rejeitada.
3. Uma nova marca com sociais no Nexus é ativável sem editar enum de IDs nem escrever no repo alheio.
4. Pesquisa daily/weekly com fontes/datas e estados; sem fonte válida não produz scores arbitrários.
5. Hidden Layer apenas formato narrado vertical; Vefi/UtopIA vídeo+carrossel; adaptação por rede com aprovação.
6. Tema sem aprovação nunca gera guião/asset; mudança do tema exige versão nova.
7. Pacote alterado depois de aprovação exige nova autorização por conta/rede/hash.
8. UTM e conversões agregadas com origem; ausente ≠ zero; atribuição incerta não é declarada venda causada pelo post.
9. Experiência sem amostra ou com janelas não comparáveis termina `inconclusiva`.
10. Biblioteca fora do Git; paths fora da raiz/junction recusados; licenças verificadas.
11. Publicação manual/API com comprovativo; timeout de envio não duplica post.
12. Dados sintéticos visivelmente marcados; sem motor/dados, UI mostra vazio; visual avançado não bloqueia funcionalidade.
13. Três peças reais por três projetos confirmados, com gates e evidência; fixtures não contam.

## 10. Estado e próximos gates

Esta revisão **resolve o conflito funcional** da entrevista mas **não aprova automaticamente** desenho pormenorizado de schema, novas APIs/canais, alteração do Nexus, nem publicação paga. As missões F1–F3 permanecem como sequência, com ajustes de contratos e listas fechadas antes de editar código. O utilizador mantém aprovação da execução. Obter assinatura/validação técnica do contrato consolidado no Nexus antes de SG-M001/F1.1.
