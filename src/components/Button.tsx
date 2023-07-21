import classnames from "classnames";
import { ComponentPropsWithoutRef, FC } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    isActive?: boolean;
}

const Button: FC<ButtonProps> = ({ children, className, isActive, ...rest }) => {
    return (
        <button
            className={classnames(
                "px-4 py-2 rounded-lg text-lg",
                "transition-colors",
                {
                    "bg-slate-200 text-black dark:bg-slate-700 dark:text-white": !isActive,
                    "hover:bg-slate-200/60 dark:hover:bg-slate-700/60": !isActive,

                    "bg-sky-600 text-white dark:bg-sky-700": isActive,
                    "hover:bg-sky-600/60 dark:hover:bg-sky-700/60": isActive,
                },
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
