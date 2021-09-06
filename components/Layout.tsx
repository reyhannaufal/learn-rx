import React from 'react';
import Footer from './Footer';

interface ContainerProps {
   children?: React.ReactNode;
}

export default function Layout({ children }: ContainerProps): JSX.Element {
   return (
      <section className='flex flex-col items-center justify-center h-screen space-y-5 text-center text-white bg-gray-900 '>
         {children}
         <Footer />
      </section>
   );
}
