import type {
  Identity,
  SkillGroup,
  RoleEntry,
  ProjectEntry,
} from "@/types/content";

export const identity: Identity = {
  name: "Đức Thành",
  title: { vi: "Frontend Developer", en: "Frontend Developer" },
  location: "Khương Trung, Hà Nội",
  email: "ducthanhpg@gmail.com",
  phone: "0978545543",
};

export const objective = {
  vi: "Kỹ sư Frontend với hơn 4 năm kinh nghiệm xây dựng các ứng dụng web hiệu năng cao bằng React.js, Next.js, Vue.js và TypeScript. Chuyên về kiến trúc frontend có khả năng mở rộng, các chiến lược render SSR/CSR và tối ưu hiệu năng. Từng triển khai nhiều hệ thống production trong lĩnh vực AI, thương mại điện tử và blockchain, đồng thời mentor các lập trình viên junior và đóng góp vào những codebase dễ bảo trì, hướng component.",
  en: "Frontend Engineer with 4+ years of experience building high-performance web applications using React.js, Next.js, Vue.js, and TypeScript. Specialized in scalable frontend architecture, SSR/CSR rendering strategies, and performance optimization. Experienced in delivering production systems in AI, e-commerce, and blockchain domains while mentoring junior developers and contributing to maintainable, component-driven codebases.",
};

export const achievements = [
  {
    vi: "Xây dựng nền tảng HR doanh nghiệp phục vụ hơn 10.000 nhân viên tại AEON, cải thiện khả năng quan sát nhân sự và vận hành HR.",
    en: "Built an enterprise HR platform supporting 10,000+ employees at AEON, improving workforce visibility and HR operations.",
  },
  {
    vi: "Phát triển và phát hành SDK widget chatbot có thể tuỳ biến, tích hợp được vào website bên thứ ba.",
    en: "Developed and published a customizable chatbot widget SDK for third-party website integration.",
  },
  {
    vi: "Triển khai nhiều hệ thống production trong các lĩnh vực AI, Web3 và doanh nghiệp bằng React.js, Next.js và Vue.js.",
    en: "Delivered multiple production systems across AI, Web3, and enterprise domains using React.js, Next.js, and Vue.js.",
  },
  {
    vi: "Áp dụng các kỹ thuật tối ưu hiệu năng và chiến lược render hiện đại (SSR, CSR) để cải thiện tốc độ và khả năng mở rộng ứng dụng.",
    en: "Implemented performance optimizations and modern rendering strategies (SSR, CSR) to improve application speed and scalability.",
  },
  {
    vi: "Mentor các lập trình viên junior, thúc đẩy thực hành clean code và quy trình phối hợp GitFlow.",
    en: "Mentored junior developers and promoted clean code practices and GitFlow collaboration workflows.",
  },
];

export const education = {
  school: "T3H Institute of Technology",
  major: { vi: "Công nghệ thông tin", en: "Information Technology" },
  period: { vi: "Th7/2019 - Th11/2021", en: "Jul 2019 - Nov 2021" },
};

export const skillGroups: SkillGroup[] = [
  {
    label: { vi: "Frontend", en: "Frontend" },
    items: ["React.js", "Next.js", "Vue.js"],
  },
  {
    label: { vi: "Ngôn ngữ", en: "Languages" },
    items: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    label: { vi: "Chiến lược render", en: "Rendering strategies" },
    items: ["SSR", "CSR", "SSG", "ISR"],
  },
  {
    label: { vi: "Styling", en: "Styling" },
    items: ["TailwindCSS", "Material UI", "Ant Design"],
  },
  {
    label: { vi: "Quản lý state", en: "State management" },
    items: ["Redux", "Redux-Saga", "Zustand", "Jotai"],
  },
  {
    label: { vi: "Tích hợp API", en: "API integration" },
    items: ["REST APIs", "GraphQL", "Axios"],
  },
  {
    label: { vi: "Quản lý phiên bản", en: "Version control" },
    items: ["Git", "GitLab", "GitFlow"],
  },
  {
    label: { vi: "Phương pháp phát triển", en: "Methodology" },
    items: ["Agile", "Scrum"],
  },
];

/** Not on the original CV — added because this site's own 3D avatar was
 *  hand-built with these. Kept in a visually separate group so it never
 *  reads as equivalent to the 4+ years of professional stack above. */
