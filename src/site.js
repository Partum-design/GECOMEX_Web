const body = document.body;
const app = document.querySelector('#app');
const page = body.dataset.page || 'home';
const base = body.dataset.base || 'assets/';
const root = base.startsWith('../') ? '../' : './';
const asset = (name) => {
  const optimized = /\.jpe?g$/i.test(name) ? name.replace(/\.jpe?g$/i, '.webp') : name;
  return `${base}${optimized}`;
};
const pageLink = (name) => `${root}${name}`;
const pad = (number) => String(number).padStart(2, '0');

const icon = (name, extra = '') => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    arrowDown: '<path d="M12 5v14M6 13l6 6 6-6"/>',
    arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
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
    pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.4"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    doc: '<path d="M7 3h7l4 4v14H7V3Z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>',
    boxes: '<path d="m12 3 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 17l8 4 8-4M12 7v4M12 16v5"/>',
    whatsapp: '<path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"/><path d="M8.2 8.1c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.7c.8 1.2 1.6 1.9 2.8 2.5l.7-.6c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.3.6-.2.8-.8 1.3-1.5 1.4-1.2.1-3.4-1-4.8-2.3-1.5-1.4-2.5-3.3-2.5-4.3 0-.3.1-.6.2-.7Z"/>'
  };
  return `<svg class="${extra}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
};

const pages = [
  { key: 'home', label: 'Inicio', href: '', thumb: 'trade.jpg' },
  { key: 'exsolv', label: 'GECOMEX', href: 'exsolv/', thumb: 'ship.jpg' },
  { key: 'soluciones', label: 'Servicios', href: 'soluciones/', thumb: 'dispatch.jpg' },
  { key: 'blog', label: 'Blog', href: 'blog/', thumb: 'blog-1.jpg' },
  { key: 'contacto', label: 'Contacto', href: 'contacto/', thumb: 'legal.jpg' }
];

const services = [
  { image: 'dispatch.jpg', title: 'Despacho aduanal', text: 'Gestionamos tus trámites de importación y exportación con precisión, seguimiento y cumplimiento normativo.' },
  { image: 'advice.jpg', title: 'Asesoría en comercio internacional', text: 'Optimizamos tu operación con experiencia en normativas, regulaciones y mejores prácticas para crecer.' },
  { image: 'logistics.jpg', title: 'Logística y transporte', text: 'Coordinamos cada movimiento para que tus mercancías lleguen de manera segura, puntual y eficiente.' },
  { image: 'permits.jpg', title: 'Permisos y regulaciones', text: 'Facilitamos el cumplimiento de requisitos y permisos para que tu operación avance sin fricciones.' },
  { image: 'classification.jpg', title: 'Clasificación arancelaria', text: 'Identificamos la fracción correcta para que tus productos cumplan con las normas aplicables.' },
  { image: 'audit.jpg', title: 'Auditorías y consultoría', text: 'Revisamos tus procesos de comercio exterior para detectar oportunidades y reducir riesgos.' },
  { image: 'legal.jpg', title: 'Asesoría legal y jurídica', text: 'Te acompañamos ante dudas, disputas y decisiones estratégicas en materia aduanera.' }
];

const sectors = [
  { image: 'sector-agro.jpg', title: 'Agroindustria', text: 'Facilitamos la exportación e importación de productos agrícolas y alimentos procesados.' },
  { image: 'sector-manufacturing.jpg', title: 'Manufactura', text: 'Gestionamos la logística de maquinaria, componentes y productos terminados.' },
  { image: 'sector-health.jpg', title: 'Salud y farmacéutica', text: 'Aseguramos el manejo especializado de insumos médicos y productos farmacéuticos.' },
  { image: 'sector-tech.jpg', title: 'Tecnología', text: 'Coordinamos la logística de equipos electrónicos, iluminación y soluciones tecnológicas.' }
];


let badgeCount = 0;
const badge = (thumb, href = '#contenido', label = 'Ir al contenido', text = 'COMERCIO SIN FRONTERAS • GECOMEX • ') => {
  const id = `badge-path-${badgeCount += 1}`;
  return `<a class="badge" href="${href}" aria-label="${label}">
    <svg class="badge-ring" viewBox="0 0 120 120" aria-hidden="true"><defs><path id="${id}" d="M60 60m-47 0a47 47 0 1 1 94 0a47 47 0 1 1-94 0"/></defs><text><textPath href="#${id}" textLength="292" lengthAdjust="spacing">${text}</textPath></text></svg>
    <span class="badge-core" style="background-image:url('${asset(thumb)}')">${icon('arrowDown')}</span>
  </a>`;
};

// "02 ─── Tu socio estratégico"
const kicker = (number, text) => `<p class="kicker"><span>${number}</span><i></i>${text}</p>`;
const btn = (href, label, variant = '') => `<a class="button${variant ? ` button--${variant}` : ''}" href="${href}"><span>${label}</span><i>${icon('arrow')}</i></a>`;
const longest = (text) => Math.max(...text.split(/\s+/).map((word) => word.length));

const socialLinks = () => `
  <a href="tel:+525580462775" aria-label="Llamar al 5580462775">${icon('phone')}</a>
  <a href="https://wa.me/525580462775" target="_blank" rel="noreferrer" aria-label="WhatsApp">${icon('whatsapp')}</a>
  <a href="mailto:info@gecomex.com.mx" aria-label="Correo info@gecomex.com.mx">${icon('mail')}</a>`;

const preloader = () => `
  <div class="preloader" aria-hidden="true">
    <div class="preloader-frame"></div>
    <div class="preloader-center">
      <img src="${asset('logo-light.png')}" alt="" />
      <div class="preloader-bar"><span data-preload-bar></span></div>
      <p>Comercio sin fronteras</p>
    </div>
    <div class="preloader-count"><span data-preload-count>0</span><small>%</small></div>
    <div class="preloader-meta"><span>Logística</span><span>Aduanas</span><span>Comercio exterior</span></div>
  </div>`;

const nav = () => `
  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="${pageLink('')}" aria-label="GECOMEX, inicio"><img src="${asset('logo-light.png')}" alt="GECOMEX" width="273" height="67" /></a>
      <nav class="main-nav" aria-label="Navegación principal">
        ${pages.map((item) => `<a data-nav="${item.key}" href="${pageLink(item.href)}">${item.label}</a>`).join('')}
      </nav>
      <button class="search-toggle" type="button" aria-label="Abrir búsqueda" aria-expanded="false">${icon('search')}</button>
      <a class="nav-cta" href="${pageLink('contacto/')}#cotizacion"><span>Cotizar</span>${icon('arrow')}</a>
      <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span></button>
    </div>
  </header>
  <div class="mobile-menu" aria-hidden="true">
    <nav aria-label="Menú móvil">
      ${pages.map((item, index) => `<a data-nav="${item.key}" href="${pageLink(item.href)}"><small>${pad(index + 1)}</small>${item.label}${icon('arrowUpRight')}</a>`).join('')}
    </nav>
    <div class="mobile-menu-foot">
      ${btn(`${pageLink('contacto/')}#cotizacion`, 'Solicitar cotización')}
      <p><a href="tel:+525580462775">55 8046 2775</a><br /><a href="mailto:info@gecomex.com.mx">info@gecomex.com.mx</a></p>
      <div class="social">${socialLinks()}</div>
    </div>
  </div>
  <div class="search-panel" aria-hidden="true">
    <form class="search-form" action="${pageLink('blog/')}" method="get">
      <input class="field" type="search" name="s" placeholder="¿Qué quieres encontrar?" aria-label="Buscar en el sitio" />
      <button class="button" type="submit"><span>Buscar</span><i>${icon('arrow')}</i></button>
    </form>
  </div>`;

const footer = () => `
  <footer class="footer">
    <div class="container">
      <div class="footer-cta">
        <div>${kicker('GX', 'Hablemos hoy')}<h2>¿Listo para mover <em>tu operación?</em></h2></div>
        ${btn(`${pageLink('contacto/')}#cotizacion`, 'Solicitar cotización')}
      </div>
      <div class="footer-top">
        <div class="footer-brand"><img class="footer-logo" src="${asset('logo-light.png')}" alt="GECOMEX" /><p class="footer-tag">Consultoría especializada en comercio internacional, logística y aduanas.</p><div class="social">${socialLinks()}</div></div>
        <div class="footer-contact">
          <h3>Contacto</h3>
          <p>Av. Clavería No. 237, Col. Clavería, Alcaldía Azcapotzalco, Ciudad de México, CP 02080.</p>
          <p><a href="tel:+525580462775">55 8046 2775</a> · <a href="https://wa.me/525580462775" target="_blank" rel="noreferrer">WhatsApp</a></p>
          <p><a href="mailto:info@gecomex.com.mx">info@gecomex.com.mx</a><br /><a href="mailto:rafaelgelover@gecomex.com.mx">rafaelgelover@gecomex.com.mx</a></p>
        </div>
        <nav class="footer-nav" aria-label="Navegación del pie de página">
          <h3>Navegación</h3>
          ${pages.map((item, index) => `<a href="${pageLink(item.href)}"><small>${pad(index + 1)}</small>${item.label} ${icon('arrowUpRight')}</a>`).join('')}
        </nav>
      </div>
    </div>
    <div class="footer-mark" aria-hidden="true">GECOMEX</div>
    <div class="footer-bottom">
      <div class="container">
        <span>© ${new Date().getFullYear()} GECOMEX · Comercio sin fronteras</span>
        <span class="footer-credit">Desarrollado por <a href="https://partumdesign.com.mx" target="_blank" rel="noopener">Partum Design</a></span>
      </div>
    </div>
  </footer>
  <a class="whatsapp" href="https://wa.me/525580462775" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">${icon('whatsapp')}</a>`;

