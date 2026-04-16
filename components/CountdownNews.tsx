import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

// Countdown Target Dates (Update these for each year)
const EXAM_DATES = {
  juniorHighExam: new Date('2026-05-16T08:30:00'), // 國中會考
  collegeExam: new Date('2027-01-16T08:30:00'), // 學測
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const CountdownTimer: React.FC<{ targetDate: Date; title: string; subtitle: string }> = ({
  targetDate,
  title,
  subtitle
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-primary text-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
        <span className="text-2xl md:text-3xl font-black">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-xs md:text-sm text-gray-500 mt-2 font-medium">{label}</span>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
          <Calendar size={20} className="text-secondary" />
        </div>
        <div>
          <h3 className="font-bold text-accent text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
      <div className="flex justify-center gap-3 md:gap-4">
        <TimeUnit value={timeLeft.days} label="天" />
        <TimeUnit value={timeLeft.hours} label="時" />
        <TimeUnit value={timeLeft.minutes} label="分" />
        <TimeUnit value={timeLeft.seconds} label="秒" />
      </div>
    </div>
  );
};

// News Data
const NEWS_ITEMS = [
  {
    id: 1,
    title: '114年國中教育會考榜單公告',
    date: '2025-06-15',
    image: 'https://picsum.photos/400/300?random=30',
    excerpt: '恭喜本班學員在114年國中會考取得優異成績，5A++人數再創新高！',
    tag: '榜單',
  },
  {
    id: 2,
    title: '暑期密集班開始報名',
    date: '2025-06-01',
    image: 'https://picsum.photos/400/300?random=31',
    excerpt: '2025暑期密集衝刺班即日起開放報名，名額有限，額滿為止！',
    tag: '課程',
  },
  {
    id: 3,
    title: '國三模擬考時間公告',
    date: '2025-05-20',
    image: 'https://picsum.photos/400/300?random=32',
    excerpt: '國九第一次模擬考訂於8月底舉行，請同學提前準備。',
    tag: '公告',
  },
];

export const CountdownSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-bgLight">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Countdown</span>
          <h2 className="text-3xl md:text-4xl font-black text-accent mb-4">考試倒數計時</h2>
          <p className="text-gray-600 max-w-xl mx-auto">把握每一分每一秒，為夢想全力以赴！</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <CountdownTimer
            targetDate={EXAM_DATES.juniorHighExam}
            title="國中會考倒數"
            subtitle="115年國中教育會考"
          />
          <CountdownTimer
            targetDate={EXAM_DATES.collegeExam}
            title="大學學測倒數"
            subtitle="116年學科能力測驗"
          />
        </div>
      </div>
    </section>
  );
};

export const NewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Latest News</span>
            <h2 className="text-3xl md:text-4xl font-black text-accent mb-4">最新消息</h2>
            <p className="text-gray-600">掌握最新課程資訊與學習動態</p>
          </div>
          <Link
            to="/news"
            className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline mt-4 md:mt-0"
          >
            查看所有消息 <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-float transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {news.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Clock size={14} />
                  <span>{news.date}</span>
                </div>
                <h3 className="font-bold text-accent text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{news.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-xl text-gray-600 font-bold hover:bg-gray-50 transition-colors"
          >
            查看所有消息 <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