export const creativeCodingSkills: SkillGroup = {
  label: { vi: "Creative coding", en: "Creative coding" },
  items: ["Three.js", "React Three Fiber"],
};

export const experience: RoleEntry[] = [
  {
    id: "aeon",
    company: "HR Portal AEON — Peasoft Việt Nam",
    period: { vi: "Th12/2024 - Hiện tại", en: "Dec 2024 - Present" },
    teamSize: 10,
    stack: ["Vue.js", "Bootstrap", "Lodash", "D3.js (d3-org-chart)", "Chart.js", "GitLab"],
    bullets: [
      {
        vi: "Xây dựng dashboard quản lý tương tác giúp đội HR theo dõi cơ cấu nhân sự và các thay đổi tổ chức, tích hợp D3 Org Chart để trực quan hoá cấu trúc phòng ban phân cấp.",
        en: "Built an interactive management dashboard for HR teams to monitor staff structure, integrating D3 Org Chart to visualize hierarchical department structures.",
      },
      {
        vi: "Triển khai chức năng kéo-thả để tái cấu trúc phòng ban và vị trí theo thời gian thực.",
        en: "Implemented drag-and-drop functionality for restructuring departments and positions in real time.",
      },
      {
        vi: "Thiết kế và triển khai phân quyền theo vai trò (RBAC) đảm bảo quy trình phê duyệt an toàn.",
        en: "Designed and implemented role-based access control (RBAC) to ensure secure approval workflows.",
      },
      {
        vi: "Tối ưu hiệu năng ứng dụng bằng lazy loading và tải dữ liệu phía server, cải thiện độ phản hồi và trải nghiệm người dùng.",
        en: "Optimized application performance using lazy loading and server-side data loading, improving responsiveness and UX.",
      },
      {
        vi: "Triển khai thành công nền tảng HR nội bộ phục vụ hơn 10.000 nhân viên; mentor các lập trình viên junior/fresher theo quy trình GitFlow.",
        en: "Delivered a scalable internal HR platform used by 10,000+ employees; mentored junior and fresher developers on clean code and GitFlow.",
      },
    ],
  },
  {
    id: "avn",
    company: "AVN Recruitment Platform — Peasoft Việt Nam",
    period: { vi: "Th6/2024 - Th11/2024", en: "Jun 2024 - Nov 2024" },
    teamSize: 4,
    stack: ["Next.js", "TailwindCSS", "NextUI", "Jotai", "Framer Motion", "Ahooks", "GitLab"],
    bullets: [
      {
        vi: "Xây dựng nền tảng tuyển dụng responsive kết nối ứng viên và nhà tuyển dụng.",
        en: "Built a responsive recruitment platform connecting job seekers and employers.",
      },
      {
        vi: "Triển khai kiến trúc render lai của Next.js (SSR cho trang cần SEO, CSR cho dashboard tương tác).",
        en: "Implemented Next.js hybrid rendering (SSR for SEO-critical pages, CSR for interactive dashboards).",
      },
      {
        vi: "Thiết kế component tái sử dụng bằng TailwindCSS và NextUI để giữ design system nhất quán.",
        en: "Designed reusable UI components with TailwindCSS and NextUI to maintain a consistent design system.",
      },
    ],
  },
  {
    id: "escrow",
    company: "Escrow Market — Joom Solutions",
    period: { vi: "Th1/2024 - Th5/2024", en: "Jan 2024 - May 2024" },
    teamSize: 6,
    stack: ["Next.js", "TailwindCSS", "NextUI", "Firebase", "Jotai", "Framer Motion", "TonConnect UI React"],
    bullets: [
      {
        vi: "Xây dựng nền tảng marketplace và đấu giá tên miền Web3 bằng Next.js.",
        en: "Built a Web3 domain marketplace and auction platform using Next.js.",
      },
      {
        vi: "Tích hợp kết nối ví blockchain (TON Wallet, Phantom) hỗ trợ giao dịch crypto và thanh toán on-chain an toàn.",
        en: "Integrated blockchain wallet connectivity (TON Wallet, Phantom) to support secure crypto transactions and on-chain payments.",
      },
      {
        vi: "Xây dựng luồng UI đấu giá và giao dịch real-time, đồng bộ mượt mà với các sự kiện blockchain.",
        en: "Developed real-time bidding and transaction UI flows, synced seamlessly with blockchain events.",
      },
      {
        vi: "Xây dựng hiệu ứng animation mượt bằng Framer Motion; thiết kế kiến trúc component có khả năng mở rộng cho marketplace.",
        en: "Implemented smooth animations with Framer Motion; designed scalable component architecture for marketplace growth.",
      },
    ],
  },
  {
    id: "spp",
    company: "SPP-Internal — Agiletech",
    period: { vi: "Th2/2023 - Th12/2023", en: "Feb 2023 - Dec 2023" },
    teamSize: 5,
    stack: ["React.js", "Ant Design", "Redux-Saga", "Firebase", "Axios", "Chart.js"],
    bullets: [
      {
        vi: "Phát triển module Strategic Workforce Planning phân tích cung-cầu nhân sự cho chiến lược nhân sự dài hạn.",
        en: "Developed the Strategic Workforce Planning module to analyze workforce supply-demand for long-term staffing strategies.",
      },
      {
        vi: "Xây dựng hệ thống quản lý dự án hỗ trợ tổ chức công việc và theo dõi tiến độ nhóm.",
        en: "Built a Project Management system enabling task organization, project tracking, and team collaboration.",
      },
      {
        vi: "Xây dựng dashboard trực quan hoá dữ liệu real-time bằng Chart.js, tích hợp REST API.",
        en: "Implemented real-time data visualization dashboards with Chart.js, integrated with REST APIs.",
      },
    ],
  },
  {
    id: "hospital",
    company: "Hospital Management System — Agiletech",
    period: { vi: "Th9/2021 - Th1/2023", en: "Sep 2021 - Jan 2023" },
    teamSize: 8,
    stack: ["React.js", "Ant Design", "React Router", "Axios", "Redux Saga"],
    bullets: [
      {
        vi: "Phát triển các module hồ sơ bệnh nhân, theo dõi bệnh án và phân bổ giường bệnh cho phép giám sát real-time.",
        en: "Implemented modules for patient records, disease tracking, and bed allocation enabling real-time monitoring by hospital staff.",
      },
      {
        vi: "Thiết kế và triển khai hệ thống phân quyền RBAC cho nhiều vai trò y tế khác nhau.",
        en: "Designed and enforced RBAC permission systems for secure access across multiple healthcare roles.",
      },
      {
        vi: "Tích hợp RESTful API đồng bộ dữ liệu bệnh nhân real-time giữa các khoa.",
        en: "Integrated RESTful APIs for real-time patient data synchronization across hospital departments.",
      },
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    id: "aeon",
    title: "HR Portal AEON",
    period: { vi: "Th12/2024 - Hiện tại", en: "Dec 2024 - Present" },
    teamSize: 10,
    stack: ["Vue.js", "D3.js", "Chart.js", "Bootstrap", "GitLab"],
    summary: {
      vi: "Nền tảng quản lý nhân sự nội bộ cho AEON, phục vụ hơn 10.000 nhân viên với dashboard tổ chức trực quan và phân quyền chặt chẽ.",
      en: "Internal HR management platform for AEON, serving 10,000+ employees with a visual org dashboard and strict role-based access.",
    },
    bullets: experience[0].bullets,
    featured: true,
    mockup: "aeon",
  },
  {
    id: "chatbot",
    title: "Chatbot AI Platform",
    period: { vi: "Th4/2024 - Th12/2024", en: "Apr 2024 - Dec 2024" },
    teamSize: 6,
    stack: ["React.js", "Vite", "Socket.io", "TailwindCSS", "Framer Motion"],
    summary: {
      vi: "Nền tảng chatbot AI dạng module: CMS cấu hình bot và một chat widget SDK nhúng được, đóng gói và phát hành lên NPM.",
      en: "Modular AI chatbot platform: a bot-configuration CMS plus an embeddable chat widget SDK, packaged and published to NPM.",
    },
    bullets: [
      {
        vi: "Xây dựng CMS tuỳ biến cho phép người dùng cấu hình hồ sơ bot, theme và giao diện chat.",
        en: "Developed a customizable chatbot CMS allowing users to configure bot profiles, themes, and chat UI settings.",
      },
      {
        vi: "Thiết kế chat widget SDK tái sử dụng, dễ nhúng vào các website bên ngoài.",
        en: "Designed and implemented a reusable chat widget SDK for seamless integration into external websites.",
      },
      {
        vi: "Triển khai giao tiếp real-time bằng WebSockets (Socket.io) cho luồng tin nhắn trực tiếp.",
        en: "Implemented real-time communication using WebSockets (Socket.io) to enable live message streaming.",
      },
      {
        vi: "Đóng gói và tối ưu SDK bằng Vite, phát hành dưới dạng package NPM nhẹ, dễ tích hợp.",
        en: "Optimized and packaged the SDK using Vite, published as a lightweight NPM package for easy integration.",
      },
    ],
    featured: true,
    mockup: "chatbot",
  },
  {
    id: "escrow",
    title: "Escrow Market",
    period: { vi: "Th1/2024 - Th5/2024", en: "Jan 2024 - May 2024" },
    teamSize: 6,
    stack: ["Next.js", "TailwindCSS", "Firebase", "TonConnect UI React", "Framer Motion"],
    summary: {
      vi: "Marketplace và sàn đấu giá tên miền Web3, tích hợp ví blockchain và luồng giao dịch real-time.",
      en: "A Web3 domain marketplace and auction platform, with blockchain wallet integration and real-time transaction flows.",
    },
    bullets: experience[2].bullets,
    featured: true,
    mockup: "escrow",
  },
  {
    id: "avn",
    title: "AVN Recruitment Platform",
    period: { vi: "Th6/2024 - Th11/2024", en: "Jun 2024 - Nov 2024" },
    teamSize: 4,
    stack: ["Next.js", "NextUI", "TailwindCSS"],
    summary: {
      vi: "Nền tảng tuyển dụng responsive, dùng render lai của Next.js để tối ưu SEO và tương tác.",
      en: "A responsive recruitment platform using Next.js hybrid rendering to balance SEO and interactivity.",
    },
    bullets: experience[1].bullets.slice(0, 2),
    featured: false,
  },
  {
    id: "spp",
    title: "SPP-Internal",
    period: { vi: "Th2/2023 - Th12/2023", en: "Feb 2023 - Dec 2023" },
    teamSize: 5,
    stack: ["React.js", "Ant Design", "Redux-Saga", "Chart.js"],
    summary: {
      vi: "Module lập kế hoạch nhân sự chiến lược và quản lý dự án nội bộ cho Agiletech.",
      en: "Strategic workforce-planning module and internal project-management system for Agiletech.",
    },
    bullets: experience[3].bullets.slice(0, 2),
    featured: false,
  },
  {
    id: "hospital",
    title: "Hospital Management System",
    period: { vi: "Th9/2021 - Th1/2023", en: "Sep 2021 - Jan 2023" },
    teamSize: 8,
    stack: ["React.js", "Ant Design", "Redux Saga"],
    summary: {
      vi: "Hệ thống quản lý bệnh viện: hồ sơ bệnh nhân, theo dõi bệnh án, phân bổ giường bệnh real-time.",
      en: "Hospital management platform: patient records, disease tracking, and real-time bed allocation.",
    },
    bullets: experience[4].bullets.slice(0, 2),
    featured: false,
  },
  {
    id: "cryptos",
    title: "Cryptos.ai",
    period: { vi: "Th2/2023 - Th8/2023", en: "Feb 2023 - Aug 2023" },
    teamSize: 4,
    stack: ["Next.js", "PWA", "NextUI", "Framer Motion"],
    summary: {
      vi: "Nền tảng nội dung blockchain với bài viết do AI tạo, trải nghiệm PWA và cuộn dọc kiểu TikTok.",
      en: "A blockchain content platform with AI-generated articles, PWA offline support, and a TikTok-style vertical scroll.",
    },
    bullets: [
      {
        vi: "Xây dựng nền tảng nội dung blockchain với bài viết do AI tạo, khám phá insight crypto real-time.",
        en: "Developed a blockchain content platform powered by AI-generated articles for real-time crypto insights.",
      },
      {
        vi: "Triển khai tính năng PWA cho khả năng offline và tải nhanh giống trải nghiệm mobile app.",
        en: "Implemented PWA features for offline access and fast loading, mobile-app-like experience.",
      },
      {
        vi: "Xây dựng trải nghiệm cuộn dọc kiểu TikTok để khám phá bài viết mượt mà trên di động.",
        en: "Built a TikTok-style vertical scrolling experience for seamless article discovery on mobile.",
      },
    ],
    featured: false,
  },
];
