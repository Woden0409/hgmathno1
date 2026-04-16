import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Quote, Award, TrendingUp, Calendar, Check } from 'lucide-react';
import { Teacher, Testimonial } from '../types';

const TEACHERS: Teacher[] = [
  {
    id: 't1',
    name: '王大明',
    title: '英文科名師',
    slogan: '最會教文法的英文老師',
    experience: '15年教學經驗、前大型補習班首席講師',
    style: ['幽默風趣', '邏輯清晰', '獨創口訣'],
    image: 'https://picsum.photos/300/300?random=30'
  },
  {
    id: 't2',
    name: '李曉華',
    title: '數學科權威',
    slogan: '把數學變簡單的魔法師',
    experience: '台大數學系碩士、會考數學滿分推手',
    style: ['觀念引導', '耐心解題', '重視基礎'],
    image: 'https://picsum.photos/300/300?random=31'
  },
  {
    id: 't3',
    name: '張志豪',
    title: '理化科戰神',
    slogan: '實驗與理論的完美結合',
    experience: '知名高中物理教師、科學展覽指導老師',
    style: ['生活實例', '圖解教學', '考題破解'],
    image: 'https://picsum.photos/300/300?random=32'
  }
];

const TESTIMONIALS: Testimonial[] = [
  { id: 's1', studentName: '陳小美', grade: '國三', improvement: '英文 45 → 88', quote: '原本已經放棄英文，但老師的文法口訣真的太神了！讓我重新找回自信。' },
  { id: 's2', studentName: '林大翔', grade: '高二', improvement: '物理 30 → 75', quote: '以前只會背公式，現在終於懂為什麼了。段考進步超多，感謝老師！' },
  { id: 's3', studentName: '黃怡君', grade: '國二', improvement: '數學 60 → 92', quote: '這邊的講義整理得很好，考前複習很方便。環境也很安靜，很適合自習。' }
];

const CHART_DATA = [
  { name: '入學前', score: 45 },
  { name: '3個月', score: 68 },
  { name: '6個月', score: 85 },
  { name: '會考/學測', score: 92 },
];

export const TeachersResults: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Teachers Section */}
      <section id="teachers" className="py-24 bg-white relative">
        {/* Decorative Background for Section */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50/50 -z-0 skew-y-2 transform origin-top-left"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">World Class Faculty</span>
            <h2 className="text-3xl md:text-4xl font-black text-accent mb-4">金牌師資陣容</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              不僅懂教學，更懂如何激發孩子的潛力。我們的老師平均擁有 10 年以上教學經驗，是你學習路上最強的後盾。
            </p>
            <div className="h-1.5 w-20 bg-secondary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {TEACHERS.map((teacher, idx) => (
              <div key={teacher.id} className="group bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden transform hover:-translate-y-2 relative">
                
                {/* Decorative Header in Card */}
                <div className="h-24 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
                   <div className="absolute -right-4 -top-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                   <div className="absolute left-4 top-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
                </div>

                {/* Avatar */}
                <div className="px-8 relative -mt-16 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full p-1.5 bg-white shadow-card">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name} 
                      className="w-full h-full object-cover rounded-full border-2 border-gray-100 group-hover:border-primary transition-colors" 
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 pt-6 text-center flex-1 flex flex-col">
                  <h3 className="text-2xl font-black text-accent mb-1">{teacher.name}</h3>
                  <p className="text-primary font-bold text-sm mb-4 tracking-wide uppercase">{teacher.title}</p>
                  
                  <div className="bg-yellow-50/80 border border-yellow-100 rounded-xl py-3 px-4 mb-6 relative">
                    <div className="text-secondary text-xs font-black uppercase mb-1 opacity-60 tracking-wider">Teaching Philosophy</div>
                    <p className="text-gray-800 font-bold text-sm">"{teacher.slogan}"</p>
                  </div>
                  
                  <div className="text-gray-500 text-sm mb-6 leading-relaxed flex-1">
                     <p className="font-medium text-gray-900 mb-2">教學經歷</p>
                     {teacher.experience}
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {teacher.style.map((s, i) => (
                      <span key={i} className="flex items-center gap-1 bg-gray-50 text-gray-600 text-xs px-3 py-1.5 rounded-full font-bold border border-gray-100 group-hover:border-primary/20 group-hover:text-primary transition-colors">
                        <Check size={10} strokeWidth={4} /> {s}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={scrollToContact}
                    className="w-full py-3.5 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg shadow-blue-200"
                  >
                    <Calendar size={18} /> 預約試聽課程
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <div className="inline-flex items-center justify-center p-1 bg-gray-100 rounded-full">
                <span className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-bold text-gray-600">找不到適合的老師？</span>
                <button onClick={scrollToContact} className="px-6 py-2 rounded-full text-primary font-bold text-sm hover:underline flex items-center gap-1">
                  聯絡我們安排媒合 <TrendingUp size={16}/>
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Results & Testimonials */}
      <section className="py-24 bg-primary relative overflow-hidden text-white">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Data Chart */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-yellow-300 text-xs font-bold mb-4">
                 <Award size={14}/> 成績保證
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">用數據說話，<br/>看見真實的進步</h2>
              <p className="text-blue-100 mb-10 text-xl leading-relaxed font-light">
                我們的系統化教學法，平均協助學員在 6 個月內提升 <span className="text-secondary font-bold text-2xl">30%</span> 的成績表現。
              </p>
              
              <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 shadow-xl">
                <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                   <div className="w-2 h-6 bg-secondary rounded-sm"></div>
                   學員平均進步曲線
                </h3>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={CHART_DATA} barSize={40}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                      <XAxis dataKey="name" tick={{fill: 'white', fontSize: 14, fontWeight: 500}} axisLine={false} tickLine={false} dy={10} />
                      <YAxis tick={{fill: 'white', fontSize: 12}} axisLine={false} tickLine={false} />
                      <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.1)'}}
                        contentStyle={{
                            backgroundColor: 'white', 
                            borderRadius: '12px', 
                            border: 'none', 
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            color: '#333'
                        }}
                      />
                      <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                        {CHART_DATA.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === CHART_DATA.length - 1 ? '#F7B500' : 'rgba(255,255,255,0.4)'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Right: Testimonials Cards */}
            <div className="w-full lg:w-1/2 grid gap-6">
               {TESTIMONIALS.map((item, idx) => (
                 <div key={item.id} className={`bg-white text-slate-800 p-8 rounded-2xl shadow-xl relative transform transition-transform hover:-translate-y-1 duration-300 ${idx === 1 ? 'lg:-translate-x-8' : ''}`}>
                   <Quote className="absolute top-6 right-6 text-blue-100 w-12 h-12 transform rotate-180" fill="currentColor"/>
                   <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white font-bold flex items-center justify-center text-lg shadow-lg">
                       {item.studentName[0]}
                     </div>
                     <div>
                       <p className="font-bold text-lg">{item.studentName} <span className="text-sm text-gray-400 font-normal ml-1">({item.grade})</span></p>
                       <p className="text-green-600 text-sm font-bold bg-green-50 inline-flex items-center px-2 py-0.5 rounded mt-1 border border-green-100">
                         <TrendingUp size={12} className="mr-1"/> {item.improvement}
                       </p>
                     </div>
                   </div>
                   <p className="text-gray-600 italic relative z-10 leading-relaxed">"{item.quote}"</p>
                 </div>
               ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
