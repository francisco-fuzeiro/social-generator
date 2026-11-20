# Social Generator — motor de conteúdo para redes sociais

> Projeto do Francisco. Motor que alimenta o separador «Social» do painel do Nexus (o painel vive no Nexus, aqui só o motor).
> Auditoria F0 e contrato v1 proposto no Nexus: \`C:/Claude/nexus/plans/social-generator-f0.md\`; espelho da auditoria técnica neste repo: \`docs/auditoria-f0.md\`. Regras cross-projeto: \`~/.claude/CLAUDE.md\`.

## Estado do projeto

- **Visão funcional:** \`SOCIAL_GENERATOR.md\` e \`docs/REQUISITOS.md\`
- **Decisões e propostas:** \`docs/DECISOES.md\`
- **Alinhamento obrigatório antes de F1.1:** \`docs/ALINHAMENTO_CONTRATO_V1.md\`
- **Motores, projetos, métricas, biblioteca e roadmap:** \`docs/MOTORES.md\`, \`docs/PROJETOS.md\`, \`docs/METRICAS.md\`, \`docs/BIBLIOTECA.md\`, \`docs/ROADMAP.md\`
- **To-do:** \`TODO.md\`
- **Log de sessões:** \`SESSOES.md\` (entrada nova no topo, com \`**TL;DR:**\` de 600 caracteres no máximo)

## Regras do repo

- Os repositórios dos projetos servidos (Vefi, UtopIA, The Hidden Layer e futuros) são só de leitura por omissão.
- Orçamento adicional zero preferido; nenhuma API paga, conta ou chave sem decisão do Francisco. Teto de planeamento 25 €/mês não é autorização de compra.
- O motor escreve o contrato de dados do Nexus com escrita atómica (\`.tmp\` e renomear); não duplica orquestração, scheduler nem aprovações do Nexus.
- Nada é publicado sem as duas aprovações humanas (tema e publicação).
- Perfil de projeto e marca sempre selecionados explicitamente. O modelo não pode fixar projetos ou plataformas nas regras de domínio só porque F0 usou fixtures limitadas.
- A biblioteca \`D:\AI\Biblioteca\` é externa ao Git e só pode ser utilizada com paths validados, direitos e autorização; nunca subir assets ou credenciais privados.
- A auditoria F0 é uma fotografia histórica; o alinhamento do contrato é **proposto e pendente de aprovação técnica**, não código já instalado.
- Antes de implementar, identificar lista fechada de ficheiros, testes, evidências, limites, riscos e aprovação humana.
