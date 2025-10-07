import { useState } from 'react';
import { Button } from './ui/button';
import { Share } from './share';
import { cn } from './utils';

const symbols = ['🍒', '🍋', '🍊', '🍇', '⭐', '🔔'];

export function SlotMachine() {
  const [result, setResult] = useState<string[]>([]);
  const [winnings, setWinnings] = useState<number>(0);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    setSpinning(true);
    const newResult = Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
    setResult(newResult);
    // Simple win logic: 10 tokens for three of a kind, 2 tokens for a pair
    const [a, b, c] = newResult;
    let win = 0;
    if (a === b && b === c) {
      win = 10;
    } else if (a === b || b === c || a === c) {
      win = 2;
    }
    setWinnings(win);
    setSpinning(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2 text-4xl">
        {result.map((sym, idx) => (
          <span key={idx}>{sym}</span>
        ))}
      </div>
      <Button onClick={spin} disabled={spinning}>
        {spinning ? 'Spinning...' : 'Spin'}
      </Button>
      {winnings > 0 && (
        <div className="text-green-600">
          You won {winnings} tokens!
          <Share text={`I just won ${winnings} tokens on the Xnode casino!`} />
        </div>
      )}
      {winnings === 0 && result.length > 0 && (
        <div className="text-red-600">No win this time.</div>
      )}
    </div>
  );
}
