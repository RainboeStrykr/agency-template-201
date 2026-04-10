# Bantu Agency

A modern, responsive agency website for **Bantu** — a digital agency offering Web Development, UI/UX Design, Branding, and Shopify services.

![screenshot](/public/walkthrough-video.gif)

## Pages

- **Home** (`index.html`) — Hero section, services overview, portfolio showcase, client logos, and testimonials
- **About** (`about.html`) — Team introduction, company story, and key stats
- **Contact** (`contact.html`) — Contact form with service selection and project details

## Tech Stack

- [Vite](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
- [Lenis](https://github.com/studio-freight/lenis) — smooth scrolling
- [AOS](https://michaelosthege.github.io/aos/) — scroll-based animations
- [Swiper](https://swiperjs.com/) — touch slider for testimonials
- [Boxicons](https://boxicons.com/) & [Font Awesome](https://fontawesome.com/) — icons

## Project Structure

```
/
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── src/
│   ├── css/            # Stylesheets (Tailwind + custom)
│   └── js/             # JavaScript modules
├── assets/             # Images and fonts
└── public/             # Static SVG assets served at root
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```
