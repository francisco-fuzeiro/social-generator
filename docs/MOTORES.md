# Os três motores — especificação funcional

> Estado: fronteiras e gates DECIDIDOS; pormenores de scoring, ferramentas e automatização PROPOSTOS / por provar. Este ficheiro não autoriza instalar dependências nem executar publicações.

## Fronteiras

- **Nexus**: interface Social, sessões e limites de agentes, permissões, aprovações humanas persistentes, pausa, diagnóstico e coordenação.
- **Motor 1 — Intelligence**: encontra e avalia oportunidades. Não gera o guião antes da aprovação.
- **Motor 2 — Production**: cria recursos e pacote a partir do tema aprovado.
- **Motor 3 — Distribution, Analytics & Learning**: exporta/distribui sob autorização, recolhe métricas, avalia experiências e produz sinais para o Motor 1.
- **Adaptadores**: traduzem chamadas para serviços externos e ferramentas locais; nenhum fornecedor deve definir o modelo de domínio.
- **Dados**: projetoId editorial obrigatório em todas as etapas; nunca inferir projeto pelo cwd.

## Motor 1 — Intelligence

### Entradas

Perfil do projeto, público, objetivo, campanhas, orçamento/tempo disponível, histórico do projeto, resultados anteriores, regras de marca, temas recusados e fontes elegíveis. Memória global só de padrões gerais, sem copiar assets, conteúdo ou dados privados entre marcas.

### Pesquisa

Fontes candidatas acordadas: **YouTube, Instagram, Google/Google Trends, Reddit, TikTok, X e LinkedIn**, além de sites e documentação oficiais, quando acessíveis. Distinguir dados oficiais, observação pública, comentário comunitário e inferência. Uma tendência que aparece numa fonte não é automaticamente tendência global. Dados temporais têm período, mercado/região, plataforma e método de recolha.

Investigar:
- temas e pesquisas com interesse crescente;
- posts que resultam comparados com o histórico da conta/segmento, não só número absoluto de views;
- concorrentes/contas de referência autorizados;
- formatos, duração, hook, ritmo, tipo visual, CTA e timings publicados;
- perguntas recorrentes do público e ângulos originais, sem copiar criativos de terceiros;
- relação com objetivos do projeto e viabilidade dos recursos/licenças.

**Ritmo de referência:** pesquisa leve diária, síntese semanal com oportunidades recomendadas. Implementação de agendamento só quando demonstrada no Nexus; pesquisa manual na fase inicial.

### Saída antes do gate

Ficha económica com: id/versão/projeto/campanha, tema/pergunta, público, proposta de hook, ângulo e diferenciação, fontes+consultadoEm, sinais mensuráveis, formato e duração sugeridos, canal, CTA previsto, estimativa de esforço/custo, riscos editoriais/licenças, pontuação e confiança.

Não produzir guião completo, imagens, música, voz, animação ou render antes de receber **aprovação humana do tema/versão**.

### Classificação (proposta, não fórmula fechada)

Critérios candidatos: relevância para projeto, tendência/velocidade, procura real, saturação da concorrência, histórico comparável, impacto potencial na conversão, esforço/custo e confiança dos dados. Guardar rubrica, pesos e evidências usados. Na ausência de dados, a confiança cai; nunca inventar percentagens ou potencial de viralidade.

## Motor 2 — Production

**Pré-condição:** oportunidade aprovada para a versão atual.

Pipeline parametrizável:
1. Brief/objetivo/público e restrições do projeto.
2. Pesquisa factual e verificação de direitos/afirmações.
3. Guião, storyboard, ritmo, marcações de tempo, CTA e variantes.
4. Assets: imagens geradas/licenciadas, gráficos, elementos de marca, narração e áudio permitidos.
5. Contact sheet/animatic para revisão antes de renders pesados.
6. Composição programática, legendas, grafismos, motion design.
7. Validação técnica e editorial, prévia, pacote editável e exportações adaptadas por plataforma.
8. Registo de hashes, proveniência, versões, falhas e custos.

Ferramentas:
- **Remotion-first** e FFmpeg quando a integração e as licenças estiverem provadas; HyperFrames mantém-se opção alternativa.
- **Imagem**: sessão Codex/Nexus se capacidade real comprovada; caso contrário produção supervisionada no ChatGPT. **Higgsfield** apenas aprovado pontualmente e com benefício claro.
- **Voz/TTS**: adaptador (voz humana ou fornecedor legalmente autorizado), sem promessa de ElevenLabs ou custo recorrente. Timing/legendas carecem de prova.
- **Marcas**: usar bibliotecas próprias e assets autorizados; nenhuma marca/voz deve passar para outro projeto por engano.

Saídas: pacote e manifesto por versão, guião, storyboard, recursos editáveis, prévia e ficheiro final quando aplicável, checklist/gate, resumo de custos. Um pacote reprovado pode ser revisto numa nova versão; um pacote alterado tem de ser reaprovado.

## Motor 3 — Distribution + Analytics + Learning

### Distribuição

- Adaptar legenda, proporção, duração, thumbnail, CTA, hashtags e dados por rede sem desvirtuar a ideia.
- Preparar pacote por **conta+plataforma+versão**; apresentar ao humano o que será enviado.
- **Aprovação final explícita e persistente** antes de enviar/publicar.
- Na fase inicial: exportação e publicação manual com confirmação registada pelo operador; ligação a APIs oficiais só após prova de elegibilidade.
- Estados separados: rascunho, por aprovar, autorizado, exportado, em envio, publicado, falhou, incerto. Uma falha após envio sem recibo não autoriza retry cego.

### Medição

Guardar observações com origem, data de recolha, período e estado de disponibilidade. Ligar IDs de publicação e, quando houver, UTMs / analytics do site / eventos da app. Separar resultados observados, estimativas e atribuição indireta. Usar métricas específicas por projeto, não pressupor equivalência entre redes.

### Aprendizagem

Guardar características criativas estruturadas: tema, categoria, hook e duração, modelo narrativo, ritmo, voz, estilo, legendas, CTA, formato, horário, variantes, custos e fornecedores. Uma experiência tem hipótese, variável principal, métricas, janelas comparáveis, resultados e grau de confiança.

**Loop**: observação real → análise por projeto → recomendação justificada para Motor 1. Sem promover automaticamente uma conclusão baseada em poucos dados; experiências inconclusivas continuam visíveis. O modelo não pode publicar com base numa boa pontuação sem aprovação humana.

## Erros, interrupção e auditabilidade

Cada etapa devolve estados como concluída, bloqueada, indisponível ou erro com motivo, evidência e recibos. Ações externas exigem verificações antes de repetir; outputs incompletos não são resultados válidos. A posse de execução e limites continuam no Nexus. Produtos futuros podem usar outros provedores com o mesmo contrato.

## Relações

- Contrato técnico histórico: auditoria-f0.md §3 e §6.
- Mudanças necessárias: ALINHAMENTO_CONTRATO_V1.md.
- Métricas e experiência: METRICAS.md.
- Segurança, direitos e biblioteca: BIBLIOTECA.md.
