# Social Generator: auditoria F0 de integração no Nexus

Data: 20/11/2026. Base inspecionada: `4f699ec815aace700e74f0f48043c8d5dcdc16e8`, ramo `worktree-social-generator-f0`. Só investigação e planeamento. F1 não iniciada.

Convenção: [Certo] = código, comando desta sessão ou página oficial consultada em 20/11/2026; [Provável] = inferência com a respetiva base; [Suposição] = proposta por aprovar. Todas as interfaces, caminhos e missões das secções 3 e 6 são propostas [Suposição], não funcionalidades existentes.

Direção pedida pelo Francisco em 20/11: o dashboard é o separador **Social dentro do Nexus**. O motor está primeiro a ser desenhado no ChatGPT; a implementação passa depois para o Nexus. A primeira entrega é o separador a ler dados de exemplo pelo mesmo contrato que o motor real escreverá.

## 1. Inventário do estado real do Nexus

### Interface e segurança

| Serviço ou ponto de extensão | Estado confirmado e implicação |
|---|---|
| Navegação do PC | [Certo] «Social» é atualmente texto «por criar» no menu Dashboard, sem ação: `web/src/desktop/MenuCanto.tsx:19`, `web/src/desktop/MenuCanto.tsx:195`. Transformar essa entrada em destino funcional; não criar outra aplicação. |
| Navegação móvel | [Certo] Tem a mesma entrada inativa: `web/src/mobile/Barra.tsx:15`, `web/src/mobile/Barra.tsx:125`. Social deve entrar neste menu também. |
| Destinos e URL | [Certo] A união `Vista`, o parser e o serializador vivem em `web/src/ui/hud/modelo.ts:9`, `web/src/ui/hud/modelo.ts:21`, `web/src/ui/hud/modelo.ts:83`. Acrescentar `social` aqui, com `#social` e filtro por projeto; o desenho das páginas entra nos ramos de render em `web/src/desktop/main.tsx:543` e `web/src/mobile/main.tsx:455`. |
| Cartões no dashboard inicial | [Certo] Há registo declarativo de módulos e leitores separados: `shared/modulos.ts:16`, `shared/modulos.ts:57`, `web/src/ui/hud/modulos.ts:1`. Serve para um resumo opcional que abre Social; não substitui o separador pedido. |
| Cliente do painel | [Certo] `chamar` já fornece operações tipadas: `web/src/core/cliente.ts:248`; a observação de leituras existe em `web/src/core/cliente.ts:243`. Reutilizar o cliente e os erros existentes. |
| Operações e papéis | [Certo] A lista de nomes, lista remota e permissões por papel estão em `shared/api.ts:450`, `shared/api.ts:585`, `shared/api.ts:703`. O HTTP verifica nome, método, token, papel e entrada em `server/api/http.ts:226`. Só acrescentar operações explícitas. |
| Rede | [Certo] O anfitrião local é `127.0.0.1`: `server/config.ts:43`. O plano proíbe porta no router e `0.0.0.0`: `plans/PLANO-nexus.md:177`. Social não requer novo ouvinte nem webhook público. |
| Galeria e preview | [Certo] A galeria reconhece imagens em `server/galeria/index.ts:14`; o preview só abre HTML, PNG, GIF e PDF de outputs em `server/ficheiros/preview.ts:117`. A lista MIME não inclui vídeo: `server/ficheiros/preview.ts:12`. MP4 no painel exige adaptação explícita; não está provado pelo preview existente. |

### Execução, estado, permissões e recuperação

| Serviço | Estado confirmado e limite da reutilização |
|---|---|
| Lançamento e sessões | [Certo] O registo de lançadores é `server/agentes/lancamento.ts:43`; o contrato de lançamento e retoma está em `server/agentes/tipos.ts:160` e `server/agentes/tipos.ts:166`. O Nexus deve lançar as etapas por estes mecanismos, sem SDK de LLM no domínio Social. |
| Receitas | [Certo] Validação, leitura e aplicação em `server/receitas/index.ts:153`, `server/receitas/index.ts:308`, `server/receitas/index.ts:346`; formato documentado em `docs/CONTRATOS.md:447`. Campos `orcamento`, `segredos` e `verificar` são recusados por falta de mecanismo em `server/receitas/index.ts:39`. Não prometer que basta declará-los numa receita. |
| Tarefas e ciclo | [Certo] Lê `plans/*.tarefas.json` do HEAD de main, não ficheiros arbitrários: `server/ciclo/carregar.ts:1`, `server/ciclo/carregar.ts:29`. Os estados são os de trabalho de código em `server/ciclo/decidir.ts:11`; o lançamento cria worktree e pedido em `server/ciclo/tique.ts:188`. Não usar este ciclo como calendário editorial sem demonstrar a adaptação. |
| Agendamento | [Certo] Existem agendas especializadas para manhã, horário e retrospetiva: `server/manha/servico.ts:91`, `server/horario/servico.ts:95`, `server/retro/servico.ts:99`. O ciclo tem tique de 60 s em `server/ciclo/tique.ts:24`. Isto não prova um scheduler genérico de publicações. F1 a F3 começam acionadas à mão pelas sessões existentes. |
| Dono entre processos | [Certo] Há mecanismo de posse no processo de agentes: `server/agentes-processo/dono.ts:1`; separação 4180/4181 e reserva documentada em `docs/ARQUITETURA.md:41`. Reutilizar essa posse se uma etapa vier a precisar de execução automática; não criar outro daemon. |
| Estado das sessões | [Certo] Reducer agnóstico de agente, reconstruído dos eventos: `server/estado/index.ts:1`; tetos de 30 ações e 50 tarefas em `server/estado/index.ts:10`. Não derivar estado editorial do texto do chat. |
| Caixa e permissões | [Certo] `caixa.ler` junta pedidos e bloqueios existentes: `server/index.ts:2729`. Aprovações são promessas e mapas em memória, com prazo: `server/aprovacoes/index.ts:45`, `server/aprovacoes/index.ts:59`. Não são um arquivo persistente de aprovações editoriais. |
| Auto | [Certo] As aprovações de rotina podem ser resolvidas automaticamente: `server/aprovacoes/index.ts:69`; limites e exceções no contrato `docs/CONTRATOS.md:203`. Aprovar uma ferramenta não pode equivaler a aprovar um tema ou publicar. |
| Identidade do projeto | [Certo] Projeto de sessão é `project_cwd`, não o cwd móvel: `docs/CONTRATOS.md:26`. Social precisa também de um `projetoId` editorial que exista sem repositório. |
| Recuperação | [Certo] Lista sessões que caíram há menos de 72 h e grava dispensas, até 500: `server/recuperacao/index.ts:11`, `server/recuperacao/index.ts:32`, `server/recuperacao/index.ts:45`. Não restaura um efeito externo de publicação. Retomar uma sessão e repetir um upload são problemas diferentes. |
| Limites de subscrição | [Certo] Há séries e observação persistente de limites: `server/agentes/limites.ts:126`, `server/agentes/limites.ts:266`. Reutilizar a leitura normalizada; uma geração de imagem também consome limites, ver secção 4. |
| Recursos da máquina | [Certo] Leitor e monitor de RAM/CPU em `server/diagnostico/recursos.ts:7`, `server/diagnostico/recursos.ts:52`. O ciclo pausa com RAM livre inferior a 5 GB ou CPU média de 2 min a partir de 80%: `server/ciclo/decidir.ts:436`. O teto de sessões usa custo de 2 GB por sessão: `server/agentes/teto-memoria.ts:5`, aplicado em `server/agentes/lancar-sessao.ts:280`. Esses números não medem a RAM de um render. |
| Parar e proteger recursos | [Certo] Há estado próprio de Parar tudo e disjuntor: `server/parar-tudo/estado.ts:1`, `server/disjuntor/index.ts:51`. Uma futura ligação de execução Social tem de respeitar estas guardas, em vez de manter uma fila autónoma. |
| Memória e registos | [Certo] Decisões da principal têm registo próprio em `server/principal/registo.ts:96`; a memória dos agentes pertence aos adaptadores, `docs/ARQUITETURA.md:74`. Dados editoriais devem ser ficheiros de domínio, não memória do agente nem alterações aos logs de Vefi/UtopIA. |
| Persistência | [Certo] A raiz runtime é `~/.claude/nexus/`: `server/config.ts:50`. Retrato JSON e diário JSONL já coexistem: `server/ciclo/estado.ts:50`, `server/ciclo/estado.ts:64`. Rename com repetição para erros de posse do Windows existe em `server/escrita-atomica.ts:23` e `server/escrita-atomica.ts:44`. |
| Voz e imagens | [Certo] Duarte é edge-tts remoto e a resposta contém áudio, sem timestamps de palavras no contrato `Fala`: `server/voz/falar.ts:1`, `server/voz/falar.ts:17`, `server/voz/falar.ts:36`. O adaptador Codex reconhece o evento `imageGeneration` como ação textual: `server/agentes/codex/protocolo.ts:385`. Isso não prova recolha de imagens nem disponibilidade da ferramenta numa sessão lançada pelo Nexus. |

