# Pallotta Pavers & Concrete — Website

A static, multi-page website in the **Nordic** theme (warm off-white base with
slate-blue and antique-brass accents; Jost + Hanken Grotesk typography).
No build step or framework — just open the files in a browser or upload to any host.

## Pages
| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About Us |
| `why-us.html` | Why Us |
| `how-we-do-it.html` | How We Do It |
| `services.html` | Services (overview) |
| `concrete.html` | Concrete |
| `natural-stone.html` | Natural Stone |
| `interlocking-stone.html` | Interlocking Stone |
| `hardscaping.html` | Hardscaping |
| `gallery.html` | Gallery (with lightbox) |
| `contact.html` | Contact Us |

## Structure
```
pallotta-site/
├── *.html                 # all pages
├── sitemap.xml, robots.txt
└── assets/
    ├── css/styles.css     # all styling + design tokens (top of file)
    ├── js/main.js         # nav, dropdowns, FAQ, gallery lightbox, forms
    └── img/               # empty — for self-hosted images later
```

## Editing
- **Colours / fonts:** the `:root` block at the top of `assets/css/styles.css`.
- **Navigation / text:** edit the `.html` files directly. The header and footer
  markup is repeated on each page, so update them on each (or regenerate — see below).
- **Images:** the site references images in `assets/images/` using their
  original filenames. Copy the image files from the live site into that folder
  (or use the same filename) — see `assets/images/README.txt` for the exact list.

## Contact
The Contact page lists phone and email with click-to-call / click-to-email
buttons (no form).

## Notes
- Built for a Florida service area; climate copy references sun/heat/storms
  (the old "Canadian weather" wording from the previous site was removed).
- Update the phone (352-254-8891), email, and service-area text as needed.
- Replace the placeholder review names/quotes with real, attributed testimonials.
