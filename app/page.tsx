import { RotateCWIcon } from "@/components/ForwardIcon"
import { RotateCCWIcon } from "@/components/RewindIcon"
import { PlayPauseIcon } from "@/components/PlayPauseIcon"

export default function IconAnimationDemo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="flex items-center gap-8">
          {/* Rewind Icon */}
          <div className="flex flex-col items-center gap-4">
            <RotateCCWIcon size={160} className="text-white cursor-pointer" />
            <p className="text-neutral-400 text-sm select-none">Rewind</p>
          </div>

          {/* Play/Pause Icon */}
          <div className="flex flex-col items-center gap-4">
            <PlayPauseIcon size={160} className="text-white cursor-pointer" />
            <p className="text-neutral-400 text-sm select-none">Play/Pause</p>
          </div>

          {/* Forward Icon */}
          <div className="flex flex-col items-center gap-4">
            <RotateCWIcon size={160} className="text-white cursor-pointer" />
            <p className="text-neutral-400 text-sm select-none">Forward</p>
          </div>
        </div>
    </div>
  )
}
