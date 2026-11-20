# Requisitos funcionais e não funcionais

> Estado: especificação de produto; critérios concretos complementares propostos onde indicado. A arquitetura implementada deve ser validada separadamente.

## Objetivo e utilizador

Ferramenta pessoal integrada no Nexus para investigar, criar e avaliar conteúdo de vários projetos e redes. Não é plataforma SaaS multi-cliente nem substitui o Nexus. O operador escolhe o projeto e pode iniciar uma campanha, aprovar temas, rever prévias, autorizar publicações e consultar resultados.

## Requisitos de produto (confirmados)

| ID | Requisito | Aceitação observável |
|---|---|---|
| R01 | Seleção de projeto antes de qualquer etapa | Oportunidade, peça, métricas e contas ficam ligadas ao mesmo ID editorial |
| R02 | Projetos extensíveis | Adicionar novo perfil/configuração sem editar lógica dos três motores |
| R03 | Marca e memória por projeto | Assets/voz/idioma/fontes/público não contaminam outra marca |
| R04 | Motor 1 pesquisa e recomenda | Ficha com fonte+data+relevância por projeto, sem gerar guião automaticamente |
| R05 | Gate humano de tema | Sem decisão positiva para versão atual não existe produção autorizada |
| R06 | Motor 2 cria recurso final | Guião, storyboard, recursos, render/previews e pacote editável/exportável; falhas visíveis |
| R07 | Gate humano de publicação | Autorização por versão exata, plataforma e conta, revogada por alteração relevante |
| R08 | Motor 3 acompanha distribuição e resultados | Distinguir exportado, enviado, confirmado, falhou e incerto; sem repetição cega |
| R09 | Analytics por conteúdo e projeto | Métricas com origem/data; não transformar métricas ausentes em zero |
| R10 | Atribuição e aprendizagem | Ligação de post/variante a tráfego/UTMs/eventos/conversões quando observável |
| R11 | Reutilizar Nexus | Painel PC/móvel, papéis, limites, pausas, sessões e aprovações compatíveis |
| R12 | Adaptadores substituíveis | Trocar imagem/render/pesquisa/voz sem mudar contrato persistido e UI |
| R13 | Custos sob controlo humano | Sem subscrições nem API paga sem autorização; custos por tarefa/projeto |
| R14 | Biblioteca externa | Usar D:\AI\Biblioteca por configuração, sem subir media privada ao repositório |

## Requisitos de segurança e qualidade

- **Segurança**: contas, tokens e chaves fora de Git e dos snapshots destinados ao dashboard; caminho externo não é servido pelo HTTP sem validação; mínimo privilégio.
- **Rastreabilidade**: conservar versão, origem e confiança de afirmações, URLs/fontes, revisão factual, direitos e hash de recursos.
- **Isolamento**: repos Vefi/UtopIA e outros são só de leitura. Um projeto editorial não exige repo próprio; IDs separados de \`project_cwd\`.
- **Resiliência**: escrita atómica, idempotência das decisões, recuperação após crash e confirmação antes de repetir ações externas de publicação.
- **Compatibilidade**: migração versionada (v1→v2 quando incompatível), sem mudar silenciosamente formato e interpretação de métricas.
- **Acessibilidade editorial**: legendas legíveis e verificadas, enquadramento para cada proporção, som audível, ausência de sobreposições, material com licença.
- **Honestidade analítica**: amostras, definições e janelas explícitas; sem rankings/promessas de viralidade sem base.
- **Custos e capacidade**: 5–10 conteúdos/semana e 1–3h de supervisão são objetivos condicionados a provas, não SLO atual.

## Critérios de qualidade de uma peça (proposta para gate)

1. Tema e narrativa respeitam briefing e identidade do projeto.
2. Afirmações factuais importantes verificadas com fontes e incerteza assinalada.
3. Direitos de imagem, voz, música, excertos e fontes registados; sem reutilização indevida.
4. Contact sheet/animatic e MP4 (quando aplicável) visualizáveis; proporção/duração/resolução validadas; legendas sem cortes.
5. CTA correto para objetivo e canal; URLs rastreáveis se aplicável.
6. Pacote exportável e versão imutável; decisão final anterior a qualquer envio.

## Fora do âmbito inicial

- Novo painel autónomo, novo gestor de utilizadores, novo scheduler genérico, nova infraestrutura cloud obrigatória.
- Scraping que contorne condições de plataformas ou recolha de dados pessoais não necessários.
- Publicação irrestrita ou sem revisão humana.
- Pagar automaticamente fornecedores, ou supor que contas/APIs sociais já estão conectadas.

## MVP transversal e validações

**Piloto técnico**: um fluxo end-to-end com um projeto, dados/receitas de teste isolados e evidências; prova por fase F1–F3. **MVP de produto**: 1 conteúdo real e publicável de cada The Hidden Layer, Vefi e UtopIA, cada qual com fontes, gates, peça final, publicação/resultado conforme disponibilidade e métricas com origem/data (podem ser manuais). Se alguma conta não for publicada, reportar explicitamente o gate pendente; não declarar a meta cumprida.

As métricas detalhadas, perfis e contrato evolutivo estão em METRICAS.md, PROJETOS.md e ALINHAMENTO_CONTRATO_V1.md.
