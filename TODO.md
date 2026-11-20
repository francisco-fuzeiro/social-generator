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
- [ ] **Provar importação de branding P10-B:** fontes Nexus/website/docs/repos/autorizadas, leitura sem alterações, proveniência e incerteza, consentimento/permissions, correção manual, versionamento, aprovação e gate de pesquisa; sem dados externos assumir acesso.
- [ ] Inventariar biblioteca `D:\AI\Biblioteca` e política de licenças/retencão sem alterar os ficheiros.
- [x] **P3-B adaptada**: só selecionar temas no Motor 1; calendário com ordem/datas/horas/canais **depois da produção** e **antes de aprovação final**; Motor 3 agenda pacote aprovado.
- [x] **P6-C:** primeiro validar a integração Postiz, só depois decidir Cloud vs self-hosted.
- [x] **P7-B:** revisões localizadas com preservação de trechos/recursos corretos, histórico e comparação/recuperação de versões; novo gate final obrigatório para pacote alterado. `docs/REVISOES.md`.
- [x] **P8-B:** feedback por comentários associados a timestamps do vídeo e por instruções gerais, agrupados por versão; sem editor visual completo.
- [x] **P9-B:** no máximo três tentativas por ronda (execução inicial + duas autocorreções de QA), paragem antecipada e reporte de falhas remanescentes; não consumir serviços pagos sem aprovação.
- [x] **P10-B:** branding proposto por importação em leitura de fontes autorizadas do projeto Nexus, com evidência e lacunas por campo, edição manual e **aprovação humana antes de ativar**.
- [ ] **P11:** decidir como detetar e revalidar alterações ao website/brand book/repo após aprovação inicial do branding (manual, automático com aprovação, ou automático sem gate).
- [ ] Limites técnicos concretos de tempo/CPU e testes de QA disponíveis por formato (o teto de 3 tentativas já está decidido).
- [ ] **Prova técnica Postiz** (não iniciada): verificar se existe opção gratuita/experimental válida; testar API, contas/redes/formatos, agendamento, sincronização, recibos, erros e edição no Postiz com reflexo no calendário Nexus, sem publicar nem pagar sem aprovação.
- [ ] **Escolher Postiz Cloud vs self-hosted após relatório de evidências:** limites, uptime 24/7, custos reais, manutenção, backups e capacidade por plataforma; decisão requer aprovação.
- [x] **P5-C:** calendário e posts consultáveis no Nexus, **editar/reagendar/cancelar no Postiz**; sincronizar alterações.
- [x] **Quatro motores aprovados:** M1 Intelligence, M2 Production, M3 Distribution & Scheduling (Postiz), M4 Analytics & Learning; sem quatro agentes permanentes.
- [ ] Definir KPIs numéricos, pesos exatos de scoring e horas da pesquisa diária/semanal. A opção C adaptativa e a apresentação de datas/horas **após produção** estão decididas.
- [ ] Rever no schema estados de validade/reavaliação de temas, lote incompleto e seleção múltipla **sem calendário inicial**; pacote de pré-publicação com calendário+hash e estados `pendente-agendamento-manual`/`agendado`/`publicado` separados.
- [ ] Em 23/11/2026 alterar a visibilidade do repo para privado, confirmar e rever exposição de segredos.

## Próximas missões técnicas (não autorizadas por esta checklist)

- [ ] F1.1 — contrato/leitor/vista Social Nexus mínimos; **Adicionar mostra todos os projetos Nexus**, configurar perfil Social em rascunho e pesquisar apenas projetos **ativos, configurados, com branding completo**; sem criação Nexus independente nem design visual detalhado.
- [ ] F1.2 — decisões editoriais persistentes e idempotentes.
- [ ] F1.3 — prévias multimédia protegidas.
- [ ] F2.1–F2.3 — pesquisa diária leve + relatório semanal aprofundado (execução inicialmente manual), provas de render, um piloto publicável e revisão P7-B/P8-B por trechos e comentários temporizados, com histórico de versões e QA; canais e formatos da entrevista.
- [ ] F3.1–F3.2 — **Motor 3 Postiz**: enviar pacotes aprovados, confirmar IDs/recibos e sincronizar **calendário Nexus só de leitura**; edições no Postiz; nunca usar scheduler de publicação Nexus.
- [ ] F3.3 — **Motor 4 Analytics & Learning**: recolher métricas, UTMs/eventos/conversões/custos, experiências e aprendizagem, enviando sinais ao M1 sem intervir em publicação.
- [ ] MVP transversal — **3 peças reais**, The Hidden Layer + Vefi + UtopIA, 1 peça cada, com resultados verificáveis.
- [ ] **Só depois da funcionalidade validada:** planeamento visual detalhado, UX e dashboard final no Nexus.

## Regras

Não avançar de especificação para implementação sem aprovação. Não instalar dependências, gastar dinheiro, publicar conteúdos ou modificar repos de outros projetos por inferência. Registar testes e evidências reais nas sessões.
