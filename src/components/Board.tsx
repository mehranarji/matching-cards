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
                "grid gap-8 p-8 rounded-3xl",
                "bg-slate-100 shadow-inner bg-center bg-cover",
                className
            )}
            style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
        >
            {children}
        </div>
    );
};

export default Board;
