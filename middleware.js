// Sitio privado: Vercel ejecuta este middleware antes de cada petición
// y bloquea todas las rutas (páginas, assets y videos).
// Para volver a publicar el sitio, borra este archivo.
export default function middleware() {
  return new Response('Acceso restringido.', {
    status: 403,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow, noarchive'
    }
  });
}
