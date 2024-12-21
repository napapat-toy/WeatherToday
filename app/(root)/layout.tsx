import React from "react";

const Layout = ({ children }: React.PropsWithChildren) => {
  return <main className="h-screen w-full">{children}</main>;
};

export default Layout;
