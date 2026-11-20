# Projetos editoriais — contrato de integração com Nexus

> Atualizado com a correção da entrevista: **Adicionar projeto apresenta todos os projetos do Nexus**; a pesquisa só abrange os adicionados, configurados, ativos e com branding completo. Nenhuma conta OAuth é necessária para operações manuais. Estes perfis são intenção editorial, não prova de contas ligadas.

## 1. Adicionar, configurar e ativar — decisão corrigida da entrevista

**Nexus é a única fonte de projetos.** O botão **Adicionar projeto**, no separador Social do Nexus, apresenta **todos os projetos existentes no catálogo do Nexus** que o utilizador pode consultar, mesmo que não tenham contas sociais ligadas, branding ou perfil Social. Não criar um projeto novo no Nexus a partir do Social.

A seleção adiciona um **perfil Social em rascunho** associado ao ID canónico Nexus; não significa elegibilidade automática para pesquisa, produção ou publicação. Nem todos os projetos Nexus precisam de ser adicionados ou ativados no Social.

Fluxo decidido:

1. **Adicionar projeto:** lista integral dos projetos Nexus disponíveis ao utilizador, independentemente de socials, branding ou ativação Social.
2. **Configurar Social:** importar **proposta de branding de fontes autorizadas em modo leitura** (quando existirem), permitir edição manual e exigir **validação humana do brand kit**, além de público/objetivos, formatos, plataformas e pelo menos uma conta social identificável/configurada para operações do canal. Não exigir OAuth/API.
3. **Ativar:** opção explícita do utilizador após validar os requisitos mínimos, sem ativação implícita ao adicionar. Um rascunho incompleto permanece editável, assinalando os campos em falta.
4. **Pesquisar:** **só projetos adicionados ao Social, ativos e com perfil de branding completo/configurado**. Verificar o estado do perfil e dos canais relevantes antes da execução diária, semanal ou pontual. Em caso de falha, indicar motivo e não consumir recursos.
5. **Produzir/publicar:** continuar a exigir projeto ativo, marca válida, formatos e contas apropriados, mais os dois gates humanos. API autenticada apenas para capacidades automáticas permitidas.

**Estados propostos tecnicamente:** `nao-adicionado` (só no catálogo Nexus), `rascunho` (adicionado, configuração incompleta/inativo), `pronto` (configuração validada, ainda inativo), `ativo` (pode entrar no Motor 1), `suspenso` (invalidação, desativação ou perda de pré-requisitos), `arquivado` (histórico preservado). Os nomes finais e transições precisam de validação no contrato Nexus. Não eliminar histórico ao desativar.

**Conta configurada vs API:** a decisão P1-B mantém-se: handle/URL/identificador de uma conta configurada é suficiente para operações manuais; OAuth não é requisito para pesquisa ou ativação. É distinto do seletor **Adicionar projeto**, que mostra todos os projetos Nexus mesmo sem qualquer conta social.

**Perda de configuração:** se o branding obrigatório ficar incompleto, um projeto ativo deve ser bloqueado para novas pesquisas até corrigir. Se a conta/plataforma deixar de estar configurada, suspender trabalhos que dependem dela e novas publicações. Preservar histórico, provas, métricas e decisões. A desativação intencional pára novas execuções, sem apagar o projeto do Social.

## 1.1. Importação inteligente de branding — entrevista P10-B (DECIDIDO)

**Adicionar projeto** continua a mostrar **todos os projetos Nexus**; escolher um cria apenas um **rascunho Social inativo**. Na configuração, o Social Generator pode **ler fontes autorizadas** ligadas ao projeto (informações Nexus, website oficial, documentação/brand book, repositório em modo de leitura e assets/licenças autorizados), propor um perfil de marca e apresentar a evidência, data, confiança e lacunas de cada campo. Não assumir acesso ao repo ou aos assets pela mera existência no Nexus; não escrever no projeto de origem.

