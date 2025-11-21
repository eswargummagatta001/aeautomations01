import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, Menu, X, CheckCircle, Zap, Target, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';

const AEAutomations = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contact = {
    phone: '+91 93915 36082',
    phoneLink: 'tel:+919391536082',
    email: 'steeveeswar@gmail.com',
    emailLink: 'mailto:steeveeswar@gmail.com',
    whatsapp: 'https://wa.me/919391536082'
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: 'success', message: '🎉 Thank you! We\'ll contact you within 24 hours.' });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-gray-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-violet-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-violet-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                AE Automations
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'benefits', 'process', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${activeSection === section ? 'text-violet-400' : 'text-gray-300 hover:text-violet-300'}`}
                >
                  {section}
                </button>
              ))}
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-violet-400">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-violet-500/20">
            <div className="px-4 py-4 space-y-3">
              {['home', 'services', 'benefits', 'process', 'testimonials', 'contact'].map((section) => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left capitalize py-2 text-gray-300 hover:text-violet-400 transition-colors">
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <a href={contact.phoneLink} className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-full shadow-lg hover:shadow-violet-500/50 hover:scale-110 transition-all duration-300" title="Call Now">
          <Phone className="w-6 h-6 text-white" />
        </a>
        <a href={contact.emailLink} className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-full shadow-lg hover:shadow-violet-500/50 hover:scale-110 transition-all duration-300" title="Email Us">
          <Mail className="w-6 h-6 text-white" />
        </a>
        <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-full shadow-lg hover:shadow-violet-500/50 hover:scale-110 transition-all duration-300" title="WhatsApp">
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent leading-tight">
            Automate Your Business,<br />Scale Your Success
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            AI-powered workflow automation that saves 20+ hours per week. Let technology handle the repetitive work while you focus on growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300">
              Get Free Automation Audit
            </button>
            <a href={contact.phoneLink} className="px-8 py-4 border-2 border-violet-400 text-violet-400 font-bold rounded-lg hover:bg-violet-400/10 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 flex items-center space-x-2">
              <Phone className="w-5 h-5" /><span>Book a Call</span>
            </a>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center text-sm text-gray-400">
            <a href={contact.phoneLink} className="hover:text-violet-400 transition-colors">📞 {contact.phone}</a>
            <span className="hidden sm:inline">|</span>
            <a href={contact.emailLink} className="hover:text-violet-400 transition-colors">✉️ {contact.email}</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-900/50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-violet-300 to-fuchsia-500 bg-clip-text text-transparent">Our Automation Services</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">From lead capture to customer onboarding, we automate the workflows that matter most</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Lead Automation', description: 'Capture, qualify, and nurture leads automatically. Never miss an opportunity.' },
              { icon: TrendingUp, title: 'CRM Integration', description: 'Connect all your tools. Sync data seamlessly across platforms.' },
              { icon: Users, title: 'Customer Onboarding', description: 'Automated welcome sequences, document collection, and follow-ups.' },
              { icon: Mail, title: 'Email Marketing', description: 'Trigger-based campaigns that convert. Right message, right time.' },
              { icon: Clock, title: 'Task Automation', description: 'Eliminate repetitive data entry, approvals, and administrative work.' },
              { icon: Zap, title: 'Custom Workflows', description: 'Bespoke automation solutions tailored to your unique processes.' }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-lg border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20">
                <service.icon className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-violet-300">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-violet-300 to-fuchsia-500 bg-clip-text text-transparent">Why Choose AE Automations?</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Real results for growing businesses</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['⚡ Save 20+ hours per week', '💰 Reduce operational costs by 40%', '🎯 99.9% accuracy in data processing', '📈 3x faster response times', '🔄 Zero manual data entry errors', '🚀 Scale without hiring more staff'].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-lg border border-violet-500/10 hover:border-violet-500/30 transition-all">
                <CheckCircle className="w-6 h-6 text-violet-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
              <span>Start Automating Today</span><ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-gray-900/50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-violet-300 to-fuchsia-500 bg-clip-text text-transparent">How It Works</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">From audit to automation in 4 simple steps</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Free Audit', description: 'We analyze your current workflows and identify automation opportunities' },
              { step: '02', title: 'Strategy Session', description: 'Custom automation roadmap tailored to your business goals' },
              { step: '03', title: 'Build & Deploy', description: 'We create and implement your automation solutions' },
              { step: '04', title: 'Support & Scale', description: 'Ongoing optimization and support as your business grows' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-violet-400/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3 text-violet-300">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
                {index < 3 && <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-violet-400 to-transparent"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-violet-300 to-fuchsia-500 bg-clip-text text-transparent">What Our Clients Say</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Real stories from businesses we've helped automate and scale</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar', company: 'TechStart Solutions', role: 'CEO', image: '👨‍💼', testimonial: 'AE Automations transformed our lead management process. We now respond to inquiries 10x faster and our conversion rate doubled in just 3 months.' },
              { name: 'Priya Sharma', company: 'Digital Marketing Pro', role: 'Operations Manager', image: '👩‍💼', testimonial: 'The automation workflows they built saved our team 25 hours weekly. We can finally focus on strategy instead of data entry.' },
              { name: 'Amit Patel', company: 'GrowthHub Consulting', role: 'Founder', image: '👨‍💻', testimonial: 'Best investment we made this year. Their custom CRM integration handles everything automatically. The ROI was clear within the first month.' }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-lg border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-violet-300">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">{[...Array(5)].map((_, i) => <span key={i} className="text-fuchsia-400">★</span>)}</div>
                <p className="text-gray-300 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-violet-300 to-fuchsia-500 bg-clip-text text-transparent">Get Your Free Automation Audit</h2>
          <p className="text-center text-gray-400 mb-12">Tell us about your business and we'll show you how automation can help</p>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <a href={contact.phoneLink} className="p-6 bg-gray-800/50 rounded-lg border border-violet-500/20 hover:border-violet-500/50 transition-all text-center group">
              <Phone className="w-8 h-8 text-violet-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-gray-400 mb-1">Call Us</div>
              <div className="text-violet-300 font-semibold">{contact.phone}</div>
            </a>
            <a href={contact.emailLink} className="p-6 bg-gray-800/50 rounded-lg border border-violet-500/20 hover:border-violet-500/50 transition-all text-center group">
              <Mail className="w-8 h-8 text-violet-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-gray-400 mb-1">Email Us</div>
              <div className="text-violet-300 font-semibold break-all">{contact.email}</div>
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="p-6 bg-gray-800/50 rounded-lg border border-violet-500/20 hover:border-violet-500/50 transition-all text-center group">
              <MessageCircle className="w-8 h-8 text-violet-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-gray-400 mb-1">WhatsApp</div>
              <div className="text-violet-300 font-semibold">Chat Now</div>
            </a>
          </div>
          <div className="bg-gray-800/30 p-8 rounded-lg border border-violet-500/20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800 border border-violet-500/30 rounded-lg focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 text-gray-100" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800 border border-violet-500/30 rounded-lg focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 text-gray-100" placeholder="john@company.com" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800 border border-violet-500/30 rounded-lg focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 text-gray-100" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-800 border border-violet-500/30 rounded-lg focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 text-gray-100" placeholder="Your Company" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Tell us about your automation needs</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" className="w-full px-4 py-3 bg-gray-800 border border-violet-500/30 rounded-lg focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 text-gray-100 resize-none" placeholder="What processes would you like to automate?"></textarea>
            </div>
            {formStatus.message && (
              <div className={`mb-6 p-4 rounded-lg ${formStatus.type === 'success' ? 'bg-violet-500/20 border border-violet-500/50 text-violet-300' : 'bg-red-500/20 border border-red-500/50 text-red-300'}`}>
                {formStatus.message}
              </div>
            )}
            <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="w-full px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? 'Submitting...' : 'Submit & Get Free Audit'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-violet-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-8 h-8 text-violet-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-300 to-fuchsia-500 bg-clip-text text-transparent">AE Automations</span>
              </div>
              <p className="text-gray-400">AI-powered workflow automation for growing businesses</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-violet-300 mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['home', 'services', 'benefits', 'process', 'testimonials', 'contact'].map((section) => (
                  <button key={section} onClick={() => scrollToSection(section)} className="block text-gray-400 hover:text-violet-400 transition-colors capitalize">{section}</button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-violet-300 mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a href={contact.phoneLink} className="flex items-center space-x-2 text-gray-400 hover:text-violet-400 transition-colors"><Phone className="w-5 h-5" /><span>{contact.phone}</span></a>
                <a href={contact.emailLink} className="flex items-center space-x-2 text-gray-400 hover:text-violet-400 transition-colors break-all"><Mail className="w-5 h-5 flex-shrink-0" /><span>{contact.email}</span></a>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-violet-400 transition-colors"><MessageCircle className="w-5 h-5" /><span>WhatsApp</span></a>
              </div>
            </div>
          </div>
          <div className="border-t border-violet-500/20 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AE Automations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AEAutomations;
