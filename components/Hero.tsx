import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-bgLight">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Structure: Always flex-col, centered */}
        <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto">
          
          {/* Text Content - Always centered */}
          <div className="w-full space-y-8 text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-primary font-bold text-sm tracking-wide mx-auto shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              從國小到高中，最懂孩子的學習系統
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-accent leading-tight">
              提升成績，<br className="hidden md:block" />
              <span className="relative whitespace-nowrap inline-block mt-2">
                <span className="relative z-10">不靠運氣，靠方法。</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-secondary/50 -z-10 transform -rotate-1 rounded-sm"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              把每一個學生，帶到他原本以為做不到的地方。
              <br className="hidden md:block"/>
              我們相信，正確的學習策略比盲目的努力更重要。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button onClick={scrollTo('contact')} className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                預約免費試聽 <ArrowRight size={20} />
              </button>
              <button onClick={scrollTo('online-courses')} className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-gray-200 hover:border-primary text-accent font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                探索線上課程
              </button>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm font-bold text-gray-500">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm">
                <CheckCircle size={18} className="text-secondary" fill="#F7B500" stroke="white" /> 小班制教學
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm">
                <CheckCircle size={18} className="text-secondary" fill="#F7B500" stroke="white" /> 獨家教材
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm">
                <CheckCircle size={18} className="text-secondary" fill="#F7B500" stroke="white" /> 課後輔導
              </div>
            </div>
          </div>

          {/* Visual Content - Centered and width constrained */}
          <div className="w-full relative max-w-3xl mx-auto mt-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src="https://picsum.photos/1200/800?random=1" 
                alt="專注學習的學生" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Floating Badge 1 */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur p-3 rounded-xl shadow-float border border-gray-100 animate-bounce-slow hidden sm:block">
                <div className="flex items-center gap-2">
                   <span className="text-2xl">🔥</span>
                   <span className="font-bold text-accent">報名熱烈</span>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-float border border-gray-100 max-w-xs transform transition-transform hover:scale-105 cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
                    A++
                  </div>
                  <div>
                    <p className="font-bold text-accent text-lg">榜單最亮眼</p>
                    <p className="text-xs text-gray-500 font-medium">超過 500+ 位學員見證</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements around image */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pattern-dots opacity-20 hidden md:block"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pattern-dots opacity-20 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};