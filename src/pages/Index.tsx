
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
  Play
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
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"]
    },
    {
      title: "Business Analysts",
      experience: "4–7 Yrs",
      description: "Translate business goals into clear tech specs. Strong in documentation and stakeholder alignment.",
      skills: ["Requirements Gathering", "Process Mapping", "Stakeholder Management", "Documentation"]
    },
    {
      title: "Mobile Developers",
      experience: "3–6 Yrs",
      description: "Build stable Android, iOS, and Flutter apps. Experienced in scalable mobile delivery across domains.",
      skills: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      title: "Front-End Developers",
      experience: "3–5 Yrs",
      description: "Experts in React, Vue, Angular. Deliver pixel-perfect, responsive builds with fast performance.",
      skills: ["React", "Vue.js", "Angular", "TypeScript"]
    },
    {
      title: "Back-End Developers",
      experience: "4–7 Yrs",
      description: "Skilled in Node.js, Laravel, Python. Strong in APIs, secure architecture, and database logic.",
      skills: ["Node.js", "Python", "Laravel", "Database Design"]
    },
    {
      title: "Full-Stack Developers",
      experience: "4–8 Yrs",
      description: "Handle front-end to deployment. Ideal for lean teams that need fast, cross-functional builds.",
      skills: ["Full-Stack", "DevOps", "Cloud", "Microservices"]
    },
    {
      title: "QA Engineers",
      experience: "3–6 Yrs",
      description: "Manual and automation testers. Ensure quality, speed, and reliability across platforms.",
      skills: ["Test Automation", "Manual Testing", "CI/CD", "Performance Testing"]
    },
    {
      title: "Project Managers",
      experience: "5–8 Yrs",
      description: "Agile leads with sprint, resource, and delivery experience. Proficient in Jira and team coordination.",
      skills: ["Agile", "Scrum", "Jira", "Team Leadership"]
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
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isNavVisible ? 'translate-y-0' : '-translate-y-full'
        } bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="text-2xl font-black text-gray-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
          >
            Kombee
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</a>
            <a href="#roles" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Talent</a>
            <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              className="p-2"
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
              className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
            >
              <div className="px-6 py-4 space-y-4">
                <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</a>
                <a href="#roles" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Talent</a>
                <a href="#testimonials" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Reviews</a>
                <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-purple-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Scale Your Team with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Kombee's
            </span>{' '}
            Vetted Experts
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Deploy high-performing developers, analysts, designers, testers, and PMs — mid to senior-level talent, ready to plug into your workflow from day one with Kombee.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Challenges Section */}
      <section id="services" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              The Challenges We Solve
            </h2>
            <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">
              Flexible Tech Hiring. Delivery Pods. Plug-and-Play Talent.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                problem: "Slow hiring processes",
                solution: "Onboard fully vetted experts in 5–7 business days."
              },
              {
                icon: <Zap className="h-8 w-8" />,
                problem: "Rising costs",
                solution: "Flexible, transparent engagement models that lower fixed overheads."
              },
              {
                icon: <Users className="h-8 w-8" />,
                problem: "Limited in-house bandwidth",
                solution: "Augment your team without disrupting your internal operations."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                problem: "Poor fit or domain mismatch",
                solution: "All professionals are screened for domain alignment and delivery mindset."
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                problem: "Time zone or communication gaps",
                solution: "Smooth collaboration with overlapping work hours and responsive communication built-in."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.problem}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
      <section id="roles" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Top-Tier Tech Talent Available On Demand
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Roles You Can Hire Through Kombee
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white dark:bg-black border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                        {role.experience}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
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
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">
              Why Companies Choose Kombee
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                icon: <CheckCircle className="h-8 w-8" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-purple-600 dark:text-purple-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">
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
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-lg border-2">
                  <CardContent className="p-12">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-8 leading-relaxed font-medium">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-purple-600 dark:text-purple-400">
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
                size="sm"
                onClick={prevTestimonial}
                className="p-3"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="p-3"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                Add the Right People to Your Team Without the Hiring Delay
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Kombee simplifies team expansion with reliable, flexible staffing. Focus on building — we'll handle the resourcing.
              </p>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>5-7 day onboarding process</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Pre-vetted senior professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Flexible engagement models</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Ongoing support & management</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Get Started Today
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="border-2 focus:border-purple-500"
                        required
                      />
                      <Input
                        placeholder="Last Name"
                        className="border-2 focus:border-purple-500"
                        required
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Work Email"
                      className="border-2 focus:border-purple-500"
                      required
                    />
                    <Input
                      placeholder="Company Name"
                      className="border-2 focus:border-purple-500"
                      required
                    />
                    <Textarea
                      placeholder="Tell us about your project and team needs..."
                      className="border-2 focus:border-purple-500 min-h-[120px]"
                      required
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg font-semibold group"
                    >
                      Consult Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-black mb-4">Kombee</h3>
              <p className="text-gray-400">
                Connecting teams with vetted tech professionals worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Developers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Designers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analysts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Project Managers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@kombee.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kombee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
