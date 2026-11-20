# Ciclo de pesquisa, temas e planeamento editorial

> Decisões da entrevista de 20/11/2026 (incluindo P2 — opção C). Este documento é o contrato funcional; nomes dos estados, schemas, horários e pesos exatos são propostas técnicas a validar com o Nexus. **Não representa código implementado.**

## 1. Projetos pesquisáveis — gate obrigatório

O botão **Adicionar projeto** apresenta **todos os projetos do Nexus**, sem exigir contas sociais, branding ou Social ativo. A adição cria apenas um perfil Social em rascunho.

**Pesquisa, recomendações diárias/semanais e recomendações sob pedido só são permitidas quando as três condições se verificam simultaneamente:**

1. Projeto Nexus foi **adicionado ao Social Generator**.
2. Perfil Social foi **configurado e validado**, incluindo branding completo (identidade visual, público, tom, idioma, objetivos, formatos e canais/contas apropriados ao trabalho).
3. Projeto Social está **ativo**, por escolha explícita do utilizador.

Um projeto **configurado mas inativo** permanece visível no Social para consulta e edição, **sem pesquisa nem novas recomendações de temas** e sem consumir orçamento de investigação. Um rascunho ou perfil com branding incompleto também não é pesquisado. OAuth/API autenticada não é requisito para pesquisa nem trabalho manual; se estiver em falta, as capacidades automáticas da rede permanecem indisponíveis.

Ao desativar, preservar temas, versões, fontes, decisões, calendários e resultados históricos; não emitir novas pesquisas/recomendações nem executar operações externas. Se uma tarefa de pesquisa estiver em curso, o Nexus deve verificar o estado antes de entregar/recomendar resultados, evitando prosseguir após desativação (modo técnico a validar).

## 2. Distribuição adaptativa — P2, opção C (DECIDIDO)

**Todos os projetos Social ativos e configurados recebem uma pesquisa diária leve.** O motor aloca investigação mais aprofundada aos projetos com campanhas ativas, sinais de tendências fortes, oportunidades relevantes, maior prioridade explícita ou necessidade de reavaliar temas. **Relatório semanal** abrange todos os projetos ativos/configurados, com profundidade proporcional à prioridade e evidências. Não pesquisar projetos Social inativos ou incompletos.

**Apenas para as execuções de pesquisa**, reutilizar orquestrador, agendador e guardas de custo/RAM/limites do Nexus. **Agendamento e publicação de posts pertencem ao Postiz (Motor 3)**. O dashboard Social do Nexus consulta o calendário Postiz por sincronização; não cria scheduler paralelo de publicações. Execução manual da pesquisa é fallback até existir suporte comprovado. Prioridade/calendário podem mudar sem autorizar gasto, produção ou publicação.

## 2.1. P13-B — conteúdo contínuo e campanhas opcionais

Cada projeto Social elegível mantém um **fluxo contínuo de pesquisa de temas gerais**. Campanhas **opcionais** definidas pelo operador acrescentam objetivos, público, prazos, mensagem e CTA; M1 pesquisa e recomenda ideias específicas para campanhas ativas **além das recomendações gerais**, sem obrigar cada tema a pertencer a uma campanha. A oportunidade identifica campanha quando aplicável, e a seleção humana de temas não exige escolher calendário. **P14-B decidiu** prioridade adaptativa e explicada entre campanhas e conteúdo contínuo, usando prazos/urgência, tendências fundamentadas, objetivos, resultados históricos (M4) e capacidade real de M2. O operador **pode ajustar a proposta antes de escolher temas**, sem percentagens fixas e mantendo recomendações gerais. **O primeiro gate continua a ser apenas escolha de temas, sem calendário/datas/horas**; o calendário só aparece após produção. Ver [CAMPANHAS.md](CAMPANHAS.md).

## 3. Lotes de recomendações — mínimo cinco temas (DECIDIDO)

