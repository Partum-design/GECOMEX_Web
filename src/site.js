const body = document.body;
const app = document.querySelector('#app');
const page = body.dataset.page || 'home';
const base = body.dataset.base || 'assets/';
const root = base.startsWith('../') ? '../' : './';
const asset = (name) => `${base}${name}`;
const pageLink = (name) => `${root}${name}`;

const icon = (name, extra = '') => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 5 5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5a13 13 0 0 1 0 17M12 3.5a13 13 0 0 0 0 17"/>',
    shield: '<path d="M12 3 19 6v5c0 4.4-2.8 7.4-7 9-4.2-1.6-7-4.6-7-9V6l7-3Z"/><path d="m9 12 2 2 4-4"/>',
    chart: '<path d="M5 20V10M12 20V5M19 20v-8"/><path d="M3 20h18"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4v2"/>',
    phone: '<path d="M6.5 3.5 9 3l2 4-2 1.5a13 13 0 0 0 5 5L15.5 12l4 2 .5 2.5A2 2 0 0 1 18 19C10.3 18.2 5.8 13.7 5 6a2 2 0 0 1 1.5-2.5Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 7 8 6 8-6"/>',
    building: '<path d="M4 21h16M6 21V5h12v16M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    ship: '<path d="M4 15h16l-2 3H6l-2-3ZM8 15V7h8v8M10 7V4h4v3M3 20c2 1.5 4 1.5 6 0 2 1.5 4 1.5 6 0 2 1.5 4 1.5 6 0"/>',
    boxes: '<path d="m12 3 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 17l8 4 8-4M12 7v4M12 16v5"/>',
    whatsapp: '<path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"/><path d="M8.2 8.1c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.7c.8 1.2 1.6 1.9 2.8 2.5l.7-.6c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.3.6-.2.8-.8 1.3-1.5 1.4-1.2.1-3.4-1-4.8-2.3-1.5-1.4-2.5-3.3-2.5-4.3 0-.3.1-.6.2-.7Z"/>'
  };
  return `<svg class="${extra}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
};

const services = [
  { image: 'dispatch.jpg', title: 'Despacho aduanal', text: 'Gestionamos tus trámites de importación y exportación con precisión, seguimiento y cumplimiento normativo.' },
  { image: 'advice.jpg', title: 'Asesoría en comercio internacional', text: 'Optimizamos tu operación con experiencia en normativas, regulaciones y mejores prácticas para crecer.' },
  { image: 'logistics.jpg', title: 'Logística y transporte', text: 'Coordinamos cada movimiento para que tus mercancías lleguen de manera segura, puntual y eficiente.' },
  { image: 'permits.jpg', title: 'Permisos y regulaciones', text: 'Facilitamos el cumplimiento de requisitos y permisos para que tu operación avance sin fricciones.' },
  { image: 'classification.jpg', title: 'Clasificación arancelaria', text: 'Identificamos la fracción correcta para que tus productos cumplan con las normas aplicables.' },
  { image: 'audit.jpg', title: 'Auditorías y consultoría', text: 'Revisamos tus procesos de comercio exterior para detectar oportunidades y reducir riesgos.' },
  { image: 'legal.jpg', title: 'Asesoría legal y jurídica', text: 'Te acompañamos ante dudas, disputas y decisiones estratégicas en materia aduanera.' }
];

const nav = () => `
  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="${pageLink('')}" aria-label="GECOMEX, inicio"><img src="${asset('logo.png')}" alt="GECOMEX" /></a>
      <nav class="main-nav" aria-label="Navegación principal">
        <a data-nav="home" href="${pageLink('')}">Inicio</a>
        <a data-nav="exsolv" href="${pageLink('exsolv/')}">GECOMEX</a>
        <a data-nav="soluciones" href="${pageLink('soluciones/')}">Servicios</a>
        <a data-nav="blog" href="${pageLink('blog/')}">Blog</a>
        <a data-nav="contacto" href="${pageLink('contacto/')}">Contacto</a>
        <button class="search-toggle" type="button" aria-label="Abrir búsqueda" aria-expanded="false">${icon('search')}</button>
      </nav>
      <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false">${icon('menu')}</button>
    </div>
  </header>
  <div class="search-panel" aria-hidden="true">
    <form class="search-form" action="${pageLink('blog/')}" method="get">
      <input class="field" type="search" name="s" placeholder="¿Qué quieres encontrar?" aria-label="Buscar en el sitio" />
      <button class="button" type="submit">Buscar ${icon('arrow')}</button>
    </form>
  </div>`;

const footer = () => `
  <footer class="footer">
    <div class="container footer-grid">
      <div><img class="footer-logo" src="${asset('logo.png')}" alt="GECOMEX" /></div>
      <div>
        <h3>Contacto</h3>
        <p><strong>Dirección:</strong> Av. Clavería No. 237, Col. Clavería, Alcaldía Azcapotzalco, Ciudad de México, CP 02080.</p>
        <p><strong>Teléfono:</strong> <a href="tel:+525580462775">5580462775</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/525580462775" target="_blank" rel="noreferrer">Escríbenos</a></p>
        <p><a href="mailto:info@gecomex.com.mx">info@gecomex.com.mx</a></p>
        <p><a href="mailto:rafaelgelover@gecomex.com.mx">rafaelgelover@gecomex.com.mx</a></p>
      </div>
      <nav class="footer-nav" aria-label="Navegación del pie de página">
        <a href="${pageLink('')}">Inicio</a><a href="${pageLink('exsolv/')}">GECOMEX</a><a href="${pageLink('soluciones/')}">Servicios</a><a href="${pageLink('blog/')}">Blog</a><a href="${pageLink('contacto/')}">Contacto</a>
      </nav>
    </div>
    <div class="footer-bottom">© ${new Date().getFullYear()} GECOMEX · Comercio sin fronteras</div>
  </footer>
  <a class="whatsapp" href="https://wa.me/525580462775" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">${icon('whatsapp')}</a>`;

