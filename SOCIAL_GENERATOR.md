# Social Generator — visão consolidada do produto

> Atualizado em 20/11/2026. Este texto reconstrói e consolida as decisões recuperáveis das conversas do projeto ChatGPT e do repositório. **Não é uma cópia literal** do SOCIAL_GENERATOR.md original (489 linhas), cujo conteúdo integral não estava disponível no momento da sincronização. Não interpretar pormenores não recuperados como decisões tomadas.

## 1. Missão

Construir um sistema de criação, distribuição e aprendizagem de conteúdo para redes sociais, orientado a promover projetos próprios, captar audiência, atrair potenciais clientes e medir resultados. **Não é exclusivo da UtopIA.** Cada projeto tem marca, público, objetivos e memória próprios. O sistema deve permanecer preparado para novas ferramentas, formatos e plataformas, sem reescrever o núcleo.

## 2. Decisões de produto confirmadas

- O **dashboard Social existe dentro do Nexus**, em PC e móvel; este repositório contém o motor e contratos, não uma segunda aplicação ou um segundo orquestrador.
- **Multi-projeto nativo e extensível**: selecionar projeto antes de pesquisar, recomendar, produzir ou publicar. Iniciar com The Hidden Layer, Vefi e UtopIA; Car Enterprise é outro caso possível.
- **Três motores partilhados**:
  1. **Intelligence / Pesquisa**: estudar tendências, concorrência, formatos e publicações com bom desempenho; recomendar oportunidades por projeto.
  2. **Production / Produção**: transformar um tema aprovado em guião, recursos, composição, variantes, prévias e pacote exportável.
  3. **Distribution + Analytics + Learning**: preparar distribuição, medir resultados e retroalimentar a pesquisa. A primeira versão admite publicação e métricas manuais.
- Pesquisa leve **diária** e relatório de oportunidades **semanal** como objetivos de funcionamento, não como scheduler já implementado.
- **Aprovação humana do tema antes do guião/produção** e **nova aprovação da peça/pacote específico antes de publicar**. A aprovação de uma ferramenta no Nexus não substitui nenhuma destas.
- **Qualidade publicável desde o primeiro piloto**, com revisão factual, editorial, visual, de acessibilidade e de licenças.
- Dados de cada projeto isolados; padrões globais podem ser reutilizados quando forem abstrações gerais, nunca como mistura de resultados de marcas.
- O sistema deve justificar recomendações, preservar fontes, decisões, versões, custos, publicações e medições. Um resultado hipotético ou indisponível nunca é apresentado como real.

## 3. Metas e limites acordados

| Tema | Orientação |
|---|---|
| Custo adicional | Preferência por 0 €/mês; faixa-teto de planeamento 0–25 €/mês, **nenhuma compra/API paga sem aprovação explícita** |
| Capacidade pretendida | 5–10 conteúdos/semana, após validação de qualidade e recursos; **meta, não capacidade existente** |
| Supervisão pretendida | 1–3 h/semana; **meta** |
| Desenvolvimento disponível | aproximadamente 3–6 h/semana |
| MVP transversal | um conteúdo real/publicável para cada projeto inicial (The Hidden Layer, Vefi, UtopIA), com ciclo e métricas rastreáveis |
| Piloto técnico inicial | pode validar um único projeto/peça antes de repetir nos três; não satisfaz sozinho o MVP transversal |

## 4. Arquitetura e responsabilidades

