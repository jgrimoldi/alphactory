export function slugify (title) {
  return title.toString().toLowerCase()
    .replace(/\s+/g, '-') // Reemplaza espacios con guiones
    .replace(/[^\w-]+/g, '') // Elimina caracteres especiales
    .replace(/--+/g, '-') // Reemplaza múltiples guiones con uno solo
    .replace(/^-+/, '') // Elimina guiones al principio
    .replace(/-+$/, ''); // Elimina guiones al final
}
