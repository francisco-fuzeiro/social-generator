# Sessões — Social Generator

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
