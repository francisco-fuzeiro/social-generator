# Revisões inteligentes do Motor 2 — contrato de produto

> Entrevistas **P7-B, P8-B e P9-B**, 20/11/2026: **DECIDIDO** rever de forma localizada, preservar partes válidas, receber comentários por instantes + instruções gerais e fazer **até 3 tentativas de QA/correção por ronda de revisão (incluindo a aplicação inicial)**. Algoritmos e testes técnicos ainda não implementados.

## Decisão central

Quando o operador revê a prévia do vídeo ou carrossel e pede modificações (por exemplo, narração numa passagem ou duas animações), o **Motor 2 deve alterar apenas os segmentos/recursos necessários**, preservando os componentes corretos sempre que tecnicamente possível. **Não regenerar automaticamente a peça completa** por causa de uma alteração localizada.

Não prometer preservação perfeita quando existem dependências: mudar a duração da voz pode afetar sincronização, legendas e transições. Nesses casos, o motor identifica os elementos afetados, **explica a ampliação do âmbito** e executa apenas o recálculo necessário, com avaliação da qualidade do resultado.

## Fluxo funcional

1. Operador abre uma peça concluída na revisão pré-publicação (segundo gate ainda **não aprovado**).
2. **P8-B:** pausa a prévia no momento pretendido e adiciona um comentário ligado a esse **instante e à versão exata**. Pode repetir em vários instantes (ex.: 00:12 animação; 00:38 narração) e adicionar **instruções gerais** não ligadas a um instante. Envia as observações reunidas ao Motor 2 como pedido de revisão. Não é necessário editor de timeline completo.
3. Motor 2 identifica segmentos e dependências afetados, estima custo/risco e distingue **mudança localizada** de **mudança estrutural**.
4. Reutiliza clips, imagens, narração, cenas, gráficos e componentes já válidos. Regenera/renderiza o mínimo necessário; podem ser recalculadas transições e artefactos dependentes.
5. Guarda uma **nova versão imutável** do pacote com diffs/descrição das mudanças, recursos afetados, proveniência, custos e verificações de qualidade.
6. Mostra a prévia atualizada ao operador e permite **comparar com a anterior ou regressar a uma versão anterior**, sem apagar as versões existentes.
7. Só a **aprovação final explícita** da versão exata do pacote, copy, contas/canais e calendário permite encaminhar ao Motor 3/Postiz. Pedidos de revisão não autorizam publicação.

A **fila automática de produção P4-B** pode continuar com outras peças, sujeita a quotas e prioridades do Nexus. A revisão de uma peça não bloqueia todas as restantes, mas deve prevenir alterações concorrentes à mesma peça/versão.

## Feedback na prévia do vídeo — P8-B (DECIDIDO)

**UI funcional no dashboard Nexus, sem antecipar o redesign visual da F4:**

- Reproduzir/pausar a prévia e adicionar comentário ao **tempo atual**; cada nota apresenta o instante identificado (por exemplo, `00:12`) e a descrição da alteração.
- Permitir vários comentários por vídeo, consultar a lista, editar/remover o feedback **antes de enviar** e acrescentar **notas gerais** sobre voz, estilo ou mensagem, sem timestamp.
- Ao submeter, ligar o conjunto de comentários à **versão do vídeo** efetivamente visualizada; após uma revisão que altere timings, **não aplicar timestamps antigos automaticamente à nova versão** sem correspondência validada com cenas/IDs.
- Mostrar a nova versão e as correções relacionadas, mantendo o pedido e feedback anteriores para comparação/recuperação.
- O pedido de revisão **não constitui aprovação final** nem autoriza envio ao Postiz.
- Para carrosséis, pode reutilizar-se o princípio de notas por diapositivo + notas gerais; **granularidade de feedback de carrosséis é proposta funcional**, ainda não foi explicitamente escolhida na entrevista.

**Não é um editor de vídeo completo:** selecionar objetos na tela, desenhar anotações e editar diretamente keyframes/cenas/timeline não são requisitos aprovados da P8-B.

## Limite de correções automáticas — P9-B (DECIDIDO)

Cada **ronda de revisão solicitada pelo utilizador** pode realizar **no máximo três tentativas de execução/validação no total**:

