import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";


const ReferenceDetails = () => {
  return (
    <>
      <Card className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 p-4">
          <CardHeader>
            <CardTitle>Kit Mikhael Bagares</CardTitle>
            <CardDescription>DNA Micro Software Inc.</CardDescription>
            <CardDescription>Functional Manager</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center">
            <FaPhone className="mr-2" />
            Phone: +63 945 427 8134
          </CardContent>
          <CardContent className="flex items-center">
            <FaEnvelope className="mr-2" />
            Email: kityoubagares94@gmail.com
          </CardContent>
        </div>
        {/* Second Column */}
        <div className="w-full md:w-1/2 p-4">
        <CardHeader>
            <CardTitle>Ray Robinson Gonzaga</CardTitle>
            <CardDescription>Accenture Inc.</CardDescription>
            <CardDescription>Senior Software Engineer</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center">
            <FaPhone className="mr-2" />
            Phone: +63 905 332 8257
          </CardContent>
          <CardContent className="flex items-center">
            <FaEnvelope className="mr-2" />
            Email: rr.gonzaga1697@gmail.com
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default ReferenceDetails;
