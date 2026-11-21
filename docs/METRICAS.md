# Motor 4 — Analytics, atribuição e aprendizagem (contrato funcional)

> **Motor 4 aprovado como motor lógico separado do Motor 3/Postiz**. Documento de requisitos; não implica que APIs, contas ou dashboards estejam conectados. **Null/indisponível não é zero**. Dados de exemplo têm de ser identificados como exemplo. Fórmulas e cadências abaixo são propostas a confirmar no contrato técnico.

## 0. Fronteira entre Motor 3 e Motor 4 (DECIDIDO)

- **M3/Postiz:** agendamento, execução, IDs de posts, recibos, estado operacional, consulta de calendário. É fonte operacional da publicação, não motor de inferência.
- **M4/Analytics & Learning:** observações e eventos de conversão de fontes autorizadas (Postiz, plataformas sociais, analytics dos sites/apps ou recolha manual), normalização de métricas, armazenamento histórico, custos, experiências e aprendizagem por projeto. Recebe IDs e status de publicação do M3, **não escreve no Postiz nem altera agenda**.
- **M4 → M1:** sinais e hipóteses fundamentadas por evidência para melhorar prioridades e temas; **não** comando de agendamento/produção/publicação.
- A indisponibilidade de M4 não bloqueia posts já agendados no Postiz; a indisponibilidade de M3 não apaga dados históricos do M4. M4 não implica quarto agente LLM residente nem scheduler de publicações.
- **P5-C:** calendário no Nexus de leitura; alterações exclusivamente no Postiz. A análise de uma publicação pode continuar a partir dos dados históricos mesmo que seja cancelada/reagendada no Postiz, distinguindo estados e janelas.

## 1. Princípio

**Regra de âmbito:** métricas/experiências só pertencem a um projeto Nexus previamente adicionado ao Social e que estava configurado, ativo e com branding completo quando o conteúdo foi produzido; dados históricos continuam legíveis após desativação ou perda de conta. O seletor **Adicionar projeto** mostra todos os projetos Nexus, independentemente dessa configuração. A identidade é a referência canónica do Nexus.

Medir **resultados de negócio e qualidade** por projeto além de métricas de vaidade. Separar:
1. métricas publicadas pela rede;
2. tráfego com origem identificada no site/app;
3. eventos/conversões internos;
4. atribuição inferida/estimada;
5. custos realmente incorridos.

Comparações apenas dentro de definições, janelas e denominadores compatíveis. Uma visualização no YouTube não é necessariamente uma visualização no Instagram ou no TikTok.

## 1.1. Campanhas opcionais e conteúdo contínuo — P13-B (DECIDIDO)

Cada projeto Social tem objetivos e estratégia editorial contínua, com **campanhas opcionais** específicas (objetivo, público, janela temporal, mensagem, CTA e **KPIs próprios**). **Uma publicação geral pode ter `campanhaId=null`:** não criar campanha fictícia para forçar vínculo ou medir todo o conteúdo como campanha.

O Motor 4 deve distinguir relatórios de **campanha** (conteúdos associados e KPIs dentro da janela adequada) dos relatórios de **desempenho geral do projeto** (que incluem conteúdo contínuo e podem mostrar a contribuição de campanhas). Estas vistas **não são somáveis sem cuidado**; eventos e conversões não podem ser contados duas vezes. Métricas ausentes/inacessíveis ficam ausentes, nunca estimadas como vendas confirmadas. Rastrear UTMs e IDs apenas onde existirem.

O Motor 1 recebe aprendizagens tanto sobre campanhas como sobre a estratégia contínua, sem interromper a investigação geral pela existência de uma campanha. **P14-B é decisão:** o M1 propõe prioridade adaptativa justificada com prazos, tendências, objetivos, dados observados do M4 e capacidade do M2; o utilizador pode ajustar antes da escolha dos temas. **M4 apenas fornece sinais e grau de confiança**, nunca decide sozinho prioridades de produção nem inventa ROI. Pesos exatos não aprovados. Contrato [CAMPANHAS.md](CAMPANHAS.md).

## 1.2. Peça-base e variantes por plataforma — P15-B

