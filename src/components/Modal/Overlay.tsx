import React, { ReactElement } from "react";

type OverlayType = {
  className?: string;
  onClick?: () => void;
};

export const Overlay: React.FC<OverlayType> = ({
  className = "",
  onClick,
}): ReactElement => {
  return <div onClick={onClick} className={`${className} overlayWrapper`} />;
};
