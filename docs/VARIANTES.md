# Peça-base e variantes inteligentes por plataforma — contrato funcional

> **DECIDIDO nas entrevistas P15-B e P16-B (20/11/2026):** o Motor 2 cria uma **peça-base reutilizável** e prepara **adaptações por plataforma apenas quando justificadas**, para vídeos e carrosséis. Alterações possíveis: hook, duração, proporção, legendas, thumbnail/capa, título, copy, hashtags, CTA e formatos permitidos. Reutilizar guiões, cenas e assets válidos, evitando regenerações caras por defeito. **O operador vê e aprova cada variante, canal, conta e calendário no segundo gate, depois da produção.** Implementação ainda pendente.

## 1. Regras decididas

1. **Peça-base canónica:** um tema aprovado (primeiro gate) origina uma produção principal com manifesto, versões, identidade do projeto Nexus, branding/objetivos e, se existir, campanha. A peça-base não é publicada por si só: cada destino aprovado tem um pacote específico.
2. **Adaptações seletivas P15-B/P16-B:** o Motor 1 recomenda **as plataformas de maior potencial para cada tema**, fundamentando público, formato, tendências, histórico e elegibilidade conhecida; **o Motor 2 prepara inicialmente só as variantes para os destinos recomendados** (além da peça-base). Prepara alterações apenas quando justificadas pela rede, formato, comportamento observado/audiência, objetivos, requisitos técnicos e capacidades verificadas de publicação. **Não criar versões diferentes por obrigação** quando a peça-base já serve; quando igual, reutilizar ficheiros e adaptar só metadados necessários.
3. **Peças relacionadas, não produções independentes:** variantes partilham guião/cenas/assets e descendem da versão-base; mudanças pontuais usam revisão localizada P7-B e QA adequado P9-B. Dependências entre alterações e renders devem ser visíveis.
4. **Exemplos de adaptação** (não pressupor automaticamente requisitos de API): duração/recorte/proporção, primeiros segundos e ritmo, texto no vídeo/legendas, thumbnail/capa, título, copy, hashtags e CTA conforme plataforma/conta e campanha. Não distorcer conteúdo factual, claims, branding ou direitos para otimizar uma rede.
5. **Respeitar elegibilidade:** contas/canais configurados são distintos de integrações autenticadas. Não assumir que uma rede aceita determinado formato, tamanho ou integração; verificar capacidades na instância Postiz e na plataforma quando necessário. Uma variante incompatível exige aviso e/ou pacote manual, **nunca publicar num formato alternativo sem aprovação**.
6. **Aprovação independente por destino:** na revisão final **após produção**, mostrar prévia de cada variante e pacote associado a **plataforma, conta, versão/hash, texto, CTA e data/hora sugerida**, com QA, custo, limitações e diferença face à peça-base. Operador aprova/rejeita/corrige cada destino. **Nenhuma variante entra no Motor 3/Postiz sem o seu gate final.**
7. **Não antecipar o calendário:** na seleção inicial o operador **só escolhe temas**. M1 **recomenda as plataformas** com evidência, mas não pede ao operador que as confirme neste gate; M2 prepara apenas os destinos recomendados e que realmente constem da configuração/capacidades. Na revisão final o operador pode **adicionar ou remover** destinos; uma nova variante pedida necessita de preparação e QA antes de a aprovação individual ser possível. **Datas, horas, ordem e contas de publicação são propostas e aprovadas depois da produção**. Se o operador acrescentar destino na revisão final, Motor 2 deve preparar/validar a variante antes do novo gate, sem publicar por inferência.
8. **Medir diferenças reais:** Motor 4 liga as variantes e respetivas publicações a peça-base/campanha (se houver) e compara resultados por **plataforma, audiência, idade do post, formato e janela compatíveis**, distinguindo resultados observados de hipótese; não inferir causalidade automaticamente.

## 1.1. Seleção inicial por recomendações — P16-B (DECIDIDO)

