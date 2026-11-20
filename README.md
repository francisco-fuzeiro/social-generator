# Social Generator

Motor modular para investigar tendências, produzir conteúdo e aprender com resultados para múltiplos projetos, **integrado no separador Social do Nexus**. Este repositório guarda domínio, contratos e documentação. **Não é um dashboard autónomo.**

**Estado:** planeamento e auditoria F0 documentados; F1/produção/publicação ainda não comprovadas como implementadas.

## Começar pela documentação

- [SOCIAL_GENERATOR.md](SOCIAL_GENERATOR.md) — visão e limites de produto.
- [Decisões](docs/DECISOES.md) — confirmado, proposto e pendente.
- [Requisitos](docs/REQUISITOS.md) — critérios de aceitação.
- [Três motores](docs/MOTORES.md) — pesquisa, produção, distribuição/analytics/aprendizagem.
- [Métricas](docs/METRICAS.md) — KPIs, retenção, atribuição, experiências e custo.
- [Projetos](docs/PROJETOS.md) — The Hidden Layer, Vefi, UtopIA e futuros.
- [Biblioteca](docs/BIBLIOTECA.md) — recursos e licenças fora do Git.
- [Alinhamento contrato v1](docs/ALINHAMENTO_CONTRATO_V1.md) — diferenças face à auditoria técnica antes de F1.
- [Roadmap](docs/ROADMAP.md) — missão documental, F1–F3 e MVP transversal.
- [Auditoria técnica F0](docs/auditoria-f0.md) — inventário de código/evidências históricas do Nexus.
- [Regras de trabalho](CLAUDE.md) · [TODO](TODO.md) · [Sessões](SESSOES.md).

## Regras aprovadas na entrevista (20/11/2026)

- **O Social não cria projetos:** só mostra para ativação projetos existentes no Nexus **com redes sociais configuradas**; opt-in facultativo. Nem todos os projetos Nexus têm Social.
- **Motor 1:** pesquisa leve diária e relatório semanal aprofundado, usando fontes YouTube, Instagram, Google/Trends, Reddit, TikTok, X e LinkedIn; concorrência híbrida e scoring por projeto.
- **Motor 2:** The Hidden Layer — vídeo vertical narrado; Vefi/UtopIA — vídeos e carrosséis. Remotion-first e QA factual/editorial/técnico/visual/direitos, recurso à IA quando acrescenta valor.
- **Motor 3:** publicação híbrida (APIs oficiais quando elegíveis e aprovadas; alternativa manual), UTMs/eventos/conversões, experiências e aprendizagem por projeto.
- **MVP:** três conteúdos reais, um por cada The Hidden Layer, Vefi e UtopIA, desde que elegíveis/ativados no Nexus.
- **Dashboard:** funcionalidade e dados reais antes de qualquer design visual detalhado.

O contrato funcional atualizado é [Alinhamento Nexus v1](docs/ALINHAMENTO_CONTRATO_V1.md); a implementação técnica carece de validação posterior.

## Onde vive

- **Clone local Windows/Nexus:** `C:\Claude\Social Generator`
- **Biblioteca externa (não versionar):** `D:\AI\Biblioteca`
- **Integração:** painel Nexus PC/móvel; modelos e integrações substituíveis.

A existência da pasta externa foi confirmada pelo operador, mas o motor ainda não foi ligado/testado. Não adicionar a biblioteca ao repositório.

## Operação segura

Toda a pesquisa pode recomendar; não iniciar guião/recursos sem **aprovação do tema**. A peça final precisa de **aprovação da versão exata da publicação**. Nenhuma API paga, chave nova, envio automático ou alteração de outro repositório sem decisão humana.

Este repositório esteve público na sua fase inicial. Não colocar nele `.env`, tokens, perfis privados, mídia pessoal ou credenciais. Passar a privado não elimina cópias anteriormente obtidas.

## Sincronização no Windows

Depois de alterações feitas no GitHub, atualizar o clone local:

```powershell
git -C "C:\Claude\Social Generator" pull --ff-only
```

Este comando não resolve conflitos com alterações locais; nesse caso rever o estado, não fazer `reset --hard` automaticamente. O Git não é sincronização contínua da biblioteca externa.

## Nota de proveniência

A visão geral atual é **consolidação reconstruída** de decisões recuperáveis do ChatGPT, não cópia literal do documento original de 489 linhas. O alinhamento v1 é também reconstruído, não transcrição da adenda de 284 linhas. Estas limitações estão marcadas nos próprios documentos; qualquer cópia original recuperada deve ser confrontada antes de substituir versões.
