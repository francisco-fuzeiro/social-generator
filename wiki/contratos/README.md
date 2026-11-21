# Contratos de conhecimento Wiki — v1.0.0

**Especificação agnóstica, não integração Nexus nem aprovação de projeto.** Ver [regras documentais](../SCHEMA.md) e [decisões SG-D062–SG-D069](../../docs/DECISOES.md).

O [JSON Schema Draft 2020-12](v1/project-knowledge.schema.json) define `ProjectKnowledgeProfile`, `DesignSystem`, `ContentMotionSystem`, `EditorialStrategy`, `KnowledgeSource` e `WikiProjectManifest`. Os tipos auxiliares tratam fontes, recursos, públicos e direitos.

- `nexusProjectRef`: identificador opaco autorizado no Nexus; não criar catálogo Nexus próprio nem assumir formato/API não verificada.
- `socialProjectId`: identidade Social estável, independente do nome e da pasta.
- `approvedRevision`, `approvedAt`, `approvalRecordRef`: apontam para revisão e aprovação humana **externamente verificadas**; a presença destes campos não prova autorização.
- `documentaryValidation: passed`: estado documental exigido a um dossier publicável, **sem autorizar ativação nem execução**.
- `KnowledgeSource`: referência lógica, data, versão, confiança e direitos. Recursos têm IDs lógicos, não media/segredos/paths privados.

## Regras fora do JSON Schema

O futuro publicador/linter verificará identidade e permissões Nexus, existência da aprovação, igualdade da revisão em todas as secções e manifestos operacionais, referências a fontes e licenças, isolamento por marca, links e ausência de dados privados. A falha parcial deve ser recuperável, idempotente e impedir a conclusão do onboarding. Este schema **não implementa** essas operações.

O manifesto não contém contas/tokens, OAuth, estado de pesquisa/ativação, agendas Postiz, recibos, métricas ou aprovações de temas/publicações. Plataformas editoriais são intenções, não contas operacionais. Campanhas aparecem apenas como referências.

**Dependências a confirmar no Nexus:** identidade permanente e acesso ao catálogo, autorização de fontes, registo da aprovação humana, revisão persistente, formato dos manifestos consumidos pelos motores e publicação transacional. Sem essa verificação, manter interfaces agnósticas.

Verificação documental reproduzível: `node scripts/validate-wiki.mjs`. Não foi adicionada biblioteca para validação integral de instâncias JSON Schema.
