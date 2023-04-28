import { Inter } from 'next/font/google';

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
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Bears</div>
          <div className="stat-value">{bears}</div>
        </div>
      </div>
      <button className="btn-primary btn w-64 rounded-full" onClick={addBear}>
        Add Bear
      </button>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Beets</div>
          <div className="stat-value">{beets}</div>
        </div>
      </div>
      <button className="btn-primary btn w-64 rounded-full" onClick={addBeet}>
        Add Beet
      </button>

      <button className="btn-primary btn flex w-64 flex-col rounded-full" onClick={logout}>
        <div>Battlestar Galactica</div>
        <div className="text-[8px]">(aka. Reset)</div>
      </button>
    </main>
  );
}
