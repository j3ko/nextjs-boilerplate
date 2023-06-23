import { Inter } from 'next/font/google';
import { Button, Stats } from 'react-daisyui';
import { GiBearFace, GiBeet, GiSpaceship } from 'react-icons/gi';

import next, { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { initializeStore, useStore } from '@/store';

const inter = Inter({ subsets: ['latin'] });

type Repo = {
  name: string
  stargazers_count: number
}

export const getServerSideProps = async () => {
  const zustandStore = initializeStore()

  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const nextJs = await res.json()

  const initialState = {
    ...zustandStore.getState(),
    nextJs
  }

  return {
    props: {
      // the "stringify and then parse again" piece is required as next.js
      // isn't able to serialize it to JSON properly
      initialState: JSON.parse(JSON.stringify(initialState)),
    },
  }
}

export default function Home() {
  const bears = useStore((state) => state.bears);
  const addBear = useStore((state) => state.addBear);
  const beets = useStore((state) => state.beets);
  const addBeet = useStore((state) => state.addBeet);
  const logout = useStore((state) => state.logout);
  const nextJs = useStore((state) => state.nextJs);

  return (
    <main className={`flex h-screen flex-col items-center space-y-4 p-24 ${inter.className}`}>
      <Stats className="shadow">
        <Stats.Stat>
          <Stats.Stat.Item variant="figure" className="text-accent">
            <GiBearFace className="inline-block h-8 w-8 stroke-current"></GiBearFace>
          </Stats.Stat.Item>
          <Stats.Stat.Item variant="title">Total {nextJs?.name}</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">{bears}</Stats.Stat.Item>
        </Stats.Stat>
      </Stats>
      <Button
        className="w-64 rounded-full"
        color="primary"
        onClick={addBear}
        startIcon={<GiBearFace></GiBearFace>}>
        Add Bear
      </Button>

      <Stats className="shadow">
        <Stats.Stat>
          <Stats.Stat.Item variant="figure" className="text-accent">
            <GiBeet className="inline-block h-8 w-8 stroke-current"></GiBeet>
          </Stats.Stat.Item>
          <Stats.Stat.Item variant="title">Total Beets</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">{beets}</Stats.Stat.Item>
        </Stats.Stat>
      </Stats>
      <Button
        className="w-64 rounded-full"
        color="primary"
        onClick={addBeet}
        startIcon={<GiBeet></GiBeet>}>
        Add Beet
      </Button>

      <Button
        className="flex w-64 flex-col rounded-full"
        color="primary"
        startIcon={<GiSpaceship></GiSpaceship>}
        onClick={logout}>
        <div>
          <div>Battlestar Galactica</div>
          <div className="text-[8px]">(aka. Reset)</div>
        </div>
      </Button>
    </main>
  );
}
