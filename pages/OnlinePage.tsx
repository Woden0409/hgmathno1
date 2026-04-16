import React, { useState } from 'react';
import { BookOpen, Video, Play, Clock, FileText, Star, X, ShoppingCart, ArrowRight } from 'lucide-react';

interface OnlineCourse {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  chapters: number;
  description: string;
  targetAudience: string;
  syllabus: string[];
  price: number;
  category: string;
}

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
    price: 2800,
    category: '國中',
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
    price: 3200,
    category: '高中',
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
    price: 4500,
    category: '高中',
  },
  {
    id: 'oc4',
    title: '國中數學基礎班：代數篇',
    thumbnail: 'https://picsum.photos/600/400?random=23',
    duration: '10 小時',
    chapters: 20,
    description: '從正負數到方程式，建立扎實的代數基礎。適合剛升國中或數學基礎較弱的學生。',
    targetAudience: '國一至國二學生',
    syllabus: ['正負數運算', '一元一次方程式', '二元一次方程式', '不等式', '多項式'],
    price: 2500,
    category: '國中',
  },
  {
    id: 'oc5',
    title: '國小數學銜接班',
    thumbnail: 'https://picsum.photos/600/400?random=24',
    duration: '8 小時',
    chapters: 16,
    description: '針對升國中學生，複習國小重點並預習國中內容，無縫銜接國中課程。',
    targetAudience: '小六升國一學生',
    syllabus: ['分數運算複習', '小數運算複習', '正負數預習', '國中數學概論'],
    price: 1800,
    category: '國小',
  },
  {
    id: 'oc6',
    title: '會考作文滿分攻略',
    thumbnail: 'https://picsum.photos/600/400?random=25',
    duration: '6 小時',
    chapters: 12,
    description: '從審題、布局到修辭，完整解析會考作文評分標準，傳授高分寫作技巧。',
    targetAudience: '國三會考生',
    syllabus: ['審題技巧', '文章架構', '開頭結尾寫法', '修辭應用', '範文解析'],
    price: 2200,
    category: '國中',
  },
];

const CATEGORIES = ['全部', '國小', '國中', '高中'];

const OnlinePage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<OnlineCourse | null>(null);
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredCourses = activeCategory === '全部'
    ? ONLINE_COURSES
    : ONLINE_COURSES.filter(course => course.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-accent via-blue-900 to-primary py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-secondary text-sm font-bold mb-6">
            <Video size={16} /> E-Learning Platform
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">線上課程專區</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            打破時間與空間的限制，讓名師隨時隨地成為你的家教。高清畫質、重點剪輯，學習效率加倍。
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[70px] z-30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16 bg-bgLight">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100 transform hover:-translate-y-1"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play size={32} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2.5 py-1 rounded-md font-bold">
                    {course.category}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur text-white text-xs px-2.5 py-1 rounded-md flex items-center gap-1.5 font-medium border border-white/20">
                    <Clock size={12} /> {course.duration}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white bg-accent px-2 py-1 rounded">熱門課程</span>
                    <span className="flex items-center gap-1 text-xs font-bold text-gray-500">
                      <Star size={12} className="text-secondary" fill="#F7B500" /> 4.9 (120)
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2 h-14 leading-relaxed group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded">
                      <Video size={14} /> {course.chapters} 章節
                    </span>
                    <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded">
                      <FileText size={14} /> 講義
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400 line-through mr-2">
                        NT$ {Math.round(course.price * 1.2)}
                      </span>
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

          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">此分類目前沒有課程</p>
            </div>
          )}
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-accent/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCourse(null)}
          ></div>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col md:flex-row animate-fade-in-up">
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
                  <img
                    src={selectedCourse.thumbnail}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                    alt="preview"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse">
                      <Play size={32} fill="white" className="ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-xs bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/10">
                    免費試看 5:00
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-tight">{selectedCourse.title}</h3>

                <div className="space-y-4 text-gray-300 text-sm mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-secondary" /> 總時數：{selectedCourse.duration}
                  </div>
                  <div className="flex items-center gap-3">
                    <Video size={18} className="text-secondary" /> 章節數：{selectedCourse.chapters} 堂精選課程
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-secondary" /> 教材：附贈完整講義 PDF
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-end gap-3 mb-4">
                    <div className="text-4xl font-bold text-secondary">NT$ {selectedCourse.price}</div>
                    <div className="text-gray-400 line-through mb-1.5 text-sm">
                      原價 {Math.round(selectedCourse.price * 1.2)}
                    </div>
                  </div>
                  <button className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg shadow-blue-900/50 transform hover:-translate-y-1">
                    <ShoppingCart size={20} /> 立即購買課程
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
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-all group cursor-pointer bg-white shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-sm font-bold group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-accent transition-colors">
                        {item}
                      </span>
                      <div className="ml-auto w-8 h-8 flex items-center justify-center rounded-full text-gray-300 group-hover:text-primary group-hover:bg-blue-50 transition-all">
                        <Play size={16} fill="currentColor" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlinePage;
