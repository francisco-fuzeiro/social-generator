# Verificação factual proporcional ao risco — contrato funcional

> **DECIDIDO na entrevista P21-B (21/11/2026):** o Motor 2 identifica afirmações verificáveis nos conteúdos, associa evidências e classifica **risco e confiança por afirmação**. Afirmações financeiras, legais, médicas, sensíveis ou historicamente controversas exigem prova mais forte e eventual revisão humana especializada. Factos incertos/contraditórios são claramente apresentados no gate final. **Afirmações essenciais sem verificação suficiente impedem a peça de ser classificada como pronta para publicação.** Esta é uma decisão de produto e especificação, **não uma capacidade já implementada**.

## 1. Abrangência e princípios

- A verificação aplica-se ao **guião, narração, legendas, texto em cena, números/gráficos, título, copy e CTA**. Uma peça factual pode ter múltiplas afirmações distintas, incluindo alegações implícitas feitas por montagem ou gráficos.
- **Motor 1** recolhe fontes, contexto e riscos iniciais, mas **uma oportunidade aprovada não equivale a factos verificados no conteúdo final**. **Motor 2** executa QA factual da versão produzida e das suas variantes com o contexto exato.
- Classificar por **risco/consequência** e **confiança/qualidade da prova**, e não só pela dificuldade de obter uma fonte. A relevância de uma afirmação para a tese do vídeo também importa. Não inventar percentagens de confiança nem usar um score LLM como prova factual.
- Diferenciar **factos verificáveis, estimativas/projeções, opiniões/hipóteses, comparações, dados sujeitos a atualização e citações**; não transformar perspetivas contestadas em factos universais nem tratar duas fontes secundárias derivadas da mesma origem como confirmação independente.
- **Maior exigência de prova** para finanças/fiscalidade, medicina, lei, segurança, alegações de investimento, números económicos, alegações comerciais com impacto no consumidor e questões históricas controversas. Verificar **país, período, versão da lei/feature, população e definições das métricas** quando aplicável.
- Fontes devem ter **proveniência rastreável**, URL/referência, data de acesso, data de publicação/validade quando conhecida, excerto/ponto específico e relação à afirmação. Preferir **fontes primárias/oficiais** quando adequado; pesquisar independência, atualidade e eventuais conflitos. Uma fonte não acessível não é prova de confirmação.
- **Revisão humana escalada por risco:** alegações críticas, contraditórias ou com prova insuficiente precisam de decisão humana antes de publicar; quando essencial e não verificada, manter `QA_bloqueado` e propor **corrigir, retirar ou reformular com incerteza honesta**. A mera aprovação genérica da peça não transforma uma alegação falsa/sem prova em verificada; a decisão sobre tratamento de casos ambíguos terá políticas técnicas detalhadas.
- **Sem aconselhamento individual implícito:** marketing da Vefi não deve fingir aconselhamento fiscal/financeiro específico nem prometer resultados; dados de produto só se verificam face a materiais aprovados/versão real. The Hidden Layer diferencia fontes, cronologia, causalidade e debates interpretativos. UtopIA não anuncia funcionalidades, clientes ou resultados sem prova.
- **Sem travar material não sensível arbitrariamente:** comentários criativos e opinião distinguem-se de afirmações factuais; conteúdo de baixo risco passa por QA proporcional, sem exigir confirmação manual palavra a palavra. Contudo, risco baixo não significa licença para inventar dados ou usar informação proibida.
- **Verificar diferenças entre variantes P15-B:** se uma adaptação de hook, título, legenda, recorte ou CTA mudar o sentido de uma afirmação, repetir o QA dessa alegação e exigir gate final para a nova versão/hash. Não assumir que QA da peça-base cobre automaticamente toda a copy das redes.

## 2. Processo funcional do Motor 2

