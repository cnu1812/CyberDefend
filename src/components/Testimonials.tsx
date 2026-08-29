import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Quote, ExternalLink, ArrowRight, Building2, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  package: string;
  image: string;
  feedback: string;
  rating: number;
  linkedin?: string;
  verified: boolean;
};

const stats = [
  { label: "Top Package Secured", value: "₹24 LPA" },
  { label: "Average Salary Hike", value: "+180%" },
  { label: "Graduates Placed", value: "1,200+" },
  { label: "Hiring Partners", value: "85+ MNCs" },
];

const testimonials: Testimonial[] = [
  {
    name: "Abhijeet Singh",
    role: "Senior Security Specialist",
    company: "HCL Technologies",
    package: "₹20+ LPA",
    image: "https://github.com/user-attachments/assets/12be74e0-e94e-4b97-81a6-d17a754d2417",
    feedback:
      "After working in Europe in generic IT, I returned to India without a job. Enrolling in CyberDefend under Manoj Kumar Sir's guidance transformed my trajectory. With practical live labs, I cracked HCL with a ₹20+ LPA package!",
    rating: 5,
    verified: true,
  },
  {
    name: "Banoth Meenakshi",
    role: "SOC Analyst L2",
    company: "Optiv Security",
    package: "₹14 LPA",
    image: "https://github.com/user-attachments/assets/52b37788-d27b-44c4-a2c9-f677bc035b4a",
    feedback:
      "The CyberDefend team helped me kickstart my journey into Security Operations Centers (SOC). Manoj Sir's deep incident triage methodology gave me the exact confidence needed to crack Optiv's rigorous technical rounds.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/meenakshi-banoth-2a7419351/",
    verified: true,
  },
  {
    name: "Krishna Vamshi",
    role: "Incident Response Engineer",
    company: "Tata Consultancy Services (TCS)",
    package: "₹12 LPA",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    feedback:
      "I took training from other academies before, but it lacked live offensive/defensive scenarios. Within 4 weeks at CyberDefend, the hands-on SIEM simulations helped me land an Incident Response role at TCS.",
    rating: 5,
    verified: true,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden border-t border-cyan-500/10 cyber-grid">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[350px] bg-cyan-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* STATS OUTCOME BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#091122]/90 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-xl shadow-lg"
            >
              <div className="text-3xl sm:text-4xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyberCyan mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-mono text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent font-mono text-xs font-bold">
            <ShieldCheck size={14} />
            <span>PROVEN CAREER TRANSFORMATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Loved by Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyberCyan">1,200+ Students</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Real stories from students who transitioned from college freshers and generic IT roles into high-paying cybersecurity careers.
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-[#091122]/90 border border-white/10 hover:border-cyan-500/40 p-8 rounded-2xl backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* User & Company Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent/60 shadow-md"
                    />
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {t.name}
                      </h3>
                      <p className="text-xs font-mono text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>

                {/* Company Badge & Package */}
                <div className="flex items-center justify-between bg-[#050811] px-3.5 py-2 rounded-xl border border-white/5 text-xs font-mono">
                  <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <Building2 size={13} /> {t.company}
                  </span>
                  <span className="text-accent font-bold">{t.package}</span>
                </div>

                {/* Rating Stars */}
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Feedback Quote */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                  "{t.feedback}"
                </p>
              </div>

              {/* Verified Pill & LinkedIn */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-accent flex items-center gap-1.5 font-bold">
                  <ShieldCheck size={14} /> Verified Graduate
                </span>
                {t.linkedin && (
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#091122] via-[#0D182E] to-[#091122] border border-cyan-500/30 text-center space-y-6 shadow-[0_0_50px_rgba(0,229,255,0.15)]"
        >
          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Build Your Cybersecurity Legacy?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Take the leap today. Join upcoming live batches and get trained by industry SOC leads.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/courses"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-accent to-cyberCyan text-black font-extrabold text-sm rounded-xl shadow-[0_0_25px_rgba(0,255,159,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <span>Explore All Courses</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/blogs"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-gray-200 hover:text-white bg-white/5 border border-white/10 hover:border-cyan-400 transition-all"
            >
              <span>Read Threat Intel Blogs</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