### O que o plano anterior não prova

- [Certo] O plano de vídeo já prevê kits separados, contact sheet/animatic, gates e aprovação antes da publicação: `plans/PLANO-conteudo-video.md:29`, `plans/PLANO-conteudo-video.md:85`, `plans/PLANO-conteudo-video.md:94`. Preservar esse investimento, distinguindo desenho de implementação.
- [Certo] Remotion e HyperFrames foram ambos mantidos como decisão; a divisão de papéis continua proposta: `plans/PLANO-conteudo-video.md:43`. Recomendar um primeiro motor não revoga essa decisão.
- [Certo] O texto de §5 do v2 ainda refere ferramentas que o plano de vídeo depois exclui: `plans/PLANO-nexus-os-v2.md:383`, `plans/PLANO-conteudo-video.md:136`. Não copiar essa lista como dependências atuais.
- [Certo] O dashboard social S-01 e as séries B-10 são desenho no v3: `plans/PLANO-nexus-v3.md:15`, `plans/PLANO-nexus-v3.md:45`. A pesquisa `rg --files shared server` não encontrou `shared/series.ts` nem `server/series/`. Não assumir esse contrato implementado.
- [Certo] A pesquisa `rg -n 'social|Social|Remotion|remotion|pipeline|Pipeline' shared server web/src -g '*.ts' -g '*.tsx'` encontrou referências de interface «por criar», não um motor Social; saída em `outputs/social-generator-f0/provas/inventario.txt`. O pedido atual amplia o âmbito antigo de métricas para investigação, produção e aprendizagem.

## 2. Matriz reutilizar / adaptar / construir

| Capacidade | Reutilizar | Adaptar | Construir apenas no domínio Social |
|---|---|---|---|
| Navegação | [Certo] Menus PC/móvel, `web/src/desktop/MenuCanto.tsx:19`, `web/src/mobile/Barra.tsx:15` | [Suposição] Destino Social e URL no modelo de vistas, `web/src/ui/hud/modelo.ts:9` | [Suposição] Vista Social comum, filtros e estados vazios |
| API e permissões | [Certo] Cliente, autenticação e listas, `web/src/core/cliente.ts:248`, `server/api/http.ts:226` | [Suposição] Leitura e duas decisões explícitas nas listas de `shared/api.ts:450` | [Suposição] Validador do contrato v1 e leitor |
| Trabalho de agentes | [Certo] Receitas e lançadores, `server/receitas/index.ts:346`, `server/agentes/lancamento.ts:43` | [Suposição] Pedidos de etapa pequenos com recursos injetados | [Suposição] Entradas e saídas de investigação/guião; nenhum orquestrador de agentes |
| Aprovação editorial | [Certo] Componentes e convenções de decisões do painel, `web/src/ui/hud/Painel.tsx:83` | [Suposição] Ações do Social, sem passar pelo Auto de `server/aprovacoes/index.ts:69` | [Suposição] Decisões persistentes ligadas à versão do tema e ao hash da publicação |
| Persistência | [Certo] JSON, JSONL e rename, `server/ciclo/estado.ts:60`, `server/escrita-atomica.ts:44` | [Suposição] Raiz Social isolada por porta | [Suposição] Retratos por projeto, decisões imutáveis e recibos |
| Recursos e recuperação | [Certo] Limites, RAM e recuperação de sessões, `server/agentes/limites.ts:266`, `server/recuperacao/index.ts:45` | [Suposição] Etapas respeitam as guardas existentes | [Suposição] Recibos de etapa, deteção de efeito externo incerto; sem repetir a recuperação de sessões |
| Render e recursos visuais | [Certo] Ferramentas de verificação já declaradas, `package.json:22`; FFmpeg medido na secção 4 | [Suposição] Acesso protegido a MP4; preview atual insuficiente, `server/ficheiros/preview.ts:12` | [Suposição] Adaptador de render substituível, templates e metadados de licença |
| Publicar e aprender | [Certo] Não há operação Social nas listas inspecionadas, `shared/api.ts:450` | [Suposição] Exportar pacote e registar resultados manuais primeiro | [Suposição] Ligações oportunidade → peça → publicação → métricas → experiência; API só após gate separado |

## 3. Arquitetura proposta

Tudo nesta secção é [Suposição], especificação para aprovação. O facto que orienta a fronteira é [Certo]: `shared/` contém o contrato servidor/interface, `docs/ARQUITETURA.md:25`; só os adaptadores conhecem agentes concretos, `CLAUDE.md:33`.

### 3.1 Fronteira entre motor e painel

**Motor:** investiga, apresenta oportunidades, prepara guiões após aprovação do tema, gera recursos, compõe, valida, prepara pacotes, executa distribuição autorizada e normaliza métricas. É um conjunto de etapas invocáveis, inicialmente manuais, não outro servidor nem outro dashboard. O motor que está a ser desenhado no ChatGPT tem de produzir os ficheiros abaixo. Exportação manual de um ficheiro pelo ChatGPT não é uma ligação automática à máquina.

**Servidor Nexus:** lê e valida o contrato, filtra o acesso, serve os dados e regista decisões humanas. Não pesquisa nem renderiza dentro do pedido HTTP. As etapas, quando incorporadas, usam receitas e lançadores existentes por injeção de capacidades; nomes de modelos e ferramentas de agentes ficam em `server/agentes/`.

**Separador Social:** mostra os três motores como áreas da mesma página, com seletor Todos/projeto, fontes e datas, recomendações e motivo da classificação, estado das etapas, prévias, versão aprovada, calendário indicativo, publicação efetiva, métricas e experiências. Aciona **Aprovar tema** e **Aprovar publicação** separadamente. Mostra «aguarda motor» até receber confirmação. Não tem lógica dependente do fornecedor de pesquisa, imagem ou render.

Na F1 os dados de exemplo passam pelo leitor e pela rota reais numa instância isolada. Há indicação visível «Dados de exemplo». Sem motor nem ficheiros reais, a instância normal mostra «Ainda sem dados», nunca métricas de exemplo como resultados reais.

### 3.2 Persistência escolhida e donos

Escolha: ficheiros locais, sem Supabase, SQLite nem serviço novo nesta fase. [Provável] É a menor mudança para um utilizador e três projetos, porque o runtime atual já usa ficheiros e escrita atómica (`server/config.ts:50`, `server/ciclo/estado.ts:60`). Não foi demonstrada necessidade de acesso cloud, consultas relacionais grandes ou vários escritores.

