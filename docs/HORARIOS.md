# Recomendações de dias e horários de publicação — contrato funcional

> **Entrevistas P17-B e P18-B, 20/11/2026, DECIDIDO:** após o Motor 2 produzir cada peça/variante, o Social Generator apresenta na **revisão final** uma **proposta adaptativa de datas e horários por conta/plataforma**, justificada por dados quando disponíveis e marcada como **estimativa** quando não existirem. O operador pode alterar tudo antes de aprovar. Apenas depois do segundo gate o Motor 3 entrega pacotes aprovados ao Postiz, que mantém o scheduler e a execução. Esta é uma especificação, não uma implementação.

## 1. Princípios e fronteiras

- **Quando propor:** apenas **depois da produção da peça-base e das variantes recomendadas (P15-B/P16-B)**, junto das prévias, textos, QA, ordem de publicação, contas e plataformas na **revisão humana final**. Durante o primeiro gate o utilizador **seleciona apenas temas**, sem datas nem calendário.
- **Por destino:** recomendar uma data/hora para cada **conta e plataforma elegível**, e não um único horário para todas as redes. A recomendação não autoriza publicação.
- **Fontes dos sinais:** histórico de desempenho **real por conta/plataforma** recolhido pelo M4 (quando disponível e comparável); audiência e **fuso horário do público**; formato e tipo do conteúdo; tendências/validade factual; **janela/urgência de campanha**; histórico e **agenda já existente no Postiz** com confirmação/última sincronização; restrições de plataforma, capacidade e preferências conhecidas do projeto.
- **Regra contra falsa certeza:** dados insuficientes, ausentes ou não comparáveis **não permitem chamar um horário de «o melhor horário»**. Aplicar fallback inicial apenas como **heurística identificada como estimativa**, sem inventar métricas, alcance esperado ou garantia de engagement. O operador pode escolher outro horário.
- **Resolução de conflitos:** consultar a agenda do Postiz quando acessível; se existir sobreposição/saturação de conta, duplicação de publicação ou prazo de campanha incompatível, **mostrar alerta e alternativa sugerida antes da aprovação**. Postiz continua a fonte de verdade; se dados indisponíveis ou snapshot desatualizado, evidenciar que a verificação é inconclusiva. Não cancelar/reagendar posts já confirmados.
- **Tempo e fusos:** guardar o instante inequívoco e o fuso `IANA time zone` da conta/audiência quando validado. Mostrar claramente data, hora, zona e possíveis problemas de horário de verão ou horários locais ambíguos; não presumir que todos os projetos operam em Portugal.
- **Aprovação final individual:** o operador pode **editar data/hora, conta, rede e ordem** na proposta antes de aprovar cada pacote de `variantVersion/hash+conta+plataforma+copy+scheduledAt`. Alterações materiais ao pacote/agenda exigem novo gate conforme contrato. Sem aprovação não enviar ao Motor 3.
- **Postiz:** M3 transmite **apenas pacotes/calendários aprovados**, confirma agendamento com IDs/recibos, sincroniza calendário para leitura no Nexus e não apresenta uma proposta como se fosse agendamento. **Depois de enviado ao Postiz**, reagendar/editar/cancelar faz-se **no Postiz**, não no Nexus (P5-C).
- **M4 e aprendizagem:** recolher horários **efetivos** de publicação e métricas disponíveis com janelas/comparações prudentes; melhorar recomendações futuras. O M4 não modifica agendamentos nem determina publicar. Não inferir causalidade de um horário isolado.

## 1.1. Cadência semanal por projeto/plataforma — P18-B (DECIDIDO)

Para cada **projeto Nexus com Social ativo/configurado** e cada plataforma/conta relevante, o sistema recomenda uma **meta de quantidade de publicações por semana**, adaptando-a a:
- objetivos do projeto e, quando aplicável, campanhas e prazos;
- tendências e oportunidades atuais, apenas com evidência suficiente;
- desempenho anterior **real e comparável** (M4), explicitando incerteza e falta de histórico;
- variedade de temas, formato, saturação da audiência e agendamentos já existentes;
- capacidade/tempo de produção e quotas **efetivamente disponíveis no Motor 2 e Nexus** e limites de custo, sem assumir recursos fictícios.

**O operador define limites mínimo/máximo por projeto/plataforma, podendo ajustá-los** e rever a cadência recomendada. Esses limites **não foram numericamente fixados na entrevista**. Podem ser diferentes entre redes e marcas; evitar aplicar a todos os projetos a meta transversal histórica de 5–10 conteúdos/semana, que permanece uma **aspiração**, não uma quota obrigatória ou capacidade demonstrada. Exigir configuração consistente (mínimo não superior ao máximo) e assinalar limites inviáveis em vez de os cumprir artificialmente.

**A cadência serve exclusivamente o planeamento e a explicação de prioridades**, não é um agente/publicador automático. Se a meta não puder ser atingida por falta de temas aprovados, qualidade, orçamento, tempo de produção ou destino elegível, **mostrar défice e motivo** em vez de inventar temas/engagement, gerar conteúdos sem gate 1 ou publicar sem gate 2. A recomendação de quantidade **não desencadeia por si só produção, agendamento, repost ou contratação de ferramentas**. Uma meta semanal pode ser revista com novas métricas, mas um post já agendado no Postiz não pode ser modificado por isso.

**Distinguir decisões P17 e P18:** P18-B recomenda **quantos posts por semana** para cada projeto/rede dentro de limites humanos; P17-B recomenda **em que dias/horas** para cada variante **após a produção**, mediante o calendário real, e exige validação no segundo gate. Em ambos os casos o **Postiz agenda/publica somente pacotes já aprovados**, mantendo Nexus um calendário de leitura após a entrega.

