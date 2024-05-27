type BlogPost = {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
};

const fakeBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "معرفی GraphQL",
    content:
      "GraphQL یک زبان پرس و جو برای API ها است که توسط Facebook توسعه یافته است و امکان ارسال و دریافت داده های موجود در API را فراهم می کند.",
    author: "جان دو",
    date: "2024-05-30",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "2",
    title: "آشنایی با React Hooks",
    content:
      "React Hooks یک روش برای استفاده از وضعیت و ویژگی های دیگر React در کلاس هایی است که از وضعیت های محلی استفاده می کنند.",
    author: "جین اسمیت",
    date: "2024-06-01",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "3",
    title: "آغاز با Node.js",
    content:
      "Node.js یک محیط اجرای جاوااسکریپت است که بر اساس Chrome's V8 جاوااسکریپت موتور است که به عنوان موتور JS در Chrome مورد استفاده قرار می گیرد.",
    author: "علی جانسون",
    date: "2024-06-03",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "4",
    title: "ساخت RESTful API با Express",
    content:
      "Express یک چارچوب وب محبوب برای Node.js است که توسعه دهندگان به سادگی می توانند API های RESTful پیاده سازی کنند.",
    author: "باب ویلیامز",
    date: "2024-06-05",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "5",
    title: "عمیق آشنایی با TypeScript",
    content:
      "TypeScript یک زیر مجموعه از JavaScript است که مزایای ویژه ای برای توسعه برنامه های بزرگ دارد.",
    author: "ایوا براون",
    date: "2024-06-07",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "6",
    title: "ویژگی های جدید JavaScript",
    content:
      "در این مقاله به بررسی ویژگی های جدیدی که در نسخه های اخیر JavaScript اضافه شده اند، می پردازیم.",
    author: "مایکل تیلور",
    date: "2024-06-09",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "7",
    title: "آشنایی با React Native",
    content:
      "React Native یک فریم ورک برای توسعه برنامه های موبایل با استفاده از React است که به توسعه سریع واکنشگرا می پردازد.",
    author: "صوفیا کلارک",
    date: "2024-06-11",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "8",
    title: "اصول بهترین روش های توسعه وب",
    content:
      "در این مقاله به بررسی اصول بهترین روش های توسعه وب می پردازیم تا بتوانید کد بهتری بنویسید.",
    author: "دیوید مارتینز",
    date: "2024-06-13",
    image: "https://via.placeholder.com/300",
  },
  {
    id: "9",
    title: "مدیریت داده با Redux",
    content:
      "Redux یک کتابخانه مدیریت وضعیت قابل پیش بینی برای برنامه های جاوااسکریپت است که توسط Dan Abramov و Andrew Clark ساخته شده است.",
    author: "ایما وایت",
    date: "2024-06-15",
    image: "https://via.placeholder.com/300",
  },
];

export { fakeBlogPosts };