**Motor 1 — Intelligence** deve avaliar, para cada tema aprovado:
- **Público e adequação editorial por rede/conta** do projeto (sem cruzar marcas);
- **Formato, duração, linguagem e narrativa** potencialmente apropriados à plataforma;
- **Tendências e sinais observáveis** do canal com fontes e datas, distinguindo opinião/inferência de métricas efetivas;
- **Desempenho histórico comparável** e aprendizagem do Motor 4, assinalando quando os dados estão ausentes ou fracos;
- **Elegibilidade operacional real ou desconhecida** da plataforma/conta, custos, limitações e capacidade de produção.

A saída é uma **recomendação de destinos para aquele tema com razões e confiança**, não uma ordem universal de redes nem a promessa de maior engagement. Só os destinos **justificados e viáveis** entram na produção inicial de variantes do Motor 2; nunca gerar automaticamente para todas as contas configuradas. Se não existir destino claramente recomendado/elegível, **assinalar ausência de recomendação credível**, sem inventar suporte ou iniciar renders de variantes sem justificação.

**Motor 2 — Production:** produzir a peça-base e os pacotes para destinos recomendados; **reutilizar o mesmo vídeo/render** quando serve para vários e adaptar apenas metadados/recursos quando útil. Respeitar reservas/quotas, gates de custos e direitos. **Não existe número fixo de variantes por tema**.

**Revisão final no Nexus:** permitir **adicionar ou retirar plataformas e contas** da proposta antes de aprovar. Ao adicionar rede, mostrar compatibilidade e custo/impacto; se necessário, M2 produz/valida a variante adicional para voltar à revisão, **sem o Motor 3 publicar nada antes do segundo gate**. Remover um destino só retira a proposta daquele destino; não cancela posts já agendados no Postiz. O operador aprova **cada variante+conta+plataforma+versão/hash+copy+data/hora**; ausência de aprovação = não enviar.

**Não confundir as fases:** escolher temas (gate 1) não significa confirmar canais finais ou calendário. A proposta com contas/datas/horas só aparece **após produção**. Nada nas recomendações de M1 substitui a decisão final.

## 1.2. Fontes públicas por variante — P22-B (DECIDIDO)

Além do fact-check interno P21-B, cada **variante por plataforma** recebe uma **seleção de referências acessíveis ao público**, adequada às afirmações que realmente aparecem no vídeo, título, legendas e copy. A apresentação pode ser em **descrição/caption, comentário fixado ou página pública** quando as capacidades da conta/integração o permitirem, e **seletivamente em ecrã** para afirmações importantes. Não presumir URLs clicáveis ou comentário fixado via Postiz; assinalar fallback manual e não divulgar fontes privadas. A lista exata e o vídeo/copy são revistos no **gate final por variante/conta/plataforma/versão/hash**. Ver [CITACOES_PUBLICAS.md](CITACOES_PUBLICAS.md).

## 2. Contrato de dados técnico proposto

- `CreativeBase`: `nexusProjectId`, `campaignId?`, `topicApprovalId`, `brandProfileVersionId`, `baseCreativeId`, `baseVersionId`, `baseContentHash`, `assetManifest`, `rightsManifest`, `sourceEvidence`.
- `PlatformVariant`: `variantId`, `baseCreativeId`, `parentBaseVersionId`, `platform`, `targetAccountId?`, `variantVersionId`, `variantHash`, `reusedAssets`, `changedSegments`, `adaptationRationale`, `formatSpec`, `title`, `copy`, `cta`, `thumbnailRef`, `qaStatus`, `costEstimate`.
- `ApprovedDistributionPackage`: `variantId`, `variantVersionId`, `variantHash`, `platform`, `accountId`, `approvedCopy`, `approvedScheduleAt`, `approvalId`. Seguir contratos dos dois gates e a idempotência Postiz.

