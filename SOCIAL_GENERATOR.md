# Social Generator — visão consolidada do produto

> Atualizado em 20/11/2026. Este texto reconstrói e consolida as decisões recuperáveis das conversas do projeto ChatGPT e do repositório. **Não é uma cópia literal** do SOCIAL_GENERATOR.md original (489 linhas), cujo conteúdo integral não estava disponível no momento da sincronização. Não interpretar pormenores não recuperados como decisões tomadas.

## 1. Missão

Construir um sistema de criação, distribuição e aprendizagem de conteúdo para redes sociais, orientado a promover projetos próprios, captar audiência, atrair potenciais clientes e medir resultados. **Não é exclusivo da UtopIA.** Cada projeto tem marca, público, objetivos e memória próprios. O sistema deve permanecer preparado para novas ferramentas, formatos e plataformas, sem reescrever o núcleo.

## 2. Decisões de produto confirmadas

- O **dashboard Social existe dentro do Nexus**, em PC e móvel; este repositório contém o motor e contratos, não uma segunda aplicação ou um segundo orquestrador.
- **Multi-projeto ligado exclusivamente ao Nexus**: **Adicionar projeto mostra todos os projetos Nexus**, incluindo sem redes sociais ou branding. Selecionar adiciona só um **rascunho de perfil Social**, sem criar novo projeto Nexus ou iniciar tarefas. **Pesquisa apenas para perfis Social configurados, ativos e com branding completo** (com conta social identificada para o canal, sem exigir OAuth). Nem todos os projetos Nexus precisam de Social. Candidatos ao MVP: The Hidden Layer, Vefi e UtopIA, se configurados/ativos.
- **Três motores partilhados**:
  1. **Intelligence / Pesquisa**: estudar tendências, concorrência, formatos e publicações com bom desempenho; recomendar oportunidades por projeto.
  2. **Production / Produção**: transformar um tema aprovado em guião, recursos, composição, variantes, prévias e pacote exportável.
  3. **Distribution + Analytics + Learning**: preparar distribuição, medir resultados e retroalimentar a pesquisa. A primeira versão admite publicação e métricas manuais.
- Pesquisa **diária leve** e relatório **semanal aprofundado** são cadências decididas; fontes: YouTube, Instagram, Google/Trends, Reddit, TikTok, X, LinkedIn e fontes oficiais. Concorrência híbrida (referências manuais e descoberta), score adaptativo por projeto. Reutilizar scheduler Nexus quando provado; inicialmente manual. **Entrevista P2-C:** pesquisa de todos os projetos Social **configurados, ativos e com branding completo**, com profundidade maior para campanhas e tendências relevantes; **projeto configurado mas inativo não é pesquisado**.
- **Temas e planeamento editorial:** cada lote de recomendações oferece **no mínimo cinco temas** distintos com evidência; permite escolher **vários** e **só depois da produção** apresenta proposta justificada de calendário com ordem, datas, horas, canais e contas, junto à prévia da peça. Um tema só pode ser reutilizado como recomendação vigente até **7 dias desde a última validação**, passando depois a reavaliação na pesquisa semanal profunda. Ver [CICLO_TEMAS.md](docs/CICLO_TEMAS.md).
- **Aprovação humana do tema antes do guião/produção** e **nova aprovação da peça/pacote específico antes de publicar**. A aprovação de uma ferramenta no Nexus não substitui nenhuma destas.
- **Qualidade publicável desde o primeiro piloto**, com revisão factual, editorial, técnica, visual, de acessibilidade e de direitos; Remotion-first e IA generativa só quando acrescentar valor; Higgsfield requer aprovação específica.
- Dados de cada projeto isolados; padrões globais podem ser reutilizados quando forem abstrações gerais, nunca como mistura de resultados de marcas.
- O sistema deve justificar recomendações, preservar fontes, decisões, versões, custos, publicações e medições. Um resultado hipotético ou indisponível nunca é apresentado como real.

