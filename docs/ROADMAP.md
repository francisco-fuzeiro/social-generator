# Roadmap — Social Generator integrado no Nexus

> Estado em 20/11/2026: auditoria técnica **F0 concluída**; não há prova de implementação do Motor 1/2/3 nem do separador Social funcional. O roadmap abaixo preserva a sequência incremental da auditoria, acrescentando os requisitos das conversas ChatGPT.

## Antes da F1 — sincronização de especificação (documentação)

- [x] Criar GitHub e integrar clone local em C:\Claude\Social Generator; ligação remota confirmada pelo utilizador.
- [x] Auditar Nexus e publicar docs/auditoria-f0.md.
- [x] Consolidar requisitos funcionais, decisões, motores, métricas, perfis, biblioteca e alinhamento do contrato no repo.
- [x] Incorporar decisões da entrevista: **Adicionar apresenta todo o catálogo Nexus; adicionar cria rascunho; pesquisa só para perfis Social configurados, ativos e com branding completo**; pesquisa diária/semanal, fontes, formatos, analytics e MVP.
- [x] Adiar design visual detalhado do dashboard até haver fluxo funcional validado.
- [x] Registar **P2-C**: pesquisa adaptativa só para perfis Social ativos/configurados com branding; reavaliação dos temas após 7 dias; lotes de ≥5 temas e seleção múltipla.
- [x] Registar **P3-B adaptada**: Motor 1 recebe só escolha de temas; calendário completo só aparece após produção, no gate final de aprovação; Motor 3 agenda apenas pacote aprovado.
- [x] **Postiz é o agendador/publicador e Nexus consulta o calendário sincronizado** (agendados, publicados, falhados, pendentes). Contrato em [POSTIZ.md](POSTIZ.md).
- [x] **P5-C:** calendário Postiz consultável no Nexus; **editar, reagendar ou cancelar só no Postiz**, com sincronização para o Nexus.
- [x] **Arquitetura de quatro motores lógicos**: M1 Intelligence, M2 Production, M3 Postiz Distribution & Scheduling, M4 Analytics & Learning.
- [x] **P6-C:** Postiz será validado antes de escolher Cloud vs. self-hosted; nenhum gasto, contratação ou instalação definitiva implícita.
- [x] **P7-B:** revisões inteligentes e localizadas no Motor 2, preservando partes já validadas, com histórico, comparação e recuperação de versões. Contrato [REVISOES.md](REVISOES.md).
- [x] **P8-B:** dar feedback de revisão ao pausar vídeo em instantes específicos, permitir vários comentários e notas gerais associadas à versão; sem editor visual completo. Contrato em [REVISOES.md](REVISOES.md).
- [x] **P9-B:** no máximo três tentativas por ronda de revisão (uma aplicação + duas autocorreções), QA após cada tentativa e comunicação de falhas não resolvidas, sem custos pagos não aprovados.
- [x] **P10-B:** branding proposto por importação inteligente em modo de leitura de fontes autorizadas do projeto Nexus; operador valida/edita antes de ativar o projeto Social. Contrato [BRANDING.md](BRANDING.md).
- [x] **P11-B:** monitorizar periodicamente mudanças nas fontes autorizadas do branding, propor diferenças e **aprovar nova versão apenas após validação humana**, sem alterar automaticamente a agenda Postiz.
- [ ] **Revisão técnica do contrato v1 no Nexus** (a adenda funcional já incorpora a entrevista). Alinhar catálogos, integrações e testes antes de F1.1.
- [ ] Recuperar ficheiros originais SOCIAL_GENERATOR.md (489 linhas) e adenda (284 linhas), se disponíveis, e reconciliar diferenças sem os fazer passar por recuperados.
- [ ] Verificar segredos antes de novos commits, especialmente enquanto repo público.
- [ ] Passar repo a privado em **23/11/2026** e confirmar a alteração (ação futura do utilizador).

## F1 — Separador Social dentro do Nexus

A execução técnica mantém como referência a lista fechada e os testes da auditoria F0 §6:

- **F1.1:** schema e leitor de retratos, operação `social.ler`, **Adicionar projeto com catálogo Nexus integral**, rascunho Social e importação de branding **apenas de fontes autorizadas em leitura**, apresentando proposta com lacunas e **aprovação humana antes de considerar branding válido**; ativação Social continua separada. Preparar **deteção periódica de alterações P11-B** (proposta + comparação + aprovação humana; frequências por definir), sem reescrever marca nem posts por deteção. UI PC/móvel mínima com exemplos e estados vazios.
- **F1.2:** decisões humanas persistentes, tema e publicação separadas, versão/hash, idempotência, papéis, contas pertencentes ao projeto Nexus; nenhum envio externo.
- **F1.3:** previews protegidas de MP4/recursos, Range e validação dos caminhos, sem novo servidor.

**Contrato funcional fechado pela entrevista:** o Social **não cria** projetos Nexus; em **Adicionar projeto** apresenta todos os projetos Nexus, mesmo sem socials. Adicionar cria apenas rascunho Social; **pesquisa só nos adicionados, ativos e com branding/configuração completos**. Os três IDs e três redes fixos da F0 eram fixtures e não são o contrato aprovado. **Design visual detalhado fica fora da F1**. Confirmar tecnicamente a origem das contas e os estados de elegibilidade antes de implementar.

## F2 — Inteligência, produção e prova técnica

