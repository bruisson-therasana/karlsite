import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { 
  Brain, Activity, Moon, Droplets, Heart, Wind, Zap, Shield,
  MapPin, Phone, Mail, Clock, Star, CheckCircle, AlertCircle, Facebook, Linkedin, Calendar,
  GraduationCap, Sparkles, ExternalLink
} from 'lucide-react';
import { 
  practitionerInfo, 
  whyConsultReasons, 
  mtcTreatments, 
  sessionProcess,
  testimonials,
  faqItems,
  pricing,
  chineseWisdom,
  trainingCursus,
  estheticTreatments
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
    window.open(practitionerInfo.socialLinks.resalib, '_blank');
  };

  const handleTherasana = () => {
    window.open(practitionerInfo.socialLinks.therasana, '_blank');
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
            <a href="#esthetique" className="nav-link">Esthétique</a>
            <a href="#apropos" className="nav-link">À propos</a>
            <a href="#evaluation" className="nav-link nav-link-highlight">Bilan offert</a>
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
              <Calendar className="button-icon" />
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
              <div className="info-chinese">經驗</div>
              <div>
                <span className="info-label">Expérience</span>
                <span className="info-value">{practitionerInfo.experience} {practitionerInfo.experienceLabel}</span>
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
                  <div className="reason-chinese-bg">{reason.chineseChar}</div>
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
              Une approche millénaire pour rééquilibrer votre énergie vitale (气 Qi) et harmoniser corps et esprit.
            </p>
          </div>
          <div className="treatments-grid">
            {mtcTreatments.map((treatment, index) => (
              <Card key={treatment.id} className="treatment-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="treatment-chinese">{treatment.chineseChar}</div>
                <div className="treatment-chinese-name">{treatment.chineseName}</div>
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

      {/* Esthetic & Signature Treatments Section */}
      <section className="esthetic-section animate-on-scroll" id="esthetique" style={{ opacity: isVisible['esthetique'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Beauté & bien-être</span>
            <h2 className="section-title">Soins esthétiques & Soin Signature</h2>
            <p className="section-description">
              Au-delà du soin thérapeutique, je propose des soins esthétiques naturels et un soin signature d'exception <br />
              pour révéler votre beauté intérieure et extérieure.
            </p>
          </div>
          <div className="esthetic-grid">
            {estheticTreatments.map((treatment, index) => (
              <Card key={treatment.id} className={`esthetic-card ${treatment.id === 3 ? 'esthetic-card-signature' : ''}`} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="esthetic-chinese">{treatment.chineseChar}</div>
                <div className="esthetic-chinese-name">{treatment.chineseName}</div>
                {treatment.id === 3 && <div className="signature-badge"><Sparkles className="signature-icon" />Soin d'exception</div>}
                <CardHeader>
                  <CardTitle className="esthetic-title">{treatment.name}</CardTitle>
                  <CardDescription className="esthetic-description">{treatment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="esthetic-benefits">
                    {treatment.benefits.map((benefit, idx) => (
                      <div key={idx} className="benefit-item">
                        <CheckCircle className="benefit-icon" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="esthetic-pricing">
                    <span className="esthetic-duration">{treatment.duration}</span>
                    <span className="esthetic-price">{treatment.price}</span>
                  </div>
                  <Button onClick={handleBooking} className="esthetic-button">
                    Réserver ce soin
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chinese Wisdom Section */}
      <section className="wisdom-section animate-on-scroll" id="sagesse" style={{ opacity: isVisible['sagesse'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="wisdom-content">
            <h2 className="wisdom-title">Les principes de la Médecine Chinoise</h2>
            <div className="wisdom-grid">
              {chineseWisdom.map((wisdom, index) => (
                <div key={wisdom.id} className="wisdom-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="wisdom-chinese">{wisdom.chinese}</div>
                  <div className="wisdom-pinyin">{wisdom.pinyin}</div>
                  <div className="wisdom-translation">{wisdom.translation}</div>
                  <div className="wisdom-meaning">{wisdom.meaning}</div>
                </div>
              ))}
            </div>
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
                <div className="step-chinese-large">{step.chineseChar}</div>
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
            <Card className="pricing-card pricing-card-children">
              <CardHeader>
                <CardTitle>Séance enfant</CardTitle>
                <CardDescription>{pricing.children.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="pricing-info">
                  <span className="pricing-duration">{pricing.children.duration}</span>
                  <span className="pricing-price">{pricing.children.price}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section with Real Photos */}
      <section className="about-section animate-on-scroll" id="apropos" style={{ opacity: isVisible['apropos'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src={practitionerInfo.photoUrl} 
                alt="Karl Bruisson - Praticien MTC" 
                className="practitioner-photo"
              />
            </div>
            <div className="about-content">
              <span className="section-subtitle">Votre praticien</span>
              <h2 className="section-title">{practitionerInfo.name}</h2>
              <p className="about-subtitle">{practitionerInfo.title}</p>
              <div className="about-experience">
                <span className="experience-number">{practitionerInfo.experience}</span>
                <span className="experience-label">{practitionerInfo.experienceLabel}</span>
              </div>
              <Separator className="about-separator" />
              <p className="about-description">{practitionerInfo.description}</p>
              <div className="about-details">
                <div className="about-detail">
                  <MapPin className="detail-icon" />
                  <div className="address-block">
                    <span className="address-line">{practitionerInfo.location}</span>
                    <span className="address-line">{practitionerInfo.address}</span>
                  </div>
                </div>
                <a href={`tel:${practitionerInfo.phoneRaw}`} className="about-detail about-detail-clickable">
                  <Phone className="detail-icon" />
                  <span>{practitionerInfo.phone}</span>
                </a>
              </div>
              <div className="social-links">
                <a href={practitionerInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Facebook className="social-icon" />
                  <span>Facebook</span>
                </a>
                <a href={practitionerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin className="social-icon" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <Button onClick={handleBooking} className="accent-button">
                Prendre rendez-vous
              </Button>
            </div>
          </div>
          
          {/* Cabinet Photo */}
          <div className="cabinet-section">
            <div className="cabinet-content">
              <span className="section-subtitle">Le Cabinet</span>
              <h3 className="cabinet-title">Un espace dédié à votre bien-être</h3>
              <p className="cabinet-description">
                Un lieu apaisant et chaleureux, pensé pour favoriser la détente et l'harmonisation énergétique.
              </p>
            </div>
            <div className="cabinet-image">
              <img 
                src={practitionerInfo.cabinetPhotoUrl} 
                alt="Cabinet de Médecine Traditionnelle Chinoise" 
                className="cabinet-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training/Cursus Section */}
      <section className="training-section animate-on-scroll" id="formation" style={{ opacity: isVisible['formation'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Mon cursus de formation</span>
            <h2 className="section-title">Une formation rigoureuse et continue</h2>
            <p className="section-description">
              Formé auprès d'écoles reconnues en France, je continue à me former régulièrement <br />
              pour être toujours plus efficace dans mon accompagnement.
            </p>
          </div>
          <div className="training-grid">
            {trainingCursus.map((training, index) => (
              <Card key={training.id} className="training-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="training-chinese">{training.chineseChar}</div>
                <CardHeader>
                  <div className="training-icon-wrapper">
                    <GraduationCap className="training-icon" />
                  </div>
                  <CardTitle className="training-school">{training.school}</CardTitle>
                  <CardDescription className="training-fullname">{training.fullName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="training-description">{training.description}</p>
                  {training.url && (
                    <a href={training.url} target="_blank" rel="noopener noreferrer" className="training-link">
                      Visiter le site
                      <ExternalLink className="training-link-icon" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Commitments Section - Therasana */}
      <section className="commitments-section animate-on-scroll" id="engagements" style={{ opacity: isVisible['engagements'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Mes engagements</span>
            <h2 className="section-title">Une démarche éthique et collective</h2>
            <p className="section-description">
              Au-delà de ma pratique, je m'engage pour une approche thérapeutique responsable, <br />
              collaborative et au service du bien-être collectif.
            </p>
          </div>
          
          {/* Therasana Featured Card */}
          <div className="therasana-featured">
            <div className="therasana-content">
              <div className="therasana-badge">
                <span className="therasana-badge-chinese">合</span>
                <span>Fondateur du collectif</span>
              </div>
              <h3 className="therasana-title">Therasana</h3>
              <p className="therasana-subtitle">Collectif de thérapeutes engagés pour les RPS & la QVT</p>
              <p className="therasana-description">
                J'ai fondé <strong>Therasana</strong>, un collectif rassemblant des thérapeutes engagés 
                pour la prévention des <strong>Risques Psychosociaux (RPS)</strong> et l'amélioration 
                de la <strong>Qualité de Vie au Travail (QVT)</strong> sur les départements des 
                <strong> Landes (40)</strong> et des <strong>Pyrénées-Atlantiques (64)</strong>.
              </p>
              <p className="therasana-description">
                Notre mission : accompagner les entreprises et leurs collaborateurs vers un mieux-être 
                durable grâce à des approches complémentaires en médecines naturelles.
              </p>
              <Button onClick={handleTherasana} className="therasana-button">
                Découvrir le collectif Therasana
              </Button>
            </div>
            <div className="therasana-visual">
              <div className="therasana-circle">
                <span className="therasana-chinese-large">和</span>
                <span className="therasana-circle-text">Harmonie</span>
              </div>
            </div>
          </div>

          {/* Other Commitments */}
          <div className="commitments-grid">
            <div className="commitment-card">
              <div className="commitment-icon-wrapper">
                <Heart className="commitment-icon" />
              </div>
              <h4 className="commitment-title">Approche personnalisée</h4>
              <p className="commitment-description">
                Chaque patient est unique. Mon bilan énergétique approfondi me permet d'adapter 
                précisément chaque soin à votre terrain et vos besoins.
              </p>
            </div>
            <div className="commitment-card">
              <div className="commitment-icon-wrapper">
                <Shield className="commitment-icon" />
              </div>
              <h4 className="commitment-title">Éthique médicale</h4>
              <p className="commitment-description">
                Je m'engage à toujours travailler en complémentarité avec votre médecin traitant, 
                jamais en substitution. Votre santé est notre priorité commune.
              </p>
            </div>
            <div className="commitment-card">
              <div className="commitment-icon-wrapper">
                <Zap className="commitment-icon" />
              </div>
              <h4 className="commitment-title">Formation continue</h4>
              <p className="commitment-description">
                La MTC est un savoir vivant. Je me forme continuellement aux techniques 
                traditionnelles et aux approches modernes pour vous offrir le meilleur accompagnement.
              </p>
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
            <div className="rating-display">
              <div className="stars-large">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-icon-large" fill="currentColor" />
                ))}
              </div>
              <span className="rating-text">5.0/5 sur la base de nos patients</span>
            </div>
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

      {/* Lead Magnet - Self Assessment Section */}
      <section className="lead-magnet-section animate-on-scroll" id="evaluation" style={{ opacity: isVisible['evaluation'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="lead-magnet-header">
            <div className="lead-magnet-badge">
              <Sparkles className="lead-magnet-badge-icon" />
              <span>100% Offert</span>
            </div>
            <span className="section-subtitle">Bilan énergétique gratuit + E-book offert</span>
            <h2 className="lead-magnet-title">
              Évaluez votre <span className="lead-magnet-accent">douleur, stress et fatigue</span><br />
              en 2 minutes chrono
            </h2>
            <p className="lead-magnet-description">
              Vous ressentez des tensions, du stress, des troubles du sommeil ou une fatigue persistante ?<br />
              Faites le point sur votre équilibre énergétique selon la <strong>Médecine Traditionnelle Chinoise</strong> et recevez immédiatement <strong>votre e-book exclusif</strong> par email.
            </p>
          </div>

          <div className="lead-magnet-grid">
            {/* Left: Ebook Visual + Bonuses */}
            <div className="lead-magnet-left">
              <div className="ebook-showcase">
                <div className="ebook-glow"></div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_chinese-web-elegant/artifacts/fhnoujmf_3B403768-4F0B-4708-932F-E3A8C0B99E6E.PNG" 
                  alt="E-book offert - Karl Bruisson - Pourquoi le corps parle avant l'épuisement" 
                  className="ebook-cover"
                />
                <div className="ebook-value-tag">
                  <span className="ebook-value-old">Valeur 29€</span>
                  <span className="ebook-value-new">OFFERT</span>
                </div>
              </div>

              <div className="ebook-bonuses">
                <h3 className="ebook-bonuses-title">
                  <Sparkles className="ebook-bonus-icon" />
                  Ce que vous allez recevoir
                </h3>
                <div className="ebook-bonus-list">
                  <div className="ebook-bonus-item">
                    <div className="ebook-bonus-number">01</div>
                    <div>
                      <h4>Votre bilan personnalisé instantané</h4>
                      <p>Identifiez précisément vos zones de déséquilibre selon la MTC : douleur, stress, sommeil, fatigue, digestion.</p>
                    </div>
                  </div>
                  <div className="ebook-bonus-item">
                    <div className="ebook-bonus-number">02</div>
                    <div>
                      <h4>L'e-book exclusif premium</h4>
                      <p>"Pourquoi le corps parle avant l'épuisement" — Une réflexion approfondie et concrète sur les signaux faibles, la surcharge et la récupération. Un contenu dense, ciblé et directement applicable.</p>
                    </div>
                  </div>
                  <div className="ebook-bonus-item">
                    <div className="ebook-bonus-number">03</div>
                    <div>
                      <h4>BONUS : Fiches conseils exclusives</h4>
                      <p>Recevez régulièrement de nouvelles fiches pratiques : auto-massages, points d'acupression, rituels énergétiques saisonniers à appliquer chez vous.</p>
                    </div>
                  </div>
                  <div className="ebook-bonus-item">
                    <div className="ebook-bonus-number">04</div>
                    <div>
                      <h4>BONUS : Conseils d'alimentation énergétique</h4>
                      <p>Les aliments qui soutiennent votre énergie selon les saisons et votre constitution, accessibles dans nos fiches pratiques.</p>
                    </div>
                  </div>
                  <div className="ebook-bonus-item">
                    <div className="ebook-bonus-number">05</div>
                    <div>
                      <h4>BONUS : Recommandations personnalisées</h4>
                      <p>Selon vos résultats au bilan, recevez des conseils ciblés pour retrouver votre équilibre énergétique.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lead-magnet-form">
              <div className="lead-magnet-form-decoration">
                <span className="lead-magnet-chinese">问</span>
              </div>
              <div className="lead-magnet-form-wrapper">
                <div className="lead-magnet-form-header">
                  <h3>Commencez votre bilan</h3>
                  <p>Remplissez le formulaire ci-dessous pour recevoir <strong>immédiatement</strong> votre bilan + e-book</p>
                </div>
                <iframe 
                  width="540" 
                  height="700" 
                  src="https://f40d878d.sibforms.com/serve/MUIFANlfGbTHlobS3PWmjbH-fKIN7QKIYOGOwcnNM3qONqhM8DwxsxfyxqwjVPZf6NXJba3tsm02nuRnZHyA8MiKOu4EPVN2TSofr7rKHUVpLcw-K9B1_Chc05mRTTWpCrzlLlFGihQrt4qKutD0paz-iuHRZLpDeohfW6meZNkQV2vc0hI53EKDCJ0iMADqyReVeSPmaPPYmFi5yw==" 
                  frameBorder="0" 
                  scrolling="auto" 
                  allowFullScreen 
                  title="Bilan énergétique gratuit - Karl Bruisson MTC"
                  className="lead-magnet-iframe"
                />
                <div className="lead-magnet-trust">
                  <Shield className="trust-icon" />
                  <span>Vos données sont 100% protégées. Aucun spam, désinscription en 1 clic.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section animate-on-scroll" id="contact" style={{ opacity: isVisible['contact'] ? 1 : 0 }}>
        <div className="cta-chinese-bg">和</div>
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Prêt(e) à prendre soin de vous ?</h2>
            <p className="cta-description">
              Prenez rendez-vous pour une première consultation et commencez votre chemin <br />
              vers un mieux-être durable grâce à la Médecine Traditionnelle Chinoise.
            </p>
            <div className="cta-actions">
              <Button onClick={handleBooking} size="lg" className="primary-button-large">
                <Calendar className="button-icon" />
                Prendre rendez-vous
              </Button>
            </div>
            <div className="cta-contact-info">
              <a href={`tel:${practitionerInfo.phoneRaw}`} className="contact-item contact-item-clickable">
                <Phone className="contact-icon" />
                <span>{practitionerInfo.phone}</span>
              </a>
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
              <div className="footer-social">
                <a href={practitionerInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <Facebook className="footer-social-icon" />
                </a>
                <a href={practitionerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <Linkedin className="footer-social-icon" />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Navigation</h4>
              <nav className="footer-nav">
                <a href="#pourquoi">Pourquoi consulter</a>
                <a href="#soins">Mes soins</a>
                <a href="#deroulement">Déroulement</a>
                <a href="#apropos">À propos</a>
                <a href="#temoignages">Témoignages</a>
              </nav>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Contact</h4>
              <div className="footer-contact">
                <p>{practitionerInfo.location}</p>
                <p>{practitionerInfo.address}</p>
                <p><a href={`tel:${practitionerInfo.phoneRaw}`} className="footer-phone-link">{practitionerInfo.phone}</a></p>
                <p>{practitionerInfo.email}</p>
              </div>
              <Button onClick={handleBooking} className="footer-booking-button">
                Prendre rendez-vous
              </Button>
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
