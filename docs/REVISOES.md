# Revisões inteligentes do Motor 2 — contrato de produto

> Entrevistas **P7-B e P8-B**, 20/11/2026: **DECIDIDO** rever de forma localizada preservando partes válidas, com histórico e recuperação de versões; **feedback na prévia por momentos do vídeo, incluindo comentários gerais**. Os pormenores técnicos e limites de tentativas continuam propostos, não implementados.

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

## Modelo técnico sugerido (PROPOSTO)

- `creativeId` estável por peça; `versionId` e `parentVersionId` por revisão; `contentHash` do pacote.
- `revisionRequestId`, `creativeVersionId` e **comentários temporizados** (`timeMs`, `text`, `commentId`; eventualmente `sceneId`) mais `generalNotes`; `targetSegments`, `requestedChanges`, `affectedDependencies`, `estimatedCost`, `reasonForExpandedScope`. **Nomes dos campos PROPOSTOS**, não schema aprovado.
- Manifesto de cenas e recursos com IDs estáveis e hashes, referências à biblioteca externa e controlo de direitos.
- `ReusedAssetRefs` e `RebuiltAssetRefs` para distinguir cache/reutilização de criação nova.
- Proveniência de guião, voz, legendas, visuais, composição, parâmetros de render e ferramenta/adaptador utilizado.
- Estados de revisão sugeridos: `pedida`, `em-avaliacao`, `em-producao`, `pronta-para-revisao`, `falhou` e `substituida`.

**Implementação Remotion-first:** preferir composições por cenas com assets/versionamento e render incremental de artefactos independentes quando seguro; evitar prometer re-render parcial do MP4 final sem medir capacidades e dependências de áudio/vídeo. FFmpeg e caches são detalhes de implementação a provar.

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

## Ainda por decidir

- **Fechado em P8-B:** feedback na prévia por timestamp e instruções gerais; **não** editor visual completo. Detalhes do control de edição de notas e feedback para carrosséis continuam por especificar.
- Número de revisões automáticas/tentativas, limites por peça e política de escalada.
- Estratégias de cache, segmentos e dependências após prova de render e consumo.
- Retenção/storage e acesso a versões antigas.

Ver [MOTORES.md](MOTORES.md), [REQUISITOS.md](REQUISITOS.md), [DECISOES.md](DECISOES.md) e [ALINHAMENTO_CONTRATO_V1.md](ALINHAMENTO_CONTRATO_V1.md).
