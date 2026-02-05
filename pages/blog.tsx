import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';

const Blog: NextPage = () => {
  return (
    <div className='flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen'>
      <Head>
        <title>Restore Photos - Blog</title>
      </Head>
      <Header />
      <main className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-20'>
        <h1 className='mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl'>
          Our Blog
        </h1>
        <p className='mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7'>
          See examples of restored photos and learn more about our technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {/* Placeholder for blog posts */}
            <div className="border border-slate-200 p-4">
                <Image src="/michael.jpg" width={300} height={300} alt="Blog post 1" className="mb-4 object-cover h-64 w-full" />
                <h3 className="text-xl font-bold text-left">Restoring Family Memories</h3>
                <p className="text-left text-slate-500 mt-2">How we helped a family recover photos from the 70s.</p>
            </div>
             <div className="border border-slate-200 p-4">
                <Image src="/michael-new.jpg" width={300} height={300} alt="Blog post 2" className="mb-4 object-cover h-64 w-full" />
                <h3 className="text-xl font-bold text-left">The Tech Behind the Magic</h3>
                <p className="text-left text-slate-500 mt-2">A deep dive into the GFPGAN model.</p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
