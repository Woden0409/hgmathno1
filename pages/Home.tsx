import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Newspaper, BookOpen, GraduationCap, Award, ChevronRight, Calendar, Clock, MapPin, Phone, CheckCircle } from 'lucide-react';
import { CountdownSection } from '../components/CountdownNews';

// Subject Teams Data
const SUBJECT_TEAMS = [
  {
    name: '數學團隊',
    description: '將難懂的數學解碼成淺顯易懂的觀念，著重分析能力的培養及聯想力的延伸，再複雜的題型，皆能快速迎刃而解！'
  },
  {
    name: '理化團隊',
    description: '將艱澀的理化難題，搭配精闢觀念解析及圖像重點解說，建立同學深刻印象，並激發同學對理化學習的高度興趣。'
  },
  {
    name: '英文團隊',
    description: '文法解析淺顯易懂，針對會考必考重點精編重點解析，並搭配歷屆會考試題，讓同學精準掌握準備方向獲取高分。'
  },
  {
    name: '國文團隊',
    description: '精編講義著重歸納整理，完全掌握會考的必考題型，引導式寫作訓練，讓同學在作文上也能拿到高分。'
  }
];

// Sidebar News/Announcements
const SIDEBAR_NEWS = [
  { id: 1, title: '114年國中教育會考榜單', image: 'https://picsum.photos/300/150?random=40', tag: '榜單' },
  { id: 2, title: '暑期密集班課表公告', image: 'https://picsum.photos/300/150?random=41', tag: '課程' },
  { id: 3, title: '國九第一次模擬考', image: 'https://picsum.photos/300/150?random=42', tag: '公告' },
  { id: 4, title: '寒假課程火熱報名中', image: 'https://picsum.photos/300/150?random=43', tag: '報名' },
];

// Education Cards
const EDUCATION_CARDS = [
  {
    id: 'elementary',
    title: '國小部',
    image: 'https://picsum.photos/400/250?random=50',
    items: ['國小精準數學', '小學跳級美語', '安親課輔班'],
    link: '/courses?tab=elementary',
    linkText: '國小三至六年級'
  },
  {
    id: 'junior',
    title: '國中部',
    image: 'https://picsum.photos/400/250?random=51',
    items: ['國七 - 實力養成班', '國八 - 實力進階班', '國九 - 會考5A精熟班', '數理4人小班制'],
    link: '/courses?tab=junior',
    linkText: '國中七至九年級'
  },
  {
    id: 'senior',
    title: '高中部',
    image: 'https://picsum.photos/400/250?random=52',
    items: ['高一 - 數學精修班', '高二 - 進階數理班', '高三 - 學測衝刺班'],
    link: '/courses?tab=senior',
    linkText: '高中一至三年級'
  }
];

// Quick Links
const QUICK_LINKS = [
  { title: '升學資訊', links: ['12年國民基本教育', '國中教育會考', '大學入學考試中心'] },
  { title: '學校連結', links: ['中正國小', '金華國中', '建國中學', '北一女中'] }
];

const Home: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative pt-[52px] overflow-hidden">
        {/* Image Area */}
        <div className="relative bg-gray-100">
          <img
            src="/hero-banner3.png"
            alt="宏觀教育"
            className="w-full h-auto block"
          />
          {/* Navigation Arrows */}
          <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-white transition-colors">
            <ChevronRight size={28} className="rotate-180" />
          </button>
          <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-white transition-colors">
            <ChevronRight size={28} />
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-accent mb-4">
            學習不只是教育，更是<span className="text-primary border-b-4 border-primary pb-1">啟發</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-700 mb-2">王者之選，菁英之路。</p>
          <p className="text-lg text-secondary font-bold mb-6">"對的讀書方法，造就高效好成績"</p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            宏觀教育創立以來，始終堅持教育理想，認真教學的升學文理補習班。
            <br className="hidden md:block" />
            我們相信，正確的學習策略比盲目的努力更重要。歡迎家長和同學的加入與指教。
          </p>
        </div>
      </section>

      {/* Feature Links (Teachers / News) */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
            <Link
              to="/teachers"
              className="group bg-primary hover:bg-blue-700 text-white px-12 py-8 rounded-2xl text-center transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-2 flex items-center justify-center gap-3">
                <Users size={40} /> Teachers
              </h3>
              <p className="text-secondary font-bold text-lg">鑽石級陣容，打造耀眼成績</p>
            </Link>
            <Link
              to="/about"
              className="group bg-primary hover:bg-blue-700 text-white px-12 py-8 rounded-2xl text-center transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-2 flex items-center justify-center gap-3">
                <Newspaper size={40} /> News
              </h3>
              <p className="text-secondary font-bold text-lg">最新課程、學校學生資訊</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content: Subject Teams + Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Subject Teams */}
            <div className="lg:col-span-3 space-y-10">
              {SUBJECT_TEAMS.map((team, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="inline-block text-xl md:text-2xl font-bold text-primary border-b-2 border-primary pb-2 mb-4">
                    {team.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    {team.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2 space-y-4">
              {SIDEBAR_NEWS.map((news) => (
                <div key={news.id} className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                      {news.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </p>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-100 pb-16">
        {/* Blue Header */}
        <div className="bg-primary text-white py-12 mb-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-2">Education</h2>
            <p className="text-secondary font-bold text-xl">在地深耕 · 專業最優</p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EDUCATION_CARDS.map((card) => (
              <div key={card.id} className="text-center">
                <div className="mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-accent mb-4">{card.title}</h3>
                <div className="space-y-2 mb-6">
                  {card.items.map((item, idx) => (
                    <p key={idx} className="text-gray-700">{item}</p>
                  ))}
                </div>
                <Link
                  to={card.link}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                >
                  {card.linkText} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <CountdownSection />

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {QUICK_LINKS.map((section, idx) => (
              <div
                key={idx}
                className="bg-blue-500 text-white p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-4 border-l-4 border-secondary pl-4">
                  | {section.title} |
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {section.links.map((link, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-white/90 hover:text-white hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">準備好開始您的學習之旅了嗎？</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            現在預約免費試聽課程，讓我們幫助您的孩子找到最適合的學習方法！
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="px-10 py-4 bg-secondary hover:bg-yellow-400 text-accent font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Calendar size={20} /> 預約免費試聽
            </button>
            <Link
              to="/courses"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold rounded-xl transition-all flex items-center gap-2"
            >
              <BookOpen size={20} /> 瀏覽課程介紹
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-secondary" /> 小班制教學
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-secondary" /> 經驗豐富師資
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-secondary" /> 完整課後輔導
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section id="contact" className="py-8 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-secondary" />
                <span>臺北市信義區大道路42巷18號</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-secondary" />
                <span className="font-bold">02-2726-6441</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-secondary" />
                <span>週一至週六 15:00-21:30</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="px-6 py-2 border-2 border-white rounded-lg font-bold hover:bg-white hover:text-accent transition-colors"
            >
              立即預約
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
