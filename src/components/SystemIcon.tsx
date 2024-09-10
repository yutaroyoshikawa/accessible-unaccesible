import { FC } from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faGhost,
  faRotateRight,
  faHeart,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faRegularHeart,
  faCircleQuestion as faRegularCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

config.autoAddCss = false;

const icons = {
  faGhost,
  faRotateRight,
  faHeart,
  faRegularHeart,
  faCircleQuestion,
  faRegularCircleQuestion,
} as const;

type SystemIconProps = {
  icon: keyof typeof icons;
  ariaLabel?: string;
};

export const SystemIcon: FC<SystemIconProps> = ({ icon, ariaLabel }) => {
  return (
    <FontAwesomeIcon
      icon={icons[icon]}
      aria-label={ariaLabel}
      className="pointer-events-none"
    />
  );
};
