import React from "react";
import Navigation from "./Navigation";

interface props {
  title: string;
  canBack?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children, ...props }) => {
  return (
    <section>
      <Navigation {...props} />
      <article className='bg-slate-800'>{children}</article>
    </section>
  );
};

export default Layout;
