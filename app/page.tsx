"use client";
import React, { useState, useEffect } from 'react';
import './portfolio.css';
import { 
  LocationOn, 
  Email, 
  TravelExplore, 
  CameraAlt,
  Restaurant,
  MusicNote,
  AutoStories,
  Star
} from '@mui/icons-material';


export default function Home() {
  const [activeView, setActiveView] = useState('professional');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // Travel images data - Categories for better organization
  const travelImages = [
    // Featured/Highlights (show in main gallery)
    { id: 1, name:"11", category: 'major', placeholder: 'bg-gradient-to-br from-slate-700 to-slate-900' },
    { id: 2, name:"2",  category: 'major', placeholder: 'bg-gradient-to-br from-amber-700 to-orange-900' },
    { id: 3, name:"3",  placeholder: 'bg-gradient-to-br from-rose-700 to-pink-900' },
    { id: 4, name:"4",  category: 'major', placeholder: 'bg-gradient-to-br from-emerald-700 to-green-900' },
    { id: 5, name:"5", category: 'cultural', placeholder: 'bg-gradient-to-br from-purple-700 to-indigo-900' },
    { id: 6, name:"6",  category: 'nature', placeholder: 'bg-gradient-to-br from-blue-700 to-cyan-900' },
  ];

  // All prefectures - for the "Places Conquered" section
  const allPrefectures = [
    'Tokyo', 'Kyoto', 'Osaka', 'Hiroshima', 'Nara', 'Hokkaido', 'Okinawa', 'Gunma',
    'Fukuoka', 'Nagoya', 'Yamanashi', 'Akita', 'Hyogo', 'Kanazawa', 'Toyama', 'Fukui',
    'Gifu', 'Tochigi', 'Aomori', 'Kanagawa', 'Miyagi', 'Ibaraki', 
    'Nagano', 'Niigata'
  ];

  // Pagination for prefecture display
  const itemsPerPage = 8;
  const totalPages = Math.ceil(allPrefectures.length / itemsPerPage);
  const currentPrefectures = allPrefectures.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  const hobbies = [
    { icon: <TravelExplore />, title: 'Travel & Exploration' },
    { icon: <CameraAlt />, title: 'Photography' },
    { icon: <Restaurant />, title: 'Food Adventures' },
    { icon: <MusicNote />, title: 'Music Discovery' },
    { icon: <AutoStories />, title: 'Cultural Learning' }
  ];

  const projects = [
    { 
      title: 'Agricultural Dashboard', 
      tech: 'React, TypeScript, External API',
      desc: '',
      category: 'analytics',
    },
    { 
      title: 'AI Chatbot Dashboard', 
      tech: 'React, TypeScript, AI Integration',
      desc: 'Enterprise chatbot interface with NLP and real-time messaging.',
      category: 'analytics'
    },
    { 
      title: 'Document Automation Platform', 
      tech: 'Vue.js, Spring Boot',
      desc: 'Reduced manual document creation by 60% with automation.',
      category: 'enterprise'
    },
    { 
      title: 'HR Talent Matching Platform', 
      tech: 'React, REST APIs',
      desc: 'Responsive talent matching interface with optimized performance.',
      category: 'platform'
    },
    { 
      title: 'Real-Time Analytics Dashboard', 
      tech: 'Vue.js, Data Visualization',
      desc: 'Construction monitoring dashboards with operational insights.',
      category: 'analytics'
    },
   
  ];

  // Auto-rotate travel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % travelImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
  
      <div className="min-h-screen bg-slate-50">
{/* Navigation Tabs */}
<div className="bg-gradient-to-r from-slate-900 via-zinc-900 to-black border-b-4 border-gold-400 sticky top-0 z-50 shadow-xl">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex justify-center py-6">
      <div className="flex bg-white/5 backdrop-blur-md rounded-xl p-2 shadow-2xl border border-white/10">
        <button
          onClick={() => setActiveView('professional')}
          className={`cursor-pointer px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
            activeView === 'professional'
              ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-black shadow-lg scale-105 font-bold'
              : 'text-white hover:text-gold-300 hover:bg-white/10'
          }`}
        >
          Professional
        </button>
        <button
          onClick={() => setActiveView('personal')}
          className={`cursor-pointer px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
            activeView === 'personal'
              ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-black shadow-lg scale-105 font-bold'
              : 'text-white hover:text-gold-300 hover:bg-white/10'
          }`}
        >
          Personal
        </button>
      </div>
    </div>
  </div>
</div>

{/* Main Section */}
<section className="relative bg-gradient-to-br from-slate-900 via-zinc-900 to-black text-white py-6 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-zinc-500/10"></div>
    <div className="absolute top-10 left-10 w-32 h-32 bg-gold-400/5 rounded-full blur-xl"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-400/5 rounded-full blur-xl"></div>
  </div>
  <div className="relative max-w-6xl mx-auto px-6 z-10">
    <div className="text-center">
      <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent leading-tight">
        Apeksha Tadge
      </h1>
      <p className="text-3xl md:text-4xl mb-4 text-gold-100 font-light">
        Web Developer &  Explorer
      </p>
      <div className="text-md md:text-lg font-light mb-6 text-gold-300">
        ✨ "Travel • Explore • Learn • Adapt • Repeat" ✨
      </div>
      
      {/* Enhanced Language Section */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-gold-400/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="text-gold-200 mb-4">
          <span className="text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-3">
            🌍 <span>Multilingual Professional</span> 🗣️
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-lg font-medium">
          <div className="bg-gradient-to-r from-blue-500/15 to-blue-600/15 rounded-lg p-3 border border-blue-400/20">
            <div className="text-blue-200 font-bold">🇺🇸 English</div>
            <div className="text-blue-100 text-sm">Native</div>
          </div>
          <div className="bg-gradient-to-r from-red-500/15 to-red-600/15 rounded-lg p-3 border border-red-400/20">
            <div className="text-red-200 font-bold">🇯🇵 Japanese</div>
            <div className="text-red-100 text-sm">JLPT N1</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500/15 to-orange-600/15 rounded-lg p-3 border border-orange-400/20">
            <div className="text-orange-200 font-bold">🇮🇳 Hindi</div>
            <div className="text-orange-100 text-sm">Native</div>
          </div>
          <div className="bg-gradient-to-r from-green-500/15 to-green-600/15 rounded-lg p-3 border border-green-400/20">
            <div className="text-green-200 font-bold">🇮🇳 Marathi</div>
            <div className="text-green-100 text-sm">Native</div>
          </div>
          <div className="bg-gradient-to-r from-red-500/15 via-yellow-500/15 to-black/15 rounded-lg p-3 border border-red-400/20 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-red-200 font-bold">🇩🇪 German (Pursuing)</div>
          </div>
        </div>
      </div>
      
      <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto text-slate-200 font-light leading-relaxed">
        Crafting web applications in the heart of Tokyo 🏙️
      </p>
    </div>
  </div>
</section>

{/* Professional Content */}
{activeView === 'professional' && (
  <>
    {/* Skills Section */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 font-serif">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl hover:shadow-lg transition-all border border-blue-200">
            <div className="text-indigo-600 text-3xl mb-4">⚛️</div>
            <h3 className="font-bold text-xl mb-2 text-slate-900 font-serif">Frontend</h3>
            <p className="text-slate-600 font-light">React, Vue.js, TypeScript, Next.js</p>
          </div>
          <div className="group bg-gradient-to-br from-emerald-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-all border border-emerald-200">
            <div className="text-emerald-600 text-3xl mb-4">🎨</div>
            <h3 className="font-bold text-xl mb-2 text-slate-900 font-serif">Styling</h3>
            <p className="text-slate-600 font-light">Tailwind, Material-UI, CSS3, Figma</p>
          </div>
          <div className="group bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl hover:shadow-lg transition-all border border-purple-200">
            <div className="text-violet-600 text-3xl mb-4">🛠️</div>
            <h3 className="font-bold text-xl mb-2 text-slate-900 font-serif">Tools</h3>
            <p className="text-slate-600 font-light">Git, ESLint, Docker</p>
          </div>
          <div className="group bg-gradient-to-br from-orange-50 to-amber-100 p-6 rounded-xl hover:shadow-lg transition-all border border-orange-200">
            <div className="text-amber-600 text-3xl mb-4">⚙️</div>
            <h3 className="font-bold text-xl mb-2 text-slate-900 font-serif">Backend</h3>
            <p className="text-slate-600 font-light">Node.js, REST APIs, Spring Boot, Express</p>
          </div>
          <div className="group bg-gradient-to-br from-cyan-50 to-sky-100 p-6 rounded-xl hover:shadow-lg transition-all border border-cyan-200">
            <div className="text-sky-600 text-3xl mb-4">☁️</div>
            <h3 className="font-bold text-xl mb-2 text-slate-900 font-serif">Cloud</h3>
            <p className="text-slate-600 font-light">AWS, GCP</p>
          </div>
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 font-serif">Some Work</h2>
        
        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900 font-serif leading-tight">
                  {project.title}
                </h3>
                <Star className="text-gold-400 text-2xl" />
              </div>
              <p className="text-slate-700 font-semibold mb-4 font-mono text-sm tracking-wide">{project.tech}</p>
              <p className="text-slate-700 leading-relaxed font-light">{project.desc}</p>
              <div className="mt-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 capitalize">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Experience Section */}
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 font-serif">Professional Journey</h2>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">Web Developer</h3>
                <p className="text-indigo-600 font-semibold text-lg">Deloitte Tohmatsu Consulting</p>
              </div>
              <div className="text-slate-600">
                <p className="font-light">Tokyo, Japan | 2022 – Present</p>
              </div>
            </div>
            <p className="text-slate-700 mb-4 font-light leading-relaxed">
              Building Web apps and automation platforms using React and Vue.js.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Vue.js', 'TypeScript', 'Enterprise SaaS'].map((skill) => (
                <span key={skill} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">R&D Engineer</h3>
                <p className="text-emerald-600 font-semibold text-lg">Konica Minolta</p>
              </div>
              <div className="text-slate-600">
                <p className="font-light">Tokyo, Japan | 2018 – 2022</p>
              </div>
            </div>
            <p className="text-slate-700 mb-4 font-light leading-relaxed">
              Built real-time dashboard and prototype systems for requirment analysis , POCs and insights.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Dashboards', 'Data Visualization', 'Prototyping', 'Automation'].map((skill) => (
                <span key={skill} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)}

{/* Personal Content */}
{activeView === 'personal' && (
  <>
    {/* Travel Gallery Section */}
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-slate-900 font-serif">Japan Journey</h2>
        <p className="text-center text-slate-600 mb-16 text-xl font-light">Exploring the Land of the Rising Sun 🌅</p>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Enhanced Travel Gallery */}
          <div className="space-y-8 h-full">
            <h3 className="text-3xl font-bold text-slate-900 font-serif flex items-center gap-3">
              📸 Travel Gallery
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 h-[600px] flex flex-col">
              <div className="grid grid-cols-2 gap-4 flex-1">
                {travelImages.map((image, index) => (
                  <div 
                    key={image.id}
                    className={`${image.placeholder} h-40 rounded-xl flex flex-col items-center justify-center transition-all duration-500 hover:scale-110 cursor-pointer relative overflow-hidden ${
                      index === currentImageIndex ? 'ring-4 ring-gold-400 scale-110 shadow-2xl' : 'hover:shadow-lg'
                    }`}
                  >
                    {/* Image placeholder - ready for actual images */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-center">
                      </div>
                    </div>
                    <img src={`/images/travel/${image.name.toLowerCase()}.jpg`} alt={image.name} className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-all flex items-end p-3">
                    </div>
                  </div>
                ))}
              </div>
  
            </div>
          </div>

          {/* Enhanced Prefecture Map */}
          <div className="space-y-8 h-full">
            <h3 className="text-3xl font-bold text-slate-900 font-serif flex items-center gap-3">
              🗾 Places Conquered
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 h-[600px] flex flex-col">
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">🗾</div>
                <div className="text-lg font-semibold text-slate-700 mb-4">
                  <span className="bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent font-bold">
                    {allPrefectures.length} Prefectures Explored
                  </span>
                </div>
              </div>
              
              {/* Pagination Controls */}
              <div className="flex justify-between items-center mb-4">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                  disabled={currentPage === 0}
                  className="px-3 py-1 bg-slate-100 rounded-lg text-black disabled:opacity-50 hover:bg-slate-200 transition-colors"
                >
                  ← Prev
                </button>
                <span className="text-sm text-slate-600">
                  Page {currentPage + 1} of {totalPages}
                </span>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                  disabled={currentPage === totalPages - 1}
                  className="px-3 py-1 bg-slate-100 rounded-lg text-black disabled:opacity-50 hover:bg-slate-200 transition-colors"
                >
                  Next →
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {currentPrefectures.map((prefecture, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-slate-50 to-zinc-50 p-4 rounded-xl border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-xl mr-3 group-hover:animate-bounce">📍</span>
                        <span className="font-bold text-slate-800 group-hover:text-slate-600 transition-colors">
                          {prefecture}
                        </span>
                      </div>
                      <span className="text-green-500 text-lg opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-300">
                  <span>🎌</span>
                  <span className="text-green-800 font-semibold">Adventure Continues...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Interests Section */}
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-zinc-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-zinc-700 to-slate-900 bg-clip-text text-transparent font-serif">
            ✨ Interests & Passions ✨
          </h2>
          <p className="text-xl text-slate-600 font-light">Exploring life through diverse experiences</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {hobbies.map((hobby, index) => {
            const colors = [
              'from-slate-300 via-blue-200 to-indigo-200', // Travel - Elegant blue-grey
              'from-purple-200 via-violet-200 to-lavender-200', // Photography - Soft lavender
              'from-amber-200 via-orange-200 to-rose-200', // Food - Warm neutral
              'from-pink-200 via-rose-200 to-purple-200', // Music - Soft rose
              'from-emerald-200 via-teal-200 to-cyan-200' // Learning - Gentle mint
            ];
            
            return (
              <div 
                key={index} 
                className={`group bg-gradient-to-br ${colors[index]} p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-slate-200/30 backdrop-blur-sm min-w-[280px] max-w-[320px]`}
              >
                <div className="text-center">
                  <div className="bg-white/40 backdrop-blur-sm rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/50 transition-all duration-300">
                    <div className="text-slate-700 text-2xl group-hover:scale-110 transition-transform duration-300">
                      {hobby.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2 group-hover:text-slate-800 transition-colors duration-300 font-serif">
                    {hobby.title}
                  </h3>
                  <div className="w-12 h-1 bg-slate-400/50 rounded-full mx-auto group-hover:w-16 group-hover:bg-slate-500/60 transition-all duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-100 to-zinc-100 px-6 py-3 rounded-full border border-slate-200 shadow-md">
            <span className="text-2xl">🌟</span>
            <span className="font-semibold text-slate-700">Always exploring new horizons</span>
            <span className="text-2xl">🌟</span>
          </div>
        </div>
      </div>
    </section>
  </>
)}

{/* Contact Section */}
<section className="bg-slate-900 text-white py-4">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
    
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <Email className="text-4xl mb-4 mx-auto text-slate-300" />
        <h3 className="font-bold mb-2">Email</h3>
        <p className="text-slate-300">tadgeapeksha@gmail.com</p>
      </div>
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <LocationOn className="text-4xl mb-4 mx-auto text-slate-300" />
        <h3 className="font-bold mb-2">Location</h3>
        <p className="text-slate-300">Tokyo, Japan</p>
      </div>
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <TravelExplore className="text-4xl mb-4 mx-auto text-slate-300" />
        <h3 className="font-bold mb-2">Currently</h3>
        <p className="text-slate-300">Exploring Life...</p>
      </div>
    </div>

  </div>
</section>
      </div>

  );
}