// Full-bleed media with a rounded glass frame floating over it.
const hero = ({ image, video, poster = image, eyebrow, title, whiteTitle, copy, proof = ['+10', 'años moviendo<br />mercancías'] }) => {
  const index = Math.max(0, pages.findIndex((item) => item.key === page));
  const prev = pages[(index + pages.length - 1) % pages.length];
  const next = pages[(index + 1) % pages.length];
  const media = video
    ? `<video class="hero-media" autoplay muted loop playsinline preload="auto" poster="${asset(poster)}" aria-hidden="true"><source src="${asset(video)}" type="video/mp4" /></video>`
    : `<div class="hero-media" style="background-image:url('${asset(image)}')"></div>`;
  return `
  <section class="hero">
    ${media}
    <div class="hero-tint" aria-hidden="true"></div>
    <div class="hero-frame" aria-hidden="true"></div>
    <div class="hero-inner">
      <div class="hero-top">
        <p class="eyebrow"><span></span>${eyebrow}</p>
        <span class="hero-index">${pad(index + 1)} <i></i> ${pad(pages.length)}</span>
      </div>
      <h1 class="hero-title" style="--chars:${longest(`${title} ${whiteTitle}`)}"><span class="line"><span>${title}</span></span><span class="line line--ghost"><span>${whiteTitle}</span></span></h1>
      ${badge(next.thumb, '#contenido', 'Ir al contenido', 'DESCUBRE MÁS • GECOMEX • DESCUBRE MÁS • ')}
      <div class="hero-bottom">
        <div class="hero-proof">
          <div class="proof-row">
            <div class="avatars">${['dispatch.jpg', 'logistics.jpg', 'advice.jpg'].map((thumb) => `<img src="${asset(thumb)}" alt="" />`).join('')}</div>
            <strong>${proof[0]}</strong><span>${proof[1]}</span>
          </div>
          <p class="hero-copy">${copy}</p>
          <div class="hero-actions">${btn(`${pageLink('contacto/')}#cotizacion`, 'Cotizar ahora')}<a class="button button--glass" href="#contenido"><span>Conocer más</span></a></div>
        </div>
        <div class="hero-slider">
          <div class="slider-head">
            <a href="${pageLink(prev.href)}" aria-label="Anterior: ${prev.label}">${icon('arrowLeft')}</a>
            <span><b>${pad(index + 1)}</b><i>..</i>${pad(pages.length)}</span>
            <a href="${pageLink(next.href)}" aria-label="Siguiente: ${next.label}">${icon('arrow')}</a>
          </div>
          <a class="slider-card" href="${pageLink(next.href)}"><img src="${asset(next.thumb)}" alt="" /><span><small>Siguiente</small>${next.label}</span></a>
        </div>
      </div>
      <nav class="hero-dots" aria-label="Páginas del sitio">${pages.map((item, i) => `<a href="${pageLink(item.href)}" aria-label="${item.label}"${i === index ? ' aria-current="page"' : ''}></a>`).join('')}</nav>
    </div>
    <div class="hero-social">${socialLinks()}</div>
  </section>`;
};

// Photo card: big word sits behind a frosted panel, so it reads blurred on one side and sharp on the other.
const split = ({ image, number = '02', label, heading, paragraphs, action, word = 'GLOBAL', side = 'ADUANAS' }) => `
  <section class="section section--night">
    <div class="container">
      <div class="split reveal">
        <div class="split-bg" style="background-image:url('${asset(image)}')"></div>
        <div class="split-word" aria-hidden="true">${word}</div>
        <div class="split-panel">
          ${kicker(number, label)}
          <h2>${heading}</h2>
          ${paragraphs.map((text) => `<p>${text}</p>`).join('')}
          ${action}
        </div>
        <div class="split-side" aria-hidden="true"><span>${side}</span></div>
      </div>
    </div>
  </section>`;

const impact = ({ image, number = '03', label = 'Impacto medible', heading, text }) => `
  <section class="section section--night section--tight">
    <div class="container">
      <div class="impact reveal">
        <div class="impact-bg" style="background-image:url('${asset(image)}')" aria-hidden="true"></div>
        <div class="impact-meta">${kicker(number, label)}<span>gecomex.com.mx</span></div>
        <div class="impact-top"><h2>${heading}</h2><p>${text}</p></div>
        <div class="impact-strip">
          <div class="strip-block strip-block--blue"><strong data-count="10" data-prefix="+">+10</strong><div><h3>Años de experiencia</h3><p>Acompañando importaciones y exportaciones de empresas mexicanas.</p></div></div>
          <div class="strip-block strip-block--steel"><strong data-count="7">7</strong><div><h3>Servicios especializados</h3><p>Del despacho aduanal a la asesoría legal, en un mismo equipo.</p></div></div>
        </div>
      </div>
    </div>
  </section>`;

const marquee = (items = services.map((service) => service.title)) => `
  <div class="marquee" aria-hidden="true"><div class="marquee-track">${[0, 1].map(() => `<span>${items.map((item) => `${item}<i>✦</i>`).join('')}</span>`).join('')}</div></div>`;

const serviceRail = (heading, intro = '', number = '04') => `
  <section class="section section--night" id="servicios">
    <div class="container rail-head reveal">
      <div>${kicker(number, 'Lo que hacemos')}<h2>${heading}</h2></div>
      <div class="rail-aside">
        ${intro ? `<p>${intro}</p>` : ''}
        <div class="rail-controls"><button class="square-btn" type="button" data-rail-prev aria-label="Servicio anterior">${icon('arrowLeft')}</button><span class="rail-count"><strong data-rail-current>01</strong>/${pad(services.length)}</span><button class="square-btn" type="button" data-rail-next aria-label="Servicio siguiente">${icon('arrow')}</button></div>
      </div>
    </div>
    <div class="rail" data-rail tabindex="0" aria-label="Servicios">
      ${services.map((service, index) => `<article class="svc"><img src="${asset(service.image)}" alt="${service.title}" loading="lazy" /><span class="svc-tag">GECOMEX</span><div class="svc-body"><span class="svc-num">Parte <b>${pad(index + 1)}</b></span><h3>${service.title}</h3><i class="svc-bar"></i><p>${service.text}</p><a class="svc-link" href="${pageLink('contacto/')}#cotizacion">Cotizar ${icon('arrowUpRight')}</a></div></article>`).join('')}
    </div>
    <div class="container"><div class="rail-progress"><span data-rail-bar></span></div></div>
  </section>`;

const band = ({ image, heading, text, cta, word = 'MÉXICO' }) => `
  <section class="band">
    <div class="band-bg" style="background-image:url('${asset(image)}')"></div>
    <div class="container">
      <div class="band-glass reveal">
        <div class="band-word" aria-hidden="true">${word}</div>
        <div class="band-copy"><h2>${heading}</h2></div>
        <div class="band-side"><p>${text}</p>${btn(pageLink('contacto/'), cta, 'white')}</div>
      </div>
    </div>
  </section>`;

const contactBlock = (number = '05') => `
  <section class="section section--steel" id="cotizacion">
    <div class="container contact-block reveal">
      <div class="contact-form">${kicker(number, 'Hablemos de tu operación')}<h2>Envíanos un <em>mensaje</em></h2>
        <form data-contact-form>
          <label><span>Nombre</span><input class="field" name="name" placeholder="Nombre completo" required /></label>
          <label><span>Teléfono</span><input class="field" name="phone" placeholder="55 0000 0000" required /></label>
          <label class="wide"><span>Correo</span><input class="field" name="email" type="email" placeholder="tu@empresa.com" required /></label>
          <label class="wide"><span>Asunto</span><input class="field" name="subject" placeholder="Importación, exportación, despacho…" required /></label>
          <label class="wide"><span>Mensaje</span><textarea class="field" name="message" placeholder="Cuéntanos sobre tu operación" required></textarea></label>
          <button class="button" type="submit"><span>Solicitar cotización</span><i>${icon('arrow')}</i></button>
          <p class="form-status" role="status"></p>
        </form>
      </div>
      <div class="contact-visual" role="img" aria-label="Terminal portuaria con contenedores">
        <div class="contact-visual-bg" style="background-image:url('${asset('hero-port.webp')}')"></div>
        <div class="contact-visual-title" aria-hidden="true">Comercio<br /><span>sin fronteras</span></div>
        ${badge('ship.jpg', '#cotizacion', 'Formulario de cotización')}
        <div class="contact-chip"><strong>24/7</strong><span>Seguimiento experto en cada operación</span></div>
      </div>
    </div>
  </section>`;

const steps = [
  { icon: 'search', title: 'Diagnóstico', text: 'Analizamos tu mercancía, origen, destino y requisitos para trazar la mejor ruta.' },
  { icon: 'doc', title: 'Documentación', text: 'Preparamos pedimentos, permisos y clasificación arancelaria sin errores.' },
  { icon: 'shield', title: 'Despacho', text: 'Gestionamos el cruce aduanal con cumplimiento normativo y seguimiento.' },
  { icon: 'ship', title: 'Entrega', text: 'Coordinamos el traslado hasta su destino final con visibilidad total.' }
];

const process = (number) => `
  <section class="section section--steel">
    <div class="container">
      <div class="section-head reveal"><div>${kicker(number, 'Cómo trabajamos')}<h2>Un proceso <em>sin fricciones</em></h2></div><p>Cuatro etapas claras para que tu mercancía avance con certeza desde el primer día.</p></div>
      <div class="steps">${steps.map((step, index) => `<article class="step reveal"><span class="step-num">${pad(index + 1)}</span><span class="step-icon">${icon(step.icon)}</span><h3>${step.title}</h3><p>${step.text}</p></article>`).join('')}</div>
    </div>
  </section>`;

const home = () => `${hero({ image: 'hero-port.webp', video: 'videos/supply-chain.mp4', poster: 'hero-port.webp', eyebrow: 'Consultoría especializada', title: 'Comercio', whiteTitle: 'Internacional', copy: 'Logística, importaciones, exportaciones y trámites aduanales para hacer crecer tu negocio con seguridad.' })}
  <main id="contenido">
    ${split({ image: 'hero-port.webp', label: 'Tu socio estratégico', heading: 'Lleva tu negocio <em>al mundo</em>', word: 'GLOBAL', side: 'ADUANAS', paragraphs: ['En GECOMEX hacemos que el comercio internacional sea más sencillo y eficiente. Somos especialistas en logística y aduanas, con soluciones integrales para acompañarte en cada paso.', 'De la documentación al traslado, convertimos la complejidad operativa en una ventaja para tu empresa.'], action: btn(pageLink('exsolv/'), 'Conoce GECOMEX', 'white') })}
    ${impact({ image: 'ship.jpg', heading: 'Probados. Confiables. <em>Escalables.</em>', text: 'Resultados reales que impulsan la eficiencia, la confianza y el crecimiento global de tu empresa.' })}
    ${marquee()}
    ${serviceRail('Soluciones que <em>mueven</em> tu negocio', 'Experiencia, cumplimiento y acompañamiento para que tus mercancías lleguen a donde tienen que llegar.')}
    ${band({ image: 'hero-port.webp', heading: 'Soluciones aduaneras y logísticas para tu comercio internacional.', text: 'Cuéntanos qué necesitas y diseñamos el siguiente paso.', cta: 'Hablar con un experto' })}
    ${contactBlock()}
  </main>`;

const values = [
  { title: 'Misión', text: 'Proveer soluciones eficientes en logística y aduanas internacionales, optimizando cada operación con innovación, confianza y servicio personalizado.', height: 64 },
  { title: 'Visión', text: 'Convertirnos en referentes globales en logística y aduanas, reconocidos por nuestra calidad, tecnología y compromiso con la sostenibilidad.', height: 80 },
  { title: 'Valores', text: 'Excelencia, integridad, innovación y trabajo en equipo para cuidar cada proceso y construir relaciones duraderas.', height: 96 }
];

const exsolv = () => `${hero({ image: 'ship.jpg', eyebrow: 'Tu socio estratégico', title: 'Logística', whiteTitle: 'Global', copy: 'Transformamos tus desafíos logísticos en soluciones eficientes. Confía en nosotros para llevar tus operaciones al siguiente nivel.', proof: ['360°', 'soluciones<br />integrales'] })}
  <main id="contenido">
    ${split({ image: 'ship.jpg', label: 'Quiénes somos', heading: 'Comercio <em>sin fronteras</em>', word: 'GECOMEX', side: 'LOGÍSTICA', paragraphs: ['En GECOMEX somos tu aliado estratégico en logística y aduanas internacionales. Nos especializamos en soluciones integrales que simplifican los procesos de comercio exterior, garantizando eficiencia, seguridad y cumplimiento normativo.', 'Con un equipo experto y tecnología avanzada, convertimos cada reto en una oportunidad para impulsar tu negocio.'], action: btn(pageLink('contacto/'), 'Contáctanos', 'white') })}
    <section class="section section--steel"><div class="container">
      <div class="bars reveal">
        <div class="bars-intro">${kicker('03', 'Nuestra esencia')}<h2>Construidos para <em>crecer contigo</em></h2><p>Una forma de trabajar que pone orden, claridad y resultados en cada operación de comercio exterior.</p></div>
        <div class="bars-cols">${values.map((item, index) => `<article class="bar${index === values.length - 1 ? ' bar--blue' : ''}" style="--h:${item.height}%"><div class="bar-fill"><div class="bar-head"><span class="bar-num">${pad(index + 1)}</span><h3>${item.title}</h3></div><p>${item.text}</p></div></article>`).join('')}</div>
      </div>
    </div></section>
    ${impact({ image: 'hero-port.webp', number: '04', heading: 'Experiencia <em>que se mide.</em>', text: 'Cada operación suma a una red de clientes que confían en nuestra precisión y cumplimiento.' })}
    <section class="section section--night"><div class="container">
      <div class="section-head reveal"><div>${kicker('05', 'Dónde aportamos valor')}<h2>Industrias <em>que crecen</em></h2></div><p>Adaptamos nuestra experiencia a los sectores clave del comercio internacional.</p></div>
      <div class="sectors reveal">${sectors.map((item, index) => `<article class="sector" tabindex="0"><img src="${asset(item.image)}" alt="${item.title}" loading="lazy" /><div class="sector-body"><span class="svc-num">Sector <b>${pad(index + 1)}</b></span><h3>${item.title}</h3><i class="svc-bar"></i><p>${item.text}</p></div></article>`).join('')}</div>
    </div></section>
    ${contactBlock('06')}
  </main>`;

const soluciones = () => `${hero({ image: 'hero-port.webp', video: 'videos/aerial-terminal.mp4', poster: 'hero-port.webp', eyebrow: 'Servicios GECOMEX', title: 'Gestión', whiteTitle: 'Aduanera', copy: 'Soluciones completas para el comercio internacional. Simplificamos procesos para que tú te enfoques en crecer.', proof: ['7', 'servicios<br />especializados'] })}
  <main id="contenido">
    ${split({ image: 'dispatch.jpg', label: 'Logística y aduanas internacionales', heading: 'Operaciones claras, <em>negocios en movimiento</em>', word: 'SERVICIOS', side: 'ADUANAS', paragraphs: ['Contamos con amplia experiencia en despacho aduanal, importaciones, exportaciones, logística eficiente y asesoría especializada para garantizar el cumplimiento de normativas internacionales.'], action: btn(pageLink('contacto/'), 'Contáctanos', 'white') })}
    ${marquee()}
    ${serviceRail('Nuestros <em>servicios</em>', 'Elige el acompañamiento que tu operación necesita y déjanos cuidar los detalles.', '03')}
    ${process('04')}
    ${band({ image: 'logistics.jpg', heading: 'Tu carga, en manos expertas.', text: 'Diseñamos una solución a la medida de tu operación.', cta: 'Solicitar asesoría', word: 'ADUANAS' })}
    ${contactBlock('05')}
  </main>`;

const blogPosts = [
  { image: 'blog-1.jpg', date: '04', title: 'Cómo llevar tu negocio al siguiente nivel con el comercio internacional', excerpt: 'El comercio internacional puede abrir las puertas a nuevos mercados. Conoce los primeros pasos para exportar tus productos con más claridad.', href: 'blog/articulo-comercio.html' },
  { image: 'blog-2.jpg', date: '04', title: 'Guía rápida para simplificar tus operaciones de exportación', excerpt: 'Desde la documentación hasta la logística, reunimos una guía para que tus operaciones de exportación sean mucho más sencillas.', href: 'blog/articulo-exportacion.html' }
];

const blog = () => `${hero({ image: 'blog-1.jpg', eyebrow: 'Ideas para crecer', title: 'Nuestro', whiteTitle: 'Blog', copy: 'Consejos, tendencias y guías prácticas para triunfar en el comercio internacional.', proof: [pad(blogPosts.length), 'guías<br />publicadas'] })}
  <main id="contenido">
    <section class="section section--night"><div class="container">
      <div class="section-head reveal"><div>${kicker('02', 'GECOMEX comparte')}<h2>Explora <em>nuestros blogs</em></h2></div><p>Información clara para tomar mejores decisiones en tu operación global.</p></div>
      <div class="post-list">${blogPosts.map((post, index) => `<article class="post reveal"><img class="post-img" src="${asset(post.image)}" alt="" loading="lazy" /><span class="post-date"><strong>${post.date}</strong><small>DIC<br />2024</small></span><div class="post-glass"><span class="svc-num">Artículo <b>${pad(index + 1)}</b></span><h3><a href="${pageLink(post.href)}">${post.title}</a></h3><p>${post.excerpt}</p><span class="post-more">Leer artículo ${icon('arrowUpRight')}</span></div></article>`).join('')}</div>
    </div></section>
    ${band({ image: 'hero-port.webp', heading: '¿Tienes una operación en mente?', text: 'Hablemos de cómo hacerla avanzar.', cta: 'Solicitar asesoría', word: 'IDEAS' })}
    ${contactBlock('03')}
  </main>`;

const contacto = () => `${hero({ image: 'hero-port.webp', video: 'videos/worker.mp4', poster: 'hero-port.webp', eyebrow: 'Estamos para ayudarte', title: 'Hablemos', whiteTitle: 'Hoy', copy: 'Expertos en logística y aduanas para acompañar tu próxima operación.', proof: ['24/7', 'seguimiento<br />experto'] })}
  <main id="contenido">
    <section class="section section--night"><div class="container">
      <div class="section-head reveal"><div>${kicker('02', 'Canales directos')}<h2>Siempre <em>cerca de ti</em></h2></div><p>Elige el medio que prefieras: respondemos rápido y con información clara.</p></div>
      <div class="contact-cards">
        <article class="contact-card reveal"><span class="contact-num">01</span><span class="contact-icon">${icon('phone')}</span><h3>Llámanos</h3><p><a href="tel:+525580462775">55 8046 2775</a><br /><a href="https://wa.me/525580462775" target="_blank" rel="noreferrer">WhatsApp directo</a></p></article>
        <article class="contact-card reveal"><span class="contact-num">02</span><span class="contact-icon">${icon('mail')}</span><h3>Correo</h3><p><a href="mailto:info@gecomex.com.mx">info@gecomex.com.mx</a><br /><a href="mailto:rafaelgelover@gecomex.com.mx">rafaelgelover@gecomex.com.mx</a></p></article>
        <article class="contact-card reveal"><span class="contact-num">03</span><span class="contact-icon">${icon('pin')}</span><h3>Oficinas</h3><p>Av. Clavería No. 237, Col. Clavería<br />Azcapotzalco, CDMX · CP 02080</p><a class="contact-map" href="https://www.google.com/maps/search/?api=1&query=Av.+Claver%C3%ADa+237+Azcapotzalco+CDMX" target="_blank" rel="noreferrer">Cómo llegar ${icon('arrowUpRight')}</a></article>
      </div>
    </div></section>
    ${contactBlock('03')}
  </main>`;

const article = (which) => {
  const first = which === 'article-1';
  const title = first ? 'Cómo llevar tu negocio al siguiente nivel con el comercio internacional' : 'Guía rápida para simplificar tus operaciones de exportación';
  const image = first ? 'blog-1.jpg' : 'blog-2.jpg';
  const other = blogPosts[first ? 1 : 0];
  return `<main class="article" id="contenido">
    <header class="article-hero">
      <div class="article-hero-bg" style="background-image:url('${asset(image)}')"></div>
      <div class="hero-frame" aria-hidden="true"></div>
      <div class="container article-hero-inner">
        <a class="article-back" href="${pageLink('blog/')}">${icon('arrowLeft')} Volver al blog</a>
        ${kicker(first ? '01' : '02', 'Comercio internacional')}
        <h1>${title}</h1>
        <div class="article-meta"><span>${icon('clock')} Lectura de 4 min</span><span>04 diciembre, 2024</span><span>Por GECOMEX</span></div>
      </div>
    </header>
    <div class="article-body"><div class="container article-layout"><article><img class="article-cover" src="${asset(image)}" alt="${title}" /><div class="article-copy">${first ? `<p class="lead">El comercio internacional es una de las estrategias más efectivas para hacer crecer un negocio y abrirse a nuevos mercados. No importa si tienes una empresa pequeña o una gran corporación: exportar tus productos puede convertirse en una oportunidad real de expansión.</p><h2>Empieza con una operación clara</h2><p>Antes de mover una mercancía, define el mercado, revisa los requisitos de entrada y construye una ruta logística que contemple tiempos, costos y documentación. Una planeación ordenada reduce riesgos y te permite tomar decisiones con información.</p><blockquote>Una planeación ordenada reduce riesgos y te permite tomar decisiones con información.</blockquote><p>El acompañamiento de especialistas en aduanas y logística ayuda a que cada parte del proceso esté alineada, desde la clasificación arancelaria hasta la entrega final.</p>` : `<p class="lead">Exportar tus productos puede ser un gran paso para expandir tu negocio a mercados internacionales, pero también puede ser un proceso complejo. La buena noticia es que, con una ruta de trabajo clara, es posible simplificar cada etapa.</p><h2>Los cuatro puntos que debes revisar</h2><p>Define el producto y su mercado, prepara la documentación, confirma el cumplimiento normativo y elige una logística con seguimiento. Estos cuatro puntos te dan una base sólida para operar con menos incertidumbre.</p><blockquote>Producto, documentación, cumplimiento y logística: la base de toda exportación exitosa.</blockquote><p>En GECOMEX acompañamos a empresas que buscan convertir sus operaciones internacionales en procesos eficientes, medibles y sostenibles.</p>`}</div>
      <a class="article-next" href="${pageLink(other.href)}"><img src="${asset(other.image)}" alt="" loading="lazy" /><span><small>Siguiente artículo</small>${other.title}</span>${icon('arrowUpRight')}</a>
    </article><aside class="article-aside"><div class="article-aside-bg" style="background-image:url('${asset('hero-port.webp')}')"></div>${kicker('GX', 'GECOMEX')}<p>¿Quieres hablar de tu próxima importación o exportación?</p>${btn(`${pageLink('contacto/')}#cotizacion`, 'Contáctanos', 'white')}</aside></div></div>
  </main>`;
};

const pageContent = { home, exsolv, soluciones, blog, contacto };
const main = pageContent[page] ? pageContent[page]() : article(page);
app.innerHTML = `${preloader()}${nav()}${main}${footer()}`;
if (!document.querySelector('.hero')) body.classList.add('no-hero');

document.querySelectorAll(`[data-nav="${page.startsWith('article') ? 'blog' : page}"]`).forEach((link) => link.classList.add('is-active'));

/* Preloader: counts up while assets load, then lifts like a curtain. */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
body.classList.add('is-loading');
{
  const bar = document.querySelector('[data-preload-bar]');
  const count = document.querySelector('[data-preload-count]');
  const started = performance.now();
  const minTime = reduceMotion ? 0 : 1100;
  let progress = 0;
  let loaded = document.readyState === 'complete';
  const finish = () => {
    body.classList.remove('is-loading');
    body.classList.add('is-loaded');
    setTimeout(() => document.querySelector('.preloader')?.remove(), 1400);
  };
  const tick = (now) => {
    const elapsed = now - started;
    const target = loaded && elapsed > minTime ? 100 : Math.min(92, (elapsed / (minTime || 1)) * 88);
    progress += (target - progress) * 0.12;
    if (target === 100 && progress > 99.4) progress = 100;
    bar.style.transform = `scaleX(${progress / 100})`;
    count.textContent = Math.round(progress);
    if (progress < 100) requestAnimationFrame(tick);
    else setTimeout(finish, 150);
  };
  window.addEventListener('load', () => { loaded = true; });
  setTimeout(() => { loaded = true; }, 3500);
  requestAnimationFrame(tick);
}

const header = document.querySelector('.site-header');
const onScroll = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 40);
  body.classList.toggle('show-float', window.scrollY > window.innerHeight * 0.6);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const setMenu = (open) => {
  mobileMenu.classList.toggle('is-open', open);
  header.classList.toggle('menu-open', open);
  body.classList.toggle('menu-lock', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  mobileMenu.setAttribute('aria-hidden', String(!open));
};
menuButton?.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('is-open')));
mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
window.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });

const searchToggle = document.querySelector('.search-toggle');
const searchPanel = document.querySelector('.search-panel');
searchToggle?.addEventListener('click', () => {
  const open = searchPanel.classList.toggle('is-open');
  searchToggle.setAttribute('aria-expanded', String(open));
  searchPanel.setAttribute('aria-hidden', String(!open));
  if (open) searchPanel.querySelector('input')?.focus();
});

document.querySelectorAll('[data-rail]').forEach((rail) => {
  const section = rail.closest('section');
  const current = section.querySelector('[data-rail-current]');
  const bar = section.querySelector('[data-rail-bar]');
  const cards = [...rail.children];
  const step = () => cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(rail).columnGap || 0);
  const update = () => {
    const max = rail.scrollWidth - rail.clientWidth;
    const progress = max > 0 ? rail.scrollLeft / max : 1;
    const index = max > 0 ? Math.round(progress * (cards.length - 1)) : 0;
    current.textContent = pad(index + 1);
    bar.style.width = `${Math.max(100 / cards.length, progress * 100)}%`;
  };
  section.querySelector('[data-rail-prev]').addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
  section.querySelector('[data-rail-next]').addEventListener('click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }));
  rail.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});

document.querySelectorAll('[data-contact-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const status = form.querySelector('.form-status');
    const subject = encodeURIComponent(data.get('subject') || 'Solicitud de cotización GECOMEX');
    const text = encodeURIComponent(`Nombre: ${data.get('name')}\nTeléfono: ${data.get('phone')}\nCorreo: ${data.get('email')}\n\n${data.get('message')}`);
    status.textContent = 'Abriendo tu correo para completar la solicitud…';
    window.location.href = `mailto:info@gecomex.com.mx?subject=${subject}&body=${text}`;
  });
});

const countUp = (element) => {
  const target = Number(element.dataset.count);
  const prefix = element.dataset.prefix || '';
  if (reduceMotion) return;
  const start = performance.now();
  const frame = (now) => {
    const t = Math.min(1, (now - start) / 1400);
    element.textContent = `${prefix}${Math.round(target * (1 - (1 - t) ** 3))}`;
    if (t < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
};

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add('is-visible');
  entry.target.querySelectorAll('[data-count]').forEach(countUp);
  observer.unobserve(entry.target);
}), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