O Motor 4 mantém a ligação entre **peça-base**, **variante por plataforma**, publicação/conta e métricas datadas. **Não comparar métricas de redes diferentes como se fossem equivalentes** nem atribuir causalmente o desempenho a uma alteração no hook/capa sem controlo das restantes variáveis. Registar formato, duração, copy/CTA, thumbnail e versão quando conhecidos. Comparações exigem janelas, denominadores e audiência adequados, com confiança e incerteza.

Quando a mesma peça-base/ficheiro é reutilizada em várias redes, **continuam a existir publicações e medições distintas**. Não duplicar sessões/conversões, e não apresentar como variante criativa uma diferença que seja apenas o canal/conta. O Motor 4 fornece aprendizagem fundamentada para o Motor 1, não altera a agenda do Postiz. Ver [VARIANTES.md](VARIANTES.md).

## 1.3. Recomendação de redes P16-B (DECIDIDO)

M4 fornece ao M1 **evidências históricas por plataforma, conta e formato** para recomendar os destinos mais adequados a um tema. Cada observação mantém origem, janela, idade do post, denominadores disponíveis e confiança; a ausência de histórico é uma limitação explícita, não um sinal de baixo potencial ou um valor inventado. M1 combina estes sinais com público, formato e tendências, recomendando apenas destinos justificados, sem selecionar todas as redes por omissão. A recomendação **não substitui a decisão humana** na revisão final nem as capacidades de distribuição comprovadas. Continuar a medir variantes/publicações separadamente por plataforma, mesmo quando reutilizam o mesmo render. Contrato [VARIANTES.md](VARIANTES.md).

## 1.4. Aprendizagem de horários P17-B (DECIDIDO)

Para sugerir **dias e horas por conta/plataforma depois da produção**, o M4 disponibiliza ao serviço de recomendação **horários de publicação efetivos** e resultados disponíveis, com origem, fuso, data/janela, métricas compatíveis, amostra e confiança. Ter publicado num certo horário não demonstra que esse horário **causou** melhor desempenho. Dados escassos/incomparáveis devem ser declarados, permitindo **estimativas heurísticas claramente identificadas** em vez de precisão falsa.

Recomendações devem ainda considerar **audiência/fuso, tipo de conteúdo, campanha e agenda Postiz existente**. O M4 **não** seleciona automaticamente dias/horas finais, não modifica agenda, não publica e não inventa métricas. A sugestão editável entra apenas no segundo gate humano. Ver [HORARIOS.md](HORARIOS.md).

## 1.5. Cadência semanal adaptativa P18-B (DECIDIDO)

Para sugerir **quantidade de publicações por semana por projeto/plataforma**, M4 fornece métricas reais com proveniência, denominadores, janelas comparáveis, resultados por formatos e tendências de campanha, além de capacidade/custo quando observados. A recomendação M1 respeita **limites mínimos e máximos definidos pelo operador**, e a capacidade comprovada do Motor 2/Nexus. Não interpretar correlação entre cadência e desempenho como causalidade demonstrada; ausência de dados implica sinalização de incerteza, não alvo «ótimo» inventado.

**Cadência é meta, não autorização:** um número semanal não inicia produção de temas não aprovados, não dispensa gate final e não modifica agenda Postiz. Distinguir desempenho do **plano** (sugerido, selecionado, produzido, agendado confirmado e publicado comprovado), relatando défices sem duplicar publicações nem confundir redes. Ver [HORARIOS.md](HORARIOS.md) §1.1.

## 1.6. Memória editorial semântica P20-B (DECIDIDO)

O Motor 4 fornece ao Motor 1 **histórico e metadados comprováveis** das peças/publicações do mesmo projeto Nexus: tema, ângulo, afirmações centrais quando disponíveis, tipo/versão da peça-base, canais, data, estado real e resultados observados, com proveniência. **P20-B** requer comparar essas informações **semanticamente** antes de recomendar novas oportunidades, mostrando conteúdos semelhantes e justificando **novas evidências, perspetivas diferentes, atualizações relevantes ou aprofundamento**.

**Não confundir distribuição com repetição editorial:** uma peça-base com variantes em redes diferentes é uma ideia, mesmo que as publicações e métricas sejam separadas. Resultados/engagement da peça antiga são sinais históricos, mas não provam que uma repetição vá funcionar ou que haja novidade. Nenhuma memória de outra marca se torna base factual privada para este projeto; agregações permitidas preservam isolamento. **M4 não aprova temas nem bloqueia publicações.** Ver [MEMORIA_EDITORIAL.md](MEMORIA_EDITORIAL.md).

