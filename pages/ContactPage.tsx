import React from 'react';
import { MapPin, Phone, MessageCircle, Calendar, ArrowRight, ChevronDown, ChevronUp, Clock, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const FAQS = [
  { q: "請問線上課程有觀看期限嗎?", a: "我們的線上課程大部份為「永久觀看」制,購買後您可以依據自己的學習節奏,無限次重複播放複習,不用擔心過期問題。部分效期性課程(如考前衝刺)則會標註觀看期限。" },
  { q: "如果實體課程需要請假怎麼辦?", a: "我們提供完整的補課系統。您可以提前透過官方 LINE 或電話請假,事後預約補課中心進行視訊補課,確保進度不落後。" },
  { q: "報名後覺得不適合可以退費嗎?", a: "我們依照教育部短期補習班設立及管理準則辦理退費。開課前提出退費申請可全額退費(扣除行政手續費),開課後則依比例退費,保障您的權益。" },
  { q: "有一對一的家教輔導嗎?", a: "有的,除了小班制課程,我們也提供針對弱科加強的「個別指導」課程,歡迎預約諮詢,由老師為您量身規劃學習進度。" }
];

const ContactPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  const handleEmptyLink = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleAlert = (msg: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    alert(msg);
  };

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-24">
      {/* FAQ Section */}
      <section className="py-24 bg-bgLight border-t border-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-accent mb-4">常見問題</h2>
            <p className="text-gray-600">您可能想知道的入學資訊,我們都幫您整理好了</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden border ${openFaqIndex === index ? 'shadow-lg border-primary/20' : 'shadow-sm border-gray-100'}`}>
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-bold text-gray-800 flex items-center gap-4 text-lg">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors flex-shrink-0 ${openFaqIndex === index ? 'bg-primary text-white' : 'bg-blue-50 text-primary'}`}>Q</span>
                    {faq.q}
                  </span>
                  {openFaqIndex === index ? <ChevronUp size={20} className="text-primary flex-shrink-0"/> : <ChevronDown size={20} className="text-gray-400 flex-shrink-0"/>}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white pl-[4.5rem]">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 relative z-10">

            {/* Contact Info */}
            <div className="w-full lg:w-5/12 bg-accent text-white p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Contact Us</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">聯絡我們</h2>
                <p className="text-blue-200 mb-10 text-lg leading-relaxed">歡迎預約參觀或試聽,我們將有專人為您詳細解說課程規劃。</p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5 group cursor-pointer" onClick={handleAlert("將開啟地圖導航")}>
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">補習班地址</p>
                      <p className="font-bold text-xl">臺北市信義區大道路42巷18號</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group cursor-pointer" onClick={handleAlert("將撥打電話")}>
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">諮詢專線</p>
                      <p className="font-bold text-xl">02-2726-6441</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">營業時間</p>
                      <p className="font-medium text-lg">週一二四五 15:00 - 21:30</p>
                      <p className="font-medium text-lg">週三 12:00 - 21:30</p>
                      <p className="font-medium text-lg">週六 09:00 - 21:30</p>
                      <p className="font-medium text-lg">週日 09:00 - 18:30</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12">
                 <button onClick={handleAlert("將開啟 LINE 加入好友")} className="w-full bg-[#06C755] hover:bg-[#05b64d] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-green-900/20 text-lg">
                   <MessageCircle size={26} fill="white" /> 加入官方 LINE 諮詢
                 </button>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-7/12 p-10 lg:p-16 bg-white">
              <h3 className="text-2xl font-bold text-accent mb-2">預約免費試聽</h3>
              <p className="text-gray-500 mb-8">填寫表單後,我們將於 24 小時內與您聯繫確認。</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">學生姓名 <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none transition-all" placeholder="請輸入姓名" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">就讀年級</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none transition-all appearance-none cursor-pointer">
                        <option>請選擇年級</option>
                        <option>國小</option>
                        <option>國一</option>
                        <option>國二</option>
                        <option>國三</option>
                        <option>高一</option>
                        <option>高二</option>
                        <option>高三</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"/>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">聯絡電話 <span className="text-red-500">*</span></label>
                  <input type="tel" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none transition-all" placeholder="09xx-xxx-xxx" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">需求諮詢 / 備註</label>
                  <textarea className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-4 focus:ring-blue-50 outline-none transition-all h-32 resize-none" placeholder="想了解的科目或目前學習狀況..."></textarea>
                </div>

                <button type="button" onClick={handleAlert("表單已送出!專人將盡快與您聯繫。")} className="w-full py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  送出預約 <ArrowRight size={20}/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 flex gap-3 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
         <button onClick={handleAlert("將撥打電話")} className="flex-1 bg-gray-100 text-gray-700 font-bold rounded-xl flex items-center justify-center gap-2 py-3 active:scale-95 transition-transform">
           <Phone size={18}/> 電話諮詢
         </button>
         <button onClick={scrollTo('contact')} className="flex-1 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 py-3 shadow-lg shadow-blue-500/30 active:scale-95 transition-transform">
           <Calendar size={18}/> 預約試聽
         </button>
      </div>

    </div>
  );
};

export default ContactPage;
