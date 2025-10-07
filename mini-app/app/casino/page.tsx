import { SlotMachine } from '../../components/slot-machine';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casino',
  description: 'Play slot machines and share your winnings on Farcaster.',
};

export default function CasinoPage() {
  return (
    <main className="flex flex-col items-center gap-8 p-4">
      <h1 className="text-3xl font-bold">Xnode Casino</h1>
      <SlotMachine />
    </main>
  );
}
