# Ntsiki's Artisan Bakehouse — Website (WEDE5020 PoE)

## Project Title
Ntsiki's Artisan Bakehouse — Small Business Website

## Student Information
- Name: Snakhokuhle Dlamini
- Module: WEDE5020
- Lecturer: Z. Wellcome
- Assessment: Formative 1 — Part 1 and Part 2

## Project Overview
A five-page brochure-style website for a fictional artisan bakery. The site introduces the bakery, showcases its products, and gives visitors two ways to get in touch: a custom cake enquiry form and a general contact form.

Part 1 covered project initiation, the approved proposal, sitemap and base HTML structure.  
Part 2 covers CSS styling for desktop, responsive design for tablet and mobile, and visual refinements.

## Website Goals and Objectives
- Establish a professional online presence for the bakery.
- Let customers browse products and pricing before visiting in person.
- Capture custom cake enquiries through a simple online form.
- Display shop location, hours and contact details clearly.

## Key Features and Functionality
- Responsive navigation menu present on every page.
- Hero banner with a clear call-to-action on the homepage.
- Product grid with categories, images and indicative pricing.
- Custom cake enquiry form with basic client-side validation.
- Contact page with an embedded map and a general contact form.
- Single external stylesheet (`css/styles.css`) linked from all pages.
- Flexbox and CSS Grid layouts.
- Media queries at tablet (`48rem` / 768px) and mobile (`37.5rem` / 600px).
- Relative units (`rem`, `%`) for typography and spacing.
- Responsive images using `srcset`, `sizes` and a `picture` element.

## Design system
- Colours: terracotta `#C96F4A`, cream `#FBF3E7`, espresso `#3B2A20`.
- Headings: Fraunces (serif).
- Body: Open Sans (sans-serif).
- Layout: sticky header, card-based features and products, single-column forms.

## Timeline and Milestones
| Milestone | Week |
|---|---|
| Proposal research and approval | Week 1 |
| Sitemap, wireframes, content sourcing | Week 2 |
| HTML structure and navigation build | Weeks 3-4 |
| Styling, content integration, testing | Weeks 5-6 |
| Final review and submission | Week 7 |

## Sitemap
```
Home (index.html)
|-- About Us (about.html)
|-- Products (products.html)
|-- Enquiry (enquiry.html)
|-- Contact (contact.html)
```

## File and folder structure
```
project-root/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    ├── hero/
    └── products/
```

Product and hero images currently load from Unsplash with `srcset` so the site works without a local image library. Replace those URLs with own photos in `images/` before the final PoE if required.

## Part 2 — CSS and responsive design notes

### External stylesheet
All five pages link to `css/styles.css`. Shared tokens live in `:root` so colour, spacing and radius can cascade without repeating selectors.

### Base style and reset
A universal box-sizing reset plus default `body` typography, line-height and background colour keep browsers consistent.

### Typography
- Headings use Fraunces with a tighter letter-spacing.
- Body uses Open Sans at `1rem` with `line-height: 1.65`.
- Font sizes step down at the tablet and mobile breakpoints.

### Layout
- Header: Flexbox, space-between, sticky.
- Features: Flexbox wrapping cards.
- Products: CSS Grid (`repeat(auto-fit, minmax(16rem, 1fr))`).
- Contact: Flexbox two-column that stacks on small screens.
- Forms: column Flexbox, max-width 38rem.

### Visual styles
Cards use white backgrounds, light box-shadow and rounded corners. Buttons and nav links use `:hover`, `:focus` and `:active`.

### Breakpoints
| Name | Query | Behaviour |
|---|---|---|
| Desktop | default | Multi-column features and products |
| Tablet | `max-width: 48rem` | Slightly smaller type and hero |
| Mobile | `max-width: 37.5rem` | Stacked header, single-column cards, tighter padding |

### Responsive images
Homepage feature cards and the products page use `srcset` + `sizes`. The About page uses a `picture` element so a smaller crop can load on narrow screens.

### Testing (do this before you submit)
Open each page in Chrome DevTools (Ctrl+Shift+I → Toggle device toolbar) and capture:

1. Desktop — 1280px or 1440px wide (homepage + products).
2. Tablet — iPad / 768px.
3. Mobile — iPhone / 375px or 390px.

Paste those screenshots into this README under **Screenshot evidence** below, or drop them in an `evidence/` folder and link them.

### Screenshot evidence

- Desktop homepage:
- Tablet products page:
- Mobile navigation / enquiry form:

## Changelog

### v0.1 — Initial commit (Part 1)
- Base HTML structure for all five pages.
- CSS and JS scaffolding.
- README with proposal summary, sitemap and file structure.

### v0.2 — Part 1 tidy-up (working through Part 1 before Part 2)
No formal written lecturer mark sheet was attached with this working folder. The following improvements were still made so Part 1 artefacts match the proposal more closely:

- Logo in the header is now a link back to `index.html` on every page.
- Current-page highlight moved from inline JS colour to an `aria-current="page"` attribute, styled in CSS.
- Footer year kept at 2026 to match the proposal documents.
- README student details and sitemap aligned with the approved bakehouse option (not the unused retail proposal).
- File names remain lowercase (`index.html`, `about.html`, `css/styles.css`, `js/main.js`).

### v0.3 — Part 2: CSS desktop solution
- Rebuilt `css/styles.css` as a single external stylesheet linked from every page.
- Added a CSS reset and `:root` design tokens (colour, spacing, radius, shadow).
- Applied typography: Fraunces headings, Open Sans body, Google Fonts linked in `<head>`.
- Desktop layout uses Flexbox (header, features, contact) and Grid (products).
- Visual styles: card shadows, terracotta buttons, espresso header/footer, focus rings on form fields.
- Interactive states: `:hover`, `:focus`, `:active` on nav links and buttons.

### v0.4 — Part 2: responsive design
- Added tablet (`48rem`) and mobile (`37.5rem`) media queries.
- Switched font sizes and spacing to `rem`; widths use `%` / flex / grid so layouts collapse cleanly.
- Mobile: header stacks, nav wraps, features and products become a single column.
- Added responsive images (`srcset`, `sizes`, `picture`) on Home, About and Products.
- `js/main.js` kept for form validation and current-page highlighting.

## How to open the site locally
1. Unzip / clone the folder.
2. Open `index.html` in a browser (double-click, or use Live Server in VS Code).
3. Click through Home → About → Products → Enquiry → Contact.

Forms will not send data anywhere (`action="#"`) — that is expected for this static Part 2 build. Validation still runs in the browser.

## References
- Mozilla Developer Network. 2026. HTML: HyperText Markup Language. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/HTML
- Mozilla Developer Network. 2026. CSS: Cascading Style Sheets. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/CSS
- Mozilla Developer Network. 2026. Using media queries. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
- Mozilla Developer Network. 2026. Responsive images. [Online]. Available: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
- W3Schools. 2026. HTML Introduction. [Online]. Available: https://www.w3schools.com/html/
- W3Schools. 2026. CSS Introduction. [Online]. Available: https://www.w3schools.com/css/
- W3Schools. 2026. CSS Flexbox. [Online]. Available: https://www.w3schools.com/css/css3_flexbox.asp
- W3Schools. 2026. CSS Grid. [Online]. Available: https://www.w3schools.com/css/css_grid.asp
- GitHub Docs. 2026. Getting Started with Git and GitHub. [Online]. Available: https://docs.github.com/en/get-started
- The Independent Institute of Education. 2026. WEDE5020 Module Guide. Johannesburg: The IIE.
- Unsplash. 2026. Bakery and bread photographs used as placeholder imagery. [Online]. Available: https://unsplash.com