1. **Tentativa 1:** aplicar as alterações localizadas pedidas e executar as verificações de qualidade pertinentes (QA).
2. **Tentativa 2, se necessária:** corrigir automaticamente os defeitos verificáveis identificados na primeira tentativa e voltar a testar.
3. **Tentativa 3, se necessária:** última correção automática e nova verificação; depois **parar** e informar o resultado.

**Parar antes do teto** sempre que os critérios forem cumpridos, houver bloqueio técnico, o limite de recursos/tempo do Nexus for atingido ou forem necessários recursos pagos não autorizados. As três tentativas constituem um **máximo**, não um objetivo nem permissão para gastar.

As verificações automáticas só podem afirmar ter detetado problemas que de facto tenham sido testados: sincronização de legendas/voz quando tecnicamente verificável, erro de render, integridade, formatos, duração, recursos em falta, etc. Qualidade editorial, factual, visual e direitos que não possam ser validados automaticamente **mantêm pendência de revisão humana**. Não inventar sucesso de QA.

Se ainda houver defeitos ao terminar, mostrar ao utilizador a **melhor versão disponível de rascunho**, com **problemas e verificações falhadas/inconclusivas explicitamente identificados**, versões e tentativas realizadas. Um bloqueio de qualidade/segurança não deve ser apresentado como peça pronta para publicar. O operador pode pedir nova ronda, corrigir manualmente ou suspender; **cada nova ronda exige nova ação explícita do operador**. Nenhum retry interminável.

**Histórico e custo:** guardar `attemptIndex` 1–3, resultados QA e causas das correções e hashes/versões de artefactos. As tentativas respeitam quotas, reservas e políticas do Nexus, isolam peças em produção e reutilizam recursos sempre que possível. **Sem chamadas pagas, novas subscrições ou produção integral onerosa sem aprovação prévia**. Este limite de QA não altera os dois gates humanos nem autoriza entrega ao Motor 3/Postiz.

## Modelo técnico sugerido (PROPOSTO)

- `creativeId` estável por peça; `versionId` e `parentVersionId` por revisão; `contentHash` do pacote.
- `revisionRequestId`, `creativeVersionId` e **comentários temporizados** (`timeMs`, `text`, `commentId`; eventualmente `sceneId`) mais `generalNotes`; `targetSegments`, `requestedChanges`, `affectedDependencies`, `estimatedCost`, `reasonForExpandedScope`. **Nomes dos campos PROPOSTOS**, não schema aprovado.
- Manifesto de cenas e recursos com IDs estáveis e hashes, referências à biblioteca externa e controlo de direitos.
- `ReusedAssetRefs` e `RebuiltAssetRefs` para distinguir cache/reutilização de criação nova.
- Proveniência de guião, voz, legendas, visuais, composição, parâmetros de render e ferramenta/adaptador utilizado.
- Estados de revisão sugeridos: `pedida`, `em-avaliacao`, `em-producao`, `pronta-para-revisao`, `falhou` e `substituida`.

**Implementação Remotion-first:** preferir composições por cenas com assets/versionamento e render incremental de artefactos independentes quando seguro; evitar prometer re-render parcial do MP4 final sem medir capacidades e dependências de áudio/vídeo. FFmpeg e caches são detalhes de implementação a provar.

## Variantes de plataforma e revisões — P15-B

**Peça-base + variantes editáveis:** uma correção localizada P7-B pode afetar só a peça-base ou uma das variantes por plataforma. Manter registo de dependências entre cenas/áudio/legendas/assets e versões. Se a base mudar, **identificar variantes potencialmente afetadas** e propor atualização seletiva; não substituir silenciosamente versões já aprovadas ou em Postiz. **QA por variante** e novo segundo gate para cada pacote modificado antes de envio ao Motor 3. Revisão com notas temporizadas P8-B é sempre relativa à versão exata **da peça-base ou variante visualizada**. Limite de até três tentativas P9-B permanece **por ronda de revisão**, não é permissão para criar runs ilimitadas por plataforma.

Ver [VARIANTES.md](VARIANTES.md).

## QA factual e revisões — P21-B (DECIDIDO)

No Motor 2, o QA factual **extrai afirmações verificáveis** do guião, narração, legendas, cenas, gráficos e copy/título das variantes e guarda **risco, confiança, fontes e evidência por afirmação**. A criticidade de finanças, fiscalidade, lei, medicina e temas históricos controversos exige verificação reforçada e **escalamento humano** perante conflito/informação inconclusiva. **Afirmações centrais não verificadas deixam a peça bloqueada para publicação**, com problema/trecho/fonte visíveis; aprovação editorial genérica não elimina bloqueio factual.

