import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Calendar, ArrowRight, ChevronDown, ChevronUp, Clock, Mail, Facebook, Instagram, Youtube, CheckCircle, Brain, Target, Search, BarChart3, Lightbulb, Users } from 'lucide-react';
import { NewsItem } from '../types';

const NEWS: NewsItem[] = [
  { id: 'n1', date: '2023/10/15', title: '【衝刺】113學測衝刺班 熱烈招生中！早鳥優惠實施中', category: '活動' },
  { id: 'n2', date: '2023/10/01', title: '【賀】本班學員張O傑 錄取台大電機系', category: '公告' },
  { id: 'n3', date: '2023/09/28', title: '【公告】中秋連假課程異動通知', category: '公告' },
];

const METHODS = [
  { 
    id: 1, 
    title: '觀念建構', 
    desc: '擺脫死背，從根本理解原理，建立完整的知識架構。',
    icon: <Brain size={24} />,
    color: 'bg-blue-100 text-primary'
  },
  { 
    id: 2, 
    title: '精準練習', 
    desc: '嚴選高頻考題與素養題型，針對重點反覆演練。',
    icon: <Target size={24} />,
    color: 'bg-yellow-100 text-yellow-700'
  },
  { 
    id: 3, 
    title: '弱點檢測', 
    desc: 'AI 數據分析學習盲點，找出哪裡不會，對症下藥。',
    icon: <Search size={24} />,
    color: 'bg-red-100 text-red-600'
  },
  { 
    id: 4, 
    title: '成效追蹤', 
    desc: '定期檢視學習曲線，動態調整進度，確保穩定進步。',
    icon: <BarChart3 size={24} />,
    color: 'bg-green-100 text-green-600'
  }
];

const FAQS = [
  { q: "請問線上課程有觀看期限嗎？", a: "我們的線上課程大部份為「永久觀看」制，購買後您可以依據自己的學習節奏，無限次重複播放複習，不用擔心過期問題。部分效期性課程（如考前衝刺）則會標註觀看期限。" },
  { q: "如果實體課程需要請假怎麼辦？", a: "我們提供完整的補課系統。您可以提前透過官方 LINE 或電話請假，事後預約補課中心進行視訊補課，確保進度不落後。" },
  { q: "報名後覺得不適合可以退費嗎？", a: "我們依照教育部短期補習班設立及管理準則辦理退費。開課前提出退費申請可全額退費（扣除行政手續費），開課後則依比例退費，保障您的權益。" },
  { q: "有一對一的家教輔導嗎？", a: "有的，除了小班制課程，我們也提供針對弱科加強的「個別指導」課程，歡迎預約諮詢，由老師為您量身規劃學習進度。" }
];

