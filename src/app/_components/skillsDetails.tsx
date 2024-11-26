import { FaReact, FaNodeJs,  FaDatabase, FaGithub, FaGitlab } from 'react-icons/fa'; 
import { DiPostgresql } from 'react-icons/di'; 
import { SiTypescript, SiNestjs, SiPostman, SiGraphql, SiNextdotjs, SiJavascript } from 'react-icons/si'; 
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"; 

const Skills = () => {
  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex items-center">
            <FaReact className="mr-2 text-xl text-blue-600" />
            <p className="text-lg">React</p>
          </div>
          <div className="flex items-center">
            <FaNodeJs className="mr-2 text-xl text-green-500" />
            <p className="text-lg">Node.js</p>
          </div>
          <div className="flex items-center">
            <FaDatabase className="mr-2 text-xl text-orange-500" />
            <p className="text-lg">SQL / NoSQL</p>
          </div>
          <div className="flex items-center">
            <SiTypescript className="mr-2 text-xl text-blue-500" />
            <p className="text-lg">TypeScript</p>
          </div>
          <div className="flex items-center">
            <SiJavascript className="mr-2 text-xl text-blue-500" />
            <p className="text-lg">JavaScript</p>
          </div>
          <div className="flex items-center">
            <SiNestjs className="mr-2 text-xl text-red-600" />
            <p className="text-lg">NestJS</p>
          </div>
          <div className="flex items-center">
            <SiNextdotjs className="mr-2 text-xl text-pink-600" />  
            <p className="text-lg">NextJS</p>
          </div>
          <div className="flex items-center">
            <FaGithub className="mr-2 text-xl text-gray-900" />
            <p className="text-lg">GitHub</p>
          </div>
          <div className="flex items-center">
            <FaGitlab className="mr-2 text-xl text-orange-600" />
            <p className="text-lg">GitLab</p>
          </div>
          <div className="flex items-center">
            <SiPostman className="mr-2 text-xl text-orange-500" />
            <p className="text-lg">Postman</p>
          </div>
          <div className="flex items-center">
            <DiPostgresql className="mr-2 text-xl text-blue-600" />
            <p className="text-lg">PostgreSQL</p>
          </div>
          <div className="flex items-center">
            <SiGraphql className="mr-2 text-xl text-pink-600" />
            <p className="text-lg">GraphQL</p>
          </div>
          
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
