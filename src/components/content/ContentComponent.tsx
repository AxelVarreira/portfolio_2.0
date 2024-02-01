import React, { ReactElement } from "react";

interface Props {
  color: string;
  children: Array<ReactElement> | ReactElement;
}

const ContentComponent: React.FC<Props> = ({ color, children }) => {
  return (
    <div className={color + " container  mx-auto px-72 py-32"}>{children}</div>
  );
};

export default ContentComponent;
