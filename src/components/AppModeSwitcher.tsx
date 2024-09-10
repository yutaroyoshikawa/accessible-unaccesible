import { type AppMode } from "@/modules/appModeContext";
import { type FC } from "react";
import { SystemIcon } from "./SystemIcon";

const appModeLabel = {
  surface: "表層メディアモード",
  blind: "不可視メディアモード",
} as const satisfies Record<AppMode, string>;

export const AppModeSwichButton: FC<{
  onClick: () => void;
  appMode: AppMode;
}> = ({ onClick, appMode }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className='w-24 h-24 p-6 flex justify-center items-center rounded-full nm-convex-gray-200-xs data-[appmode="blind"]:nm-convex-slate-600-sm cursor-pointer bg-transparent text-7xl text-slate-700 data-[appmode="blind"]:text-slate-50 transition-colors'
      data-appmode={appMode}
    >
      <SystemIcon icon="faGhost" ariaLabel={appModeLabel[appMode]} />
    </button>
  );
};
