export interface CourseCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  link?: string;
}

export interface OnlineCourse {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  chapters: number;
  description: string;
  targetAudience: string;
  syllabus: string[];
  price: number;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  slogan: string;
  experience: string;
  style: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  grade: string;
  improvement: string;
  quote: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: '公告' | '活動' | '考試';
}