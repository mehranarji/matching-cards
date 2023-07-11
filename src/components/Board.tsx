import clsx from "clsx";
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
            className={clsx("grid gap-6 p-6 border", className)}
            style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
        >
            {children}
        </div>
    );
};

export default Board;
