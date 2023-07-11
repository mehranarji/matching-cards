import { useEffect, useMemo, useState } from "react";
import Board from "./components/Board";
import Card from "./components/Card";
import Container from "./components/Container";
import shuffle from "lodash/shuffle";
import uniq from "lodash/uniq";

const emojis = ["🍇", "🍉", "🍊", "🍎", "🥥", "🍑", "🍌", "🍓"];
const maxSelectable = 2;

function App() {
    const items = useMemo(() => shuffle([...emojis, ...emojis]), []);
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [matched, setMatched] = useState<number[]>([]);
    

    useEffect(() => {
        if (selectedCards.length > 1 && uniq(selectedCards.map((index) => items[index])).length === 1) {
            setMatched((m) => [...m, ...selectedCards]);
        }
    }, [selectedCards]);

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
            <div className="w-[800px]">
                <Board className="mx-auto">
                    {items.map((emoji, index) => (
                        <Card
                            key={index}
                            emoji={emoji}
                            isFlipped={isSelected(index)}
                            onSelect={() => onCardSelect(index)}
                        />
                    ))}
                </Board>
            </div>
        </Container>
    );
}

export default App;
