# 🚀 Luis Gustavo Hedel Marchiore - Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)

**Modern and responsive portfolio of a Software Engineer & AI Specialist**

[🔗 Live Demo](https://luismarchiore.dev) · [📧 Contact](mailto:lgmarchioreh@gmail.com) · [💼 LinkedIn](https://linkedin.com/in/luis-gustavo-hedel-marchiore)

</div>

## 📋 About The Project

This is my personal portfolio developed with cutting-edge web technologies. The project showcases my skills in full-stack development and AI engineering, featuring an elegant, performant, and fully responsive interface.

### ✨ Key Features

- 🌐 **Complete internationalization** (Portuguese/English)
- 🌙 **Dark/Light mode** with persistence
- 📱 **Responsive design** mobile-first approach
- ⚡ **Optimized performance** with Next.js 14
- 🎨 **Modern UI/UX** with Tailwind CSS
- 📊 **GitHub API integration** for dynamic projects
- 📧 **Functional contact system** with Nodemailer
- 🔍 **SEO optimized** with complete metadata
- ♿ **Accessibility** (WCAG guidelines)
- 🚀 **Automatic deployment** on Vercel

## 🛠️ Built With

### Frontend
- **Next.js 14** - React Framework with App Router
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Popular icon library
- **next-intl** - Internationalization for Next.js
- **next-themes** - Theme management

### Backend/API
- **Next.js API Routes** - Serverless endpoints
- **Nodemailer** - Email sending
- **Axios** - HTTP client
- **GitHub API** - Project integration

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic CSS prefixes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Gmail account (for email functionality)
- GitHub Token (optional, for projects section)

### 1. Clone the repository
```bash
git clone https://github.com/LuisGHM/portfolio-nextjs.git
cd portfolio-nextjs
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment variables setup
Create a `.env.local` file in the root directory:

```env
# GitHub API (optional - for projects section)
GITHUB_TOKEN=your_github_personal_access_token

# Email configuration (for contact form)
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_specific_password
```

### 4. Run the development server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/           # Internationalized routes
│   ├── api/                # Next.js API Routes
│   └── globals/            # Global files (robots, sitemap)
├── components/
│   ├── Section/            # Main site sections
│   ├── ProjectsList/       # Project components
│   ├── ContactSection/     # Contact form
│   ├── header/             # Header and navigation
│   └── modal/              # Modal components
├── hooks/                  # Custom React hooks
├── providers/              # Context providers
├── services/               # API configurations
├── styles/                 # CSS styles
└── utils/                  # Utility functions
```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🔧 Configuration

### GitHub Token (Optional)
To display projects dynamically:
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Generate a new token with `public_repo` scope
3. Add it to the `GITHUB_TOKEN` environment variable

### Email Configuration
For the contact form to work:
1. Enable 2-factor authentication on Gmail
2. Generate an app-specific password
3. Use this password in the `EMAIL_PASS` environment variable

## 🎨 Customization

### Colors and Theme
Primary colors are defined in Tailwind CSS:
- Primary: `#5C63ED` / `#623CEA` (dark mode)
- Background: `#FFFFFF` / `#0A0A0B` (dark mode)

### Translations
Add/edit translations in:
- `messages/en.json` (English)
- `messages/pt.json` (Portuguese)

### Content
Customize sections by editing:
- Experience: `src/components/Section/Experience/`
- Education: `src/components/Section/Education/`
- Skills: `src/components/Section/DetailedSkills/`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to [Vercel](https://vercel.com)
2. Configure environment variables
3. Automatic deployment on every push

### Other Platforms
The project is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📊 Performance

- ⚡ **Lighthouse Score**: 90+
- 🚀 **Core Web Vitals**: Optimized
- 📦 **Bundle Size**: Minimized
- 🔄 **ISR**: Incremental Static Regeneration

## 🤝 Contributing

Contributions are always welcome! To contribute:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Luis Gustavo Hedel Marchiore**
- Software Engineer & AI Specialist
- 🌐 Website: [luismarchiore.dev](https://luismarchiore.dev)
- 💼 LinkedIn: [@luis-gustavo-hedel-marchiore](https://linkedin.com/in/luis-gustavo-hedel-marchiore)
- 📧 Email: lgmarchioreh@gmail.com
- 🐱 GitHub: [@LuisGHM](https://github.com/LuisGHM)

## 📈 Project Stats

- **Lines of Code**: 5,000+
- **Components**: 15+
- **Languages**: 2 (EN/PT)
- **API Integrations**: GitHub API, Email Service
- **Performance Score**: 95+ (Lighthouse)

## 🎯 Features Showcase

### Dynamic Project Loading
- Real-time GitHub repository fetching
- Automatic categorization (Frontend, Backend, AI, Full-Stack)
- Technology detection and display
- Live demo links integration

### Advanced Internationalization
- Route-based locale switching (`/en`, `/pt`)
- Complete UI translation
- SEO-optimized for multiple languages
- Persistent language preferences

### Professional Contact System
- Server-side email processing
- Form validation and error handling
- Responsive design with loading states
- Professional email templates

## 🔍 SEO & Analytics

- **Meta tags**: Complete OpenGraph and Twitter cards
- **Structured data**: JSON-LD for better search visibility
- **Sitemap**: Auto-generated for all locales
- **Robots.txt**: Optimized for search engines

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the incredible framework
- [Tailwind CSS](https://tailwindcss.com/) for the design system
- [Vercel](https://vercel.com/) for hosting
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
- Open source community for all the amazing tools

---

<div align="center">

**[⬆ Back to top](#-luis-gustavo-hedel-marchiore---portfolio)**

Made with ❤️ and ☕ by [Luis Gustavo](https://github.com/LuisGHM)

⭐ Star this repo if you found it helpful!

</div>
