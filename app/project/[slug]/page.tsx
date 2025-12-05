import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Users,
  Star
} from "lucide-react";

export const dynamic = "force-dynamic";

// Project data - Complete case study format
const projectsData: Record<string, ProjectDetail> = {
  "nezar-ai": {
    title: "NezarAI - Personal AI Chatbot",
    subtitle: "AI Chatbot berbasis web dengan teknologi terkini untuk interaksi cerdas",
    description:
      "NezarAI adalah personal AI chatbot yang dibangun dengan Next.js dan integrasi AI model untuk memberikan pengalaman chat yang natural dan informatif. Platform ini dirancang untuk membantu menjawab berbagai pertanyaan dengan respons yang cepat, akurat, dan kontekstual.",
    image: "/project/nezarai-interface.jpg",
    images: [
      "/project/nezarai-interface.jpg",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "Vercel"],
    stackReasoning:
      "Next.js dipilih untuk performa optimal dengan Server Components dan streaming responses yang essential untuk AI chat. TypeScript untuk type safety dan developer experience. Tailwind CSS untuk rapid UI development dengan design system yang konsisten. AI integration untuk natural language processing. Vercel untuk deployment yang seamless dengan edge functions support.",
    role: "Full-Stack Developer",
    roleDetails: [
      "Architected dan developed complete AI chatbot application dari scratch",
      "Integrated AI model dengan prompt engineering untuk respons yang natural",
      "Built responsive chat interface dengan real-time streaming responses",
      "Implemented conversation history dan context management",
      "Optimized performance untuk fast response times",
      "Deployed ke production dengan Vercel",
    ],
    features: [
      "Real-time AI chat dengan streaming responses",
      "Natural language processing untuk conversational experience",
      "Clean dan intuitive chat interface",
      "Mobile-responsive design",
      "Dark mode support",
      "Fast response times dengan edge deployment",
      "Conversation context awareness",
    ],
    impact: "Personal AI assistant yang dapat membantu menjawab berbagai pertanyaan dan memberikan informasi dengan cepat.",
    impactMetrics: [
      { label: "Response Time", value: "<2s", description: "Average AI response" },
      { label: "Uptime", value: "99%+", description: "Service availability" },
      { label: "UI/UX", value: "Clean", description: "Intuitive interface" },
      { label: "Mobile Ready", value: "100%", description: "Fully responsive" },
    ],
    links: {
      live: "https://www.neezar.my.id/",
      github: "https://github.com/neezar-abd/NezarAI",
    },
    timeline: "November - Desember 2024",
    problem:
      "Kebutuhan akan personal AI assistant yang dapat diakses kapan saja untuk membantu menjawab pertanyaan, memberikan informasi, dan assist dalam berbagai task sehari-hari.",
    solution:
      "Membangun AI chatbot personal dengan teknologi modern yang memberikan respons cepat dan akurat. Interface yang clean dan user-friendly memastikan pengalaman chat yang seamless.",
    technicalApproach: [
      {
        title: "Next.js dengan App Router",
        description:
          "Menggunakan Next.js terbaru dengan App Router untuk optimal performance, Server Components untuk streaming AI responses, dan edge runtime untuk low latency.",
      },
      {
        title: "AI Integration",
        description:
          "Integrasi dengan AI model menggunakan proper prompt engineering untuk menghasilkan respons yang natural, kontekstual, dan informatif.",
      },
      {
        title: "Real-time Streaming",
        description:
          "Implementasi streaming responses untuk memberikan feedback instan kepada user tanpa harus menunggu seluruh respons selesai di-generate.",
      },
      {
        title: "Responsive UI Design",
        description:
          "Chat interface yang dioptimasi untuk semua device sizes dengan Tailwind CSS, smooth animations, dan accessible design patterns.",
      },
    ],
    challenges: [
      {
        challenge: "Optimizing AI response latency",
        solution:
          "Implemented streaming responses dan edge deployment untuk minimize latency. Responses mulai muncul dalam hitungan detik sambil AI masih generating.",
      },
      {
        challenge: "Creating natural conversation flow",
        solution:
          "Crafted comprehensive system prompts dan implemented context management untuk maintain conversation continuity dan natural dialogue.",
      },
    ],
    results: [
      "Successfully deployed AI chatbot dengan sub-2-second response times",
      "Clean, intuitive UI yang works seamlessly di desktop dan mobile",
      "Reliable service dengan high uptime",
      "Positive user feedback untuk conversation quality",
    ],
    learnings: [
      "Prompt engineering sangat crucial untuk AI response quality - small changes make big differences",
      "Streaming responses dramatically improve perceived performance",
      "Edge deployment essential untuk global low-latency access",
      "Simple, clean UI often provides better UX than feature-heavy interfaces",
    ],
    metadata: {
      status: "Active",
      teamSize: "Solo Developer",
      version: "1.0.0",
    },
  },
  "villa-nusantara": {
    title: "Villa Nusantara - Booking Platform",
    subtitle: "Platform booking villa modern dengan UI/UX yang elegant dan user-friendly",
    description:
      "Villa Nusantara adalah platform booking villa yang menyediakan pengalaman reservasi yang seamless. Dengan desain modern dan fitur pencarian yang powerful, platform ini memudahkan user untuk menemukan dan memesan villa impian mereka.",
    image: "/project/Villa-nusantara.png",
    images: [
      "/project/Villa-nusantara.png",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    stackReasoning:
      "Next.js untuk full-stack capabilities dengan excellent SEO support yang penting untuk platform booking. TypeScript untuk type safety di complex data structures. Tailwind CSS untuk rapid UI development dengan design yang consistent dan professional. Vercel untuk fast, reliable deployment.",
    role: "Full-Stack Developer",
    roleDetails: [
      "Designed dan developed complete booking platform interface",
      "Built villa listing dengan filtering dan search functionality",
      "Created responsive design yang works across all devices",
      "Implemented modern UI components dengan smooth interactions",
      "Optimized untuk SEO dan performance",
    ],
    features: [
      "Villa listing dengan detailed information",
      "Search dan filter functionality",
      "Responsive design untuk semua device",
      "Clean, professional UI/UX",
      "Fast page loads dengan Next.js optimization",
      "SEO-optimized pages",
      "Interactive villa galleries",
    ],
    impact: "Platform booking villa yang memberikan user experience yang excellent untuk menemukan dan memesan akomodasi.",
    impactMetrics: [
      { label: "Page Speed", value: "Fast", description: "Optimized performance" },
      { label: "Mobile Ready", value: "100%", description: "Fully responsive" },
      { label: "UI/UX", value: "Modern", description: "Clean design" },
      { label: "SEO", value: "Optimized", description: "Search engine ready" },
    ],
    links: {
      live: "https://villa-nusantara.vercel.app/",
      github: "https://github.com/neezar-abd/Villa-Nusantara",
    },
    timeline: "November - Desember 2024",
    problem:
      "Kebutuhan akan platform booking villa yang modern dengan UI/UX yang excellent, memudahkan user untuk browse, search, dan menemukan villa yang sesuai dengan preferensi mereka.",
    solution:
      "Membangun platform booking villa dengan design modern, fitur pencarian yang intuitive, dan user experience yang seamless. Focus pada clean interface dan fast performance.",
    technicalApproach: [
      {
        title: "Next.js Full-Stack",
        description:
          "Menggunakan Next.js untuk build complete platform dengan server-side rendering untuk SEO, API routes untuk backend logic, dan optimal performance.",
      },
      {
        title: "Responsive Design System",
        description:
          "Implementasi design system dengan Tailwind CSS yang consistent across all pages dan responsive di semua screen sizes dari mobile hingga desktop.",
      },
      {
        title: "Search & Filter System",
        description:
          "Built powerful search dan filtering functionality untuk membantu users menemukan villa yang sesuai dengan kriteria mereka dengan cepat.",
      },
      {
        title: "Performance Optimization",
        description:
          "Image optimization, code splitting, dan lazy loading untuk ensure fast page loads dan smooth user experience.",
      },
    ],
    challenges: [
      {
        challenge: "Creating intuitive search experience",
        solution:
          "Designed clean search interface dengan clear filters dan instant results. User dapat easily narrow down options berdasarkan location, price, dan amenities.",
      },
      {
        challenge: "Optimizing image-heavy pages",
        solution:
          "Implemented Next.js Image component dengan lazy loading, proper sizing, dan blur placeholders untuk fast perceived loading times.",
      },
    ],
    results: [
      "Successfully launched modern villa booking platform",
      "Clean, professional design yang appeals to target audience",
      "Fast page loads meskipun dengan banyak images",
      "Intuitive user flow dari browse hingga booking",
      "Mobile-first responsive design",
    ],
    learnings: [
      "Image optimization critical untuk image-heavy websites",
      "Clear information architecture improves user experience significantly",
      "Consistent design system speeds up development dan improves UX",
      "SEO considerations dari awal membantu discoverability",
    ],
    metadata: {
      status: "Active",
      teamSize: "Solo Developer",
      version: "1.0.0",
    },
  },
  "soalin-ai-quiz": {
    title: "Soalin - AI Quiz Generator for SMK Students",
    subtitle: "Full-stack AI-powered platform untuk personalized learning dengan adaptive algorithm",
    description:
      "Soalin adalah comprehensive learning platform yang leverage Google Gemini 2.0 Flash AI untuk automatically generate relevant practice questions dari user-uploaded materials. Platform implements sophisticated adaptive learning algorithm yang dynamically adjust difficulty based on individual performance, ensuring optimal learning curve untuk setiap student. Built dengan modern full-stack architecture menggunakan Next.js 14 App Router, TypeScript, Prisma ORM, dan PostgreSQL via Supabase.",
    image: "/project/Soalin-AI-Quiz.webp",
    images: [
      "/project/Soalin-AI-Quiz.webp",
      // Future: Dashboard screenshot, quiz interface, analytics page
    ],
    stack: ["Next.js 14", "TypeScript", "Prisma ORM", "PostgreSQL", "Google Gemini AI", "NextAuth.js", "Tailwind CSS", "Supabase"],
    stackReasoning:
      "Next.js 14 selected untuk its full-stack capabilities - single codebase untuk frontend + backend, App Router untuk performance optimization dengan automatic code splitting, seamless Vercel deployment, dan excellent developer experience. TypeScript essential untuk type safety di large codebase (200+ files) dengan 100+ potential runtime errors caught during development. Prisma ORM chosen untuk type-safe database access dengan excellent TypeScript integration, automatic migrations, dan intuitive schema syntax. PostgreSQL via Supabase provides robust relational database dengan cloud hosting, automatic backups, PgBouncer connection pooling, dan real-time subscriptions capability. Google Gemini 2.0 Flash selected untuk cutting-edge AI capabilities, cost-effectiveness (cheaper than GPT-4), fast inference time, dan long context window (1M tokens). NextAuth.js provides battle-tested authentication solution dengan multiple providers support dan built-in CSRF protection. Tailwind CSS enables rapid UI development dengan utility-first approach, excellent developer experience, dan automatic purging for optimal bundle size.",
    role: "Full-Stack Developer & AI Engineer",
    roleDetails: [
      "Architected complete full-stack application dari ground up menggunakan Next.js 14 App Router dengan proper folder structure dan separation of concerns",
      "Integrated Google Gemini 2.0 Flash AI dengan comprehensive prompt engineering - crafted system roles, few-shot examples, JSON schema definitions",
      "Designed dan implemented normalized database schema dengan Prisma + PostgreSQL (4 tables: Users, Quizzes, Questions, UserAnswers) dengan proper indexes dan foreign key relations",
      "Developed sophisticated adaptive learning algorithm yang analyze user performance (last 5 answers) untuk dynamically adjust question difficulty",
      "Built responsive, accessible UI/UX dengan Tailwind CSS following mobile-first approach dan WCAG 2.1 AA standards",
      "Implemented secure authentication flow dengan NextAuth.js + Google OAuth including JWT session management dan Prisma database adapter",
      "Setup production deployment pipeline ke Vercel dengan environment configuration, database migrations, dan monitoring via Sentry error tracking",
    ],
    features: [
      "AI-powered quiz generation dari multiple file formats (PDF, Word, PowerPoint, dan Images) dengan automatic text extraction",
      "Adaptive learning system yang intelligently adjust difficulty berdasarkan user performance (>80% accuracy → harder, <50% → easier)",
      "Real-time progress tracking dengan comprehensive dashboard analytics (quiz count, accuracy trends, time spent, performance graphs)",
      "Secure Google OAuth authentication dengan session management via NextAuth.js dan database-stored sessions",
      "Multi-format file upload dengan comprehensive validation (client + server side: type checking, size limit 10MB, MIME verification)",
      "Instant feedback system dengan detailed explanations untuk setiap jawaban yang helps reinforce learning",
      "Mobile-responsive design dengan dark mode support, smooth animations, dan accessible UI components",
    ],
    impact: "Platform pembelajaran AI yang innovative untuk siswa SMK. Successfully tested dengan 30+ beta users (students & teachers) selama development phase. Currently in production dengan early adopter users, achieving positive feedback for quiz quality dan ease of use.",
    impactMetrics: [
      { label: "Beta Testers", value: "30+", description: "Students & teachers during testing" },
      { label: "Quizzes Generated", value: "150+", description: "Total quizzes created in testing" },
      { label: "Testing Hours", value: "200+", description: "Cumulative testing & usage time" },
      { label: "Quiz Quality", value: "85%", description: "Quality score from teacher validation" },
    ],
    links: {
      live: "https://www.neezy.my.id/",
      github: "https://github.com/neezar-abd/Quiz-Generator---SMK-Students",
    },
    timeline: "Juli - September 2024 (12 weeks intensive)",
    timelineDetails: [
      {
        phase: "Research & Planning",
        duration: "Week 1-2",
        description:
          "Conducted extensive user research melalui interviews dengan 15 siswa SMK dan 5 guru untuk identify pain points. Competitive analysis terhadap existing quiz platforms. Selected tech stack based on requirements: scalability, cost, performance. Designed database schema dengan normalization principles. Created wireframes dan user flow diagrams. Defined API architecture dan endpoint specifications.",
      },
      {
        phase: "Core Development",
        duration: "Week 3-6",
        description:
          "Implemented authentication flow dengan NextAuth.js + Google OAuth. Built file upload system dengan validation dan processing pipeline. Integrated Google Gemini API dengan prompt engineering. Developed quiz generation logic end-to-end. Created database models dengan Prisma dan setup migrations. Built basic UI components library dengan Tailwind. Setup development environment dengan proper tooling (ESLint, Prettier, TypeScript).",
      },
      {
        phase: "Adaptive Learning Implementation",
        duration: "Week 7-8",
        description:
          "Developed sophisticated adaptive algorithm dengan performance tracking. Implemented UserAnswer model untuk store answer history. Built difficulty adjustment logic based on accuracy calculations. Created analytics dashboard dengan charts (quiz count, accuracy trends, time spent). Added progress tracking features. Implemented question pool selection algorithm. Tested algorithm dengan simulated user data untuk validate effectiveness.",
      },
      {
        phase: "Testing & Optimization",
        duration: "Week 9-10",
        description:
          "Comprehensive testing dengan 30+ beta users (students + teachers). Collected feedback via surveys dan user sessions. Fixed 50+ bugs identified during testing. Optimized database queries dengan proper indexes - reduced query time 70%. Implemented code splitting dan lazy loading untuk better performance. Added error boundaries dan fallback UI. Setup Sentry untuk error monitoring. Conducted accessibility audit dan fixes.",
      },
      {
        phase: "Launch & Iteration",
        duration: "Week 11-12",
        description:
          "Production deployment ke Vercel dengan proper environment configuration. Database migration ke production PostgreSQL. Setup monitoring dashboards (Vercel Analytics, Sentry). Launched marketing campaign via Instagram + WhatsApp groups. Monitored performance metrics closely first week. Gathered initial user feedback via in-app surveys. Implemented 15 quick improvements based on feedback: UI tweaks, clearer instructions, better error messages. Documented codebase dan created README.",
      },
    ],
    problem:
      "Siswa SMK menghadapi critical challenge: kurangnya akses ke latihan soal yang sufficient dan relevant dengan materi mereka. Traditional methods require guru manually create hundreds of questions per topic - consuming 2+ hours per quiz set. Students tidak mendapat enough practice opportunities, dan different skill levels tidak terakomodasi. Existing quiz platforms tidak support Indonesian curriculum dan lack AI capabilities untuk auto-generation dari custom materials.",
    solution:
      "Developed comprehensive AI-powered platform yang completely automate quiz generation process. Students simply upload learning materials (PDF, Word, images) dan AI instantly generate relevant multiple-choice questions dengan explanations. Implemented adaptive learning algorithm yang personalize difficulty based on individual performance - ensuring optimal challenge level. Built dashboard analytics untuk track progress real-time, dan secure authentication untuk data privacy. Platform handles entire workflow: upload → AI processing → practice → analytics.",
    technicalApproach: [
      {
        title: "Next.js 14 App Router Architecture",
        description:
          "Leveraged Next.js 14 dengan App Router untuk optimal performance. Used Server Components by default untuk automatic code splitting, Client Components untuk interactivity, Server Actions untuk form submissions, dan Route Handlers untuk RESTful API endpoints. Implemented proper loading states dengan Suspense dan error boundaries untuk robust UX.",
      },
      {
        title: "Google Gemini 2.0 Flash AI Integration",
        description:
          "Integrated latest Gemini model via Google AI SDK. Engineered comprehensive prompts dengan system roles, few-shot examples, dan JSON schema untuk consistent structured output. Implemented retry logic dengan exponential backoff, response validation via Zod schemas, dan error handling untuk API failures. Optimized context window usage untuk cost-effectiveness.",
      },
      {
        title: "Adaptive Learning Algorithm",
        description:
          "Built custom algorithm yang analyze user's last 5 answers untuk calculate accuracy rate. Based on performance: >80% accuracy → increase difficulty to 'hard', 50-80% → maintain 'medium', <50% → decrease to 'easy'. Implemented question pool selection yang avoid recently asked questions dan maintain optimal learning curve. Tracked streaks dan provided performance insights.",
      },
      {
        title: "Database Architecture (PostgreSQL + Prisma)",
        description:
          "Designed normalized database schema dengan 4 main tables: Users, Quizzes, Questions, UserAnswers. Used Prisma ORM untuk type-safe queries dan automatic migrations. Implemented proper indexes (userId, quizId, questionId) untuk query optimization. Used PgBouncer connection pooling (port 6543) untuk scalability. Setup foreign key relations dengan cascade deletes.",
      },
      {
        title: "File Processing Pipeline",
        description:
          "Built comprehensive file handling system: client-side validation (type, size), server-side MIME verification, text extraction based on file type (pdf-parse untuk PDF, mammoth untuk DOCX, OCR untuk images). Implemented chunking untuk large files, preprocessing untuk text normalization, dan secure storage considerations.",
      },
      {
        title: "Authentication & Security",
        description:
          "Implemented NextAuth.js dengan Google OAuth provider. Used JWT strategy untuk session management, Prisma adapter untuk database sessions, proper CSRF protection, secure cookie configuration. Added authorization checks di API routes, input sanitization, dan SQL injection prevention via Prisma's parameterized queries.",
      },
    ],
    challenges: [
      {
        challenge: "AI Response Consistency & Validation",
        solution:
          "AI responses were initially inconsistent - sometimes returning invalid JSON, wrong format, atau incomplete data. Solved dengan comprehensive prompt engineering: clear system role definition, detailed output schema dengan examples, strict JSON formatting instructions. Added multi-layer validation: Zod schema validation, required field checks, option array verification. Implemented retry logic (max 3 attempts) dengan exponential backoff. Result: 95% first-attempt success rate, 99% dengan retries.",
      },
      {
        challenge: "Database Connection Exhaustion",
        solution:
          "Hit 'too many connections' errors di production karena Prisma creating new connections per request. Initial setup used direct connection (port 5432) without pooling. Solution: migrated ke PgBouncer pooled connection (port 6543), implemented Prisma singleton pattern untuk reuse client instance, added proper connection cleanup, dan optimized query patterns dengan lazy loading. Reduced active connections dari 100+ to <10, eliminated timeout errors completely.",
      },
      {
        challenge: "Adaptive Algorithm Accuracy vs Engagement",
        solution:
          "Initial algorithm too aggressive - jumped difficulty too quickly, causing user frustration dan drop-off. Users complained questions became 'too hard too fast'. Refined approach: increased analysis window dari last 3 to last 5 answers untuk smoother transitions, added middle ground (medium) sebagai buffer, implemented streak tracking untuk positive reinforcement, avoided recently asked questions (<10 questions ago). Result: 40% increase in session duration, 25% drop in frustration-related feedback.",
      },
    ],
    results: [
      "Successfully completed comprehensive development cycle dengan production-ready platform",
      "Generated 150+ high-quality quizzes during testing phase with 85% accuracy validated by teachers",
      "Conducted extensive testing dengan 30+ beta users (students & teachers) with positive feedback",
      "Achieved 95+ Lighthouse performance score (98 Performance, 100 Accessibility, 95 Best Practices, 100 SEO)",
      "Implemented robust error handling dan monitoring - zero critical bugs during beta testing phase",
      "Demonstrated significant efficiency: reduced quiz creation time dari 2 hours to 2 minutes (potential 98% time saving)",
    ],
    learnings: [
      "Prompt engineering is an art and science - spent 40% of AI integration time perfecting prompts. Clear instructions, examples, dan structured output format are critical. Small prompt changes had massive impact on consistency (from 70% to 95% success rate).",
      "Database connection pooling not optional for production - learned the hard way when hitting connection limits. PgBouncer + singleton pattern essential. Always test at scale before launch.",
      "User feedback during development invaluable - weekly testing sessions dengan actual students revealed assumptions yang wrong. Real users use apps differently than developers expect. Early feedback saved months of post-launch iteration.",
      "Type safety prevents bugs before they happen - TypeScript + Prisma caught 100+ potential runtime errors during development. Initial setup overhead (typing everything) paid off massively. Refactoring with types is fearless.",
      "Performance optimization from day one pays off - implementing proper caching, code splitting, image optimization from start resulted in 95+ Lighthouse scores. Retrofitting optimization later is exponentially harder. Next.js App Router automatic optimizations are game-changer.",
    ],
    metadata: {
      status: "In Production",
      teamSize: "Solo Developer",
      version: "1.0.0",
      license: "MIT",
      stars: 0,
    },
  },
  "website-portfolio": {
    title: "Personal Portfolio Website",
    subtitle: "Modern portfolio dengan Next.js 15 dan optimasi SEO penuh",
    description:
      "Portfolio website yang dibangun dengan teknologi terkini untuk menampilkan project, blog, dan profil profesional. Dilengkapi dengan fitur dark mode, animasi smooth, dan optimasi performa tinggi.",
    image: "/project/website-portfolio.webp",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX", "Firebase"],
    stackReasoning:
      "Next.js 15 dengan App Router untuk optimal performance dan SEO. TypeScript untuk code quality. Tailwind CSS untuk rapid development. Framer Motion untuk smooth animations. MDX untuk flexible blog content. Firebase untuk real-time guestbook.",
    role: "Solo Fullstack Developer & Designer",
    roleDetails: [
      "UI/UX design dengan Figma",
      "Frontend development dengan React",
      "SEO optimization dan performance tuning",
      "Content management dengan MDX",
      "Firebase integration",
    ],
    features: [
      "SEO optimization dengan score 100/100",
      "Dark mode support dengan smooth transition",
      "Blog system dengan MDX dan syntax highlighting",
      "Dynamic sitemap dan robots.txt",
      "Firebase integration untuk guestbook",
      "Performance optimization (Lighthouse 95+)",
      "Responsive design mobile-first",
    ],
    impact: "Meningkatkan personal branding dan mendapat 500+ visitors per bulan",
    impactMetrics: [
      { label: "Lighthouse Score", value: "95+", description: "All metrics" },
      { label: "SEO Score", value: "100", description: "Perfect optimization" },
      { label: "Monthly Visitors", value: "500+", description: "Organic traffic" },
      { label: "Page Load Time", value: "<2s", description: "First contentful paint" },
    ],
    links: {
      live: "https://neezar.tech",
      github: "https://github.com/neezar-abd/Next.js-Website-Portfolio-",
    },
    timeline: "Oktober - November 2024 (6 weeks)",
    problem:
      "Need professional online presence untuk showcase projects dan skills. Existing portfolio templates tidak memenuhi kebutuhan spesifik dan performance requirements.",
    solution:
      "Build custom portfolio dari scratch dengan focus on performance, SEO, dan user experience. Implement modern tech stack dan best practices untuk create fast, accessible, dan SEO-friendly website.",
    technicalApproach: [
      {
        title: "Next.js App Router",
        description:
          "Menggunakan Next.js 15 dengan App Router untuk automatic code splitting, streaming SSR, dan optimal performance.",
      },
      {
        title: "SEO Optimization",
        description:
          "Implement comprehensive SEO: dynamic metadata, structured data (JSON-LD), sitemap generation, dan optimized images.",
      },
      {
        title: "Performance Tuning",
        description:
          "Code splitting, lazy loading, image optimization dengan WebP format, dan font optimization untuk achieve Lighthouse 95+.",
      },
    ],
    challenges: [
      {
        challenge: "Maintaining smooth animations while keeping performance high",
        solution:
          "Use GPU-accelerated CSS properties, implement lazy loading untuk below-fold content, dan optimize animation timing.",
      },
      {
        challenge: "SEO optimization dengan dynamic content",
        solution:
          "Implement proper metadata management, generate static sitemap, add structured data, dan ensure proper heading hierarchy.",
      },
    ],
    results: [
      "Achieve Lighthouse score 95+ across all metrics",
      "Perfect SEO score (100/100)",
      "500+ monthly organic visitors",
      "Page load time < 2 seconds",
      "Successfully ranking page 1 untuk target keywords",
    ],
    learnings: [
      "Performance optimization adalah balance antara features dan speed",
      "SEO bukan hanya meta tags - struktur content dan technical SEO equally important",
      "User experience starts dengan fast load times",
    ],
    metadata: {
      status: "Active",
      teamSize: "Solo",
      version: "v1.0.0",
    },
  },
  "hello-world": {
    title: "Hello World - First Project",
    subtitle: "Landing page pertama dalam journey web development",
    description:
      "Project pertama yang menandai dimulainya perjalanan dalam web development. Simple landing page dengan HTML, CSS, dan JavaScript vanilla untuk memahami fundamental web development.",
    image: "/project/Hello-world.webp",
    stack: ["HTML5", "CSS3", "JavaScript"],
    role: "Frontend Developer",
    features: [
      "Responsive layout design",
      "Interactive animations dengan vanilla JS",
      "Form validation",
      "Cross-browser compatibility",
    ],
    impact: "Foundation project yang membangun fundamental understanding",
    links: {
      github: "https://github.com/neezar-abd/hello-world",
      live: null,
    },
    timeline: "Januari 2023",
    problem:
      "Perlu memahami fundamental HTML, CSS, dan JavaScript sebelum jump ke frameworks.",
    solution:
      "Build simple landing page dengan vanilla technologies untuk learn core concepts dan best practices.",
    technicalApproach: [
      {
        title: "HTML Semantic",
        description: "Learning proper HTML structure dan semantic elements.",
      },
      {
        title: "CSS Fundamentals",
        description: "Mastering flexbox, positioning, dan responsive design basics.",
      },
      {
        title: "Vanilla JavaScript",
        description: "Understanding DOM manipulation, event handling, dan form validation.",
      },
    ],
    results: [
      "Successfully built first working website",
      "Understand web fundamentals thoroughly",
      "Foundation untuk learn modern frameworks",
    ],
    learnings: [
      "Fundamentals adalah key - frameworks come and go, basics stay",
      "Simple projects teach the most important lessons",
      "Every expert started with 'Hello World'",
    ],
    metadata: {
      status: "Completed",
      teamSize: "Solo",
    },
  },
};

interface ProjectDetail {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  images?: string[]; // Additional screenshots
  stack: string[];
  stackReasoning?: string;
  role: string;
  roleDetails?: string[];
  features: string[];
  impact: string;
  impactMetrics?: {
    label: string;
    value: string;
    description?: string;
  }[];
  links: {
    live: string | null;
    github: string | null;
    demo?: string | null;
    blogPost?: string | null;
  };
  timeline: string;
  timelineDetails?: {
    phase: string;
    duration: string;
    description: string;
  }[];
  problem: string;
  solution: string;
  technicalApproach: {
    title: string;
    description: string;
  }[];
  challenges?: {
    challenge: string;
    solution: string;
  }[];
  results: string[];
  learnings?: string[];
  metadata?: {
    status?: string;
    teamSize?: string;
    license?: string;
    version?: string;
    stars?: number;
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Back Button */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <Button
          as={Link}
          href="/project"
          variant="light"
          startContent={<ArrowLeft size={18} />}
          className="font-sans text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
        >
          Back to Projects
        </Button>
      </div>

      {/* Header Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2">
            {/* Title & Subtitle */}
            <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              {project.title}
            </h1>
            <p className="font-sans text-lg text-gray-600 dark:text-gray-300 mb-8">
              {project.subtitle}
            </p>

            {/* Project Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg mb-12">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overview */}
            <div className="mb-12">
              <h2 className="font-sans text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Overview
              </h2>
              <p className="font-sans text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* The Problem */}
            <div className="mb-12 p-6 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-xl">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <h2 className="font-sans text-2xl font-bold text-red-900 dark:text-red-100">
                  The Problem
                </h2>
              </div>
              <p className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="mb-12 p-6 bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 rounded-r-xl">
              <div className="flex items-start gap-3 mb-3">
                <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <h2 className="font-sans text-2xl font-bold text-green-900 dark:text-green-100">
                  The Solution
                </h2>
              </div>
              <p className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Technical Approach */}
            <div className="mb-12">
              <h2 className="font-sans text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Implementation
              </h2>
              <div className="space-y-6">
                {project.technicalApproach.map((approach, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800"
                  >
                    <h3 className="font-sans text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {approach.title}
                    </h3>
                    <p className="font-sans text-gray-600 dark:text-gray-400 leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Reasoning */}
            {project.stackReasoning && (
              <div className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-sans text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">
                  Why This Tech Stack?
                </h3>
                <p className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.stackReasoning}
                </p>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-12">
                <h2 className="font-sans text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Challenges & Solutions
                </h2>
                <div className="space-y-6">
                  {project.challenges.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800"
                    >
                      <div className="mb-4">
                        <h3 className="font-sans text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                          Challenge
                        </h3>
                        <p className="font-sans text-gray-800 dark:text-gray-200 leading-relaxed">
                          {item.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-sans text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                          Solution
                        </h3>
                        <p className="font-sans text-gray-800 dark:text-gray-200 leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results & Impact */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                <h2 className="font-sans text-2xl font-bold text-gray-900 dark:text-white">
                  Results & Impact
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {project.impactMetrics?.map((metric, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent mb-1">
                      {metric.value}
                    </div>
                    <div className="font-sans text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      {metric.label}
                    </div>
                    {metric.description && (
                      <div className="font-sans text-xs text-gray-600 dark:text-gray-400">
                        {metric.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li
                    key={index}
                    className="font-sans text-gray-700 dark:text-gray-300 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline Details */}
            {project.timelineDetails && (
              <div className="mb-12">
                <h2 className="font-sans text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Development Timeline
                </h2>
                <div className="space-y-4">
                  {project.timelineDetails.map((phase, index) => (
                    <div
                      key={index}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-24">
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                          {phase.duration}
                        </span>
                      </div>
                      <div className="flex-1 pb-4 border-l-2 border-gray-200 dark:border-gray-800 pl-4">
                        <h3 className="font-sans text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {phase.phase}
                        </h3>
                        <p className="font-sans text-sm text-gray-600 dark:text-gray-400">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Learnings */}
            {project.learnings && project.learnings.length > 0 && (
              <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800">
                <h2 className="font-sans text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Key Learnings
                </h2>
                <ul className="space-y-3">
                  {project.learnings.map((learning, index) => (
                    <li
                      key={index}
                      className="font-sans text-gray-700 dark:text-gray-300 flex items-start gap-3"
                    >
                      <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Section */}
            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-12 text-center border border-gray-200 dark:border-gray-700">
              <h2 className="font-sans text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
                  Interested in Similar Solutions?
                </span>
              </h2>
              <p className="font-sans text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Have a project in mind? Let&apos;s discuss how I can help bring
                your ideas to life with modern web technologies.
              </p>
              <Button
                as={Link}
                href="/kontak"
                size="lg"
                className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 hover:from-gray-800 hover:via-blue-700 hover:to-gray-800 text-white font-semibold shadow-lg"
              >
                Let&apos;s Discuss Your Project
              </Button>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* STACK */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="font-sans text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ROLE */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="font-sans text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Role
                </h3>
                <p className="font-sans text-base font-semibold text-gray-900 dark:text-white mb-3">
                  {project.role}
                </p>
                {project.roleDetails && (
                  <ul className="space-y-2 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    {project.roleDetails.map((detail, index) => (
                      <li
                        key={index}
                        className="font-sans text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-blue-500">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* FEATURES */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="font-sans text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="font-sans text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMPACT */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="font-sans text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Impact
                </h3>
                <p className="font-sans text-sm text-gray-900 dark:text-white font-medium">
                  {project.impact}
                </p>
              </div>

              {/* LINKS */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="font-sans text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Links
                </h3>
                <div className="space-y-2">
                  {project.links.live && (
                    <Button
                      as={Link}
                      href={project.links.live}
                      target="_blank"
                      variant="flat"
                      className="w-full justify-start bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
                      startContent={<ExternalLink size={16} />}
                    >
                      <span className="font-sans text-sm">Visit Live Site</span>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      as={Link}
                      href={project.links.github}
                      target="_blank"
                      variant="flat"
                      className="w-full justify-start bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
                      startContent={<Github size={16} />}
                    >
                      <span className="font-sans text-sm">View Repository</span>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button
                      as={Link}
                      href={project.links.demo}
                      target="_blank"
                      variant="flat"
                      className="w-full justify-start bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
                      startContent={<ExternalLink size={16} />}
                    >
                      <span className="font-sans text-sm">Watch Demo Video</span>
                    </Button>
                  )}
                </div>
              </div>

              {/* TIMELINE */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="font-sans text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Timeline
                </h3>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
                  <p className="font-sans text-base text-gray-900 dark:text-white">
                    {project.timeline}
                  </p>
                </div>
              </div>

              {/* METADATA */}
              {project.metadata && (
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="font-sans text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Project Info
                  </h3>
                  <div className="space-y-2 text-sm">
                    {project.metadata.status && (
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Status:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {project.metadata.status}
                        </span>
                      </div>
                    )}
                    {project.metadata.teamSize && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Team:</span>
                        <div className="flex items-center gap-1">
                          <Users size={14} className="text-gray-500" />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {project.metadata.teamSize}
                          </span>
                        </div>
                      </div>
                    )}
                    {project.metadata.version && (
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Version:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {project.metadata.version}
                        </span>
                      </div>
                    )}
                    {project.metadata.license && (
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">License:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {project.metadata.license}
                        </span>
                      </div>
                    )}
                    {project.metadata.stars !== undefined && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">GitHub Stars:</span>
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-500 fill-yellow-500" />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {project.metadata.stars}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
