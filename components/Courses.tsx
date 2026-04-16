import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Video, Play, Clock, FileText, Star, X, ShoppingCart, ArrowRight } from 'lucide-react';
import { OnlineCourse, CourseCategory } from '../types';

const CATEGORIES: CourseCategory[] = [
  {
    id: 'elementary',
    title: '國小全科班',
    description: '培養讀書習慣，打好國英數基礎，讓孩子愛上學習。',
    image: 'https://picsum.photos/400/300?random=10',
    features: ['作業指導', '雙語教學', '數理邏輯'],
    link: '/courses?tab=elementary'
  },
  {
    id: 'middle',
    title: '國中會考衝刺',
    description: '針對108課綱素養題型，精準分析考點，全科進步。',
    image: 'https://picsum.photos/400/300?random=11',
    features: ['模擬考分析', '弱科補強', '進度超前'],
    link: '/courses?tab=junior'
  },
  {
    id: 'high',
    title: '高中學測/分科',
    description: '學習歷程檔案輔導，學測高分策略，前進頂大。',
    image: 'https://picsum.photos/400/300?random=12',
    features: ['備審資料', '深度解題', '考前猜題'],
    link: '/courses?tab=senior'
  },
  {
    id: 'online',
    title: '線上影音題庫',
    description: '隨時隨地複習，打破時空限制，最彈性的學習方式。',
    image: 'https://picsum.photos/400/300?random=13',
    features: ['無限回放', '線上解惑', '重點精華'],
    link: '/online'
  }
];

const ONLINE_COURSES: OnlineCourse[] = [
  {
    id: 'oc1',
    title: '國中英文文法大全：從入門到精通',
    thumbnail: 'https://picsum.photos/600/400?random=20',
    duration: '12 小時',
    chapters: 24,
    description: '用最簡單的邏輯，破解最複雜的文法。不再死背公式，讓英文成為你的優勢科目。本課程涵蓋國中三年所有必考文法重點。',
    targetAudience: '國一至國三學生、想重新打底的高中生',
    syllabus: ['名詞與代名詞', '動詞時態總整理', '被動語態', '連接詞與介系詞', '三大子句解析'],
    price: 2800
  },
  {
    id: 'oc2',
    title: '高中物理觀念課：力學篇',
    thumbnail: 'https://picsum.photos/600/400?random=21',
    duration: '8.5 小時',
    chapters: 15,
    description: '物理不是背公式！從生活實例出發，深入淺出講解牛頓運動定律、能量守恆等核心觀念。',
    targetAudience: '高一、高二自然組學生',
    syllabus: ['運動學基礎', '牛頓三大定律', '動量與衝量', '功與能量', '圓周運動'],
    price: 3200
  },
  {
    id: 'oc3',
    title: '學測數學數 A 總複習',
    thumbnail: 'https://picsum.photos/600/400?random=22',
    duration: '20 小時',
    chapters: 40,
    description: '針對學測數A範圍，進行地毯式複習。包含歷屆試題詳解與獨家快攻解法。',
    targetAudience: '高三學測考生',
    syllabus: ['三角函數', '指數與對數', '平面向量', '空間向量', '機率與統計'],
    price: 4500
  }
];