**Esquema e nomes de campos não aprovados ainda.** Não criar novo núcleo de projetos ou outro scheduler. A ligação a `campaignId` é opcional. Assets editáveis na biblioteca externa permitida, não no GitHub público. Uma alteração de peça-base deve **assinalar variantes descendentes potencialmente afetadas**, e não alterar retroativamente variantes aprovadas ou já agendadas.

## 3. Fluxo funcional

```text
M1 temas com formato/redes sugeridos → utilizador seleciona apenas temas (gate 1)
  → M2 cria peça-base editável
  → M2 prepara variantes por plataforma quando acrescentam valor e são viáveis
  → QA independente por variante e verificação da peça-base
  → dashboard Nexus: prévias lado a lado/lista, diferenças e calendário proposto
  → utilizador aprova versões exatas + plataformas/contas + copy + datas (gate 2)
  → M3 envia pacotes autorizados ao Postiz e sincroniza recibos
  → M4 mede variantes/contas/plataformas com proveniência e devolve aprendizagem a M1
```

**Exemplo Vefi:** peça-base de 45 segundos de uma funcionalidade confirmada; Reels e TikTok podem reutilizar o mesmo render vertical, com legendas/copy específicos se necessário; LinkedIn pode requerer capa, copy e CTA diferentes, com possibilidade de usar o mesmo vídeo quando tecnicamente adequado. A escolha depende de evidências, objetivos e formatos reais, não de uma regra arbitrária.

## 4. Testes de aceitação

1. O mesmo vídeo compatível com Reels e TikTok reutiliza ficheiro quando adequado, sem gerar novo render gratuito só para existir uma variante.
2. Quando a plataforma exigir/beneficiar de adaptação justificada, M2 cria variante preservando componentes válidos e listando alterações, versões, custos e QA.
3. Para 3 destinos, Nexus apresenta 3 pacotes com prévias/artefactos e **aprovação independente por conta + plataforma + versão/hash + copy + data/hora**; só os aprovados seguem ao Postiz.
4. Uma correção no hook do vídeo-base identifica quais variantes dependem dele e não reescreve silenciosamente versões aprovadas.
5. O primeiro gate continua apenas a escolha de temas; nenhum calendário ou data é solicitado antes de M2 produzir.
6. Uma conta/canal sem capacidade comprovada recebe aviso e eventual fallback manual, não falso upload agendado.
7. Os resultados observados de plataformas diferentes não são confundidos com sucesso causal da adaptação.
8. Sem novos custos pagos não aprovados, sem uso de outras marcas e sem publicação automática por objetivo de campanha.
9. Com cinco contas configuradas e duas plataformas bem justificadas pelo Motor 1, Motor 2 prepara só as **duas destinatárias** e a peça-base; não cria cinco renders por omissão.
10. O operador acrescenta uma terceira plataforma na revisão final: M2 avalia compatibilidade, prepara a variante se necessária, valida QA e volta a mostrar pacote antes de permitir gate 2 dessa plataforma.
11. O operador remove uma plataforma proposta: não existe aprovação nem envio para essa rede, sem alterar agendamentos já confirmados no Postiz.
12. Sem evidência/histórico de potencial por rede, M1 explicita incerteza e não inventa um score de viralidade; uma conta não autenticada não é apresentada como publicação automática elegível.

## 5. Próxima pergunta — P18

**P17-B decidido:** no segundo gate, depois da produção, sugerir **horários adaptativos por conta/plataforma** com histórico M4, audiência/fuso, formato, urgência de campanha e agenda Postiz, assinalando estimativas sem dados e permitindo edição total pelo operador antes de aprovar. **P18 em aberto:** cadência e volume de publicações por projeto (fixa, adaptativa com limites ou manual). Ver [HORARIOS.md](HORARIOS.md).

Ver [DECISOES.md](DECISOES.md), [MOTORES.md](MOTORES.md), [REQUISITOS.md](REQUISITOS.md), [POSTIZ.md](POSTIZ.md), [REVISOES.md](REVISOES.md) e [METRICAS.md](METRICAS.md).