const hero = ({ image, eyebrow = 'Consultoría en comercio internacional', title, whiteTitle, copy, facts = true }) => `
  <section class="hero">
    <div class="hero-media" style="background-image:url('${asset(image)}')"></div>
    <div class="hero-inner">
      <div class="hero-copy">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}<span>${whiteTitle}</span></h1>
        <div class="hero-rule"></div>
        <p>${copy}</p>
        <div class="hero-actions"><a class="button" href="${pageLink('contacto/')}">Cotizar ahora ${icon('arrow')}</a><a class="button button--ghost" href="#contenido">Conocer más</a></div>
        ${facts ? `<div class="hero-facts"><div class="hero-fact"><strong>360°</strong><span>Soluciones integrales</span></div><div class="hero-fact"><strong>24/7</strong><span>Seguimiento experto</span></div><div class="hero-fact"><strong>+10</strong><span>Años de experiencia</span></div></div>` : ''}
      </div>
    </div>
  </section>`;

const serviceGrid = (heading = 'Nuestros servicios', intro = '') => `
  <section class="section" id="servicios">
    <div class="container">
      <div class="section-heading section-heading--center reveal"><p class="section-kicker">Lo que hacemos</p><h2>${heading}</h2>${intro ? `<p>${intro}</p>` : ''}</div>
      <div class="service-grid">${services.map((service, index) => `<article class="service-card reveal"><img src="${asset(service.image)}" alt="${service.title}" loading="lazy" /><h3>${service.title}</h3><p>${service.text}</p><a class="button" href="${pageLink('contacto/')}#cotizacion">Cotizar ${icon('arrow')}</a></article>`).join('')}</div>
    </div>
  </section>`;

const contactBlock = () => `
  <section class="section section--tight" id="cotizacion">
    <div class="container contact-block reveal">
      <div class="contact-form"><p class="section-kicker">Hablemos de tu operación</p><h2>Envíanos un mensaje</h2><div class="form-rule"></div>
        <form data-contact-form>
          <input class="field" name="name" placeholder="Nombre completo" required />
          <input class="field" name="phone" placeholder="Teléfono de contacto" required />
          <input class="field" name="email" type="email" placeholder="Correo electrónico" required />
          <input class="field" name="subject" placeholder="Asunto del mensaje" required />
          <textarea class="field" name="message" placeholder="Escribe aquí tu mensaje" required></textarea>
          <button class="button" type="submit">Solicitar una cotización ${icon('arrow')}</button>
          <p class="form-status" role="status"></p>
        </form>
      </div>
      <div class="contact-image" style="background-image:url('${asset('legal.jpg')}')" role="img" aria-label="Alianza comercial y logística"></div>
    </div>
  </section>`;

