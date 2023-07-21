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
                    "bg-slate-200 text-black": !isActive,
                    "hover:bg-slate-300": !isActive,

                    "bg-sky-600 text-white": isActive,
                    "hover:bg-sky-700": isActive,
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
