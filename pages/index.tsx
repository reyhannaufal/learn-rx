import Head from 'next/head';
import { map, of } from 'rxjs';
import type { NextPage } from 'next';

const Home: NextPage = () => {
   return (
      <main>
         <Head>
            <title>Home</title>
         </Head>
         <section className='flex flex-col items-center justify-center h-screen space-y-2 text-white bg-gray-700'>
            <h1 className='text-4xl font-bold'>Me learning Rx</h1>
            <p>🤌</p>
         </section>
      </main>
   );
};

export default Home;
