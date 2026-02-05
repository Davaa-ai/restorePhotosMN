import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { CompareSlider } from '../components/CompareSlider';
import { Testimonials } from '../components/Testimonials';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col min-h-screen bg-soft-orange text-slate-900'>
      <Head>
        <title>Face Photo Restorer</title>
      </Head>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Header />
      </div>

      <main className='flex-1 w-full flex flex-col items-center mt-12 sm:mt-20 mb-20'>
        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-start text-left lg:w-1/2">
                <h1 className='font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl mb-6'>
                    Restore old photos <br/>
                    <span className='text-emerald-600 bg-pale-green px-2'>using AI.</span>
                </h1>
                <p className='text-lg text-slate-700 leading-relaxed mb-8 max-w-lg'>
                    Have old and blurry face photos? Let our AI restore them so those
                    memories can live on. 100% free – restore your photos today.
                </p>
                <Link
                    className='bg-slate-900 text-white font-medium text-lg px-8 py-4 hover:bg-slate-800 transition shadow-lg rounded-sm'
                    href='/restore'
                >
                    Restore your photos &rarr;
                </Link>

                <div className="mt-8 flex items-center space-x-4 text-sm text-slate-500">
                     <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        No credit card required
                    </span>
                    <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        Secure & Private
                    </span>
                </div>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center">
                 <div className="shadow-2xl border-4 border-white">
                    <CompareSlider
                        original='/michael.jpg'
                        restored='/michael-new.jpg'
                    />
                 </div>
            </div>
        </section>

        {/* Blog / Gallery Preview Section */}
        <section className="w-full bg-soft-green py-20 mt-24 border-y border-pale-green">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 font-display">Recent Restorations</h2>
                        <p className="text-slate-600 mt-2">See how our AI transforms fuzzy memories into clear moments.</p>
                    </div>
                    <Link href="/blog" className="text-emerald-700 font-medium hover:underline hidden sm:block">View all posts &rarr;</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Blog Card 1 */}
                    <div className="bg-white p-4 shadow-sm border border-slate-100 hover:shadow-md transition duration-200">
                        <div className="h-48 relative mb-4 bg-gray-200 overflow-hidden">
                             <Image src="/michael.jpg" layout="fill" objectFit="cover" alt="Blog post 1" className="hover:scale-105 transition duration-500"/>
                        </div>
                        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Case Study</span>
                        <h3 className="text-lg font-bold mt-1 mb-2">Grandfather's Portrait</h3>
                        <p className="text-sm text-slate-500">Restoring a damaged photo from the 1950s with amazing clarity.</p>
                    </div>
                     {/* Blog Card 2 */}
                    <div className="bg-white p-4 shadow-sm border border-slate-100 hover:shadow-md transition duration-200">
                        <div className="h-48 relative mb-4 bg-gray-200 overflow-hidden">
                             <Image src="/michael-new.jpg" layout="fill" objectFit="cover" alt="Blog post 2" className="hover:scale-105 transition duration-500"/>
                        </div>
                         <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Technology</span>
                        <h3 className="text-lg font-bold mt-1 mb-2">How GFPGAN Works</h3>
                        <p className="text-sm text-slate-500">A look under the hood of the AI model powering our restorations.</p>
                    </div>
                     {/* Blog Card 3 */}
                    <div className="bg-white p-4 shadow-sm border border-slate-100 hover:shadow-md transition duration-200">
                        <div className="h-48 relative mb-4 bg-gray-200 overflow-hidden">
                             <Image src="/michael.jpg" layout="fill" objectFit="cover" alt="Blog post 3" className="hover:scale-105 transition duration-500"/>
                        </div>
                         <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Tips</span>
                        <h3 className="text-lg font-bold mt-1 mb-2">Scanning Best Practices</h3>
                        <p className="text-sm text-slate-500">How to get the best results when digitizing your old photos.</p>
                    </div>
                </div>
                 <div className="mt-8 text-center sm:hidden">
                    <Link href="/blog" className="text-emerald-700 font-medium hover:underline">View all posts &rarr;</Link>
                </div>
             </div>
        </section>

        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <Testimonials />
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Home;
