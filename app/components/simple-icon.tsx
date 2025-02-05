import React from "react";
import { type SimpleIcon } from "simple-icons";

type Props = {
  simpleIcon: SimpleIcon;
} & React.SVGProps<SVGSVGElement>;

const SimpleIcon = ({ simpleIcon, ...rest }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...rest}
    >
      <path d={simpleIcon.path} />
    </svg>
  );
};

export default SimpleIcon;
