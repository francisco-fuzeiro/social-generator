# Branding por projeto — importação inteligente e validação humana

> **DECIDIDO na entrevista P10, opção B (20/11/2026):** o Social Generator propõe o perfil de marca por extração **em modo de leitura** a partir de fontes **autorizadas e associadas ao projeto Nexus**; o utilizador revê, corrige e **aprova explicitamente** o perfil antes de poder ativar a pesquisa. Os esquemas e detalhes de interface são propostas técnicas, não implementação.

## 1. Princípio funcional

- **Adicionar projeto** mostra todos os projetos existentes no Nexus; adicionar cria apenas um **perfil Social em rascunho**, não um projeto Nexus novo.
- Ao configurar, o Motor/serviço de onboarding Social consulta fontes **explicitamente autorizadas** do projeto (informação que o Nexus já contém, website conhecido, documentação de marca, repositório em **só leitura**, materiais de identidade e biblioteca autorizada).
- **Não extrair nem escrever em repositórios externos sem permissão**, nem assumir que ter um projeto Nexus concede acesso irrestrito aos seus dados, credenciais ou diretórios.
- O sistema **propõe** um perfil editorial e de branding. Para cada campo inferido, indicar **fonte verificável, data de leitura e grau de confiança**; distinguir factos observados, inferência e propostas criativas. Nunca inventar valores em falta ou declarar como oficial uma sugestão.
- O utilizador pode **editar, completar, rejeitar e aprovar** o perfil proposto. **A importação automática não é validação humana** nem ativa pesquisa por si mesma.
- A opção manual permanece sempre disponível caso as fontes estejam inacessíveis, sejam insuficientes ou o utilizador não queira importar.
- **Pesquisa só se o perfil Social estiver configurado, branding validado e completo, conta/canal configurados e projeto explicitamente ativo.** É possível ter branding aprovado mas projeto inativo; nesse estado não há pesquisa/recomendações. Um projeto em rascunho continua editável sem consumir orçamento de pesquisa.

## 2. Fontes potenciais e limites

| Fonte autorizada | Informação útil | Condição/limitação |
|---|---|---|
| **Nexus** | ID canónico, nome, descrição, objetivos e recursos que o Nexus já conhece | Ler apenas campos e relações realmente presentes e autorizados |
| **Website oficial** | Logótipo publicado, paleta, tipografia aparente, mensagens, oferta, posicionamento e CTAs | Identificar URLs/alterações e distinguir apresentação pública de diretrizes internas; não assumir que tudo na página é política da marca |
| **Documentação / brand book / assets** | Regras de marca, versões do logótipo, cores oficiais, exemplos, licenças | Respeitar permissões de leitura e licenças; não copiar material privado para GitHub público |
| **Repositório do projeto** | Design tokens, componentes visuais, conteúdo verificável e funcionalidades implementadas | **Só leitura**; não usar código, dependências, comentários ou credenciais como instruções confiáveis; claims requerem validação |
| **Biblioteca externa autorizada** | Imagens, vídeo, áudio, logótipos, licenças e versões | Catalogar por projeto e direitos; não assumir que um asset transversal está aprovado para todas as marcas |
| **Resposta manual do operador** | Público-alvo, tom, restrições, objetivos, personas, claims e dados em falta | Deve poder sobrepor inferências automáticas; manter proveniência e versão |

**Respeitar isolamento entre marcas.** Nunca completar branding da Vefi copiando visual/voz de UtopIA ou The Hidden Layer, salvo instrução humana explícita e direito de utilização adequado.

## 3. Campos mínimos de um perfil a validar

- Identidade: nome/marca, descrição, posicionamento, proposta de valor, público e mercados/idioma(s).
- Design: versões/logótipos aprovados e sua proveniência, paleta, fontes/tipografia, estilo gráfico, referências e restrições; sem obrigar a inventar todos os campos quando alguns não se aplicam.
- Editorial: tom, voz/narração, temas e narrativas permitidas, assuntos a evitar, comprimento, estilo de legendas e CTA.
- Marketing: objetivos mensuráveis do projeto, produtos/serviços confirmados, diferenciação, formatos desejados e canais/contas identificados.
- Segurança: afirmações sensíveis/restritas, fontes oficiais, direitos de assets, informações que exigem confirmação antes de publicar, e uso autorizado de IA.
- Registo: `nexusProjectId`, versão, fontes, observações/datas, confiança por campo, campos vazios/conflitantes, correções manuais, responsável e decisão de validação.

