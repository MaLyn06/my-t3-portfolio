import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
// Importing icons from react-icons
import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaHandshake } from "react-icons/fa";

const WhatIDoDetails = () => {
  return (
    <Card className="flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-3/4 p-4">
        <CardHeader>
          <CardTitle>What I Do</CardTitle>
          <CardDescription>As a Software Engineer</CardDescription>
        </CardHeader>

        {/* Details About Skills and Expertise */}
        <CardContent>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Skills and Expertise</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaCode className="mr-2 text-xl text-gray-500" />
                <span>Developing robust and scalable web applications using frameworks like React, Next.js, and NestJS.</span>
              </li>
              <li className="flex items-center">
                <FaDatabase className="mr-2 text-xl text-gray-500" />
                <span>Designing and managing relational and non-relational databases (e.g., PostgreSQL, MongoDB).</span>
              </li>
              <li className="flex items-center">
                <FaLaptopCode className="mr-2 text-xl text-gray-500" />
                <span>Building APIs and microservices with a focus on efficiency and security.</span>
              </li>
              <li className="flex items-center">
                <FaHandshake className="mr-2 text-xl text-gray-500" />
                <span>Engaged directly with clients to gather requirements,
provide updates, and ensure solutions met their
needs, enhancing client satisfaction and project
alignment.
</span>
              </li>
            </ul>
          </div>

          {/* Recent Projects */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Recent Projects</h2>
            <ul className="space-y-4">
              <li>
                <strong>Project: GoIntegration</strong>
                <p className="text-sm text-gray-600">
                  Developed and maintained an integration platform, ensuring seamless data synchronization and enhancing system interoperability.
                </p>
              </li>
              <li>
                <strong>Project: MyGo</strong>
                <p className="text-sm text-gray-600">
                  Implemented responsive front-end components using the T3 stack and Tailwind CSS, focusing on improving user experience.
                </p>
              </li>
              <li>
                <strong>OTA Standard</strong>
                <p className="text-sm text-gray-600">
                Developed an integration platform for a travel client,
ensuring compliance with XML OTA standards for
improved system interoperability
                </p>
              </li>
            </ul>
          </div>

          {/* Personal Values */}
          <div>
            <h2 className="text-lg font-semibold mb-2">My Approach</h2>
            <p className="text-sm text-gray-600">
              I am passionate about delivering high-quality software solutions that solve real-world problems. Collaboration,
              innovation, and continuous learning are at the core of my professional philosophy.
            </p>
          </div>
        </CardContent>

        <CardFooter>
          <p>Excited to tackle challenges and build impactful solutions!</p>
        </CardFooter>
      </div>
    </Card>
  );
};

export default WhatIDoDetails;
