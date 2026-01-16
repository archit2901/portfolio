# Archit Gupta - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design** - Works seamlessly on all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Smooth Animations** - Framer Motion scroll animations throughout
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Contact Form** - Integrated form with validation (ready for email service)
- **Blog Ready** - Blog section structure prepared for content
- **Fast Performance** - Optimized with Next.js 15 features

## Tech Stack

- **Framework:** Next.js 15 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Theme:** next-themes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

Edit `/lib/constants.ts` to update:
- Personal information (name, email, phone, etc.)
- Work experience
- Projects
- Skills
- Education
- Social links

### Add Blog Posts

Blog posts are currently placeholder. To add real blog functionality:

1. Install MDX support:
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

2. Create `.mdx` files in `/content/blog/`
3. Update `/app/blog/page.tsx` to read from content files

### Setup Contact Form Email

The contact form is ready but needs email service configuration:

1. Choose an email service:
   - **Resend** (Recommended): `npm install resend`
   - **SendGrid**: `npm install @sendgrid/mail`
   - **Nodemailer**: `npm install nodemailer`

2. Add API key to `.env`:
```bash
RESEND_API_KEY=your_api_key
CONTACT_EMAIL=your_email@example.com
```

3. Uncomment email sending code in `/app/api/contact/route.ts`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables if using email service
4. Deploy!

### Deploy to Other Platforms

The project can also be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting platform

## Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   ├── blog/                # Blog pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── animations/          # Animation components
│   ├── layout/              # Layout components (Navbar, Footer)
│   ├── sections/            # Page sections (Hero, About, etc.)
│   └── ui/                  # Reusable UI components
├── lib/                     # Utilities and constants
│   ├── constants.ts         # Personal data
│   ├── types.ts             # TypeScript types
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
│   ├── resume.pdf           # Resume file
│   └── images/              # Images
└── content/                 # Blog content (MDX files)
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Archit Gupta
- Email: gupta.archit1@northeastern.edu
- LinkedIn: [linkedin.com/in/archit2901](https://www.linkedin.com/in/archit2901)
- GitHub: [github.com/archit2901](https://github.com/archit2901)
