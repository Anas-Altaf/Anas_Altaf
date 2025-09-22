import React from "react";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
      {children}
    </h1>
  );
};

export default Heading;