export const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<OnlineCourse | null>(null);
  const navigate = useNavigate();

  return (
    <>
      {/* Categories Section */}
      <section id="courses" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-bgLight to-white"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-black text-accent mb-4">全方位課程規劃</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">依照不同學齡與需求，我們量身打造最適合的學習路徑，讓孩子在每個階段都能自信成長。</p>
            <div className="h-1.5 w-20 bg-secondary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((cat, idx) => (
              <Link
                key={cat.id}
                to={cat.link || '/courses'}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                     <span className="text-white font-bold flex items-center gap-2">查看詳情 <ArrowRight size={16}/></span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col relative">
                  <div className="absolute -top-6 right-6 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg font-bold text-lg">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-3">{cat.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-1 leading-relaxed">{cat.description}</p>
                  <div className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                    {cat.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feat}
                      </div>
                    ))}
                  </div>
                  <span className="block w-full text-center py-3 border-2 border-primary text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors text-sm font-bold mt-auto">
                    了解詳情
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Online Courses (LMS Style) */}
      <section id="online-courses" className="py-24 bg-bgLight border-t border-gray-100 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">E-Learning Platform</span>
              <h2 className="text-3xl md:text-4xl font-black text-accent mb-4">精選線上課程</h2>
              <p className="text-gray-600 text-lg">打破時間與空間的限制，讓名師隨時隨地成為你的家教。高清畫質、重點剪輯，學習效率加倍。</p>
            </div>
            <Link to="/online" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline mt-4 md:mt-0 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
              <BookOpen size={18}/> 查看所有課程
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ONLINE_COURSES.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100 transform hover:-translate-y-1" onClick={() => setSelectedCourse(course)}>
                <div className="relative aspect-video overflow-hidden">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play size={32} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur text-white text-xs px-2.5 py-1 rounded-md flex items-center gap-1.5 font-medium border border-white/20">
                    <Clock size={12} /> {course.duration}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                     <span className="text-xs font-bold text-white bg-accent px-2 py-1 rounded">熱門課程</span>
                     <span className="flex items-center gap-1 text-xs font-bold text-gray-500"><Star size={12} className="text-secondary" fill="#F7B500"/> 4.9 (120)</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2 h-14 leading-relaxed group-hover:text-primary transition-colors">{course.title}</h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded"><Video size={14} /> {course.chapters} 章節</span>
                    <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded"><FileText size={14} /> 講義</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                        <span className="text-xs text-gray-400 line-through mr-2">NT$ {Math.round(course.price * 1.2)}</span>
                        <span className="text-primary font-black text-xl">NT$ {course.price}</span>
                    </div>
                    <button className="px-5 py-2.5 bg-blue-50 text-primary hover:bg-primary hover:text-white text-sm rounded-lg font-bold transition-colors">
                      試看
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link to="/online" className="inline-block w-full py-3 border border-gray-300 rounded-xl text-gray-600 font-bold hover:bg-gray-50 transition-colors">查看所有課程 &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-accent/80 backdrop-blur-sm transition-opacity" onClick={() => setSelectedCourse(null)}></div>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col md:flex-row animate-scale-in">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/10 text-white hover:bg-white/20 backdrop-blur rounded-full transition-colors md:text-gray-600 md:bg-gray-100 md:hover:bg-gray-200"
            >
              <X size={24} />
            </button>

            {/* Left: Video Preview & Key Info */}
            <div className="w-full md:w-5/12 bg-gray-900 text-white p-6 md:p-10 flex flex-col relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

               <div className="relative z-10">
                   <div className="aspect-video bg-gray-800 rounded-xl mb-6 flex items-center justify-center relative group cursor-pointer overflow-hidden shadow-2xl border border-gray-700">
                      <img src={selectedCourse.thumbnail} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="preview" />
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse">
                              <Play size={32} fill="white" className="ml-1"/>
                          </div>
                      </div>
                      <div className="absolute bottom-3 left-3 text-xs bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/10">免費試看 5:00</div>
                   </div>

                   <h3 className="text-2xl font-bold mb-4 leading-tight">{selectedCourse.title}</h3>

                   <div className="space-y-4 text-gray-300 text-sm mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
                     <div className="flex items-center gap-3"><Clock size={18} className="text-secondary"/> 總時數：{selectedCourse.duration}</div>
                     <div className="flex items-center gap-3"><Video size={18} className="text-secondary"/> 章節數：{selectedCourse.chapters} 堂精選課程</div>
                     <div className="flex items-center gap-3"><FileText size={18} className="text-secondary"/> 教材：附贈完整講義 PDF</div>
                   </div>

                   <div className="mt-auto">
                     <div className="flex items-end gap-3 mb-4">
                        <div className="text-4xl font-bold text-secondary">NT$ {selectedCourse.price}</div>
                        <div className="text-gray-400 line-through mb-1.5 text-sm">原價 {Math.round(selectedCourse.price * 1.2)}</div>
                     </div>
                     <button className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg shadow-blue-900/50 transform hover:-translate-y-1">
                        <ShoppingCart size={20}/> 立即購買課程
                     </button>
                   </div>
               </div>
            </div>

            {/* Right: Description & Syllabus */}
            <div className="w-full md:w-7/12 p-6 md:p-10 bg-white overflow-y-auto">
               <div className="mb-10">
                 <h4 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-secondary rounded-full"></span> 課程簡介
                 </h4>
                 <p className="text-gray-600 leading-relaxed text-lg">{selectedCourse.description}</p>
               </div>

               <div className="mb-10">
                 <h4 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full"></span> 適合對象
                 </h4>
                 <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-primary font-medium">
                    {selectedCourse.targetAudience}
                 </div>
               </div>

               <div>
                 <h4 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-accent rounded-full"></span> 課程大綱
                 </h4>
                 <div className="space-y-3">
                   {selectedCourse.syllabus.map((item, idx) => (
                     <div key={idx} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-all group cursor-pointer bg-white shadow-sm">
                       <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-sm font-bold group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                         {idx + 1}
                       </div>
                       <span className="text-gray-700 font-medium group-hover:text-accent transition-colors">{item}</span>
                       <div className="ml-auto w-8 h-8 flex items-center justify-center rounded-full text-gray-300 group-hover:text-primary group-hover:bg-blue-50 transition-all">
                           <Play size={16} fill="currentColor"/>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
