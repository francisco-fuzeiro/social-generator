# TODO — Social Generator

> Estado documental em 20/11/2026. Decisões funcionais não equivalem a missões implementadas. O plano técnico detalhado mantém-se em docs/auditoria-f0.md e docs/ROADMAP.md.

## ▶️ Em curso / bloqueado por decisão

- [x] **Entrevista P2-C — pesquisa adaptativa** apenas para perfis Social configurados, ativos e com branding; temas com teto de 7 dias/reavaliação semanal; lotes de ≥5 e escolha múltipla com sugestão de agendamento. Contrato em `docs/CICLO_TEMAS.md`.

- [x] Criar repositório GitHub e confirmar ligação `main` / `origin/main` no clone local.
- [x] Consolidar visão, requisitos, decisões, motores, métricas, perfis, biblioteca e roadmap no GitHub.
- [x] Preparar **adenda documental** ao contrato v1 em docs/ALINHAMENTO_CONTRATO_V1.md (reconstrução, não cópia literal da adenda anterior).
- [ ] **Rever adenda com Codex/Nexus** e reconciliar com secção 8 de `C:/Claude/nexus/plans/social-generator-f0.md`; sem implementar enquanto contrato não for validado.
- [ ] **Validação do Francisco antes da SG-M001** ou da primeira missão F1.1.
- [ ] Recuperar e confrontar os dois documentos originais completos do ChatGPT, caso sejam disponibilizados (SOCIAL_GENERATOR.md 489 linhas; adenda 284 linhas).
- [ ] Definir primeiro projeto/tema do piloto técnico; lembrar que MVP transversal exige três projetos.
- [ ] Inventariar **todo o catálogo de projetos Nexus** para «Adicionar projeto» (sem filtros por redes/branding); documentar rascunho de perfil Social, validação de branding, ativação e gate de pesquisa. Inventariar contas e permissões reais por plataforma para operações dependentes de canal.
- [ ] Inventariar biblioteca `D:\AI\Biblioteca` e política de licenças/retencão sem alterar os ficheiros.
- [x] **P3-B adaptada**: só selecionar temas no Motor 1; calendário com ordem/datas/horas/canais **depois da produção** e **antes de aprovação final**; Motor 3 agenda pacote aprovado.
- [ ] **Postiz Cloud vs self-hosted**: decidir implantação, limites, contas/plataformas, credenciais, uptime e custos antes de instalar/comprar.
- [ ] **Próxima decisão de UX funcional:** apenas consultar o calendário no Nexus ou também editar/reagendar/cancelar posts via Postiz?
- [ ] Definir KPIs numéricos, pesos exatos de scoring e horas da pesquisa diária/semanal. A opção C adaptativa e a apresentação de datas/horas **após produção** estão decididas.
- [ ] Rever no schema estados de validade/reavaliação de temas, lote incompleto e seleção múltipla **sem calendário inicial**; pacote de pré-publicação com calendário+hash e estados `pendente-agendamento-manual`/`agendado`/`publicado` separados.
- [ ] Em 23/11/2026 alterar a visibilidade do repo para privado, confirmar e rever exposição de segredos.

## Próximas missões técnicas (não autorizadas por esta checklist)

- [ ] F1.1 — contrato/leitor/vista Social Nexus mínimos; **Adicionar mostra todos os projetos Nexus**, configurar perfil Social em rascunho e pesquisar apenas projetos **ativos, configurados, com branding completo**; sem criação Nexus independente nem design visual detalhado.
- [ ] F1.2 — decisões editoriais persistentes e idempotentes.
- [ ] F1.3 — prévias multimédia protegidas.
- [ ] F2.1–F2.3 — pesquisa diária leve + relatório semanal aprofundado (execução inicialmente manual), provas de render e um piloto publicável; canais e formatos da entrevista.
- [ ] F3.1–F3.2 — **Motor 3 Postiz**: enviar pacotes aprovados, receber ID/recibo, sincronizar **calendário consultável no Nexus** (agendados/publicados/falhados/pendentes), métricas e aprendizagem; sem scheduler de publicação Nexus.
- [ ] MVP transversal — **3 peças reais**, The Hidden Layer + Vefi + UtopIA, 1 peça cada, com resultados verificáveis.
- [ ] **Só depois da funcionalidade validada:** planeamento visual detalhado, UX e dashboard final no Nexus.

## Regras

Não avançar de especificação para implementação sem aprovação. Não instalar dependências, gastar dinheiro, publicar conteúdos ou modificar repos de outros projetos por inferência. Registar testes e evidências reais nas sessões.
