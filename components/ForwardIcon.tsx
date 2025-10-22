'use client';

import { motion } from 'framer-motion';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface RotateCWIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface RotateCWIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const RotateCWIcon = forwardRef<RotateCWIconHandle, RotateCWIconProps>(
  ({ onClick, className, size = 28, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;
      return {
        startAnimation: () => setRotation(prev => prev + 360),
        stopAnimation: () => setRotation(0),
      };
    });

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          setRotation(prev => prev + 360);
          setIsClicked(true);
          // Reset background highlight after 200ms
          setTimeout(() => setIsClicked(false), 200);
        }
        onClick?.(e);
      },
      [onClick]
    );

    return (
      <div
        className={cn(
          "relative rounded-full transition-all duration-200 p-4",
          isClicked ? "bg-white/20 scale-90" : "bg-transparent scale-100",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* Rotating part - only the circular arrow */}
          <motion.g
            animate={{ rotate: `${rotation}deg` }}
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
          >
            <path d="M21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3C14.52 3 16.93 4 18.74 5.74L21 8M21 8V5M21 8H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.g>

          {/* Fixed part - the "10" text that doesn't rotate */}
          <g>
            <path d="M15.4877 9.92728H12.8515L12.6951 11.9748H12.7478L13.181 11.3259C13.4498 11.2332 13.7449 11.1824 14.0571 11.1824C15.219 11.1909 15.9998 11.8232 16 12.9943C16 14.2078 15.141 15 13.71 15C12.7822 15 12.0537 14.6549 11.594 14.0147L12.1924 13.3401C12.5654 13.812 13.0426 14.124 13.6757 14.124C14.4733 14.1238 14.8198 13.6688 14.8199 13.0285C14.8199 12.3964 14.4731 12.0679 13.8313 12.0679C13.3804 12.0679 12.869 12.2281 12.4701 12.4555L11.6977 12.2361L11.9411 9H15.4877V9.92728Z" fill="white"/>
            <path d="M10.3761 14.8992H9.24868V10.2056H9.21441C8.97156 10.5595 8.54632 10.8289 8 10.8289V9.90166C8.55505 9.90166 9.1014 9.45506 9.32689 9H10.3761V14.8992Z" fill="white"/>
          </g>
        </svg>
      </div>
    );
  }
);

RotateCWIcon.displayName = 'RotateCWIcon';

export { RotateCWIcon };
