const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'data', 'constants.js');
const text = fs.readFileSync(filePath, 'utf8');
const lines = text.split(/\r?\n/);
const out = [];
for (let i = 0; i < lines.length; i++) {
  if (i >= 18 && i < 200) {
    out.push(`${i + 1}: ${lines[i]}`);
  }
}
const startIndex = text.indexOf('export const skills = [');
const endIndex = text.indexOf('export const experiences = [', startIndex);
out.push('START_INDEX=' + startIndex);
out.push('END_INDEX=' + endIndex);
out.push('START_LINE=' + (text.slice(0, startIndex).split(/\r?\n/).length));
out.push('END_LINE=' + (text.slice(0, endIndex).split(/\r?\n/).length));
fs.writeFileSync(path.join(__dirname, 'skills_inspect.txt'), out.join('\n'), 'utf8');
