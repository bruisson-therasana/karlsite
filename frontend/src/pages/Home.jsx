import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { 
  Brain, Activity, Moon, Droplets, Heart, Wind, Zap, Shield,
  MapPin, Phone, Mail, Clock, Star, CheckCircle, AlertCircle
} from 'lucide-react';
import { 
  practitionerInfo, 
  whyConsultReasons, 
  mtcTreatments, 
  sessionProcess,
  testimonials,
  faqItems,
  pricing
} from '../mock';
import '../styles/home.css';

const iconMap = {
  brain: Brain,
  activity: Activity,
  moon: Moon,
  droplets: Droplets,
  heart: Heart,
  wind: Wind,
  zap: Zap,
  shield: Shield
};

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleBooking = () => {
    alert('Système de réservation à venir - Contactez Karl Bruisson par téléphone');
  };

  const handleContact = () => {
    window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-accent"></div>
            <div className="logo-info">
              <span className="logo-name">{practitionerInfo.name}</span>
              <span className="logo-subtitle">Médecine Traditionnelle Chinoise</span>
            </div>
          </div>
          <nav className="nav-menu">
            <a href="#pourquoi" className="nav-link">Pourquoi consulter</a>
            <a href="#soins" className="nav-link">Mes soins</a>
            <a href="#deroulement" className="nav-link">Déroulement</a>
            <a href="#apropos" className="nav-link">À propos</a>
            <Button onClick={handleBooking} className="cta-button">Prendre RDV</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background-char" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>氣</div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🌿</span>
            <span>Médecine Traditionnelle Chinoise au Pays Basque</span>
          </div>
          <h1 className="hero-title">
            Votre santé mérite une approche <br />
            <span className="hero-accent">globale et naturelle</span>
          </h1>
          <p className="hero-description">
            Praticien en Médecine Traditionnelle Chinoise, je vous accompagne avec <strong>acupuncture</strong>, 
            <strong>moxibustion</strong> et <strong>ventouses</strong> pour rééquilibrer votre énergie vitale et retrouver <br />
            harmonie, soulagement des douleurs et bien-être durable.
          </p>
          <div className="hero-actions">
            <Button onClick={handleBooking} size="lg" className="primary-button">
              <Phone className="button-icon" />
              Prendre rendez-vous
            </Button>
            <Button onClick={handleContact} variant="outline" size="lg" className="secondary-button">
              En savoir plus
            </Button>
          </div>
          <div className="hero-info-cards">
            <div className="info-card">
              <Clock className="info-icon" />
              <div>
                <span className="info-label">Première séance</span>
                <span className="info-value">{pricing.firstSession.duration} - {pricing.firstSession.price}</span>
              </div>
            </div>
            <div className="info-card">
              <MapPin className="info-icon" />
              <div>
                <span className="info-label">Localisation</span>
                <span className="info-value">Bassussarry, Pays Basque</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="disclaimer-section">
        <div className="section-container">
          <div className="disclaimer-content">
            <AlertCircle className="disclaimer-icon" />
            <div className="disclaimer-text">
              <h3>Information importante</h3>
              <p>
                La Médecine Traditionnelle Chinoise <strong>ne se substitue pas à la médecine conventionnelle</strong>. 
                Elle intervient <strong>en complément</strong> de votre suivi médical pour optimiser votre bien-être. 
                Ne modifiez jamais un traitement sans l'avis de votre médecin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Consult Section */}
      <section className="why-consult-section animate-on-scroll" id="pourquoi" style={{ opacity: isVisible['pourquoi'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Pour quels motifs consulter</span>
            <h2 className="section-title">Vous vous reconnaissez ?</h2>
            <p className="section-description">
              La Médecine Traditionnelle Chinoise accompagne de nombreux déséquilibres du quotidien en soutenant <br />
              l'équilibre énergétique de votre corps et de votre esprit.
            </p>
          </div>
          <div className="reasons-grid">
            {whyConsultReasons.map((reason, index) => {
              const IconComponent = iconMap[reason.icon];
              return (
                <Card key={reason.id} className="reason-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="reason-icon-wrapper">
                      <IconComponent className="reason-icon" />
                    </div>
                    <CardTitle className="reason-title">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="reason-description">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="section-cta">
            <Button onClick={handleBooking} size="lg" className="accent-button">
              Je souhaite être accompagné(e)
            </Button>
          </div>
        </div>
      </section>

      {/* MTC Treatments Section */}
      <section className="treatments-section animate-on-scroll" id="soins" style={{ opacity: isVisible['soins'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Mes outils thérapeutiques</span>
            <h2 className="section-title">Les soins de Médecine Traditionnelle Chinoise</h2>
            <p className="section-description">
              Une approche millénaire pour rééquilibrer votre énergie vitale (Qi) et harmoniser corps et esprit.
            </p>
          </div>
          <div className="treatments-grid">
            {mtcTreatments.map((treatment, index) => (
              <Card key={treatment.id} className="treatment-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="treatment-chinese">{treatment.chineseChar}</div>
                <CardHeader>
                  <CardTitle className="treatment-title">{treatment.name}</CardTitle>
                  <CardDescription className="treatment-description">{treatment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="treatment-benefits">
                    {treatment.benefits.map((benefit, idx) => (
                      <div key={idx} className="benefit-item">
                        <CheckCircle className="benefit-icon" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Session Process Section */}
      <section className="process-section animate-on-scroll" id="deroulement" style={{ opacity: isVisible['deroulement'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Déroulement d'une séance</span>
            <h2 className="section-title">Comment se passe une consultation ?</h2>
            <p className="section-description">
              Chaque séance est personnalisée selon votre bilan énergétique et vos besoins spécifiques.
            </p>
          </div>
          <div className="process-grid">
            {sessionProcess.map((step, index) => (
              <div key={step.id} className="process-step" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <Badge className="step-duration">{step.duration}</Badge>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="process-pricing">
            <Card className="pricing-card">
              <CardHeader>
                <CardTitle>Première consultation</CardTitle>
                <CardDescription>{pricing.firstSession.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="pricing-info">
                  <span className="pricing-duration">{pricing.firstSession.duration}</span>
                  <span className="pricing-price">{pricing.firstSession.price}</span>
                </div>
              </CardContent>
            </Card>
            <Card className="pricing-card">
              <CardHeader>
                <CardTitle>Séance de suivi</CardTitle>
                <CardDescription>{pricing.followUp.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="pricing-info">
                  <span className="pricing-duration">{pricing.followUp.duration}</span>
                  <span className="pricing-price">{pricing.followUp.price}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section animate-on-scroll" id="apropos" style={{ opacity: isVisible['apropos'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="about-grid">
            <div className="about-image">
              <div className="about-placeholder">
                <span className="placeholder-text">師</span>
              </div>
            </div>
            <div className="about-content">
              <span className="section-subtitle">Votre praticien</span>
              <h2 className="section-title">{practitionerInfo.name}</h2>
              <p className="about-subtitle">{practitionerInfo.title}</p>
              <Separator className="about-separator" />
              <p className="about-description">{practitionerInfo.description}</p>
              <div className="about-details">
                <div className="about-detail">
                  <MapPin className="detail-icon" />
                  <span>{practitionerInfo.location}</span>
                </div>
              </div>
              <Button onClick={handleBooking} className="accent-button">
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section animate-on-scroll" id="temoignages" style={{ opacity: isVisible['temoignages'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Témoignages</span>
            <h2 className="section-title">Ce qu'ils en disent</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="testimonial-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="testimonial-content">
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="star-icon" fill="currentColor" />
                    ))}
                  </div>
                  <Badge className="testimonial-issue">{testimonial.issue}</Badge>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-author">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section animate-on-scroll" id="faq" style={{ opacity: isVisible['faq'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Questions fréquentes</span>
            <h2 className="section-title">Vos questions, mes réponses</h2>
          </div>
          <Accordion type="single" collapsible className="faq-accordion">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`} className="faq-item">
                <AccordionTrigger className="faq-question">{item.question}</AccordionTrigger>
                <AccordionContent className="faq-answer">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section animate-on-scroll" id="contact" style={{ opacity: isVisible['contact'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Prêt(e) à prendre soin de vous ?</h2>
            <p className="cta-description">
              Prenez rendez-vous pour une première consultation et commencez votre chemin <br />
              vers un mieux-être durable grâce à la Médecine Traditionnelle Chinoise.
            </p>
            <div className="cta-actions">
              <Button onClick={handleBooking} size="lg" className="primary-button-large">
                <Phone className="button-icon" />
                Prendre rendez-vous
              </Button>
            </div>
            <div className="cta-contact-info">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>{practitionerInfo.phone}</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>{practitionerInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="footer-logo-accent"></div>
                <div>
                  <span className="footer-name">{practitionerInfo.name}</span>
                  <span className="footer-subtitle">Médecine Traditionnelle Chinoise</span>
                </div>
              </div>
              <p className="footer-tagline">Acupuncture • Moxibustion • Ventouses</p>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Navigation</h4>
              <nav className="footer-nav">
                <a href="#pourquoi">Pourquoi consulter</a>
                <a href="#soins">Mes soins</a>
                <a href="#deroulement">Déroulement</a>
                <a href="#apropos">À propos</a>
              </nav>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Contact</h4>
              <div className="footer-contact">
                <p>{practitionerInfo.location}</p>
                <p>{practitionerInfo.phone}</p>
                <p>{practitionerInfo.email}</p>
              </div>
            </div>
          </div>
          <Separator className="footer-separator" />
          <div className="footer-bottom">
            <p>© 2025 {practitionerInfo.name}. Tous droits réservés.</p>
            <p className="footer-legal">La MTC ne se substitue pas à la médecine conventionnelle</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
