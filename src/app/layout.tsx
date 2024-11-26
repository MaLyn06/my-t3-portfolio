

import { ReactNode } from "react";
import { Header, SideDrawer } from "./_components";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
      </head>
      <body className="flex flex-col h-screen">
        <Header />

        <div className="flex flex-1">
          <SideDrawer />

          <main className="flex-1 p-4 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
