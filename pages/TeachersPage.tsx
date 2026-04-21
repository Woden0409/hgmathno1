import React, { useState } from 'react';
import { Calculator, BookOpen, Globe, FlaskConical, ChevronDown, ChevronUp, Calendar } from 'lucide-react';

interface Teacher {
  name: string;
  intro: string;
  style: string;
}

interface Subject {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  teachers: Teacher[];
}

const SUBJECTS: Subject[] = [
  {
    id: 'math',
    label: '數學科',
    icon: <Calculator size={28} />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    teachers: [
      {
        name: '洪觀老師',
        intro: '數學碩士、金融博士、IT工程師、大學微積分講師、程式語言講師、企業培訓講師、雙北桃園名星公/私校學子指定授課老師',
        style: '深入淺出、幽默風趣、生活化，談笑間厚植學生數理能力，建立學習信心，讓孩子不再抗拒數學，享受學習的過程。',
      },
      {
        name: '洪星老師',
        intro: '法律、財政雙學位、企業法律顧問、專攻雙北桃園一線公/私校補習班數學講師（延平、復旦、再興、東山、靜心、振聲、新興、達人、協和祐德）',
        style: '補教界稀有文理雙料的說書人，強調「看得見、聽得懂的數學」建立學習信心，將數學觀念垂直整合，結合古今中外經典題材，深入淺出直擊重點。',
      },
      {
        name: '劉明老師',
        intro: '交大電子物理碩士、20年授課經驗、全台各大補習班授課講師、延平中學學子指定授課老師',
        style: '清楚、親切、輕鬆是劉明老師教學的三大特色，無論再難的數學題目或定理，經過劉明老師的詳細生動的解說，循序漸進的引導，觸類旁通的比較說明，精確的考前猜題分析，都能讓學生易懂易學，乃至挑戰高難度題型，獲取高分。「不教簡單的數學，只把數學教簡單」是我的教學宗旨。',
      },
      {
        name: '洪廷老師',
        intro: '師大數學系、全台各大補習班熱門授課講師（台北仁大、台北學霸(延平)、台北宏觀、台北旭廣、新北科大、新北羅馬、桃園坮大、新竹文城、竹南金牌）',
        style: '零距離的專業教學，獨門口訣，將觀念化為口頭禪，將數學融入生活，對症下藥，建立數學自信。',
      },
      {
        name: '洪偉老師',
        intro: '電機工程系、資訊工程師、企業科技顧問、企業培訓講師、各大小補習班授課老師',
        style: '',
      },
      {
        name: '紹君老師',
        intro: '師範大學數學系畢業、豐富教學經驗：新北樹林高中、竹林國小、北市學一文理、北市學冠文理、新北文綦文理、北市哈瑞克文理',
        style: '師範體系畢業，受過專業教育學程訓練，108課綱的先鋒者，在傳統填鴨與當代素養中力求突破創新，擅長教應用情境題之解析，善用反詰法與學生互動，從中幫助學生發現問題並學習解決的能力，是忠實的蘇格拉底學派擁護者，即啟發式教學。',
      },
    ],
  },
  {
    id: 'chinese',
    label: '國文科',
    icon: <BookOpen size={28} />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    teachers: [
      {
        name: '子期老師',
        intro: '北市一線補習班特聘文科講師，台北車站學盟文理、天母惠晟文理、松山學冠雙贏文理、內湖艾爾文金牌文教、哈瑞克文理、百瀚智能教育、詹浩資優教育、金牌文理、明光義塾興雅教室。',
        style: '採用費曼學習法強化學生的學習能力，同時在教學過程引導學生了解並掌握自己的思考歷程。採用四層次分析法，探索究竟說什麼、想要說什麼、能夠說什麼、應該說什麼，引領孩子掌握閱讀素養核心，輕鬆面對108課綱，跨領域學習也不困難。',
      },
      {
        name: '陳旭老師',
        intro: '中文系畢業、金安出版社考卷命題、五南出版社作文教材撰寫、北投瑋成文理（專攻薇閣）、林口陳逸升大、汐止文魁文理、台中僑新資優、苗栗北聯文理、頭份金牌文理、南投普台中學、嘉義中興文理、嘉義水上國中',
        style: '教學以「以戰養戰」為核心，長期精準分析段考、會考與學測命題趨勢，將高頻題型與應試技巧轉化為具體可操作的講義與實戰訓練，協助學生在有限時間內快速提升作答效率與分數表現。面對素養導向的國文命題，以生活化語言與節奏明快的課堂設計，培養學生語感與表達力，讓閱讀不再畏難、寫作不再抗拒，真正做到「讓國文生活一點，讓生活國文一點」。',
      },
      {
        name: '承洋老師',
        intro: '台大中文系、身經百戰的作文老師。全球華文學生文學獎高中散文組佳作、金陵文學獎高中生散文組第一名、聯合杯作文比賽台北市市賽第六名、通過CWT全民中檢測驗優等（該檢定最高級別）',
        style: '',
      },
    ],
  },
  {
    id: 'english',
    label: '英文科',
    icon: <Globe size={28} />,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    teachers: [
      {
        name: '王星老師',
        intro: '反洗錢師（補教唯一）、台美雙律師、博士後研究、法政研所畢、多次應邀解題、媒體專訪、台大與威斯康辛大學智財論壇口譯。一線私校專攻大考解題師，雙北、桃園、中壢、台中各大補習班托福、多益、英檢、會考、學測、分科英文講師。',
        style: '',
      },
      {
        name: 'Steven 老師',
        intro: '加拿大多倫多約克大學畢業、具母語程度英語實力，超過20年英語教學經驗、曾任加拿大多倫多報社記者、企業國際業務經理，天母惠晟文理、寰宇教育、石牌成實學霸文理等教學機構特聘英文講師',
        style: '擅長針對不同年齡層與專業背景的學員設計教學計畫，透過有效溝通、跨文化理解與充滿活力的課堂互動來啟發學習。授課風格為高度客製化，視學員程度即時調整上課內容跟程度，動態引導式教學讓學員由淺入深再深化理解。',
      },
      {
        name: 'James 老師',
        intro: '北市一線補習班特聘文科講師，台北車站學盟文理、天母惠晟文理、松山學冠雙贏文理、內湖艾爾文金牌文教、哈瑞克文理、百瀚智能教育、詹浩資優教育、金牌文理、明光義塾興雅教室。',
        style: '採用費曼學習法強化學生的學習能力，同時在教學過程引導學生了解並掌握自己的思考歷程。採用四層次分析法，引領孩子掌握閱讀素養核心，輕鬆面對108課綱，跨領域學習也不困難。',
      },
      {
        name: '小陸老師',
        intro: '本班專任英文教師，以生動活潑的風格與多元的教學素材讓學生愛上英文，深受學生家長肯定',
        style: '重視學生個別差異，會先了解孩子的性格、學習狀態與需求，並據此調整教學方式。教學中重視互動、理解與參與感，讓學生在穩定的狀態下學習。英語教學強調基礎打底，從發音、字彙、句型、文法到閱讀理解循序建立能力。不以死背單字為主要方式，而是透過閱讀、情境理解與反覆練習，培養語感與實際運用能力。常結合影視、音樂與生活化素材，讓英文學習更貼近日常、提升學生興趣。',
      },
    ],
  },
  {
    id: 'science',
    label: '自然科',
    icon: <FlaskConical size={28} />,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    teachers: [
      {
        name: '王宇化學',
        intro: '專注於高中化學教學與升學輔導，長期深耕學測、分科測驗與各類校內外考試體系。課程設計以「觀念架構化」為核心，強調從原子結構、化學鍵結到熱力學、化學平衡與有機反應機構的系統整合。',
        style: '強調「理解先於記憶、架構重於題海」，教學風格以邏輯推演與題型拆解見長，擅長將抽象理論轉化為可操作的解題流程，並透過歷屆試題歸納高頻考點與命題趨勢，提升學生在計算題與觀念題上的穩定度與精準度。',
      },
      {
        name: 'Adom 老師',
        intro: '15年教學經驗、台北國譽文理、台北洪觀文理、桃園群英教育、中壢赫成文理、新竹金漢教育、台中曙光文理',
        style: '',
      },
      {
        name: '鄭力端老師',
        intro: '25年教學經驗、全台各大補習班/公私立高中指定授課老師',
        style: '教學功力深厚，補教界稀有精通物理、化學、生物、地科的全能自然老師，擅長水平整合自然四大子科，垂直整合國小、國中、高中自然，讓自然學習更有系統、有效率。',
      },
      {
        name: '煜熙老師',
        intro: '馬來西亞太平華聯獨立中學特聘講師、台北學霸文理、高雄名恒文理、桃園兆聖文理、佳音英語、博幼基金會特聘輔導老師',
        style: '專業、用心、認真，精通物理、化學、生物、地科，擅長水平整合自然四大子科，垂直整合國小、國中、高中自然，讓自然學習更有系統、有效率。',
      },
      {
        name: '莊周老師',
        intro: '清大動力機械碩士、工研院航太中心/電子所/能資所工程師、企業技術研究顧問、曾獲工研院電子所最佳研究計畫主持人創新前瞻科技創新獎、發表過多項美國專利',
        style: '',
      },
      {
        name: '杜甫老師',
        intro: '高分子工程碩士、歷年來以「學生進步幅度最大」屢受好評',
        style: '擅長站在學生出發點教學，精準打擊學生弱區與大考重點。',
      },
    ],
  },
];

