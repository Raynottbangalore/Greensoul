const fs = require('fs');
const path = require('path');
const directory = 'd:/works/Greensoul/src/pages';
for (const file of fs.readdirSync(directory)) {
  if (!file.endsWith('.jsx')) continue;
  const fp = path.join(directory, file);
  let content = fs.readFileSync(fp, 'utf8');
  const usesRef = content.includes('useRef(');
  const usesState = content.includes('useState(');
  const usesEffect = content.includes('useEffect(');
  let imports = [];
  if (usesRef) imports.push('useRef');
  if (usesState) imports.push('useState');
  if (usesEffect) imports.push('useEffect');
  let reactImportLine = `import React${imports.length > 0 ? `, { ${imports.join(', ')} }` : ''} from 'react';`;
  content = content.replace(/import\s+React.*?from\s+['"]react['"];?/g, reactImportLine);
  fs.writeFileSync(fp, content, 'utf8');
}
console.log('Fixed imports!');