| Local proposto | Dono da escrita | Leitores e regra |
|---|---|---|
| `~/.claude/nexus/social/v1/projetos/<id>/painel.json` | Motor, um escritor por projeto | Nexus e motor. Retrato completo e autoconsistente, máximo 1 MiB |
| `~/.claude/nexus/social/v1/decisoes/<uuid>.json` | Servidor Nexus | Motor e Nexus. Uma decisão imutável por ficheiro; não eliminar ao consumir |
| `~/.claude/nexus/social/v1/projetos/<id>/eventos/AAAA-MM.jsonl` | Motor | Diagnóstico, não fonte que o browser precisa de reconstruir |
| `outputs/social/<id>/<peca>/<versao>/...` na raiz do Nexus | Etapa produtora | Recursos imutáveis, guiões, fontes, licenças, contact sheets, vídeos e recibos. Caminhos relativos, nunca uma raiz externa |

Em provas usar uma raiz Social injetada em `outputs/social-generator-<missao>/` ou `%TEMP%`, ou `social-<porta>` conforme a convenção de `server/config.ts:58`. Não apontar provas à raiz runtime real. Esta F0 só grava provas na pasta autorizada.

IDs editoriais fixos: `the-hidden-layer`, `vefi`, `utopia`. Configuração do servidor associa Vefi e UtopIA às raízes de origem só de leitura; The Hidden Layer tem `origemRepo: null` e língua `en`. Nenhum projeto editorial precisa de novo repo para existir. Uma sessão produtora trabalha no Nexus e lê as referências autorizadas; não é lançada com escrita na raiz Vefi/UtopIA. A identidade editorial não se infere do cwd.

**Escrita:** validar o objeto completo, escrever UTF-8 sem BOM em `.nome.<pid>.<uuid>.tmp` na mesma pasta/volume, fechar, fazer rename atómico com repetição limitada para erros de posse. Nunca truncar o destino visível. Um único escritor por projeto; rename não é um lock. Na integração Nexus, reutilizar o mecanismo de posse existente (`server/agentes-processo/dono.ts:1`); no protótipo manual, publicar serialmente e recusar produtores simultâneos. Mudança de motor exige parar o anterior e verificar a posse, não concorrer sobre o mesmo retrato.

JSONL é histórico auxiliar: linha completa, schema e versão, erro de linha truncada visível, sem confundir parse falhado com lista vazia. Rodar por mês; máximo 10 MiB por segmento e 90 dias de histórico ativo como limite inicial por aprovar. Sem apagamento automático nesta proposta. Referências a decisões, hashes aprovados e recibos de publicação mantêm-se enquanto existir a peça. Recursos grandes precisam de política de retenção/cópia aprovada; o facto de estarem em outputs não prova backup.

Supabase só deve voltar à decisão se houver colaboração simultânea, execução fora do PC ou volume medido que inviabilize os ficheiros. Custo adicional aprovado agora: **0 €**. Não se abriu conta nem se assumiu elegibilidade num plano gratuito; preço e custos de armazenamento/tráfego seriam nova decisão, fora de F1 a F3.

### 3.3 Contrato v1 que o motor escreve

Schema futuro: `docs/social/contrato-v1.schema.json`; tipos espelhados em `shared/social.ts`, sem dependência de runtime no browser. Campos obrigatórios, rejeição de tipos errados, enums desconhecidos e versão major diferente. Campos adicionais só sob `extensoes`, ignorados pelo painel. Uma alteração incompatível cria v2, nunca muda silenciosamente v1.

Envelope de `painel.json`:

| Campo | Tipo e semântica |
|---|---|
| `versao` | Literal `1` |
| `projetoId`, `revisao`, `geradoEm` | ID da lista fechada; inteiro positivo estritamente crescente; instante ISO 8601 UTC com `Z` |
| `motor` | `{id, versao, modo: "exemplo" ou "real", atualizadoEm, estado: "ocioso" ou "a-trabalhar" ou "bloqueado" ou "erro"}`. ID é informativo, não escolhe código no painel |
| `projeto` | `{nome, lingua, plataformas}`; `plataformas` usa só `instagram`, `tiktok`, `youtube`; sem tokens ou caminhos absolutos |
| `oportunidades` | Até 200 objetos `{id, versao, titulo, pergunta, justificacao, pontuacao, criterios, fontes, estado, decisaoTemaId}`. Pontuação de 0 a 100, critérios identificam pesos e versão da rubrica. Fonte: `{url, titulo, consultadoEm, confianca}`; confiança `certo`, `provavel`, `suposicao`. Estado: `proposta`, `aprovada`, `recusada`, `arquivada`; decisão nula antes da confirmação |
| `pecas` | Até 200 objetos `{id, versao, oportunidadeId, versaoTema, formato, lingua, estado, recursos, gates, publicacoes}`. Formato `video` ou `carrossel`; estado `por-produzir`, `guiao`, `recursos`, `previa`, `pronta`, `erro`. Referência ao tema aprovado obrigatória antes do guião |
| `recursos` de peça | Array de `{id, papel, caminho, sha256, mime, bytes, largura, altura, duracaoMs, licencaRef}`. Campos de dimensão/duração admitem null quando inaplicáveis. Caminho relativo à raiz de recursos do projeto, sem `..`, drive, UNC ou URL; SHA-256 hexadecimal de 64 caracteres |
| `gates` de peça | `{estado: "por-verificar" ou "passou" ou "falhou", relatorioRecursoId, verificadoEm}`. A aprovação final exige `passou` e prévia acessível |
| `publicacoes` de peça | Array de `{id, versao, plataforma, contaId, legenda, hashtags, agendadoPara, pacoteSha256, estado, decisaoPublicacaoId, publicadoEm, idRemoto, urlRemota}`. Estado `rascunho`, `por-aprovar`, `autorizada`, `em-envio`, `publicada`, `falhou`, `incerta`; datas/ID/URL nulos antes de existir prova |
| `execucoes` | Até 100 objetos `{id, etapa, estado, sessaoId, inicio, fim, reciboRecursoId, erro}`. Sessão nula se produção manual fora do Nexus. Erro `{codigo, mensagem, recuperavel}` ou null; não conter credenciais |
| `metricas` | Até 500 observações `{id, publicacaoId, origem, observadoEm, janelaInicio, janelaFim, valores}`. Origem `manual` ou `api`; valores numéricos ou null para `visualizacoes`, `alcance`, `gostos`, `comentarios`, `partilhas`, `guardados`, `cliques`, `seguidoresGanhos`, `retencaoPct`. Null significa desconhecido, zero significa observado zero |
| `experiencias` | Até 50 objetos `{id, hipotese, variavel, variantes, metricaPrimaria, janelaInicio, janelaFim, minimoObservacoes, estado, conclusao}`. Variantes ligam IDs de publicações. Estado `planeada`, `em-curso`, `concluida`, `inconclusiva`; conclusão nula antes da análise |
| `decisoesAplicadas` | Até 500 recibos `{id, resultado: "aplicada" ou "recusada", em, motivo}`; os antigos ficam referenciados no histórico, não são apagados os ficheiros de decisão |
| `avisos` | Até 50 mensagens curtas, cada uma até 500 caracteres |

IDs locais seguem `[a-z0-9][a-z0-9-]{0,63}` e são únicos no respetivo projeto/tipo; referências órfãs invalidam o retrato. Strings livres até 4000 caracteres, URLs de fontes só HTTPS até 2048, datas válidas e números finitos. Conta é um identificador local opaco configurado no servidor, nunca token. `pacoteSha256` é o hash de JSON canónico das contas, plataforma, texto, hashtags, ordem e hashes dos recursos; ordenação das chaves e codificação UTF-8 são fixas no schema. Qualquer alteração invalida a autorização de publicação anterior.

