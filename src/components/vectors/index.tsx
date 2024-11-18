import { motion } from "framer-motion";
import { forwardRef, type SVGProps } from "react";

type IProps = SVGProps<SVGSVGElement>;

const Cloud = forwardRef<SVGSVGElement, IProps>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="79"
      height="48"
      viewBox="0 0 79 48"
      {...props}
    >
      <path
        d="M22.5 48c5.224 0 9.756-2.968 12-7.31a13.5 13.5 0 0 0 12 7.31C53.956 48 60 41.956 60 34.5q0-.339-.017-.675A13.45 13.45 0 0 0 65.5 35C72.956 35 79 28.956 79 21.5S72.956 8 65.5 8a13.44 13.44 0 0 0-7.365 2.184A13.48 13.48 0 0 0 47.5 5a13.44 13.44 0 0 0-6.39 1.606A13.49 13.49 0 0 0 29.5 0a13.49 13.49 0 0 0-11.156 5.895A13.5 13.5 0 0 0 13.5 5C6.044 5 0 11.044 0 18.5c0 6.015 3.933 11.11 9.368 12.856A13.5 13.5 0 0 0 9 34.5C9 41.956 15.044 48 22.5 48"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
});
Cloud.displayName = "Cloud";
export const MotionCloud = motion(Cloud);

const Star = forwardRef<SVGSVGElement, IProps>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="3"
      viewBox="0 0 3 3"
      {...props}
    >
      <path
        d="M1.987 1.013 1.5 0l-.487 1.013L0 1.5l1.013.487L1.5 3l.487-1.013L3 1.5z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
});
Star.displayName = "star";
export const StarCloud = motion(Star);
