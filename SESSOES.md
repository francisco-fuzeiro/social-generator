# Sessões — Social Generator

## 2026-11-20 — Entrevista P12-B: auditoria após mudança aprovada de branding

**TL;DR:** O utilizador escolheu P12-B. Após nova versão aprovada do branding, auditar as peças afetadas por projeto em produção, à espera de revisão, aprovadas mas não enviadas e já agendadas. Propor revisões localizadas e deixar o operador decidir por peça. Posts agendados no Postiz apenas sinalizados e abertos para revisão manual, sem alterar/cancelar/reagendar via Nexus. Novas versões revistas exigem gate de publicação. Documentação, não implementação.

- **Decisão:** SG-D049 em `docs/DECISOES.md`; contrato [`docs/BRANDING.md`](docs/BRANDING.md) §4.2; validações de requisitos/Nexus/Postiz/roadmap alinhadas.
- **Pergunta seguinte P13:** organização de conteúdo contínuo e campanhas por projeto.


## 2026-11-20 — Entrevista P11-B: branding atualizado só após aprovação

**TL;DR:** O utilizador escolheu B: verificar periodicamente as fontes autorizadas do projeto (website, brand book, repo só leitura e assets), detetar diferenças e apresentar proposta comparativa. Operador pode aceitar/rejeitar/corrigir; somente após aprovação humana uma nova versão do branding é considerada oficial. Alterações não modificam automaticamente posts já agendados no Postiz. Sem alteração de código nem execução de scans.

- **Decisão:** SG-D048 em `docs/DECISOES.md`; contrato detalhado em `docs/BRANDING.md`.
- **Documentação alinhada:** `docs/PROJETOS.md`, `docs/REQUISITOS.md`, `docs/ALINHAMENTO_CONTRATO_V1.md`, `docs/ROADMAP.md`, `TODO.md`.
- **P12:** decidir como tratar conteúdos em produção, pendentes de revisão, aprovados e agendados após mudança de branding aprovada.


## 2026-11-20 — Entrevista P10-B: importação inteligente de branding

**TL;DR:** Aprovada importação inteligente do branding por projeto Nexus a partir de fontes autorizadas em modo de leitura (Nexus, website, documentação, repositório e assets quando houver acesso). A proposta deve distinguir fontes, confiança, lacunas e conflitos; operador corrige e valida explicitamente a versão da marca. Importar/validar não ativa Social automaticamente; Motor 1 pesquisa só perfis configurados, ativos e com branding validado. Nenhuma fonte foi efetivamente inspecionada, e não houve implementação.

- **Decisão:** SG-D047; contrato detalhado `docs/BRANDING.md`.
- **Alterações:** `docs/DECISOES.md`, `docs/PROJETOS.md`, `docs/REQUISITOS.md`, `docs/ALINHAMENTO_CONTRATO_V1.md`, `docs/ROADMAP.md`, visão e TODO.
- **P11:** decidir o tratamento de alterações de branding após aprovação do perfil inicial.


## 2026-11-20 — Entrevista P9-B: até três tentativas automáticas de QA

**TL;DR:** O utilizador escolheu P9-B: uma execução inicial do pedido de revisão e no máximo duas correções automáticas adicionais, com QA após cada tentativa, paragem precoce quando resolvido/bloqueado e explicitação das falhas no fim. Não apresentar rascunho falhado como validado, não publicar nem gastar em serviços pagos sem autorização.

- **Decisão:** SG-D046; contratos `docs/REVISOES.md`, `docs/REQUISITOS.md`, `docs/MOTORES.md` e adenda Nexus.
- **Estado:** documentação atualizada, sem implementação nem provas de QA.
- **Seguinte:** pergunta 10 sobre origem/configuração do branding por projeto.


## 2026-11-20 — Entrevista P8-B: feedback temporizado no vídeo