const TeacherCard: React.FC<{ teacher: Teacher; subject: Subject }> = ({ teacher, subject }) => {
  const [expanded, setExpanded] = useState(false);
  const hasDetail = teacher.intro || teacher.style;

  return (
    <div className={`bg-white rounded-2xl border ${subject.borderColor} overflow-hidden transition-all duration-300 hover:shadow-lg`}>
      <div
        className={`flex items-center justify-between p-5 cursor-pointer ${hasDetail ? '' : 'cursor-default'}`}
        onClick={() => hasDetail && setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-full ${subject.bgColor} ${subject.color} flex items-center justify-center font-black text-xl`}>
            {teacher.name[0]}
          </div>
          <div>
            <h3 className="text-lg font-bold text-accent">{teacher.name}</h3>
            {teacher.intro && (
              <p className="text-sm text-gray-500 line-clamp-1 max-w-md">{teacher.intro}</p>
            )}
          </div>
        </div>
        {hasDetail && (
          <button className={`p-2 rounded-full ${subject.bgColor} ${subject.color} transition-transform`}>
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        )}
      </div>

      {expanded && hasDetail && (
        <div className="px-5 pb-5 space-y-4 animate-fade-in">
          <div className="h-px bg-gray-100"></div>
          {teacher.intro && (
            <div>
              <h4 className={`text-sm font-bold ${subject.color} mb-2`}>學經歷</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{teacher.intro}</p>
            </div>
          )}
          {teacher.style && (
            <div>
              <h4 className={`text-sm font-bold ${subject.color} mb-2`}>教學特色</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{teacher.style}</p>
            </div>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`inline-flex items-center gap-2 px-5 py-2 ${subject.bgColor} ${subject.color} rounded-full text-sm font-bold hover:opacity-80 transition-opacity`}
          >
            <Calendar size={16} /> 預約試聽
          </button>
        </div>
      )}
    </div>
  );
};

const TeachersPage: React.FC = () => {
  const [activeSubject, setActiveSubject] = useState('math');

  const currentSubject = SUBJECTS.find((s) => s.id === activeSubject)!;

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Our Teachers
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-accent mb-4">金牌師資陣容</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            匯集各科頂尖名師，豐富的教學經驗與獨到的教學方法，為每位學生打造最佳的學習體驗。
          </p>
          <div className="w-16 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      {/* Subject Tabs */}
      <section className="bg-white sticky top-[52px] z-30 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center gap-2 md:gap-4 py-4">
            {SUBJECTS.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setActiveSubject(subject.id)}
                className={`flex items-center gap-2 px-5 md:px-8 py-3 rounded-full font-bold transition-all ${
                  activeSubject === subject.id
                    ? `${subject.bgColor} ${subject.color} shadow-md`
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {subject.icon}
                <span className="hidden sm:inline">{subject.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-10 h-10 rounded-xl ${currentSubject.bgColor} ${currentSubject.color} flex items-center justify-center`}>
              {currentSubject.icon}
            </div>
            <div>
              <h2 className="text-2xl font-black text-accent">{currentSubject.label}師資</h2>
              <p className="text-sm text-gray-500">共 {currentSubject.teachers.length} 位老師</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {currentSubject.teachers.map((teacher, idx) => (
              <TeacherCard key={idx} teacher={teacher} subject={currentSubject} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeachersPage;