## 3. Formatos e redes de intenção da entrevista

| Projeto Nexus (apenas se elegível/ativado) | Formato | Plataformas |
|---|---|---|
| The Hidden Layer | Vídeo vertical narrado em inglês, faceless e motion graphics | Instagram, YouTube, X, TikTok |
| Vefi | Vídeo e carrossel | Instagram, TikTok, X, LinkedIn, YouTube |
| UtopIA Solutions | Vídeo e carrossel | Instagram, LinkedIn, TikTok, X, YouTube |

Estas são **intenções editoriais**, não provas de contas ligadas nem autorização de publicação. Novos projetos só surgem se existirem no Nexus com socials. Ver docs/PROJETOS.md.

## 4. Metas e limites acordados

| Tema | Orientação |
|---|---|
| Custo adicional | Preferência por 0 €/mês; faixa-teto de planeamento 0–25 €/mês, **nenhuma compra/API paga sem aprovação explícita** |
| Capacidade pretendida | 5–10 conteúdos/semana, após validação de qualidade e recursos; **meta, não capacidade existente** |
| Supervisão pretendida | 1–3 h/semana; **meta** |
| Desenvolvimento disponível | aproximadamente 3–6 h/semana |
| MVP transversal | um conteúdo real/publicável para cada projeto inicial (The Hidden Layer, Vefi, UtopIA), com ciclo e métricas rastreáveis |
| Piloto técnico inicial | pode validar um único projeto/peça antes de repetir nos três; não satisfaz sozinho o MVP transversal |

## 5. Arquitetura e responsabilidades

```text
Nexus (UI Social, sessões, permissões, gates, limites, supervisão)
  ├─ Motor 1: Research/Intelligence ──> oportunidade aprovada
  ├─ Motor 2: Production ────────────> pacote/preview validado e aprovado
  └─ Motor 3: Distribution/Analytics/Learning
       └─ observações e experiências ──> recomendações do Motor 1

Persistência Social contratada (dados e evidências)
Biblioteca externa de recursos de IA (não versionada no Git)
Repositórios dos projetos servidos: leitura, salvo autorização distinta
```

O Nexus continua dono da orquestração, lançamento de agentes, controlo de recursos, permissões e interface. O motor social fornece **etapas invocáveis** e ficheiros normalizados, não cria scheduler, servidor ou dashboard paralelo. Adaptadores isolam Remotion, FFmpeg, geração de imagem, TTS, pesquisa, redes e fornecedores futuros.

O fluxo de negócio segue **Workspace → Projeto → Campanha → Ideia/Oportunidade → Criativo/Peça → Variante → Publicação → Métricas/Conversões → Experiência/Aprendizagem**, mantendo IDs e rastreabilidade de ponta a ponta.

## 6. Fluxo editorial

1. **Adicionar** a partir do catálogo completo de projetos Nexus (incluindo projetos sem socials) e configurar um perfil Social em rascunho. Para **pesquisar**, selecionar apenas um perfil Social **ativo e com branding/configuração completos**, objetivo e conta/canal relevante; consultar marca e histórico.
2. Motor 1 investiga fontes e apresenta **lotes de pelo menos cinco fichas de oportunidade fundamentadas** (tema, fonte/data, potencial, público, hook, formato, duração sugerida, risco e esforço), **sem produzir guiões caros antes da aprovação**. Se faltarem temas credíveis, assinala lote incompleto. Recomendações com sete dias entram em reavaliação semanal antes de serem reutilizadas.
3. Humano **seleciona apenas os temas** (um ou vários); cada seleção positiva é a primeira aprovação, por tema/versão, que autoriza a produção. **Ainda não escolhe nem aprova calendário**.
4. Motor 2 pesquisa em profundidade, escreve guião/storyboard, compõe recursos, gera prévias, verifica qualidade e fornece ficheiros editáveis e MP4/carrossel. **Depois da produção**, apresenta prévia, legendas, CTA, qualidade, custos e proposta explicada de agendamento (ordem, datas, horas, contas/plataformas) para revisão.
5. Humano pode pedir alterações ao vídeo/carrossel ou ajustar datas, horas, contas e canais. **Só aprova a versão exata do pacote e calendário** quando estiver satisfeito; mudança material invalida aprovação anterior.
6. **Só após o segundo gate**, o Motor 3 recebe o pacote aprovado para **agendar** por API oficial autorizada ou preparar agendamento manual pendente de confirmação. `agendado` e `publicado` são estados distintos, cada um requer prova; nunca repetir envio incerto sem reconciliação.
7. Recolher métricas datadas e conversões; comparar janelas equivalentes; gerar aprendizagem citável por projeto, usada em novas recomendações.

