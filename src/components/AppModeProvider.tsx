"use client";

import {
  AppMode,
  AppModeContext,
  appModeDefaultValue,
} from "@/modules/appModeContext";
import { type ReactNode, type FC, useState } from "react";
import { AppModeSwichButton } from "./AppModeSwitcher";

export const AppModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [appMode, setAppMode] = useState<AppMode>(appModeDefaultValue);

  return (
    <AppModeContext.Provider value={appMode}>
      <div className="relative h-full">
        <div className="fixed top-8 right-16">
          <AppModeSwichButton
            onClick={() =>
              setAppMode((prev) => (prev === "surface" ? "blind" : "surface"))
            }
            appMode={appMode}
          />
        </div>
        <div className="h-full">{children}</div>
      </div>
    </AppModeContext.Provider>
  );
};
