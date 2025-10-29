# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React (Create React App) showcasing professional experience, skills, education, and certifications. The site uses Bootstrap for styling and EmailJS for contact form functionality.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm build

# Run tests
npm test

# Run tests in watch mode
npm test -- --watch
```

## Architecture

### Application Structure

The app follows a simple single-page component architecture:

- **Main Entry**: `src/index.js` → `src/App.js`
- **Layout**: Sequential sections rendered in `App.js` in top-to-bottom order
- **Components**: All UI components live in `src/components/`
- **Data Sources**: JSON files in `src/components/text/` and `public/data.json`

### Component Organization

Components are standalone, self-contained sections with inline styles:

1. **Navbar** (`navbar.js`) - Navigation with smooth scroll links
2. **Hero** (`hero.js`) - Landing section with name/role
3. **About** (`about.js`) - Personal introduction
4. **Skills** (`skills.js`) - Technical skills display
5. **Certificate** (`certificates.js`) - Certifications from `text/certificate.json`
6. **Education** (`education.js`) - Academic background from `text/education.json`
7. **WorkExperience** (`workExperiences.js`) - Professional history from `text/workExperience.json`
8. **CareerObjective** (`careOjective.js`) - Career goals [note: typo in filename]
9. **MyCommitment** (`commitment.js`) - Professional commitments
10. **Contact** (`contact.js`) - EmailJS-powered contact form
11. **ScrollProgress** (`scroller.js`) - Progress indicator
12. **ScrollToTopButton** (`scrollToTopButton.js`) - Back-to-top button
13. **Footer** (`footer.js`) - Footer section

### Data Management

Portfolio content is stored in JSON files for easy updates:

- `src/components/text/certificate.json` - Certification details
- `src/components/text/education.json` - Educational background
- `src/components/text/workExperience.json` - Work history with achievements, tech stacks, and KPIs
- `public/data.json` - Basic profile info (name, role, skills)

### Contact Form Integration

The contact form (`contact.js`) uses EmailJS with:
- Service ID: `service_66ru1tl`
- Two templates:
  - `template_d2qjj2s` - Sends message to portfolio owner
  - `template_ypebzpr` - Sends auto-reply confirmation to user
- Public key: `RxN0YmNiea0PGR7rF`

**Note**: EmailJS credentials are currently hardcoded. Consider moving to environment variables for production.

### Styling Approach

- Bootstrap 5 for base layout and responsive grid
- Inline `<style>` tags within each component for component-specific CSS
- Custom CSS classes with gradient backgrounds and glass-morphism effects
- Main app styles in `src/App.css` and `src/index.css`

## Key Implementation Details

### Adding New Work Experience

Edit `src/components/text/workExperience.json` with this structure:
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

### Adding Certificates

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

### Updating Education

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

## Known Issues

1. **Typo**: Component file `careOjective.js` should be `careerObjective.js`
2. **App.js Line 22**: `<downloadCV />` appears to be undefined/unused
3. **Hardcoded Credentials**: EmailJS keys are in source code instead of environment variables
4. **Node Version**: Package.json shows engine warning for `pdfjs-dist@5.3.93` requiring Node >=20.16.0

## Deployment

The `public/_redirects` file suggests this is configured for Netlify deployment with SPA routing support.
