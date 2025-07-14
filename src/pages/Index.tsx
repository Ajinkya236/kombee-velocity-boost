
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Zap,
  Star,
  CheckCircle,
  Play,
  Eye,
  Target,
  Lightbulb,
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeChallengeIndex, setActiveChallengeIndex] = useState(0);
  const [currentRoleSlide, setCurrentRoleSlide] = useState(0);
  const { toast } = useToast();

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);

  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          setIsNavVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setIsNavVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const challenges = [
    {
      problem: "Slow hiring processes?",
      solution: "Onboard fully vetted experts in 5–7 business days.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      problem: "Rising costs?",
      solution: "Flexible, transparent engagement models that lower fixed overheads.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      problem: "Limited in-house bandwidth?",
      solution: "Augment your team without disrupting your internal operations.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      problem: "Poor fit or domain mismatch?",
      solution: "All professionals are screened for domain alignment and delivery mindset.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      problem: "Time zone or communication gaps?",
      solution: "Smooth collaboration with overlapping work hours and responsive communication built-in.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Handle scroll-based challenge highlighting
  useEffect(() => {
    const handleScroll = () => {
      const challengeElements = document.querySelectorAll('[data-challenge-index]');
      let activeIndex = 0;
      
      challengeElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        if (isInView) {
          activeIndex = index;
        }
      });
      
      setActiveChallengeIndex(activeIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      text: "Kombee delivered exactly what we needed - senior developers who integrated seamlessly into our workflow. The 5-day turnaround was incredible.",
      author: "Sarah Chen",
      role: "CTO at TechFlow",
      rating: 5,
      company: "TechFlow",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Their vetted analysts helped us define our product roadmap clearly. The quality of talent and communication exceeded our expectations.",
      author: "Michael Rodriguez",
      role: "Product Director at InnovateLab",
      rating: 5,
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "We scaled our design team 3x in just two weeks with Kombee. The designers understood our brand immediately and delivered outstanding work.",
      author: "Emma Thompson",
      role: "Design Lead at Creative Solutions",
      rating: 5,
      company: "Creative Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const roles = [
    {
      title: "UI/UX Designers",
      experience: "3–6 Yrs",
      description: "Figma-first designers skilled in user flows, wireframes, and clean, conversion-focused UI.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      icon: <Eye className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Business Analysts",
      experience: "4–7 Yrs",
      description: "Translate business goals into clear tech specs. Strong in documentation and stakeholder alignment.",
      skills: ["Requirements Gathering", "Process Mapping", "Stakeholder Management", "Documentation"],
      icon: <Target className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mobile Developers",
      experience: "3–6 Yrs",
      description: "Build stable Android, iOS, and Flutter apps. Experienced in scalable mobile delivery across domains.",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      icon: <Zap className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Front-End Developers",
      experience: "3–5 Yrs",
      description: "Experts in React, Vue, Angular. Deliver pixel-perfect, responsive builds with fast performance.",
      skills: ["React", "Vue.js", "Angular", "TypeScript"],
      icon: <Lightbulb className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Back-End Developers",
      experience: "4–7 Yrs",
      description: "Skilled in Node.js, Laravel, Python. Strong in APIs, secure architecture, and database logic.",
      skills: ["Node.js", "Python", "Laravel", "Database Design"],
      icon: <Shield className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Full-Stack Developers",
      experience: "4–8 Yrs",
      description: "Handle front-end to deployment. Ideal for lean teams that need fast, cross-functional builds.",
      skills: ["Full-Stack", "DevOps", "Cloud", "Microservices"],
      icon: <Users className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "QA Engineers",
      experience: "3–6 Yrs",
      description: "Manual and automation testers. Ensure quality, speed, and reliability across platforms.",
      skills: ["Test Automation", "Manual Testing", "CI/CD", "Performance Testing"],
      icon: <CheckCircle className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Project Managers",
      experience: "5–8 Yrs",
      description: "Agile leads with sprint, resource, and delivery experience. Proficient in Jira and team coordination.",
      skills: ["Agile", "Scrum", "Jira", "Team Leadership"],
      icon: <Clock className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "We'll get back to you within 24 hours to discuss your team needs.",
    });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextRole = () => {
    setCurrentRoleSlide((prev) => (prev + 1) % Math.ceil(roles.length / 4));
  };

  const prevRole = () => {
    setCurrentRoleSlide((prev) => (prev - 1 + Math.ceil(roles.length / 4)) % Math.ceil(roles.length / 4));
  };

  const getRoleSlides = () => {
    const slides = [];
    for (let i = 0; i < roles.length; i += 4) {
      slides.push(roles.slice(i, i + 4));
    }
    return slides;
  };

  return (
    <div className="min-h-screen transition-colors duration-500 dark" style={{ fontFamily: 'Calibre, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: '100' }}>
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ backgroundColor: '#d8cdce' }}
        initial={{ y: 0 }}
        animate={{ y: isNavVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="text-3xl tracking-tight"
            style={{ 
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: '900',
              color: '#24180e'
            }}
            whileHover={{ scale: 1.05 }}
          >
            Kombee
          </motion.div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            opacity: 0.8
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <motion.h1
            className="text-white mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              lineHeight: '0.9',
              letterSpacing: '-0.02em',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: '900'
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Scale Your Team with{' '}
            <span className="text-white" style={{ fontWeight: '900' }}>
              Kombee's
            </span>{' '}
            Vetted Experts
          </motion.h1>
          
          <motion.p
            className="text-white/90 mb-12 max-w-4xl mx-auto"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              lineHeight: '1.4',
              fontFamily: 'Calibre, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: '100'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Deploy high-performing developers, analysts, designers, testers, and PMs — mid to senior-level talent, ready to plug into your workflow from day one with Kombee.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button
              size="lg"
              className="btn-primary text-lg group"
              style={{ fontFamily: 'Calibre, sans-serif', fontWeight: '100' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Now
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-lg group border-white/30 hover:bg-white/10 bg-white/90 hover:text-amber-800"
              style={{ 
                color: '#8B4513',
                fontFamily: 'Calibre, sans-serif',
                fontWeight: '100'
              }}
            >
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-4 bg-white/50 rounded-full mt-3"></div>
          </div>
        </motion.div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="py-32 lg:py-40" style={{ backgroundColor: '#171311' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-32"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 leading-tight tracking-tight" 
                style={{ 
                  fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                  fontFamily: 'Inter, sans-serif', 
                  fontWeight: '900',
                  color: '#d8cdce' 
                }}>
              Flexible Tech Hiring
            </h2>
            <p className="mb-6 leading-tight tracking-tight" 
               style={{ 
                 fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                 fontFamily: 'Inter, sans-serif', 
                 fontWeight: '900',
                 color: '#d8cdce' 
               }}>
              Delivery Pods
            </p>
            <p className="mb-12 leading-tight tracking-tight" 
               style={{ 
                 fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                 fontFamily: 'Inter, sans-serif', 
                 fontWeight: '900',
                 color: '#d8cdce' 
               }}>
              Plug-and-Play Talent
            </p>
            <div className="w-32 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#d8cdce' }}></div>
          </motion.div>

          {/* Challenge Navigation Menu */}
          <motion.div
            className="flex justify-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-2 bg-white/20 rounded-full p-1.5 backdrop-blur-sm">
              {challenges.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeChallengeIndex === index 
                      ? 'scale-125' 
                      : 'hover:bg-white/50'
                  }`}
                  style={{ 
                    backgroundColor: activeChallengeIndex === index ? '#d8cdce' : 'rgba(255,255,255,0.3)'
                  }}
                  onClick={() => {
                    const element = document.querySelector(`[data-challenge-index="${index}"]`);
                    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Challenges Grid */}
          <div className="space-y-32">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                data-challenge-index={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-20%" }}
                className={`grid lg:grid-cols-2 gap-20 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div>
                    <h3 className="mb-6 tracking-tight" 
                        style={{ 
                          fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                          fontFamily: 'Inter, sans-serif', 
                          fontWeight: '900',
                          color: '#d8cdce' 
                        }}>
                      {challenge.problem}
                    </h3>
                    <p className="leading-relaxed tracking-tight" 
                       style={{ 
                         fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                         fontFamily: 'Calibre, sans-serif', 
                         fontWeight: '100',
                         color: '#d8cdce' 
                       }}>
                      {challenge.solution}
                    </p>
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img 
                      src={challenge.image}
                      alt={`Solution for ${challenge.problem}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section with Carousel */}
      <section id="roles" className="section-padding" style={{ backgroundColor: '#d8cdce' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6" 
                style={{ 
                  fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900',
                  color: '#24180e'
                }}>
              Top-Tier Tech Talent Available On Demand
            </h2>
            <p style={{ 
                 fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                 fontFamily: 'Inter, sans-serif',
                 fontWeight: '900',
                 color: '#24180e'
               }}>
              Roles You Can Hire Through Kombee
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentRoleSlide * 100}%)` }}
              >
                {getRoleSlides().map((slideRoles, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {slideRoles.map((role, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 60 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group"
                        >
                          <Card className="card-modern h-full group-hover:shadow-2xl overflow-hidden" style={{ backgroundColor: '#24180e', border: '1px solid #d8cdce' }}>
                            <div className="aspect-video overflow-hidden">
                              <img 
                                src={role.image}
                                alt={role.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-6">
                                <div className="group-hover:scale-110 transition-transform duration-300" style={{ color: '#d8cdce' }}>
                                  {role.icon}
                                </div>
                                <Badge variant="secondary" className="font-semibold" style={{ backgroundColor: '#d8cdce', color: '#24180e' }}>
                                  {role.experience}
                                </Badge>
                              </div>
                              <h3 className="text-lg mb-4 group-hover:text-primary transition-colors" 
                                  style={{ 
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: '900',
                                    color: '#d8cdce'
                                  }}>
                                {role.title}
                              </h3>
                              <p className="mb-6 text-sm leading-relaxed" style={{ 
                                   fontFamily: 'Calibre, sans-serif',
                                   fontWeight: '100',
                                   color: '#d8cdce'
                                 }}>
                                {role.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {role.skills.map((skill, skillIndex) => (
                                  <Badge key={skillIndex} variant="outline" className="text-xs" style={{ borderColor: '#d8cdce', color: '#d8cdce' }}>
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="lg"
                onClick={prevRole}
                className="p-3 rounded-full"
                style={{ borderColor: '#24180e', color: '#24180e', backgroundColor: 'transparent' }}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {getRoleSlides().map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentRoleSlide === index 
                        ? 'scale-125' 
                        : 'hover:opacity-70'
                    }`}
                    style={{ 
                      backgroundColor: currentRoleSlide === index ? '#24180e' : 'rgba(36, 24, 14, 0.3)'
                    }}
                    onClick={() => setCurrentRoleSlide(index)}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="lg"
                onClick={nextRole}
                className="p-3 rounded-full"
                style={{ borderColor: '#24180e', color: '#24180e', backgroundColor: 'transparent' }}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Companies Choose Kombee - Redesigned */}
      <section className="section-padding" style={{ backgroundColor: '#171311' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-stretch"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Left side - Main content */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-8 leading-tight"
                    style={{
                      fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '900',
                      color: '#d8cdce'
                    }}>
                  Why Companies Choose Kombee
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Fast onboarding",
                    description: "Talent available within 5–7 business days",
                    icon: <Clock className="h-8 w-8" />
                  },
                  {
                    title: "Flexible contracts",
                    description: "Scale up or down as needed",
                    icon: <TrendingUp className="h-8 w-8" />
                  },
                  {
                    title: "Rigorous screening",
                    description: "Technical, communication, and cultural fit",
                    icon: <Shield className="h-8 w-8" />
                  },
                  {
                    title: "Continuous support",
                    description: "From sourcing to reporting, we stay involved",
                    icon: <Award className="h-8 w-8" />
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <div style={{ color: '#d8cdce' }}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl leading-tight"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: '900',
                          color: '#d8cdce'
                        }}>
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed"
                       style={{
                         fontFamily: 'Calibre, sans-serif',
                         fontWeight: '100',
                         color: '#d8cdce'
                       }}>
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid md:grid-cols-3 gap-12 mt-20 pt-20 border-t"
            style={{ borderColor: '#d8cdce' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                stat: "15%",
                description: "Profits Gain"
              },
              {
                stat: "120%",
                description: "Productivity Increased"
              },
              {
                stat: "5000+",
                description: "hours saved"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4"
                     style={{
                       fontSize: 'clamp(3rem, 8vw, 4rem)',
                       fontFamily: 'Inter, sans-serif',
                       fontWeight: '900',
                       color: '#d8cdce'
                     }}>
                  {item.stat}
                </div>
                <p style={{
                     fontFamily: 'Calibre, sans-serif',
                     fontWeight: '100',
                     color: '#d8cdce'
                   }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Redesigned based on attached image */}
      <section id="testimonials" className="section-padding" style={{ backgroundColor: '#d8cdce' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900',
                  color: '#171311'
                }}>
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="overflow-hidden h-full" style={{ backgroundColor: '#171311', border: 'none' }}>
                    {/* Background Image */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Author Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#d8cdce' }}>
                            <span className="text-xs font-bold" style={{ color: '#171311' }}>
                              {testimonial.company.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-bold text-white text-sm"
                               style={{ fontFamily: 'Inter, sans-serif', fontWeight: '900' }}>
                              {testimonial.author}
                            </p>
                            <p className="text-white/80 text-xs"
                               style={{ fontFamily: 'Calibre, sans-serif', fontWeight: '100' }}>
                              {testimonial.company.toUpperCase()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      {/* Star Rating */}
                      <div className="flex justify-start mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      
                      {/* Testimonial Text */}
                      <blockquote className="leading-relaxed"
                                 style={{
                                   fontFamily: 'Calibre, sans-serif',
                                   fontWeight: '100',
                                   color: '#171311',
                                   fontSize: '0.9rem'
                                 }}>
                        "{testimonial.text}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-12 space-x-4">
              <Button
                variant="outline"
                size="lg"
                onClick={prevTestimonial}
                className="p-3 rounded-full"
                style={{ borderColor: '#171311', color: '#171311', backgroundColor: 'transparent' }}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={nextTestimonial}
                className="p-3 rounded-full"
                style={{ borderColor: '#171311', color: '#171311', backgroundColor: 'transparent' }}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding" style={{ backgroundColor: '#d8cdce' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8"
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '900',
                    color: '#24180e'
                  }}>
                Add the Right People to Your Team Without the Hiring Delay
              </h2>
              <p className="mb-10 text-lg"
                 style={{
                   fontFamily: 'Calibre, sans-serif',
                   fontWeight: '100',
                   color: '#24180e'
                 }}>
                Kombee simplifies team expansion with reliable, flexible staffing. Focus on building — we'll handle the resourcing.
              </p>
              <div className="space-y-4">
                {[
                  "5-7 day onboarding process",
                  "Pre-vetted senior professionals",
                  "Flexible engagement models",
                  "Ongoing support & management"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium"
                          style={{
                            fontFamily: 'Calibre, sans-serif',
                            fontWeight: '100',
                            color: '#24180e'
                          }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Card className="card-feature" style={{ backgroundColor: '#24180e', border: '1px solid #d8cdce' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-8"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '900',
                        color: '#d8cdce'
                      }}>
                    Get Started Today
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="h-12"
                        style={{ 
                          borderColor: '#d8cdce', 
                          backgroundColor: 'transparent',
                          color: '#d8cdce',
                          fontFamily: 'Calibre, sans-serif',
                          fontWeight: '100'
                        }}
                        required
                      />
                      <Input
                        placeholder="Last Name"
                        className="h-12"
                        style={{ 
                          borderColor: '#d8cdce', 
                          backgroundColor: 'transparent',
                          color: '#d8cdce',
                          fontFamily: 'Calibre, sans-serif',
                          fontWeight: '100'
                        }}
                        required
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Work Email"
                      className="h-12"
                      style={{ 
                        borderColor: '#d8cdce', 
                        backgroundColor: 'transparent',
                        color: '#d8cdce',
                        fontFamily: 'Calibre, sans-serif',
                        fontWeight: '100'
                      }}
                      required
                    />
                    <Input
                      placeholder="Company Name"
                      className="h-12"
                      style={{ 
                        borderColor: '#d8cdce', 
                        backgroundColor: 'transparent',
                        color: '#d8cdce',
                        fontFamily: 'Calibre, sans-serif',
                        fontWeight: '100'
                      }}
                      required
                    />
                    <Textarea
                      placeholder="Tell us about your project and team needs..."
                      className="min-h-[120px]"
                      style={{ 
                        borderColor: '#d8cdce', 
                        backgroundColor: 'transparent',
                        color: '#d8cdce',
                        fontFamily: 'Calibre, sans-serif',
                        fontWeight: '100'
                      }}
                      required
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg group"
                      style={{ 
                        backgroundColor: '#d8cdce', 
                        color: '#24180e',
                        fontFamily: 'Calibre, sans-serif',
                        fontWeight: '100'
                      }}
                    >
                      Consult Now
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ backgroundColor: '#171311', color: '#d8cdce' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl mb-6"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '900'
                  }}>
                Kombee
              </h3>
              <p className="leading-relaxed"
                 style={{
                   fontFamily: 'Calibre, sans-serif',
                   fontWeight: '100'
                 }}>
                Connecting teams with vetted tech professionals worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '900'
                  }}>
                Services
              </h4>
              <ul className="space-y-3"
                  style={{
                    fontFamily: 'Calibre, sans-serif',
                    fontWeight: '100'
                  }}>
                <li><a href="#" className="hover:opacity-80 transition-opacity">Developers</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">Designers</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">Analysts</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">Project Managers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '900'
                  }}>
                Company
              </h4>
              <ul className="space-y-3"
                  style={{
                    fontFamily: 'Calibre, sans-serif',
                    fontWeight: '100'
                  }}>
                <li><a href="#" className="hover:opacity-80 transition-opacity">About</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">Careers</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">Contact</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '900'
                  }}>
                Contact
              </h4>
              <ul className="space-y-3"
                  style={{
                    fontFamily: 'Calibre, sans-serif',
                    fontWeight: '100'
                  }}>
                <li>hello@kombee.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center"
               style={{ 
                 borderColor: '#d8cdce',
                 fontFamily: 'Calibre, sans-serif',
                 fontWeight: '100'
               }}>
            <p>&copy; 2024 Kombee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
