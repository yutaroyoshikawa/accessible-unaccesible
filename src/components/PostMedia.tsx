"use client";

import { AppModeContext } from "@/modules/appModeContext";
import { ScreenReader } from "@capacitor/screen-reader";
import Image from "next/image";
import { useContext, useState, type FC } from "react";
import { SystemIcon } from "./SystemIcon";

type PostMediaProps = {
  accesibleAlt: string;
  unaccessibleAlt: string;
  imageSrc: string;
  width: number;
  height: number;
};

export const PostMedia: FC<PostMediaProps> = ({
  accesibleAlt,
  unaccessibleAlt,
  imageSrc,
  width,
  height,
}) => {
  const appMode = useContext(AppModeContext);

  const [isFav, setIsFav] = useState(false);

  const [isShowAlt, setIsShowAlt] = useState(true);

  const [isAccessibleMode, setIsAccessibleMode] = useState(false);

  const availableAlt = isAccessibleMode ? accesibleAlt : unaccessibleAlt;

  return (
    <div className="w-[400px]">
      <div className="grid gap-y-2">
        <div
          onClick={() => {
            if (appMode === "blind") {
              ScreenReader.speak({ value: availableAlt });
            }
          }}
          data-appmode={appMode}
          className='w-[400px] h-[400px] box-content overflow-hidden border-2 data-[appmode="surface"]:border-transparent rounded-lg data-[appmode="blind"]:border-sky-200 data-[appmode="blind"]:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_3px_#0af,0_0_5px_#0af,0_0_10px_#0af] transition data-[appmode="blind"]:cursor-pointer relative'
        >
          {appMode === "blind" && isShowAlt && (
            <p className="fixed text-slate-50 w-[400px]">{availableAlt}</p>
          )}
          <Image
            className='rounded-lg data-[appmode="blind"]:opacity-0 transition-opacity w-[400px] h-[400px] object-cover'
            data-appmode={appMode}
            src={imageSrc}
            width={width}
            height={height}
            alt={availableAlt}
          />
        </div>
        <div className="justify-self-end grid grid-cols-2 gap-x-2">
          <button
            type="button"
            onClick={() => setIsFav((prev) => !prev)}
            data-appmode={appMode}
            data-fav={isFav}
            className='text-4xl text-slate-700 data-[fav="true"]:text-rose-500 data-[appmode="blind"]:data-[fav="false"]:text-slate-50 transition-colors'
          >
            <SystemIcon
              icon={isFav ? "faHeart" : "faRegularHeart"}
              ariaLabel={isFav ? "お気に入りを外す" : "お気に入りにする"}
            />
          </button>
          <button
            type="button"
            onClick={() => setIsShowAlt((prev) => !prev)}
            data-appmode={appMode}
            className='text-4xl text-slate-700 data-[appmode="blind"]:text-slate-50 transition-colors'
          >
            <SystemIcon
              icon={isShowAlt ? "faCircleQuestion" : "faRegularCircleQuestion"}
              ariaLabel={isShowAlt ? "Alt を非表示" : "Alt を表示"}
            />
          </button>
        </div>
      </div>

      {isShowAlt && appMode === "surface" && (
        <div className="grid gap-y-4">
          <div>
            <div>
              <p
                data-appmode={appMode}
                className='text-slate-700 data-[appmode="blind"]:text-slate-50 transition-colors text-xl font-bold leading-tight mb-4'
              >
                画像の説明(ALT)
              </p>
            </div>
            <p
              data-appmode={appMode}
              className='text-slate-700 data-[appmode="blind"]:text-slate-50 transition-colors'
            >
              {availableAlt}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsAccessibleMode((prev) => !prev)}
            data-appmode={appMode}
            data-accessiblemode={isAccessibleMode}
            className='mx-auto data-[appmode="blind"]:hidden text-slate-700 data-[appmode="blind"]:text-slate-50 transition-colors h-12 min-w-56 px-6 flex justify-center items-center rounded-full nm-flat-gray-200-sm data-[accessiblemode="true"]:nm-concave-gray-200-sm'
          >
            {isAccessibleMode ? (
              "Undo"
            ) : (
              <div className="flex gap-x-2 items-center">
                <SystemIcon icon="faRotateRight" />
                Accessible
              </div>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
