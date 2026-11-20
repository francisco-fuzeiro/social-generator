# Peça-base e variantes inteligentes por plataforma — contrato funcional

> **DECIDIDO na entrevista P15-B (20/11/2026):** o Motor 2 cria uma **peça-base reutilizável** e prepara **adaptações por plataforma apenas quando justificadas**, para vídeos e carrosséis. Alterações possíveis: hook, duração, proporção, legendas, thumbnail/capa, título, copy, hashtags, CTA e formatos permitidos. Reutilizar guiões, cenas e assets válidos, evitando regenerações caras por defeito. **O operador vê e aprova cada variante, canal, conta e calendário no segundo gate, depois da produção.** Implementação ainda pendente.

## 1. Regras decididas

1. **Peça-base canónica:** um tema aprovado (primeiro gate) origina uma produção principal com manifesto, versões, identidade do projeto Nexus, branding/objetivos e, se existir, campanha. A peça-base não é publicada por si só: cada destino aprovado tem um pacote específico.
2. **Adaptações seletivas:** Motor 2 prepara variantes justificadas pela rede, formato, comportamento observado/audiência, objetivos, requisitos técnicos e capacidades verificadas de publicação. **Não criar versões diferentes por obrigação** quando a peça-base já serve; quando igual, reutilizar ficheiros e adaptar só metadados necessários.
3. **Peças relacionadas, não produções independentes:** variantes partilham guião/cenas/assets e descendem da versão-base; mudanças pontuais usam revisão localizada P7-B e QA adequado P9-B. Dependências entre alterações e renders devem ser visíveis.
4. **Exemplos de adaptação** (não pressupor automaticamente requisitos de API): duração/recorte/proporção, primeiros segundos e ritmo, texto no vídeo/legendas, thumbnail/capa, título, copy, hashtags e CTA conforme plataforma/conta e campanha. Não distorcer conteúdo factual, claims, branding ou direitos para otimizar uma rede.
5. **Respeitar elegibilidade:** contas/canais configurados são distintos de integrações autenticadas. Não assumir que uma rede aceita determinado formato, tamanho ou integração; verificar capacidades na instância Postiz e na plataforma quando necessário. Uma variante incompatível exige aviso e/ou pacote manual, **nunca publicar num formato alternativo sem aprovação**.
6. **Aprovação independente por destino:** na revisão final **após produção**, mostrar prévia de cada variante e pacote associado a **plataforma, conta, versão/hash, texto, CTA e data/hora sugerida**, com QA, custo, limitações e diferença face à peça-base. Operador aprova/rejeita/corrige cada destino. **Nenhuma variante entra no Motor 3/Postiz sem o seu gate final.**
7. **Não antecipar o calendário:** na seleção inicial o operador **só escolhe temas**. M1 pode sugerir formatos e redes plausíveis como informação investigada; M2 usa os canais de projeto que realmente constam da configuração para preparar variantes justificadas. **Datas, horas, ordem e contas de publicação são propostas e aprovadas depois da produção**. Se o operador acrescentar destino na revisão final, Motor 2 deve preparar/validar a variante antes do novo gate, sem publicar por inferência.
8. **Medir diferenças reais:** Motor 4 liga as variantes e respetivas publicações a peça-base/campanha (se houver) e compara resultados por **plataforma, audiência, idade do post, formato e janela compatíveis**, distinguindo resultados observados de hipótese; não inferir causalidade automaticamente.

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

## 5. Próxima pergunta — P16

**Quando uma peça-base é potencialmente adequada a várias redes, quantas variantes deve o Motor 2 produzir antes da revisão final?** Todas as redes elegíveis, apenas as variantes justificadas/recomendadas de maior valor, ou só a base e variantes adicionais a pedido? Esta escolha define carga/custos do Motor 2 e a quantidade de prévias da revisão final. Não há decisão ainda.

Ver [DECISOES.md](DECISOES.md), [MOTORES.md](MOTORES.md), [REQUISITOS.md](REQUISITOS.md), [POSTIZ.md](POSTIZ.md), [REVISOES.md](REVISOES.md) e [METRICAS.md](METRICAS.md).
