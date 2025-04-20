// src/components/home/Skills.jsx
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiGit,
  SiTestinglibrary,
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa'; // RESTful API icon

const skills = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React.js', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'RESTful API', icon: FaServer },
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit },
  { name: 'Jest / Testing', icon: SiTestinglibrary },
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-4xl font-bold">Skills</h1>
        <p className="text-gray-600">
          These are the core technologies I use to build modern web
          applications.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {skills.map(({ name, icon: Icon }, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-md transition-transform hover:scale-105 hover:shadow-lg dark:bg-gray-800"
          >
            <Icon className="text-2xl text-blue-600 dark:text-blue-400" />
            <span className="text-lg font-medium text-gray-800 dark:text-gray-100">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
