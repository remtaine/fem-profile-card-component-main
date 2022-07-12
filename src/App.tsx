import React from 'react';
import Data from './components/Data';
import Footer from './components/Footer';
import ProfilePicture from './images/image-victor.jpg';
// import BGCard from './images/bg-pattern-card.svg';
import BGTop from './images/bg-pattern-top.svg';
import BGBottom from './images/bg-pattern-bottom.svg';

function App() {
  return (
    <div className="App font-kumbh-sans bg-fem-100 text-fem-200 min-h-[100vh] selection:bg-neutral-800 selection:text-neutral-50">
      
      <main className="relative min-h-[calc(100vh-1.5rem)] w-full flex items-center justify-center overflow-hidden">
          <img src={BGTop} alt="" className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 scale-150 md:scale-100 xl:scale-150'/>
          <img src={BGBottom} alt="" className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-150 md:scale-100 xl:scale-150'/>

          <section className="shadow-xl rounded-2xl bg-neutral-50 w-[330px] h-[400px] flex flex-col items-center z-10">
            <div className="flex flex-col items-center w-full">
              <div className="bg-[url('./images/bg-pattern-card.svg')] w-full h-[130px] flex justify-center rounded-t-2xl">
                <img src={ProfilePicture} alt="" className='rounded-full border-8 border-neutral-50 translate-y-1/2'/>
              </div>
              <div className="flex gap-2 mt-16">
                <h1 className="font-bold text-fem-200">Victor Crest</h1>
                <h3 className="text-fem-300">26</h3>
              </div>
              <span className="text-fem-300 text-sm font-extralight">London</span>
            </div>

            <div className="flex gap-7 w-full justify-center border-t-2 py-4 mt-4">
              <Data number="80K">Followers</Data>
              <Data number="803K">Likes</Data>
              <Data number="1.4K">Photos</Data>
            </div>
          </section>

      </main>
      <Footer /> 
    </div>
  );
}

export default App;
