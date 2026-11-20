# Requisitos funcionais e não funcionais — contrato de produto

> Atualizado em 20/11/2026 para refletir a entrevista. **DECIDIDO** = requisito aceite; **PROPOSTO** = pormenor técnico/a validar; **IMPLEMENTADO** exige prova. O dashboard é o separador Social do Nexus, não uma segunda app. A auditoria F0 permanece histórica; diferenças estão em ALINHAMENTO_CONTRATO_V1.md.

## Regras essenciais

1. O Social **não cria projetos**. Apresenta para ativação exclusivamente projetos **já existentes no Nexus e com redes sociais configuradas**. Mesmo esses só entram no Social após opt-in. Nem todos os projetos do Nexus têm de estar ativos no Social.
2. Cada etapa funciona no contexto **do projeto Nexus elegível/ativado e do seu perfil editorial**. Não permitir projetos inventados, contas de outros projetos, identidades de marca cruzadas ou publicação sem permissão.
3. Os três motores são **Pesquisa diária/semanal**, **Produção** e **Distribuição/Métricas/Aprendizagem**. O Nexus continua responsável pela execução, scheduler, limites e aprovações.
4. **Aprovação humana do tema** antes de iniciar guião/recursos; **aprovação humana do pacote/conta/canal** antes de qualquer publicação.
5. **Design visual detalhado do dashboard depois da funcionalidade**. F1 deve apresentar apenas os controlos e estados mínimos necessários para validar dados e fluxos.

## Requisitos verificáveis

| ID | Obrigação | Critério de aceitação |
|---|---|---|
| R01 | Fonte única de projetos: Nexus | Apenas IDs canónicos de projetos existentes no Nexus |
| R02 | Gate de elegibilidade Social | Projeto Nexus sem conta social identificada não aparece; conta configurada sem API é elegível, mas só entra na produção depois de opt-in |
| R03 | Opt-in/opt-out Social por projeto elegível | Ativar não cria novo projeto Nexus; desativar mantém histórico e interrompe trabalho novo |
| R04 | Perfis editoriais e canais | Marca, públicos, objetivos, voz, licenças, formatos e contas por Nexus project; canais associados/permitidos |
| R05 | Pesquisa **diária leve** | Observações com fontes, data, mudança relevante e custo; sem guião antes de gate |
| R06 | Relatório **semanal aprofundado** | Síntese de tendências, concorrência híbrida, oportunidades, evidências e priorização por projeto |
| R07 | Fontes acordadas | YouTube, Instagram, Google/Trends, Reddit, TikTok, X e LinkedIn quando acessíveis legal/tecnicamente, mais fontes oficiais |
| R08 | Scoring adaptativo por projeto | Pontuação/justificação, pesos/versão/confiança; considerar objetivos, tendência, saturação, histórico, viabilidade e custos |
| R09 | Ficha de oportunidade económica | Hook, ângulo, formato, duração, CTA, fontes, riscos e esforço; sem storyboard completo antes da aprovação |
| R10 | Gate de tema | Versão não aprovada não inicia guião, imagens ou render; mudança de versão exige reaprovação |
| R11 | Produção por projeto/formato | Hidden Layer: vídeo vertical narrado; Vefi/UtopIA: vídeo+carrossel; Remotion-first e exportação adaptada por rede |
| R12 | Pacote editável e QA | Guião, storyboard, recursos, prévia, render quando aplicável, relatório técnico/editorial/factual/visual/direitos e licenças |
| R13 | Biblioteca externa reutilizável | `D:\AI\Biblioteca` referenciada por IDs e direitos; media e paths privados fora do Git e do browser |
| R14 | Gate de publicação | Aprovação por versão+hash+plataforma+conta Nexus; alteração relevante invalida autorização |
| R15 | Distribuição híbrida | Conta configurada não significa API autenticada. API oficial só se possível, autenticada, autorizada e com termos cumpridos; caso contrário exportação/publicação manual com comprovativo |
| R16 | Métricas avançadas e atribuição | Retenção, alcance, interação, CTR, UTM, visitas, eventos, conversões e custos, com proveniência, unidade, janela, denominador |
| R17 | Aprendizagem e experiências | Testes controlados com hipótese/variável, amostra, confiança; sinaliza `inconclusiva` e alimenta Motor 1 com dados citáveis |
| R18 | Interface Social mínima no Nexus | Seleção de projetos elegíveis, estados de pesquisa/produção, aprovação, resultados, métricas reais/indisponibilidade, sem redesign visual prematuro |
| R19 | MVP de 3 peças reais | 1 conteúdo real/publicável para cada Hidden Layer, Vefi e UtopIA; fixtures e protótipos não contam |
| R20 | Metas e controlo de custo | Pretender 5–10 peças/semana, 1–3h supervisão, 3–6h desenvolvimento; alvo extra 0€ e teto 25€/mês **não autorizam gastos** |
| R21 | Adaptadores de fornecedores | Trocar render, pesquisa, TTS, imagem e rede sem reescrever núcleo nem duplicar ferramentas Nexus |

