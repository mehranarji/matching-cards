import clsx from "clsx";
import { FC } from "react";

export interface CardProps {
    children: React.ReactNode;
    isFlipped?: boolean;
    isCorrect?: boolean;
    onSelect?: () => void;
}

const Card: FC<CardProps> = ({ children, isFlipped, isCorrect, onSelect }) => {
    return (
        <div
            className="aspect-square relative select-none cursor-pointer"
            onClick={() => onSelect?.()}
        >
            {/* card front */}
            <div
                className={clsx(
                    "bg-white",
                    "shadow-md",
                    "rounded-3xl backface-hidden",
                    "absolute inset-0",
                    "transition-transform active:scale-95",
                    "text-6xl lg:text-9xl flex items-center justify-center",
                    "backdrop-blur-lg",
                    {
                        flip: isFlipped,
                    }
                )}
            ></div>

            {/* card back */}
            <div
                className={clsx(
                    "bg-white",
                    "border-white shadow-lg",
                    "rounded-2xl backface-hidden",
                    "absolute inset-0",
                    "transition-all active:scale-95",
                    "backdrop-blur-lg",
                    "p-8",
                    {
                        "before:bg-green-600 before:h-2 before:w-2 before:absolute before:bottom-2 before:left-1/2": isCorrect,
                        "before:rounded-full before:-translate-x-1/2": isCorrect,
                        // "from-slate-100 to-slate-200 bg-gradient-to-tr": !isCorrect,
                        // "bg-green-100 shadow-green-400": isCorrect,
                        flip: !isFlipped,
                    }
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default Card;
