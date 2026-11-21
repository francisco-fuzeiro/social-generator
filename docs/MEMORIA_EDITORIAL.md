# Memória editorial e prevenção inteligente de repetição

> **DECIDIDO na entrevista P20-B (21/11/2026):** antes de recomendar temas, o Motor 1 compara semanticamente cada oportunidade com **conteúdos anteriores do mesmo projeto Social**. Assinala semelhanças e referências concretas; só recomenda revisitar um assunto quando existe **valor adicional editorial claramente demonstrável** — novas evidências, perspetiva diferente, atualização relevante ou aprofundamento. O utilizador decide no primeiro gate se a oportunidade avança. **É um contrato funcional; não foi implementado.**

## 1. Princípio

- **Não bloquear automaticamente qualquer assunto já tratado** só porque o tópico amplo coincide. «História do dinheiro» pode ter vários episódios substantivamente diferentes; **repetir o mesmo guião, factos centrais e ângulo com palavras novas não cria valor**.
- Comparar oportunidades com o **histórico editorial do projeto**, incluindo temas publicados, agendados, aprovados ou já em produção quando os dados existirem, para evitar duplicações simultâneas. Distinguir **mesmo tema**, **mesmo ângulo/afirmações**, **formato/canal** e **versão/variante da mesma peça-base**.
- Para cada semelhança material, mostrar ao operador **o que já foi produzido/publicado** (título, link/ID, data/estado, ângulo, resumo e canais quando disponíveis), em vez de esconder a origem do alerta.
- Recomendar revisita **apenas se a diferença acrescentar valor**: investigação nova, factos atualizados, ponto de vista alternativo genuíno, melhor explicação de uma subquestão, evolução temporal ou aprofundamento. Explicar a **novidade concreta** e respetivas fontes; não assumir que popularidade anterior por si só valida uma repetição.
- O operador **pode aceitar ou rejeitar a oportunidade** no primeiro gate; se houver semelhança elevada mas nenhuma novidade comprovada, o Motor 1 **não a apresenta como nova recomendação de qualidade**. Um pedido explícito do operador para revisitar um assunto pode ser tratado como novo tema, mantendo o alerta e os gates, não como seleção silenciosa.
- **Biblioteca editorial por projeto Nexus**: separar claramente Vefi, UtopIA e The Hidden Layer. Permitir aprendizagem **agregada** de padrões, mas não misturar conteúdos, materiais privados, marcas ou perfis. Não pesquisar nem criar recomendações para Social inativo.
- A regra de **validade máxima de 7 dias** é do tema enquanto oportunidade pesquisada e revalidada; não é um prazo após o qual se pode repetir qualquer post. **Revisitar não renova automaticamente a relevância** nem dispensa nova verificação factual e de fontes.

## 2. Fluxo de decisão no Motor 1

1. Recolher novas oportunidades e contextos com as fontes e datas obrigatórias.
2. Consultar os registos editoriais **do mesmo projeto** e comparar **significado, pergunta central, argumento/factos, ângulo, público, formato e relação com publicações anteriores**.
3. Classificar internamente (proposta técnica) `novo`, `relacionado-com-novidade`, `possivel-duplicado`, `duplicado-sem-valor` ou `indeterminado`; **escores e limiares numéricos estão por validar**, não há regra universal de similaridade.
4. Para um conteúdo relacionado, apresentar diferenças, evidências da novidade e links/IDs do histórico. **Se faltar valor novo, não recomendar a duplicação como oportunidade independente** nem incluí-la artificialmente no lote de cinco temas.
5. Para incerteza ou fontes indisponíveis, explicitar que a análise é inconclusiva, não afirmar «novo» sem prova; pedir revisão humana quando necessário.
6. **Só depois o operador seleciona temas no gate 1**. Não produzir vídeo automaticamente, não decidir canais/horários finais e não enviar nada ao Postiz.
7. Manter ligação `revisitsTopicId`, `relatedCreativeIds`, `noveltyEvidence` quando aplicável, para explicar recomendações e permitir o Motor 4 avaliar novas abordagens.

## 3. Interação com decisões anteriores