Cada **ronda/lote de recomendações apresentado ao utilizador** para um projeto deve incluir **pelo menos 5 temas distintos, com contexto suficiente para escolher**, organizados por pontuação justificada. O relatório diário leve não tem de gerar um novo lote diariamente: pode atualizar sinais, recência e backlog; quando o sistema apresenta uma nova ronda de escolha, aplica-se o mínimo de cinco.

Cada tema inclui: título/pergunta, ângulo, hook provisório, público/objetivo de projeto, canal/formato/duração propostos, fontes verificáveis com data, tendência/recência, confiança, viabilidade/tempo/custo, motivo do score e validade. Temas reutilizados ainda válidos podem integrar o lote, **sem serem duplicados como ideias novas**.

**Proteção de qualidade proposta:** se não houver 5 temas genuinamente fundamentados, declarar `lote-incompleto` e motivo, continuar a pesquisar fontes autorizadas ou pedir revisão humana; **nunca inventar temas ou inflacionar evidência** apenas para atingir cinco. O utilizador deve perceber que a regra do mínimo não foi cumprida.

## 4. Validade máxima de uma semana e reavaliação (DECIDIDO)

- A recomendação de um tema tem **validade/reutilização máxima de 7 dias** a partir da última **validação de relevância registada**, não desde a primeira publicação ou desde cada visualização no dashboard.
- Dentro dessa janela, pode voltar a ser apresentado/reaproveitado no mesmo projeto, desde que continue adequado à marca e às plataformas, sem criar entradas duplicadas. Guardar referência ao tema original, histórico de uso, data da última validação e expiração.
- **Quando completar 7 dias, o tema passa a estado `em-reavaliacao`**: não se oferece como recomendação atual e não é elegível para **nova aprovação/novo agendamento** até revalidar. Mantêm-se histórico, decisões e referências.
- **Na pesquisa semanal aprofundada**, reavaliar relevância e fontes: se ainda for atual, **renovar com nova validação datada**, versão/justificação e novo período máximo de 7 dias; se estiver ultrapassado, marcar `desatualizado/arquivado`. A revisão pode também concluir **inconclusivo** ou precisar de fonte adicional, sem reintroduzir automaticamente.
- Se a expiração acontecer antes da próxima análise semanal, manter o tema **pendente de reavaliação** até essa análise, sem prolongamento tácito.
- A expiração de uma **recomendação** não apaga um conteúdo já publicado nem altera métricas; peças já aprovadas/em produção têm o seu próprio controlo de versões e gates. Antes de uma **nova publicação** de tema potencialmente desatualizado, pedir verificação editorial apropriada.
- Uma revalidação não equivale a aprovação humana do tema ou da publicação. Alterações materiais ao ângulo/brief requerem nova versão e novo gate de tema.

**Modelo técnico sugerido:** `temaId`, `projetoId`, `versao`, `primeiraDetecaoEm`, `ultimaValidacaoEm`, `validoAte`, `estadoRelevancia`, `fontes`, `historicoReutilizacao`, `reavaliacaoId`, `resultadoReavaliacao`. Estados sugeridos `vigente`, `em-reavaliacao`, `renovado`, `desatualizado`, `inconclusivo`. Os estados de relevância são **ortogonais** a selecionado/aprovado/rejeitado e produção/publicação.

## 5. Seleção múltipla e momento do calendário — P3, opção B adaptada (DECIDIDO)

**No Motor 1 o utilizador escolhe apenas os temas.** Pode selecionar um, dois ou mais temas do mesmo lote. A seleção positiva dos IDs e versões atuais é a **aprovação humana do tema** (primeiro gate), por tema, que autoriza o Motor 2 a iniciar produção. Não exigir escolha de datas, horas, plataformas de publicação finais, ordem de agendamento nem CTA final no momento da escolha. A ficha pode conter sugestões genéricas de formato/canal e urgência, mas **não apresentar calendário detalhado como etapa de aprovação antes da produção**.

**O Motor 2 produz a peça** segundo o branding e formato do projeto, preservando tema/versão. Quando a peça fica pronta, a interface de **revisão pré-publicação** mostra:

- prévia reproduzível do vídeo ou visualização integral do carrossel e seus recursos;
- título, guião/legendas, CTA, descrição/copy e hashtags por rede;
- formatos, proporções, duração, thumbnail, contas e plataformas pretendidas;
- verificações de QA factual/editorial/técnico/visual, fontes, direitos e alertas;
- **proposta completa de agendamento**, incluindo ordem entre peças escolhidas, **datas e horas**, contas e plataformas, com justificações e confiança. Usar dados reais de audiência quando existem; sem evidência, identificar horários como estimativas e não alegar «melhor horário» factual;
- impacto em campanhas existentes, adequação do tema à data prevista, custo e estado de limitações do canal.

O operador pode **rever, corrigir, reordenar, ajustar contas/canais/datas/horas e aprovar** o pacote final específico. Este é o **segundo gate humano** e ocorre **depois da produção, antes de qualquer agendamento/publicação**. Alterar vídeo, legenda, recurso, conta, plataforma ou agendamento altera o pacote/versão e exige autorização válida para a versão final.

**Somente após essa aprovação**, o **Motor 3** recebe pacote/versão/hash + conta/canal + plano aprovado e **envia o agendamento ao Postiz** quando houver integração elegível e validada. **Postiz executa a publicação** no horário previsto; o Nexus lê estados sincronizados sem disparar publicações. Caso contrário, entrega **pacote e instruções de agendamento manual** e deixa estado `pendente-agendamento-manual`; não afirmar que agendou. Confirmação remota ou manual é necessária para estado `agendado`. O estado `publicado` requer prova própria, distinta de agendamento.

**Não alterar a dupla aprovação humana:** escolha dos temas = gate 1; aprovação da prévia, pacote e calendário final = gate 2. Uma sugestão do motor nunca equivale a um clique de aprovação.

## 6. Testes de aceitação mínimos

1. O seletor Adicionar mostra um projeto Nexus sem socials; adicioná-lo não inicia pesquisa.
2. Projeto Social configurado, branding completo, mas **inativo**: zero pesquisa/zero novas recomendações.
3. Projeto ativo mas com branding incompleto: bloqueio explícito; nenhuma pesquisa.
4. Dois projetos ativos e dois inativos: só os ativos recebem investigação diária/semanal; os ativos com campanhas/tendências recebem profundidade adicional (opção C).
5. Cada novo lote de recomendações visível para escolha contém **≥5 temas distintos e fundamentados** ou estado explícito de lote incompleto, sem conteúdo inventado.
6. Selecionar 2, 3 ou todos os temas **aprova apenas os temas para produção**; não solicita nem apresenta calendário detalhado nesta fase.
7. Tema com 6 dias de validação pode ser reutilizado; ao completar 7 dias passa a `em-reavaliacao` e é retirado das novas sugestões/autorizações até à revisão semanal.
8. Reavaliação semanal documenta fontes e decisão: renovação cria nova validade máxima 7 dias, rejeição arquiva; falta de evidência não renova.
9. A reavaliação não apaga decisões, conteúdos, publicações, métricas nem simula aprovação humana.
10. **Depois de a peça estar produzida**, rever prévia e calendário com ordem/datas/horas/plataformas editáveis; somente após aprovação final o Motor 3 tenta agendar. Sem API/conta elegível, mostrar pendente-agendamento-manual; agendado/publicado exigem confirmação.

## 7. Pontos técnicos por fechar

- Dia/hora do relatório semanal e pesquisa diária (timezone Portugal) e comportamento quando o computador Nexus estiver desligado.
- Frequência mínima de lotes de cinco vs. pedidos do utilizador; critérios de qualidade/score de entrada.
- Representação final dos estados de relevância e filas no schema v1/v2 e idempotência do calendário.
- **Decidido:** mostrar datas e horas concretas **após a produção** na revisão pré-publicação, com propostas estimadas quando faltam dados. Falta definir política de conflitos, timezone e viabilidade técnica por rede.

Consultar: `docs/DECISOES.md`, `docs/PROJETOS.md`, `docs/MOTORES.md`, `docs/ALINHAMENTO_CONTRATO_V1.md` e `docs/ROADMAP.md`.
