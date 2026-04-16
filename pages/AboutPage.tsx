import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Clock, Brain, Target, Search, BarChart3, Lightbulb, Users } from 'lucide-react';
import { NewsItem } from '../types';

const NEWS: NewsItem[] = [
  { id: 'n1', date: '2023/10/15', title: '【衝刺】113學測衝刺班 熱烈招生中!早鳥優惠實施中', category: '活動' },
  { id: 'n2', date: '2023/10/01', title: '【賀】本班學員張O傑 錄取台大電機系', category: '公告' },
  { id: 'n3', date: '2023/09/28', title: '【公告】中秋連假課程異動通知', category: '公告' },
];

const METHODS = [
  {
    id: 1,
    title: '觀念建構',
    desc: '擺脫死背,從根本理解原理,建立完整的知識架構。',
    icon: <Brain size={24} />,
    color: 'bg-blue-100 text-primary'
  },
  {
    id: 2,
    title: '精準練習',
    desc: '嚴選高頻考題與素養題型,針對重點反覆演練。',
    icon: <Target size={24} />,
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    id: 3,
    title: '弱點檢測',
    desc: 'AI 數據分析學習盲點,找出哪裡不會,對症下藥。',
    icon: <Search size={24} />,
    color: 'bg-red-100 text-red-600'
  },
  {
    id: 4,
    title: '成效追蹤',
    desc: '定期檢視學習曲線,動態調整進度,確保穩定進步。',
    icon: <BarChart3 size={24} />,
    color: 'bg-green-100 text-green-600'
  }
];

const AboutPage: React.FC = () => {
  const handleEmptyLink = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="pt-24">
      {/* About Section */}
      <section className="py-24 bg-bgLight relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">

          {/* Philosophy Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-black text-accent mb-6 leading-tight">
              我們的理念:<br/>
              <span className="text-primary relative inline-block">
                方法 &gt; 努力
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              我們不只教知識,更教「如何學習」。<br className="hidden md:block"/>
              許多孩子成績不好,不是因為不夠聰明或不夠努力,而是用錯了方法。<br/>
              在宏觀教育,我們陪孩子找到最有效的學習策略,找回自信。
            </p>
          </div>

          {/* Core Teaching Methods - 4 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {METHODS.map((method, index) => (
              <div key={method.id} className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
                {/* Connector Line (Desktop) */}
                {index < METHODS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gray-200 z-0"></div>
                )}

                <div className={`w-14 h-14 ${method.color} rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>

                <div className="absolute top-6 right-6 text-6xl font-black text-gray-50 opacity-50 select-none z-0">
                  0{method.id}
                </div>

                <h3 className="text-xl font-bold text-accent mb-3 relative z-10">{method.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                  {method.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Two Columns Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5">
               <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                 <Users size={24} />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-accent mb-2">精緻小班制教學</h4>
                 <p className="text-gray-600 leading-relaxed">
                   堅持小班教學,確保老師能照顧到每一位學生的需求。課堂互動零距離,隨時掌握學習狀況,不讓任何一個孩子落後。
                 </p>
               </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5">
               <div className="w-12 h-12 bg-yellow-50 text-secondary rounded-full flex items-center justify-center flex-shrink-0">
                 <Lightbulb size={24} />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-accent mb-2">個別化弱點輔導</h4>
                 <p className="text-gray-600 leading-relaxed">
                   除了正規課程,我們提供一對一的課後輔導時間。針對個人弱科進行加強,消除學習盲點,量身打造進步計畫。
                 </p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Environment Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Gallery (Bento Grid) */}
            <div className="w-full lg:w-2/3">
               <div className="mb-8">
                  <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Environment</span>
                  <h3 className="text-3xl font-black text-accent mb-2">優質學習環境</h3>
                  <p className="text-gray-500 text-lg">明亮、寬敞、安靜,專注學習的最佳場域</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[500px]">
                 {/* Main Large Image */}
                 <div className="md:row-span-2 rounded-3xl overflow-hidden relative group shadow-lg">
                    <img src="https://picsum.photos/800/800?random=50" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Classroom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="bg-primary/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold inline-block mb-2">Focus</div>
                      <p className="font-bold text-2xl">多媒體互動教室</p>
                      <p className="text-sm opacity-90 mt-1">配備 86 吋觸控螢幕,教學更生動</p>
                    </div>
                 </div>

                 {/* Secondary Image 1 */}
                 <div className="rounded-3xl overflow-hidden relative group shadow-lg h-64 md:h-auto">
                    <img src="https://picsum.photos/600/400?random=51" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Lounge" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur text-accent text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      K 書中心
                    </div>
                 </div>

                 {/* Secondary Image 2 */}
                 <div className="rounded-3xl overflow-hidden relative group shadow-lg h-64 md:h-auto">
                    <img src="https://picsum.photos/600/400?random=52" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Consultation" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur text-accent text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      一對一輔導室
                    </div>
                 </div>
               </div>
            </div>

            {/* News Section (Sidebar) */}
            <div className="w-full lg:w-1/3 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div>
                   <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">News</span>
                   <h3 className="text-2xl font-black text-accent">最新公告</h3>
                </div>
                <button onClick={handleEmptyLink} className="text-sm text-primary font-bold hover:underline flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full transition-colors hover:bg-blue-100">更多 <ArrowRight size={14}/></button>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {NEWS.map((item) => (
                  <div key={item.id} className="border border-gray-100 p-5 rounded-2xl hover:bg-white hover:shadow-lg hover:border-transparent transition-all cursor-pointer group bg-gray-50/50">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[10px] px-2 py-1 rounded text-white font-bold tracking-wide ${item.category === '活動' ? 'bg-secondary' : 'bg-primary'}`}>
                        {item.category}
                      </span>
                      <span className="text-gray-400 text-xs font-medium flex items-center gap-1"><Clock size={12}/> {item.date}</span>
                    </div>
                    <h4 className="text-gray-800 font-bold group-hover:text-primary transition-colors leading-snug">{item.title}</h4>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-gradient-to-br from-accent to-blue-900 rounded-3xl text-center relative overflow-hidden text-white shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <h4 className="font-bold text-xl mb-3 relative z-10">還在煩惱成績嗎?</h4>
                <p className="text-sm text-blue-200 mb-6 relative z-10 leading-relaxed">立即預約免費程度檢測,讓我們幫你找出學習盲點。</p>
                <button onClick={scrollToContact} className="block w-full py-3.5 bg-secondary text-accent shadow-lg shadow-black/20 rounded-xl text-center font-bold hover:bg-yellow-400 transition-all transform hover:-translate-y-1 relative z-10">
                  立即預約檢測
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