- **P19-B — alternativas perante défice:** temas evergreen, novos ângulos ou históricos revalidados só entram nas recomendações se passarem a avaliação de **novidade e valor acrescentado P20-B**. Não inventar várias versões do mesmo assunto para atingir a cadência ou o mínimo de cinco temas do lote.
- **P13/P14 — campanhas:** oportunidade de campanha pode revisitar tema anterior se contexto/público/factos/CTA trouxerem novidade concreta; a existência de uma campanha **não dispensa o filtro**.
- **P15/P16 — variantes:** a mesma peça-base publicada em Instagram e TikTok constitui **distribuição multi-rede autorizada**, não duas ideias editoriais duplicadas; não bloquear variantes da mesma peça.
- **P7/P8 — revisões:** correções de vídeo mantêm o mesmo ID editorial com novo versionamento; não são novo tema só por terem novo hash.
- **P3 — gates:** o filtro é do **Motor 1**, antes da seleção humana. O Motor 2 continua a exigir produção/QA; o calendário e aprovação final continuam depois de produzido.
- **Motor 4:** fornece histórico de publicações e resultados com proveniência; pode ajudar a demonstrar saturação de um ângulo, mas **não aprova temas nem determina causalidade**.
- **Postiz:** nenhuma análise de duplicação edita/cancela/reagenda posts já agendados; pode alertar sobre duplicação planeada no Nexus, sem mutações remotas.

## 4. Dados técnicos PROPOSTOS, não implementados

`EditorialMemoryEntry`: `nexusProjectId`, `topicId`, `creativeBaseId?`, `publicationIds[]`, `status`, `title`, `question`, `coreClaims[]`, `angle`, `audience`, `format`, `languages[]`, `createdAt`, `publishedAt?`, `platforms[]`, `sourceEvidenceRefs[]`, `brandProfileVersionId`.

`NoveltyAssessment`: `opportunityId`, `projectId`, `comparedEntryIds[]`, `semanticOverlapIndicators`, `noveltyType`, `newEvidenceRefs[]`, `noveltyRationale`, `confidence`, `reviewStatus`.

Capacidades/arquitetura de comparação (regras, embeddings locais, busca híbrida etc.) **devem ser verificadas e escolhidas posteriormente** conforme dados autorizados, custo, recursos Nexus e portabilidade. Limites numéricos/retensão/estratégia de indexação não ficaram decididos. Não exportar transcrições ou ativos privados para repositório GitHub público nem para serviços externos sem aprovação.

## 5. Testes de aceitação

1. Tema com título diferente, mas **mesmo argumento/factos/ângulo** de vídeo publicado na mesma marca: identificar possível duplicação e mostrar o post existente; não o recomendar como ideia nova sem novidade.
2. Assunto histórico já abordado, mas **nova evidência verificável**: o Motor 1 mostra o vídeo anterior, a evidência e o ângulo diferente, permitindo seleção humana.
3. Conteúdo antigo só passou do prazo de 7 dias: **não** se considera novo automaticamente; exige revalidação factual e verificação da novidade.
4. Uma peça-base distribuída em cinco redes **não** é tratada como cinco conteúdos editoriais repetidos; os resultados das publicações podem continuar distintos.
5. Um vídeo em produção sobre o mesmo assunto gera alerta preventivo antes de escolher outro tema redundante, se o estado estiver acessível.
6. Projeto Vefi não recebe acusações de repetição com base nos vídeos do The Hidden Layer; apenas relações agregadas autorizadas são permitidas.
7. Quatro propostas que apenas reformulam a mesma pergunta não contam como quatro dos cinco temas de um lote; assinalar `lote-incompleto` se necessário.
8. Sem histórico acessível, o Motor 1 indica **«histórico insuficiente»**, não «novidade confirmada».
9. Alerta de duplicação não produz, publica, cancela nem reagenda conteúdos por si; preserva gates humanos.

## 6. Próxima pergunta — P21

**Como controlar a verificação factual e a confiança das afirmações nos conteúdos, especialmente quando um projeto trata de finanças ou mini-documentários?** Possibilidades: QA uniforme, QA por nível de risco com provas por afirmação e escalamento humano, ou confirmação manual de todos os factos. Não confundir esta escolha com o filtro editorial de repetição.

Referências: [DECISOES.md](DECISOES.md), [CICLO_TEMAS.md](CICLO_TEMAS.md), [MOTORES.md](MOTORES.md), [METRICAS.md](METRICAS.md), [REQUISITOS.md](REQUISITOS.md).
