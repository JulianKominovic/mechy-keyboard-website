"use client";
import React, { useState } from "react";

const OnlyClientSide = ({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) => {
  const [isClient, setIsClient] = useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? <>{children}</> : fallback;
};

export default OnlyClientSide;
