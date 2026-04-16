import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Search, User, LogIn, LogOut, Facebook, Instagram, MessageCircle, Megaphone, ChevronDown, Settings, Calendar, Users, ClipboardList } from 'lucide-react';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import OnlinePage from './pages/OnlinePage';
import TeachersPage from './pages/TeachersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Teacher System Pages
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import LeaveApplication from './pages/teacher/LeaveApplication';
import SubstitutePool from './pages/teacher/SubstitutePool';
import RecordsPage from './pages/teacher/RecordsPage';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { user, login, logout, isAuthenticated, isTeacher } = useAuth();

  // Handle Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Prevent default behavior for empty links
  const handleEmptyLink = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const navigateToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const success = login(loginUsername, loginPassword);
    if (success) {
      setIsLoginOpen(false);
      setLoginUsername('');
      setLoginPassword('');
      // 如果是教師，導向教師系統
      if (loginUsername === 'wei') {
        navigate('/teacher');
      }
    } else {
      setLoginError('帳號或密碼錯誤');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {/* Top Blue Border */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-primary z-[60]"></div>

      {/* Navigation */}
      <nav className="fixed top-1.5 left-0 w-full z-50 bg-white shadow-sm py-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={navigateToHome} className="flex items-center gap-2 group">
              <img src="/logo.png" alt="宏觀教育" className="h-14 group-hover:scale-105 transition-transform" />
              <span className="text-2xl font-black tracking-tight text-accent">
                宏觀教育
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {/* 課程介紹 Dropdown */}
              <div className="relative group">
                <button className="text-sm font-bold text-gray-600 hover:text-primary transition-colors flex items-center gap-1">
                  課程介紹 <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[140px]">
                    <Link to="/courses?tab=elementary" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors">國小課程</Link>
                    <Link to="/courses?tab=junior" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors">國中課程</Link>
                    <Link to="/courses?tab=senior" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors">高中課程</Link>
                  </div>
                </div>
              </div>
              <Link to="/online" className="text-sm font-bold text-gray-600 hover:text-primary transition-colors">線上專區</Link>
              <Link to="/teachers" className="text-sm font-bold text-gray-600 hover:text-primary transition-colors">師資陣容</Link>
              <Link to="/about" className="text-sm font-bold text-gray-600 hover:text-primary transition-colors">關於我們</Link>

              {/* 教師系統 Dropdown (只有登入後且是教師才顯示) */}
              {isAuthenticated && isTeacher && (
                <div className="relative group">
                  <button className="text-sm font-bold text-primary hover:text-blue-700 transition-colors flex items-center gap-1">
                    <Settings size={16} /> 教師系統 <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[160px]">
                      <Link to="/teacher" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors">
                        <GraduationCap size={16} /> 行政中心
                      </Link>
                      <Link to="/teacher/leave" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors">
                        <Calendar size={16} /> 請假申請
                      </Link>
                      <Link to="/teacher/substitute" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors">
                        <Users size={16} /> 代課媒合
                      </Link>
                      <Link to="/teacher/records" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors">
                        <ClipboardList size={16} /> 紀錄查詢
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              <div className="h-4 w-[1px] bg-gray-300"></div>

              <button
                className={`p-2 rounded-full transition-colors ${isSearchOpen ? 'text-primary bg-blue-50' : 'text-gray-400 hover:text-primary'}`}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={20} />
              </button>

              {/* 登入/登出按鈕 */}
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 text-sm font-bold text-primary">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">
                      {user?.name[0]}
                    </div>
                    {user?.name}
                  </button>
                  <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[140px]">
                      {isTeacher && (
                        <Link to="/teacher" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors">
                          教師後台
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <LogOut size={16} /> 登出
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsLoginOpen(true)}
                >
                  <User size={20} /> 登入
                </button>
              )}

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/share/1AqtTYeTdZ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <Facebook size={16} />
                </a>
                <a href="https://line.me/R/ti/p/@328maikp" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#00C300] text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <MessageCircle size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E4405F] text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram size={16} />
                </a>
              </div>

              <Link to="/contact" className="px-6 py-2.5 bg-secondary text-white font-bold rounded-full hover:bg-yellow-500 transition-colors shadow-md transform hover:-translate-y-0.5">
                預約試聽
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                className="text-gray-600"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={24} />
              </button>
              <button
                className="text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Search Bar (Expandable) */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-4 shadow-sm animate-fade-in-down">
              <div className="container mx-auto max-w-2xl relative">
                <input
                  type="text"
                  placeholder="搜尋課程、老師或最新消息..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary outline-none"
                  autoFocus
                />
                <Search size={18} className="absolute left-3 top-2.5 text-gray-400"/>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-2 md:hidden animate-fade-in h-screen overflow-y-auto">
            <div className="p-3 font-bold text-gray-700">課程介紹</div>
            <Link to="/courses?tab=elementary" className="pl-8 p-2 hover:bg-blue-50 rounded-lg text-gray-600 text-left text-sm">國小課程</Link>
            <Link to="/courses?tab=junior" className="pl-8 p-2 hover:bg-blue-50 rounded-lg text-gray-600 text-left text-sm">國中課程</Link>
            <Link to="/courses?tab=senior" className="pl-8 p-2 hover:bg-blue-50 rounded-lg text-gray-600 text-left text-sm">高中課程</Link>
            <Link to="/online" className="p-3 hover:bg-blue-50 rounded-lg font-bold text-gray-700 text-left">線上專區</Link>
            <Link to="/teachers" className="p-3 hover:bg-blue-50 rounded-lg font-bold text-gray-700 text-left">師資陣容</Link>
            <Link to="/about" className="p-3 hover:bg-blue-50 rounded-lg font-bold text-gray-700 text-left">關於我們</Link>

            {/* 教師系統選單 (手機版) */}
            {isAuthenticated && isTeacher && (
              <>
                <div className="p-3 font-bold text-primary flex items-center gap-2">
                  <Settings size={18} /> 教師系統
                </div>
                <Link to="/teacher" className="pl-8 p-2 hover:bg-blue-50 rounded-lg text-gray-600 text-left text-sm">行政中心</Link>
                <Link to="/teacher/leave" className="pl-8 p-2 hover:bg-blue-50 rounded-lg text-gray-600 text-left text-sm">請假申請</Link>
                <Link to="/teacher/substitute" className="pl-8 p-2 hover:bg-blue-50 rounded-lg text-gray-600 text-left text-sm">代課媒合</Link>
                <Link to="/teacher/records" className="pl-8 p-2 hover:bg-blue-50 rounded-lg text-gray-600 text-left text-sm">紀錄查詢</Link>
              </>
            )}

            {isAuthenticated ? (
              <>
                <div className="p-3 flex items-center gap-3 text-primary font-bold">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    {user?.name[0]}
                  </div>
                  {user?.name}
                </div>
                <button
                  className="p-3 hover:bg-red-50 rounded-lg font-bold text-red-500 text-left flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <LogOut size={20} /> 登出
                </button>
              </>
            ) : (
              <button
                className="p-3 hover:bg-blue-50 rounded-lg font-bold text-gray-700 text-left flex items-center gap-2"
                onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }}
              >
                <User size={20} /> 會員登入
              </button>
            )}
            <Link to="/contact" className="p-3 bg-primary text-white rounded-lg font-bold text-center shadow-lg shadow-blue-500/30">
              預約試聽
            </Link>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsLoginOpen(false)}></div>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <LogIn size={32} />
                </div>
                <h3 className="text-2xl font-black text-accent">會員登入</h3>
                <p className="text-gray-500 text-sm mt-2">登入以使用完整功能</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">帳號</label>
                  <input
                    type="text"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none"
                    placeholder="請輸入帳號"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">密碼</label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none"
                    placeholder="••••••••"
                  />
                </div>

                {loginError && (
                  <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg">
                    {loginError}
                  </div>
                )}

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                    <span className="text-gray-600">記住我</span>
                  </label>
                  <button type="button" onClick={handleEmptyLink} className="text-primary font-bold hover:underline">忘記密碼?</button>
                </div>
                <button type="submit" className="w-full py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all">
                  登入
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                還沒有帳號? <button type="button" onClick={handleEmptyLink} className="text-primary font-bold hover:underline">立即註冊</button>
              </div>

              {/* 測試帳號提示 */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-xs text-blue-600 font-medium text-center">
                  教師測試帳號：wei / 123
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 text-center text-xs text-gray-400">
              © 宏觀教育學習系統
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Floating CTA Button
const FloatingCTA: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 在教師系統頁面不顯示
  if (location.pathname.startsWith('/teacher')) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-10 z-50 animate-bounce-slow">
      <div className="relative">
        {/* Speech Bubble */}
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          Hot! 歡迎預約試聽
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rotate-45"></div>
        </div>
        {/* Button */}
        <button
          onClick={() => navigate('/contact')}
          className="w-14 h-14 bg-secondary hover:bg-yellow-500 text-white rounded-full shadow-lg shadow-yellow-500/30 flex items-center justify-center transition-all hover:scale-110"
        >
          <Megaphone size={24} />
        </button>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen font-sans relative pb-16 md:pb-0">
      <Navbar />
      {/* Floating CTA Button */}
      <FloatingCTA />
      <main>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/courses" element={<Layout><CoursesPage /></Layout>} />
          <Route path="/online" element={<Layout><OnlinePage /></Layout>} />
          <Route path="/teachers" element={<Layout><TeachersPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

          {/* Teacher System Routes */}
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/teacher/leave" element={<LeaveApplication />} />
          <Route path="/teacher/substitute" element={<SubstitutePool />} />
          <Route path="/teacher/records" element={<RecordsPage />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
};

export default App;
