'use client';

import { useState } from 'react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle } from 'react';
import { cn } from '@/lib/utils';

export interface PlayPauseIconHandle {
  toggle: () => void;
  setPlaying: (playing: boolean) => void;
}

interface PlayPauseIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PlayPauseIcon = forwardRef<PlayPauseIconHandle, PlayPauseIconProps>(
  ({ onClick, className, size = 28, ...props }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const toggle = useCallback(() => {
      setIsPlaying(prev => !prev);
    }, []);

    const setPlaying = useCallback((playing: boolean) => {
      setIsPlaying(playing);
    }, []);

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
      toggle,
      setPlaying,
    }));

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        toggle();
        setIsClicked(true);
        // Reset background highlight after 200ms
        setTimeout(() => setIsClicked(false), 200);
        onClick?.(e);
      },
      [toggle, onClick]
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
          {isPlaying ? (
            // Pause icon
            <>
              <path d="M9 3.25C9.41421 3.25 9.75 3.58579 9.75 4V20C9.75 20.4142 9.41421 20.75 9 20.75C8.58579 20.75 8.25 20.4142 8.25 20V4C8.25 3.58579 8.58579 3.25 9 3.25Z" fill="white"/>
              <path d="M15 3.25C15.4142 3.25 15.75 3.58579 15.75 4V20C15.75 20.4142 15.4142 20.75 15 20.75C14.5858 20.75 14.25 20.4142 14.25 20V4C14.25 3.58579 14.5858 3.25 15 3.25Z" fill="white"/>
            </>
          ) : (
            // Play icon
            <path d="M6 5.86992C6 4.42578 7.57027 3.53606 8.81348 4.24883L8.8125 4.24981L19.3281 10.1902H19.334L19.5039 10.284C20.8541 11.0327 20.841 12.9478 19.5098 13.702L19.5088 13.7029L8.80957 19.7527C7.55852 20.4605 6.00014 19.5741 6 18.1297V5.86992Z" fill="white"/>
          )}
        </svg>
      </div>
    );
  }
);

PlayPauseIcon.displayName = 'PlayPauseIcon';

export { PlayPauseIcon };
