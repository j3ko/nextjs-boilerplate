import { Inter } from 'next/font/google';
import { Button, Stats } from 'react-daisyui';
import { GiBearFace, GiBeet, GiSpaceship } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';

import { wrapper } from '@/store';
import { fetchNextJson } from '@/store/epics/fetchNextJson';
import { logout } from '@/store/epics/logout';
import { RootState } from '@/store/features';
import { addBear } from '@/store/features/bear';
import { addBeet } from '@/store/features/beet';

const inter = Inter({ subsets: ['latin'] });

/**
 * Example: Tell redux to make an api query on the server-side.
 * Query results are then sent to client when the page loads.
 * See `fetchNextJson()`
 */
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(fetchNextJson());
  return { props: {} };
});

export default function Home() {
  const bears = useSelector((state: RootState) => state.bear.count);
  const beets = useSelector((state: RootState) => state.beet.count);
  const dispatch = useDispatch();

  return (
    <main className={`flex h-screen flex-col items-center space-y-4 p-24 ${inter.className}`}>
      <Stats className="shadow">
        <Stats.Stat>
          <Stats.Stat.Item variant="figure" className="text-accent">
            <GiBearFace className="inline-block h-8 w-8 stroke-current"></GiBearFace>
          </Stats.Stat.Item>
          <Stats.Stat.Item variant="title">Total Bears</Stats.Stat.Item>
          <Stats.Stat.Item variant="value">{bears}</Stats.Stat.Item>
        </Stats.Stat>
      </Stats>
      <Button
        className="w-64 rounded-full"
        color="primary"
        onClick={() => dispatch(addBear())}
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
        onClick={() => dispatch(addBeet())}
        startIcon={<GiBeet></GiBeet>}>
        Add Beet
      </Button>

      <Button
        className="flex w-64 flex-col rounded-full"
        color="primary"
        startIcon={<GiSpaceship></GiSpaceship>}
        onClick={() => dispatch(logout())}>
        <div>
          <div>Battlestar Galactica</div>
          <div className="text-[8px]">(aka. Reset)</div>
        </div>
      </Button>
    </main>
  );
}
