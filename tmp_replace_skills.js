const fs = require('fs');
const path = 'src/data/constants.js';
const text = fs.readFileSync(path, 'utf8');
const startMarker = 'export const skills = [';
const endMarker = 'export const experiences = [';
const start = text.indexOf(startMarker);
const end = text.indexOf(endMarker, start);
if (start === -1 || end === -1) {
  throw new Error('Could not locate skills markers');
}
const replacement = `export const skills = [
  {
    title: "Core Technologies",
    skills: [
      {
        name: "Python",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "C/C++",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "JavaScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "MERN Stack",
        image: "https://img.icons8.com/color/48/000000/mern.png",
      },
      {
        name: "Django",
        image: "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
      },
      {
        name: "Flask",
        image: "https://flask.palletsprojects.com/en/2.2.x/_images/flask-logo.png",
      },
      {
        name: "SQL",
        image: "https://img.icons8.com/color/48/000000/sql.png",
      },
    ],
  },
  {
    title: "Web & Backend",
    skills: [
      {
        name: "React.js",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Vite",
        image: "https://vitejs.dev/logo.svg",
      },
      {
        name: "Tailwind CSS",
        image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Node.js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express.js",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      },
      {
        name: "MongoDB",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Mongoose",
        image: "https://avatars.githubusercontent.com/u/7558875?s=200&v=4",
      },
      {
        name: "REST API",
        image: "https://img.icons8.com/ios-filled/50/000000/api.png",
      },
      {
        name: "JWT Authentication",
        image: "https://cdn.iconscout.com/icon/free/png-256/jwt-3521603-2945128.png",
      },
    ],
  },
  {
    title: "AI & Deep Learning",
    skills: [
      {
        name: "Machine Learning",
        image: "https://img.icons8.com/color/48/000000/machine-learning.png",
      },
      {
        name: "Deep Learning",
        image: "https://img.icons8.com/fluency/48/000000/artificial-intelligence.png",
      },
      {
        name: "CNN",
        image: "https://img.icons8.com/color/48/000000/neural-network.png",
      },
      {
        name: "CNN-LSTM",
        image: "https://img.icons8.com/fluency/48/000000/artificial-intelligence.png",
      },
      {
        name: "CNN-BiLSTM",
        image: "https://img.icons8.com/fluency/48/000000/artificial-intelligence.png",
      },
      {
        name: "CNN-GRU",
        image: "https://img.icons8.com/fluency/48/000000/artificial-intelligence.png",
      },
      {
        name: "CNN-Transformer",
        image: "https://img.icons8.com/fluency/48/000000/artificial-intelligence.png",
      },
      {
        name: "Attention",
        image: "https://img.icons8.com/color/48/000000/brain.png",
      },
      {
        name: "YOLOv8",
        image: "https://img.icons8.com/ios-filled/50/000000/object-detection.png",
      },
      {
        name: "ECG Signal Processing",
        image: "https://img.icons8.com/color/48/000000/heart-with-pulse.png",
      },
      {
        name: "Tabular Data Analysis",
        image: "https://img.icons8.com/color/48/000000/data-sheet.png",
      },
      {
        name: "Image Processing",
        image: "https://img.icons8.com/color/48/000000/image-processing.png",
      },
      {
        name: "Model Evaluation",
        image: "https://img.icons8.com/color/48/000000/statistics.png",
      },
    ],
  },
  {
    title: "Hardware & IoT",
    skills: [
      {
        name: "Arduino",
        image: "https://www.arduino.cc/en/uploads/Trademark/ArduinoCommunityBadge_120px.png",
      },
      {
        name: "ESP32",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/ESP32_logo.svg",
      },
      {
        name: "ESP32-CAM",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/ESP32_logo.svg",
      },
      {
        name: "RFID",
        image: "https://img.icons8.com/color/48/000000/rfid-tag.png",
      },
      {
        name: "Sensors",
        image: "https://img.icons8.com/color/48/000000/sensor.png",
      },
      {
        name: "Relay Module",
        image: "https://img.icons8.com/color/48/000000/relay.png",
      },
      {
        name: "Bluetooth Module",
        image: "https://img.icons8.com/color/48/000000/bluetooth.png",
      },
      {
        name: "IoT Sensor Integration",
        image: "https://img.icons8.com/color/48/000000/internet-of-things.png",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "GitHub",
        image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Version Control",
        image: "https://img.icons8.com/color/48/000000/version-control.png",
      },
      {
        name: "MS Office",
        image: "https://img.icons8.com/color/48/000000/microsoft-office-2019--v1.png",
      },
      {
        name: "Google Workspace",
        image: "https://img.icons8.com/color/48/000000/google-drive--v1.png",
      },
      {
        name: "Manus AI",
        image: "https://img.icons8.com/fluency/48/000000/artificial-intelligence.png",
      },
    ],
  },
];
`;
const newText = text.slice(0, start) + replacement + text.slice(end);
fs.writeFileSync(path, newText, 'utf8');
console.log('Skills section replaced');
