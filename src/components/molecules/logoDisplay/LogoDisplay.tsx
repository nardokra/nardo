import { ReactNode } from "react";

// Utils
import cx from "classnames";

type LogoDisplayType = { children: ReactNode };

export const LogoDisplay = ({ children }: LogoDisplayType) => {
  const wrapperClasses = cx(
    "flex items-center justify-center",
    "w-full h-[8rem] p-2 border-2",
    "bg-stone-800 rounded-lg"
  );

  return <div className={wrapperClasses}>{children}</div>;
};
