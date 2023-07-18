import shuffle from "lodash/shuffle";
import uniq from "lodash/uniq";
import { useEffect, useMemo, useState } from "react";
import Board from "./components/Board";
import Card from "./components/Card";
import Container from "./components/Container";

const maxSelectable = 2;
const fruits = [
    "grapes",
    "watermelon",
    "tangerine",
    "red-apple",
    "coconut",
    "peach",
    "banana",
    "strawberry",
    "carrot",
    "lemon",
];

function App() {
    const items = useMemo(
        () => shuffle(Array<string[]>(maxSelectable).fill(fruits).flat()),
        []
    );
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [matched, setMatched] = useState<number[]>([]);

    useEffect(() => {
        if (
            selectedCards.length > 1 &&
            uniq(selectedCards.map((index) => items[index])).length === 1
        ) {
            setMatched((m) => [...m, ...selectedCards]);
        }
    }, [selectedCards, items]);

    const isSelected = (index: number) =>
        selectedCards.includes(index) || matched.includes(index);

    const onCardSelect = (index: number) => {
        if (isSelected(index)) {
            return;
        }

        if (selectedCards.length >= maxSelectable) {
            setSelectedCards([]);
        }

        setSelectedCards((s) => [...s, index]);
    };

    return (
        <Container>
            <div className="flex gap-4 items-center justify-center h-screen">
                <div className="basis-full lg:basis-1/2">
                    <Board className="mx-auto">
                        {items.map((fruit, index) => (
                            <Card
                                key={index}
                                isFlipped={isSelected(index)}
                                isCorrect={matched.includes(index)}
                                onSelect={() => onCardSelect(index)}
                            >
                                <img
                                    src={`./assets/images/${fruit}.png`}
                                    className="w-full h-full"
                                />
                            </Card>
                        ))}
                    </Board>
                </div>
                <div className="hidden lg:block lg:basis-1/2 text-center">
                    <h1 className="text-4xl font-bold mb-10 uppercase">
                        Memory game
                    </h1>

                    <p className="mb-2 text-slate-500">Difficulty</p>
                    <div className="flex gap-2 justify-center items-baseline">
                        <button className="px-4 py-2 rounded-lg text-lg bg-sky-600 text-white">
                            Easy
                        </button>
                        <button className="px-4 py-2 rounded-lg text-lg bg-slate-100">
                            Medium
                        </button>
                        <button className="px-4 py-2 rounded-lg text-lg bg-slate-100">
                            Hard
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default App;
