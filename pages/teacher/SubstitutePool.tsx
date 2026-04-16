import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Flame, Check, Plus, X, Trash2, Edit } from 'lucide-react';

type TabType = 'find' | 'myPosts' | 'history';

interface SubstituteRequest {
  id: string;
  date: string;
  month: string;
  day: string;
  teacher: string;
  subject: string;
  subjectClass: string;
  period: string;
  location: string;
  isUrgent?: boolean;
  status: 'available' | 'accepted' | 'filled';
  acceptedBy?: string;
}

interface MyPost {
  id: string;
  date: string;
  month: string;
  day: string;
  subject: string;
  subjectClass: string;
  period: string;
  location: string;
  reason: string;
  status: 'pending' | 'matched' | 'cancelled';
  matchedTeacher?: string;
}

interface HistoryRecord {
  id: string;
  type: 'posted' | 'accepted';
  date: string;
  month: string;
  day: string;
  subject: string;
  subjectClass: string;
  teacher: string;
  period: string;
  location: string;
  amount?: number;
  status: 'completed' | 'cancelled';
}

const SUBSTITUTE_DATA: SubstituteRequest[] = [
  {
    id: '1',
    date: '2025-10-26',
    month: 'OCT',
    day: '26',
    teacher: '李曉華',
    subject: '數學',
    subjectClass: 'math',
    period: '第 6-7 節 (14:20 - 16:10)',
    location: '201 教室',
    isUrgent: true,
    status: 'available',
  },
  {
    id: '2',
    date: '2025-10-28',
    month: 'OCT',
    day: '28',
    teacher: '王大明',
    subject: '英文',
    subjectClass: 'eng',
    period: '第 3 節 (10:10 - 11:00)',
    location: '語言教室 A',
    status: 'available',
  },
  {
    id: '3',
    date: '2025-10-25',
    month: 'OCT',
    day: '25',
    teacher: '張志豪',
    subject: '理化',
    subjectClass: 'sci',
    period: '第 1 節 (08:10)',
    location: '實驗室',
    status: 'filled',
    acceptedBy: '陳老師',
  },
];

const MY_POSTS_DATA: MyPost[] = [
  {
    id: 'p1',
    date: '2025-11-02',
    month: 'NOV',
    day: '02',
    subject: '國文',
    subjectClass: 'chi',
    period: '第 3-5 節 (10:10 - 13:00)',
    location: '301 教室',
    reason: '家庭因素請假',
    status: 'pending',
  },
  {
    id: 'p2',
    date: '2025-10-20',
    month: 'OCT',
    day: '20',
    subject: '國文',
    subjectClass: 'chi',
    period: '第 1-2 節 (08:10 - 10:00)',
    location: '301 教室',
    reason: '身體不適',
    status: 'matched',
    matchedTeacher: '林老師',
  },
];

const HISTORY_DATA: HistoryRecord[] = [
  {
    id: 'h1',
    type: 'accepted',
    date: '2025-10-15',
    month: 'OCT',
    day: '15',
    subject: '數學',
    subjectClass: 'math',
    teacher: '李曉華',
    period: '第 6-7 節',
    location: '201 教室',
    amount: 800,
    status: 'completed',
  },
  {
    id: 'h2',
    type: 'accepted',
    date: '2025-10-10',
    month: 'OCT',
    day: '10',
    subject: '英文',
    subjectClass: 'eng',
    teacher: '王大明',
    period: '第 3 節',
    location: '語言教室 A',
    amount: 400,
    status: 'completed',
  },
  {
    id: 'h3',
    type: 'posted',
    date: '2025-09-28',
    month: 'SEP',
    day: '28',
    subject: '國文',
    subjectClass: 'chi',
    teacher: '陳老師 代課',
    period: '第 1-2 節',
    location: '301 教室',
    status: 'completed',
  },
  {
    id: 'h4',
    type: 'posted',
    date: '2025-09-15',
    month: 'SEP',
    day: '15',
    subject: '國文',
    subjectClass: 'chi',
    teacher: '無人接手',
    period: '第 5 節',
    location: '301 教室',
    status: 'cancelled',
  },
];