## 2. Catálogo mínimo

| Grupo | Métricas / eventos candidatos | Observações |
|---|---|---|
| Distribuição | impressões, visualizações, alcance único, seguidores vs. não seguidores, tráfego de descoberta | Origem e definição por plataforma |
| Retenção | tempo médio visto, tempo total, duração do vídeo, taxa de conclusão, percentagem média vista, retenção inicial, curva por instante, replays | Nem tudo está disponível via API; métricas com denominador |
| Interação | likes/gostos, comentários, partilhas, guardados, visitas ao perfil, novos seguidores | Absolutos e taxas quando o denominador existe |
| Tráfego | cliques no link, visitas/sessões, usuários únicos, CTR, origem/meio/campanha/creative | Network click ≠ sessão do site |
| Conversão | início/ conclusão registo, lead, reunião, ativação, download, wishlist, compra, receita atribuída | Evento e definição personalizados ao projeto |
| Custos | tempo e tokens, imagens, TTS, vídeo, render, transcodificação, storage, fornecedor, custos pagos e estimados | Não misturar custo marginal e subscrição integral |
| Operação | tempo de etapa, revisões, taxa de aprovação, rejeições, falhas, gasto por vídeo, posts preparados/publicados | Produção e controlo de qualidade |
| Experimentação | hipótese, variante, exposição, resultado, confiança, aprendizados | Separar observação de inferência causal |

## 3. Fórmulas sugeridas (apenas quando há denominadores compatíveis)

- **Taxa de conclusão** = reproduções que chegam ao fim / reproduções elegíveis × 100.
- **Retenção média percentual** = tempo médio de visualização / duração × 100, apenas quando as definições da rede permitem tal comparação; replays podem exceder 100%.
- **Engagement por alcance** = (gostos + comentários + partilhas + guardados) / alcance × 100. Separar os componentes; não somar automaticamente eventos de plataformas diferentes.
- **CTR de ligação** = cliques mensuráveis / impressões elegíveis × 100.
- **Conversão de visita** = conversões atribuídas / visitas identificadas × 100.
- **Custo por lead** = custos atribuídos à campanha / leads atribuídas (se leads > 0).
- **ROI** = (receita atribuída − custo atribuível) / custo atribuível × 100, apenas quando receitas/custos atribuídos são observáveis. Caso contrário: N/D, nunca cálculo fictício.

Guardar **numerador, denominador, unidade, fórmula e versão da definição**, não apenas percentagens. Diferenças de sinalização de um fornecedor devem ficar num adaptador.

## 4. Modelo de observação recomendado

Chaves: projetoId, **campanhaId opcional/nulo para conteúdo contínuo**, oportunidadeId, pecaId, varianteId, publicacaoId, plataforma, contaId, observadoEm, janelaInicio, janelaFim, publicadoEm, fonte ('manual', 'api', 'analytics', 'estimativa'), definicaoMetricasVersao, medicao/valor/unidade, estadoDisponibilidade, qualidade/confiança, recolhaId e referência de evidência.

**Estados:** observado, estimado, indisponível, por-sincronizar, falha-de-recolha, oculto-sem-permissão. Zero só quando explicitamente devolvido como zero. Guardar histórico de snapshots para análises temporais sem apagar o que foi observado.

**Cadência sugerida, não aprovada definitivamente**: pontos em 2h, 24h, 72h, 7d e 30d e recolha diária quando permitido. Se a API só der métricas cumulativas, anotar essa semântica. Não acionar IA/geração a cada refresh do dashboard.

## 5. Atribuição e funil

Cadeia recomendada:

```text
Projeto -> **Campanha opcional** -> Ideia -> Criativo -> Variante (sem campanha, Ideia liga diretamente ao Projeto)
       -> Publicação (rede/conta) -> Clique com UTM -> Visita
       -> Evento (registo/lead/wishlist) -> Conversão/receita (se observável)
```