## Canais e formatos contratados

| Projeto (apenas se existir no Nexus com socials e Social ativado) | Formato | Canais de intenção |
|---|---|---|
| The Hidden Layer | Vídeo vertical narrado em inglês, faceless | Instagram, YouTube, X, TikTok |
| Vefi | Vídeo, carrossel | Instagram, TikTok, X, LinkedIn, YouTube |
| UtopIA Solutions | Vídeo, carrossel | Instagram, LinkedIn, TikTok, X, YouTube |

Canais de intenção **não são contas ligadas**. Conectores só operam após verificação de permissões reais. Car Enterprise ou outros projetos só entram se cumprirem critérios Nexus, sociais e opt-in.

## Qualidade, resiliência e segurança

- Fonte/dados externos são não confiáveis; distinguir afirmação factual, inferência e hipótese, com revisão humana para publicações factuais.
- Credenciais, chaves, contas, paths absolutos e ficheiros privados nunca entram no Git/JSON destinado ao browser.
- Validar recursos por manifestos, hashes, direitos de uso e permissões da marca. IA generativa só onde acrescenta valor; Higgsfield apenas quando expressamente autorizado.
- Uma chamada de aprovação é **decisão gravada**, não prova de publicação. Na ausência de ID/URL/recibo remoto, usar estado explícito; timeout pós-envio exige reconciliação, nunca repetição cega.
- Escrita atómica e donos separados (motor vs servidor Nexus); repos de outras marcas só leitura.
- Novas versões de schema não podem reinterpretar ou apagar histórico, decisões, observações ou provas.
- Números observados, estimados e não disponíveis são estados distintos; não tratar `null` como zero nem correlação como causalidade.
- Pesquisa/manual e publicação/manual são modos legítimos até adaptadores oficiais estarem comprovados; não simular resultados.
- Cumprir condições dos fornecedores e lei aplicável (direitos, RGPD, consentimento) sem presumir acesso irrestrito.

## Definição de MVP e sequência

**F1 — funcionalidade do Nexus antes do visual:** leitura real do contrato e UI mínima, gates persistentes, prévias protegidas e projetos elegíveis do Nexus. **F2 — conteúdo:** pesquisa e produção com prova de Remotion/imagem e um piloto técnico publicável. **F3 — publicação/métricas:** pacote aprovado, publicação manual/automática permitida, resultados datados, primeira aprendizagem e comparação honesta.

**MVP de produto:** três conteúdos reais/publicáveis, um por cada projeto inicial elegível e ativado no Nexus, com marca, fontes, gates, pacote, custos e estado de publicação/medição. Conteúdo preparado e conteúdo publicado têm estados diferentes; se faltar publicação não inventar métricas.

**Só depois**: estudo de UX/arquitetura da informação visual aprofundado, layouts, gráficos, animações e acabamento final do dashboard Social, apoiado em fluxos e dados que já funcionem.

Ver docs/PROJETOS.md, MOTORES.md, METRICAS.md, BIBLIOTECA.md, ALINHAMENTO_CONTRATO_V1.md e ROADMAP.md.