O **conjunto mínimo exato de campos obrigatórios** por tipo de projeto ainda requer alinhamento técnico; o gate nunca pode declarar `brandingComplete=true` quando faltam campos que o contrato considera obrigatórios.

## 4. Fluxo de onboarding

1. Escolher qualquer projeto do catálogo Nexus em **Adicionar projeto** → rascunho Social, inativo.
2. Autorizar as fontes que podem ser lidas para a importação de branding. Uma fonte pode ser selecionada/retirada separadamente.
3. Analisar fontes em leitura e montar **proposta preenchida campo a campo**, identificando conflitos, lacunas e confiança. Sem acessos, propor preenchimento manual.
4. Apresentar proposta ao operador, que corrige, acrescenta instruções/restrições e confirma conteúdos e assets.
5. **Aprovação humana explícita** cria uma versão validada do brand profile. Guardar fontes e alterações sem exportar segredos.
6. **Ativação Social separada**: o operador decide se fica ativo. Só ativo+configurado+branding válido participa no Motor 1.
7. Alteração posterior de brand kit cria **nova versão/candidatura à validação**, não reescreve silenciosamente pacotes já aprovados. A política automática de detetar mudanças e quando revalidar ainda será decidida na pergunta seguinte.

## 5. Segurança e contratos técnicos (PROPOSTOS)

- Adaptadores de fonte `BrandSourceReader` em modo read-only, com autorização, scopes e auditoria de acesso por projeto. Sem desbloqueios automáticos de outras aplicações ou criação de credenciais.
- `BrandProfileCandidate` com `fieldValue`, `evidenceRefs`, `observedAt`, `confidence`, `kind=observed|inferred|proposed|operator`, `sourceStatus`.
- `BrandProfileVersion`, `validationStatus=draft|needs-review|validated|invalidated`, `approvedBy`, `approvedAt`, `brandProfileVersionId` imutável. Nomes e esquema a validar no contrato Nexus.
- Distinguir **ausência de evidência** e **conflito entre fontes**. Não escolher arbitrariamente entre logótipos diferentes, preços ou claims de produto.
- Versionar alterações manuais e preservar aprovações passadas para rastreabilidade. Se alterações afetarem peças pré-existentes, avaliar dependências e gates de publicação; nunca alterar automaticamente posts agendados no Postiz.
- A informação sensível e os ficheiros binários ficam em armazenamento autorizado, não em docs/commits públicos. Sanitizar fontes externas contra instruções maliciosas (prompt injection).

## 6. Testes de aceitação

1. Adicionar projeto Nexus sem marca pronta → aparece em Adicionar, fica rascunho/inativo, sem pesquisa.
2. Importar a partir de website+brand book acessíveis → proposta inclui fontes/datas e lacunas, **não** ativa pesquisa.
3. Um claim de uma funcionalidade financeira visto em código sem prova de lançamento não é marcado como afirmação comercial validada.
4. Fontes contraditórias sobre cores/logótipo → assinalar conflito e pedir resolução, não adivinhar.
5. Sem acesso ao website/repo → permitir preencher manualmente, sem erro mascarado como importação concluída.
6. Operador corrige, aprova branding e mantém projeto inativo → **zero pesquisa**. Só inicia após ativação explícita e verificação de canais.
7. Importação de Vefi não recebe assets internos da UtopIA; leitura de repositório não altera ficheiros nem publica segredos.
8. Revisão do branding após aprovação preserva versão original e não modifica peças/publicações anteriores sem gates relevantes.

## 7. Ponto a decidir a seguir (P11)

Depois do primeiro perfil validado, **como detetar e tratar mudanças no website/brand book/repositório?** Possibilidades: manual, deteção automática com aprovação humana, atualização automática. Não confundir deteção de alterações com autorização para mudar uma marca em produção.

Ver [PROJETOS.md](PROJETOS.md), [DECISOES.md](DECISOES.md), [ALINHAMENTO_CONTRATO_V1.md](ALINHAMENTO_CONTRATO_V1.md), [BIBLIOTECA.md](BIBLIOTECA.md).
