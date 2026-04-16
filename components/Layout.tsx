import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleEmptyLink = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (path: string) => {
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <>
      {children}

      {/* Footer */}
      <footer className="bg-[#0B1B43] text-gray-400 pt-16 pb-10 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          {/* Top Section: Info + Map */}
          <div className="flex flex-col lg:flex-row gap-12 mb-12 pb-12 border-b border-gray-800">
            {/* Left: Contact Info */}
            <div className="lg:w-1/2">
              <button onClick={scrollToTop} className="flex items-center gap-3 text-white font-black text-2xl mb-6">
                <img src="/logo-white.png" alt="宏觀教育" className="h-12" />
                宏觀教育
              </button>
              <p className="text-sm leading-relaxed mb-6 text-gray-400">
                致力於提供最優質的教學環境與系統化的學習方法。把每一個學生，帶到他原本以為做不到的地方。
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span>臺北市信義區大道路42巷18號</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <span>02-2726-6441</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-primary flex-shrink-0" />
                  <span>LINE ID: @328maikp</span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-2">營業時間：</p>
              <p className="text-sm">週一二四五 15:00 - 21:30</p>
              <p className="text-sm">週三 12:00 - 21:30</p>
              <p className="text-sm">週六 09:00 - 21:30</p>
              <p className="text-sm mb-6">週日 09:00 - 18:30</p>

              <Link to="/contact" className="inline-block border border-white/30 text-white px-6 py-2.5 rounded-lg hover:bg-white hover:text-accent transition-all font-bold">
                立即預約試聽
              </Link>
            </div>

            {/* Right: Google Map */}
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden h-64 lg:h-full min-h-[250px] shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57836.547046550724!2d121.5050203486328!3d25.0413969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aba05f59a219%3A0x72ea3fb29ad194b8!2z5a6P6KeA5pWZ6IKyIOa0quingOaWh-eQhuijnOe_kuePreaOqOiWpuOAiuS_oee-qeWNgOijnOe_kuePreaOqOiWpuOAi-mbkeWutuWMluWwj--9nOiIiOmbheWMluS4re-9nOaxuOWYluWMluWwj--9nOeRoOWFjOWMluS4re-9nOaxuOWQieWMluS4re-9nOWNmuaCsuWMluWwj--9nOaIkOW-t-WMluS4re-9nOemj-W-t-WMluWwj--9nOaVuOWtuOiLseaWh-eQhuWMluS9jeaWh-WvpumJl--9nOWwj-ePreWItu-9nOaOqOiWpuWPo-eike-9nA!5e0!3m2!1szh-TW!2stw!4v1776335601612!5m2!1szh-TW!2stw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="宏觀教育位置地圖"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom Section: Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">快速連結</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigateTo('/courses')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> 課程介紹</button></li>
                <li><button onClick={() => navigateTo('/teachers')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> 師資陣容</button></li>
                <li><button onClick={() => navigateTo('/about')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> 關於我們</button></li>
                <li><button onClick={() => navigateTo('/contact')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span> 聯絡我們</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-lg">課程類別</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigateTo('/courses?tab=elementary')} className="hover:text-primary transition-colors">國小資優班</button></li>
                <li><button onClick={() => navigateTo('/courses')} className="hover:text-primary transition-colors">數學資優班</button></li>
                <li><button onClick={() => navigateTo('/courses?tab=junior')} className="hover:text-primary transition-colors">國中會考衝刺</button></li>
                <li><button onClick={() => navigateTo('/courses?tab=senior')} className="hover:text-primary transition-colors">高中學測/分科</button></li>
                <li><button onClick={() => navigateTo('/courses')} className="hover:text-primary transition-colors">個別指導</button></li>
                <li><button onClick={() => navigateTo('/courses')} className="hover:text-primary transition-colors">延平數學專班</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-lg">追蹤我們</h4>
              <div className="flex gap-3 mb-4">
                <button onClick={handleEmptyLink} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1877F2] text-white transition-all hover:-translate-y-1"><Facebook size={18}/></button>
                <button onClick={handleEmptyLink} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E4405F] text-white transition-all hover:-translate-y-1"><Instagram size={18}/></button>
                <button onClick={handleEmptyLink} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF0000] text-white transition-all hover:-translate-y-1"><Youtube size={18}/></button>
              </div>
              <p className="text-xs text-gray-500">關注我們獲取最新課程資訊與優惠活動</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-600 flex flex-col md:flex-row items-center justify-between">
            <p>&copy; 2025 宏觀教育補習班. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-4">
               <button onClick={handleEmptyLink} className="hover:text-gray-300">隱私權政策</button>
               <button onClick={handleEmptyLink} className="hover:text-gray-300">服務條款</button>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
