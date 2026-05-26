import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Clock, MapPin, Star, ChevronDown } from 'lucide-react';
import { services, signals, philosophyPoints, testimonials, aboutKarl } from '../mock';
import '../styles/home.css';

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
    alert('Système de réservation à venir');
  };

  const handleMiniBilan = () => {
    alert('Mini-bilan offert - Formulaire à venir');
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <span className="chinese-logo">三宝</span>
            <span className="logo-text">Institut San Bao</span>
          </div>
          <nav className="nav-menu">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">À Propos</a>
            <a href="#contact" className="nav-link">Contact</a>
            <Button onClick={handleBooking} className="cta-button">Prendre RDV</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="chinese-bg-char" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>气</div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-chinese">平衡</span>
            <span className="badge-text">Équilibre • Harmonie • Bien-être</span>
          </div>
          <h1 className="hero-title">
            Révélez l'harmonie <br />
            <span className="hero-title-accent">intérieure</span>
          </h1>
          <p className="hero-description">
            Découvrez comment les soins énergétiques chinois peuvent transformer votre bien-être <br />
            en équilibrant votre corps et votre esprit.
          </p>
          <div className="hero-signals">
            {signals.map((signal) => (
              <div key={signal.id} className="signal-item">
                <div className="signal-dot" />
                <span>{signal.title}</span>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <Button onClick={handleBooking} size="lg" className="primary-button">
              Prendre rendez-vous
            </Button>
            <Button onClick={handleMiniBilan} variant="outline" size="lg" className="secondary-button">
              Mini-bilan offert
            </Button>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown className="scroll-icon" />
        </div>
      </section>

      {/* Tension Section */}
      <section className="tension-section animate-on-scroll" id="tension" style={{ opacity: isVisible['tension'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="tension-grid">
            <div className="tension-content">
              <div className="section-badge">
                <span className="badge-chinese-small">警</span>
                <span>Signaux d'alerte</span>
              </div>
              <h2 className="section-title">Vous tenez. <br />Mais à quel prix ?</h2>
              <div className="tension-description">
                <p>
                  Vous avancez sans relâche, mais votre corps vous parle : dos bloqué, nuque raide, épaules lourdes.
                </p>
                <p>
                  Ces signaux, loin d'être des faiblesses, sont des alertes précieuses. Ils vous rappellent que le repos est essentiel et que l'équilibre doit être restauré pour éviter l'épuisement.
                </p>
              </div>
              <Button onClick={handleBooking} className="accent-button">Comprendre mes signaux</Button>
            </div>
            <div className="tension-visual">
              <div className="visual-card">
                <span className="large-chinese-char">痛</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section animate-on-scroll" id="philosophy" style={{ opacity: isVisible['philosophy'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="philosophy-header">
            <span className="chinese-subtitle">道</span>
            <h2 className="section-title-center">Je n'écoute pas seulement la douleur.</h2>
            <p className="section-description-center">
              Mon approche commence toujours par une écoute attentive. J'analyse vos douleurs, votre sommeil,<br />
              votre énergie, et vos émotions pour comprendre votre terrain unique.
            </p>
          </div>
          <div className="philosophy-grid">
            {philosophyPoints.map((point, index) => (
              <Card key={point.id} className="philosophy-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                  <CardTitle className="philosophy-card-title">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="philosophy-card-description">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section animate-on-scroll" id="services" style={{ opacity: isVisible['services'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="services-header">
            <span className="chinese-subtitle">療</span>
            <h2 className="section-title-center">Options de Soins</h2>
            <p className="section-description-center">
              Explorez une gamme de soins énergétiques chinois conçus pour rétablir votre équilibre intérieur.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <Card key={service.id} className="service-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="service-chinese-char">{service.chineseChar}</div>
                <CardHeader>
                  <CardTitle className="service-title">{service.title}</CardTitle>
                  <CardDescription className="service-description">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="service-footer">
                  <div className="service-details">
                    <div className="service-detail">
                      <Clock className="detail-icon" />
                      <span>{service.duration}</span>
                    </div>
                    <Badge className="service-price">{service.price}</Badge>
                  </div>
                  <Button onClick={handleBooking} className="service-button" variant="outline">
                    Réserver
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section animate-on-scroll" id="about" style={{ opacity: isVisible['about'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-image-placeholder">
                <span className="placeholder-chinese">师</span>
              </div>
            </div>
            <div className="about-content">
              <div className="section-badge">
                <span className="badge-chinese-small">师</span>
                <span>Le Praticien</span>
              </div>
              <h2 className="section-title">{aboutKarl.name}</h2>
              <p className="about-subtitle">{aboutKarl.title}</p>
              <Separator className="about-separator" />
              <p className="about-description">{aboutKarl.description}</p>
              <div className="about-location">
                <MapPin className="location-icon" />
                <span>{aboutKarl.location}</span>
              </div>
              <Button onClick={handleBooking} className="accent-button">Prendre rendez-vous</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section animate-on-scroll" id="testimonials" style={{ opacity: isVisible['testimonials'] ? 1 : 0 }}>
        <div className="section-container">
          <div className="testimonials-header">
            <span className="chinese-subtitle">评</span>
            <h2 className="section-title-center">Témoignages</h2>
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
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-author">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section animate-on-scroll" id="contact" style={{ opacity: isVisible['contact'] ? 1 : 0 }}>
        <div className="cta-bg-char">和</div>
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">L'équilibre se maîtrise.</h2>
            <p className="cta-description">
              Votre corps ne vous bloque pas. Il vous alerte. Prenez le temps de comprendre ces signaux<br />
              et commencez votre chemin vers l'équilibre.
            </p>
            <div className="cta-actions">
              <Button onClick={handleBooking} size="lg" className="primary-button-large">
                Prendre rendez-vous
              </Button>
              <Button onClick={handleMiniBilan} variant="outline" size="lg" className="secondary-button-large">
                Mini-bilan offert
              </Button>
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
                <span className="footer-chinese">三宝</span>
                <span className="footer-text">Institut San Bao</span>
              </div>
              <p className="footer-tagline">Votre équilibre, mon savoir-faire</p>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Navigation</h4>
              <nav className="footer-nav">
                <a href="#services">Services</a>
                <a href="#about">À Propos</a>
                <a href="#testimonials">Témoignages</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Contact</h4>
              <p>CEERS Basque</p>
              <p>Domaine du Makila</p>
              <p>Bassussary près de Bayonne</p>
            </div>
          </div>
          <Separator className="footer-separator" />
          <div className="footer-bottom">
            <p>© 2025 Institut San Bao. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
