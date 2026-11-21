# Social Generator — motor de conteúdo para redes sociais

> Projeto do Francisco. Motor que alimenta o separador «Social» do painel do Nexus (o painel vive no Nexus, aqui só o motor).
> Auditoria F0 e contrato v1 proposto no Nexus: `C:/Claude/nexus/plans/social-generator-f0.md`; espelho da auditoria técnica neste repo: `docs/auditoria-f0.md`. Regras cross-projeto: `~/.claude/CLAUDE.md`.

## Estado do projeto

- **Visão funcional:** `SOCIAL_GENERATOR.md` e `docs/REQUISITOS.md`
- **Decisões e propostas:** `docs/DECISOES.md`
- **Alinhamento obrigatório antes de F1.1:** `docs/ALINHAMENTO_CONTRATO_V1.md`
- **Motores, projetos, métricas, biblioteca e roadmap:** `docs/MOTORES.md`, `docs/PROJETOS.md`, `docs/METRICAS.md`, `docs/BIBLIOTECA.md`, `docs/ROADMAP.md`
- **Wiki Social:** wiki/index.md e wiki/SCHEMA.md. Só dossiers de projetos com configuração aprovada; Design System, Motion System e estratégia definidos no onboarding; ativação separada.
- **To-do:** `TODO.md`
- **Log de sessões:** `SESSOES.md` (entrada nova no topo, com `**TL;DR:**` de 600 caracteres no máximo)

## Regras do repo

- **Postiz é a fonte de verdade do agendamento/publicação.** Motor 3 integra com Postiz; o dashboard Nexus consulta calendário de posts agendados, publicados, falhados e pendentes por sincronização. Não criar scheduler de publicação Nexus. Ver `docs/POSTIZ.md`.
- **Quatro motores lógicos aprovados:** M1 Intelligence, M2 Production, M3 Distribution & Scheduling (Postiz), M4 Analytics & Learning. Não criar quatro agentes residentes, scheduler de publicações Nexus ou serviço paralelo. **Motor 4 não altera Postiz**.
- **P5-C:** calendário Nexus apenas para **consulta**; editar/reagendar/cancelar posts só no **Postiz**, com sincronização de volta. O Postiz é a fonte de verdade da agenda.

- Os repositórios dos projetos servidos (Vefi, UtopIA, The Hidden Layer e futuros) são só de leitura por omissão.
- Orçamento adicional zero preferido; nenhuma API paga, conta ou chave sem decisão do Francisco. Teto de planeamento 25 €/mês não é autorização de compra.
- O motor escreve o contrato de dados do Nexus com escrita atómica (`.tmp` e renomear); não duplica orquestração, scheduler nem aprovações do Nexus.
- Nada é publicado sem as duas aprovações humanas (tema e publicação).
- **Projeto Social exclusivamente de origem Nexus:** **Adicionar projeto mostra todos os projetos Nexus** (mesmo sem redes/branding); adicionar cria um **rascunho Social**, nunca projeto Nexus independente. **Só projetos Social configurados, ativos e com branding completo** entram na pesquisa; conta configurada basta para fluxo manual, OAuth opcional. Não confundir fixtures F0 com catálogo Nexus.
- Perfil de marca e contas autorizadas vinculados ao ID de projeto Nexus; motores não podem aceitar projetos inventados nem contas de outras marcas. Plataformas/formatos vêm do perfil e das capacidades comprovadas.
- A biblioteca `D:\AI\Biblioteca` é externa ao Git e só pode ser utilizada com paths validados, direitos e autorização; nunca subir assets ou credenciais privados.
- A **entrevista de 20/11/2026 já fixou os requisitos de produto** em `docs/ALINHAMENTO_CONTRATO_V1.md`: pesquisa diária leve e relatório semanal aprofundado; fontes YouTube/Instagram/Google-Trends/Reddit/TikTok/X/LinkedIn; concorrência híbrida, scoring por projeto, formatos/canais por marca, métricas+atribuição, experiências, biblioteca e MVP de três conteúdos reais.
- **Funcionalidade antes do design visual detalhado do dashboard.** F1 usa UI mínima funcional no separador Social do Nexus. A auditoria F0 é fotografia histórica; os detalhes técnicos novos ainda precisam de validação, não são código instalado.
- Antes de implementar, identificar lista fechada de ficheiros, testes, evidências, limites, riscos e aprovação humana.
