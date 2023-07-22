import classnames from "classnames";
import { FC } from "react";

export interface CardProps {
    children: React.ReactNode;
    isFlipped?: boolean;
    isCorrect?: boolean;
    className?: string;
    onSelect?: () => void;
}

const Card: FC<CardProps> = ({ children, className, isFlipped, isCorrect, onSelect }) => {
    return (
        <button
            className={classnames("aspect-square relative select-none cursor-pointer", className)}
            onClick={() => onSelect?.()}
        >
            {/* card front */}
            <div
                className={classnames(
                    "bg-white dark:bg-slate-800",
                    "shadow-md",
                    "rounded-xl xl:rounded-3xl backface-hidden",
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
                className={classnames(
                    "bg-white dark:bg-slate-800",
                    "border-white shadow-lg",
                    "rounded-xl xl:rounded-3xl backface-hidden",
                    "absolute inset-0",
                    "transition-all active:scale-95",
                    "backdrop-blur-lg",
                    "p-3 xl:p-6",
                    {
                        flip: !isFlipped,
                        "opacity-40": isCorrect,
                    }
                )}
            >
                    {children}
            </div>
        </button>
    );
};

export default Card;
