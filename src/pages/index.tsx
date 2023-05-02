import { Inter } from 'next/font/google';
import { Button, Stats } from 'react-daisyui';
import { GiBearFace } from 'react-icons/gi';
import useBoundStore from '@/store';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const bears = useBoundStore((state) => state.bears);
  const addBear = useBoundStore((state) => state.addBear);
  const beets = useBoundStore((state) => state.beets);
  const addBeet = useBoundStore((state) => state.addBeet);
  const logout = useBoundStore((state) => state.logout);

  return (
    <main className={`flex h-screen flex-col items-center space-y-4 p-24 ${inter.className}`}>
      <Stats className="shadow">
        <Stats.Stat>
          <Stats.Stat.Item variant="title">Total Bears</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">{bears}</Stats.Stat.Item>
        </Stats.Stat>
      </Stats>
      <Button className="w-64 rounded-full" color="primary" onClick={addBear} startIcon={<GiBearFace></GiBearFace>}>
        Add Bear
      </Button>

      <Stats className="shadow">
        <Stats.Stat>
          <Stats.Stat.Item variant="title">Total Beets</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">{beets}</Stats.Stat.Item>
        </Stats.Stat>
      </Stats>
      <Button className="w-64 rounded-full" color="primary" onClick={addBeet}>
        Add Beet
      </Button>

      <Button className="flex w-64 flex-col rounded-full" color="primary" onClick={logout}>
        <div>Battlestar Galactica</div>
        <div className="text-[8px]">(aka. Reset)</div>
      </Button>
    </main>
  );
}
