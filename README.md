# Aaradhya Enertech Industries — Official Website

[![Live Website](https://img.shields.io/badge/Live-aaradhyaenertech.com-0284c7?style=flat-square&logo=googlechrome&logoColor=white)](https://www.aaradhyaenertech.com)
[![Deployment](https://img.shields.io/badge/Hosted_on-Vercel-black?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![Compliance](https://img.shields.io/badge/Standards-ISO_9001%3A2015_%7C_BIS_IS_1180-16a34a?style=flat-square)](https://www.aaradhyaenertech.com)
[![Inquiries](https://img.shields.io/badge/Backend-Google_Sheets_API-ea4335?style=flat-square&logo=googlesheets&logoColor=white)](https://script.google.com)

Official source code and technical documentation for **Aaradhya Enertech Industries** ([https://www.aaradhyaenertech.com](https://www.aaradhyaenertech.com)), a premier manufacturer of precision CRGO electrical steel cut laminations, core frame assemblies, slit coils, and power & distribution transformers up to 20 MVA and 33 kV class in Jaipur, Rajasthan, India.

---

## 1. Quick Business Facts

- **Entity Name:** Aaradhya Enertech Industries (Partnership Firm)
- **GSTIN:** `08ACOFA2768P1ZS`
- **Plant & Registered Office:** Plot No. 96A, Ramesh Vihar, Benad Road, Jhotwara, Jaipur, Rajasthan – 302012, India
- **Official Contact Phone / WhatsApp:** `+91-7976422576`
- **Official Inquiries Email:** `aaradhyaenertech2404@gmail.com`
- **Industry Certifications:** ISO 9001:2015, ISO 14001, ISO 45001, BIS Compliant (IS 1180 / IS 2026 / IEC 60076), MSME / Udyam Registered

---

## 2. Tech Stack & Architecture

- **Frontend Core:** Semantic HTML5, CSS3 (Custom Variables, Flexbox, CSS Grid), Vanilla JavaScript (ES6+).
- **Design System:** Custom industrial high-contrast palette — Royal Blue (`#2563EB`), Deep Navy (`#0F172A`), and Emerald Green (`#10B981`).
- **Typography:** `Plus Jakarta Sans` (Headings & UI elements) and `Inter` (Body copy) loaded via Google Fonts.
- **Form Backend:** Serverless Google Apps Script connected to Google Sheets with automatic field normalization and instant lead timestamping.
- **Hosting & CI/CD:** Hosted on **Vercel** with automated continuous deployment triggered on every push to branch `main`.
- **DNS & Domains:** Managed via GoDaddy DNS with verified SSL certificates.

---

## 3. Project Structure

```
aaradhya-enertech-web/
├── index.html                  # Master single-page application structure
├── styles.css                  # Production stylesheet & responsive design system
├── script.js                   # Mobile drawer, form submission, and UX logic
├── robots.txt                  # Search engine and AI crawler permissions (AEO)
├── sitemap.xml                 # XML sitemap with deep-linked section anchors
├── google-apps-script.js       # Production Apps Script code for Google Sheet backend
├── favicon.ico                 # Multi-resolution browser favicon
├── favicon.png                 # Master 512x512 high-resolution favicon
├── favicon-32x32.png           # Standard 32x32 browser tab icon
├── favicon-16x16.png           # Standard 16x16 browser tab icon
├── favicon-192x192.png         # Android Chrome / PWA app icon
├── favicon-512x512.png         # High-DPI PWA icon
├── apple-touch-icon.png        # 180x180 iOS Safari touch icon
├── logo-full.png               # Primary vertical logo lockup (light background)
├── logo-full-light.png         # Master light-variant logo
├── logo-full-dark.png          # Master dark-variant logo (white text for dark footers)
├── logo-icon.png               # Centered 600x600 square symbol mark
├── brand-assets/               # Client handover brand package & guidelines
│   ├── README.md               # Brand style guide (HEX, RGB, clear space rules)
│   └── (10 PNG & ICO assets)
└── images/                     # Optimized visual assets
    ├── factory-plant.jpg       # Custom AI aerial drone photograph of plant
    ├── hero-transformer.jpg    # Substation hero banner photograph
    ├── core_assembly.png       # CRGO step-lap core stacking
    ├── core_coil_assembly.png  # Core coil assembly before tanking
    ├── coil_winding.png        # Prime CRGO slit coils
    ├── tanking.png             # Transformer tanking process
    ├── transformer.png         # Finished high-voltage transformer
    ├── cast_resin.png          # Dry-type cast resin transformer
    ├── panel.png               # Industrial control switchgear panel
    └── solar_panel.png         # Industrial renewable solar facility
```

---

## 4. Website Sections & Features

1. **Top Utility Bar:** Direct click-to-call phone number, mailto link, verified GSTIN badge, and Jaipur plant location.
2. **Sticky Header & Brand Lockup:**
   - Responsive navbar with smooth-scroll anchors: `Home`, `About`, `Products`, `Transformers`, `Manufacturing`, `Quality`, `Industries`, `Contact`.
   - Mobile navigation drawer with hamburger toggle.
   - Primary "Request a Quote ↗" conversion button.
3. **Hero Section:**
   - Bold value headline: *"Powering the Future with Precision Transformer Core Solutions"*.
   - Floating glassmorphic stats card highlighting 15+ years experience, 500+ cores delivered annually, 100% BIS compliance, and 24×7 technical support.
   - Animated trust badges ticker strip.
4. **Certifications & Compliance Bar:**
   - Pills showcasing ISO 9001:2015, ISO 14001, ISO 45001, BIS Compliant, GST Registered, and MSME/Udyam.
5. **Why Choose Aaradhya Enertech:**
   - 6-card capability grid detailing Prime CRGO Steel, High Efficiency & Low Loss, Modern CNC Equipment, Fast Dispatch, Custom Solutions, and Quality Commitment.
6. **Our Transformers Division (`#transformers`):**
   - High-voltage specifications up to 20 MVA and 33 kV class.
   - 4-tile benchmark grid (15+ Years, In-House CNC, 25,000+ sq ft plant, 33 kV class).
   - High-resolution manufacturing facility visual.
7. **Products & Capabilities Catalog (`#products`):**
   - *Category 01:* CRGO Cut Laminations, Core Frame Assemblies, and CRGO Slit Coils.
   - *Category 02:* Power & Distribution Transformers, Inverter Duty Transformers (Solar/Wind), and Cast Resin Dry-Type Transformers.
8. **Industries Served (`#industries`):**
   - Power Utilities, Transformer Manufacturers, Electrical Contractors, Renewable Energy Developers, Heavy Industrial Plants, and EPC Contractors.
9. **Manufacturing Infrastructure & Quality (`#manufacturing`):**
   - CNC slitting tolerances within ±0.1mm, step-lap miter assembly, routine testing bays, and export packaging.
10. **Inside the Shop Floor Gallery (`#quality`):**
    - High-resolution imagery of actual core assemblies, winding bays, tanking, and finished power transformers.
11. **Technical & Commercial FAQ Section (`#faq`):**
    - 6 expandable HTML5 `<details>` accordions addressing CRGO steel grades, testing capacities, delivery timelines, and quote procedures.
12. **Request a Technical Quote Form (`#contact`):**
    - Form capturing Name, Company, Phone/WhatsApp, Email, Requirement Type dropdown, and Specifications.
    - Sends data asynchronously to Google Sheets with visual feedback (`formStatus`).
13. **Comprehensive 4-Column Footer:**
    - Dark mode brand logo, company summary, social channels, Quick Links, Product Links, Tax details, and an interactive embedded Google Map of the Jhotwara, Jaipur plant.
14. **Floating WhatsApp Widget:**
    - Dual-tier emerald gradient pill with an animated live beacon (`Online · Instant Reply`) and ambient glowing pulse ring linking to `https://wa.me/917976422576`.

---

## 5. SEO & AI Engine Optimization (AEO)

The site is engineered for high ranking in both traditional search engines (Google, Bing) and AI answer engines (ChatGPT, Perplexity, Google Gemini):

- **Structured Data (Schema.org JSON-LD):**
  - `Organization` / `LocalBusiness`: Full legal entity, address, taxID, coordinates, and phone.
  - `hasOfferCatalog`: Structured indexing of all 7 transformer and core product offerings.
  - `FAQPage`: Schema mapping all 6 technical procurement questions for Google Featured Snippets and AI conversational search.
  - `WebSite`: Canonical site identity.
- **Local SEO & Geo-Tags:**
  - `geo.region`: `IN-RJ`
  - `geo.placename`: `Jaipur, Rajasthan, India`
  - `geo.position` & `ICBM`: `26.9429; 75.7360`
- **Social Media Cards:**
  - Complete Open Graph (Facebook, WhatsApp, LinkedIn) and Twitter Card tags with high-res plant image.
- **AI Crawler Directives (`robots.txt`):**
  - Explicitly grants crawl permissions to `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, and `Applebot-Extended`.

---

## 6. Lead Form & Google Sheet Integration

### Data Flow
```
User Submits Form on Website
           │
           ▼
JavaScript fetch (POST x-www-form-urlencoded)
           │
           ▼
Google Apps Script Web App Endpoint
           │
           ▼
Google Sheet Appends Row:
[Timestamp | Name | Company | Phone | Email | Requirement | Specifications / Message]
```

- **Active Web App Endpoint:**
  `https://script.google.com/macros/s/AKfycbxsakkyXhCcJCRNTJkoitUa9ApFfHTu6I4ioGb4JOLsGABkiuoYqfk-3zSqrf3Kn88u/exec`
- **Source Code:** Full Google Apps Script code is stored in [`google-apps-script.js`](./google-apps-script.js).

---

## 7. Local Development & Deployment

### Running Locally
To test the website locally, run a lightweight HTTP server:

```bash
# From the project directory
python3 -m http.server 8000
```
Open **`http://localhost:8000`** in any web browser.

### Deploying Changes to Production
The repository is linked to Vercel with automatic continuous deployment:

```bash
# 1. Stage all changes
git add -A

# 2. Commit with a meaningful message
git commit -m "Update feature description"

# 3. Push to GitHub
git push origin main
```
Vercel will detect the push, rebuild the static assets, and update **[https://www.aaradhyaenertech.com](https://www.aaradhyaenertech.com)** live within 60 seconds.

---

## 8. License & Copyright

© 2026 **Aaradhya Enertech Industries**. All rights reserved.  
Plot No. 96A, Ramesh Vihar, Benad Road, Jhotwara, Jaipur, Rajasthan – 302012, India.
