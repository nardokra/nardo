import React from "react";

export const Button = ({ onClick }: { onClick: () => void }) => {
  let thisValue = true;
  console.log(thisValue);

  React.useEffect(() => {
    onClick();
  }, [onClick]);

  return <button>Button</button>;
};
