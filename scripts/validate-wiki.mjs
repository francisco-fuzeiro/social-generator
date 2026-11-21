#!/usr/bin/env node
// Lint mínimo sem dependências; não valida JSON Schema semanticamente nem autoriza projetos.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const check=(test,msg)=>{if(!test)throw Error(msg)};
const s=JSON.parse(read('wiki/contratos/v1/project-knowledge.schema.json'));
check(s.$schema==='https://json-schema.org/draft/2020-12/schema','Draft inesperado');
const types=['ProjectKnowledgeProfile','DesignSystem','ContentMotionSystem','EditorialStrategy','KnowledgeSource','WikiProjectManifest'];
for(const t of types)check(s.$defs[t], 'Tipo ausente: '+t);
const manifest=s.$defs.WikiProjectManifest;
for(const field of ['socialProjectId','nexusProjectRef','approvedRevision','approvalRecordRef','documentaryValidation','sources','profile','designSystem','contentMotionSystem','editorialStrategy','wikiPages'])
 check(manifest.required.includes(field),'Campo obrigatório ausente: '+field);
check(manifest.properties.documentaryValidation.const==='passed','Dossier não validado');
function verifyRefs(v){
 if(v && typeof v==='object'){
  if(v.$ref){
   check(v.$ref.startsWith('#/'),'Referência externa: '+v.$ref);
   let node=s;
   for(const part of v.$ref.slice(2).split('/'))node=node?.[part.replace(/~1/g,'/').replace(/~0/g,'~')];
   check(node!==undefined,'Referência quebrada: '+v.$ref);
  }
  for(const value of Object.values(v))verifyRefs(value);
 }
}
verifyRefs(s);
const lines=read('docs/DECISOES.md').split('\n');
for(let n=62;n<=69;n++){
 const id='SG-D'+String(n).padStart(3,'0');
 check(lines.filter(l=>l.startsWith('| '+id+' |')).length===1,'Decisão inexistente/duplicada: '+id);
}
const projectPages=fs.readdirSync(path.join(root,'wiki/projetos'));
check(projectPages.length===1&&projectPages[0]==='index.md','Existem dossiers sem onboarding aprovado');
const md=[];
function walk(dir){
 for(const e of fs.readdirSync(dir,{withFileTypes:true})){
  const f=path.join(dir,e.name);
  if(e.isDirectory())walk(f);
  else if(e.name.endsWith('.md'))md.push(f);
 }
}
walk(path.join(root,'wiki'));
let links=0;
for(const f of [...md,path.join(root,'README.md')]){
 const content=fs.readFileSync(f,'utf8');
 for(const match of content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)){
  const dest=match[1].split('#')[0].trim();
  if(!dest||/^(https?:|mailto:)/.test(dest))continue;
  const abs=path.resolve(path.dirname(f),decodeURIComponent(dest));
  check(abs.startsWith(root+path.sep),'Link fora do repo: '+dest);
  check(fs.existsSync(abs),'Link quebrado: '+path.relative(root,f)+' -> '+dest);
  links++;
 }
 check(!/ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{30,}|sk-[A-Za-z0-9]{30,}|-----BEGIN (RSA |OPENSSH )?PRIVATE KEY-----/.test(content),'Segredo potencial: '+f);
}
console.log('PASS SG-W001: '+types.length+' tipos, 8 decisões, '+md.length+' páginas Wiki, '+links+' links, 0 dossiers.');
