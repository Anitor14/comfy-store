"use client";
import { SessionProvider } from "next-auth/react";

// making available the sessions object to all the children.
const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