Uma correção de data/número/facto, texto em cena, legenda, voz, título ou CTA pede **nova versão/hash e QA das dependências afetadas**, sem regeneração total quando bastar alteração localizada P7-B. Os comentários por timestamp P8-B referem a versão que contém a afirmação; QA por variante P15-B aplica-se à copy e aos hooks específicos. O máximo de três tentativas P9-B permanece **por ronda de revisão**, sem contabilizar «mais tentativas» por existirem vários factos; caso persistam incertezas, parar e mostrar relatório factual sem marcar publicável. Ver [FACT_CHECK.md](FACT_CHECK.md).

## Segurança, custos e idempotência

- Revisões não podem implicar uso de fornecedor pago/novas APIs sem aprovação. Se a mudança exigir gastar ou regravar o vídeo todo, sinalizar impacto/custo antes de executar despesas relevantes.
- Não reescrever ficheiros antigos com o mesmo ID/hash, não apagar approvals ou histórico e não propagar versões antigas para o Postiz.
- A aprovação final pertence à versão exata. **Qualquer alteração material após esse gate invalida a aprovação e requer nova decisão**; agendamentos existentes no Postiz são tratados segundo a política própria, nunca alterados silenciosamente.
- Recurso protegido/sem licença não se torna reutilizável por estar em cache.
- Duplicação da mesma solicitação de revisão deve ser idempotente ou explicitamente rejeitada segundo o contrato adotado.

## Testes de aceitação

1. Pedido de corrigir apenas narração da cena 3 preserva cenas 1, 2 e demais assets quando as dependências o permitam, registando o que foi de facto reconstruído.
2. Uma mudança de narração com duração diferente gera atualização das legendas/transições dependentes e justifica a ampliação de âmbito.
3. O operador consegue consultar/recuperar a versão anterior sem perda de recursos ou histórico.
4. Cada revisão tem versão e hash novos se o conteúdo mudou; a aprovação de pacote antigo não se aplica ao novo.
5. Rever a peça A não interrompe desnecessariamente a produção das peças B e C da fila.
6. Sem autorização do segundo gate, nenhuma versão é enviada ao Postiz.
7. Se o pedido local não puder ser feito sem regeneração estrutural ou gasto adicional, o motor informa o motivo e não oculta a operação/custo.
8. Pausar em 00:12 e 00:38 gera **dois comentários com tempos e texto separados**, mais notas gerais sem tempo; Motor 2 recebe ambos associados ao ID da versão.
9. Numa nova versão com duração/timing alterado, comentários da versão anterior não mudam de alvo silenciosamente; ficam preservados no histórico.
10. O operador consegue submeter vários comentários numa única ronda de revisão, sem que cada nota desencadeie automaticamente um render ou despesa.
11. Numa revisão com legenda dessincronizada, conta-se a aplicação inicial como tentativa 1; no máximo duas correções automáticas adicionais, interrompendo logo após sucesso ou bloqueio.
12. Após três tentativas sem qualidade suficiente, o estado assinala QA falhado/inconclusivo e apresenta a melhor versão disponível com relatório; **não marca publicável automaticamente nem envia ao Postiz**.
13. Uma tentativa que precise de fornecedor pago não é iniciada sem autorização; não reinicia contadores para contornar o teto de recursos.

## Ainda por decidir

- **Fechado em P8-B:** feedback na prévia por timestamp e instruções gerais; **não** editor visual completo. Detalhes do control de edição de notas e feedback para carrosséis continuam por especificar.
- **Fechado em P9-B:** até 3 tentativas por ronda (1 aplicação + até 2 correções), com QA e escalada ao operador após falhas. Permanecem por definir os **limites concretos de CPU/tempo/custos por ronda**, os testes automáticos disponíveis por formato e o comportamento de re-render incremental.
- Estratégias de cache, segmentos e dependências após prova de render e consumo.
- Retenção/storage e acesso a versões antigas.

Ver [MOTORES.md](MOTORES.md), [REQUISITOS.md](REQUISITOS.md), [DECISOES.md](DECISOES.md) e [ALINHAMENTO_CONTRATO_V1.md](ALINHAMENTO_CONTRATO_V1.md).
