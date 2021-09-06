import * as React from 'react';
import Head from 'next/head';
import { interval, map, Observable, of, Subscription } from 'rxjs';
import type { NextPage } from 'next';

const observable$: Observable<number> = interval(1000);

const Home: NextPage = () => {
   const [state, setState] = React.useState<number>();

   React.useEffect(() => {
      return () => {
         observable$.subscribe(setState);
      };
   });

   return (
      <main>
         <Head>
            <title>Me Learning RxJS</title>
         </Head>
         <section className='flex flex-col items-center justify-center h-screen space-y-5 text-white bg-gray-900'>
            <h1 className='text-4xl font-bold'>Me learning Rx</h1>
            <p>🤌</p>
            <p>Time: {state}</p>
         </section>
      </main>
   );
};

export default Home;
