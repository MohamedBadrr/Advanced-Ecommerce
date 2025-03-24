
import React, { Suspense } from "react";
import LootieHandler from "./LootieHandler";

type SuspenseHandlerProps = {
  children: React.ReactNode;
};

const SuspenseHandler = ({ children }: SuspenseHandlerProps) => {
  return (
    <Suspense
      fallback={
        <LootieHandler type="loading" message="loading Please wait...." />
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseHandler;
