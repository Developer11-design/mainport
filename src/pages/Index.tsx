import { useState, useEffect, ReactElement } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronDown, Award, Briefcase, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  SiGooglecloud
  // Removed SiAzure import as it's no longer used for the Azure icon
} from "react-icons/si";
// Removed: import { FaChartLine } from "react-icons/fa"; // This import was not used, removed for cleanliness.

const Index = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Exploring the Future with ML, AI, and Robotics Building Smart, Data-Driven Systems";

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

  const skills = {
    "Web Development": [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-300" /> },
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
      <img src="opencv.svg" alt="OpenCV" className="w-10 h-10 mx-auto" />


    ],
    "Database Management": [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "SQLite", icon: <SiSqlite className="text-indigo-400" />}
    ],
    "Cloud Services": [
      { name: "AWS", icon: <SiAmazon className="text-yellow-400" /> },
      { name: "Azure", icon: (<img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure" className="w-8 h-8 mx-auto"/>) },
      { name: "Google Cloud", icon: <SiGooglecloud className="text-red-400" /> },
      { name: "Vercel", icon: (<img src="https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" alt="Vercel" className="w-8 h-8" />) },
      { name: "Streamlit", icon: (<img src="https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.svg" alt="Streamlit" className="w-32 h-34 object-contain" />) },
    ]
  };

  // Collect all unique icons from the skills object
  const allAvailableIcons: {name: string; icon: ReactElement}[] = [];
  Object.values(skills).forEach(category => {
    category.forEach(skill => {
      // Simple check to prevent adding the exact same icon element twice (by name)
      if (!allAvailableIcons.some(existingSkill => existingSkill.name === skill.name)) {
         allAvailableIcons.push(skill);
      }
    });
  });

  // Fisher-Yates (Knuth) shuffle algorithm for selecting unique icons
  const shuffleArray = (array: any[]) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  // Generate a limited number of unique floating icons
  const generateFloatingIcons = (count: number) => {
    const iconsToUse = shuffleArray([...allAvailableIcons]).slice(0, count); // Shuffle and take only 'count' unique icons
    const floatingElements = [];

    if (iconsToUse.length === 0) return [];

    // Define approximate dimensions of the central text content (adjust as needed)
    // These percentages should roughly match the visual space taken by your main text
    const textContentEstimatedWidthPercent = 60; // Increased estimate to 60%
    const textContentEstimatedHeightPercent = 45; // Increased estimate to 45%

    const horizontalMargin = (100 - textContentEstimatedWidthPercent) / 2;
    const verticalMargin = (100 - textContentEstimatedHeightPercent) / 2;

    for (let i = 0; i < iconsToUse.length; i++) {
      const skill = iconsToUse[i];
      // Slightly larger size range for distinct icons
      const randomSize = `${Math.random() * 1.5 + 1.5}rem`; // Size between 1.5rem and 3rem

      // Random durations and delays for individual animation for more variation
      const randomTwinkleDuration = `${2 + Math.random() * 3}s`; // 2-5s
      const randomTwinkleDelay = `${Math.random() * 5}s`; // 0-5s
      const randomFloatDuration = `${12 + Math.random() * 10}s`; // 12-22s for float (slower, more noticeable)
      const randomFloatDelay = `${Math.random() * 8}s`; // 0-8s for float

      // Generate random translation values for the 'random-float' animation
      // Increased range for more prominent floating movement
      const floatRange = 150; // How far icons can float from their origin (in pixels)
      const floatX1 = `${(Math.random() - 0.5) * floatRange}px`;
      const floatY1 = `${(Math.random() - 0.5) * floatRange}px`;
      const floatX2 = `${(Math.random() - 0.5) * floatRange}px`;
      const floatY2 = `${(Math.random() - 0.5) * floatRange}px`;
      const floatX3 = `${(Math.random() - 0.5) * floatRange}px`;
      const floatY3 = `${(Math.random() - 0.5) * floatRange}px`;

      // Random rotation values for more dynamic movement
      const rotateDeg1 = `${(Math.random() - 0.5) * 360}deg`; // Full 360 rotation
      const rotateDeg2 = `${(Math.random() - 0.5) * 360}deg`;
      const rotateDeg3 = `${(Math.random() - 0.5) * 360}deg`;

      let topPosition: string, leftPosition: string;

      // Distribute icons into the outer areas (quadrants) to avoid central text
      // This is crucial for "floating around" the text
      const zone = Math.floor(Math.random() * 4); // 0: top, 1: bottom, 2: left, 3: right

      switch (zone) {
        case 0: // Top zone (above text)
          topPosition = `${Math.random() * (verticalMargin - 5)}%`; // Place randomly in top margin, with buffer
          leftPosition = `${Math.random() * 100}%`;
          break;
        case 1: // Bottom zone (below text)
          topPosition = `${(100 - (Math.random() * (verticalMargin - 5)))}%`; // Place randomly in bottom margin
          leftPosition = `${Math.random() * 100}%`;
          break;
        case 2: // Left zone (left of text)
          topPosition = `${Math.random() * 100}%`;
          leftPosition = `${Math.random() * (horizontalMargin - 5)}%`; // Place randomly in left margin
          break;
        case 3: // Right zone (right of text)
          topPosition = `${Math.random() * 100}%`;
          leftPosition = `${(100 - (Math.random() * (horizontalMargin - 5)))}%`; // Place randomly in right margin
          break;
        default: // Fallback (shouldn't happen with Math.floor(random * 4))
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
    // Generate only a 'few' unique icons, e.g., 12-15.
    // Ensure this number is not greater than the total number of unique skill icons available.
    setFloatingIcons(generateFloatingIcons(Math.min(15, allAvailableIcons.length)));
  }, []);

  const projects = [
    {
      title: "JusticePal",
      description: "Advanced ML chatbot using Gradio and Scikit-Learn for real-time chat with legal data and advisories",
      tech: ["Python", "Scikit-Learn", "Machine Learning", "Gradio", "Streamlit"],
      details: "Developed a comprehensive chatbot system that gives real advisories suggestion to clients.",
      github: "https://github.com/SohamWalam11/JusticePal-AI-Assistant",
      images: []
    },
    {
      title: "Band Gap Prediction Model",
      description: "Machine Learning model using advanced ML algorithms for material science",
      tech: ["Python", "Flask", "Scikit-learn", "Machine Learning", "Regression", "Classification"],
      details: "Created a sophisticated band gap prediction model for semiconductor materials using quantum mechanical properties. The project includes a user-friendly web interface and demonstrates expertise in both frontend development and materials science.",
      github: "https://github.com/SohamWalam11/Excavate-25", // Corrected typo here
    },
    {
      title: "Stock Market Analysis and Prediction",
      description: "Comprehensive stock market analysis and prediction system using Python",
      tech: ["Python", "Flask", "Scikit-learn", "Machine Learning", "Data Analysis"],
      details: "Developed a stock market analysis and prediction system that utilizes historical stock data to forecast future stock prices. The system employs various machine learning algorithms and provides visualizations of stock trends and predictions.",
      github: "https://github.com/SohamWalam11/Stock-price-prediction"
    },
    {
      title: "COVID-19 Cases Prediction and Analysis",
      description: "COVID-19 comprehensive analysis and prediction system using Python",
      tech: ["Python", "Flask", "Scikit-learn", "Machine Learning", "Data Analysis", "Map Visualizaion (Dash)"],
      details: "Developed a COVID-19 case prediction and analysis system that uses historical data to forecast future case trends. The system employs various machine learning algorithms and provides visualizations of case trends and predictions.",
      github: "https://github.com/SohamWalam11/COVID-prediction"
    },
  ];

  const achievements = [
    {
      title: "IIT Kharagpur National Level Hackathon",
      subtitle: "Amongst Top 10 Teams out of 170+ Teams",
      description: "Selected among the top 10 teams out of 170+ teams in a prestigious national-level hackathon at IIT Kharagpur. Developed an innovative solution combining Machine Learning for real-time minerals usage.",
      icon: "🏆"
    },
    {
      title: "IIT Delhi Space Ideathon",
      subtitle: "Top 3 Position amongst 100+ Teams",
      description: "Achieved top 3 ranking in a ideation compotition at IIT Delhi, focusing on space technology solutions. Developed a prototype for a satellite data analysis tool using Python and machine learning.",
      icon: "🥇"
    },
    {
      title: "ByteVerse 7.0 National Level Hackathon",
      subtitle: "Amongst top 7 teams out of 680 teams",
      description: "Achieved top 7 teams position in the hackathon creating a chatbot for legal advisories using Gradio and Streamlit for deployment.",
      icon: "🎖️"
    },
    {
      title: "HackTank - BizTech Hackathon",
      subtitle: "Top 5 Position",
      description: "Secured top 5 position in HackTank - BizTech Hackathon, a national-level hackathon organized by IIT Kharagpur, focusing on business technology solutions. Developed a comprehensive data analytics dashboard using Python and Tableau.",
      icon: "🏅"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
            key={icon.name || index} // Use icon name as key if available, fallback to index
            className="floating-tech-icon"
            style={{
              top: icon.top,
              left: icon.left,
              fontSize: icon.size, // Apply the random size here
              ...icon.floatVars, // Apply custom CSS variables here
            }}
          >
            {icon.icon}
          </div>
        ))}



        {/* Center Content */}
        <div className="container mx-auto px-6 text-center hero-content-wrapper">
          <div className="animate-fade-in z-10"> {/* z-10 on this div is important */}
            <h1 className="text-3xl md:text-4xl md:text-6xl font-bold mb-4 leading-tight">
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
          className="scroll-down-arrow absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20" /* Changed from fixed to absolute */
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="text-white w-8 h-8 animate-bounce" />
        </div>
      </section> {/* Closing tag for the main hero section */}


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
                src="main.jpg" // Make sure this image path is correct relative to your public folder
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
              <Badge variant="secondary" className="px-4 py-2 bg-purple-600/20 text-purple-300 border-purple-500">
                ArcGIS Python | Spatial Data Science
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-blue-600/20 text-blue-300 border-blue-500">
                Machine Learning Bootcamp (S4DS)
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-green-600/20 text-green-300 border-green-500">
                Data Science & Analytics (HP)
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-yellow-600/20 text-yellow-300 border-yellow-500">
                AWS Cloud Services
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-pink-600/20 text-pink-300 border-pink-500">
                PyTorch (OpenCV)
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-red-600/20 text-red-300 border-red-500">
                Model Training with MLFlow
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-emerald-600/20 text-emerald-300 border-emerald-500">
                AWS Solution Architecture
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
                        {/* Display the skill name */}
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
                      <div className="text-4xl mb-4">{achievement.icon}</div>
                      <CardTitle className="text-white">{achievement.title}</CardTitle>
                      <CardDescription className="text-yellow-400 font-semibold">
                        {achievement.subtitle}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-slate-800 border-slate-700">
                  <DialogHeader>
                    <DialogTitle className="text-white flex items-center gap-2">
                      <span className="text-2xl">{achievement.icon}</span>
                      {achievement.title}
                    </DialogTitle>
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
                    <a href="mailto:machinehub010@gmail.com" className="hover:text-purple-400 transition-colors">
                      machinehub010@gmail.com
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