\`\`\`text
Nexus (UI Social, sessões, permissões, gates, limites, supervisão)
  ├─ Motor 1: Research/Intelligence ──> oportunidade aprovada
  ├─ Motor 2: Production ────────────> pacote/preview validado e aprovado
  └─ Motor 3: Distribution/Analytics/Learning
       └─ observações e experiências ──> recomendações do Motor 1

Persistência Social contratada (dados e evidências)
Biblioteca externa de recursos de IA (não versionada no Git)
Repositórios dos projetos servidos: leitura, salvo autorização distinta
\`\`\`

O Nexus continua dono da orquestração, lançamento de agentes, controlo de recursos, permissões e interface. O motor social fornece **etapas invocáveis** e ficheiros normalizados, não cria scheduler, servidor ou dashboard paralelo. Adaptadores isolam Remotion, FFmpeg, geração de imagem, TTS, pesquisa, redes e fornecedores futuros.

O fluxo de negócio segue **Workspace → Projeto → Campanha → Ideia/Oportunidade → Criativo/Peça → Variante → Publicação → Métricas/Conversões → Experiência/Aprendizagem**, mantendo IDs e rastreabilidade de ponta a ponta.

## 5. Fluxo editorial

1. Selecionar projeto e objetivo; consultar perfil de marca e histórico.
2. Motor 1 investiga fontes e apresenta **fichas económicas de oportunidade** (tema, fonte/data, potencial, público, hook, formato, duração sugerida, risco e esforço), **sem produzir guiões caros antes da aprovação**.
3. Humano aprova ou recusa o tema/versão; recusa não produz.
4. Motor 2 pesquisa em profundidade, verifica afirmações, escreve guião/storyboard, compõe recursos, gera prévias/contact sheet, verifica qualidade, fornece ficheiros editáveis e MP4 quando apropriado.
5. Humano aprova a versão exata do pacote por plataforma/conta; mudança material invalida a autorização.
6. Motor 3 exporta/prepara; só publica com autorização e canal elegível. Guardar recibos e tratar estado de envio incerto sem repetição cega.
7. Recolher métricas datadas e conversões; comparar janelas equivalentes; gerar aprendizagem citável por projeto, usada em novas recomendações.

## 6. Ferramentas e integração

- **Remotion-first** para motion graphics/vídeo programático; FFmpeg para transcodificação/verificações quando comprovado. HyperFrames mantém-se alternativa em avaliação.
- Imagens: preferir capacidade disponível em sessões Codex/Nexus **se comprovada**; alternativa supervisionada no ChatGPT. Higgsfield apenas mediante autorização e quando acrescentar valor.
- Voz, música e imagens de terceiros: adaptadores substituíveis, prova de licença e direitos. Não assumir ElevenLabs ou qualquer API paga como obrigatória.
- Prioridade a integrações oficiais e exportação manual segura; permissões e restrições das redes sociais têm de ser validadas por canal.
- **Biblioteca local**: D:\AI\Biblioteca, externa ao Git. **Projeto local Nexus**: C:\Claude\Social Generator.
- Ferramentas novas devem entrar como adaptadores com capacidades e custos declarados; não depender estruturalmente de um fornecedor.

## 7. Dashboard e aprendizagem

O separador Social do Nexus inclui visão por projeto e global, Intelligence, Studio, calendário/distribuição, Analytics/Conversões, experiências e custos/saúde do sistema. Esta divisão é **proposta de navegação**, não interface implementada.

Medir alcance, retenção, envolvimento, tráfego, conversões e custos sem misturar definições entre plataformas. Registrar características criativas (hook, duração, voz, visual, CTA, variante) para aprender o que funcionou. Comparação honesta entre posts de mesma idade/condição; amostras pequenas e causalidade incerta ficam explícitas. Cada projeto escolhe objetivos/KPIs próprios, não se otimiza universalmente por visualizações.

## 8. Estados e documentação canónica

| Fonte | Autoridade |
|---|---|
| Este ficheiro | Visão funcional, decisões amplas e limites |
| docs/DECISOES.md | Decisões confirmadas, propostas, questões abertas e conflitos |
| docs/REQUISITOS.md | Critérios funcionais e de aceitação |
| docs/MOTORES.md | Fluxos dos motores, entradas/saídas e ferramentas |
| docs/METRICAS.md | Catálogo analítico, atribuição e qualidade de dados |
| docs/PROJETOS.md | Perfis editoriais e canais |
| docs/BIBLIOTECA.md | Biblioteca de recursos, direitos e caminhos |
| docs/ALINHAMENTO_CONTRATO_V1.md | Adenda funcional a compatibilizar com F0 antes de alterar schema/código |
| docs/ROADMAP.md | Fases e gates |
| docs/auditoria-f0.md | Evidência técnica do Nexus em 20/11/2026; **não apagar nem substituir** |
| CLAUDE.md / TODO.md / SESSOES.md | Regras, trabalho atual e sessões |

**Semântica:** DECIDIDO = afirmado/aceite nas conversas; PROPOSTO = desenho para validação; PENDENTE = questão não fechada; IMPLEMENTADO = requer evidência de código/testes. Decisão de produto não significa funcionalidade já implementada.

## 9. Fronteiras de segurança

Sem publicar credenciais, tokens, dados pessoais, chaves, logs brutos, material privado ou a biblioteca externa no GitHub (atualmente público até 23/11/2026, alteração posterior sob controlo humano). Redes/repositórios servidos não ganham permissão de escrita por associação ao projeto. Respeitar limites do Nexus, política de pausa e recuperação, direitos de terceiros, revisão factual e consentimento da publicação.

## 10. Próximos passos

Primeiro alinhar contrato v1 F0 com multi-projeto/canais, métricas/atribuição, biblioteca e orçamento, sem assumir que a adenda já foi implementada. Depois seguir a sequência incremental F1–F3 detalhada em docs/ROADMAP.md e docs/auditoria-f0.md. 
