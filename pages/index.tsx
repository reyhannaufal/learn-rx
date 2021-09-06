import * as React from 'react';
import Head from 'next/head';
import { interval, map, Observable, of, Subscription } from 'rxjs';
import type { NextPage } from 'next';
import Subtitle from '@/components/Subtitle';
import Layout from '@/components/Layout';

const observable$: Observable<number> = interval(1000);

const Home: NextPage = () => {
   const [state, setState] = React.useState<number>();
   const [subscription, setSubscription] = React.useState<undefined | number>();
   const [subscription2, setSubscription2] = React.useState<
      undefined | number
   >();

   const wrapArrayIntoObservable = (arr: number[]) => {
      return new Observable<number>((subscriber) => {
         for (let item of arr) {
            subscriber.next(item);
         }
      });
   };

   const data: number[] = [1, 2, 3, 4, 5];

   const observable2$ = wrapArrayIntoObservable(data);

   React.useEffect(() => {
      observable$.subscribe(setState);
   }, []);

   React.useEffect(() => {
      observable2$.subscribe((val: number) => {
         setSubscription(val);
         console.log(`Subs 1 nilainya: ${val}`);
      });
      observable2$.subscribe((val: number) => {
         console.log(`Subs 2 nilainya: ${val}`);
         setSubscription2(val);
      });
   }, []);

   return (
      <main>
         <Head>
            <title>Me Learning RxJS</title>
         </Head>
         <Layout>
            <h1 className='text-4xl font-bold'>Me learning Rx</h1>
            <p>🤌</p>

            <div>
               <Subtitle text='Satu' />
               <p>Time: {state}</p>
            </div>

            <div>
               <Subtitle text='Dua' />
               <p>Subscriber 1: {subscription}</p>
               <p>Subscriber 2: {subscription2}</p>
            </div>
         </Layout>
      </main>
   );
};

export default Home;
