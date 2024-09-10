import { createContext } from "react";

export type AppMode = "surface" | "blind";

export const appModeDefaultValue: AppMode = "blind";

export const AppModeContext = createContext<AppMode>(appModeDefaultValue);
