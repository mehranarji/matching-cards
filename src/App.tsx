import shuffle from "lodash/shuffle";
import uniq from "lodash/uniq";
import { useEffect, useMemo, useState } from "react";
import Board from "./components/Board";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";

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
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [matched, setMatched] = useState<number[]>([]);
    const [difficulty, setDifficulty] = useState(1);
    const items = useMemo(
        () => shuffle(
            Array<string[]>(maxSelectable)
                .fill(fruits.slice(0, difficulty === 0 ? 3 : difficulty === 1 ? 6 : 10))
                .flat()
            ),
        [difficulty]
    );
    
    useEffect(() => {
        if (
            selectedCards.length > 1 &&
            uniq(selectedCards.map((index) => items[index])).length === 1
        ) {
            setMatched((m) => [...m, ...selectedCards]);
        }
    }, [selectedCards, items]);

    useEffect(() => {
        setSelectedCards([]);
        setMatched([]);
    }, [difficulty]);

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
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-center justify-center h-screen">
                <div>
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
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-10 uppercase">
                        Matching Cards
                    </h1>

                    <p className="mb-2 text-slate-500">Difficulty</p>
                    <div className="flex gap-2 justify-center items-baseline mb-5">
                        <Button isActive={difficulty === 0} onClick={() => setDifficulty(0)}>
                            Easy
                        </Button>
                        <Button isActive={difficulty === 1} onClick={() => setDifficulty(1)}>
                            Medium
                        </Button>
                        <Button isActive={difficulty === 2} onClick={() => setDifficulty(2)}>
                            Hard
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default App;