const home = () => `${hero({ image: 'trade.jpg', eyebrow: 'Consultoría especializada en', title: 'Comercio', whiteTitle: 'internacional', copy: 'Logística, importaciones, exportaciones y trámites aduanales para hacer crecer tu negocio.' })}
  <main id="contenido">
    <section class="section"><div class="container split"><div class="copy reveal"><p class="section-kicker">Tu socio estratégico</p><h2>Lleva tu negocio al mundo con GECOMEX</h2><p>En GECOMEX hacemos que el comercio internacional sea más sencillo y eficiente. Somos especialistas en logística y aduanas, con soluciones integrales para acompañarte en cada paso.</p><p>De la documentación al traslado, convertimos la complejidad operativa en una ventaja para tu empresa.</p><a class="inline-link" href="${pageLink('exsolv/')}">Conoce GECOMEX ${icon('arrow')}</a></div><div class="split-media reveal"><img src="${asset('home-automation.jpg')}" alt="Tecnología aplicada a la logística" loading="lazy" /></div></div></section>
    ${serviceGrid('Soluciones que mueven tu negocio', 'Experiencia, cumplimiento y acompañamiento para que tus mercancías lleguen a donde tienen que llegar.')}
    <div class="quote-band"><div class="container quote-band-inner"><div><h2>Soluciones aduaneras y logísticas para tu comercio internacional.</h2><p>Cuéntanos qué necesitas y diseñamos el siguiente paso.</p></div><a class="button" href="${pageLink('contacto/')}">Hablar con un experto ${icon('arrow')}</a></div></div>
    ${contactBlock()}
  </main>`;

