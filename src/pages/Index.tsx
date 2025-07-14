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
  Moon, 
  Sun, 
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
  const [isDark, setIsDark] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeChallengeIndex, setActiveChallengeIndex] = useState(0);
  const { toast } = useToast();

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsNavVisible(false);
        } else {
          setIsNavVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const challenges = [
    {
      problem: "Slow hiring processes?",
      solution: "Onboard fully vetted experts in 5–7 business days.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      problem: "Rising costs?",
      solution: "Flexible, transparent engagement models that lower fixed overheads.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      problem: "Limited in-house bandwidth?",
      solution: "Augment your team without disrupting your internal operations.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      problem: "Poor fit or domain mismatch?",
      solution: "All professionals are screened for domain alignment and delivery mindset.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      problem: "Time zone or communication gaps?",
      solution: "Smooth collaboration with overlapping work hours and responsive communication built-in.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      rating: 5
    },
    {
      text: "Their vetted analysts helped us define our product roadmap clearly. The quality of talent and communication exceeded our expectations.",
      author: "Michael Rodriguez",
      role: "Product Director at InnovateLab",
      rating: 5
    },
    {
      text: "We scaled our design team 3x in just two weeks with Kombee. The designers understood our brand immediately and delivered outstanding work.",
      author: "Emma Thompson",
      role: "Design Lead at Creative Solutions",
      rating: 5
    }
  ];

  const roles = [
    {
      title: "UI/UX Designers",
      experience: "3–6 Yrs",
      description: "Figma-first designers skilled in user flows, wireframes, and clean, conversion-focused UI.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: "Business Analysts",
      experience: "4–7 Yrs",
      description: "Translate business goals into clear tech specs. Strong in documentation and stakeholder alignment.",
      skills: ["Requirements Gathering", "Process Mapping", "Stakeholder Management", "Documentation"],
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Mobile Developers",
      experience: "3–6 Yrs",
      description: "Build stable Android, iOS, and Flutter apps. Experienced in scalable mobile delivery across domains.",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Front-End Developers",
      experience: "3–5 Yrs",
      description: "Experts in React, Vue, Angular. Deliver pixel-perfect, responsive builds with fast performance.",
      skills: ["React", "Vue.js", "Angular", "TypeScript"],
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Back-End Developers",
      experience: "4–7 Yrs",
      description: "Skilled in Node.js, Laravel, Python. Strong in APIs, secure architecture, and database logic.",
      skills: ["Node.js", "Python", "Laravel", "Database Design"],
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Full-Stack Developers",
      experience: "4–8 Yrs",
      description: "Handle front-end to deployment. Ideal for lean teams that need fast, cross-functional builds.",
      skills: ["Full-Stack", "DevOps", "Cloud", "Microservices"],
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "QA Engineers",
      experience: "3–6 Yrs",
      description: "Manual and automation testers. Ensure quality, speed, and reliability across platforms.",
      skills: ["Test Automation", "Manual Testing", "CI/CD", "Performance Testing"],
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Project Managers",
      experience: "5–8 Yrs",
      description: "Agile leads with sprint, resource, and delivery experience. Proficient in Jira and team coordination.",
      skills: ["Agile", "Scrum", "Jira", "Team Leadership"],
      icon: <Clock className="h-6 w-6" />
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

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'dark' : ''}`}>
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isNavVisible ? 'translate-y-0' : '-translate-y-full'
        } nav-glass`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="text-2xl font-black text-primary"
            whileHover={{ scale: 1.05 }}
          >
            Kombee
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#roles" className="text-foreground/80 hover:text-primary transition-colors font-medium">Talent</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors font-medium">Reviews</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-muted rounded-full"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden nav-glass border-t border-border/30"
            >
              <div className="px-6 py-4 space-y-4">
                <a href="#roles" className="block text-foreground/80 hover:text-primary transition-colors font-medium">Talent</a>
                <a href="#testimonials" className="block text-foreground/80 hover:text-primary transition-colors font-medium">Reviews</a>
                <a href="#contact" className="block text-foreground/80 hover:text-primary transition-colors font-medium">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
            className="text-display mb-8 text-white"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Scale Your Team with{' '}
            <span className="text-white font-black">
              Kombee's
            </span>{' '}
            Vetted Experts
          </motion.h1>
          
          <motion.p
            className="text-subheadline mb-12 max-w-4xl mx-auto text-white/90"
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
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Now
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-lg group border-white/30 text-amber-900 hover:bg-white/10 bg-white/90 hover:text-amber-800 font-semibold"
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
      <section id="challenges" className="py-32 lg:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-32"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-black text-foreground mb-8 leading-tight tracking-tight">
              Flexible Tech Hiring.
            </h2>
            <p className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight tracking-tight">
              Delivery Pods.
            </p>
            <p className="text-4xl md:text-5xl font-black text-foreground mb-12 leading-tight tracking-tight">
              Plug-and-Play Talent.
            </p>
            <div className="w-32 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Challenge Navigation Menu */}
          <motion.div
            className="flex justify-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-2 bg-muted/30 rounded-full p-1.5 backdrop-blur-sm">
              {challenges.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeChallengeIndex === index 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
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
                    <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {challenge.problem}
                    </h3>
                    <p className="text-2xl md:text-3xl font-black text-foreground leading-relaxed tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {challenge.solution}
                    </p>
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
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

      {/* Roles Section */}
      <section id="roles" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-headline mb-6">
              Top-Tier Tech Talent Available On Demand
            </h2>
            <p className="text-subheadline">
              Roles You Can Hire Through Kombee
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="card-modern h-full group-hover:shadow-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {role.icon}
                      </div>
                      <Badge variant="secondary" className="bg-muted text-muted-foreground font-semibold">
                        {role.experience}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs border-border/50">
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
      </section>

      {/* Why Choose Us */}
      <section className="section-padding gradient-warm dark:gradient-warm-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-headline mb-6">
              Why Companies Choose Kombee
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Fast onboarding",
                description: "Talent available within 5–7 business days",
                icon: <Zap className="h-8 w-8" />
              },
              {
                title: "Flexible contracts",
                description: "Scale up or down as needed",
                icon: <Users className="h-8 w-8" />
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
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-headline mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Card className="card-feature">
                  <CardContent className="p-12">
                    <div className="flex justify-center mb-8">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-body-large text-foreground mb-8 leading-relaxed italic">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div>
                      <p className="text-lg font-bold text-foreground">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-muted-foreground font-medium">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="lg"
                onClick={prevTestimonial}
                className="p-3 border-border hover:bg-muted rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={nextTestimonial}
                className="p-3 border-border hover:bg-muted rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding gradient-warm dark:gradient-warm-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-headline mb-8">
                Add the Right People to Your Team Without the Hiring Delay
              </h2>
              <p className="text-body-large text-muted-foreground mb-10">
                Kombee simplifies team expansion with reliable, flexible staffing. Focus on building — we'll handle the resourcing.
              </p>
              <div className="space-y-4 text-muted-foreground">
                {[
                  "5-7 day onboarding process",
                  "Pre-vetted senior professionals",
                  "Flexible engagement models",
                  "Ongoing support & management"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
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
              <Card className="card-feature">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-8">
                    Get Started Today
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="border-border focus:border-primary h-12"
                        required
                      />
                      <Input
                        placeholder="Last Name"
                        className="border-border focus:border-primary h-12"
                        required
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Work Email"
                      className="border-border focus:border-primary h-12"
                      required
                    />
                    <Input
                      placeholder="Company Name"
                      className="border-border focus:border-primary h-12"
                      required
                    />
                    <Textarea
                      placeholder="Tell us about your project and team needs..."
                      className="border-border focus:border-primary min-h-[120px]"
                      required
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="btn-primary w-full text-lg group"
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
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-black mb-6">Kombee</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Connecting teams with vetted tech professionals worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Developers</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Designers</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Analysts</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Project Managers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>hello@kombee.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 Kombee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
