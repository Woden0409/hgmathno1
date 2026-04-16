import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag, Calendar, Clock, MessageSquare, Send } from 'lucide-react';

const LEAVE_TYPES = [
  { id: 'sick', label: '病假' },
  { id: 'personal', label: '事假' },
  { id: 'official', label: '公假' },
  { id: 'annual', label: '特休' },
];

const PERIODS = [
  { id: 'p1', label: '第 1 節', time: '08:10' },
  { id: 'p2', label: '第 2 節', time: '09:10' },
  { id: 'p3', label: '第 3 節', time: '10:10' },
  { id: 'p4', label: '第 4 節', time: '11:10' },
  { id: 'noon', label: '午 休', time: '12:00' },
  { id: 'p5', label: '第 5 節', time: '13:20' },
  { id: 'p6', label: '第 6 節', time: '14:20' },
  { id: 'p7', label: '第 7 節', time: '15:20' },
];

const LeaveApplication: React.FC = () => {
  const navigate = useNavigate();
  const [leaveType, setLeaveType] = useState('sick');
  const [date, setDate] = useState('');
  const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);
  const [reason, setReason] = useState('');

  const togglePeriod = (id: string) => {
    setSelectedPeriods((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (!date) {
      alert('請選擇日期');
      return;
    }
    if (selectedPeriods.length === 0) {
      alert('請選擇請假節次');
      return;
    }

    const leaveTypeName = LEAVE_TYPES.find(t => t.id === leaveType)?.label;
    const periodNames = selectedPeriods
      .map(id => PERIODS.find(p => p.id === id)?.label)
      .join('、');

    alert(`請假申請已送出！\n\n假別：${leaveTypeName}\n日期：${date}\n節次：${periodNames}\n\n系統將通知教務處審核。`);
    navigate('/teacher');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-8 flex justify-center">
      <div className="w-full max-w-xl mx-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative">
          {/* Top Decoration */}
          <div className="h-1.5 bg-gradient-to-r from-primary to-secondary"></div>

          {/* Header */}
          <div className="flex items-center gap-4 p-6 border-b border-gray-100">
            <button
              onClick={() => navigate('/teacher')}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold text-accent">填寫請假單</h1>
          </div>

          {/* Form */}
          <div className="p-6 space-y-8">
            {/* Leave Type */}
            <div>
              <label className="flex items-center gap-2 text-primary font-bold mb-4">
                <Tag size={18} /> 選擇假別
              </label>
              <div className="flex flex-wrap gap-3">
                {LEAVE_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setLeaveType(type.id)}
                    className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                      leaveType === type.id
                        ? 'bg-primary text-white shadow-lg shadow-blue-500/30'
                        : 'bg-white border-2 border-gray-200 text-gray-500 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="flex items-center gap-2 text-primary font-bold mb-4">
                <Calendar size={18} /> 選擇日期
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none transition-all text-gray-700"
              />
            </div>

            {/* Period Selection */}
            <div>
              <label className="flex items-center gap-2 text-primary font-bold mb-4">
                <Clock size={18} /> 請假節次 (可複選)
              </label>
              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="grid grid-cols-4 gap-3">
                  {PERIODS.map((period) => (
                    <button
                      key={period.id}
                      onClick={() => togglePeriod(period.id)}
                      className={`p-3 rounded-xl text-center transition-all ${
                        selectedPeriods.includes(period.id)
                          ? 'bg-yellow-50 border-2 border-secondary text-yellow-700 font-bold'
                          : 'bg-white border-2 border-transparent text-gray-500 hover:border-gray-200'
                      }`}
                    >
                      <div className="text-sm font-medium">{period.label}</div>
                      <div className="text-xs text-gray-400 mt-1">{period.time}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Reason */}
            <div>
              <label className="flex items-center gap-2 text-primary font-bold mb-4">
                <MessageSquare size={18} /> 請假事由 / 交辦事項
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="請填寫事由，若有代課老師請在此註明交辦進度..."
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none h-32 text-gray-700"
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4">
              <div className="text-primary font-bold">
                共計：<span className="text-2xl">{selectedPeriods.length}</span> 節
              </div>
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-secondary hover:bg-yellow-400 text-yellow-900 font-bold rounded-full shadow-lg shadow-yellow-500/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                送出申請 <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveApplication;
