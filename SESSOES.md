# Sessões — Social Generator

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
