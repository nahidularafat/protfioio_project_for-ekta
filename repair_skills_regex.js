const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'data', 'constants.js');
const text = fs.readFileSync(filePath, 'utf8');
const startMarker = 'export const skills = [';
const experienceMarker = 'export const experiences = [';
const startIndex = text.indexOf(startMarker);
if (startIndex === -1) {
  throw new Error('skills start marker not found');
}
let depth = 0;
let endIndex = -1;
for (let i = startIndex; i < text.length; i += 1) {
  const ch = text[i];
  if (ch === '[') depth += 1;
  else if (ch === ']') depth -= 1;
  if (depth === 0 && i > startIndex) {
    endIndex = i + 1;
    break;
  }
}
if (endIndex === -1) {
  throw new Error('Could not match closing bracket for skills array');
}
const nextIndex = text.indexOf(experienceMarker, endIndex);
if (nextIndex === -1) {
  throw new Error('experiences marker not found after skills array');
}
const replacement = `export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
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
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Python",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "REST API",
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
      },
    ],
  },
];

`;
const updated = text.slice(0, startIndex) + replacement + text.slice(nextIndex);
fs.writeFileSync(filePath, updated, 'utf8');
console.log('skills replaced');
`