1. **Extrair as alegações** do guião/manifesto de factos e das versões finais: frases, números, gráficos, textos e copy de cada variante, com ID estável, posição temporal ou segmento quando aplicável.
2. **Classificar** tipo de alegação e risco (baixo/moderado/elevado/crítico, **rótulos técnicos propostos**) tendo em conta domínio, potencial de dano, centralidade da afirmação, atualidade, público e contexto; destacar afirmações que exigem evidência forte.
3. **Associar evidências** por afirmação, com referência, data, origem/independência, excerto ou dado que realmente sustenta a frase. Registar igualmente fontes que a contradigam e limites de interpretação.
4. **Determinar estado de verificação** (`confirmada`, `parcial`, `contestada`, `sem-fonte`, `desatualizada`, `não-verificável`, **proposta**), sem converter falta de fonte em confirmação por plausibilidade.
5. **Aplicar QA e escalamento:** para risco elevado/critico, verificar qualidade, contemporaneidade, coerência e adequação territorial; pedir revisão humana quando houver conflito/incerteza. Para **afirmação essencial sem verificação suficiente**, bloquear estado **«pronto para publicar»** até revisão/correção/remoção válida. Não enviar pacote com QA factual bloqueado ao Motor 3/Postiz.
6. **Expor na revisão final** resumo da confiança/risco por peça, lista de problemas que importa resolver, fontes e passagens do vídeo/versões associadas. Operador pode pedir correções localizadas (P7-B/P8-B), mantendo histórico e QA. Os dois gates existentes não são substituídos por uma aprovação extra obrigatória por frase.
7. **Registar versões e rastreabilidade:** alterações factuais, title/copy, visualizações ou narração exigem nova análise de partes afetadas, novo hash e reaprovação do pacote/conta/agenda quando materialmente diferente. Manter critérios de custo P9-B, limites Nexus e QA de direitos.
8. **Publicação e aprendizagem:** M3/Postiz só recebe pacote final aprovado e sem bloqueio de QA. M4 pode fornecer histórico de correções ou performance, mas **não valida factos por popularidade** nem edita posts agendados.

## 3. Estados e modelo técnicos PROPOSTOS

`FactClaim`: `claimId`, `nexusProjectId`, `creativeVersionId`, `variantId?`, `textOrMeaning`, `segmentTimeMs?`, `claimType`, `domain`, `riskLevel`, `centrality`, `region`, `effectiveDate?`.

`ClaimEvidence`: `claimId`, `sourceRef`, `sourceType`, `observedAt`, `publishedAt?`, `supportExcerpt`, `supportsOrContradicts`, `independenceNote`, `limitations`.

`FactCheckResult`: `claimId`, `verificationStatus`, `confidenceRationale`, `blocking`, `issues`, `reviewerDecision?`, `reviewedAt?`, `affectedVariantHashes[]`.

**Não foram definidos limiares numéricos universais, número obrigatório de fontes por risco ou fornecedores de fact-check. P22-B define a orientação para referências públicas adaptadas ao canal, mas os detalhes técnicos/capacidades de API continuam por provar**. São propostas a validar por domínio e recursos, com independência dos provedores e sem API paga não autorizada.

## 4. Testes de aceitação

1. Narração The Hidden Layer com data histórica verificável associa uma fonte que suporta especificamente a data; uma fonte que só menciona o assunto não passa como prova.
2. Uma alegação sobre impostos em Portugal é analisada com enquadramento territorial, data de vigência e fonte oficial atual; uma fonte estrangeira/antiga não valida uma regra portuguesa atual.
3. Número estatístico com fonte de período/denominador diferente é assinalado como inadequado em vez de confirmado.
4. Duas fontes contraditórias geram **alerta de conflito, referências e revisão humana**; o QA não marca a afirmação como incontroversa.
5. Afirmação **essencial de risco elevado sem prova suficiente** gera **bloqueio de pronto para publicação**; nem aprovação editorial genérica nem disponibilidade do Postiz eliminam o bloqueio.
6. Comentário explicitamente opinativo de baixo risco não exige múltiplas provas, mas não pode encobrir uma alegação factual como opinião.
7. Título/CTA de variante de TikTok que exagera a conclusão da peça-base recebe QA próprio; aprovação Instagram não o torna válido.
8. Substituição localizada de afirmação controversa cria versão/hash novo e QA das partes dependentes; só a versão segura e aprovada pode seguir ao M3.
9. Fonte inacessível, permissões insuficientes ou custo não autorizado levam a estado **indeterminado/bloqueado conforme risco**, sem afirmar pesquisa realizada.
10. Não incluir segredos, dados de clientes ou documentos de fontes privadas em repositório público ou serviços externos não autorizados.

## 5. Fontes públicas — P22-B aprovado

**P22-B aprovado:** a lista pública de referências deve ser **acessível e adaptada ao canal** (descrição/caption, comentário fixado quando tecnicamente possível ou página pública de fontes autorizada), com **referências em ecrã seletivas** para afirmações importantes e aprovação humana da divulgação no segundo gate. Esta política **não dispensa QA interno por afirmação nem permite divulgar fontes privadas**. Detalhe em [CITACOES_PUBLICAS.md](CITACOES_PUBLICAS.md).

**A entrevista de requisitos foi encerrada** a pedido do utilizador; detalhes restantes passam a backlog técnico, sem autorização implícita para implementar.

Ver [DECISOES.md](DECISOES.md), [MOTORES.md](MOTORES.md), [REVISOES.md](REVISOES.md), [REQUISITOS.md](REQUISITOS.md), [ALINHAMENTO_CONTRATO_V1.md](ALINHAMENTO_CONTRATO_V1.md).
