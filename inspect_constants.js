const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'data', 'constants.js');
const text = fs.readFileSync(filePath, 'utf8');
const markers = {
  skillsStart: text.indexOf('export const skills = ['),
  experiencesStart: text.indexOf('export const experiences = ['),
  materialUIStart: text.indexOf('name: "Material UI"'),
  flutterStart: text.indexOf('name: "Flutter"'),
  extraCloseStart: text.indexOf('  };\n\nexport const experiences = ['),
};
const out = Object.entries(markers).map(([key, val]) => `${key}=${val}`).join('\n') + '\n';
fs.writeFileSync(path.join(__dirname, 'inspect_constants_out.txt'), out);