**O utilizador corrige e aprova explicitamente a versão do branding** antes de este ser considerado validado/completo. O operador pode preencher manualmente campos indisponíveis ou recusar importação. A validação de marca **não ativa automaticamente o Social**: um perfil aprovado mas inativo continua sem pesquisa. Para entrar no Motor 1 exigem-se **branding validado + configuração de canais/conta + ativação Social explícita**. Mudanças de marca ficam versionadas e, segundo **P11-B**, são **detetadas periodicamente nas fontes autorizadas** e apresentadas para **aceitação, rejeição ou correção**. Apenas a aprovação humana publica uma nova versão oficial; nenhuma publicação Postiz é editada por essa deteção.

Contrato de fontes, lacunas, confiança, isolamento, permissões e testes: [BRANDING.md](BRANDING.md).

## 1.2. Deteção de mudanças e revalidação — P11-B (DECIDIDO)

Após aprovação inicial, verificar **periodicamente fontes autorizadas** e comparar com o perfil de branding validado. Mostrar diferenças, fontes/datas, confiança e conflitos num **pedido de alteração de marca**, sem atualizar automaticamente identidade oficial. O utilizador pode **aceitar, rejeitar ou corrigir**, com histórico de decisão/versão. Não confundir uma mudança no website com alteração definitiva da identidade de marca. A cadência exata e o comportamento de notificação ficam para configuração técnica. **P12-B:** a aprovação de nova versão gera **auditoria dos criativos em produção, pendentes de revisão, aprovados ainda não enviados e posts já agendados**. Mostrar diferenças e revisões localizadas propostas para decisão humana; não regenerar por omissão. Publicações agendadas são **sinalizadas para revisão manual no Postiz**, sem mutação/cancelamento pelo Nexus. Publicados e histórico não são alterados. [Contrato BRANDING](BRANDING.md).

## 1.3. Conteúdos afetados pela mudança de marca — P12-B (DECIDIDO)

Quando uma nova versão de branding for aprovada, auditar dependências dos conteúdos desse projeto: **em produção**, **à espera de revisão**, **aprovados mas ainda não entregues ao Postiz** e **já agendados**. O dashboard Nexus apresenta lista com estado, elementos de branding divergentes e proposta de revisão localizada quando relevante. O utilizador **decide por peça** se mantém, corrige ou adia; uma mudança de perfil por si só não refaz conteúdos. Revisões materialmente diferentes originam novas versões e exigem novamente aprovação final.

**Agendamentos existentes no Postiz:** apenas sinalizar alerta e opção de abrir o post no Postiz para intervenção manual; **não** editar, cancelar ou reagendar via Nexus. Não publicar afirmações falsas de sincronização nem afetar projetos/contas de outras marcas. Contrato: [BRANDING.md](BRANDING.md) §4.2.

## 2. Perfil editorial (extensão da entidade Nexus)

Campos: `nexusProjectId`, `socialEnabled`, `perfilVersao`, marca/nomes, descrição, projeto e repositórios de referência apenas de leitura, idioma/mercado, público, proposta de valor, objetivos e KPIs, canais e contas mapeados às integrações do Nexus, formatos permitidos, estilo visual, voz, restrições factuais, bibliotecas/assets e licenças, concorrentes fixos/descobertos, CTAs e eventos de conversão, limites de custo e autorização.

- O Social **não duplica o registo canónico, credenciais ou permissões do Nexus**.
- Alteração de contas/brand kit tem de invalidar pacotes/aprovações dependentes da versão antiga.
- Aprendizagem e observações de cada projeto isoladas, com uso transversal apenas de padrões abstratos autorizados.
- Repositórios Vefi, UtopIA e outros permanecem só leitura por omissão.
- Canais pretendidos ≠ contas ligadas. Distinguir explicitamente `planeado` (intenção), `configurado` (conta/handle/URL registados no Nexus), `autenticado` (API OAuth e permissões válidas), `validado` (capacidade efetivamente testada) e `indisponivel` (sem acesso/capacidade). Uma conta apenas configurada habilita pesquisa/produção/publicação manual e observações manuais após opt-in, **não** recolha/upload API.

## 3. Perfis e canais da entrevista

