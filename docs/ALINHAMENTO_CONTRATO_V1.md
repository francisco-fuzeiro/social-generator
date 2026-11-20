# Alinhamento funcional do contrato Social v1 com as decisões de produto

> Data: 20/11/2026. **Adenda de requisitos, não alteração de código/schema implementada.** A auditoria histórica docs/auditoria-f0.md é a referência de implementação inicial, mas várias decisões de produto posteriores/mais completas exigem revisão do contrato antes da missão F1.1. A adenda originalmente produzida no ChatGPT (284 linhas) não estava recuperável integralmente: este ficheiro é uma síntese reconstruída, **não a sua transcrição literal**.

## 0. Compatibilidade e prioridade

- Conservar a fronteira **Nexus orquestra / Social produz dados** e as três operações propostas: \`social.ler\`, \`social.aprovarTema\` e \`social.aprovarPublicacao\`.
- Manter escrita atómica, leitura validada, uma identidade editorial por projeto, dois gates humanos, versão/hash/recibos e recuperação conservadora.
- **Não copiar sem revisão** as enumerações e campos fixos de F0: foram adequados a uma primeira fixture com três projetos, mas contradizem a extensibilidade e as métricas pretendidas.
- Alterações incompatíveis são versionadas e testadas; F0 não é apagada. Nunca adulterar snapshots antigos para parecer que tinham campos novos.
- Não criar um segundo servidor, scheduler, base de dados, dashboard ou sistema de aprovação em paralelo ao Nexus.

## 1. Dez correções de contrato a validar

| # | Lacuna concreta de F0 | Alteração de contrato sugerida | Critério de aceitação |
|---|---|---|---|
| 1 | IDs editoriais fixos \`the-hidden-layer\`, \`vefi\`, \`utopia\` | Catálogo de projetos extensível com registo/validação e um perfil por ID | Um projeto novo surge sem alterar o código central |
| 2 | Plataformas fixas \`instagram\`, \`tiktok\`, \`youtube\` | Registo/capability de plataformas com X e LinkedIn, sem prometer APIs implementadas | Nova rede pode ficar como exportação manual |
| 3 | Oportunidade F0 não especifica contexto completo | Ficha económica com projeto, público, canal, tema, ângulo, hook, evidência, formato/duração, esforço, risco, confiança | Motor 1 não produz guião/asset antes do gate |
| 4 | Perfil de marca subdefinido | Project Profile versionado separado do estado da sessão Nexus | Voz, marca, público, CTA e orçamento não migram entre projetos |
| 5 | Peças/publicações sem campanha/variante suficientes | Encadear Campanha → Ideia → Criativo → Variante → Publicação | Rastrear qual publicação derivou de qual ideia e versão |
| 6 | \`metricas.valores\` só 9 valores genéricos | Catálogo de métricas extensível por plataforma com numerador, denominador, unidade e definição | Nunca confundir alcance, impressões, plays, retenção e cliques |
| 7 | Sem atribuição de resultados externos | Eventos/Conversões/UTMs e ligações a analítica autorizada (GA4/app/site) | Separar clique, visita e conversão, com limitação de atribuição |
| 8 | Retrato limitado a 500 observações, história insuficiente | Manter \`painel.json\` limitado para UI; histórico de snapshots/eventos em JSONL ou estrutura equivalente, com janela e retenção aprovada | A UI não perde histórico nem lê ficheiros ilimitados |
| 9 | Hash canónico genérico e decisões concorrentes | Especificar canonicalização consistente (RFC 8785 + SHA-256 é PROPOSTA), exclusividade/ idempotência e migração semântica | Mesmo pacote = mesmo hash; alteração exige nova aprovação |
| 10 | Recursos sem catálogo de biblioteca e custo por etapa | Referências lógicas a D:\AI\Biblioteca, manifestos/licenças e despesas por fornecedor/peça/projeto | Nenhum path externo/segredo vai para browser/Git e custos são auditáveis |

## 2. Entidades sugeridas

**Projeto**: \`projetoId\`, perfil editorial versionado, objetivos, idiomas, canais/contas autorizadas, limites e estado. Não confundir com \`project_cwd\`.

**Campanha**: \`campanhaId\`, \`projetoId\`, objetivo, janela, CTA, orçamento e hipótese.

**Oportunidade**: id, versão, projeto/campanha, fontes verificáveis com consulta e confiança, tópico, proposta de hook, formato e duração sugeridos, custo/risco, pontuação rubricada, decisão de tema.

**Criativo/Peça**: id, versão, oportunidade aprovada, guião/brief/storyboard, assets e proveniência, previsualização, gates e manifestos.

**Variante**: id, peça/versão, atributo testado, recursos e identificador de experimento; não reutilizar o mesmo id para materiais diferentes.

**Publicação**: id, variante, plataforma+conta, legenda/CTA/UTM, timestamp, pacote/hash, versão aprovada, estado, ID remoto/URL/recibo. Distinguir manual vs API e orgânico vs pago.

**Observação de métrica**: publicação, definição, origem, período, idade do post, valor, denominador, estado (observado/estimado/indisponível/por-sincronizar), verificação e confiança.

**Evento/conversão**: campanha/publicação/UTM quando atribuível, tipo (lead, registo, ativação, wishlist, compra), momento, valor agregado/unidade, origem e hipótese de atribuição; dados pessoais mínimos.

**Experiência**: hipótese, variável, variantes, métrica primária, janela, amostra, resultado, conclusões com confiança e evidências. "Inconclusiva" é um estado válido.

**Recurso**: ID, manifest hash/URI lógico, tipo, licença, permissões de projeto, checksum e derivados; não expor caminhos absolutos na UI.

## 3. Persistência e limites

- Preservar o princípio da F0: retrato pequeno e autoconsistente \`painel.json\` para a leitura rápida do Nexus; \`eventos/*.jsonl\` auxiliares, decisões imutáveis sob responsabilidade do servidor, outputs com hashes.
- Aumentar a expressividade **sem** aumentar indiscriminadamente os limites da UI. Históricos analíticos e versões antigas podem exigir leitura paginada/agregados, a aprovar na missão técnica.
- Um único escritor por projeto; validar objeto completo e renomear ficheiro temporário no mesmo volume; \`rename\` não substitui exclusão mútua.
- Retrato desatualizado/inválido deve mostrar estado próprio, não valores zeros ou ficções.
- Registo de proveniência/receita/versão por ferramenta. Dados da biblioteca externos e recursos de projeto original são só de leitura.

## 4. Aprovações e efeitos externos (preservar)

- Gate de tema e gate de publicação **separados e persistentes**, ambos por identidade humana, versão e alvo.
- Idempotência por \`idPedido\`; conflito de corpos diferentes e versões obsoletas devem rejeitar.
- Publicação exige hash do pacote aprovado; mudar conta, texto, plataforma, agendamento ou recurso invalida autorização anterior.
- Aceitar a API de aprovação = **registar decisão**, nunca significa publicação efetuada.
- Antes do envio externo guardar tentativa/recibo; timeout após envio = estado incerto, consulta ou validação humana; **nunca reenviar às cegas**.
- O "Auto" das permissões de ferramentas não equivale a decisão editorial. Adaptadores de redes precisam de gate próprio por conta/canal.

## 5. Métricas: não escolher fórmula sem disponibilidade

Métricas avançadas, janela de recolha (ex.: 2h, 24h, 72h, 7d, 30d), KPI principal e scores por projeto são **propostas de desenho**, não regras finais; ver METRICAS.md. Antes de implementar, inventariar quais os indicadores realmente acessíveis pelas contas e APIs usadas. Importação manual com origem/data é válida no arranque.

## 6. Ciclo de desenvolvimento compatível com F0

A auditoria define F1.1/F1.2/F1.3, F2.1/F2.2/F2.3 e F3.1/F3.2, com listas fechadas e testes. Esta adenda **não as substitui automaticamente**. Cada correção tem de ser integrada na missão tecnicamente adequada, com provas e revisão.

Como agrupamento **proposto** para planeamento e sem fingir recuperar a nomenclatura integral da adenda anterior:

| Missão sugerida | Resultado |
|---|---|
| SG-M001 | Aprovar contrato: projetos, canais, schemas e migração |
| SG-M002 | Leitura Nexus Social com dados sintéticos identificados e estado vazio |
| SG-M003 | Gates persistentes e concorrência/idempotência |
| SG-M004 | Catálogo de projetos/marca/biblioteca com isolamento |
| SG-M005 | Pesquisa Motor 1, fontes e fichas de oportunidades |
| SG-M006 | Prova de render/imagem e pacote de produção |
| SG-M007 | Um piloto publicável com preview e checks/licenças |
| SG-M008 | Publicação manual e snapshots/métricas/conversões |
| SG-M009 | Testar 3 projetos, aprendizagem inicial, relatório de evidências e análise de custos |

As missões SG-M001–SG-M009 são **organização proposta deste resumo**, não autorização de execução, e precisam de ser reconciliadas com as listas fechadas F1–F3 do Nexus.

## 7. Testes de regressão indispensáveis

1. Novo ID de projeto válido; projeto desconhecido rejeitado onde não registado; sem leitura arbitrária de paths.
2. Redes X/LinkedIn aparecem como suportadas pelo modelo de dados, mas publicação API desativada sem adaptador/gate.
3. Ficha de tema não aprovado não inicia guião/recursos.
4. 2 aprovações iguais por mesmo \`idPedido\` produzem 1 decisão; corpo divergente falha.
5. Mudança de conta, texto, asset ou plataforma gera novo hash e invalida decisão antiga.
6. Medição indisponível ≠ zero; mesma métrica de redes diferentes não é somada sem normalização.
7. Publicações de janelas diferentes não são tratadas como diretamente comparáveis.
8. Conversão sem UTM não recebe atribuição certa por adivinhação.
9. Biblioteca com junction/travessia para fora da raiz é recusada; sem exposição de path/segredo.
10. Queda depois de tentativa de envio não gera segundo post automático.
11. Dados de exemplo explicitamente marcados no Nexus; painel normal sem fontes não fabrica resultados.
12. Migração versão v1→nova versão mantém evidências/recibos e dá erro claro em schema desconhecido.

## 8. Aprovação pendente

**Aprovar formalmente a revisão técnica do contrato antes de F1.1**, em particular formato dos perfis/projetos, extensibilidade de redes, separação de histórico e snapshots, versão de schema, hash canónico e eventos/atribuição. Até essa validação, apenas esta documentação está atualizada; **o código Nexus não foi alterado por este ficheiro**.
