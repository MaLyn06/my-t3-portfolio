import { FaCertificate } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiGraduateCap } from 'react-icons/gi'

const EducationDetails = () => {
  return (
    <>
      <Card className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 p-4">
          <CardHeader>
          <CardTitle className="flex items-center">
          {/* University Logo */}
          <Image
            src="/images/usclogo.png" // Path to the logo image
            alt="University of San Carlos"
            width={50} // Adjust width and height as needed
            height={50}
            className="mr-2" // Adds space between logo and text
          />
          University of San Carlos
        </CardTitle>
        <CardDescription>
  <span className="font-bold">Address: </span>9W27+R8R, Sitio Nasipit, Brgy, Cebu City
</CardDescription>
            
          </CardHeader>
          <CardContent className="flex items-center">
            <FaCertificate className="mr-2" />
            Certificate of Computer Technology
          </CardContent>
          <CardContent className="flex items-center">
            <AiOutlineCalendar className="mr-2" />
            2018 - 2021
          </CardContent>
        </div>
        {/* Second Column */}
        <div className="w-full md:w-1/2 p-4">
        <CardHeader>
          <CardTitle className="flex items-center">
          {/* University Logo */}
          <Image
            src="/images/pnlogo.png" // Path to the logo image
            alt="Passerelles Numériques"
            width={50} // Adjust width and height as needed
            height={50}
            className="mr-2" // Adds space between logo and text
          />
          Passerelles Numériques
        </CardTitle>
        <CardDescription>
  <span className="font-bold">Address: </span>Lot 19, The Bird, Blk. 2 New Era, Cebu City, 6000 Cebu
</CardDescription>
            
          </CardHeader>
          <CardContent className="flex items-center">
            <GiGraduateCap className="mr-2" />
            PN Scholar
          </CardContent>
          <CardContent className="flex items-center">
            <AiOutlineCalendar className="mr-2" />
            2018 - 2021
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default EducationDetails;
