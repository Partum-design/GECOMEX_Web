// Sitio privado: Vercel ejecuta este middleware antes de cada petición.
// Solo deja pasar los archivos de /blocked/ (captura difuminada, logo y favicon)
// y a todo lo demás responde con la página de "sitio bloqueado".
// Para volver a publicar el sitio, borra este archivo.

const BLOCKED_PAGE = `<!doctype html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow, noarchive" />
  <title>GECOMEX | Sitio bloqueado</title>
  <link rel="icon" href="/blocked/favicon.png" type="image/png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,600..900&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #05080f;
      --white: #ffffff;
      --steel: #d5dbe5;
      --mute: #8d99b1;
      --blue: #1f55ff;
      --sky: #8fc4ff;
      --amber: #ffb938;
      --display: 'Archivo', 'Arial Narrow', sans-serif;
      --sans: 'Manrope', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; }
    body {
      min-height: 100vh;
      min-height: 100dvh;
      background: var(--bg);
      color: var(--white);
      font-family: var(--sans);
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* La web de fondo (captura), difuminada y oscurecida */
    .backdrop {
      position: fixed;
      inset: -40px;
      background: url('/blocked/bg-desktop.webp') center / cover no-repeat;
      filter: blur(4px) saturate(1.15);
      transform: scale(1.03);
      animation: drift 24s ease-in-out infinite alternate;
    }
    @media (max-width: 700px) {
      .backdrop { background-image: url('/blocked/bg-mobile.webp'); }
    }
    .veil {
      position: fixed;
      inset: 0;
      background:
        radial-gradient(ellipse at center, rgba(5, 8, 15, .25) 0%, rgba(5, 8, 15, .6) 85%),
        linear-gradient(180deg, rgba(16, 33, 74, .2), rgba(5, 8, 15, .35));
    }
    /* Franjas diagonales tipo "cinta de restricción" */
    .tape {
      position: fixed;
      left: -10%;
      width: 120%;
      height: 46px;
      display: flex;
      align-items: center;
      gap: 40px;
      white-space: nowrap;
      background: repeating-linear-gradient(-45deg, var(--amber) 0 22px, #111 22px 44px);
      box-shadow: 0 10px 40px rgba(0, 0, 0, .45);
      opacity: .9;
    }
    .tape span {
      font-family: var(--display);
      font-weight: 900;
      font-stretch: 75%;
      font-size: 18px;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: #111;
      background: var(--amber);
      padding: 4px 14px;
    }
    .tape--a { top: 12%; transform: rotate(-6deg); }
    .tape--b { bottom: 10%; transform: rotate(5deg); }

    main {
      position: relative;
      z-index: 2;
      min-height: 100vh;
      min-height: 100dvh;
      display: grid;
      place-items: center;
      padding: 24px 16px;
    }
    .card {
      width: min(560px, 100%);
      padding: clamp(32px, 6vw, 52px) clamp(24px, 5vw, 48px);
      text-align: center;
      border-radius: 28px;
      background: rgba(10, 18, 34, .5);
      border: 1px solid rgba(255, 255, 255, .16);
      backdrop-filter: blur(18px) saturate(1.3);
      -webkit-backdrop-filter: blur(18px) saturate(1.3);
      box-shadow: 0 30px 80px rgba(0, 0, 0, .5), inset 0 1px 0 rgba(255, 255, 255, .12);
      animation: rise .9s cubic-bezier(.2, .75, .2, 1) both;
    }
    .logo { height: 34px; width: auto; opacity: .95; }
    .lock {
      width: 84px;
      height: 84px;
      margin: 28px auto 22px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, #4a7bff, var(--blue) 60%, #1440d0);
      box-shadow: 0 0 0 10px rgba(31, 85, 255, .16), 0 0 0 22px rgba(31, 85, 255, .07), 0 18px 40px rgba(31, 85, 255, .45);
      animation: pulse 3s ease-in-out infinite;
    }
    .lock svg { width: 36px; height: 36px; }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 14px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 600;
      color: var(--amber);
      background: rgba(255, 185, 56, .1);
      border: 1px solid rgba(255, 185, 56, .35);
    }
    .badge i {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--amber);
      box-shadow: 0 0 10px var(--amber);
    }
    h1 {
      margin-top: 18px;
      font-family: var(--display);
      font-weight: 900;
      font-stretch: 75%;
      font-size: clamp(40px, 9vw, 64px);
      line-height: .92;
      text-transform: uppercase;
      letter-spacing: -.01em;
    }
    h1 span {
      display: block;
      background: linear-gradient(180deg, #fff, var(--sky));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    p {
      margin: 18px auto 0;
      max-width: 40ch;
      font-size: 16px;
      line-height: 1.6;
      color: var(--steel);
    }
    .meta {
      margin-top: 28px;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, .12);
      font-size: 12px;
      letter-spacing: .14em;
      text-transform: uppercase;
      color: var(--mute);
    }

    @keyframes drift { to { transform: scale(1.08) translate(-12px, -8px); } }
    @keyframes rise { from { opacity: 0; transform: translateY(24px) scale(.98); } }
    @keyframes pulse { 50% { box-shadow: 0 0 0 14px rgba(31, 85, 255, .2), 0 0 0 30px rgba(31, 85, 255, .05), 0 18px 40px rgba(31, 85, 255, .45); } }
    @media (prefers-reduced-motion: reduce) {
      .backdrop, .card, .lock { animation: none; }
    }
    @media (max-width: 700px) {
      .tape { height: 36px; }
      .tape span { font-size: 14px; }
    }
  </style>
</head>
<body>
  <div class="backdrop" aria-hidden="true"></div>
  <div class="veil" aria-hidden="true"></div>
  <div class="tape tape--a" aria-hidden="true">${'<span>Acceso restringido</span>'.repeat(10)}</div>
  <div class="tape tape--b" aria-hidden="true">${'<span>Sitio bloqueado</span>'.repeat(10)}</div>

  <main>
    <section class="card">
      <img class="logo" src="/blocked/logo-light.png" alt="GECOMEX" />
      <div class="lock" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="11" width="16" height="10" rx="2.5" />
          <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
          <circle cx="12" cy="16" r="1.2" fill="#fff" />
        </svg>
      </div>
      <span class="badge"><i></i>Error 403 · Acceso denegado</span>
      <h1>Este sitio<span>ha sido bloqueado</span></h1>
      <p>El acceso a este sitio web está restringido en este momento. Su contenido no está disponible para visualización pública.</p>
      <div class="meta">GECOMEX · Comercio sin fronteras</div>
    </section>
  </main>
</body>
</html>`;

export default function middleware(request) {
  const { pathname } = new URL(request.url);

  // Recursos de la propia página de bloqueo
  if (pathname.startsWith('/blocked/')) return;

  return new Response(BLOCKED_PAGE, {
    status: 403,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow, noarchive'
    }
  });
}
