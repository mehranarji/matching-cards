import classnames from "classnames";
import { FC, useMemo } from "react";

interface BoardProps {
    children: React.ReactNode;
    className?: string;
}

const Board: FC<BoardProps> = ({ children, className }) => {
    const size = useMemo(
        () =>
            Array.isArray(children) ? Math.ceil(Math.sqrt(children.length)) : 1,
        [children]
    );

    return (
        <div
            className={classnames(
                "grid gap-2 xl:gap-6 p-2 xl:p-6 rounded-xl xl:rounded-3xl",
                "bg-slate-100 shadow-inner dark:bg-slate-700 dark:shadow-slate-800",
                className
            )}
            style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
        >
            {children}
        </div>
    );
};

export default Board;