**Contrato técnico PROPOSTO:** `CadencePolicy` (`nexusProjectId`, `platform`, `accountId?`, `minPostsPerWeek`, `maxPostsPerWeek`, `approvedBy`, `updatedAt`) e `CadenceProposal` (`suggestedPostsPerWeek`, `reasons`, `evidenceRefs`, `confidence`, `capacityAssessment`, `operatorAdjustment`, `shortfall`). IDs/estados/frequência de recálculo por validar; não inserir percentagens rígidas ou dias/horas predefinidos.

**Testes de aceitação:**
1. The Hidden Layer e Vefi com limites humanos diferentes recebem propostas semanais diferentes, sem um valor global fixo.
2. Uma recomendação acima do máximo/abaixo do mínimo é **sinalizada/corrigida** segundo política do operador; quando mínimo for inviável, mostrar **défice/limitação** sem temas falsos.
3. Com histórico M4 inexistente, usar heurísticas declaradas e demonstrar origem/incerteza, sem atribuir causalidade.
4. Campanha ativa pode alterar a cadência sugerida na sua janela, dentro de limites e recursos; continuar a recomendar conteúdo contínuo.
5. Meta semanal de 5 publicações com só 2 temas escolhidos **não inicia 3 renders adicionais**; Motor 2 produz apenas os 2 aprovados.
6. Nova proposta de cadência não envia posts, não altera agendamentos anteriores nem modifica o calendário real do Postiz.
7. O operador pode corrigir a cadência sugerida independentemente de escolher temas, e datas/horas só aparecem após produção e gate final.

## 2. Fluxo funcional

1. M1 investiga e recomenda temas e plataformas por projeto ativo. Operador **escolhe temas apenas** (gate 1).
2. M2 produz a peça-base e variantes recomendadas, executa QA e compila pacotes de revisão.
3. Para cada destino, o componente de **recomendação de agendamento** reúne sinais do M4, dados de público/formatos, prazos e **snapshot do Postiz**. Se dados forem insuficientes ou agenda estiver desatualizada, apresenta **estimativa e limitações**.
4. Nexus mostra **proposta completa pós-produção** (ordem, datas/horas, fuso, plataformas, contas, variação, copy e CTA) com razões, proveniência, grau de confiança e avisos de conflito.
5. Operador altera o que quiser, aprova apenas os destinos pretendidos e respetivas versões/hashes (gate 2). Se acrescentar nova plataforma, a variante deve ser preparada/validada antes de aprovar.
6. M3 envia somente pacotes aprovados ao Postiz quando elegíveis, confirma recibos/IDs. Em fallback manual manter **pendente**, nunca dizer «agendado» sem prova.
7. M4 recolhe observações reais e fornece evidência para propostas futuras, sem impor horários ou reprogramar agenda.

## 3. Dados técnicos PROPOSTOS (não schema aprovado)

`ScheduleSuggestion`: `nexusProjectId`, `campaignId?`, `variantId`, `variantVersionId`, `platform`, `accountId`, `proposedLocalDateTime`, `timezoneId`, `proposedUtcInstant`, `reasons[]`, `evidenceRefs[]`, `confidence`, `basis=observed|heuristic`, `postizSnapshotAt?`, `calendarConflictStatus`, `constraints`, `operatorOverrides?`.

**Prudência técnica:** lógica adaptativa pode usar algoritmo determinístico simples e estatística antes de modelos complexos; não atribuir a M4 métricas que não consegue obter. Limites e pesos exatos, frequência de recálculo, horizonte de pesquisa de slots, cadência ideal por projeto e regras de desempate **ainda por decidir/provar**.

## 4. Testes de aceitação

1. Antes de M2 produzir, o primeiro gate **não inclui datas, horas ou agendamento**; apenas temas.
2. Com dados históricos credíveis, duas contas diferentes recebem sugestões eventualmente distintas, com **evidência por conta, período e fuso**.
3. Sem dados históricos, a UI mostra **«estimativa inicial — dados insuficientes»**, e não afirma ter calculado a melhor hora.
4. Campanha urgente com prazo explícito produz proposta dentro da janela quando viável; se inviável, **alerta**, sem criar hora artificial fora do prazo.
5. Um post já agendado para o mesmo momento no Postiz gera **aviso e alternativa**, sem alterá-lo, cancelá-lo ou reprogramá-lo.
6. Postiz indisponível/snapshot antigo é assinalado; conflito não é falsamente dado como «verificado».
7. Operador muda data/hora no gate 2; o M3 recebe **só o horário efetivamente aprovado** e só depois da aprovação.
8. O Nexus não cria scheduler próprio; `agendado` exige recibo real do Postiz e `publicado` confirmação própria.
9. Sugestões identificam o fuso e são seguras quanto a mudanças de horário de verão; sem converter um horário ambíguo silenciosamente.
10. Uma alteração posterior da agenda de post **já entregue** faz-se diretamente no Postiz e sincroniza depois no Nexus.

## 5. Próxima decisão da entrevista — P19

**P18-B fechado:** cadência semanal adaptativa com limites mínimos e máximos definidos pelo operador, sem criação ou publicação automáticas. **P19 em aberto:** quando faltam temas aprovados e capacidade para cumprir a cadência prevista, deve o sistema apresentar apenas o défice, sugerir alternativas de qualidade para aprovação ou preencher a meta autonomamente? A política não pode contrariar os dois gates.

Referências: [DECISOES.md](DECISOES.md), [CICLO_TEMAS.md](CICLO_TEMAS.md), [POSTIZ.md](POSTIZ.md), [METRICAS.md](METRICAS.md), [ALINHAMENTO_CONTRATO_V1.md](ALINHAMENTO_CONTRATO_V1.md).
