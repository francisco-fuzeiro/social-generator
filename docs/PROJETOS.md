# Projetos editoriais — contrato de integração com Nexus

> Atualizado em 20/11/2026 segundo a entrevista. **DECIDIDO:** o Social Generator não cria projetos de raiz. Só utiliza **projetos já existentes no catálogo do Nexus que tenham redes sociais configuradas**. Dos projetos elegíveis, só ficam ativos no Social os que forem explicitamente selecionados/ativados. Perfis listados abaixo são intenção editorial inicial, não prova de contas conectadas.

## 1. Elegibilidade e ciclo de vida — decisão vinculativa

A fonte de verdade dos projetos é o **Nexus**. A interface Social mostra apenas os projetos que cumprem cumulativamente:
1. **Existem no catálogo de projetos do Nexus** (ID canónico estável).
2. **Têm pelo menos uma conta/canal social configurado no Nexus** para o projeto, ou uma ligação Social explicitamente registada pelo Nexus como tal.
3. Não estão arquivados, inacessíveis ou inelegíveis pelas políticas do Nexus.

A lista de elegíveis é **o catálogo filtrado do Nexus**, não uma lista livre em código. A ação de interface é **Ativar Social num projeto Nexus elegível**, e nunca «Criar um projeto novo». A ativação é opcional: muitos projetos do Nexus nunca aparecerão no Social ativo. Um projeto com socials não fica ativado automaticamente.

**Regra de contrato:** Nexus project ID = referência canónica; configuração Social acrescenta identidade editorial, canais autorizados, branding e objetivos, ligada ao ID Nexus. Evitar dois IDs independentes sem mapa explícito para dados históricos. IDs de exemplo F0 (`the-hidden-layer`, `vefi`, `utopia`) só servem de fixtures ou mapeamentos legados; não são enumeração definitiva nem prova de existência no Nexus.

**Se for retirada a última conta social no Nexus:** impedir novas campanhas/publicações e assinalar suspensão/inelegibilidade; **não apagar** histórico, provas, decisões ou métricas. Se o projeto for desativado no Social, conservar histórico e não executar trabalhos novos. Reativação exige nova verificação de permissões e contas. Sem conta conectada/aprovação, exportação manual é possível apenas dentro das políticas e do perfil autorizado, mas o projeto tem de continuar a cumprir o gate de elegibilidade do Nexus.

## 2. Perfil editorial (extensão da entidade Nexus)

Campos: `nexusProjectId`, `socialEnabled`, `perfilVersao`, marca/nomes, descrição, projeto e repositórios de referência apenas de leitura, idioma/mercado, público, proposta de valor, objetivos e KPIs, canais e contas mapeados às integrações do Nexus, formatos permitidos, estilo visual, voz, restrições factuais, bibliotecas/assets e licenças, concorrentes fixos/descobertos, CTAs e eventos de conversão, limites de custo e autorização.

- O Social **não duplica o registo canónico, credenciais ou permissões do Nexus**.
- Alteração de contas/brand kit tem de invalidar pacotes/aprovações dependentes da versão antiga.
- Aprendizagem e observações de cada projeto isoladas, com uso transversal apenas de padrões abstratos autorizados.
- Repositórios Vefi, UtopIA e outros permanecem só leitura por omissão.
- Canais pretendidos ≠ contas ligadas; o perfil deve identificar `planeado / configurado / validado / indisponivel` por rede.

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

Exemplo de extensão futura, não membro automático do Social. Só poderá ser ativado quando existir no Nexus, tiver socials e o operador o ativar. Definir público, redes, recursos e obrigações antes de gerar.

## 4. Testes contratuais

- Projeto inexistente no Nexus: não aparece e não pode ser criado pelo Social.
- Projeto Nexus sem socials: não aparece como elegível.
- Projeto Nexus com socials mas `socialEnabled=false`: elegível para ativar, mas não aparece nas listas de produção.
- Projeto Nexus elegível/ativado: perfil e canais são recuperados sem alteração ao código dos motores.
- Remoção de conta/arquivamento: suspender operações, guardar histórico.
- Tentativa de publicar em conta não associada ao mesmo projeto Nexus: rejeitar.
- Introduzir um quarto projeto no Nexus com socials: Social permite opt-in sem mudar enums/implementação.
- Um projeto com brand kit diferente não pode reutilizar assets restritos de outro sem direitos.

Ver ALINHAMENTO_CONTRATO_V1.md, REQUISITOS.md, BIBLIOTECA.md e METRICAS.md.
