import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="max-w-screen-lg mx-auto  h-full">{children}</div>;
};

export default Container;
