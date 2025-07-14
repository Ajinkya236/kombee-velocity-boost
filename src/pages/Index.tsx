
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
  Lightbulb
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.8]);

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
    return () => window.addEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

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
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isNavVisible ? 'translate-y-0' : '-translate-y-full'
        } warm-glass border-b border-amber-200/30 dark:border-amber-800/30`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="text-2xl font-black text-amber-900 dark:text-amber-100"
            whileHover={{ scale: 1.05 }}
          >
            Kombee
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#roles" className="text-amber-800 dark:text-amber-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">Talent</a>
            <a href="#testimonials" className="text-amber-800 dark:text-amber-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">Reviews</a>
            <a href="#contact" className="text-amber-800 dark:text-amber-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-amber-200/50 dark:hover:bg-amber-800/50"
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
              className="md:hidden warm-glass border-t border-amber-200/30 dark:border-amber-800/30"
            >
              <div className="px-6 py-4 space-y-4">
                <a href="#roles" className="block text-amber-800 dark:text-amber-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">Talent</a>
                <a href="#testimonials" className="block text-amber-800 dark:text-amber-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">Reviews</a>
                <a href="#contact" className="block text-amber-800 dark:text-amber-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-background">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <motion.h1
            className="hero-text text-amber-900 dark:text-amber-100 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Scale Your Team with{' '}
            <span className="text-gradient">
              Kombee's
            </span>{' '}
            Vetted Experts
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-amber-700 dark:text-amber-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Deploy high-performing developers, analysts, designers, testers, and PMs — mid to senior-level talent, ready to plug into your workflow from day one with Kombee.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-xl font-bold group shadow-2xl hover:shadow-3xl transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-12 py-6 text-xl font-bold border-2 border-amber-300 dark:border-amber-700 hover:bg-amber-100 dark:hover:bg-amber-900 group"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-amber-400 dark:border-amber-600 rounded-full flex justify-center">
            <div className="w-1.5 h-4 bg-amber-400 dark:bg-amber-600 rounded-full mt-3"></div>
          </div>
        </motion.div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="section-padding warm-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-amber-900 dark:text-amber-100 mb-8 leading-tight">
              The Challenges We Solve
            </h2>
            <p className="text-2xl text-purple-600 dark:text-purple-400 font-bold">
              Flexible Tech Hiring. Delivery Pods. Plug-and-Play Talent.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-10 w-10" />,
                problem: "Slow hiring processes",
                solution: "Onboard fully vetted experts in 5–7 business days."
              },
              {
                icon: <Zap className="h-10 w-10" />,
                problem: "Rising costs",
                solution: "Flexible, transparent engagement models that lower fixed overheads."
              },
              {
                icon: <Users className="h-10 w-10" />,
                problem: "Limited in-house bandwidth",
                solution: "Augment your team without disrupting your internal operations."
              },
              {
                icon: <Shield className="h-10 w-10" />,
                problem: "Poor fit or domain mismatch",
                solution: "All professionals are screened for domain alignment and delivery mindset."
              },
              {
                icon: <CheckCircle className="h-10 w-10" />,
                problem: "Time zone or communication gaps",
                solution: "Smooth collaboration with overlapping work hours and responsive communication built-in."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group hover-lift"
              >
                <Card className="h-full elegant-card shadow-xl">
                  <CardContent className="p-10">
                    <div className="text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-125 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black text-amber-900 dark:text-amber-100 mb-4">
                      {item.problem}
                    </h3>
                    <p className="text-amber-700 dark:text-amber-300 leading-relaxed text-lg">
                      {item.solution}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="section-padding bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-amber-900 dark:text-amber-100 mb-8 leading-tight">
              Top-Tier Tech Talent Available On Demand
            </h2>
            <p className="text-2xl text-amber-700 dark:text-amber-300 font-medium">
              Roles You Can Hire Through Kombee
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group hover-lift"
              >
                <Card className="h-full elegant-card shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                        {role.icon}
                      </div>
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 font-bold">
                        {role.experience}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-black text-amber-900 dark:text-amber-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-amber-700 dark:text-amber-300 mb-6 text-sm leading-relaxed">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs border-amber-300 dark:border-amber-700">
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
      <section className="section-padding warm-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-amber-900 dark:text-amber-100 mb-8 leading-tight">
              Why Companies Choose Kombee
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Fast onboarding",
                description: "Talent available within 5–7 business days",
                icon: <Zap className="h-10 w-10" />
              },
              {
                title: "Flexible contracts",
                description: "Scale up or down as needed",
                icon: <Users className="h-10 w-10" />
              },
              {
                title: "Rigorous screening",
                description: "Technical, communication, and cultural fit",
                icon: <Shield className="h-10 w-10" />
              },
              {
                title: "Continuous support",
                description: "From sourcing to reporting, we stay involved",
                icon: <CheckCircle className="h-10 w-10" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 group-hover:scale-125 transition-transform duration-500 shadow-lg">
                  <div className="text-purple-600 dark:text-purple-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-amber-900 dark:text-amber-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-amber-700 dark:text-amber-300 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-gradient-to-br from-purple-50 to-amber-50 dark:from-purple-950/50 dark:to-amber-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-amber-900 dark:text-amber-100 mb-8 leading-tight">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Card className="elegant-card shadow-2xl">
                  <CardContent className="p-16">
                    <div className="flex justify-center mb-8">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-2xl md:text-4xl text-amber-900 dark:text-amber-100 mb-10 leading-relaxed font-medium italic">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div>
                      <p className="text-2xl font-black text-amber-900 dark:text-amber-100">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-10 space-x-6">
              <Button
                variant="outline"
                size="lg"
                onClick={prevTestimonial}
                className="p-4 border-2 border-amber-300 dark:border-amber-700 hover:bg-amber-100 dark:hover:bg-amber-900"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={nextTestimonial}
                className="p-4 border-2 border-amber-300 dark:border-amber-700 hover:bg-amber-100 dark:hover:bg-amber-900"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding warm-gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-amber-900 dark:text-amber-100 mb-8 leading-tight">
                Add the Right People to Your Team Without the Hiring Delay
              </h2>
              <p className="text-xl text-amber-700 dark:text-amber-300 mb-10 leading-relaxed font-medium">
                Kombee simplifies team expansion with reliable, flexible staffing. Focus on building — we'll handle the resourcing.
              </p>
              <div className="space-y-6 text-amber-700 dark:text-amber-300">
                {[
                  "5-7 day onboarding process",
                  "Pre-vetted senior professionals",
                  "Flexible engagement models",
                  "Ongoing support & management"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
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
              <Card className="elegant-card shadow-2xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-black text-amber-900 dark:text-amber-100 mb-8">
                    Get Started Today
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        placeholder="First Name"
                        className="border-2 border-amber-300 dark:border-amber-700 focus:border-purple-500 h-14 text-lg"
                        required
                      />
                      <Input
                        placeholder="Last Name"
                        className="border-2 border-amber-300 dark:border-amber-700 focus:border-purple-500 h-14 text-lg"
                        required
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Work Email"
                      className="border-2 border-amber-300 dark:border-amber-700 focus:border-purple-500 h-14 text-lg"
                      required
                    />
                    <Input
                      placeholder="Company Name"
                      className="border-2 border-amber-300 dark:border-amber-700 focus:border-purple-500 h-14 text-lg"
                      required
                    />
                    <Textarea
                      placeholder="Tell us about your project and team needs..."
                      className="border-2 border-amber-300 dark:border-amber-700 focus:border-purple-500 min-h-[150px] text-lg"
                      required
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-xl font-bold group shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      Consult Now
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 dark:bg-amber-950 text-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-3xl font-black mb-6">Kombee</h3>
              <p className="text-amber-200 text-lg leading-relaxed">
                Connecting teams with vetted tech professionals worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Services</h4>
              <ul className="space-y-3 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors text-lg">Developers</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Designers</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Analysts</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Project Managers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Company</h4>
              <ul className="space-y-3 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors text-lg">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <ul className="space-y-3 text-amber-200 text-lg">
                <li>hello@kombee.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-200">
            <p className="text-lg">&copy; 2024 Kombee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