## 7. Ferramentas e integração

- **Remotion-first** para motion graphics/vídeo programático; FFmpeg para transcodificação/verificações quando comprovado. HyperFrames mantém-se alternativa em avaliação.
- Imagens: preferir capacidade disponível em sessões Codex/Nexus **se comprovada**; alternativa supervisionada no ChatGPT. Higgsfield apenas mediante autorização e quando acrescentar valor.
- Voz, música e imagens de terceiros: adaptadores substituíveis, prova de licença e direitos. Não assumir ElevenLabs ou qualquer API paga como obrigatória.
- Prioridade a integrações oficiais e exportação manual segura; permissões e restrições das redes sociais têm de ser validadas por canal.
- **Biblioteca local**: D:\AI\Biblioteca, externa ao Git, com manifestos/licenças e acesso por referências; o perfil Social está ligado ao projeto Nexus. **Projeto local Nexus**: C:\Claude\Social Generator.
- Ferramentas novas devem entrar como adaptadores com capacidades e custos declarados; não depender estruturalmente de um fornecedor.

## 8. Dashboard e aprendizagem

**Ordem de implementação decidida:** primeiro garantir o separador Social do Nexus funcional (Adicionar = catálogo completo Nexus; configuração e ativação separadas; pesquisa só ativos com branding, estados, aprovações, outputs e métricas). **Só depois** definir o desenho visual detalhado, gráficos e navegação avançada. Overview/Intelligence/Studio/Publishing/Analytics/Experiments/Costs são áreas de informação possíveis, não sete páginas a desenhar na F1.

Medir alcance, retenção (tempo médio, conclusão/curvas quando disponíveis), envolvimento, CTR, links UTM, tráfego, eventos do website/app, conversões e custos sem misturar definições entre plataformas. Registrar características criativas (hook, duração, voz, visual, CTA, variante) para aprender o que funcionou. Comparação honesta entre posts de mesma idade/condição; amostras pequenas e causalidade incerta ficam explícitas. Cada projeto escolhe objetivos/KPIs próprios, não se otimiza universalmente por visualizações.

## 9. Estados e documentação canónica

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

## 10. Fronteiras de segurança

Sem publicar credenciais, tokens, dados pessoais, chaves, logs brutos, material privado ou a biblioteca externa no GitHub (atualmente público até 23/11/2026, alteração posterior sob controlo humano). Redes/repositórios servidos não ganham permissão de escrita por associação ao projeto. Respeitar limites do Nexus, política de pausa e recuperação, direitos de terceiros, revisão factual e consentimento da publicação.

## 11. Próximos passos

A entrevista já ficou formalizada em docs/ALINHAMENTO_CONTRATO_V1.md, docs/PROJETOS.md, docs/MOTORES.md e docs/METRICAS.md. Antes de F1: **validar tecnicamente** o contrato com o Nexus sem abrir criação de projeto livre ou redesign do dashboard; testar elegibilidade de projetos e gateways de fontes/canais. Depois seguir a sequência incremental F1–F3 detalhada em docs/ROADMAP.md e docs/auditoria-f0.md. 
