"use client";

import { AppModeContext } from "@/modules/appModeContext";
import { ReactNode, useContext, type FC } from "react";

export const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const appMode = useContext(AppModeContext);

  return (
    <div
      data-appmode={appMode}
      className='w-full h-full bg-gray-200 text-gray-700 p-6 antialised data-[appmode="blind"]:bg-slate-700 data-[appmode="blind"]:text-white transition-colors'
    >
      {children}
    </div>
  );
};