Usar `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` para distinguir redes e variantes, com IDs estáveis que não exponham dados pessoais. Onde aplicável, GA4 ou analytics próprio da app/site regista eventos de conversão. Links, redirects e canais sem link rastreável geram atribuição **parcial**. Visualizações não equivalem a clientes. Tráfego orgânico sem UTM, dispositivos trocados e conversões posteriores limitam atribuição.

Não armazenar dados pessoais brutos no painel social se bastarem contagens agregadas. Rever consentimento/RGPD e termos dos serviços antes de importar eventos individuais. Receita atribuída é diferente de receita incremental comprovada.

## 6. KPIs por projeto (proposta de configuração)

| Projeto | KPI prioritário proposto | Indicadores auxiliares |
|---|---|---|
| UtopIA | Leads qualificadas / reuniões | visitas serviço, formulários, propostas |
| Vefi | Registos e utilizadores ativados | visitantes, CTR, ativação |
| The Hidden Layer | Retenção e crescimento de audiência recorrente | conclusão, seguidores, partilhas |
| Car Enterprise | Wishlists / tráfego da página do jogo | visualizações de trailers, cliques, procura |

O KPI principal (North Star) e metas numéricas finais por projeto **ainda carecem de aprovação**. Uma publicação com muitos views não é automaticamente superior a outra que gera resultados de negócio.

## 7. Aprendizagem e experiências controladas

**DECIDIDO:** **Motor 4** deve produzir recomendações sustentadas no histórico do projeto e em experiências controladas. Guardar por variante: tema, hook, primeiros segundos, duração, estrutura, voz, estilo, ritmo, legendas, CTA, formato, canal e horário, custo e fornecedor (quando aplicável). A experiência regista antes de publicar hipótese, variável a testar, população/condições, métrica primária, janela e limite mínimo de observações. Pode terminar `inconclusiva` sem modificar a rubrica. Recomendações para Motor 1 citam publicações, medições, datas e confiança.

**PROPOSTO:** snapshots em 2h/24h/72h/7d/30d; não assumir API em tempo real, sincronização diária ou acesso a curvas de retenção sem prova. O contrato deve distinguir faltas, atrasos e estimativas.

## 8. Comparação justa

- Por **projeto, plataforma, conta, formato e janela desde a publicação**.
- Orgânico vs. promovido separados; assinalar promoção e custo.
- Mediana histórica, distribuição e número de peças; evitar comparar somente com um viral excecional.
- Métricas insuficientes ou janelas divergentes tornam comparação inconclusiva.
- A/B só quando hipótese e variável primária são registadas antes de observar os resultados; diferenças podem dever-se à distribuição/algoritmo e não à variante.
- Não assumir causalidade de correlações; recomendações listam publicações e medições que sustentam a hipótese.

## 9. Dashboard — funcional primeiro, visual depois (DECIDIDO)

**F1 não prevê design detalhado do dashboard.** O separador Social já existente no Nexus só necessita de uma interface funcional e acessível que:
- **Adicionar projeto** lista todos os projetos Nexus; pode configurar perfis Social em rascunho. A lista de pesquisa e relatórios só contém projetos Social configurados, ativos e com branding completo; não cria projeto Nexus independente.
- Mostra oportunidades, fontes e estados de pesquisa diária e relatório semanal.
- Permite aprovar tema e pacote final em gates separados com estado persistente.
- Mostra prévias, publicação real/manual/pendente e dados analíticos apenas quando existem, com origem/recência e ausência explícitas.
- Permite filtrar por projeto, conta/canal e intervalo para validar resultados e impedir mistura entre marcas.

**Depois de os motores e dados reais estarem funcionais**, planear UX, hierarquia de informação, gráficos, layouts, sete áreas de informação propostas (Overview, Intelligence, Studio, Publishing, Analytics, Experiments, Costs), responsividade avançada e acabamento visual. Estas sete áreas não são uma encomenda de sete páginas na F1. Nada de dashboards decorativos com números simulados apresentados como resultados.

## 10. Dependências para implementar

Inventariar métricas e permissões reais por plataforma; definir eventos das apps/sites; aprovar KPI prioritário e janela; evoluir contrato v1 com histórico sem exceder limites de retrato. Ver ALINHAMENTO_CONTRATO_V1.md e auditoria-f0.md §4.3.