Precisões para o schema: IDs, nomes, línguas BCP 47, títulos, perguntas e mensagens são strings; versões/revisões/bytes/dimensões/duração são inteiros não negativos, com versões/revisões positivas. `criterios` é uma lista de `{id, peso, valor, justificacao}`, peso e valor de 0 a 100, soma dos pesos igual a 100; pontuação arredondada da média ponderada. `decisaoTemaId`, `decisaoPublicacaoId`, `sessaoId`, `licencaRef`, recursos de relatório/recibo e todos os instantes ainda não ocorridos admitem null. `hashtags` é uma lista de strings; `variantes` é uma lista de `{id, publicacaoIds}`; `conclusao` é string ou null. Etapas permitidas: `pesquisa`, `guiao`, `recursos`, `composicao`, `gates`, `distribuicao`, `metricas`; estado da execução: `por-iniciar`, `a-trabalhar`, `aguarda-aprovacao`, `concluida`, `bloqueada`, `erro`, `incerta`. Recursos referenciados por ID têm de existir na peça; publicações, métricas e variantes não podem apontar para outro projeto.

Exemplo mínimo válido, para o motor conseguir começar sem recursos nem conta ligada:

```json
{
  "versao": 1,
  "projetoId": "the-hidden-layer",
  "revisao": 1,
  "geradoEm": "2026-11-20T12:00:00Z",
  "motor": {
    "id": "exemplo",
    "versao": "0.1",
    "modo": "exemplo",
    "atualizadoEm": "2026-11-20T12:00:00Z",
    "estado": "ocioso"
  },
  "projeto": {"nome": "The Hidden Layer", "lingua": "en", "plataformas": ["instagram"]},
  "oportunidades": [],
  "pecas": [],
  "execucoes": [],
  "metricas": [],
  "experiencias": [],
  "decisoesAplicadas": [],
  "avisos": []
}
```

### 3.4 Leitura e rotas fechadas

Proposta de operações HTTP no protocolo existente, sempre **POST `/api/<nome>` + JSON + Bearer** ([Certo] convenção atual: `shared/api.ts:732`, ver implementação em `server/api/http.ts:226`):

| Operação nova | Entrada | Saída e acesso |
|---|---|---|
| `social.ler` | `{projetoId: null ou ID}` | `{versao:1, projetos:[{projetoId, estadoLeitura, dados, ultimoValidoEm, idadeMs, avisos}], decisoesPendentes, lidoEm}`. Estados `ok`, `ausente`, `invalido`, `antigo`. Painel e telemóvel; nenhuma leitura arbitrária por caminho |
| `social.aprovarTema` | `{projetoId, oportunidadeId, versaoEsperada, decisao:"aprovar" ou "recusar", motivo, idPedido}` | `{decisaoId, estado:"registada", em}`. Só painel e telemóvel, exclui principal/trabalho/carteiro. Motivo opcional, até 1000 caracteres |
| `social.aprovarPublicacao` | `{projetoId, publicacaoId, versaoEsperada, pacoteSha256, decisao:"aprovar" ou "recusar", motivo, idPedido}` | Mesmo recibo. Só painel e telemóvel. Aprovação de uma publicação/conta/plataforma/versão, nunca de toda a campanha |

Todos entram em `Operacoes`, `NOMES_OPERACOES`, `OPERACOES_REMOTAS`, validadores e executores; os papéis continuam por lista, como `shared/api.ts:703`. Não criar GET público, SQL remoto, caminho recebido do browser nem endpoint de execução de shell. F1 não expõe ficheiros multimédia; a adaptação posterior da secção 6 terá contrato e testes próprios.

O leitor proposto `server/social/leitura.ts` resolve só os três IDs configurados, verifica `realpath` e limites antes de ler, valida o retrato e as referências e devolve erros visíveis. Sem ficheiro devolve `ausente`, não inventa um projeto vazio com métricas zero. Ignora `.tmp`; retrato inválido não substitui a última leitura válida. Com cache vazia após reinício, erro continua explícito. Cache no máximo três retratos, até 3 MiB, invalidada pela assinatura do ficheiro e releitura no máximo a cada 5 s. Se a revisão recuar, recusar e avisar. Motor sem atualização há 15 min ganha indicador «dados antigos»; isso não significa falha de uma publicação.

Leitura do painel de 15 em 15 s apenas com Social e documento visíveis, mais atualização após uma ação. Sem polling de redes sociais no browser, sem novo WebSocket e sem agenda de produção criada pelo separador. Refresh não gera trabalho nem gasto de modelo.

### 3.5 Decisões humanas, confirmação e recuperação

O servidor relê o retrato do disco sem cache ao decidir, valida a entrada, identidade, versão atual e estado elegível; grava em exclusivo uma decisão JSON imutável contendo `versao:1`, UUID `id`, `idPedido` UUID do cliente, `projetoId`, `tipo` (`tema`/`publicacao`), `alvoId`, `versaoAlvo`, hash quando publicação, `decisao`, `motivo`, `em` e identidade normalizada. A identidade vem do contexto autenticado, nunca do corpo. IdPedido repetido com corpo igual devolve o mesmo recibo; corpo diferente dá conflito. Para um alvo/versão, uma decisão já registada impede a concorrente; corrige-se criando versão nova.

O motor lê decisões, confirma de novo versão e hash sob a sua posse de escrita e inclui o recibo aplicado/recusado no retrato seguinte. Essa segunda verificação fecha a corrida entre leitura HTTP e mudança do motor. Aceitação HTTP significa **decisão gravada**, não tema já aplicado nem post publicado. O painel mostra a decisão pendente cruzando ficheiro e recibo, incluindo após reinício. O motor não escreve decisões humanas, e o servidor não reescreve o retrato do motor.

Estados e gates:

1. Pesquisa pode gerar oportunidades. Guião exige uma decisão de tema aplicada à versão indicada. Recusa deixa o tema sem produção. Alteração do tema exige nova versão/aprovação.
2. Prévia e gates podem produzir `por-aprovar`. Publicação exige aprovação específica aplicada ao hash do pacote e à conta mostrada. Mudar texto, recurso, conta, plataforma ou agendamento exige nova aprovação.
3. Autorização permite preparar o envio; `publicada` só com ID/URL e recibo do fornecedor ou confirmação manual explícita. Aprovar não conta como publicar.
4. Antes do efeito externo, o executor preserva recibo `em-envio` com ID de tentativa. Queda ou timeout depois do envio sem confirmação fica `incerta`; consultar o estado do fornecedor ou pedir conferência humana. Não voltar a enviar às cegas. Não prometer exactly-once numa API que não o garanta.
5. Retoma das sessões continua no mecanismo existente; retoma da etapa verifica os recibos/artefactos e os respetivos hashes. Ficheiros sem manifesto final são incompletos, não resultado válido.

Limite honesto: processos da mesma conta Windows com escrita nos mesmos ficheiros não ficam isolados por uma fronteira de segurança forte. Separar donos lógicos, papéis HTTP e testes evita erros do fluxo; não impede um processo malicioso de falsificar ficheiros. Não afirmar que um cabeçalho ou um JSON prova sozinho um gesto humano.

### 3.6 Fornecedores e aprendizagem

O contrato transporta resultados normalizados, não o protocolo de um fornecedor. Capacidades injetadas: pesquisar referências, escrever guião, gerar imagem, renderizar, distribuir e recolher métricas. Cada etapa pode devolver `indisponivel`/`precisa-decisoes` com motivo, sem fallback pago. Na integração, interação com Claude Code/Codex fica nos adaptadores; Remotion/FFmpeg são ferramentas de produção com entrada/saída em ficheiros.

Arranque recomendado: investigação com pesquisa e fontes verificadas nas ferramentas já subscritas; imagens numa sessão que prove a ferramenta integrada; Remotion como primeiro render a validar; FFmpeg local; pacote para publicação manual; métricas inseridas manualmente pelo motor/importador. HyperFrames mantém-se candidato separado, sem duplicar o primeiro piloto. Voz, música e materiais de arquivo só entram com direitos e proveniência definidos; The Hidden Layer precisa de revisão factual em inglês.

