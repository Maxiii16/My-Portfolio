import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Play, 
  Volume2, 
  ArrowDown, 
  ExternalLink, 
  GraduationCap, 
  Award, 
  Cpu, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  FileText,
  MousePointer2
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "School Website Mockup",
      desc: "Built a prototype website to showcase school events and notices using semantic HTML and organised CSS.",
      tags: ["HTML", "CSS", "UI Design"],
      icon: "🌐"
    },
    {
      title: "Attendance Tracker",
      desc: "Designed an Excel workbook with formulas to log daily attendance and auto-summarise per-student totals.",
      tags: ["Excel", "Data Analysis", "Dashboards"],
      icon: "📋"
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Constructing the mailto link
    const mailtoLink = `mailto:safin.yasir11@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // In a real production app, you would use a service like Formspree or a backend here.
    // For now, this opens the user's email client with the data ready.
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      // Optional: Logic to clear form or show success
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans selection:bg-white selection:text-black">
      {/* ══════════════════════════════════════════════════════
           NAVBAR
           ✏️ Edit nav links here
      ════════════════════════════════════════════════════════ */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center ${
          scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent'
        }`}
      >
        <motion.a 
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-display font-medium tracking-tighter hover:opacity-70 transition-opacity"
        >
          {/* ✏️ Your Name Logo */}
          SAFIN <span className="text-white/40 font-serif italic">Yasar</span>
        </motion.a>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden lg:flex gap-10 text-[10px] font-semibold tracking-[0.3em] uppercase text-white/50"
        >
          <a href="#about" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#education" className="hover:text-white transition-colors">Academic</a>
          <a href="#projects" className="hover:text-white transition-colors">Creations</a>
          <a href="#journey" className="hover:text-white transition-colors">Journey</a>
        </motion.div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors"
        >
          Contact Me
        </motion.a>
      </nav>

      {/* ══════════════════════════════════════════════════════
           HERO SECTION
           ✏️ Edit headline and subtitle here
      ════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source 
              src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4" 
              type="video/mp4" 
            /> 
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-[10px] font-semibold tracking-[0.4em] uppercase text-white/70 mb-10"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              {/* ✏️ Hero Label */}
              Building Ideas Into Reality
            </motion.div>

            {/* ✏️ Main Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tighter leading-[0.85] mb-10">
              CRAFTING<br />
              <span className="italic font-serif font-normal text-white/80 pr-2">The Future</span>
            </h1>

            {/* ✏️ Hero Description */}
            <p className="max-w-xl mx-auto text-sm md:text-lg text-white/40 font-light leading-relaxed mb-14 tracking-wide px-4">
              Student. Creator. Problem Solver. I weave digital experiences with curiosity, precision, and a high-end cinematic touch.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <motion.a
                href="#about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 rounded-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Enter My World <Play size={14} fill="currentColor" />
                </span>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ x: 5 }}
                className="text-white/60 hover:text-white font-bold text-[10px] uppercase tracking-[0.4em] flex items-center gap-2 transition-all border-b border-white/10 pb-1"
              >
                Selected Works <ChevronRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
        >
          <div className="text-[9px] uppercase tracking-[0.6em] text-white/20 font-bold">Scroll</div>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════
           ABOUT / PHILOSOPHY
           ✏️ Edit your bio and photo here
      ════════════════════════════════════════════════════════ */}
      <section id="about" className="relative py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-blue-500">The Philosophy</div>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight">
              Technology is a medium for <span className="italic font-serif">expression</span>.
            </h2>
            <div className="space-y-6 text-white/50 leading-relaxed text-lg font-light">
              {/* ✏️ About Paragraphs */}
              <p>
                I am <span className="text-white">Safin Yasar</span>, a Class 12 student at Chattogram Collegiate College. I completed my SSC with a perfect <span className="text-white">GPA of 5.00</span> — and I'm just getting started.
              </p>
              <p>
                I believe technology is more than just logic. Whether building a website or tracking data, I'm driven by curiosity, disciplined by precision, and motivated by impact.
              </p>
            </div>
            
            <blockquote className="pl-8 border-l border-white/10">
              {/* ✏️ Poetic Quote */}
              <p className="text-xl font-serif italic text-white/80 leading-relaxed">
                "In the intersection of curiosity and craft, we find the most meaningful creations."
              </p>
            </blockquote>

            {/* ✏️ Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8">
              {[
                { label: "SSC GPA", val: "5.00" },
                { label: "Typing WPM", val: "50+" },
                { label: "Creations", val: "2+" },
                { label: "Activities", val: "4+" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl font-display font-bold text-white">{stat.val}</div>
                  <div className="text-[9px] uppercase tracking-widest text-white/30">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* ✏️ PHOTO - rest of the profile photo logic */}
            <div className="aspect-[4/5] bg-neutral-900 border border-white/5 rounded-sm overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
              
              {/* Actual Image - looks for safin-photo.jpg */}
              <img 
                src="/safin-photo.jpg" 
                alt="Safin Yasar" 
                className="absolute inset-0 w-full h-full object-cover z-0 grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />

              {/* Placeholder shown if image is missing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-20">
                 <MousePointer2 className="w-10 h-10 text-white/5 mb-6" />
                 <h3 className="text-xl font-display uppercase tracking-widest text-white/20">Digital Architect</h3>
              </div>

              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           EDUCATION
           ✏️ Edit education history here
      ════════════════════════════════════════════════════════ */}
      <section id="education" className="py-40 bg-[#0f0f0f] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-blue-500 mb-6 uppercase">Academic Background</div>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight">The Foundation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-12 bg-white/2 backdrop-blur-xl border border-white/5 rounded-sm hover:border-white/10 transition-all duration-500"
            >
              <div className="text-xs font-mono text-blue-500 mb-6">2024 — 2026 (EXPECTED)</div>
              <h3 className="text-2xl md:text-3xl font-display mb-2">Higher Secondary Certificate</h3>
              <p className="text-white/40 mb-8 font-light italic">Chattogram Collegiate College</p>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                Currently pursuing HSC, building on a strong academic foundation while developing hands-on skills in technology and creative problem-solving.
              </p>
              <div className="inline-flex px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-bold text-blue-400 tracking-widest uppercase">
                In Progress
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-12 bg-white/2 backdrop-blur-xl border border-white/5 rounded-sm hover:border-white/10 transition-all duration-500"
            >
              <div className="text-xs font-mono text-white/30 mb-6">2024 COMPLETED</div>
              <h3 className="text-2xl md:text-3xl font-display mb-2">Secondary School Certificate</h3>
              <p className="text-white/40 mb-8 font-light italic">Housing and Settlement Public School</p>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                Completed SSC with a perfect academic record, demonstrating consistent excellence in science, mathematics, and computer studies.
              </p>
              <div className="inline-flex px-4 py-2 bg-white/10 border border-white/10 rounded-full text-[10px] font-bold text-white tracking-widest uppercase">
                 GPA 5.00 / 5.00
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-blue-500 mb-6">Selected Works</div>
              <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight">Creations</h2>
            </div>
            <p className="max-w-xs text-xs text-white/30 uppercase tracking-[0.3em] font-semibold">A glimpse into my technical exploration and utility tools.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden bg-white/2 border border-white/5 p-12 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-all" />
                <div className="text-4xl mb-12">{project.icon}</div>
                <h3 className="text-3xl font-display mb-6 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-white/40 text-lg font-light leading-relaxed mb-10">{project.desc}</p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[9px] uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full text-white/40 font-bold group-hover:border-white/20 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all"
                >
                  Explore Internal <ExternalLink size={14} className="text-white/20" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-40 bg-[#0c0c0c] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-blue-500 mb-6">Toolkit</div>
             <h2 className="text-4xl md:text-5xl font-display mb-8">Technical & Creative Versatility</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                title: "Technical", 
                items: ["HTML & CSS", "Python (basic)", "Microsoft Excel", "Microsoft Word", "Google Workspace"],
                icon: <Cpu className="w-5 h-5 text-blue-500" />
              },
              { 
                title: "Design", 
                items: ["Canva", "Adobe Photoshop (basic)", "Windows & macOS"],
                icon: <MousePointer2 className="w-5 h-5 text-blue-500" />
              },
              { 
                title: "Soft Skills", 
                items: ["Problem Solving", "Leadership", "Tutoring", "Typing (50 WPM)"],
                icon: <GraduationCap className="w-5 h-5 text-blue-500" />
              }
            ].map((col, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-10"
              >
                <div className="flex items-center gap-4">
                  {col.icon}
                  <h3 className="text-lg font-display uppercase tracking-[0.2em]">{col.title}</h3>
                </div>
                <div className="space-y-4">
                  {col.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-4 group cursor-default">
                      <div className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-blue-500 group-hover:scale-150 transition-all" />
                      <span className="text-sm font-light text-white/50 group-hover:text-white transition-colors capitalize tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
             <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-blue-500 mb-6">Timeline</div>
             <h2 className="text-5xl font-display">The Journey</h2>
          </div>

          <div className="space-y-24 relative">
             <div className="absolute left-[11px] top-6 bottom-6 w-[1px] bg-white/5" />
             {[
               { 
                 year: "2026", 
                 title: "Campus Ambassador", 
                 place: "IAOC National Math Olympiad", 
                 desc: "Recognised for leadership and commitment. Actively promoted student participation and represented my college at a national level.",
                 badge: "National Recognition"
               },
               { 
                 year: "Ongoing", 
                 title: "Quiz Organiser", 
                 place: "Inter-school Initiative", 
                 desc: "Coordinated participants and managed logistics on-day. Recipient of Certificate of Participation.",
                 badge: "Leadership Role"
               },
               { 
                 year: "Current", 
                 title: "Computer Club Member", 
                 place: "Chattogram Collegiate College", 
                 desc: "Contributing to a community of students passionate about technology and peer learning.",
                 badge: ""
               },
               { 
                 year: "Ongoing", 
                 title: "Volunteer Tutor", 
                 place: "Peer Initiative", 
                 desc: "Teaching basic computer skills to classmates, helping bridge the digital gap through collaborative learning.",
                 badge: ""
               }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="relative pl-12 group"
               >
                 <div className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full bg-[#0a0a0a] border border-white/20 z-10 flex items-center justify-center transition-all group-hover:border-blue-500">
                    <div className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all" />
                 </div>
                 <div className="text-[10px] font-mono text-blue-500 mb-2 uppercase tracking-widest">{item.year}</div>
                 <h4 className="text-2xl font-display mb-1">{item.title}</h4>
                 <div className="text-xs text-white/30 italic mb-4">{item.place}</div>
                 <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
                 <div className="flex flex-wrap gap-4 items-center">
                   {item.badge && (
                     <div className="inline-flex px-3 py-1 bg-blue-500/10 border border-blue-500/10 text-[9px] font-bold text-blue-400 uppercase tracking-[0.2em]">
                        {item.badge}
                     </div>
                   )}
                   {item.title === "Campus Ambassador" && (
                     <button 
                       onClick={() => setIsModalOpen(true)}
                       className="group flex items-center gap-2 text-[9px] font-bold text-white/40 hover:text-white uppercase tracking-[0.2em] transition-all"
                     >
                       <span className="w-4 h-[1px] bg-white/20 group-hover:w-6 transition-all" />
                        View Certificate
                     </button>
                   )}
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           CONTACT SECTION
           ✏️ Refactored layout with 2x2 compact grid and clear form visibility
      ════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-40 bg-[#070707] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Info & Links in a 2x2 Grid */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-6xl md:text-7xl font-display leading-[0.9]">
                 LET'S BUILD<br />
                 <span className="italic font-serif text-white/70">Perspective</span>.
              </h2>
              <p className="text-white/40 text-base font-light leading-relaxed max-w-md">
                Whether you have an opportunity or just want to discuss digital craft — I'm open for a dialogue.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <a href="mailto:safin.yasir11@gmail.com" className="group block p-6 bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all rounded-sm relative overflow-hidden">
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-blue-500">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[8px] font-bold text-white/20 uppercase tracking-[0.2em] mb-1">Email</div>
                    <div className="text-[11px] font-medium tracking-widest text-white/60 group-hover:text-white transition-colors truncate">safin.yasir11@gmail.com</div>
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a href="#" className="group block p-6 bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all rounded-sm relative overflow-hidden">
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-blue-500">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <div className="text-[8px] font-bold text-white/20 uppercase tracking-[0.2em] mb-1">LinkedIn</div>
                    <div className="text-[11px] font-medium tracking-widest text-white/60 group-hover:text-white transition-colors">Safin Yasar</div>
                  </div>
                </div>
              </a>

              {/* GitHub Card */}
              <a href="#" className="group block p-6 bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all rounded-sm relative overflow-hidden">
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-blue-500">
                    <Github size={16} />
                  </div>
                  <div>
                    <div className="text-[8px] font-bold text-white/20 uppercase tracking-[0.2em] mb-1">GitHub</div>
                    <div className="text-[11px] font-medium tracking-widest text-white/60 group-hover:text-white transition-colors">SafinV7</div>
                  </div>
                </div>
              </a>

              {/* CV Download Card */}
              <a href="/MY_CV.pdf" download className="group block p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-[30px]" />
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                    <FileText size={16} />
                  </div>
                  <div>
                    <div className="text-[8px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-1">Want the full picture?</div>
                    <div className="text-[11px] font-medium tracking-widest text-white/80 group-hover:text-white transition-colors">Download CV / 2026</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-sm relative overflow-hidden h-fit shadow-2xl"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[120px]" />
             
             <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-3">
                   <label className="text-[9px] font-bold text-white/50 uppercase tracking-[0.4em]">Name</label>
                   <input 
                     type="text" 
                     required
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     placeholder="Your Name" 
                     className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-blue-500 focus:bg-white/[0.05] transition-all outline-none placeholder:text-white/20"
                   />
                 </div>
                 <div className="space-y-3">
                   <label className="text-[9px] font-bold text-white/50 uppercase tracking-[0.4em]">Email</label>
                   <input 
                     type="email" 
                     required
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     placeholder="Email Address" 
                     className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-blue-500 focus:bg-white/[0.05] transition-all outline-none placeholder:text-white/20"
                   />
                 </div>
               </div>
               
               <div className="space-y-3">
                 <label className="text-[9px] font-bold text-white/50 uppercase tracking-[0.4em]">Subject</label>
                 <input 
                   type="text" 
                   required
                   value={formData.subject}
                   onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                   placeholder="What is this about?" 
                   className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-blue-500 focus:bg-white/[0.05] transition-all outline-none placeholder:text-white/20"
                 />
               </div>

               <div className="space-y-3">
                 <label className="text-[9px] font-bold text-white/50 uppercase tracking-[0.4em]">Message</label>
                 <textarea 
                   rows={4}
                   required
                   value={formData.message}
                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                   placeholder="Your Message..." 
                   className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-blue-500 focus:bg-white/[0.05] transition-all outline-none resize-none placeholder:text-white/20"
                 />
               </div>

               <button 
                 type="submit"
                 disabled={isSubmitting}
                 className="w-full px-12 py-5 bg-white text-black font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-neutral-200 disabled:bg-neutral-500 transition-all flex items-center justify-center gap-3 group rounded-sm shadow-xl shadow-black/40"
               >
                 {isSubmitting ? 'Opening Mail...' : 'Send Message'} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
             </form>
          </motion.div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-white/5 bg-[#0a0a0a] px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold">
          <div>© 2026 Safin Yasar Portfolio • Built With Precision and Soul</div>
          <div className="flex gap-12">
            <a href="#about" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#projects" className="hover:text-white transition-colors">Creations</a>
            <a href="#journey" className="hover:text-white transition-colors">Timeline</a>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════════════════════
           CERTIFICATE LIGHTBOX
           ✏️ Modal logic for viewing certificates
      ════════════════════════════════════════════════════════ */}
      {isModalOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full bg-neutral-900 border border-white/10 rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-black/60 text-white rounded-full hover:bg-white hover:text-black transition-all"
            >
               ✕
            </button>
            <div className="w-full bg-neutral-950 flex flex-col items-center justify-center relative min-h-[60vh]">
               <img 
                 src="/campus-ambassador-cert.jpg" 
                 alt="IAOC Certificate" 
                 className="w-full h-auto object-contain z-10"
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                   if (placeholder) placeholder.classList.remove('hidden');
                 }}
               />
               <div className="hidden flex-col items-center justify-center p-20 space-y-4 text-center">
                  <Award className="w-12 h-12 text-blue-500 mx-auto opacity-40 mb-4" />
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-2">IAOC National Math Olympiad 2026</p>
                  <p className="text-blue-500/40 text-[8px] tracking-[0.5em] uppercase font-bold">Official Certificate</p>
               </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
