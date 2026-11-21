# Contrato documental da Wiki — v1

**Decisões aprovadas:** SG-D062 a SG-D069. **Por implementar:** integração Nexus, geração de dossiers, Ingest, Query e Lint. Os campos exatos dos schemas técnicos ainda dependem da revisão dos contratos Nexus.

## Fontes de verdade

- Nexus: identidade e permissões dos projetos; catálogo visível no seletor «Adicionar».
- Social Generator: perfis/manifestos operacionais de marca, Design System, Motion System e estratégia, com revisão aprovada.
- Wiki Social: conhecimento humano e referências, **não** base transacional de estados.
- Postiz: calendário e estados operacionais dos posts que gere.

## Elegibilidade e fluxo

1. Selecionar projeto do catálogo Nexus e criar rascunho Social **fora da Wiki**.
2. Importar de fontes **expressamente autorizadas em leitura** ou preencher manualmente; anotar origem, data, versão, licença, confiança e lacunas.
3. Configurar produto/arquitetura relevantes; **Design System** (logótipo, cores/tokens, tipografia, grelha, componentes e uso); **Content/Motion System** (estilos de posts, vídeos/carrosséis, hooks, narrativa, ritmo, transições, legendas, capas, voz, áudio, templates); público, estratégia, objetivos, canais, fontes e direitos.
4. Validar humanamente a configuração e guardar os manifestos estruturados **versionados e aprovados**.
5. Gerar e verificar o dossier Wiki dessa **mesma revisão**, atualizar o índice e só depois declarar onboarding documental completo. Falha parcial deve ser recuperável, idempotente e visível.
6. Ativar ou manter inativo por decisão humana separada. Apenas configurado e ativo entra na pesquisa.

Um projeto aprovado inativo permanece na Wiki sem pesquisa; arquivado/desassociado sai do índice corrente, com preservação do histórico. O diretório wiki/modelos/ **não contém projetos configurados**.

## Dossier

Caminho proposto: wiki/projetos/[socialProjetoId]/. Conteúdos: index.md, arquitetura.md, design-system.md, motion-system.md, estrategia-editorial.md, plataformas.md e aprendizagem.md.

Cada página real referencia: ID Social estável, revisão de configuração, data/aprovador, fontes e respetiva versão/data de leitura, confiança e direitos. Não usar nome/cwd/pasta do Nexus como identidade permanente. A arquitetura original é canónica no repositório de origem; nesta Wiki só há resumo relevante para conteúdos. Manifestos operacionais aprovados, e não Markdown interpretado livremente, alimentam os motores.

## Operações futuras

- **Ingest:** detetar alterações autorizadas, preparar diffs e pedir aprovação de mudanças de marca/estratégia.
- **Query:** consultar conhecimento por projeto e versão, com referências, sem misturar marcas.
- **Lint:** verificar links, metadados, proveniência, índices, consistência com revisão aprovada e conflitos, sem reescrever decisões automaticamente.

Reutilizar infraestrutura, agentes, permissões e validadores do Nexus, sem criar daemons, schedulers ou base vetorial por defeito.

## Segurança e aceitação

Não publicar segredos, dados pessoais, código privado de outros projetos, caminhos sensíveis ou media de D:/AI/Biblioteca no Git. Não modificar os projetos de origem.

Testar rascunho ausente, configurado inativo presente sem pesquisa, versão igual entre Wiki/manifestos, recuperação de falhas, isolamento por marca, projetos renomeados, revisão humana das mudanças e consulta/lint com fontes. Nenhum destes testes é considerado implementado pela simples criação da documentação.