Uma experiência define antes de publicar a hipótese, uma variável, variantes, métrica e janela. Comparar taxas com denominador registado, mesma janela e sinalizar dados em falta. Sem amostra suficiente, `inconclusiva`; diferenças orgânicas de alcance não provam causalidade. Recomendações futuras citam as publicações e observações que as sustentam, sem reaprovação automática por uma pontuação alta.

## 4. Provas técnicas

Provas executadas em 20/11/2026 nesta worktree. Sem instalar pacotes, sem iniciar/parar servidores, sem publicar, sem chamadas pagas à API. As chamadas `nexus.mjs fase` são a exceção de registo de progresso explicitamente pedida, não alterações aos serviços. Não foi criado laboratório Remotion/FFmpeg em TEMP, portanto não houve pasta temporária dessas ferramentas para apagar.

### 4.1 Comandos e resultados

| Prova | Comando ou chamada efetivamente executada | Resultado e limite |
|---|---|---|
| Base e ambiente | `git -C C:/Claude/nexus/.claude/worktrees/social-generator-f0 rev-parse HEAD`; `node --version`; `npm.cmd --version`; `node -p "JSON.stringify({node:process.version,platform:process.platform,arch:process.arch})"` | [Certo] Base `4f699ec8`; Node `v24.7.0`, npm `11.5.1`, `win32/x64`. Saídas em `outputs/social-generator-f0/provas/ambiente.txt` e `inventario.txt` |
| Dependências presentes | `npm.cmd ls react react-dom vite typescript remotion @remotion/renderer @remotion/cli --depth=0`; `Get-Command ffmpeg,ffprobe,remotion -ErrorAction SilentlyContinue` | [Certo] npm devolveu `(empty)` nesta worktree; não há `node_modules` local. Não significa que o pacote do Nexus não declare React/Vite: declara em `package.json:54`, `package.json:75`. Remotion não foi executado nem instalado |
| FFmpeg | `where.exe ffmpeg`; `ffmpeg -version`; `ffprobe -version` | [Certo] Ambos `8.1.1-full_build-www.gyan.dev`, compilador GCC 15.2.0; localização WinGet no perfil do utilizador, registada em `ambiente.txt`. Configuração inclui `--enable-gpl --enable-version3`. Saída completa em `ffmpeg.txt` |
| Capacidades FFmpeg | `ffmpeg -hide_banner -filters` filtrado por `loudnorm|ebur128`; `ffmpeg -hide_banner -encoders` filtrado por `libx264|libx265` | [Certo] Filtros e encoders presentes, saída em `ffmpeg.txt`. Não é prova de um render Social, sincronização de legendas ou loudness final |
| Imagem integrada | `image_gen.imagegen({prompt: <prompt abaixo>, transparent_background:false})`, ferramenta exposta nesta sessão, com resultado bem-sucedido | [Certo] Uma imagem PNG gerada, 1254 × 1254, 2 383 030 bytes, SHA-256 `7a5d673f2cc0f2ad14809bb91248ec4623273cf951752bf23937fa6acdc1eb3d`; prova `outputs/social-generator-f0/provas/imagem-codex.png`. Sem chave fornecida, API/CLI externa ou compra |
| Conferência da imagem | `Get-FileHash outputs/social-generator-f0/provas/imagem-codex.png`; leitura do cabeçalho PNG com `python -c` usando `struct.unpack('>II',b[16:24])` | [Certo] Hash e dimensões acima; inspeção visual do resultado desta sessão: rocha com três camadas, fundo azul, sem texto. Medida registada em `inventario.txt` |
| Repositórios de origem | `Test-Path 'C:/Claude/vefi'`; `Test-Path 'C:/Claude/utopIA Solutions'` | [Certo] Ambos `True`, em `ambiente.txt`. Nenhum ficheiro dessas raízes foi editado. Conteúdos de marca e contas sociais não auditados nesta F0 |
| Estado Social e imagem no adaptador | Pesquisas `rg` descritas no fim da secção 1 e `rg -n 'imagem|image_gen|imageGeneration|image_generation' server/agentes/codex` | [Certo] Social apenas referido nos pontos documentados; `imageGeneration` reconhecido como ação em `server/agentes/codex/protocolo.ts:385`. Provar imagens nesta sessão não equivale a provar o mesmo numa sessão Nexus |
| Progresso | `node C:/Claude/nexus/scripts/principal/nexus.mjs fase ler --resta "Consolidar provas e licenças; escrever contrato motor-painel e plano F1 a F3"` | [Certo] Primeira execução recusada pela sandbox com EACCES; repetição autorizada devolveu `fase ler fechada em 4 min (estimado 25); seguinte: provar` |
| Progresso da prova | `node C:/Claude/nexus/scripts/principal/nexus.mjs fase provar --resta "Escrever plano F0, verificar referências e wiki, integrar main e commitar só os dois documentos"` | [Certo] Devolveu `fase provar fechada em 8 min (estimado 20); seguinte: escrever` |
| Documentação | `python scripts/verificar-wiki.py`; verificador inline `python -` com `pathlib`, regex das referências, contagem das sete secções e `json.loads` do exemplo; `git -C C:/Claude/nexus/.claude/worktrees/social-generator-f0 diff --check` | [Certo] Lint: 0 erros, 724 ligações e 6005 referências na execução inicial; verificador local: 89 referências únicas existentes, sete secções e JSON válido. Evidências em `lint-wiki.txt` e `referencias.txt`; verificação final repetida antes do commit. Nenhum build de produto é alegado, pois só mudam documentos |

Prompt integral da imagem:

> Use case: scientific-educational. A small test illustration for a local social-video production feasibility audit: a single translucent geological rock showing three clearly visible inner layers, isolated on a plain dark blue background, clean editorial photograph style, square composition. No text, logos or watermark. This is only one test asset.

**Limite do destino:** a ferramenta não oferece argumento de caminho e gravou automaticamente o original em `C:/Users/Francisco/.codex/generated_images/01a1fa6e-f907-7412-b3ee-20c55bd8bcdb/exec-f2c4b44c-28a5-4d38-815d-1ab3ce79d9b5.png`. Foi copiado para a pasta de provas autorizada; o original não foi apagado nem alterado. Logo, o requisito literal de existir *só* em outputs não foi satisfeito pelo comportamento automático da ferramenta. Não esconder esta limitação nem pedir uma chave paga para a contornar.