| Projeto Nexus (se elegível e ativado) | Formatos decididos | Canais pretendidos | Objetivo de referência |
|---|---|---|---|
| **The Hidden Layer** | Vídeos verticais narrados (faceless), motion graphics por código | Instagram, YouTube, X, TikTok | Audiência qualificada, retenção, recorrência |
| **Vefi** | Vídeos e carrosséis | Instagram, TikTok, X, LinkedIn, YouTube | Registos, ativação, aquisição |
| **UtopIA Solutions** | Vídeos e carrosséis | Instagram, LinkedIn, TikTok, X, YouTube | Leads qualificadas e contactos/reuniões |
| **Car Enterprise** | A decidir | A decidir | Interesse no jogo/wishlists quando mensurável |

Os três primeiros são os alvos do **MVP de três conteúdos reais**, sujeitos a existência e elegibilidade no Nexus. Car Enterprise **não deve aparecer como projeto ativo só porque foi citado como exemplo**. Nunca criar conta ou canal social automaticamente.

### The Hidden Layer

Marca: **The Hidden Layer** (não The Unseen Layer); conta Instagram conhecida: `@thehiddenlayer404` (não é prova de conexão técnica). Mini-documentários animados em **inglês**, sobre história, filosofia, poder, sociedade, sistemas, economia e natureza humana, com narração/voz consistente, **sem personagens**, motion graphics e visualizações explicativas. Base editorial recomendada para o primeiro template: vertical 1080×1920, 30 fps, Remotion; vídeos generativos/imagens por IA só quando acrescentarem valor. Revisão factual rigorosa: explicação fundamentada, não narrativa conspirativa. Não misturar marca/voz de Vefi ou UtopIA.

### Vefi

Aplicação de finanças; vídeos e carrosséis com demonstrativos reais (não inventar funcionalidades). Vídeos promocionais e situações concretas do utilizador. Marca/capturas/claims financeiros vêm de origem autorizada **só leitura**. Atribuição via UTMs, registos, ativação e eventos quando disponíveis.

### UtopIA Solutions

Agência digital portuguesa; vídeos e carrosséis sobre casos e valor para negócios, websites e software com design personalizado. Tom orientado a conversões sem promessas falsas. Evento de interesse: contactos, formulários, leads qualificados e reuniões. Repositório/site apenas de leitura.

### Car Enterprise

Exemplo de extensão futura, não membro automático do Social. Se existir no Nexus, aparecerá em «Adicionar projeto» mesmo sem socials. Só entra na pesquisa depois de ser adicionado, configurado com branding e canais relevantes, e ativado. Definir público, redes, recursos e obrigações antes de gerar.

## 4. Testes contratuais

- Projeto inexistente no Nexus: não aparece e não pode ser criado pelo Social.
- Projeto Nexus sem conta social ou branding: **aparece em «Adicionar projeto»**; ao adicionar, fica rascunho e não é pesquisado.
- Projeto Nexus com branding completo, conta configurada e opt-in ativo, mas sem API: é pesquisado; produção/publicação e métricas manuais permitidas mediante gates, não ações API.
- Projeto Nexus adicionado ao Social mas `socialEnabled=false`: continua configurável, mas não é pesquisado nem entra na produção.
- Projeto Nexus adicionado, com branding incompleto, mesmo ativo por erro: pesquisa bloqueada e motivo explicitado.
- Projeto Nexus configurado, com branding completo e ativo: perfil e canais recuperados sem alteração ao código dos motores.
- Projeto com website e documentação autorizados: propor branding **com fonte e confiança**, mas não ativar nem pesquisar antes da **aprovação humana e ativação explícita**.
- Importação indisponível ou fontes contraditórias: mostrar lacunas/conflitos e permitir completar manualmente, sem inventar identidade ou claims.
- Remoção de conta/arquivamento: suspender operações, guardar histórico.
- Tentativa de publicar em conta não associada ao mesmo projeto Nexus: rejeitar.
- Introduzir um quarto projeto no Nexus, mesmo **sem socials**: aparece no seletor «Adicionar» sem alterar enums; pesquisa só começa após completar branding, configuração e ativação.
- Um projeto com brand kit diferente não pode reutilizar assets restritos de outro sem direitos.

Ver ALINHAMENTO_CONTRATO_V1.md, REQUISITOS.md, BIBLIOTECA.md e METRICAS.md.
