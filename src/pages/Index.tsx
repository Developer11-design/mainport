import { useState, useEffect, ReactElement } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronDown, Award, Briefcase, Code2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { certifications } from '@/lib/certs';
import { achievements } from '@/lib/achieve';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  SiTypescript
} from "react-icons/si";

const Index = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Exploring the Future with ML, AI, and Robotics Building Smart, Data-Driven Systems";

  // --- NEW: State for active project filter ---
  const [activeFilter, setActiveFilter] = useState<'All' | 'Web Development' | 'Machine Learning'>('All');

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
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-300" /> },
      { name: "TypeScript",icon: <SiTypescript className="text-blue-600" />},
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" />}
    ],
    "Machine Learning & Data Science": [
      { name: "Python", icon: <SiPython className="text-yellow-300" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
      { name: "Pandas", icon: <SiPandas className="text-purple-300" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-300" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
      { name: "Keras", icon: <SiKeras className="text-red-500" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-red-600" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-green-400" />},
    
    ],
    "Database Management": [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "SQLite", icon: <SiSqlite className="text-indigo-400" />},
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> }
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
        className="w-10 h-8 mx-auto object-contain" 
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
    icon: (
      <img 
        src="https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.svg" 
        alt="Streamlit" 
        className="w-16 h-10 mx-auto object-contain" 
      />
    ) 
  }
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
      description: "Advanced ML chatbot using Gradio and Scikit-Learn for real-time chat with legal data and advisories",
      tech: ["Python", "Scikit-Learn", "Machine Learning", "Gradio", "Streamlit"],
      category: "Machine Learning", // Add category for filtering
      details: "Developed a comprehensive chatbot system that gives real advisories suggestion to clients.",
      github: "https://github.com/SohamWalam11/JusticePal-AI-Assistant",
      images: []
    },
    {
      title: "Band Gap Prediction Model",
      description: "Machine Learning model using advanced ML algorithms for material science",
      tech: ["Python", "Flask", "Scikit-learn", "Machine Learning", "Regression", "Classification"],
      category: "Machine Learning", // Add category for filtering
      details: "Created a sophisticated band gap prediction model for semiconductor materials using quantum mechanical properties. The project includes a user-friendly web interface and demonstrates expertise in both frontend development and materials science.",
      github: "https://github.com/SohamWalam11/Excavate-25",
    },
    {
      title: "Stock Market Analysis and Prediction",
      description: "Comprehensive stock market analysis and prediction system using Python",
      tech: ["Python", "Flask", "Scikit-learn", "Machine Learning", "Data Analysis"],
      category: "Machine Learning", // Add category for filtering
      details: "Developed a stock market analysis and prediction system that utilizes historical stock data to forecast future stock prices. The system employs various machine learning algorithms and provides visualizations of stock trends and predictions.",
      github: "https://github.com/SohamWalam11/portfolio-code-compass"
    },
    {
      title: "COVID-19 Cases Prediction and Analysis",
      description: "COVID-19 comprehensive analysis and prediction system using Python",
      tech: ["Python", "Flask", "Scikit-learn", "Machine Learning", "Data Analysis", "Map Visualizaion (Dash)"],
      category: "Machine Learning", // Add category for filtering
      details: "Developed a COVID-19 case prediction and analysis system that uses historical data to forecast future case trends. The system employs various machine learning algorithms and provides visualizations of case trends and predictions.",
      github: "https://github.com/SohamWalam11/COVID-prediction"
    },
    {
      title : "RAG Powered Chatbot",
      description: "A chatbot that uses Retrieval-Augmented Generation (RAG) to provide accurate and context-aware responses.",
      tech: ["Python", "LangChain", "OpenAI", "Streamlit", "Pinecone", "ChromaDB"],
      category: "Machine Learning", // Add category for filtering
      details : "Developed a chatbot that leverages Retrieval-Augmented Generation (RAG) techniques to enhance the accuracy and relevance of responses. It integrates with various data sources and uses advanced NLP models to provide context-aware answers.",
      github: "https://github.com/SohamWalam11/QA-Chatbot"
    },
    {
      title: "My Portfolio Website",
      description: "A personal portfolio website showcasing my projects, skills and achievements.",
      tech: ["React", "TailwindCSS", "TypeScript", "Vercel","Vite.js"],
      category: "Web Development", // Add category for filtering
      details: "This very website you are viewing! Built with React and TailwindCSS for a modern, responsive design. Deployed on Vercel.",
      github: "https://github.com/SohamWalam11/Soham-Portfolio", // Replace with your actual portfolio repo
    },
    
    {
    title: "Professional Portfolio Manager",
    description: "A responsive Portfolio manager for managing stocks investment and tracking performance.",
    tech: ["React", "JavaScript", "CSS3", "Firebase","Vercel"],
    category: "Web Development",
    details: "Developed a user-friendly e-commerce interface, demonstrating skills in component-based UI development and state management.",
    github: "https://github.com/SohamWalam11/Portfolio-Manager",
    },
  ];

  // --- NEW: Filtered projects based on activeFilter ---
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') {
      return true;
    }
    return project.category === activeFilter;
  });

  const achievements = [
    {
      title: "IIT Kharagpur National Level Hackathon",
      subtitle: "Amongst Top 10 Teams out of 170+ Teams",
      description: "Selected among the top 10 teams out of 170+ teams in a prestigious national-level hackathon at IIT Kharagpur. Developed an innovative solution combining Machine Learning for real-time minerals usage.",
      image: "./achieve/Composit_Excavate.png"
    },
    {
      title: "IIT Delhi Space Ideathon",
      subtitle: "Top 3 Position amongst 100+ Teams",
      description: "Achieved top 3 ranking in a ideation competition at IIT Delhi, focusing on space technology solutions. Developed a prototype for a satellite data analysis tool using Python and machine learning.",
      image: "./achieve/Tryst IIT Delhi Ideathon.png"
    },
    {
      title: "ByteVerse 7.0 National Level Hackathon",
      subtitle: "Amongst top 7 teams out of 680 teams",
      description: "Achieved top 7 teams position in the hackathon creating a chatbot for legal advisories using Gradio and Streamlit for deployment.",
      image : "/achieve/ByteVerse.jpg"
    },
    {
      title: "HackForge Sustainibility Hackathon",
      subtitle: "Top 5 Position out of 20 teams",
      description: "Secured top 5 position in Hackforg,a intercollege hackathon organized by NMIMS, focusing on business technology solutions. Developed a comprehensive data analytics dashboard using Python and Tableau.",
      image : "./achieve/HackForge.jpg"
    }
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
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
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

        {/* Scroll Down Arrow - Correctly positioned outside hero-content-wrapper */}
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

          {/* Internships Section */}
          <h2 className="text-4xl font-bold text-center my-16 text-white">Internships</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/70 border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Code2 className="text-blue-400" />
                  Data Analyst Intern
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Data Analyst Intern at Prasunet Foundation, where I developed a comprehensive dashboard,
                  built a Flask app for clickstream and customer content analysis, visualized customer behavior
                  to improve engagement, and deployed the solution using Streamlit.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/70 border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Briefcase className="text-blue-400" />
                  Deloitte Internship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Data Analyst Intern at Deloitte, where I developed interactive Tableau dashboards
                  and contributed to advanced data analysis and visualization projects.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/70 border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="text-green-400" />
                  BCG X Internship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Data Science Intern at BCG X, developed comprehensive customer analysis models
                  and provided actionable insights from complex datasets.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Certifications Section */}
          <div className="mt-12 text-center">
  <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
  <div className="flex flex-wrap justify-center gap-4">

    {/* ArcGIS Python | Spatial Data Science */}
    <Dialog>
      <DialogTrigger asChild>
        <Badge variant="secondary" className="px-4 py-2 bg-purple-600/20 text-purple-300 border-purple-500 cursor-pointer hover:bg-purple-700/30 transition-colors">
          ArcGIS Python | Spatial Data Science
        </Badge>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-white">ArcGIS Python | Spatial Data Science</DialogTitle>
          <DialogDescription className="text-gray-300 mt-2">
            Click on the image to view full size.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
          <a href="/certs/ArcGIS.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/certs/ArcGIS.png"
              alt="ArcGIS Python | Spatial Data Science Certificate"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
      </DialogContent>
    </Dialog>

    {/* Machine Learning Bootcamp (S4DS) */}
    <Dialog>
      <DialogTrigger asChild>
        <Badge variant="secondary" className="px-4 py-2 bg-blue-600/20 text-blue-300 border-blue-500 cursor-pointer hover:bg-blue-700/30 transition-colors">
          Machine Learning Bootcamp (S4DS)
        </Badge>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-white">Machine Learning Bootcamp (S4DS)</DialogTitle>
          <DialogDescription className="text-gray-300 mt-2">
            Click on the image to view full size.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
            {/* You'll need to replace 'Composit_Excavate.png' with the actual filename for this cert */}
          <a href="/certs/Composit_Excavate.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/certs/Soham Kishor Walam.png"
              alt="Machine Learning Bootcamp (S4DS) Certificate"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
      </DialogContent>
    </Dialog>

    {/* Data Science & Analytics (HP) */}
    <Dialog>
      <DialogTrigger asChild>
        <Badge variant="secondary" className="px-4 py-2 bg-green-600/20 text-green-300 border-green-500 cursor-pointer hover:bg-green-700/30 transition-colors">
          Data Science & Analytics (HP)
        </Badge>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-white">Data Science & Analytics (HP)</DialogTitle>
          <DialogDescription className="text-gray-300 mt-2">
            Click on the image to view full size.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
             {/* You'll need to replace 'HP_Data Science & ....png' with the actual filename for this cert */}
          <a href="/certs/HP_Data.jpg" target="_blank" rel="noopener noreferrer">
            <img
              src="/certs/HP_Data.jpg"
              alt="Data Science & Analytics (HP) Certificate"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
      </DialogContent>
    </Dialog>

    {/* AWS Cloud Services */}
    <Dialog>
      <DialogTrigger asChild>
        <Badge variant="secondary" className="px-4 py-2 bg-yellow-600/20 text-yellow-300 border-yellow-500 cursor-pointer hover:bg-yellow-700/30 transition-colors">
          AWS Cloud Services
        </Badge>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-white">AWS Cloud Services</DialogTitle>
          <DialogDescription className="text-gray-300 mt-2">
            Click on the image to view full size.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
             {/* You'll need to replace 'AWS_cloud.png' with the actual filename for this cert */}
          <a href="/certs/AWS_cloud.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/certs/AWS_cloud.png"
              alt="AWS Cloud Services Certificate"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
      </DialogContent>
    </Dialog>

    {/* PyTorch (OpenCV) */}
    <Dialog>
      <DialogTrigger asChild>
        <Badge variant="secondary" className="px-4 py-2 bg-pink-600/20 text-pink-300 border-pink-500 cursor-pointer hover:bg-pink-700/30 transition-colors">
          PyTorch (OpenCV)
        </Badge>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-white">PyTorch (OpenCV)</DialogTitle>
          <DialogDescription className="text-gray-300 mt-2">
            Click on the image to view full size.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
             {/* You'll need to replace 'PyTorch.png' with the actual filename for this cert */}
          <a href="/certs/PyTorch.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/certs/PyTorch.png"
              alt="PyTorch (OpenCV) Certificate"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
      </DialogContent>
    </Dialog>

    {/* SQL*/}
    <Dialog>
      <DialogTrigger asChild>
        <Badge variant="secondary" className="px-4 py-2 bg-red-600/20 text-red-300 border-red-500 cursor-pointer hover:bg-red-700/30 transition-colors">
          SQL Intermediate
        </Badge>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-white">SQL Intermediate</DialogTitle>
          <DialogDescription className="text-gray-300 mt-2">
            Click on the image to view full size.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
            {/* You'll need to replace 'TensorFlow & Keras....png' with the actual filename for this cert */}
          <a href="/certs/SQL.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/certs/SQL.png"
              alt="SQL Intermediate Certificate"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
      </DialogContent>
    </Dialog>

    {/* AWS Solution Architecture */}
    <Dialog>
      <DialogTrigger asChild>
        <Badge variant="secondary" className="px-4 py-2 bg-emerald-600/20 text-emerald-300 border-emerald-500 cursor-pointer hover:bg-emerald-700/30 transition-colors">
          AWS Cloud Foundations
        </Badge>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-white">AWS Cloud Foundations</DialogTitle>
          <DialogDescription className="text-gray-300 mt-2">
            Click on the image to view full size.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
            {/* You'll need to replace 'AWS.png' with the actual filename for this cert */}
          <a href="/certs/AWS.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/certs/AWS.png"
              alt="AWS Solution Cloud Foundations"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
      </DialogContent>
    </Dialog>
     
     {/* Tensorflow & Keras opencv */}
    <Dialog>
      <DialogTrigger asChild>
        <Badge variant="secondary" className="px-4 py-2 bg-purple-600/20 text-purple-300 border-purple-500 cursor-pointer hover:bg-purple-700/30 transition-colors">
          Tensorflow & Keras OpenCV
        </Badge>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-white">Tensorflow & Keras opencv</DialogTitle>
          <DialogDescription className="text-gray-300 mt-2">
            Click on the image to view full size.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
            {/* You'll need to replace 'TensorFlow & Keras....png' with the actual filename for this cert */}
          <a href="/certs/TensorFlow & Keras.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/certs/TensorFlow & Keras.png"
              alt="Tensorflow & Keras opencv Certificate"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Projects</h2>

          {/* --- NEW: Filter Buttons for Projects --- */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeFilter === 'All' ? 'default' : 'outline'}
              className={activeFilter === 'All' ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'border-purple-500 text-purple-300 hover:bg-purple-900/20'}
              onClick={() => setActiveFilter('All')}
            >
              All
            </Button>
            <Button
              variant={activeFilter === 'Web Development' ? 'default' : 'outline'}
              className={activeFilter === 'Web Development' ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'border-purple-500 text-purple-300 hover:bg-purple-900/20'}
              onClick={() => setActiveFilter('Web Development')}
            >
              Web Development
            </Button>
            <Button
              variant={activeFilter === 'Machine Learning' ? 'default' : 'outline'}
              className={activeFilter === 'Machine Learning' ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'border-purple-500 text-purple-300 hover:bg-purple-900/20'}
              onClick={() => setActiveFilter('Machine Learning')}
            >
              Machine Learning
            </Button>
          </div>
          {/* --- END NEW: Filter Buttons --- */}

         

          <div className="grid md:grid-cols-2 gap-8">
            {/* --- MODIFIED: Map over filteredProjects --- */}
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
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-purple-500 text-purple-300"
                          >
                            {tech}
                          </Badge>
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
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.images && project.images.map((imgSrc, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={imgSrc}
                        alt={`Screenshot ${imgIndex + 1}`}
                        className="w-32 h-20 object-cover rounded border border-slate-600"
                      />
                    ))}
                  </div>
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
            {/* --- END MODIFIED --- */}
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

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="bg-slate-800/70 border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader className="text-center">
                      <img src={achievement.image} alt={achievement.title} className="w-full h-40 object-contain rounded" />
                      <CardTitle className="text-white">{achievement.title}</CardTitle>
                      <CardDescription className="text-yellow-400 font-semibold">
                        {achievement.subtitle}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-slate-800 border-slate-700">
                   <DialogHeader>
                      <DialogTitle className="text-white">{achievement.title}</DialogTitle>

                    {/* 🖼️ Clickable Image */}
                       <a href={achievement.image} target="_blank" rel="noopener noreferrer">
                         <img 
                         src={achievement.image}
                         alt={achievement.title}
                          className="w-full h-40 object-contain rounded mb-4 hover:scale-105 transition-transform duration-300" />
                      </a>
                 <DialogDescription className="text-gray-300 mt-2">
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