- **F2.1:** pesquisa supervisionada só de projetos Social ativos/configurados com branding; **C: pesquisa diária leve para todos os ativos, aprofundamento por prioridade/campanhas** e relatório semanal que reavalia temas caducados. Fontes YouTube/Instagram/Google-Trends/Reddit/TikTok/X/LinkedIn; lotes **≥5** fundamentados (estado insuficiente quando necessário), **validação máxima de 7 dias** e **seleção de vários temas sem calendário**; a proposta completa de datas/horas/ordem/canais só aparece depois da produção, no gate final.
- **F2.2:** render Remotion/FFmpeg num laboratório isolado, benchmark de tempo/RAM, comprovação da geração de imagem numa sessão Nexus; nenhuma ferramenta paga implícita.
- **F2.3:** template parametrizado para vídeo vertical narrado (Hidden Layer) e vídeo/carrossel (Vefi/UtopIA), storyboard/contact sheet, controlo de direitos, pacote editável e **prévia/MP4 do piloto com calendário proposto na revisão final**. **P7-B/P8-B:** corrigir só segmentos afetados (quando possível), preservar versões, comparar/recuperar e validar QA/hashes; **recolher comentários por timestamp e notas gerais**; executar até 3 tentativas de QA/correção por ronda, parando cedo ou reportando falhas explícitas, sem enviar ao Postiz. Nenhum agendamento antes do gate final. IA generativa só com valor claro; Higgsfield requer aprovação.

Adicionar validação de acesso à biblioteca externa e isolamento de marca onde couberem nas missões aprovadas. Não transformar este roadmap numa autorização para alterar todos os ficheiros de uma vez.

**Contrato de seleção e caducidade:** [CICLO_TEMAS.md](CICLO_TEMAS.md). A F2.1 precisa de testar que um projeto configurado mas inativo não gera pesquisa; a aprovação humana de tema e de publicação não é substituída pelo planeamento.

## F3 — Distribuição Postiz e Motor 4 de Analytics & Learning

- **F3.1 — M3:** após aprovação final da peça e calendário, Motor 3 envia o pacote/hash ao **Postiz** quando elegível (fallback manual sem falso agendamento). O Postiz mantém e executa agenda, não o Nexus; `agendado` distinto de `publicado`, ambos com confirmação.
- **F3.2 — M3 calendário Nexus só de leitura:** sincronização de posts do Postiz (agendados, publicados, falhados, pendentes, cancelados), filtros por projeto/conta/rede/período, última atualização e histórico. **Abrir no Postiz para editar/reagendar/cancelar; nunca mutar a agenda no Nexus**. **P6-C:** fazer prova técnica com meios gratuitos/experimentais apenas se disponíveis, comparar Cloud/self-hosted, quotas, uptime, custos, manutenção e canais; decidir alojamento com aprovação antes de produção.
- **F3.3 — M4 Analytics & Learning:** recolher métricas das redes/Postiz e UTMs/eventos de sites/apps quando disponíveis, normalizar com origem/janela/definição, atribuir conversões prudentemente, comparar experiências e devolver aprendizagem com evidência a M1. A falha do M4 não impede posts confirmados no Postiz.
- Começar por métricas observadas e eventos de conversão disponíveis; enriquecer UTMs/atribuição quando os projetos forneçam instrumentação real.

## MVP de produto — depois de validar as fatias

**Critério de produto confirmado:** **3 conteúdos reais**, um para cada **The Hidden Layer, Vefi e UtopIA** (desde que sejam projetos Nexus elegíveis/ativados), com identidade correta, briefing, fontes, aprovações, peça final, custos, resultado de distribuição e métricas rastreáveis. Não confundir 1 piloto técnico F2.3 com MVP multi-projeto concluído.

Se alguma conta/rede não permitir publicação automatizada, um fluxo manual é aceitável, mas a falta de publicação/observação deve constar expressamente do estado. Não declarar métricas reais sem dados.

O calendário funcional e os estados reais do Postiz pertencem à **F3**, mas a experiência visual detalhada continua reservada à F4. **P5-C decidiu:** o Nexus só consulta, Postiz é onde se edita/reagenda/cancela; nenhuma edição de posts agendados no Nexus.

## F4 — Dashboard visual detalhado (só após funcionamento)

**Decisão da entrevista:** não começar o design visual nem a estrutura de um dashboard rico antes da funcionalidade. Após F1–F3 e prova de fluxos reais, desenhar a experiência final do separador Social com base nas operações, utilizadores, KPIs e estados reais. A F4 de UI/UX visual não bloqueia investigação, produção ou medição.

## Evolução após o MVP (propostas)

1. Investigação leve diária + relatório semanal com critérios de qualidade.
2. Dashboard analítico visual por projetos e campanhas, curvas de retenção e funis atribuídos **só após** o motor e os dados estarem funcionais.
3. Testes A/B comparáveis e aprendizagem justificada, com confiança/amostra.
4. Automações progressivas via mecanismos existentes do Nexus, notificações e recuperação robusta.
5. Novos adaptadores/canais/modelos à medida de necessidades e permissões — sem lock-in e sem custos não aprovados.

## Métricas de progresso do próprio projeto

Separar claramente **especificado → implementado → testado → validado pelo utilizador**. Guardar resultados de teste, commit, screenshot PC/móvel, métricas de render, tempo de supervisão e custo por peça. Metas 5–10 conteúdos/semana, 1–3h de supervisão e 0–25€/mês **não** são provas de desempenho atual.

## Coordenação e fonte de verdade

- `TODO.md`: estado de missões corrente; atualizá-lo quando execução for aprovada/iniciada.
- `SESSOES.md`: sessões reais e evidências; não fabricar sessões.
- `CLAUDE.md`: regras de trabalho.
- `docs/auditoria-f0.md`: inventário/testes históricos, preservado.
- `docs/ALINHAMENTO_CONTRATO_V1.md`: diferenças funcionais a resolver antes de codificar.