export const InfoContact: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Prevent default behavior for empty links to avoid "Refused to connect"
  const handleEmptyLink = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleAlert = (msg: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      alert(msg);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-24 bg-bgLight relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          {/* Philosophy Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-black text-accent mb-6 leading-tight">
              我們的理念：<br/>
              <span className="text-primary relative inline-block">
                方法 &gt; 努力
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              我們不只教知識，更教「如何學習」。<br className="hidden md:block"/>
              許多孩子成績不好，不是因為不夠聰明或不夠努力，而是用錯了方法。<br/>
              在 EduPro，我們陪孩子找到最有效的學習策略，找回自信。
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
                   堅持小班教學，確保老師能照顧到每一位學生的需求。課堂互動零距離，隨時掌握學習狀況，不讓任何一個孩子落後。
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
                   除了正規課程，我們提供一對一的課後輔導時間。針對個人弱科進行加強，消除學習盲點，量身打造進步計畫。
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
                  <p className="text-gray-500 text-lg">明亮、寬敞、安靜，專注學習的最佳場域</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[500px]">
                 {/* Main Large Image */}
                 <div className="md:row-span-2 rounded-3xl overflow-hidden relative group shadow-lg">
                    <img src="https://picsum.photos/800/800?random=50" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Classroom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="bg-primary/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold inline-block mb-2">Focus</div>
                      <p className="font-bold text-2xl">多媒體互動教室</p>
                      <p className="text-sm opacity-90 mt-1">配備 86 吋觸控螢幕，教學更生動</p>
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
                <h4 className="font-bold text-xl mb-3 relative z-10">還在煩惱成績嗎？</h4>
                <p className="text-sm text-blue-200 mb-6 relative z-10 leading-relaxed">立即預約免費程度檢測，讓我們幫你找出學習盲點。</p>
                <button onClick={scrollToContact} className="block w-full py-3.5 bg-secondary text-accent shadow-lg shadow-black/20 rounded-xl text-center font-bold hover:bg-yellow-400 transition-all transform hover:-translate-y-1 relative z-10">
                  立即預約檢測
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-bgLight border-t border-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-accent mb-4">常見問題</h2>
            <p className="text-gray-600">您可能想知道的入學資訊，我們都幫您整理好了</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden border ${openFaqIndex === index ? 'shadow-lg border-primary/20' : 'shadow-sm border-gray-100'}`}>
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-bold text-gray-800 flex items-center gap-4 text-lg">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors flex-shrink-0 ${openFaqIndex === index ? 'bg-primary text-white' : 'bg-blue-50 text-primary'}`}>Q</span>
                    {faq.q}
                  </span>
                  {openFaqIndex === index ? <ChevronUp size={20} className="text-primary flex-shrink-0"/> : <ChevronDown size={20} className="text-gray-400 flex-shrink-0"/>}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white pl-[4.5rem]">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 relative z-10">
            
            {/* Contact Info */}
            <div className="w-full lg:w-5/12 bg-accent text-white p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Contact Us</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">聯絡我們</h2>
                <p className="text-blue-200 mb-10 text-lg leading-relaxed">歡迎預約參觀或試聽，我們將有專人為您詳細解說課程規劃。</p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group cursor-pointer" onClick={handleAlert("將開啟地圖導航")}>
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">補習班地址</p>
                      <p className="font-bold text-xl">臺北市信義區大道路42巷18號</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group cursor-pointer" onClick={handleAlert("將撥打電話")}>
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">諮詢專線</p>
                      <p className="font-bold text-xl">02-2726-6441</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">營業時間</p>
                      <p className="font-medium text-lg">週一二四五 15:00 - 21:30</p>
                      <p className="font-medium text-lg">週三 12:00 - 21:30</p>
                      <p className="font-medium text-lg">週六 09:00 - 21:30</p>
                      <p className="font-medium text-lg">週日 09:00 - 18:30</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12">
                 <a href="https://line.me/R/ti/p/@328maikp" target="_blank" rel="noopener noreferrer" className="w-full bg-[#06C755] hover:bg-[#05b64d] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-green-900/20 text-lg">
                   <MessageCircle size={26} fill="white" /> 加入官方 LINE 諮詢
                 </a>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-7/12 p-10 lg:p-16 bg-white">
              <h3 className="text-2xl font-bold text-accent mb-2">預約免費試聽</h3>
              <p className="text-gray-500 mb-8">填寫表單後，我們將於 24 小時內與您聯繫確認。</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">學生姓名 <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none transition-all" placeholder="請輸入姓名" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">就讀年級</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none transition-all appearance-none cursor-pointer">
                        <option>請選擇年級</option>
                        <option>國小</option>
                        <option>國一</option>
                        <option>國二</option>
                        <option>國三</option>
                        <option>高一</option>
                        <option>高二</option>
                        <option>高三</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"/>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">聯絡電話 <span className="text-red-500">*</span></label>
                  <input type="tel" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none transition-all" placeholder="09xx-xxx-xxx" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">需求諮詢 / 備註</label>
                  <textarea className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none transition-all h-32 resize-none" placeholder="想了解的科目或目前學習狀況..."></textarea>
                </div>

                <button type="button" onClick={handleAlert("表單已送出！專人將盡快與您聯繫。")} className="w-full py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  送出預約 <ArrowRight size={20}/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1B43] text-gray-400 pt-20 pb-10 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 text-white font-black text-2xl mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/50">宏</div>
                宏觀教育
              </a>
              <p className="text-sm leading-relaxed mb-8 text-gray-400">
                致力於提供最優質的教學環境與系統化的學習方法。把每一個學生，帶到他原本以為做不到的地方。
              </p>
              <div className="flex gap-4">
                 <button onClick={handleEmptyLink} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1877F2] text-white transition-all hover:-translate-y-1"><Facebook size={18}/></button>
                 <button onClick={handleEmptyLink} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E4405F] text-white transition-all hover:-translate-y-1"><Instagram size={18}/></button>
                 <button onClick={handleEmptyLink} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF0000] text-white transition-all hover:-translate-y-1"><Youtube size={18}/></button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">快速連結</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={scrollTo('courses')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> 課程介紹</button></li>
                <li><button onClick={scrollTo('teachers')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> 師資陣容</button></li>
                <li><button onClick={scrollTo('about')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> 關於我們</button></li>
                <li><button onClick={scrollTo('online-courses')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> 線上課程</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">課程類別</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={handleEmptyLink} className="hover:text-primary transition-colors">國小全科班</button></li>
                <li><button onClick={handleEmptyLink} className="hover:text-primary transition-colors">國中會考衝刺</button></li>
                <li><button onClick={handleEmptyLink} className="hover:text-primary transition-colors">高中學測/分科</button></li>
                <li><button onClick={handleEmptyLink} className="hover:text-primary transition-colors">一對一輔導</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">聯絡資訊</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                   <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                   <span>臺北市信義區大道路42巷18號</span>
                </li>
                <li className="flex items-center gap-3">
                   <Phone size={18} className="text-primary flex-shrink-0" />
                   <span>02-2726-6441</span>
                </li>
                <li className="flex items-center gap-3">
                   <Mail size={18} className="text-primary flex-shrink-0" />
                   <span>LINE ID: @328maikp</span>
                </li>
                <li className="flex items-center gap-3">
                   <MessageCircle size={18} className="text-primary flex-shrink-0" />
                   <span>LINE ID: @328maikp</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-600 flex flex-col md:flex-row items-center justify-between">
            <p>&copy; 2025 宏觀教育補習班. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-4">
               <button onClick={handleEmptyLink} className="hover:text-gray-300">隱私權政策</button>
               <button onClick={handleEmptyLink} className="hover:text-gray-300">服務條款</button>
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 flex gap-3 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
         <button onClick={handleAlert("將撥打電話")} className="flex-1 bg-gray-100 text-gray-700 font-bold rounded-xl flex items-center justify-center gap-2 py-3 active:scale-95 transition-transform">
           <Phone size={18}/> 電話諮詢
         </button>
         <button onClick={scrollToContact} className="flex-1 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 py-3 shadow-lg shadow-blue-500/30 active:scale-95 transition-transform">
           <Calendar size={18}/> 預約試聽
         </button>
      </div>

    </>
  );
};