const SubstitutePool: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('find');
  const [requests, setRequests] = useState(SUBSTITUTE_DATA);
  const [myPosts, setMyPosts] = useState(MY_POSTS_DATA);

  const handleAccept = (id: string) => {
    if (confirm('確定要接下這堂代課嗎？系統將通知原授課老師。')) {
      setRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, status: 'accepted' as const, acceptedBy: '您' } : req
        )
      );
      alert('接課成功！已加入您的行事曆。');
    }
  };

  const handleCancelPost = (id: string) => {
    if (confirm('確定要取消這筆代課需求嗎？')) {
      setMyPosts((prev) =>
        prev.map((post) =>
          post.id === id ? { ...post, status: 'cancelled' as const } : post
        )
      );
      alert('已取消代課需求。');
    }
  };

  const handlePost = () => {
    alert('將跳轉至請假刊登頁面...');
    navigate('/teacher/leave');
  };

  const getSubjectStyle = (subjectClass: string) => {
    switch (subjectClass) {
      case 'math':
        return 'bg-blue-100 text-blue-700';
      case 'eng':
        return 'bg-yellow-100 text-yellow-700';
      case 'sci':
        return 'bg-green-100 text-green-700';
      case 'chi':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const tabs = [
    { id: 'find' as TabType, label: '尋找代課' },
    { id: 'myPosts' as TabType, label: '我的刊登' },
    { id: 'history' as TabType, label: '歷史紀錄' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-8 flex justify-center">
      <div className="w-full max-w-xl mx-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative min-h-[80vh]">
          {/* Header */}
          <div className="bg-primary text-white p-6 pb-16">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate('/teacher')}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-xl font-bold">代課媒合池</h1>
              <div className="w-10"></div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="bg-white rounded-2xl shadow-lg mx-4 -mt-10 relative z-10 p-5 flex justify-around">
            <div className="text-center">
              <span className="block text-2xl font-black text-primary">
                {requests.filter(r => r.status === 'available').length}
              </span>
              <span className="text-xs text-gray-500">可接案件</span>
            </div>
            <div className="text-center border-x border-gray-200 px-6">
              <span className="block text-2xl font-black text-primary">$1,200</span>
              <span className="text-xs text-gray-500">本月代課費</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-black text-primary">
                {requests.filter(r => r.status === 'accepted').length + 2}
              </span>
              <span className="text-xs text-gray-500">已接課程</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 text-center font-medium relative transition-colors ${
                  activeTab === tab.id ? 'text-primary font-bold' : 'text-gray-500'
                }`}
              >
                {tab.label}
                {tab.id === 'myPosts' && myPosts.filter(p => p.status === 'pending').length > 0 && (
                  <span className="absolute top-3 right-1/4 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-secondary rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 pb-24">
            {/* 尋找代課 Tab */}
            {activeTab === 'find' && (
              <>
                {requests.map((req) => (
                  <div
                    key={req.id}
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                      req.status === 'filled'
                        ? 'bg-gray-50 opacity-60 border-gray-200'
                        : 'bg-white border-gray-100 hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Date Box */}
                    <div
                      className={`flex-shrink-0 w-14 text-center py-2 rounded-xl ${
                        req.status === 'filled' ? 'bg-gray-200' : 'bg-blue-50'
                      }`}
                    >
                      <span className="block text-xs text-gray-500 font-bold">{req.month}</span>
                      <span
                        className={`block text-2xl font-black ${
                          req.status === 'filled' ? 'text-gray-400' : 'text-primary'
                        }`}
                      >
                        {req.day}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        {req.isUrgent && req.status === 'available' && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-600">
                            <Flame size={12} /> 急徵
                          </span>
                        )}
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${getSubjectStyle(req.subjectClass)}`}>
                          {req.subject}
                        </span>
                        <span className={`font-bold ${req.status === 'filled' ? 'text-gray-400' : 'text-gray-800'}`}>
                          {req.teacher} 老師
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock size={14} /> {req.period}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                        <MapPin size={12} /> {req.location}
                      </div>
                      {req.status === 'filled' && (
                        <div className="text-green-600 text-sm font-medium mt-1 flex items-center gap-1">
                          <Check size={14} /> 已由 {req.acceptedBy} 接手
                        </div>
                      )}
                    </div>

                    {/* Action */}
                    <div className="flex-shrink-0">
                      {req.status === 'available' && (
                        <button
                          onClick={() => handleAccept(req.id)}
                          className="px-4 py-2 bg-primary hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors"
                        >
                          我要接課
                        </button>
                      )}
                      {req.status === 'accepted' && (
                        <button
                          disabled
                          className="px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full flex items-center gap-1"
                        >
                          <Check size={14} /> 已接手
                        </button>
                      )}
                      {req.status === 'filled' && (
                        <button
                          disabled
                          className="px-4 py-2 bg-gray-200 text-gray-500 text-sm font-bold rounded-full"
                        >
                          已額滿
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* 我的刊登 Tab */}
            {activeTab === 'myPosts' && (
              <>
                {myPosts.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <p className="mb-4">目前沒有刊登的代課需求</p>
                    <button
                      onClick={handlePost}
                      className="px-6 py-2 bg-primary text-white rounded-full font-bold"
                    >
                      新增需求
                    </button>
                  </div>
                ) : (
                  myPosts.map((post) => (
                    <div
                      key={post.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        post.status === 'cancelled'
                          ? 'bg-gray-50 opacity-60 border-gray-200'
                          : post.status === 'matched'
                          ? 'bg-green-50 border-green-200'
                          : 'bg-white border-gray-100'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Date Box */}
                        <div
                          className={`flex-shrink-0 w-14 text-center py-2 rounded-xl ${
                            post.status === 'cancelled'
                              ? 'bg-gray-200'
                              : post.status === 'matched'
                              ? 'bg-green-100'
                              : 'bg-yellow-50'
                          }`}
                        >
                          <span className="block text-xs text-gray-500 font-bold">{post.month}</span>
                          <span
                            className={`block text-2xl font-black ${
                              post.status === 'cancelled'
                                ? 'text-gray-400'
                                : post.status === 'matched'
                                ? 'text-green-600'
                                : 'text-yellow-600'
                            }`}
                          >
                            {post.day}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${getSubjectStyle(post.subjectClass)}`}>
                              {post.subject}
                            </span>
                            {post.status === 'pending' && (
                              <span className="px-2 py-0.5 rounded text-xs font-bold bg-yellow-100 text-yellow-700">
                                等待媒合中
                              </span>
                            )}
                            {post.status === 'matched' && (
                              <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-700 flex items-center gap-1">
                                <Check size={12} /> 已媒合
                              </span>
                            )}
                            {post.status === 'cancelled' && (
                              <span className="px-2 py-0.5 rounded text-xs font-bold bg-gray-200 text-gray-500">
                                已取消
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock size={14} /> {post.period}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                            <MapPin size={12} /> {post.location}
                          </div>
                          <div className="text-xs text-gray-500 mt-2 bg-gray-50 p-2 rounded">
                            事由：{post.reason}
                          </div>
                          {post.status === 'matched' && post.matchedTeacher && (
                            <div className="text-green-600 text-sm font-medium mt-2 flex items-center gap-1">
                              <Check size={14} /> 代課老師：{post.matchedTeacher}
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        {post.status === 'pending' && (
                          <div className="flex-shrink-0 flex flex-col gap-2">
                            <button
                              onClick={() => alert('編輯功能開發中')}
                              className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors"
                              title="編輯"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => handleCancelPost(post.id)}
                              className="p-2 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg transition-colors"
                              title="取消"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </>
            )}

            {/* 歷史紀錄 Tab */}
            {activeTab === 'history' && (
              <>
                {HISTORY_DATA.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <p>尚無歷史紀錄</p>
                  </div>
                ) : (
                  HISTORY_DATA.map((record) => (
                    <div
                      key={record.id}
                      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                        record.status === 'cancelled'
                          ? 'bg-gray-50 opacity-60 border-gray-200'
                          : 'bg-white border-gray-100'
                      }`}
                    >
                      {/* Date Box */}
                      <div
                        className={`flex-shrink-0 w-14 text-center py-2 rounded-xl ${
                          record.status === 'cancelled' ? 'bg-gray-200' : 'bg-blue-50'
                        }`}
                      >
                        <span className="block text-xs text-gray-500 font-bold">{record.month}</span>
                        <span
                          className={`block text-2xl font-black ${
                            record.status === 'cancelled' ? 'text-gray-400' : 'text-primary'
                          }`}
                        >
                          {record.day}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-bold ${
                              record.type === 'accepted'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-orange-100 text-orange-700'
                            }`}
                          >
                            {record.type === 'accepted' ? '接課' : '刊登'}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${getSubjectStyle(record.subjectClass)}`}>
                            {record.subject}
                          </span>
                        </div>
                        <div className="font-medium text-gray-800 text-sm">
                          {record.type === 'accepted' ? `代 ${record.teacher} 老師` : record.teacher}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <Clock size={12} /> {record.period}
                          <span className="mx-1">•</span>
                          <MapPin size={12} /> {record.location}
                        </div>
                      </div>

                      {/* Status & Amount */}
                      <div className="flex-shrink-0 text-right">
                        {record.type === 'accepted' && record.amount && record.status === 'completed' && (
                          <span className="block text-lg font-bold text-green-600">+${record.amount}</span>
                        )}
                        {record.status === 'completed' ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-green-50 text-green-600">
                            <Check size={12} /> 已完成
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-500">
                            <X size={12} /> 已取消
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </>
            )}
          </div>

          {/* FAB */}
          <button
            onClick={handlePost}
            className="absolute bottom-6 right-6 w-14 h-14 bg-secondary hover:bg-yellow-400 text-yellow-900 rounded-full shadow-lg shadow-yellow-500/30 flex items-center justify-center transition-transform hover:scale-110 z-20"
            title="刊登需求"
          >
            <Plus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubstitutePool;
