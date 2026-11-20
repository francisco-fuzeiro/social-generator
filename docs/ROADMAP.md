# Roadmap — Social Generator integrado no Nexus

> Estado em 20/11/2026: auditoria técnica **F0 concluída**; não há prova de implementação do Motor 1/2/3 nem do separador Social funcional. O roadmap abaixo preserva a sequência incremental da auditoria, acrescentando os requisitos das conversas ChatGPT.

## Antes da F1 — sincronização de especificação (documentação)

- [x] Criar GitHub e integrar clone local em C:\Claude\Social Generator; ligação remota confirmada pelo utilizador.
- [x] Auditar Nexus e publicar docs/auditoria-f0.md.
- [x] Consolidar requisitos funcionais, decisões, motores, métricas, perfis, biblioteca e alinhamento do contrato no repo.
- [ ] Rever e aprovar **adenda ao contrato v1** com o responsável da integração Nexus.
- [ ] Recuperar ficheiros originais SOCIAL_GENERATOR.md (489 linhas) e adenda (284 linhas), se disponíveis, e reconciliar diferenças sem os fazer passar por recuperados.
- [ ] Verificar segredos antes de novos commits, especialmente enquanto repo público.
- [ ] Passar repo a privado em **23/11/2026** e confirmar a alteração (ação futura do utilizador).

## F1 — Separador Social dentro do Nexus

A execução técnica mantém como referência a lista fechada e os testes da auditoria F0 §6:

- **F1.1:** schema e leitor de retratos, operação \`social.ler\`, navegação PC/móvel, exemplos explícitos e estados de dados ausentes.
- **F1.2:** decisões humanas persistentes, tema e publicação separadas, versão/hash, idempotência, papéis; nenhum envio externo.
- **F1.3:** previews protegidas de MP4/recursos, Range e validação dos caminhos, sem novo servidor.

**Bloqueio importante:** F1.1 precisa de incorporar o alinhamento de projetos extensíveis, canais e dados analíticos. A auditoria histórica propôs uma lista fixa de três IDs e três redes — não é o alcance funcional aprovado.

## F2 — Inteligência, produção e prova técnica

- **F2.1:** pesquisa supervisionada com fontes verificadas, fichas de oportunidades económicas, aplicação de gate de tema e retrato Social real.
- **F2.2:** render Remotion/FFmpeg num laboratório isolado, benchmark de tempo/RAM, comprovação da geração de imagem numa sessão Nexus; nenhuma ferramenta paga implícita.
- **F2.3:** template parametrizado, storyboard/contact sheet, controlo de direitos e pacote editável, prévia/MP4 de **um piloto** antes da autorização de publicação.

Adicionar validação de acesso à biblioteca externa e isolamento de marca onde couberem nas missões aprovadas. Não transformar este roadmap numa autorização para alterar todos os ficheiros de uma vez.

## F3 — Distribuição e medição rastreável

- **F3.1:** pacote aprovado com hash, exportação e publicação **manual**, importação de confirmação e métricas com data/origem, primeira experiência de aprendizagem.
- **F3.2:** gate documental para eventual integração oficial de uma rede específica, auditando contas, elegibilidade, quota, privacidade, direitos e efeitos incertos antes de programar upload.
- Começar por métricas observadas e eventos de conversão disponíveis; enriquecer UTMs/atribuição quando os projetos forneçam instrumentação real.

## MVP de produto — depois de validar as fatias

**Critério de produto confirmado:** pelo menos um conteúdo real/publicável para cada **The Hidden Layer, Vefi e UtopIA**, com identidade correta, briefing, fontes, aprovações, peça final, custos, resultado de distribuição e métricas rastreáveis. Não confundir 1 piloto técnico F2.3 com MVP multi-projeto concluído.

Se alguma conta/rede não permitir publicação automatizada, um fluxo manual é aceitável, mas a falta de publicação/observação deve constar expressamente do estado. Não declarar métricas reais sem dados.

## Evolução após o MVP (propostas)

1. Investigação leve diária + relatório semanal com critérios de qualidade.
2. Dashboard analítico por projetos e campanhas, curvas de retenção e funis atribuídos.
3. Testes A/B comparáveis e aprendizagem justificada, com confiança/amostra.
4. Automações progressivas via mecanismos existentes do Nexus, notificações e recuperação robusta.
5. Novos adaptadores/canais/modelos à medida de necessidades e permissões — sem lock-in e sem custos não aprovados.

## Métricas de progresso do próprio projeto

Separar claramente **especificado → implementado → testado → validado pelo utilizador**. Guardar resultados de teste, commit, screenshot PC/móvel, métricas de render, tempo de supervisão e custo por peça. Metas 5–10 conteúdos/semana, 1–3h de supervisão e 0–25€/mês **não** são provas de desempenho atual.

## Coordenação e fonte de verdade

- \`TODO.md\`: estado de missões corrente; atualizá-lo quando execução for aprovada/iniciada.
- \`SESSOES.md\`: sessões reais e evidências; não fabricar sessões.
- \`CLAUDE.md\`: regras de trabalho.
- \`docs/auditoria-f0.md\`: inventário/testes históricos, preservado.
- \`docs/ALINHAMENTO_CONTRATO_V1.md\`: diferenças funcionais a resolver antes de codificar.