[Certo] A documentação oficial de imagens diz que a geração integrada conta para os limites gerais do Codex e que a API é uma via separada. Esta prova confirma disponibilidade nesta sessão da conta atual, com consumo de subscrição, sem compra adicional; não confirma o nome do plano nem uma quota ilimitada. [Fonte oficial, consulta 20/11/2026](https://learn.chatgpt.com/docs/image-generation). [Provável] É viável no piloto supervisionado; disponibilidade em background pelo app-server ainda precisa da prova F2, apesar de o Nexus reconhecer o evento.

### 4.2 Remotion e licenças de produção

| Componente | Verificação oficial em 20/11/2026 | Conclusão |
|---|---|---|
| Remotion, licença individual/empresa | [Certo] A [licença do repositório](https://raw.githubusercontent.com/remotion-dev/remotion/main/LICENSE.md) permite uso comercial a indivíduos e organizações lucrativas até 3 empregados; não autoriza vender uma derivação do próprio Remotion. A [FAQ](https://www.remotion.dev/docs/license/faq) fala em equipa até 3 pessoas e dispensa criar conta para elegíveis | [Provável] Francisco sozinho é elegível. Não inferir o tamanho jurídico da UtopIA só a partir do utilizador do PC; confirmar entidade e colaboradores antes do uso empresarial |
| Remotion, versão/termos | [Certo] O [package.json oficial](https://raw.githubusercontent.com/remotion-dev/remotion/main/packages/core/package.json) consultado anuncia `4.0.545`. Os [termos v4](https://www.remotion.dev/docs/terms-4-0) são os vigentes para essa versão; a [página v5](https://www.remotion.dev/docs/terms) identifica termos futuros, aplicáveis no lançamento | [Suposição] Fixar versões no piloto e rever a licença ao atualizar; não tratar o texto futuro como licença já aplicada ao binário testado |
| Remotion, custo se deixar de ser elegível | [Certo] A [página de preços](https://www.remotion.dev/pricing) anuncia Company Automators a US$0,01/render com mínimo US$100/mês; Creators US$25/mês por posto, Enterprise desde US$500/mês | [Suposição] Não comprar. Se o uso cair em Company, parar o piloto comercial e levar o custo ao Francisco |
| Remotion, compatibilidade | [Certo] A [migração v4](https://www.remotion.dev/docs/4-0-migration) lista Node ≥16 e Windows x64. A [documentação React 19](https://www.remotion.dev/docs/react-19) suporta React 19 e recomenda pelo menos v4.0.236 para o ajuste de refs. O [renderer](https://www.remotion.dev/docs/renderer) pede versões iguais e exatas dos pacotes `@remotion/*` | [Provável] Node 24/Windows x64 e React 19 declarado em `package.json:54` são compatíveis. Não prova integração no bundle Vite nem render local. Remotion não instalado: F2 deve medir um render isolado antes de depender dele |
| FFmpeg | [Certo] A [página legal oficial](https://ffmpeg.org/legal.html) distingue LGPL e builds com partes GPL; o build medido tem GPL/version3 | [Suposição] Invocar o executável existente, sem redistribuir ou ligar bibliotecas nesta fase. Se for empacotado com produto distribuído, rever obrigações da licença e codecs |
| HyperFrames | [Certo] [LICENSE oficial](https://raw.githubusercontent.com/heygen-com/hyperframes/main/LICENSE) é Apache 2.0 | [Suposição] Continua alternativa futura, mantendo atribuição/licença quando aplicável. Não instalado ou renderizado nesta F0 |
| Postiz | [Certo] [LICENSE oficial](https://raw.githubusercontent.com/gitroomhq/postiz-app/main/LICENSE) é AGPLv3 | [Suposição] Adiado. Não assumir que self-host resolve permissões das redes ou que elimina operação/licenças de derivados; não adicionar dashboard ou scheduler concorrente |
| Voz, música, fontes e arquivo | [Certo] O contrato de fala atual fornece áudio, não alinhamento de palavras: `server/voz/falar.ts:17` | [Suposição] Preferir piloto sem música/licenças incertas e com narração humana ou ficheiro autorizado. Não assumir direitos comerciais de edge-tts, voz local, gravações, stock ou voz inglesa a partir da existência do código |

### 4.3 Condições de publicação e métricas

Não se autenticou nenhuma conta social, criou app, chave ou projeto cloud. As condições abaixo são documentação, não prova de elegibilidade destas três marcas. As consultas são de **20/11/2026**.

| Plataforma | Condições verificadas e efeito no plano |
|---|---|
| Instagram | [Certo] Exige conta profissional Business/Creator. A [overview oficial](https://developers.facebook.com/documentation/instagram-platform/overview) distingue Instagram Login sem Página ligada, Facebook Login com Página e Unified Login. Standard Access pode servir contas próprias/geridas; Advanced Access para terceiros requer App Review e Business Verification. Não afirmar que toda a utilização própria exige revisão, nem que uma app privada conseguirá Advanced Access sem interface testável. |
| Instagram, recursos e limites | [Certo] A [publicação oficial](https://developers.facebook.com/documentation/instagram-platform/content-publishing) exige permissões conforme o login, tem limite de 100 publicações por janela móvel de 24 h e contabiliza um carrossel como uma publicação. O fluxo por URL precisa de multimédia publicamente acessível; o documento também descreve upload retomável em configurações específicas. [Suposição] Nenhum URL local/Tailscale é tratado como alojamento público. Usar pacote manual até provar um fluxo sem expor o Nexus e sem contratar alojamento. |
| TikTok | [Certo] As [Content Sharing Guidelines](https://developers.tiktok.com/docs/en/content-sharing-guidelines), atualizadas em 04/08/2026, restringem clientes não auditados a privado e exigem auditoria para remover essa limitação. Mais decisivo: proíbem Direct Post para uma ferramenta interna que só publique nas contas do próprio ou da equipa. Exigem controlo do criador, preview, escolha de privacidade e consentimento antes do envio. [Provável] Este Nexus pessoal não é elegível para Direct Post como descrito. Publicação manual; não propor contornar a regra com uma conta de teste ou um clique automático no browser. |
| YouTube Shorts | [Certo] O upload usa [`videos.insert`](https://developers.google.com/youtube/data/reference/rest/v3/videos/insert) com OAuth, incluindo `youtube.upload`; não há endpoint de upload separado para Shorts. [Shorts](https://support.google.com/youtube/answer/15424877?hl=en): vídeos quadrados/verticais até 3 min nas condições da página; atenção a direitos de áudio. A documentação atual de insert diz que projetos não verificados não estão limitados a privado; não copiar a regra histórica contrária. |
| YouTube, quotas e OAuth | [Certo] A [página de quotas](https://developers.google.com/youtube/data/guides/quota_and_compliance_audits), atualizada em 12/11/2026, lista 100 chamadas `videos.insert`, 100 `search.list` e 10 000 unidades para os restantes endpoints por dia; quota adicional passa por auditoria. [OAuth](https://developers.google.com/identity/protocols/oauth2#expiration): tokens de refresh de apps External em Testing expiram em 7 dias, salvo scopes básicos. Estado In production não elimina por si todas as verificações de scopes. |
| Métricas de todas as redes | [Suposição] Começar com importação manual datada e proveniência. Não se verificaram permissões das contas, métricas disponíveis por tipo de media, API de insights de cada conta ou histórico acessível. Fazer esse inventário por conector antes de programar recolha; nunca prometer que views, reach e retenção são comparáveis entre plataformas. |

## 5. Riscos e decisões do Francisco

| Decisão ou risco | Confiança e recomendação | O que desbloqueia |
|---|---|---|
| Aprovar contrato antes da implementação | [Suposição] Aprovar a fronteira de §3 e F1.1 primeiro. Alternativa: ajustar campos/estados agora com o ChatGPT; resposta livre pode indicar outro contrato | F1 começa pelo separador com exemplos, sem depender do motor |
| Ordem do plano antigo | [Certo] O v2 adiava conteúdo para depois do Nexus, `plans/PLANO-nexus-os-v2.md:383`; este pedido autoriza só F0. [Suposição] Aprovar explicitamente o início de F1 | Evita interpretar esta auditoria como autorização de implementação |
| Primeiro projeto e identidade editorial | [Suposição] Recomendo The Hidden Layer/Instagram em inglês como primeiro conjunto de exemplos; alternativa Vefi para primeiro piloto de vídeo. Francisco fixa público, frequência, rubrica e uso de arquivo | Pesquisa e qualidade editorial com âmbito fechado |
| HyperFrames e marca | [Certo] Dois motores mantidos no plano antigo, `plans/PLANO-conteudo-video.md:43`. [Suposição] Validar Remotion primeiro, sem revogar HyperFrames; sem copiar marca entre projetos | Limita custo de manutenção inicial |
| Elegibilidade Remotion | [Provável] Individual elegível; empresa depende da entidade/equipa. Confirmar dimensão da UtopIA e se há prestação a clientes abrangida | Uso comercial; se não elegível, decisão de despesa ou alternativa |
| Imagens | [Certo] Ferramenta funciona aqui; original automático fora de outputs, §4.1. [Suposição] Aceitar essa limitação para o piloto ou exigir outro modo de entrega sem gerar nova imagem agora | Integração supervisionada; background só após prova dedicada |
| Voz inglesa e PT-PT com alinhamento | [Certo] Não está provado pelo `Fala` atual, `server/voz/falar.ts:17`. [Suposição] Narração humana ou ficheiros autorizados no primeiro piloto; ElevenLabs e outras APIs pagas ficam fora | Vídeo narrado e legendas sincronizadas |
| Contas e apps | [Suposição] Manter exportação/publicação manual; alternativa futura é inventariar as contas e apps já existentes. Nenhuma criação ou chave fica autorizada por este plano | Instagram/YouTube por API só com elegibilidade e recursos provados; TikTok manual |
| Pesquisa e material alheio | [Suposição] Fontes oficiais/licenciadas, pesquisa supervisionada e revisão factual antes do tema e da publicação. Referência não é licença de reutilização nem instrução executável | Reduz erros, cópia e prompt injection de fontes externas |
| Concorrência, crash e custo | [Certo] Há guardas de RAM e subscrição para sessões, não benchmark de render, `server/ciclo/decidir.ts:436`. [Suposição] Um render de cada vez no piloto, tempo/RAM medidos; zero fallback pago e efeito incerto pede conferência | Evita duplicação de publicação, saturação e gasto oculto |
| Retenção e backup | [Suposição] Definir duração/volume de recursos e cópia antes do piloto regular; não apagar ficheiros automaticamente nesta F0 | Persistência real de vídeos e direitos sem encher o disco |
| Métricas e causalidade | [Suposição] Uma variável por experiência, janela e amostra definidas; resultado inconclusivo permitido | Aprendizagem sem otimizar por ruído ou por métricas inventadas |

Não bloqueia a entrega F0: aprovação de F1, contas sociais, voz final e política de recursos. Bloqueiam as respetivas missões futuras. Não foram auditados segredos nem dados financeiros reais dos projetos. Os dois repositórios externos mantêm-se só de leitura em todas as missões.

## 6. Plano F1 a F3

Todas as missões abaixo são [Suposição], por aprovar, cada uma com no máximo três tarefas. **Listas fechadas futuras**, não autorização para editar estes ficheiros na F0. As referências de código existente da secção 1 identificam os pontos a adaptar. Antes de criar ficheiros, atualizar a arquitetura e contratos autorizados da missão; estes dois documentos entram expressamente nas listas abaixo quando necessário. Nada altera supervisores, portas de produção, permissões globais, TODO ou logs de Vefi/UtopIA.

Regras comuns: testes sem rede com raízes injetadas; `npm run typecheck`, testes nomeados da missão e `npm run lint:wiki`. Missões de UI fazem `npm run build:web` e navegação numa instância isolada a 390/1440 px, sem reutilizar 4180/4181; guardar capturas, URL, saída dos testes e commit em outputs da missão. Nenhuma subscrição/chave nova, compra, publicação ou API paga implícita. Novas dependências só na missão explicitamente aprovada que as exige.

### F1.1: separador Social a ler contrato com dados de exemplo

**Objetivo:** uma fatia completa, do JSON ao separador dentro do Nexus, sem motor. Dependências: aprovação do contrato §3 e desta missão. Três tarefas: (1) schema, tipos e leitura limitada; (2) operação `social.ler` nas listas e executor; (3) destino Social PC/móvel e apresentação comum dos três projetos.

**Lista fechada:** `docs/social/contrato-v1.schema.json`, `shared/social.ts`, `server/social/leitura.ts`, `server/config.ts`, `shared/api.ts`, `server/api/validar.ts`, `server/index.ts`, `web/src/core/social.ts`, `web/src/ui/Social.tsx`, `web/src/ui/social.css`, `web/src/ui/hud/modelo.ts`, `web/src/ui/hud/inventarioEcra.ts`, `web/src/desktop/MenuCanto.tsx`, `web/src/desktop/main.tsx`, `web/src/mobile/Barra.tsx`, `web/src/mobile/main.tsx`, `test/fixtures/social/the-hidden-layer.json`, `test/fixtures/social/vefi.json`, `test/fixtures/social/utopia.json`, `test/social-leitura.test.ts`, `test/social-api.test.ts`, `test/social-vista.test.ts`, `test/inventario-ecra.test.ts`, `docs/ARQUITETURA.md`, `docs/CONTRATOS.md`, `wiki/index.md`.

**Testes nomeados a criar:** «v1 válido e três projetos», «ficheiro ausente não inventa zeros», «JSON truncado preserva último válido», «versão desconhecida e revisão regressiva recusadas», «1 MiB e limite de itens», «ID inválido/travessia/junction fora da raiz recusados», «sem token 401 e operação fora da lista 404», «papel trabalho não lê Social», «#social sobrevive a refresh/voltar», «exemplo identificado e sem publicação». Em fixtures, uma oportunidade e uma peça por projeto, mais cenários vazio/erro nos testes, sem alegar métricas reais.

**Evidência obrigatória:** saída dos testes, typecheck/build, capturas PC/móvel do mesmo payload e de erro visível, requisição autenticada e recusa sem token em servidor isolado. Motor substituído por outro ficheiro v1 faz o painel mudar sem alterar componentes. Saída da missão não inclui aprovação funcional nem execução de produção.

### F1.2: duas decisões persistentes, sem executar o motor

**Dependência:** F1.1. Três tarefas: escrita imutável/idempotência; operações de tema/publicação com papéis; botões e estados «aguarda motor» no Social. Usar recibos simulados nos testes, nunca marcar uma publicação real.

**Lista fechada:** `shared/social.ts`, `shared/api.ts`, `server/api/validar.ts`, `server/index.ts`, `server/social/decisoes.ts`, `server/social/leitura.ts`, `web/src/core/social.ts`, `web/src/ui/Social.tsx`, `web/src/ui/social.css`, `test/social-decisoes.test.ts`, `test/social-api.test.ts`, `test/social-vista.test.ts`, `docs/ARQUITETURA.md`, `docs/CONTRATOS.md`, `wiki/index.md`.

**Testes nomeados:** «dois cliques com idPedido igual dão um ficheiro», «idPedido com corpo diferente dá conflito», «PC e móvel concorrentes não dão duas decisões», «versão antiga/hash trocado recusados», «principal/trabalho/carteiro não aprovam», «reinício conserva decisão pendente», «Auto nunca aprova tema/publicação», «recibo do motor errado não altera estado». **Evidência:** testes, diff dos ficheiros de decisão antes/depois de reinício isolado, capturas dos dois gates separados e zero invocações do lançador/fornecedor.

### F1.3: prévia multimédia protegida

**Dependências:** F1.1 e decisão de local/retenção dos recursos. Três tarefas: mapear IDs de recurso a caminhos fechados; adaptar entrega de vídeo sem servidor novo; prévia/carrossel no Social. Preferir estender o preview já existente para MP4 de outputs; se a segurança ou acesso móvel exigir outra solução, parar e aprovar o contrato, sem abrir rota improvisada.

**Lista fechada:** `server/ficheiros/preview.ts`, `server/ficheiros/index.ts`, `shared/modelos.ts`, `server/social/leitura.ts`, `server/api/validar.ts`, `server/index.ts`, `shared/api.ts`, `web/src/core/social.ts`, `web/src/ui/Social.tsx`, `web/src/ui/social.css`, `test/social-recursos.test.ts`, `test/social-api.test.ts`, `test/preview.test.ts`, `docs/CONTRATOS.md`, `wiki/index.md`.

**Testes nomeados:** «MP4 válido e pedidos Range limitados», «MIME/bytes errados recusados», «bilhete expirado não serve vídeo», «bilhete de uma peça não abre outra», «realpath/junction/travessia recusados», «legenda é texto, não HTML executável». **Evidência:** URL e vídeo reproduzido PC/móvel em ambiente isolado, recusa de acesso sem bilhete/token conforme o fluxo escolhido, memória limitada sem base64 de todo o vídeo. Os nomes e ficheiros de testes novos são propostos; confirmar os existentes antes da missão.

### F2.1: ligar o motor à investigação e ao gate de tema

**Dependências:** F1.1 e F1.2, exportador v1 entregue pelo trabalho no ChatGPT. Três tarefas: validar/importar a saída de uma pesquisa supervisionada; aplicar decisões com dupla verificação; publicar novo retrato e recibo sem mudar o painel. Esta missão não escreve guiões nem lança rondas periódicas.

**Lista fechada:** `tools/social/contrato.mjs`, `tools/social/investigacao.mjs`, `tools/social/retratos.mjs`, `docs/receitas/social-pesquisa.json`, `test/social-motor-contrato.test.ts`, `test/social-tema.test.ts`, `docs/ARQUITETURA.md`, `docs/CONTRATOS.md`, `wiki/index.md`.

**Testes nomeados:** «exportador real passa os mesmos casos v1 das fixtures», «fonte sem data ou confiança é recusada», «tema não aprovado não tem guião», «decisão obsoleta recebe recibo recusado», «troca do motor não exige alteração React». **Evidência:** ficheiro v1 real, fontes/datas, decisão gravada e respetivo recibo, screenshot do Social sem alteração do código UI. Receita é molde versionado; ativação na pasta runtime só por lançamento autorizado, não instalação global automática. Se o motor precisar de mais campos, voltar ao contrato antes de implementar.

### F2.2: provar render e imagem numa sessão Nexus isolada

**Dependência:** F1.3, elegibilidade Remotion confirmada e brief de 5 s aprovado. Três tarefas: laboratório `%TEMP%` por `mkdtemp` com versões exatas; render/contact sheet e medição FFmpeg; imagem pela ferramenta integrada numa sessão lançada pelo Nexus, ou resultado explícito indisponível sem fallback pago.

**Lista fechada versionada:** `plans/social-render-prova.md`, `docs/CONTRATOS.md`, `wiki/index.md`. Composições, manifests temporários e dependências apenas no laboratório; provas só em `outputs/social-generator-f2-render/provas/`. Não mudar `package.json`, lockfile ou adaptadores nesta missão.

**Testes nomeados/medições:** «render de 5 s 1080×1920 H.264», «frame com seed repetido tem hash igual», «contact sheet legível a 390 px», «loudness/pico medidos ou ausência de som declarada», «imagem produzida na sessão Nexus com artefacto recolhido», «tempo/RAM/concurrency=1 registados». **Evidência:** comandos e versões exatos, MP4/stills, ffprobe, hashes, estado/limites antes/depois e acesso à ferramenta. Eliminar laboratório no fim só após verificar caminho dentro de TEMP e ausência de reparse points, com método que não siga junctions. Se imagens em background não estiverem disponíveis, manter a etapa supervisionada; isto não bloqueia o separador.

### F2.3: um template e um piloto, após aprovação do tema

**Dependências:** F2.1, F2.2, escolha do primeiro projeto e direitos da voz/recursos. Três tarefas: um template parametrizado sem marca embutida; gates/contact sheet/animatic; pacote v1 com publicação `por-aprovar`. Sem publicação nesta missão.

**Lista fechada:** `tools/social/producao.mjs`, `tools/social/render.mjs`, `tools/social/gates.mjs`, `tools/social/templates/vertical.tsx`, `tools/social/templates/carrossel.tsx`, `tools/social/contrato.mjs`, `tools/social/retratos.mjs`, `docs/receitas/social-producao.json`, `test/social-producao.test.ts`, `test/social-gates.test.ts`, `test/social-publicacao-gate.test.ts`, `docs/ARQUITETURA.md`, `docs/CONTRATOS.md`, `wiki/index.md`.

Dependências de render permanecem no laboratório validado até uma missão posterior autorizar expressamente a localização permanente e respetivo lockfile; não instalar no repo por conveniência. **Testes nomeados:** «guião sem tema aprovado recusado», «mudança de tema invalida produção», «gates falhados impedem aprovação final», «marca Vefi não aparece nos outros kits», «carrossel mantém ordem e licença dos recursos», «correção por timestamp gera par antes/depois». **Evidência:** uma peça completa, relatório de gates, prévia aprovada pelo Francisco e novo retrato visível no mesmo Social, sem publicação nem automação de refinamento ilimitada.

### F3.1: distribuição manual e aprendizagem rastreável

**Dependências:** F1.2, F2.3 e aprovação específica de publicação. Três tarefas: exportar pacote com hash; importar confirmação manual/observações; produzir uma análise de experiência com referências. A publicação manual pelo Francisco é um gate humano, nunca parte automática dos testes.

**Lista fechada:** `tools/social/distribuicao.mjs`, `tools/social/metricas.mjs`, `tools/social/experiencias.mjs`, `tools/social/contrato.mjs`, `tools/social/retratos.mjs`, `test/social-distribuicao.test.ts`, `test/social-metricas.test.ts`, `test/social-experiencias.test.ts`, `docs/ARQUITETURA.md`, `docs/CONTRATOS.md`, `wiki/index.md`.

**Testes nomeados:** «aprovação de tema não autoriza publicar», «pacote alterado exige nova aprovação», «exportar não marca publicada», «confirmação repetida não duplica post», «observações desconhecidas não viram zero», «janelas distintas não são comparadas como equivalentes», «amostra insuficiente dá inconclusiva». **Evidência:** pacote/hash/decisão/recibo ligados, URL/ID fornecido pelo Francisco se efetivamente publicado, observações com data e relatório de uma variável. Sem publicação humana, fechar como pacote preparado e indicar esse gate em falta; não afirmar piloto publicado.

### F3.2: gate separado para um conector oficial, se necessário

**Dependências:** F3.1 e nova decisão expressa do Francisco sobre canal, conta, app já existente, permissões e entrega dos recursos. TikTok Direct Post privado fica excluído pela condição oficial de §4.3. Nenhuma criação de conta/chave ou custo está implícita.

**Missão curta inicial só documental, lista fechada:** `plans/social-conector-gate.md`, `wiki/index.md`. Três tarefas: inventário sem revelar segredos; ensaio sem envio com respostas simuladas de token expirado/timeout/efeito incerto; proposta da lista fechada de implementação do único fornecedor escolhido.

**Testes nomeados exigidos para autorizar a implementação seguinte:** «sem aprovação não envia», «timeout após upload fica incerto e não repete», «quota/token expirado pausa», «confirmação remota liga ID à tentativa», «mudar fornecedor preserva contrato Social v1». **Evidência:** condições oficiais datadas, permissões efetivas das contas já existentes, plano de teste sem publicação e decisão de custo explícita. Se faltar acesso/conta elegível, manter F3.1; não tratar esta missão como autorização de publicação real.

## 7. Primeira missão recomendada

[Suposição] **F1.1: separador Social a ler o contrato v1 com exemplos dos três projetos.** É a primeira fatia porque o painel fica utilizável para rever o trabalho desenhado com o ChatGPT, e a troca do produtor fica limitada aos ficheiros v1. Não depende de Remotion instalado, conta profissional, API de imagem no app-server ou publicação automática.

Aceitação da primeira missão: abrir Social dentro do Nexus no PC e no telemóvel; ler os três projetos pelo mesmo `social.ler`; trocar a fixture por um retrato v1 do motor sem alterar o painel; mostrar erro e versão desconhecida de forma visível; manter os dois botões de aprovação sem efeito até F1.2. Saída com testes, build e capturas de 390/1440 px, conforme §6.

F0 entrega inventário, proposta e provas, não altera a arquitetura executável. Francisco aprova F1.1 ou devolve alterações ao contrato. A publicação manual continua a ser o caminho de custo adicional zero; a imagem está provada nesta sessão e o render Remotion continua por provar.