**TL;DR:** O utilizador escolheu P8-B: ao pausar a prévia, associa comentários a instantes específicos, podendo adicionar várias notas e instruções gerais. Os pedidos ficam ligados à versão do vídeo, evitando reaplicar timestamps incorretamente após revisão. O Motor 2 realiza alterações localizadas segundo P7-B; não criar editor visual completo. Documentação apenas.

- **Decisão:** SG-D045 em `docs/DECISOES.md`; contratos em `docs/REVISOES.md`, `docs/REQUISITOS.md` e `docs/ALINHAMENTO_CONTRATO_V1.md`.
- **Pendente:** pergunta 9, limites de rondas automáticas de QA/correção e custo, sem código implementado.


## 2026-11-20 — Entrevista P7-B: revisões localizadas de conteúdos

**TL;DR:** Aprovada P7-B: Motor 2 aplica alterações localizadas, preserva as partes já corretas sempre que possível, explica dependências afetadas e cria novas versões com histórico, comparação e recuperação. A aprovação final é por versão/hash; nenhuma revisão é publicada automaticamente. Criado docs/REVISOES.md. Sem implementação de código ou teste de render.

- **Decisão:** SG-D044 em `docs/DECISOES.md`, contrato funcional `docs/REVISOES.md`.
- **Pendente:** pergunta 8 sobre forma de dar feedback de revisão no dashboard; estratégia técnica de render/caches e limites por peça.


## 2026-11-20 — Entrevista P6-C: validar Postiz antes de decidir alojamento

**TL;DR:** O utilizador escolheu P6-C: validar primeiro API, canais, formatos, estados, agendamento, sincronização Postiz→Nexus e custos; só depois comparar Cloud/self-hosted e aprovar implantação. Não assumir trial gratuito disponível, nem efetuar pagamentos/instalação de produção. Atualizados contratos/roadmap/TODO; sem execução ou teste real.

- **Decisão:** SG-D043; `docs/POSTIZ.md` §6.1.
- **Estado:** documentação fechada, ensaios e alojamento ainda pendentes.


## 2026-11-20 — P5-C e aprovação dos quatro motores

**TL;DR:** Confirmada P5-C: calendário Postiz consultável no dashboard Nexus, mas edição, reagendamento e cancelamento exclusivamente no Postiz. Aprovada a arquitetura de quatro motores lógicos: M1 Intelligence, M2 Production, M3 Postiz Distribution & Scheduling, M4 Analytics & Learning. A separação é lógica, não quatro agentes residentes. Atualizados contratos e backlog; sem implementação executável.

- **Decisões:** SG-D041 (P5-C) e SG-D042 (quatro motores); substituem estado indeciso SG-D039 e arquitetura histórica SG-D003.
- **Alterações:** `docs/DECISOES.md`, `docs/MOTORES.md`, `docs/METRICAS.md`, `docs/POSTIZ.md`, contrato, requisitos, roadmap, instruções e visão geral.
- **Pendente:** P6 — Postiz Cloud vs self-hosted; validação de API e modos de operação antes de instalar.


## 2026-11-20 — Motor 3 Postiz e calendário Nexus

**TL;DR:** Confirmada produção em fila (P4-B), Postiz como scheduler/publicador independente do Nexus e calendário Postiz consultável no dashboard Social (agendados, publicados, falhados, pendentes). Criado contrato docs/POSTIZ.md e atualizados requisitos, decisões e roadmap. Sem implementação executável ou integração instaladas.

- **Decisões:** SG-D037 a SG-D040 no `docs/DECISOES.md`.
- **Contrato:** `docs/POSTIZ.md`, com Postiz como fonte operacional de agenda e Nexus como leitura/supervisão.
- **Pendentes:** Cloud vs self-hosted, capacidades por canal, API, política de edição/reagendamento/cancelamento a partir do Nexus.


## 2026-11-20 — Entrevista P3-B adaptada: calendário após produção

