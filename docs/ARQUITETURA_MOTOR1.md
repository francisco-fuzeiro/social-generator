# Motor 1 partilhado com especialização e memória por projeto — decisão arquitetural

> **DECIDIDO a 21/11/2026:** existe **um único núcleo técnico de Motor 1 — Intelligence**, reutilizado por todos os projetos Social elegíveis do Nexus. Cada projeto recebe a sua **instância lógica de execução**, com identidade, contexto, estratégia, fontes, memória, scoring, limites e resultados **isolados**. Não há um código ou infraestrutura independente por marca nem um agente LLM residente por projeto. **Registo arquitetural, não implementação.**

## 1. Estrutura

```text
Nexus → separador Social (um catálogo canónico de projetos)
   └─ Motor 1: núcleo partilhado e modular
      ├─ conectores autorizados / pesquisa online / tendências
      ├─ normalização de fontes, evidências e datas
      ├─ scoring parametrizável por objetivos
      ├─ memória editorial, comparação semântica e oportunidades
      ├─ recomendações e relatórios
      └─ ciclo de vida de tarefas e limites Nexus
           ├─ instância lógica The Hidden Layer → fontes, marca, temas, histórico e scoring próprios
           ├─ instância lógica Vefi             → fontes, marca, temas, histórico e scoring próprios
           ├─ instância lógica UtopIA Solutions → fontes, marca, temas, histórico e scoring próprios
           └─ outras instâncias para projetos Nexus Social ativos
```

**«Instância lógica» significa execução do mesmo motor com `nexusProjectId` e contexto próprio**, não serviço/processo/LLM permanente nem cópia de código para cada projeto.

## 2. O que é comum e o que é isolado

| Partilhado no núcleo | Individual por projeto |
|---|---|
| Conectores/adaptadores para fontes permitidas, APIs e ferramentas futuras | Fontes autorizadas, fontes prioritárias, concorrentes e restrições de acesso |
| Pipeline de pesquisa, normalização, deduplicação, proveniência e confiança | Marca, idioma/mercado, público, objetivos, campanhas e regras editoriais |
| Sistema configurável de scoring e geração de recomendações | Pesos/critério de relevância específicos do projeto e respetiva confiança |
| Contrato de tarefas, scheduler de pesquisa via Nexus quando validado, observabilidade e gestão de custos | Fila de resultados, memória e histórico editorial, temas, decisões e métricas próprias |
| Interfaces para adicionar/trocar provedores sem refazer os perfis | Limites, quotas, prioridades e permissão de ativação do projeto |
| Política-base de segurança, gates e regras de evidência | Acesso apenas às contas, fontes, biblioteca e dados autorizados para essa identidade |

Exemplo: **The Hidden Layer** procura histórias com boas fontes, narrativa e audiência internacional; **Vefi** investiga necessidades e comunicação de produto financeiro com validação reforçada; **UtopIA** procura oportunidades de aquisição de clientes para serviços web. A relevância e o scoring **não devem usar o mesmo perfil ou memória**, mesmo quando a mesma ferramenta de pesquisa é utilizada.

## 3. Ciclo de execução

1. Nexus identifica um **projeto existente**, que foi adicionado/configurado no Social, está **ativo**, tem branding validado e pelo menos um canal/conta identificável nos modos suportados. Projetos em rascunho/inativos **não recebem investigação**.
2. Núcleo M1 carrega o **contexto e política do projeto pelo ID canónico Nexus**, incluindo versão da marca, objetivos, campanhas opcionais, fontes permitidas e memória editorial própria. Não inferir projeto pelo diretório atual ou pelo estado residual de outra execução.
3. O núcleo executa a pesquisa leve diária ou aprofundada semanal **segundo quotas e prioridades Nexus**, ou manualmente até ser tecnicamente comprovada a execução programada. Instâncias podem partilhar executores sob recursos disponíveis, sem agentes permanentes nem duplicação de trabalho.
4. A saída fica associada ao projeto: fontes, oportunidade, razões/score específicos, confiança, custos, estado, data, validade e links ao histórico. Os temas de outro projeto não se misturam.
5. O utilizador decide os temas **no gate 1**. Só os selecionados passam ao **Motor 2**, também no contexto da marca correta. M4 regressa com resultados **datados e atribuídos ao projeto/conta** para melhorar futuras recomendações; M3/Postiz só recebe pacotes aprovados no gate 2.
6. Ao terminar ou suspender, a execução liberta CPU, LLM e reservas. Preservar estado e histórico na fonte apropriada, **sem manter um LLM permanente por projeto**.

## 4. Isolamento, portabilidade e custos

- **Isolamento obrigatório** das identidades, tokens, contas, fontes privadas, conteúdos, branding, memória editorial, métricas e decisões; nunca copiar dados sensíveis de um projeto para outro. Estatísticas **agregadas e não sensíveis** podem ajudar a melhorar o motor comum, sem revelar material de outras marcas.
- **Uma atualização de adaptador aplica-se a todos os perfis compatíveis**, sem duplicar a integração de novas APIs ou ferramentas. Suportar evolução de fornecedores sem lock-in por uma interface comum de capacidades, proveniência, custo e permissões.
- **Nexus controla capacidade e concorrência**; reservar recursos por tarefa/execução, limitar pesquisas e profundidade segundo política P2-C/P14-B, respeitar zero custos pagos sem consentimento específico.
- Distinção entre **infraestrutura partilhada** e **estado isolado**: partilha de caches só quando conteúdo for público e não houver fuga de informação, mistura de fontes, metas ou métricas. A reutilização deve preservar proveniência e limites.
- Uma falha ou pausa de uma instância lógica **não deve corromper a memória ou autorizações de outras**; mostrar estados de execução e recomeçar apenas com reservas e dados válidos.

## 5. Critérios de aceitação futuros (por implementar)

1. Três perfis Social ativos geram oportunidades **com marca, público, fontes e scoring diferentes** utilizando o **mesmo módulo M1**.
2. O relatório da Vefi não contém temas privados, memória editorial, métricas ou credenciais de The Hidden Layer.
3. Atualizar um adaptador de fonte altera **o núcleo partilhado**, sem exigir forks por marca; configurações individuais continuam válidas.
4. Os projetos não adicionados ou inativos aparecem na lista de **Adicionar**, mas não são pesquisados nem consomem recursos.
5. Uma instância com tarefas longas não impede outra de ser planeada dentro dos limites do Nexus; nenhuma depende de LLM residente.
6. Trocar objetivo/campanha num projeto altera o scoring desse projeto **sem reescrever perfis de outros**.
7. A execução não inventa dados de APIs sem acesso, declara incerteza e não publica sem os dois gates.

## 6. Estado e próximo passo

**Entrevista de produto encerrada em 21/11/2026** a pedido do utilizador: decisões suficientes para **consolidar e transformar em MVP por fases**. Isso **não autoriza implicitamente implementar código, contratar fornecedores, executar pesquisa real ou publicar**. Antes de F1: rever alinhamento Nexus e prioridades do MVP; depois implementar e testar incrementos pequenos. Não continuar a inventar perguntas de arquitetura como bloqueio ao desenvolvimento.

Ver [DECISOES.md](DECISOES.md), [PROJETOS.md](PROJETOS.md), [MOTORES.md](MOTORES.md), [CICLO_TEMAS.md](CICLO_TEMAS.md), [ALINHAMENTO_CONTRATO_V1.md](ALINHAMENTO_CONTRATO_V1.md), [ROADMAP.md](ROADMAP.md).