const exsolv = () => `${hero({ image: 'logistics.jpg', eyebrow: 'Tu socio estratégico', title: 'Logística', whiteTitle: 'global', copy: 'Transformamos tus desafíos logísticos en soluciones eficientes. Confía en nosotros para llevar tus operaciones al siguiente nivel.' })}
  <main id="contenido">
    <section class="section"><div class="container split split--reverse"><div class="split-media split-media--portrait reveal"><img src="${asset('ship.jpg')}" alt="Buque transportando contenedores" loading="lazy" /></div><div class="copy reveal"><p class="section-kicker">GECOMEX</p><h2>Comercio sin fronteras</h2><p>En GECOMEX somos tu aliado estratégico en logística y aduanas internacionales. Nos especializamos en ofrecer soluciones integrales que simplifican los procesos de comercio exterior, garantizando eficiencia, seguridad y cumplimiento normativo.</p><p>Con un equipo experto y tecnología avanzada, convertimos cada reto en una oportunidad para impulsar tu negocio.</p><a class="button" href="${pageLink('contacto/')}">Contáctanos ${icon('arrow')}</a></div></div></section>
    <section class="section section--muted"><div class="container"><div class="value-grid"><article class="value-card reveal">${icon('check')}<h3>Misión</h3><p>Proveer soluciones eficientes en logística y aduanas internacionales, optimizando cada operación con innovación, confianza y servicio personalizado.</p></article><article class="value-card reveal">${icon('chart')}<h3>Visión</h3><p>Convertirnos en referentes globales en logística y aduanas, reconocidos por nuestra calidad, tecnología y compromiso con la sostenibilidad.</p></article><article class="value-card reveal">${icon('users')}<h3>Valores</h3><p>Excelencia, integridad, innovación y trabajo en equipo para cuidar cada proceso y construir relaciones duraderas.</p></article></div></div></section>
    <section class="section"><div class="container"><div class="section-heading section-heading--center reveal"><p class="section-kicker">Dónde aportamos valor</p><h2>Soluciones para industrias que crecen</h2><p>Adaptamos nuestra experiencia a los sectores clave del comercio internacional.</p></div><div class="sector-grid">${[{ image: 'sector-agro.jpg', title: 'Agroindustria', text: 'Facilitamos la exportación e importación de productos agrícolas y alimentos procesados.' }, { image: 'sector-manufacturing.jpg', title: 'Manufactura', text: 'Gestionamos la logística de maquinaria, componentes y productos terminados.' }, { image: 'sector-health.jpg', title: 'Salud y farmacéutica', text: 'Aseguramos el manejo especializado de insumos médicos y productos farmacéuticos.' }, { image: 'sector-tech.jpg', title: 'Tecnología', text: 'Coordinamos la logística de equipos electrónicos, iluminación y soluciones tecnológicas.' }].map(item => `<article class="sector-card reveal"><img src="${asset(item.image)}" alt="${item.title}" loading="lazy" /><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}</div></div></section>
    ${contactBlock()}
  </main>`;

const soluciones = () => `${hero({ image: 'trade.jpg', eyebrow: 'Servicios GECOMEX', title: 'Gestión', whiteTitle: 'aduanera', copy: 'Soluciones completas para el comercio internacional. Simplificamos procesos para que tú te enfoques en crecer.' })}
  <main id="contenido"><section class="section"><div class="container split"><div class="copy reveal"><p class="section-kicker">Logística y aduanas internacionales</p><h2>Operaciones claras, negocios en movimiento</h2><p>Contamos con amplia experiencia en despacho aduanal, importaciones, exportaciones, logística eficiente y asesoría especializada para garantizar el cumplimiento de normativas internacionales.</p><a class="button" href="${pageLink('contacto/')}">Contáctanos ${icon('arrow')}</a></div><div class="split-media reveal"><img src="${asset('home-automation.jpg')}" alt="Centro de control logístico" loading="lazy" /></div></div></section>${serviceGrid('Nuestros servicios', 'Elige el acompañamiento que tu operación necesita y déjanos cuidar los detalles.')}</main>`;

const blogPosts = [
  { image: 'blog-1.jpg', date: '04', title: 'Cómo llevar tu negocio al siguiente nivel con el comercio internacional', excerpt: 'El comercio internacional puede abrir las puertas a nuevos mercados. Conoce los primeros pasos para exportar tus productos con más claridad.', href: 'blog/articulo-comercio.html' },
  { image: 'blog-2.jpg', date: '04', title: 'Guía rápida para simplificar tus operaciones de exportación', excerpt: 'Desde la documentación hasta la logística, reunimos una guía para que tus operaciones de exportación sean mucho más sencillas.', href: 'blog/articulo-exportacion.html' }
];

const blog = () => `${hero({ image: 'trade.jpg', eyebrow: 'Ideas para crecer', title: 'Nuestro', whiteTitle: 'blog', copy: 'Consejos, tendencias y guías prácticas para triunfar en el comercio internacional.', facts: false })}
  <main id="contenido"><section class="section"><div class="container"><div class="section-heading section-heading--center reveal"><p class="section-kicker">GECOMEX comparte</p><h2>Explora nuestros blogs</h2><p>Información clara para tomar mejores decisiones en tu operación global.</p></div><div class="post-list">${blogPosts.map(post => `<article class="post reveal"><div class="post-date"><strong>${post.date}</strong><small>DIC<br />2024</small></div><img src="${asset(post.image)}" alt="${post.title}" loading="lazy" /><div class="post-content"><h3>${post.title}</h3><p>${post.excerpt}</p><a class="inline-link" href="${pageLink(post.href)}">Leer más ${icon('arrow')}</a></div></article>`).join('')}</div></div></section><div class="quote-band"><div class="container quote-band-inner"><div><h2>¿Tienes una operación en mente?</h2><p>Hablemos de cómo hacerla avanzar.</p></div><a class="button" href="${pageLink('contacto/')}">Solicitar asesoría ${icon('arrow')}</a></div></div>${contactBlock()}</main>`;

const contacto = () => `${hero({ image: 'logistics.jpg', eyebrow: 'Estamos para ayudarte', title: 'Contácta', whiteTitle: 'nos', copy: 'Expertos en logística y aduanas para acompañar tu próxima operación.', facts: false })}
  <main id="contenido"><section class="section"><div class="container"><div class="contact-cards"><article class="contact-card reveal">${icon('phone')}<h3>Llámanos</h3><p><a href="tel:+525580462775">5580462775</a><br /><br /><a href="https://wa.me/525580462775" target="_blank" rel="noreferrer">WhatsApp</a></p></article><article class="contact-card reveal">${icon('mail')}<h3>Correo</h3><p><a href="mailto:info@gecomex.com.mx">info@gecomex.com.mx</a><br /><br /><a href="mailto:rafaelgelover@gecomex.com.mx">rafaelgelover@gecomex.com.mx</a></p></article><article class="contact-card reveal">${icon('building')}<h3>Oficinas</h3><p>Av. Clavería No. 237, Col. Clavería<br />Alcaldía Azcapotzalco, CDMX<br />México. CP 02080</p></article></div></div></section>${contactBlock()}</main>`;

const article = (which) => {
  const first = which === 'article-1';
  const title = first ? 'Cómo llevar tu negocio al siguiente nivel con el comercio internacional' : 'Guía rápida para simplificar tus operaciones de exportación';
  const image = first ? 'blog-1.jpg' : 'blog-2.jpg';
  return `<main class="article" id="contenido"><div class="container article-layout"><article><p class="section-kicker">Comercio internacional · 04 diciembre, 2024</p><h1>${title}</h1><p class="article-meta">Por GECOMEX · Lectura de 4 min</p><img class="article-cover" src="${asset(image)}" alt="${title}" /><div class="article-copy">${first ? `<p>El comercio internacional es una de las estrategias más efectivas para hacer crecer un negocio y abrirse a nuevos mercados. No importa si tienes una empresa pequeña o una gran corporación: exportar tus productos puede convertirse en una oportunidad real de expansión.</p><h2>Empieza con una operación clara</h2><p>Antes de mover una mercancía, define el mercado, revisa los requisitos de entrada y construye una ruta logística que contemple tiempos, costos y documentación. Una planeación ordenada reduce riesgos y te permite tomar decisiones con información.</p><p>El acompañamiento de especialistas en aduanas y logística ayuda a que cada parte del proceso esté alineada, desde la clasificación arancelaria hasta la entrega final.</p>` : `<p>Exportar tus productos puede ser un gran paso para expandir tu negocio a mercados internacionales, pero también puede ser un proceso complejo. La buena noticia es que, con una ruta de trabajo clara, es posible simplificar cada etapa.</p><h2>Los cuatro puntos que debes revisar</h2><p>Define el producto y su mercado, prepara la documentación, confirma el cumplimiento normativo y elige una logística con seguimiento. Estos cuatro puntos te dan una base sólida para operar con menos incertidumbre.</p><p>En GECOMEX acompañamos a empresas que buscan convertir sus operaciones internacionales en procesos eficientes, medibles y sostenibles.</p>`}</div><a class="inline-link" href="${pageLink('blog/')}">Volver al blog ${icon('arrow')}</a></article><aside class="article-aside"><p class="section-kicker">GECOMEX</p><p>¿Quieres hablar de tu próxima importación o exportación?</p><a class="button" href="${pageLink('contacto/')}">Contáctanos ${icon('arrow')}</a></aside></div></main>`;
};

const pageContent = { home, exsolv, soluciones, blog, contacto };
const main = pageContent[page] ? pageContent[page]() : article(page);
app.innerHTML = `${nav()}${main}${footer()}`;

document.querySelector(`[data-nav="${page.startsWith('article') ? 'blog' : page}"]`)?.classList.add('is-active');

const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

const searchToggle = document.querySelector('.search-toggle');
const searchPanel = document.querySelector('.search-panel');
searchToggle?.addEventListener('click', () => {
  const open = searchPanel.classList.toggle('is-open');
  searchToggle.setAttribute('aria-expanded', String(open));
  searchPanel.setAttribute('aria-hidden', String(!open));
  if (open) searchPanel.querySelector('input')?.focus();
});

document.querySelectorAll('[data-contact-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const status = form.querySelector('.form-status');
    const subject = encodeURIComponent(data.get('subject') || 'Solicitud de cotización GECOMEX');
    const body = encodeURIComponent(`Nombre: ${data.get('name')}\nTeléfono: ${data.get('phone')}\nCorreo: ${data.get('email')}\n\n${data.get('message')}`);
    status.textContent = 'Abriendo tu correo para completar la solicitud…';
    window.location.href = `mailto:info@gecomex.com.mx?subject=${subject}&body=${body}`;
  });
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