**TL;DR:** O utilizador escolheu B com condição: na pesquisa escolhe apenas temas, sem datas nem calendário. Após o Motor 2 produzir, vê prévia e informação relevante, incluindo proposta completa de ordem, dias, horas, contas/canais. Pode corrigir; só após aprovação final o Motor 3 recebe o pacote e agenda por API autorizada ou deixa preparação manual pendente. Documentação, sem código.

- **Registo:** SG-D035/036 em `docs/DECISOES.md` e contrato `docs/CICLO_TEMAS.md`.
- **Estado:** decisão funcional fechada; implementação e testes no Nexus ainda não iniciados.


## 2026-11-20 — Entrevista P2-C: pesquisa adaptativa, temas semanais e escolha múltipla

**TL;DR:** Decidida pesquisa adaptativa (C) para projetos Social configurados, ativos e com branding completo. Projeto inativo não é pesquisado. Lotes de sugestões com mínimo cinco temas distintos; escolha múltipla e proposta de ordem de agendamento. Tema reutilizável até sete dias, depois reavaliação semanal fundamentada. Apenas documentação; sem motores implementados.

- **Fonte:** entrevista no ChatGPT em 20/11/2026.
- **Contrato principal:** `docs/CICLO_TEMAS.md`; decisões SG-D031 a SG-D034.
- **Pendente:** horários do ciclo e se proposta de agendamento inclui datas/horas, mais validação técnica do contrato Nexus.


## 2026-11-20 — Correção da entrevista: catálogo Nexus e pesquisa Social

**TL;DR:** Corrigida a interpretação de elegibilidade: o botão «Adicionar projeto» deve listar todos os projetos Nexus, incluindo sem sociais/branding. Adicionar cria perfil Social em rascunho; só perfis configurados, ativos e com branding completo entram na pesquisa. Mantém-se conta identificada sem OAuth para capacidades manuais. Alterados contratos/documentação; sem implementação executável.

- **Evidência:** commits GitHub em `main`; fonte canónica `docs/DECISOES.md` SG-D030 e `docs/PROJETOS.md`.
- **Estado:** decisão funcional registada; validação técnica no Nexus pendente. A pergunta sobre priorização diária da pesquisa continua aberta.


## 2026-11-20 — Contratos corrigidos segundo entrevista

**TL;DR:** Atualizados contratos de produto e integração: somente projetos Nexus com socials podem ativar Social, com opt-in; pesquisa diária e relatório semanal; fontes, formatos/canais, biblioteca, métricas/atribuição, experiências, branding e MVP de três conteúdos reais. Dashboard visual detalhado fica para depois da funcionalidade. Sem código executável alterado.

- **Tipo:** documentação/correção de contrato via GitHub, sem execução do Nexus.
- **Evidência:** commits de documentação em `main`; ver `docs/ALINHAMENTO_CONTRATO_V1.md`, `docs/PROJETOS.md`, `docs/REQUISITOS.md`, `docs/MOTORES.md`, `docs/METRICAS.md`.
- **Pendência:** integração técnica e testes no Nexus, e recuperação de documentos originais caso disponíveis.


## 2026-11-20 — Consolidação documental via ChatGPT/GitHub

**TL;DR:** A partir das conversas recuperáveis e da auditoria F0, foram publicados documento geral, decisões, requisitos, motores, métricas, projetos, biblioteca, alinhamento do contrato, roadmap, README e regras dos agentes. Não houve implementação de código nem testes do motor. Os ficheiros originais do ChatGPT (489/284 linhas) não foram recuperados integralmente.

- **Tipo:** documentação/normalização do repositório, não sessão de execução do Nexus.
- **Origem:** decisões recuperáveis do ChatGPT + docs/auditoria-f0.md existente.
- **Estado:** documentos novos publicados na branch `main`; adenda funcional **pendente de revisão/aprovação técnica**.
- **Próxima ação:** reconciliar adenda F0/contrato antes da F1.1, confirmar métricas/KPIs e preservar separação entre decidido/proposto/implementado.
- **Evidência:** histórico de commits do próprio repositório GitHub.
