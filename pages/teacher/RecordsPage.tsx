import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Umbrella, BedDouble, Ban, GraduationCap, Clock, Check, X } from 'lucide-react';

type TabType = 'leave' | 'substitute';

interface LeaveRecord {
  id: string;
  type: 'personal' | 'sick' | 'official';
  title: string;
  date: string;
  period: string;
  reason?: string;
  status: 'pending' | 'approved' | 'rejected';
  statusNote?: string;
  displayDate: string;
}

interface SubstituteRecord {
  id: string;
  subject: string;
  teacher: string;
  date: string;
  period: string;
  location: string;
  amount: number;
  status: 'pending' | 'paid';
}

const LEAVE_RECORDS: LeaveRecord[] = [
  {
    id: 'l1',
    type: 'personal',
    title: '事假申請',
    date: '11/02',
    period: '第 3-5 節',
    reason: '家庭因素處理...',
    status: 'pending',
    displayDate: '今天',
  },
  {
    id: 'l2',
    type: 'sick',
    title: '病假申請',
    date: '10/15',
    period: '全天',
    status: 'approved',
    displayDate: '10/15',
  },
  {
    id: 'l3',
    type: 'official',
    title: '公假申請',
    date: '09/20',
    period: '第 1 節',
    status: 'rejected',
    statusNote: '附件不足',
    displayDate: '09/20',
  },
];

const SUBSTITUTE_RECORDS: SubstituteRecord[] = [
  {
    id: 's1',
    subject: '英文科',
    teacher: '王大明',
    date: '10/28',
    period: '第 3 節',
    location: '語言教室 A',
    amount: 400,
    status: 'pending',
  },
  {
    id: 's2',
    subject: '數學科',
    teacher: '李曉華',
    date: '10/20',
    period: '第 6-7 節',
    location: '201 教室',
    amount: 800,
    status: 'paid',
  },
];

const RecordsPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('leave');

  const getLeaveIcon = (type: string) => {
    switch (type) {
      case 'personal':
        return <Umbrella size={20} />;
      case 'sick':
        return <BedDouble size={20} />;
      case 'official':
        return <Ban size={20} />;
      default:
        return <Clock size={20} />;
    }
  };

  const getLeaveIconStyle = (type: string) => {
    switch (type) {
      case 'personal':
        return 'text-primary';
      case 'sick':
        return 'text-gray-500';
      case 'official':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-yellow-50 text-yellow-600">
            <Clock size={12} /> 簽核中
          </span>
        );
      case 'approved':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-600">
            <Check size={12} /> 已核准
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600">
            <X size={12} /> 退回
          </span>
        );
      case 'paid':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-600">
            <Check size={12} /> 已入帳
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-8 flex justify-center">
      <div className="w-full max-w-xl mx-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative min-h-[80vh]">
          {/* Header */}
          <div className="bg-primary text-white p-6 pb-20 rounded-b-[2rem]">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate('/teacher')}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-xl font-bold">紀錄查詢與簽核</h1>
              <div className="w-10"></div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-4 px-4 -mt-12 relative z-10">
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
              <span className="block text-2xl font-black text-yellow-500">1</span>
              <span className="text-xs text-gray-500">待審核</span>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
              <span className="block text-2xl font-black text-primary">3.5</span>
              <span className="text-xs text-gray-500">剩餘假別</span>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
              <span className="block text-2xl font-black text-primary">$2,400</span>
              <span className="text-xs text-gray-500">本月代課費</span>
            </div>
          </div>

          {/* Toggle */}
          <div className="mx-4 mt-8 bg-gray-100 p-1 rounded-full flex relative">
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow transition-transform duration-300 ${
                activeTab === 'substitute' ? 'translate-x-full' : ''
              }`}
            ></div>
            <button
              onClick={() => setActiveTab('leave')}
              className={`flex-1 py-3 rounded-full font-medium z-10 transition-colors ${
                activeTab === 'leave' ? 'text-primary' : 'text-gray-500'
              }`}
            >
              請假紀錄
            </button>
            <button
              onClick={() => setActiveTab('substitute')}
              className={`flex-1 py-3 rounded-full font-medium z-10 transition-colors ${
                activeTab === 'substitute' ? 'text-primary' : 'text-gray-500'
              }`}
            >
              代課收入
            </button>
          </div>

          {/* Records List */}
          <div className="px-4 mt-6 pb-8">
            {activeTab === 'leave' && (
              <div className="space-y-1">
                {LEAVE_RECORDS.map((record) => (
                  <div
                    key={record.id}
                    className="flex items-center justify-between py-5 border-b border-gray-100 animate-fade-in"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center ${getLeaveIconStyle(record.type)}`}>
                        {getLeaveIcon(record.type)}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{record.title}</h3>
                        <p className="text-sm text-gray-500">
                          {record.date} (週{record.date === '11/02' ? '四' : '一'}) {record.period}
                        </p>
                        {record.reason && (
                          <p className="text-xs text-gray-400 mt-1">事由：{record.reason}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(record.status)}
                      {record.statusNote && (
                        <p className="text-xs text-red-500 mt-1">{record.statusNote}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">{record.displayDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'substitute' && (
              <div className="space-y-1">
                {SUBSTITUTE_RECORDS.map((record) => (
                  <div
                    key={record.id}
                    className="flex items-center justify-between py-5 border-b border-gray-100 animate-fade-in"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">
                          代課：{record.subject} ({record.teacher})
                        </h3>
                        <p className="text-sm text-gray-500">
                          {record.date} (週三) {record.period}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{record.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-lg font-bold text-primary">+${record.amount}</span>
                      {record.status === 'pending' ? (
                        <span className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full">
                          結算中
                        </span>
                      ) : (
                        getStatusBadge(record.status)
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordsPage;
