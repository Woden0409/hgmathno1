import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Check, ArrowRight, BookOpen, Calculator, FlaskConical, Languages } from 'lucide-react';

type TabType = 'elementary' | 'junior' | 'senior';

const CoursesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialTab = (searchParams.get('tab') as TabType) || 'elementary';
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  useEffect(() => {
    const tab = searchParams.get('tab') as TabType;
    if (tab && ['elementary', 'junior', 'senior'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[350px] overflow-hidden">
        <img
          src="https://picsum.photos/1920/600?random=70"
          alt="課程介紹"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">課程介紹</h1>
            <p className="text-blue-200 text-lg">依照不同學齡與需求，量身打造最適合的學習路徑</p>
          </div>
        </div>
      </section>


      {/* Content Area */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Elementary School Content */}
        {activeTab === 'elementary' && (
          <div className="animate-fade-in-up">
            {/* Course 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center">
                    <Calculator size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-accent">國小精準數學</h2>
                </div>
                <p className="text-xl text-primary font-bold mb-6">由淺入深提升孩子邏輯推理能力</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>由基礎到延伸，提升孩子的數學解題能力，並能舉一反三、觸類旁通。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>小班精緻教學，完全掌握孩子的學習狀況，即時個別加強，讓學習零死角。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>以孩子學校版本為主軸，統合各版本的重點精華，精編國小數學教學講義，讓學生輕鬆掌握學習重點。</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="https://picsum.photos/500/350?random=60"
                  alt="國小數學"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>

            <hr className="border-dashed border-gray-200 my-12" />

            {/* Course 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                    <Languages size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-accent">國小跳級美語</h2>
                </div>
                <p className="text-xl text-primary font-bold mb-6">國中美語跳級超前學習，銜接國中零距離</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>依「十二年國教英語學習能力指標」，採用專業美語教材並輔以精編教學講義，完整銜接國小、國中課程。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>嚴選國中專業師資授課，生動活潑的教學，兼顧學生文法概念建立及聽、說、讀、寫能力的訓練。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>輔導孩子參加 GEPT 小學英檢考試，從考試中評量孩子的學習成效。</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="https://picsum.photos/500/350?random=61"
                  alt="國小美語"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        )}

        {/* Junior High Content */}
        {activeTab === 'junior' && (
          <div className="animate-fade-in-up">
            {/* 小團班 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
              <div className="flex-1">
                <h2 className="text-3xl font-black text-accent mb-4">國中家教式小團班 (1~4人)</h2>
                <ul className="space-y-4 text-gray-600 mb-6">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>補教名師親編上課講義，讓學生熟練各項題型</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>每週上課一次；每次上課 1.5 小時，讓學生花少少時間得到最大學習效益</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>平時不會的題目，可透過 LINE 幫助學生解題，讓疑惑馬上解決</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="https://picsum.photos/500/350?random=62"
                  alt="小團班"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>

            {/* 國一 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl font-black text-accent">國一實力養成班</h2>
                  <button className="px-4 py-1.5 border border-primary text-primary rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-colors">
                    查看課表
                  </button>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>補教名師精編教學講義，完全掌握命題焦點，讓學生輕鬆掌握學習方向！</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>定期考試評量學習成效，學習落後學生即時輔導、一對一個別加強！</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>段考前強迫留班「考前衝刺」，全面加強各科，爭取最佳成績表現！</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="https://picsum.photos/500/350?random=63"
                  alt="國一班"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>

            {/* 國二 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl font-black text-accent">國二實力進階班</h2>
                  <button className="px-4 py-1.5 border border-primary text-primary rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-colors">
                    查看課表
                  </button>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>補教名師精編各科講義，讓學生輕鬆掌握學校段考及會考命題走向。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>段考「滿分衝刺班」全面加強各科試題演練，爭取最佳成績表現！</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>利用週考及隨堂考評量學習成效，學習落後學生即時個別加強！</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="https://picsum.photos/500/350?random=64"
                  alt="國二班"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>

            {/* 國三會考班 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 lg:p-12 border border-yellow-100">
              <h2 className="text-3xl font-black text-accent mb-8 flex items-center gap-3">
                <span className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center text-xl">5A</span>
                國三會考精熟班
              </h2>

              {/* Stage 1 */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">1</span>
                  暑假特訓（奠定基礎）
                </h3>
                <ul className="space-y-3 text-gray-600 ml-10">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>會考命題占分最重的九上課程，利用暑假超前進度學習，贏在起跑點！</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>鎖定第一次模擬考範圍，溫故知新，各科地毯式複習！</span>
                  </li>
                </ul>
              </div>

              {/* Stage 2 */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">2</span>
                  九年級上學期（實力養成）
                </h3>
                <ul className="space-y-3 text-gray-600 ml-10">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>配合學校段考及模擬考排定學習進度，雙軌教學，預習與複習並重！</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>補教名師精編各科講義，讓同學輕鬆掌握會考命題方向！</span>
                  </li>
                </ul>
              </div>

              {/* Stage 3 */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">3</span>
                  寒假 & 九年級下學期（實力精進）
                </h3>
                <ul className="space-y-3 text-gray-600 ml-10">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>會考五大科超前進度學習，針對會考命題方向提綱挈領！</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>全真模考仿會考命題、塗卡及電腦讀卡，快速累積實戰經驗。</span>
                  </li>
                </ul>
              </div>

              {/* Stage 4 */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm">4</span>
                  會考衝刺班（最後衝刺）
                </h3>
                <ul className="space-y-3 text-gray-600 ml-10">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>會考五大科綜合複習，補教名師精闢猜題講座！</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>針對數學非選題、英文聽力測驗及國文寫作測驗密集特訓！</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Senior High Content */}
        {activeTab === 'senior' && (
          <div className="animate-fade-in-up">
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
              <div className="flex-1">
                <h2 className="text-3xl font-black text-accent mb-4">高中數學精修班</h2>
                <p className="text-xl text-primary font-bold mb-6">學測/分科測驗全方位準備</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>針對 108 課綱數學 A/B 分流，提供客製化教學內容。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>著重觀念理解，搭配大量歷屆試題演練，建立解題信心。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>小班制教學，隨時掌握學生學習狀況，即時調整進度。</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="https://picsum.photos/500/350?random=65"
                  alt="高中數學"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
              <div className="flex-1">
                <h2 className="text-3xl font-black text-accent mb-4">高中自然科總複習</h2>
                <p className="text-xl text-primary font-bold mb-6">物理、化學、生物、地科全科攻略</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>各科名師聯合授課，打造最完整的自然科學習體系。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>實驗題型專題講解，應對素養導向命題趨勢。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>提供完整學習歷程檔案輔導，升學準備一次到位。</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="https://picsum.photos/500/350?random=66"
                  alt="高中自然"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-black text-accent mb-4">高中英文進階班</h2>
                <p className="text-xl text-primary font-bold mb-6">學測英文滿級分衝刺</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>閱讀測驗技巧精講，快速掌握長文重點。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>作文批改與範文解析，提升寫作能力。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>單字片語系統化教學，擴充高階詞彙量。</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="https://picsum.photos/500/350?random=67"
                  alt="高中英文"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">想了解更多課程細節？</h2>
          <p className="text-blue-200 mb-8 text-lg">歡迎預約免費試聽，讓我們為您安排最適合的學習方案</p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-secondary text-accent font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition-all transform hover:-translate-y-1 inline-flex items-center gap-2 text-lg"
          >
            預約免費試聽 <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
