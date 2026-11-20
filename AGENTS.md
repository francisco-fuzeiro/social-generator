# Instruções para Codex e outros agentes

1. Ler `CLAUDE.md`, `SOCIAL_GENERATOR.md`, `docs/DECISOES.md`, `docs/ALINHAMENTO_CONTRATO_V1.md`, `TODO.md` e a auditoria F0 antes de planear uma missão.
2. **Nexus é dono da orquestração e do dashboard Social**. Não implementar UI autónoma, scheduler ou sistema de agentes duplicado.
3. **Adicionar projeto** mostra todos os projetos Nexus; adicionar cria rascunho Social. **Pesquisa apenas nos perfis Social adicionados, ativos, configurados e com branding completo**. Nenhum projeto Nexus independente nem execução automática ao adicionar.
4. Diferenciar `DECIDIDO`, `PROPOSTO`, `PENDENTE` e `IMPLEMENTADO`; não executar automaticamente o roadmap.
5. Trabalhar com listas fechadas de ficheiros, testes e evidências, sob autorização do utilizador. Não editar outros repositórios sem autorização explícita; Vefi e UtopIA são só leitura por omissão.
6. Dois gates humanos intransponíveis: **tema** antes do guião e **publicação** antes do envio. Nenhum recurso pago ou publicação automática implícita.
7. Nunca publicar segredos, dados pessoais, imagens privadas, conteúdo licenciado sem direito, media ou o conteúdo da pasta `D:\AI\Biblioteca` neste repositório.
8. Guardar estado real e limitações em `TODO.md` e `SESSOES.md`; não anunciar implementado sem testes e evidências.
9. O contrato F0 é histórico. Antes de codificar F1, rever as incompatibilidades documentadas na adenda funcional e aprovar um contrato consolidado.

10. Cumprir pesquisa diária leve e relatório semanal aprofundado; fontes e scoring por projeto como documentado. Respeitar formatos/canais específicos, aprendizagem e MVP de três conteúdos reais.
11. **Não desenhar dashboard visual detalhado antes de funcionamento real**; UI F1 apenas para validar estados e operações Nexus.
12. **Quatro motores lógicos aprovados:** M1 Intelligence, M2 Production, M3 Distribution & Scheduling (Postiz), M4 Analytics & Learning. M4 analisa métricas/atribuição/experiências e devolve sinais ao M1; não altera publicações. Não criar quatro agentes permanentes.
13. **Postiz agenda e publica**, não o scheduler Nexus. O calendário Nexus consulta agendados/publicados/erros; **P5-C manda editar/reagendar/cancelar no Postiz**, nunca no dashboard Nexus. Ler `docs/POSTIZ.md` e `docs/METRICAS.md`.
