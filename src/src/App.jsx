import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Building,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Users,
  Wrench,
  X,
} from "./components/Icons.jsx";
import { processSteps, projectPhotos, services, siteConfig } from "./data/siteData.js";
import BrandLogo from "./assets/logo-ronaldo.png";

const navItems = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Serviços", "#servicos"],
  ["Projeto", "#projeto"],
  ["Experiência", "#experiencia"],
  ["Contato", "#contato"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    cidade: "",
    servico: "Administração de obras",
    imovel: "Residencial",
    mensagem: "",
  });

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setGalleryOpen(false);
      if (!galleryOpen) return;
      if (event.key === "ArrowRight") setActivePhoto((value) => (value + 1) % projectPhotos.length);
      if (event.key === "ArrowLeft") setActivePhoto((value) => (value - 1 + projectPhotos.length) % projectPhotos.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [galleryOpen]);

  useEffect(() => {
    document.body.style.overflow = galleryOpen || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [galleryOpen, menuOpen]);

  const visiblePhotos = useMemo(
    () => (showAllPhotos ? projectPhotos : projectPhotos.slice(0, 8)),
    [showAllPhotos]
  );

  const openPhoto = (index) => {
    setActivePhoto(index);
    setGalleryOpen(true);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitWhatsApp = (event) => {
    event.preventDefault();
    const message = [
      "Olá Ronaldo, tudo bem?",
      "Encontrei seu site e gostaria de conversar sobre um projeto.",
      "",
      `Nome: ${form.nome}`,
      `WhatsApp: ${form.whatsapp}`,
      `Cidade: ${form.cidade}`,
      `Serviço de interesse: ${form.servico}`,
      `Tipo de imóvel: ${form.imovel}`,
      `Descrição: ${form.mensagem || "Não informada"}`,
      "",
      "Podemos conversar sobre a melhor forma de conduzir esse projeto?",
    ].join("\n");

    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-inner">
          <a href="#inicio" className="brand" aria-label="Ronaldo Antunes - Início">
            <span className="brand-mark brand-mark-logo"><img src={BrandLogo} alt="" aria-hidden="true" /></span>
            <span className="brand-copy">
              <strong>Ronaldo Antunes</strong>
              <small>Engenharia & Administração de Obras</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>

          <a className="header-cta" href="#contato">
            Solicitar orçamento <ArrowRight size={18} />
          </a>

          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
            <Menu />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
          <X />
        </button>
        <div className="mobile-menu-content">
          <div className="brand mobile-brand">
            <span className="brand-mark brand-mark-logo"><img src={BrandLogo} alt="" aria-hidden="true" /></span>
            <span className="brand-copy"><strong>Ronaldo Antunes</strong><small>Engenharia Civil</small></span>
          </div>
          <nav>
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
          <a className="button button-accent" href="#contato" onClick={() => setMenuOpen(false)}>
            Solicitar orçamento <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-image" style={{ backgroundImage: `url(${projectPhotos[0]})` }} />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow light">Engenharia Civil • Campinas e região</span>
              <h1>Planejamento, gestão e execução com visão de engenharia.</h1>
              <p>
                Ronaldo Antunes é Engenheiro Civil e soma mais de 10 anos de experiência coordenando
                equipes de alta performance na área de manutenção. Agora, retoma sua atuação na
                engenharia com foco em obras, reformas e gestão técnica.
              </p>
              <div className="hero-actions">
                <a href="#contato" className="button button-accent">Solicitar orçamento <ArrowRight size={19} /></a>
                <a href="#projeto" className="button button-ghost">Ver projeto <ArrowRight size={19} /></a>
              </div>
            </div>

            <div className="hero-card">
              <span className="hero-card-number">+10</span>
              <strong>anos de experiência</strong>
              <p>Coordenação de equipes de alta performance na área de manutenção.</p>
            </div>
          </div>
          <div className="hero-scroll">Role para conhecer <span /></div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div><Building /><span><strong>Engenheiro Civil</strong><small>Formação técnica para decisões seguras</small></span></div>
            <div><Users /><span><strong>Gestão de equipes</strong><small>Mais de uma década em coordenação</small></span></div>
            <div><Wrench /><span><strong>Experiência em manutenção</strong><small>Visão prática de execução e operação</small></span></div>
            <div><MapPin /><span><strong>Campinas e região</strong><small>Atendimento regional</small></span></div>
          </div>
        </section>

        <section className="section about" id="sobre">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-image-large"><img src={projectPhotos[5]} alt="Projeto residencial" /></div>
              <div className="about-image-small"><img src={projectPhotos[2]} alt="Execução de obra" /></div>
              <div className="about-stamp about-stamp-logo"><img src={BrandLogo} alt="Ronaldo Antunes - Engenharia e Administração de Obras" /></div>
            </div>

            <div className="about-copy">
              <span className="eyebrow">Sobre</span>
              <h2 className="section-title">Experiência em gestão aplicada à <em>engenharia.</em></h2>
              <p className="lead">
                Depois de anos atuando em outro segmento e acumulando experiência na coordenação de
                times de manutenção, Ronaldo retorna à Engenharia Civil trazendo uma combinação de
                conhecimento técnico, organização e liderança.
              </p>
              <p>
                O objetivo é oferecer um acompanhamento próximo, com comunicação clara, atenção aos
                detalhes e decisões orientadas por planejamento — começando por projetos residenciais
                e ampliando o portfólio de forma consistente.
              </p>
              <div className="about-points">
                <span><i />Planejamento e organização</span>
                <span><i />Gestão próxima da execução</span>
                <span><i />Comunicação objetiva</span>
                <span><i />Foco em qualidade e segurança</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="servicos">
          <div className="container">
            <div className="section-header split">
              <div>
                <span className="eyebrow">Áreas de atuação</span>
                <h2 className="section-title">Da organização à <em>execução.</em></h2>
              </div>
              <p>
                Serviços voltados à gestão, acompanhamento e organização de obras e intervenções,
                adaptados à necessidade de cada projeto.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <div className="service-icon"><Clipboard size={24} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contato" aria-label={`Conversar sobre ${service.title}`}>Conversar sobre este serviço <ArrowRight size={17} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section project-section" id="projeto">
          <div className="container">
            <div className="project-intro">
              <div>
                <span className="eyebrow light">Projeto em destaque</span>
                <h2>Projeto residencial próprio</h2>
              </div>
              <div className="project-intro-copy">
                <p>
                  Um projeto residencial utilizado como ponto de partida do novo portfólio: construção,
                  adequações e melhorias acompanhadas com visão técnica e atenção aos detalhes.
                </p>
                <span className="portfolio-note">Portfólio em expansão • Novos projetos serão adicionados conforme concluídos.</span>
              </div>
            </div>

            <div className="project-feature">
              <img src={projectPhotos[1]} alt="Projeto residencial em destaque" />
              <div className="project-feature-card">
                <span>01</span>
                <h3>Residência</h3>
                <p>Planejamento, execução e melhorias residenciais.</p>
              </div>
            </div>

            <div className="gallery-heading">
              <div><span className="eyebrow light">Galeria do projeto</span><h3>Registro das etapas</h3></div>
              <p>As imagens abaixo são temporárias. Depois basta substituir pelas 17 fotos reais da casa.</p>
            </div>

            <div className="project-gallery">
              {visiblePhotos.map((photo, index) => (
                <button className={`gallery-item gallery-item-${(index % 6) + 1}`} key={`${photo}-${index}`} onClick={() => openPhoto(index)}>
                  <img src={photo} alt={`Projeto residencial - foto ${index + 1}`} loading="lazy" />
                  <span><small>Projeto residencial</small><strong>Foto {String(index + 1).padStart(2, "0")}</strong></span>
                </button>
              ))}
            </div>

            {!showAllPhotos && (
              <div className="gallery-more">
                <button className="button button-outline-light" onClick={() => setShowAllPhotos(true)}>
                  Ver as 17 fotos <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-header centered">
              <span className="eyebrow">Como funciona</span>
              <h2 className="section-title">Um processo claro do primeiro contato à <em>entrega.</em></h2>
            </div>
            <div className="process-grid">
              {processSteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experiencia">
          <div className="container experience-grid">
            <div className="experience-copy">
              <span className="eyebrow">Experiência profissional</span>
              <h2 className="section-title">Gestão, manutenção e liderança como <em>base.</em></h2>
              <p>
                A atuação anterior em coordenação de equipes de alta performance cria uma base sólida
                para lidar com planejamento, organização, pessoas, prioridades e execução.
              </p>
              <a href="#contato" className="text-link">Converse sobre seu projeto <ArrowRight size={18} /></a>
            </div>
            <div className="timeline">
              <div className="timeline-item"><span>Formação</span><strong>Engenharia Civil</strong><p>Base técnica para planejamento, acompanhamento e tomada de decisão.</p></div>
              <div className="timeline-item"><span>+10 anos</span><strong>Coordenação e manutenção</strong><p>Experiência liderando equipes de alta performance na área de manutenção.</p></div>
              <div className="timeline-item active"><span>Agora</span><strong>Retorno à Engenharia Civil</strong><p>Nova fase profissional com foco em obras, reformas e administração de projetos.</p></div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">Contato</span>
              <h2 className="section-title">Tem uma obra ou reforma em <em>mente?</em></h2>
              <p>
                Conte um pouco sobre o que você precisa. A mensagem será preparada e enviada pelo
                WhatsApp para iniciar a conversa diretamente com Ronaldo.
              </p>

              <div className="contact-list">
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <span><Phone /></span><div><small>WhatsApp</small><strong>{siteConfig.whatsappDisplay}</strong></div>
                </a>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
                  <span><Instagram /></span><div><small>Instagram</small><strong>{siteConfig.instagramLabel}</strong></div>
                </a>
                <div className="contact-static">
                  <span><MapPin /></span><div><small>Atendimento</small><strong>{siteConfig.region}</strong></div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={submitWhatsApp}>
              <div className="form-topline"><span>Solicitar avaliação</span><small>01/01</small></div>
              <div className="form-grid">
                <label><span>Seu nome</span><input required name="nome" value={form.nome} onChange={handleFormChange} placeholder="Nome completo" maxLength="80" /></label>
                <label><span>WhatsApp</span><input required name="whatsapp" value={form.whatsapp} onChange={handleFormChange} placeholder="(19) 99999-9999" maxLength="20" /></label>
                <label><span>Cidade</span><input required name="cidade" value={form.cidade} onChange={handleFormChange} placeholder="Ex.: Campinas" maxLength="80" /></label>
                <label><span>Tipo de imóvel</span><select name="imovel" value={form.imovel} onChange={handleFormChange}><option>Residencial</option><option>Comercial</option><option>Condomínio</option><option>Outro</option></select></label>
                <label className="full"><span>Serviço de interesse</span><select name="servico" value={form.servico} onChange={handleFormChange}>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label>
                <label className="full"><span>Conte um pouco sobre o projeto</span><textarea name="mensagem" value={form.mensagem} onChange={handleFormChange} placeholder="Ex.: Quero reformar uma casa e preciso de acompanhamento da obra..." maxLength="800" /></label>
              </div>
              <button type="submit" className="button button-dark form-submit">Enviar pelo WhatsApp <ArrowRight size={19} /></button>
              <p className="form-note">O envio não confirma contratação. É apenas o início da conversa para entender sua necessidade.</p>
            </form>
          </div>
        </section>

        <section className="instagram-cta">
          <div className="container instagram-inner">
            <div><span className="eyebrow light">Instagram</span><h2>Acompanhe os próximos projetos.</h2></div>
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="button button-ghost">
              <Instagram size={19} /> {siteConfig.instagramLabel}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="brand footer-logo"><span className="brand-mark brand-mark-logo"><img src={BrandLogo} alt="" aria-hidden="true" /></span><span className="brand-copy"><strong>Ronaldo Antunes</strong><small>Engenharia & Administração de Obras</small></span></a>
            <p>Engenharia Civil, gestão e acompanhamento de obras em Campinas e região.</p>
          </div>
          <div><h3>Navegação</h3>{navItems.slice(1).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <div><h3>Contato</h3><a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">Instagram</a><span>Campinas e região</span></div>
          <div><h3>Atuação</h3><span>Administração de obras</span><span>Reformas</span><span>Gestão de equipes</span><span>Manutenção</span></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Ronaldo Antunes. Todos os direitos reservados.</span><span>Engenharia Civil • Campinas e região</span></div>
      </footer>

      {galleryOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={(event) => event.target === event.currentTarget && setGalleryOpen(false)}>
          <button className="lightbox-close" onClick={() => setGalleryOpen(false)} aria-label="Fechar"><X /></button>
          <button className="lightbox-nav prev" onClick={() => setActivePhoto((value) => (value - 1 + projectPhotos.length) % projectPhotos.length)} aria-label="Foto anterior"><ChevronLeft size={28} /></button>
          <img src={projectPhotos[activePhoto]} alt={`Projeto residencial - foto ${activePhoto + 1}`} />
          <button className="lightbox-nav next" onClick={() => setActivePhoto((value) => (value + 1) % projectPhotos.length)} aria-label="Próxima foto"><ChevronRight size={28} /></button>
          <div className="lightbox-caption">Projeto residencial <span>{String(activePhoto + 1).padStart(2, "0")} / {projectPhotos.length}</span></div>
        </div>
      )}
    </div>
  );
}

export default App;
