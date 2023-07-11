import clsx from "clsx";
import { FC } from "react";

export interface CardProps {
    emoji: string;
    isFlipped?: boolean;
    onSelect?: () => void;
}

const Card: FC<CardProps> = ({ emoji, isFlipped, onSelect }) => {
    return (
        <div
            className="aspect-square relative select-none cursor-pointer"
            onClick={() => onSelect?.()}
        >
            {/* card front */}
            <div
                className={clsx(
                    "from-red-400 to-red-300 bg-gradient-to-t",
                    "rounded-2xl backface-hidden",
                    "absolute inset-0",
                    "transition-transform active:scale-95",
                    "text-6xl lg:text-9xl flex items-center justify-center",
                    {
                        flip: isFlipped,
                    }
                )}
            ></div>

            {/* card back */}
            <div
                className={clsx(
                    "bg-green-400",
                    "rounded-2xl backface-hidden",
                    "absolute inset-0",
                    "transition-transform active:scale-95",
                    "text-6xl lg:text-9xl flex items-center justify-center",
                    {
                        flip: !isFlipped,
                    }
                )}
            >
                {emoji}
            </div>
        </div>
    );
};

export default Card;
