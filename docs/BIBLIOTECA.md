# Biblioteca central de recursos e direitos

> Configuração local acordada: **D:\AI\Biblioteca**. Projeto Social Generator: **C:\Claude\Social Generator**. Esta biblioteca é externa ao repositório Git e não está incluída no commit. A existência do diretório foi validada pelo utilizador; o acesso do motor aos seus ficheiros ainda precisa de ser testado.

## Objetivo

**Regra da entrevista:** o Social Generator nunca cria projetos próprios. Um asset só é associado a um **projeto existente no Nexus, com socials e Social ativado**, e os dados de identidade/autorização vêm do Nexus. A biblioteca é transversal mas não autoriza que projetos partilhem marcas ou materiais privados.

Reutilizar legalmente componentes, imagens, áudio, fontes, templates, referências, marcas e recursos entre projetos **sem misturar identidades, direitos ou materiais confidenciais**. O Git guarda documentação/código/manifests não sensíveis; ficheiros de media privados/pesados permanecem na biblioteca ou em outputs locais autorizados.

## Configuração recomendada (proposta)

- Resolver a raiz via variável local `AI_LIBRARY_PATH` **ou configuração de recurso autorizada pelo Nexus**, configurada fora do Git; usar D:\AI\Biblioteca como valor Windows de referência. A configuração Social não duplica a definição de projetos/contas do Nexus.
- Não colocar caminhos absolutos da biblioteca em snapshots JSON destinados ao browser; usar referências lógicas ou IDs.
- O código deve validar paths, `realpath`, junctions/reparse points e permissões antes de abrir/servir recursos, impedindo `..` ou saída da raiz autorizada.
- **Não criar junction/symlink automaticamente** apontada do repo para a biblioteca: a ligação lógica por configuração é mais segura.
- Diretórios, exemplos e assets reais só são criados/movidos após inventário, para evitar sobrescrever conteúdo existente. O perfil de marca Social referencia os assets e as respetivas licenças/versões; a fonte de verdade do ID de projeto continua a ser o Nexus.

## Organização proposta (não executar renomes automaticamente)

```text
D:\AI\Biblioteca\
  Marcas\
    the-hidden-layer\
    vefi\
    utopia\
    car-enterprise\
  Audio\
    efeitos\
    vozes-autorizadas\
    musicas-licenciadas\
  Imagens\
  Videos\
  Templates\
  Projetos\
  Catalogos\
```

Nomes são orientadores; o inventário existente é fonte de verdade. O mesmo recurso pode ser referenciado por vários projetos **apenas** se licença, marca e consentimento permitirem.

## Manifesto de recurso (PROPOSTO)

Campos mínimos por asset: `assetId`, **`nexusProjectIdsAutorizados`** (ou política transversal explícita), tipo MIME, nome descritivo, checksum SHA-256, dimensões/duração quando aplicável, origem e URL, autor/fornecedor, licença e comprovativo, data de obtenção, termos de utilização comercial, atribuição obrigatória, restrições geográficas, permissão de derivação, projetos autorizados, conteúdo sensível, versão/derivados, localizador lógico, último check e estado de aprovação.

- Uma referência URL de terceiro **não** é licença para reutilizar.
- Voz humana/sintética requer autorização, direitos de utilização e políticas do fornecedor; não clonar pessoas sem consentimento.
- Música, excertos de vídeo e fontes carecem de verificação por contexto/plataforma, mesmo quando usados num teste.
- Obras geradas por IA também requerem verificação de condições comerciais do fornecedor.
- Nunca copiar automaticamente marcas ou dados de Vefi/UtopIA para The Hidden Layer.

## Ficheiros de trabalho e retenção

Os outputs do motor/etapas pertencem ao runtime/outputs autorizados do Nexus, com IDs/hashes de recursos; a biblioteca é fonte de assets reutilizáveis, não arquivo de estados de execução. Distinguir original, derivado editável, preview, render final e recibos de publicação. Não apagar ficheiros automaticamente sem política aprovada. Definir quotas, limpezas, backups e tratamento de ficheiros grandes **antes** do piloto regular.

## Segurança GitHub

- Excluir `.env`, credenciais, tokens, cookies, chaves e qualquer material privado.
- Não adicionar D:\AI\Biblioteca ao repositório nem subir toda a pasta como backup.
- Verificar alterações com `git status`, `git diff --cached` e revisão de segredos antes de cada push.
- O repositório esteve público no início; torná-lo privado não revoga clones já realizados.

## Etapas de validação

1. Inventariar biblioteca real sem a modificar e confirmar ligação ao catálogo Nexus de projetos elegíveis.
2. Configurar o caminho numa variável segura local.
3. Ler um asset fictício/autorizado e validar hash/manifesto.
4. Testar caminhos inválidos, junctions, ficheiros enormes e permissões insuficientes.
5. Integrar prévias dentro do Nexus usando bilhetes/rotas protegidas, nunca expor o disco diretamente.

Detalhes de segurança do preview: docs/auditoria-f0.md §3.4 e §6 F1.3.
