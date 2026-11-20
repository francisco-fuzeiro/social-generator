# Recomendações de dias e horários de publicação — contrato funcional

> **Entrevista P17-B, 20/11/2026, DECIDIDO:** após o Motor 2 produzir cada peça/variante, o Social Generator apresenta na **revisão final** uma **proposta adaptativa de datas e horários por conta/plataforma**, justificada por dados quando disponíveis e marcada como **estimativa** quando não existirem. O operador pode alterar tudo antes de aprovar. Apenas depois do segundo gate o Motor 3 entrega pacotes aprovados ao Postiz, que mantém o scheduler e a execução. Esta é uma especificação, não uma implementação.

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

## 5. Próxima decisão da entrevista — P18

**Cadência e volume de publicações por projeto:** definir se frequência semanal é fixa, adaptativa dentro de limites revistos pelo operador, ou totalmente manual. Esta é distinta de escolher horários para peças já prontas e não dá permissão de gerar/publicar sem os dois gates.

Referências: [DECISOES.md](DECISOES.md), [CICLO_TEMAS.md](CICLO_TEMAS.md), [POSTIZ.md](POSTIZ.md), [METRICAS.md](METRICAS.md), [ALINHAMENTO_CONTRATO_V1.md](ALINHAMENTO_CONTRATO_V1.md).
