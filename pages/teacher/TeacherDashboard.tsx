import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, ClipboardList, Headset } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();

  const cards = [
    {
      id: 'leave',
      title: '請假申請',
      subtitle: '病假 / 事假 / 公假',
      icon: Calendar,
      quickAction: '填寫電子假單，系統自動通知教務處與群組',
      stats: [
        { label: '剩餘特休', value: '3 天' },
        { label: '本學期請假', value: '2 次' },
      ],
      link: '/teacher/leave',
    },
    {
      id: 'substitute',
      title: '代課媒合池',
      subtitle: '尋找代課 / 應徵代課',
      icon: Users,
      quickAction: '發布您的代課需求，或協助其他老師代課',
      stats: [
        { label: '急需代課案件', value: '2 件', highlight: true },
        { label: '我的媒合請求', value: '進行中' },
      ],
      link: '/teacher/substitute',
    },
    {
      id: 'records',
      title: '紀錄與簽核',
      subtitle: '歷史紀錄 / 鐘點費',
      icon: ClipboardList,
      quickAction: '查詢過往的出缺勤紀錄以及簽核進度狀態',
      stats: [
        { label: '最近一筆', value: '10/25 (已核准)' },
        { label: '代課費結算', value: '已入帳' },
      ],
      link: '/teacher/records',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <header className="text-center py-12 md:py-16 max-w-4xl mx-auto px-4">
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
          TEACHER RESOURCE CENTER
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-accent mb-4">
          教師行政與代課中心
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          簡化行政流程，即時媒合代課。我們致力於提供老師最強的後勤支援，
          <br className="hidden md:block" />
          讓您無論是臨時請假或計畫休假，都能輕鬆安排。
        </p>
        <div className="w-16 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>

        {user && (
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-primary font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            歡迎，{user.name}
          </div>
        )}
      </header>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Link
              key={card.id}
              to={card.link}
              className="group bg-gradient-to-b from-blue-50 to-white rounded-3xl p-8 text-center border border-transparent hover:border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white group-hover:border-primary/20 transition-colors">
                <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center text-primary">
                  <card.icon size={48} />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-black text-accent mb-1">{card.title}</h2>
              <p className="text-primary font-bold text-sm mb-6">{card.subtitle}</p>

              {/* Quick Action Box */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <span className="text-yellow-700 text-xs font-bold tracking-wider uppercase block mb-2">
                  QUICK ACTION
                </span>
                <p className="text-gray-700 text-sm font-medium">"{card.quickAction}"</p>
              </div>

              {/* Stats */}
              <div className="space-y-2 text-gray-600">
                {card.stats.map((stat, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span>{stat.label}：</span>
                    <span className={`font-bold ${stat.highlight ? 'text-red-500' : 'text-primary'}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Floating Contact Button */}
      <button
        onClick={() => alert('將連絡教務處')}
        className="fixed bottom-8 right-8 w-14 h-14 bg-secondary hover:bg-yellow-400 text-white rounded-full shadow-lg shadow-yellow-500/30 flex items-center justify-center transition-transform hover:scale-110 z-40"
        title="聯絡教務處"
      >
        <Headset size={24} />
      </button>
    </div>
  );
};

export default TeacherDashboard;
