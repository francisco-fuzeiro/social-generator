# Fontes públicas adaptadas ao formato e à plataforma — P22-B

> **DECIDIDO em 21/11/2026 (entrevista P22-B):** para além da rastreabilidade interna de P21-B, preparar **referências relevantes acessíveis ao público** em descrição/caption, comentário fixado ou página de fontes, **conforme suporte real de cada plataforma**. Fontes especialmente importantes podem aparecer **discretamente no vídeo/carrossel** junto de afirmações sensíveis ou controversas. Tudo integra a **aprovação final por variante/conta/plataforma**, depois da produção. É um contrato de produto, não implementação.

## 1. Regras

- A lista pública **não substitui o fact-check interno por afirmação**: o relatório P21-B mantém proveniência, datas, confiança, divergências, riscos e estados de bloqueio. Uma bibliografia não valida uma afirmação incorreta ou sem prova.
- Priorizar **fontes oficiais e/ou verificáveis**, com título, instituição/autoria quando conhecida, data e URL/identificador utilizável. Referenciar aquilo que **sustenta realmente** as afirmações centrais, números e pontos sensíveis; distinguir opinião e factos.
- Selecionar o **canal de apresentação realista** para cada destino: descrição/legenda, comentário fixado quando **comprovadamente permitido**, ou página pública de referências **se existir e for autorizada**. Não presumir links clicáveis ou que a API/Postiz suporte fixar comentários, páginas ou outros formatos.
- Usar **referências em ecrã seletivamente**, em posição legível e sem poluição visual; não obrigar a legenda em ecrã para **cada frase**. Para afirmações controversas, de elevado risco ou estatísticas decisivas, pode ser indicado um marcador discreto com remissão para a lista completa.
- **Não divulgar fontes privadas**: URLs internas, documentos licenciados/confidenciais, dados pessoais, credenciais, conteúdos protegidos sem direitos, fontes que só foram autorizadas para leitura interna. Antes de aprovar a versão pública, verificar visibilidade, direitos e segurança.
- Adaptar bibliografia à variante P15-B/P16-B: um recorte de vídeo/título/copy pode alterar as afirmações efetivamente apresentadas e as fontes relevantes; rastrear por versão/hash e **não transportar referências irrelevantes ou enganadoras** de uma rede para outra.
- O operador pode **rever, corrigir ou remover referências** na revisão final, mantendo QA factual válido. Alteração material de alegação, fonte central ou copy exige novo QA/versão e aprovação do pacote final exato; a ausência de fontes públicas adequadas para uma alegação crítica deve ser destacada, não ocultada.
- Postiz/M3 recebe apenas o texto/ficheiro/pacote aprovado. Conteúdo já agendado só se altera **no Postiz**, não por uma atualização automática de fontes na camada Nexus.

## 2. Contrato técnico PROPOSTO

`PublicCitationBundle` com `projectId`, `creativeVersionId`, `variantId`, `platform`, `accountId`, `citations[]` (referência, tipo, data, `claimIds[]`, visibilidade pública e licença), `presentationMode` (caption/description/pinned-comment/sources-page/on-screen), `capabilityVerified`, `operatorApprovedAt` e versão/hash. São campos propostos, não schema implementado.

**Não inventar capacidade da plataforma**, publicar links privados ou construir automaticamente um website de fontes. Não escolher novo fornecedor pago nem alterar o calendário Postiz.

## 3. Testes de aceitação

1. Vídeo The Hidden Layer com data histórica crítica → relatório interno por afirmação e referências públicas selecionadas para os claims essenciais, com texto on-screen apenas se acrescentar valor.
2. Reels cuja descrição não permita o tipo de link pretendido → apresentar alternativa verificada/ação manual, sem prometer hiperligação clicável.
3. Ficheiro de marca privado usado para confirmar uma afirmação → **não incluir caminho privado na descrição pública**.
4. TikTok e LinkedIn com copy e claims distintos → bundles de referências específicos por variante/conta.
5. Comentário fixado só é marcado como executável quando a integração realmente o suporta; em caso contrário ficar pendente/manual.
6. Gate final mostra exatamente as fontes/URLs e posições visuais a divulgar; alterações materiais geram nova versão e verificação pertinente.
7. Uma afirmação essencial não verificada continua bloqueada no QA mesmo que a descrição contenha várias fontes genéricas.

## 4. Entrevista encerrada

P22-B é a última pergunta formal respondida. O utilizador confirmou que **não pretende continuar a entrevista** e aprovou a orientação arquitetural do Motor 1 partilhado com estado isolado por projeto. Próximo passo: consolidar especificações e preparar as fases do MVP sem implementar nem gastar por inferência. Ver [ARQUITETURA_MOTOR1.md](ARQUITETURA_MOTOR1.md), [FACT_CHECK.md](FACT_CHECK.md) e [ROADMAP.md](ROADMAP.md).
