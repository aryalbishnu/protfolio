# Portfolio Website

A modern, responsive personal portfolio website built with React, featuring bilingual support (English/Japanese), interactive sections, and a contact form with reCAPTCHA verification.

## Features

- **Bilingual Support**: Switch between English and Japanese seamlessly
- **Responsive Design**: Fully responsive layout using Bootstrap 5
- **Interactive Sections**:
  - Hero section with introduction
  - About section
  - Skills showcase
  - Certifications display
  - Education history
  - Work experience with achievements and KPIs
  - Career objectives
  - Professional commitments
- **Contact Form**:
  - EmailJS integration for sending messages
  - Google reCAPTCHA v2 verification
  - Auto-reply functionality
  - Language-specific reCAPTCHA display
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Scroll Progress Indicator**: Visual progress bar showing page scroll position
- **Scroll to Top Button**: Quick navigation back to the top

## Technology Stack

- **Frontend Framework**: React 18
- **Styling**: Bootstrap 5 + Custom CSS
- **Email Service**: EmailJS
- **Form Protection**: Google reCAPTCHA v2
- **Icons**: Lucide React
- **Build Tool**: Create React App

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v20.16.0 or higher recommended)
- **npm** (comes with Node.js)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and configure the following:

### Required Configuration

#### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create two email services (one for English, one for Japanese)
3. Create four email templates:
   - `SEND_TEMPLATE`: Template that sends your message
   - `RETURN_TEMPLATE`: Auto-reply template for users
4. Add credentials to `.env`:

```env
# English EmailJS credentials
REACT_APP_EN_PUBLIC_KEY=your_emailjs_public_key
REACT_APP_EN_SERVICE_ID=your_service_id
REACT_APP_EN_SEND_TEMPLATE_ID=your_send_template_id
REACT_APP_EN_RETURN_TEMPLATE_ID=your_return_template_id

# Japanese EmailJS credentials
REACT_APP_JP_PUBLIC_KEY=your_emailjs_public_key
REACT_APP_JP_SERVICE_ID=your_service_id
REACT_APP_JP_SEND_TEMPLATE_ID=your_send_template_id
REACT_APP_JP_RETURN_TEMPLATE_ID=your_return_template_id
```

#### Google reCAPTCHA Setup

1. Visit [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Register a new site:
   - Choose **reCAPTCHA v2** → **"I'm not a robot" Checkbox**
   - Add your domains (e.g., `localhost` for development)
3. Copy the **Site Key** and add to `.env`:

```env
REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

## Running the Application

### Development Mode

Start the development server:

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Production Build

Create an optimized production build:

```bash
npm run build
```

The build files will be in the `build/` directory.

### Run Tests

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

## Project Structure

```
portfolio/
├── public/              # Static files
│   ├── data.json       # Basic profile data
│   └── ...
├── src/
│   ├── components/      # React components
│   │   ├── text/       # JSON data files
│   │   │   ├── certificate.json
│   │   │   ├── education.json
│   │   │   └── workExperience.json
│   │   ├── navbar.js
│   │   ├── hero.js
│   │   ├── about.js
│   │   ├── skills.js
│   │   ├── certificates.js
│   │   ├── education.js
│   │   ├── workExperiences.js
│   │   ├── careOjective.js
│   │   ├── commitment.js
│   │   ├── contact.js
│   │   ├── scroller.js
│   │   ├── scrollToTopButton.js
│   │   └── footer.js
│   ├── contexts/       # React contexts
│   │   └── LanguageContext.js
│   ├── App.js          # Main app component
│   ├── App.css         # App styles
│   └── index.js        # Entry point
├── .env                # Environment variables (not in git)
├── .env.example        # Example environment variables
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## Updating Content

### Add Work Experience

Edit `src/components/text/workExperience.json`:

```json
{
  "role": "Job Title",
  "company": "Company Name",
  "period": "YYYY-MM — YYYY-MM",
  "location": "City, Country",
  "type": "Full-time",
  "summary": "Brief overview",
  "achievements": ["Achievement 1", "Achievement 2"],
  "stack": ["Tech1", "Tech2"],
  "links": [{ "href": "#", "label": "Link Text" }],
  "kpis": [
    { "label": "Metric Name", "value": "Value" }
  ]
}
```

### Add Certificates

Edit `src/components/text/certificate.json`:

```json
{
  "title": "Certificate Name",
  "issuer": "Issuing Organization",
  "date": "Month Year",
  "verifyUrl": "#",
  "skills": ["Skill1", "Skill2"]
}
```

### Add Education

Edit `src/components/text/education.json`:

```json
{
  "degree": "Program Name",
  "school": "Institution Name",
  "period": "YYYY — YYYY",
  "location": "City, Country",
  "details": ["Detail 1", "Detail 2"],
  "badge": "Honors|Ongoing|etc"
}
```

## Features Detail

### Language Switching

The application supports English and Japanese. The language context is managed globally, and switching languages updates:
- All UI text
- EmailJS templates (sends emails using language-specific templates)
- reCAPTCHA language (automatically changes without page reload)

### Contact Form with reCAPTCHA

The contact form includes:
- **Client-side validation**: All fields required before submission
- **reCAPTCHA verification**: Bot protection with language-based display
- **Dual email system**:
  - Sends your message to the site owner
  - Sends auto-reply confirmation to the user
- **Automatic reset**: Form and reCAPTCHA reset after successful submission

### Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Deployment

This project is configured for Netlify deployment (see `public/_redirects`).

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set environment variables in Netlify dashboard
4. Deploy

### Environment Variables for Production

Remember to add all environment variables in your hosting platform:
- All EmailJS keys (EN and JP)
- reCAPTCHA site key

## Known Issues

1. **Filename typo**: `careOjective.js` should be `careerObjective.js`
2. **Unused component**: `<downloadCV />` in `App.js:22` appears undefined

## Security Notes

- Never commit `.env` file to version control
- Keep your EmailJS and reCAPTCHA keys secure
- The reCAPTCHA **Secret Key** should only be used on the backend (not needed for this frontend-only implementation)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Your Name - [Your Website/Email]

## Acknowledgments

- Built with React
- Styled with Bootstrap
- Icons by Lucide React
- Email functionality by EmailJS
- Form protection by Google reCAPTCHA
