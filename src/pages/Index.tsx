import { useState, useEffect, ReactElement } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronDown, Award, Briefcase, Code2, Download, BrainCircuit, Workflow, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiVuedotjs,
  SiBootstrap,
  SiTailwindcss,
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiAmazon,
  SiGooglecloud,
  SiTypescript,
  SiPostman,
  SiNeo4J,
  SiOracle,
  SiStreamlit,
  SiVercel,
  SiVite,
  SiOpenai,
  SiChakraui,
  SiLangchain,
  SiFlask,
  SiFirebase,
  SiScipy,
  SiFramer,
  SiPlotly,
  SiNextdotjs
} from "react-icons/si";
import { FaRobot, FaChartLine, FaDatabase } from "react-icons/fa";
import { MdCoronavirus,MdOutlineNotificationsActive } from "react-icons/md";

const Index = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Exploring the Future with ML, AI, and Robotics Building Smart, Data-Driven Systems";

  const [activeFilter, setActiveFilter] = useState<'All' | 'Web Development' | 'Machine Learning'>('All');
  const [activeCertFilter, setActiveCertFilter] = useState<'All' | 'Courses' | 'Tests' | 'BootCamps'>('All');
  const [activeInternshipFilter, setActiveInternshipFilter] = useState<'All' | 'Live' | 'Virtual'>('All');

  useEffect(() => {
    if (isTyping && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (currentIndex === fullText.length) {
      setIsTyping(false);
    }
  }, [currentIndex, isTyping, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Skill data organized by category
  const skills = {
    "Web Development": [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500 mx-auto" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500 mx-auto" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 mx-auto" /> },
      { name: "React", icon: <SiReact className="text-cyan-400 mx-auto" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600 mx-auto" /> },
      { nam : "Vite.js",icon: <SiVite className="text-green-400 text-3xl mx-auto" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 mx-auto" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 mx-auto" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 mx-auto" /> }
    ],
    "Machine Learning & Data Science": [
      { name: "Python", icon: <SiPython className="text-yellow-300 mx-auto" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-400 mx-auto" /> },
      { name: "Pandas", icon: <SiPandas className="text-purple-300 mx-auto" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-300 mx-auto" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500 mx-auto" /> },
      { name: "Keras", icon: <SiKeras className="text-red-500 mx-auto" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-red-600 mx-auto" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-green-400 mx-auto" /> },
      {name : "Scipy", icon: <SiScipy className="text-indigo-300 mx-auto" /> }
    ],
    "Database Management": [
      { name: "MySQL", icon: <SiMysql className="text-blue-700 mx-auto" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 mx-auto" /> },
      { name: "SQLite", icon: <SiSqlite className="text-indigo-400 mx-auto" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400 mx-auto" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500 mx-auto" /> },
      { name: "Neo4j", icon: <SiNeo4J className="text-blue-500 mx-auto" /> },
      { name: "Oracle", icon: <SiOracle className="text-red-500 mx-auto" /> }
    ],
    "Cloud Services": [
      { 
        name: "AWS", 
        icon: <SiAmazon className="text-yellow-400 w-8 h-8 mx-auto" /> 
      },
      { 
        name: "Azure", 
        icon: (
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" 
            alt="Azure" 
            className="w-14 h-8 mx-auto object-contain" 
          />
        ) 
      },
      { 
        name: "Google Cloud", 
        icon: <SiGooglecloud className="text-red-400 w-8 h-8 mx-auto" /> 
      },
      { 
        name: "Vercel", 
        icon: (
          <img 
            src="https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" 
            alt="Vercel" 
            className="w-8 h-8 mx-auto object-contain" 
          />
        ) 
      },
      {
        name: "Streamlit",
        icon: <SiStreamlit className="text-red-400 text-3xl mx-auto object-contain" /> 
      },
    ]
  };

  const allAvailableIcons: {name: string; icon: ReactElement}[] = [];
  Object.values(skills).forEach(category => {
    category.forEach(skill => {
      if (!allAvailableIcons.some(existingSkill => existingSkill.name === skill.name)) {
        allAvailableIcons.push(skill);
      }
    });
  });

  const shuffleArray = (array: any[]) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  const generateFloatingIcons = (count: number) => {
    const iconsToUse = shuffleArray([...allAvailableIcons]).slice(0, count);
    const floatingElements = [];

    if (iconsToUse.length === 0) return [];

    const textContentEstimatedWidthPercent = 60;
    const textContentEstimatedHeightPercent = 45;

    const horizontalMargin = (100 - textContentEstimatedWidthPercent) / 2;
    const verticalMargin = (100 - textContentEstimatedHeightPercent) / 2;

    for (let i = 0; i < iconsToUse.length; i++) {
      const skill = iconsToUse[i];
      const randomSize = `${Math.random() * 1.5 + 1.5}rem`;

      const randomTwinkleDuration = `${2 + Math.random() * 3}s`;
      const randomTwinkleDelay = `${Math.random() * 5}s`;
      const randomFloatDuration = `${12 + Math.random() * 10}s`;
      const randomFloatDelay = `${Math.random() * 8}s`;

      const floatRange = 150;
      const floatX1 = `${(Math.random() - 0.5) * floatRange}px`;
      const floatY1 = `${(Math.random() - 0.5) * floatRange}px`;
      const floatX2 = `${(Math.random() - 0.5) * floatRange}px`;
      const floatY2 = `${(Math.random() - 0.5) * floatRange}px`;
      const floatX3 = `${(Math.random() - 0.5) * floatRange}px`;
      const floatY3 = `${(Math.random() - 0.5) * floatRange}px`;

      const rotateDeg1 = `${(Math.random() - 0.5) * 360}deg`;
      const rotateDeg2 = `${(Math.random() - 0.5) * 360}deg`;
      const rotateDeg3 = `${(Math.random() - 0.5) * 360}deg`;

      let topPosition: string, leftPosition: string;

      const zone = Math.floor(Math.random() * 4);

      switch (zone) {
        case 0:
          topPosition = `${Math.random() * (verticalMargin - 5)}%`;
          leftPosition = `${Math.random() * 100}%`;
          break;
        case 1:
          topPosition = `${(100 - (Math.random() * (verticalMargin - 5)))}%`;
          leftPosition = `${Math.random() * 100}%`;
          break;
        case 2:
          topPosition = `${Math.random() * 100}%`;
          leftPosition = `${Math.random() * (horizontalMargin - 5)}%`;
          break;
        case 3:
          topPosition = `${Math.random() * 100}%`;
          leftPosition = `${(100 - (Math.random() * (horizontalMargin - 5)))}%`;
          break;
        default:
          topPosition = `${Math.random() * 100}%`;
          leftPosition = `${Math.random() * 100}%`;
          break;
      }

      floatingElements.push({
        icon: skill.icon,
        name: skill.name,
        top: topPosition,
        left: leftPosition,
        size: randomSize,
        floatVars: {
          '--float-x1': floatX1,
          '--float-y1': floatY1,
          '--float-x2': floatX2,
          '--float-y2': floatY2,
          '--float-x3': floatX3,
          '--float-y3': floatY3,
          '--rotate-deg1': rotateDeg1,
          '--rotate-deg2': rotateDeg2,
          '--rotate-deg3': rotateDeg3,
          '--float-duration': randomFloatDuration,
          '--float-delay': randomFloatDelay,
          '--twinkle-duration': randomTwinkleDuration,
          '--twinkle-delay': randomTwinkleDelay,
        }
      });
    }
    return floatingElements;
  };

  const [floatingIcons, setFloatingIcons] = useState<any[]>([]);

  useEffect(() => {
    setFloatingIcons(generateFloatingIcons(Math.min(15, allAvailableIcons.length)));
  }, []);

 const projects = [
  {
    title: "JusticePal",
    description:
      "Advanced ML chatbot using Gradio and Scikit-Learn for real-time chat with legal data and advisories",
    tech: [
      { icon: <SiPython className="text-yellow-500 text-3xl" /> },
      { icon: <SiScikitlearn className="text-blue-300 text-3xl" /> },
      { icon: <SiOpenai className="text-purple-300 text-3xl" /> },
      { icon: <SiVite className="text-green-400 text-3xl" /> },
      { icon: <SiStreamlit className="text-red-400 text-3xl" /> },
    ],
    category: "Machine Learning",
    details: "Developed a comprehensive chatbot system that gives real advisories suggestion to clients.",
    github: "https://github.com/SohamWalam11/JusticePal-AI-Assistant",
  },
  {
    title: "Band Gap Prediction Model",
    description:
      "Machine Learning model using advanced ML algorithms for material science",
    tech: [
      { icon: <SiPython className="text-yellow-300 text-3xl" /> },
  { icon: <SiScikitlearn className="text-blue-400 text-3xl" /> },
  { icon: <SiTensorflow className="text-orange-400 text-3xl" /> },
  { icon: <SiKeras className="text-red-400 text-3xl" /> },
  { icon: <SiScipy className="text-indigo-300 text-3xl" /> },
    ],
    category: "Machine Learning",
    details:
      "Created a sophisticated band gap prediction model for semiconductor materials using quantum mechanical properties. The project includes a user-friendly web interface and demonstrates expertise in both frontend development and materials science.",
    github: "https://github.com/SohamWalam11/Excavate-25",
  },
  {
    title: "Stock Market Analysis and Prediction",
    description:
      "Comprehensive stock market analysis and prediction system using Python",
    tech: [
      { icon: <SiPython className="text-yellow-300 text-3xl" /> },
      { icon: <SiFlask className="text-gray-400 text-3xl" /> },
      { icon: <SiScikitlearn className="text-blue-300 text-3xl" /> },
      { icon: <SiNextdotjs className="text-white text-3xl" /> },
      { icon: <MdOutlineNotificationsActive className="text-pink-400 text-3xl" /> },
    ],
    category: "Machine Learning",
    details:
      "Developed a stock market analysis and prediction system that utilizes historical stock data to forecast future stock prices. The system employs various machine learning algorithms and provides visualizations of stock trends and predictions.",
    github: "https://github.com/SohamWalam11/Portfolio-Manager",
  },
  {
    title: "COVID-19 Cases Prediction and Analysis",
    description:
      "COVID-19 comprehensive analysis and prediction system using Python",
    tech: [
      { icon: <SiPython className="text-yellow-300 text-3xl" /> },
  { icon: <SiScikitlearn className="text-blue-400 text-3xl" /> },
  { icon: <SiScipy className="text-indigo-300 text-3xl" /> },
  {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg"
        alt="Pandas"
        className="w-12 h-12"
      />
    )
  },
  {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg"
        className="w-16 h-12"
      />
    )
  },
  {
    icon: (
      <img
        src="https://seaborn.pydata.org/_static/logo-wide-lightbg.svg"
        alt="Seaborn"
        className="w-16 h-12"
      />
    )
  }
    ],
    category: "Machine Learning",
    details:
      "Developed a COVID-19 case prediction and analysis system that uses historical data to forecast future case trends. The system employs various machine learning algorithms and provides visualizations of case trends and predictions.",
    github: "https://github.com/SohamWalam11/COVID-prediction",
  },
  {
    title: "RAG Powered Chatbot",
    description:
      "A chatbot that uses Retrieval-Augmented Generation (RAG) to provide accurate and context-aware responses.",
    tech: [
      { icon: <SiPython className="text-yellow-300 text-3xl" /> },
      { icon: <SiLangchain className="text-sky-400 text-4xl" /> },
      { icon: <SiOpenai className="text-white text-3xl" /> },
      { icon: <SiStreamlit className="text-red-400 text-3xl" /> },
      {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg"
        alt="ipywidgets"
        className="w-10 h-10"
      />
    )
  },
      { icon: <SiChakraui className="text-indigo-400 text-3xl" /> },
    ],
    category: "Machine Learning",
    details:
      "Developed a chatbot that leverages Retrieval-Augmented Generation (RAG) techniques to enhance the accuracy and relevance of responses. It integrates with various data sources and uses advanced NLP models to provide context-aware answers.",
    github: "https://github.com/SohamWalam11/QA-Chatbot",
  },
  {
    title: "My Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, skills and achievements.",
    tech: [
      { icon: <SiReact className="text-blue-400 text-3xl" /> },
      { icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
      { icon: <SiTypescript className="text-blue-500 text-3xl" /> },
      { icon: <SiVercel className="text-white text-3xl" /> },
      { icon: <SiVite className="text-purple-400 text-3xl" /> },
      { icon: <SiFramer className="text-orange-400 text-3xl" /> }, // Framer Motion
    ],
    category: "Web Development",
    details:
      "This very website you are viewing! Built with React and TailwindCSS for a modern, responsive design. Deployed on Vercel.",
    github: "https://github.com/SohamWalam11/Soham-Portfolio",
  },
  {
    title: "Professional Portfolio Manager",
    description:
      "A responsive Portfolio manager for managing stocks investment and tracking performance.",
    tech: [
      { icon: <SiReact className="text-blue-400 text-3xl" /> },
      { icon: <SiJavascript className="text-yellow-300 text-3xl" /> },
      { icon: <SiTailwindcss className="text-sky-300 text-3xl" /> },
      { icon: <SiFirebase className="text-orange-400 text-3xl" /> },
      { icon: <SiVercel className="text-white text-3xl" /> },
    ],
    category: "Web Development",
    details:
      "Developed a user-friendly e-commerce interface, demonstrating skills in component-based UI development and state management.",
    github: "https://github.com/SohamWalam11/Portfolio-Manager",
  },
];


  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') {
      return true;
    }
    return project.category === activeFilter;
  });

  const internships = [
    {
      title: "AI & ML Intern",
      company: "InLighnX Global Pvt Ltd",
      period: "Jul'25 - Aug'25",
      description: "Artificial & Machine Learning Intern at InLighnX Global Pvt Ltd, where I developed a comprehensive dashboard, built a Flask app for clickstream and customer content analysis, visualized customer behavior to improve engagement, and deployed the solution using Streamlit.",
      icon: <Workflow className="text-blue-400" />,
      category: "Live"
    },
    {
      title: "Data Analyst Intern",
      company: "Prasunet Foundation",
      period: "Feb'25 - Apr'25",
      description: "Data Analyst Intern at Prasunet Foundation, where I developed a comprehensive dashboard, built a Flask app for clickstream and customer content analysis, visualized customer behavior to improve engagement, and deployed the solution using Streamlit.",
      icon: <Code2 className="text-blue-400" />,
      category: "Live"
    },
    {
      title: "Data Analyst Deloitte",
      company: "Deloitte",
      period: "Virtual",
      description: "Data Analyst Intern at Deloitte, where I developed interactive Tableau dashboards and contributed to advanced data analysis and visualization projects.",
      icon: <Briefcase className="text-blue-400" />,
      category: "Virtual",
      certificate: {
        url: "/certs/Deloitte_Internship_Certificate.png",
        title: "Deloitte Internship Certificate"
      }
    },
    {
      title: "Data Science BCG-X",
      company: "BCG X",
      period: "Virtual",
      description: "Data Science Intern at BCG X, developed comprehensive customer analysis models and provided actionable insights from complex datasets.",
      icon: <BrainCircuit className="text-green-400" />,
      category: "Virtual",
      certificate: {
        url: "/certs/BCGX_Internship_Certificate.png",
        title: "BCG X Internship Certificate"
      }
    },
    {
      title: "AWS Solution Architect",
      company: "Amazon Web Services",
      period: "Virtual",
      description: "AWS Solution Architect Intern at Amazon Web Services, where I Designed and simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times. Described my proposed architecture in plain language ensuring my client understood how it works and how costs will be calculated for it.",
      icon: <SiAmazon className="text-yellow-400" />,
      category: "Virtual",
      certificate: {
        url: "/certs/AWS Forage.png",
        title: "AWS Solution Architect"
      }
    }
  ];

  const filteredInternships = internships.filter(internship => {
    if (activeInternshipFilter === 'All') {
      return true;
    }
    return internship.category === activeInternshipFilter;
  });

  const certifications = [
    {
      name: "ArcGIS Python | Spatial Data Science",
      category: "Courses",
      imagePath: "/certs/ArcGIS.png",
      badgeClass: "px-4 py-2 bg-black text-fuchsia-400 border-fuchsia-600 hover:bg-fuchsia-800/20 hover:text-white transition-all cursor-pointer"
    },
    {
      name: "Machine Learning Bootcamp (S4DS)",
      category: "BootCamps",
      imagePath: "/certs/Soham Kishor Walam.png",
      badgeClass: "px-4 py-2 bg-slate-950 text-sky-400 border-cyan-500 hover:bg-sky-900/40 hover:shadow-sky-500/30 shadow-md transition-all cursor-pointer"
    },
    {
      name: "Data Science & Analytics (HP)",
      category: "Courses",
      imagePath: "/certs/HP_Data.jpg",
      badgeClass: "px-4 py-2 bg-black text-green-400 border-green-600 shadow-inner hover:bg-green-900/30 hover:shadow-green-500/20 transition-all cursor-pointer"
    },
    {
      name: "AWS Cloud Services",
      category: "Courses",
      imagePath: "/certs/AWS_cloud.png",
      badgeClass: "px-4 py-2 bg-yellow-600/20 text-yellow-300 border-yellow-500 cursor-pointer hover:bg-yellow-700/30 transition-colors"
    },
    {
      name: "PyTorch (OpenCV)",
      category: "BootCamps",
      imagePath: "/certs/PyTorch.png",
      badgeClass: "px-4 py-2 bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-600 text-white font-medium rounded-md shadow-md hover:scale-105 hover:brightness-110 transition-transform duration-200 ease-in-out cursor-pointer"
    },
    {
      name: "SQL Intermediate Test (HackerRank)",
      category: "Tests",
      imagePath: "/certs/SQL.png",
      badgeClass: "px-5 py-2 bg-black text-cyan-400 border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black shadow-[0_0_10px_#22d3ee80] transition-all duration-300 ease-in-out font-mono tracking-wider cursor-pointer"
    },
    {
      name: "Python Basic Test (HackerRank)",
      category: "Tests",
      imagePath: "/certs/Test.png",
      badgeClass: "px-5 py-2 bg-[#0d1117] text-[#3b82f6] border border-[#3b82f6] rounded-md hover:bg-[#3b82f6] hover:text-black shadow-[0_0_12px_#3b82f680] transition duration-300 ease-in-out font-mono tracking-widest cursor-pointer"
    },
    {
      name: "AWS Cloud Foundations",
      category: "Courses",
      imagePath: "/certs/AWS.png",
      badgeClass: "px-4 py-2 bg-purple-900/40 text-indigo-200 border-indigo-500 hover:bg-purple-700/50 transition-all cursor-pointer"
    },
    {
      name: "Tensorflow & Keras (OpenCV)",
      category: "BootCamps",
      imagePath: "/certs/TensorFlow & Keras.png",
      badgeClass: "px-4 py-2 bg-zinc-900 text-green-400 border-green-500 font-mono hover:bg-zinc-800 transition-colors cursor-pointer"
    },
    {
      name: "Develop ML Solutions (AWS)",
      category: "Courses",
      imagePath: "/certs/Develop ML Solutions.png",
      badgeClass: "px-4 py-2 bg-gradient-to-r from-red-700 via-green-600 to-blue-600 text-white border-0 hover:brightness-110 transition-all"
    },
    {
      name: "Optimize ML Models (AWS)",
      category: "Courses",
      imagePath: "/certs/Optimize models.png",
      badgeClass: "px-4 py-2 bg-cyan-950 text-emerald-300 border-emerald-500 hover:bg-emerald-900/30 transition-all cursor-pointer"
    },
    {
      name: "Build with AI (Saylor)",
      category: "Tests",
      imagePath: "/certs/Build with AI.png",
      badgeClass: "px-4 py-2 bg-gradient-to-r from-fuchsia-700 via-purple-600 to-cyan-500 text-white border-0 hover:brightness-110 transition-all cursor-pointer"
    },
    {
      name: "GenAI with Diffusion Models (AWS)",
      category: "Courses",
      imagePath: "/certs/GenAI with Diffusion models.png",
      badgeClass: "px-4 py-2 bg-black text-lime-400 border-lime-500 shadow-lg shadow-lime-500/20 hover:bg-lime-800/40 transition-all cursor-pointer"
    },
    {
      name: "Data Engineeering (AWS)",
      category: "Courses",
      imagePath: "/certs/Data Engg.png",
      badgeClass: "px-4 py-2 bg-[#7b5d5d] text-[#f0e0dc] border-[#b89a95] shadow-md shadow-[#b89a95]/20 hover:bg-[#8d6c6c] transition-all cursor-pointer"
    },
    {
      name: "Data Science (SkillUp)",
      category: "Courses",
      imagePath: "/certs/SkillUp.png",
      badgeClass: "px-4 py-2 bg-[#2e3a59] text-[#d8e0f0] border border-[#4b5b88] shadow-md shadow-[#4b5b88]/30 hover:bg-[#3b4a6d] transition-all duration-200 ease-in-out cursor-pointer"
    },
    {
      name : "Python and AI (DevTown)",
      category : "BootCamps",
      imagePath : "/certs/Python and AI.png",
      badgeClass : "px-4 py-2 bg-[#f0f4f8] text-[#1f2937] border border-[#d1d5db] shadow-sm shadow-[#9ca3af]/20 hover:bg-[#e5edf5] transition-all duration-200 ease-in-out cursor-pointer"
    },
    {
      name : "GenAI (PreGrad)",
      category : "BootCamps",
      imagePath : "/certs/GenAI.png",
      badgeClass : "px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-indigo-300/40 hover:brightness-110 transition-all duration-300 ease-in-out cursor-pointer"
    },
    {
      name : "Python Project (PreGrad)",
      category : "BootCamps",
      imagePath : "/certs/PyPro.png",
      badgeClass : "px-4 py-2 bg-gradient-to-r from-teal-400 via-emerald-400 to-lime-400 text-black font-bold rounded-lg shadow-lg shadow-lime-300/30 hover:contrast-125 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
    }
  ];

  const filteredCertifications = certifications.filter(cert => {
    if (activeCertFilter === 'All') {
      return true;
    }
    return cert.category === activeCertFilter;
  });

  const achievements = [
  {
    title: "IIT Kharagpur National Level Hackathon",
    subtitle: "Amongst Top 10 Teams out of 170+ Teams",
    description:
      "Selected among the top 10 teams out of 170+ teams in a prestigious national-level hackathon at IIT Kharagpur. Developed an innovative solution combining Machine Learning for real-time minerals usage.",
    image: "./achieve/Composit_Excavate.png",
    color: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
  },
  {
    title: "IIT Delhi Space Ideathon",
    subtitle: "Top 3 Position amongst 100+ Teams",
    description:
      "Achieved top 3 ranking in an ideation competition at IIT Delhi, focusing on space technology solutions. Developed a prototype for a satellite data analysis tool using Python and machine learning.",
    image: "./achieve/Tryst IIT Delhi Ideathon.png",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  },
  {
    title: "ByteVerse 7.0 National Level Hackathon",
    subtitle: "Amongst top 7 teams out of 172 teams",
    description:
      "Achieved top 7 team position in the hackathon by creating a chatbot for legal advisories using Gradio and Streamlit for deployment.",
    image: "/achieve/ByteVerse.jpg",
    color: "bg-gradient-to-r from-green-500 to-teal-500 text-white",
  },
  {
    title: "HackForge Sustainability Hackathon",
    subtitle: "Top 5 Position out of 20 teams",
    description:
      "Secured top 5 position in HackForge, an intercollege hackathon organized by NMIMS, focusing on business technology solutions. Developed a comprehensive data analytics dashboard using Python and Tableau.",
    image: "./achieve/HackForge.jpg",
    color: "bg-gradient-to-r from-slate-700 to-slate-800 text-white", // fallback
  },
];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Floating Download Resume Button */}
      <a
        href="/SohamWalam_Resume.pdf"
        download="SohamWalam_Resume.pdf"
        className="fixed bottom-6 right-6 z-50 group"
        title="Download Resume"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:animate-pulse"
        >
          <Download className="w-6 h-6" />
        </Button>
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Soham Walam
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Internships', 'Certifications', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:text-purple-400">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-slate-900/95 border-slate-700">
                  <div className="flex flex-col space-y-6 mt-8">
                    {['Home', 'About', 'Internships', 'Certifications', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-white hover:text-purple-400 transition-colors duration-300 text-left text-lg font-medium"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section-container">
        {/* Floating Background Icons */}
        {floatingIcons.map((icon, index) => (
          <div
            key={icon.name || index}
            className="floating-tech-icon"
            style={{
              top: icon.top,
              left: icon.left,
              fontSize: icon.size,
              ...icon.floatVars,
            }}
          >
            {icon.icon}
          </div>
        ))}

        {/* Center Content */}
        <div className="container mx-auto px-6 text-center hero-content-wrapper">
          <div className="animate-fade-in z-10">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-white">Hello, I'm </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Soham Walam
              </span>
            </h1>
            <div className="flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div
          className="scroll-down-arrow absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="text-white w-8 h-8 animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Left: About Text */}
            <div className="flex-1 text-gray-300 text-2xl leading-relaxed max-w-2xl">
              <p>
                Hello! I'm Soham Walam, a dedicated Data Science and Machine Learning professional
                with a BTech in CSE (Data Science). I have worked upon
                building data-driven solutions ranging from interactive dashboards and
                predictive ML models to modern web applications. I've interned at Deloitte, BCG X,
                and Prasunet Foundation, honing my skills in full-stack development, analytics,
                and cloud deployment.
              </p>
            </div>

            {/* Right: Profile Image */}
            <div className="flex-1 flex justify-center">
              <img
                src="main.jpg"
                alt="Soham Walam"
                className="w-80 h-80 rounded-full object-cover border-4 border-purple-500 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 bg-slate-700/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Internships</h2>
          
          {/* Filter Buttons for Internships */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeInternshipFilter === 'All' ? 'default' : 'outline'}
              className={
                activeInternshipFilter === 'All'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'border-purple-500 text-purple-300 hover:bg-purple-900/20'
              }
              onClick={() => setActiveInternshipFilter('All')}
            >
              All
            </Button>

            <Button
              variant={activeInternshipFilter === 'Live' ? 'default' : 'outline'}
              className={
                activeInternshipFilter === 'Live'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'border-purple-500 text-purple-300 hover:bg-purple-900/20'
              }
              onClick={() => setActiveInternshipFilter('Live')}
            >
              Live
            </Button>

            <Button
              variant={activeInternshipFilter === 'Virtual' ? 'default' : 'outline'}
              className={
                activeInternshipFilter === 'Virtual'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'border-purple-500 text-purple-300 hover:bg-purple-900/20'
              }
              onClick={() => setActiveInternshipFilter('Virtual')}
            >
              Virtual
            </Button>
          </div>

          {/* Filtered Internships Display */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredInternships.map((internship, index) => (
              <Card key={index} className="bg-slate-800/70 border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white flex items-center font-bold justify-between">
                    <div className="flex items-center gap-2">
                      {internship.icon}
                      <span className="text-base font-medium tracking-tight">{internship.title}</span>
                    </div>
                    {internship.certificate && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="text-emerald-400 hover:text-emerald-500 transition" title="View Certificate">
                            <Award className="w-6 h-6" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
                          <DialogHeader>
                            <DialogTitle className="text-white">{internship.certificate.title}</DialogTitle>
                            <DialogDescription className="text-gray-300 mt-2">
                              Click to view in full size.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4 flex justify-center">
                            <a
                              href={internship.certificate.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={internship.certificate.url}
                                alt={internship.certificate.title}
                                className="max-w-full h-auto rounded-lg shadow-lg"
                              />
                            </a>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </CardTitle>
                  <CardDescription className="text-xs text-white">{internship.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    {internship.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Certifications</h2>

          {/* Filter Buttons for Certifications */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeCertFilter === 'All' ? 'default' : 'outline'}
              className={
                activeCertFilter === 'All'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'border-purple-500 text-purple-300 hover:bg-purple-900/20'
              }
              onClick={() => setActiveCertFilter('All')}
            >
              All
            </Button>

            <Button
              variant={activeCertFilter === 'Courses' ? 'default' : 'outline'}
              className={
                activeCertFilter === 'Courses'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'border-purple-500 text-purple-300 hover:bg-purple-900/20'
              }
              onClick={() => setActiveCertFilter('Courses')}
            >
              Courses
            </Button>

            <Button
              variant={activeCertFilter === 'Tests' ? 'default' : 'outline'}
              className={
                activeCertFilter === 'Tests'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'border-purple-500 text-purple-300 hover:bg-purple-900/20'
              }
              onClick={() => setActiveCertFilter('Tests')}
            >
              Tests
            </Button>
            <Button
              variant={activeCertFilter === 'BootCamps' ? 'default' : 'outline'}
              className={
                activeCertFilter === 'BootCamps'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : ' border-purple-500 text-purple-400 hover:bg-purple-800/10'
              }
              onClick={() => setActiveCertFilter('BootCamps')}
            >
              BootCamps
            </Button>
          </div>

          {/* Filtered Certifications Display */}
          <div className="flex flex-wrap justify-center gap-4">
            {filteredCertifications.map((cert, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Badge variant="secondary" className={cert.badgeClass}>
                    {cert.name}
                  </Badge>
                </DialogTrigger>
                <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-white">{cert.name}</DialogTitle>
                    <DialogDescription className="text-gray-300 mt-2">
                      Click on the image to view full size.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 flex justify-center">
                    <a href={cert.imagePath} target="_blank" rel="noopener noreferrer">
                      <img
                        src={cert.imagePath}
                        alt={`${cert.name} Certificate`}
                        className="max-w-full h-auto rounded-lg shadow-lg"
                      />
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Projects</h2>

          {/* Filter Buttons for Projects */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeFilter === 'All' ? 'default' : 'outline'}
              className={
                activeFilter === 'All'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'border-purple-500 text-purple-300 hover:bg-purple-900/20'
              }
              onClick={() => setActiveFilter('All')}
            >
              All
            </Button>

            <Button
              variant={activeFilter === 'Web Development' ? 'default' : 'outline'}
              className={
                activeFilter === 'Web Development'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'border-purple-500 text-purple-300 hover:bg-purple-900/20'
              }
              onClick={() => setActiveFilter('Web Development')}
            >
              Web Development
            </Button>

            <Button
              variant={activeFilter === 'Machine Learning' ? 'default' : 'outline'}
              className={
                activeFilter === 'Machine Learning'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'border-purple-500 text-purple-300 hover:bg-purple-900/20'
              }
              onClick={() => setActiveFilter('Machine Learning')}
            >
              Machine Learning
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="bg-slate-800/70 border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center justify-between">
                        {project.title}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5 text-purple-400 hover:text-purple-300" />
                        </a>
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
  <div className="flex flex-wrap gap-3">
    {project.tech.map((tech, techIndex) => (
      <span key={techIndex}>
        {tech.icon}
      </span>
    ))}
  </div>
</CardContent>

                  </Card>
                </DialogTrigger>

                <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-white">{project.title}</DialogTitle>
                    <DialogDescription className="text-gray-300 mt-4">
                      {project.details}
                    </DialogDescription>
                  </DialogHeader>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 mt-4"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> View GitHub Repo
                  </a>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-slate-800/70 border-slate-700 hover:border-purple-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {skillList.map((skill, index) => (
                      <div key={index} className="text-center group">
                        <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-200">
                          {skill.icon}
                        </div>
                        <div className="text-xs text-gray-300">{skill.name}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

<section id="achievements" className="py-20 bg-[#1a063b]">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16 text-white">Achievements</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {achievements.map((achievement, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <Card
              className={`border border-slate-700 hover:scale-105 cursor-pointer transition-transform duration-300 bg-slate-900 text-white`}
            >
              <CardHeader className="p-4">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-40 object-contain rounded mb-4"
                />
                <CardTitle className="text-lg font-bold text-center leading-snug">
                  {achievement.title}
                </CardTitle>
                <CardDescription className="text-yellow-400 text-center font-medium mt-2">
                  {achievement.subtitle}
                </CardDescription>
              </CardHeader>
            </Card>
          </DialogTrigger>

          <DialogContent className="bg-slate-800 border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-white">{achievement.title}</DialogTitle>
              <a href={achievement.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-auto max-h-[400px] object-contain rounded mt-4 hover:scale-105 transition-transform duration-300"
                />
              </a>
              <DialogDescription className="text-gray-300 mt-4">
                {achievement.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800/70 border-slate-700">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <Mail className="text-purple-400" />
                    <a href="mailto:walamsoham@gmail.com" className="hover:text-purple-400 transition-colors">
                      walamsoham@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <Linkedin className="text-blue-400" />
                    <a href="https://www.linkedin.com/in/soham-walam-b82446296/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <Github className="text-gray-400" />
                    <a href="https://github.com/SohamWalam11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                      GitHub Profile
                    </a>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-600 text-center text-gray-400">
                  <p>Phone: +91 99872 36183</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/30 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Soham Walam | All Rights Reserved</p>
          <p className="mt-2">Built by Soham Walam</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;