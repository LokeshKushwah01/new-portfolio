import type { MouseEvent } from 'react';

export const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'contact'];

// Scrolls to a section and shows it as a path in the URL (e.g. /projects)
export function scrollToSection(e: MouseEvent<HTMLElement>, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth' });
  const path = SECTION_IDS.includes(id) ? `/${id}` : '/';
  if (window.location.pathname !== path) {
    history.pushState(null, '', path);
  }
}
