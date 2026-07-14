const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'data', 'constants.js');
const text = fs.readFileSync(filePath, 'utf8');
const startMarker = 'export const skills = [';
const nextMarker = 'export const experiences = [';
const startIndex = text.indexOf(startMarker);
if (startIndex === -1) {
  console.error('Could not find skills start marker');
  process.exit(1);
}
const afterStart = text.slice(startIndex + startMarker.length);
let depth = 1;
let endIndex = startIndex + startMarker.length;
for (let i = startIndex + startMarker.length; i < text.length; i += 1) {
  const ch = text[i];
  if (ch === '[') depth += 1;
  else if (ch === ']') depth -= 1;
  if (depth === 0) {
    endIndex = i + 1;
    break;
  }
}
if (depth !== 0) {
  console.error('Bracket matching failed: skills array not closed properly');
  process.exit(1);
}
const rest = text.slice(endIndex);
const experiencesIndex = rest.indexOf(nextMarker);
if (experiencesIndex === -1) {
  console.error('Could not find experiences start marker after skills array');
  process.exit(1);
}
const replaceStart = startIndex;
const replaceEnd = endIndex + experiencesIndex;
const before = text.slice(0, replaceStart);
const after = text.slice(replaceEnd);
const replacement = `export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "REST API",
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
      },
    ],
  },
];

`;
fs.writeFileSync(filePath, before + replacement + after, 'utf8');
console.log('Skills block fixed and replaced successfully');
`;}