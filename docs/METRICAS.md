# Analytics, atribuição e aprendizagem — contrato funcional

> Documento de requisitos; não implica que APIs, contas ou dashboards estejam conectados. **Null/indisponível não é zero**. Dados de exemplo têm de ser identificados como exemplo. Fórmulas e cadências abaixo são propostas a confirmar no contrato técnico.

## 1. Princípio

Medir **resultados de negócio e qualidade** por projeto além de métricas de vaidade. Separar:
1. métricas publicadas pela rede;
2. tráfego com origem identificada no site/app;
3. eventos/conversões internos;
4. atribuição inferida/estimada;
5. custos realmente incorridos.

Comparações apenas dentro de definições, janelas e denominadores compatíveis. Uma visualização no YouTube não é necessariamente uma visualização no Instagram ou no TikTok.

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

Chaves: projetoId, campanhaId, oportunidadeId, pecaId, varianteId, publicacaoId, plataforma, contaId, observadoEm, janelaInicio, janelaFim, publicadoEm, fonte ('manual', 'api', 'analytics', 'estimativa'), definicaoMetricasVersao, medicao/valor/unidade, estadoDisponibilidade, qualidade/confiança, recolhaId e referência de evidência.

**Estados:** observado, estimado, indisponível, por-sincronizar, falha-de-recolha, oculto-sem-permissão. Zero só quando explicitamente devolvido como zero. Guardar histórico de snapshots para análises temporais sem apagar o que foi observado.

**Cadência sugerida, não aprovada definitivamente**: pontos em 2h, 24h, 72h, 7d e 30d e recolha diária quando permitido. Se a API só der métricas cumulativas, anotar essa semântica. Não acionar IA/geração a cada refresh do dashboard.

## 5. Atribuição e funil

Cadeia recomendada:

```text
Projeto -> Campanha -> Ideia -> Criativo -> Variante
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

## 7. Comparação justa

- Por **projeto, plataforma, conta, formato e janela desde a publicação**.
- Orgânico vs. promovido separados; assinalar promoção e custo.
- Mediana histórica, distribuição e número de peças; evitar comparar somente com um viral excecional.
- Métricas insuficientes ou janelas divergentes tornam comparação inconclusiva.
- A/B só quando hipótese e variável primária são registadas antes de observar os resultados; diferenças podem dever-se à distribuição/algoritmo e não à variante.
- Não assumir causalidade de correlações; recomendações listam publicações e medições que sustentam a hipótese.

## 8. Dashboard no separador Social (layout PROPOSTO)

1. **Overview**: filtro global/projeto, KPIs, objetivos, funil e evolução.
2. **Intelligence**: tendências, fontes, oportunidades e confiança.
3. **Content Studio**: produção e gates, variantes, prévias, custos.
4. **Publishing**: calendário editorial, pacotes e estado real de publicação.
5. **Analytics**: retenção, alcance, engajamento, conversões, comparações.
6. **Experiments**: hipóteses, A/B, amostras e aprendizados.
7. **Costs & Operations**: quotas, latências, falhas e despesas.

Filtros por projeto, plataforma, campanha, formato e período. Estado vazio ≠ zero. Em F1, dados de exemplo explicitamente marcados; não declarar live.

## 9. Dependências para implementar

Inventariar métricas e permissões reais por plataforma; definir eventos das apps/sites; aprovar KPI prioritário e janela; evoluir contrato v1 com histórico sem exceder limites de retrato. Ver ALINHAMENTO_CONTRATO_V1.md e auditoria-f0.md §4.3.
