# Portfolio Customization Guide

This guide will help you customize your portfolio with your personal information, photos, and project links.

## Quick Start

All your personal information is centralized in one configuration file for easy updates:

**File Location:** `/src/config/portfolio-config.ts`

## How to Customize

### 1. Personal Information

Open `/src/config/portfolio-config.ts` and update the following fields:

```typescript
export const portfolioConfig = {
  // Your name
  name: 'Your Name Here',
  
  // Your professional title
  title: 'Your Professional Title',
  
  // Greeting text
  greeting: "Hello, I'm",
  
  // ... more fields below
};
```

### 2. Profile Images

Update your photos in the same configuration file:

```typescript
// Profile image (shown in sidebar)
profileImage: 'figma:asset/f9a7e29ab3e363e3d22d0e02fa8409e3aeb3d6cc.png',

// Hero section image (shown on home page - circular)
heroImage: 'https://your-image-url.com/photo.jpg',
```

**Note:** The sidebar profile image is already configured to use the image you provided. The hero image will be displayed as a perfect circle.

### 3. Social Media Links

Update your GitHub and LinkedIn profile URLs:

```typescript
social: {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
},
```

These links appear in:
- The sidebar navigation (circular icon buttons)
- The hero/home section

### 4. Resume Download

Add your resume file URL or path:

```typescript
resumeUrl: 'path/to/your/resume.pdf',
// or use an external URL:
resumeUrl: 'https://yourwebsite.com/resume.pdf',
```

### 5. Project Links

Each project can have its own link. Update the project URLs in the configuration:

```typescript
projects: {
  enableRedirect: true, // Set to true to enable project links
  urls: {
    'E-Commerce Platform': 'https://github.com/yourusername/ecommerce-project',
    'Task Management App': 'https://github.com/yourusername/task-manager',
    'Social Media Dashboard': 'https://github.com/yourusername/social-dashboard',
    'Weather Forecast App': 'https://github.com/yourusername/weather-app',
    'Portfolio Website': 'https://github.com/yourusername/portfolio',
    'Fitness Tracker': 'https://github.com/yourusername/fitness-tracker',
  },
},
```

Each project card has clickable icons that will redirect to the URLs you specify above.

## Features

### Sidebar Navigation

- **Profile Picture:** Circular image with hover animation
- **Theme Toggle:** Switch between light and dark modes
- **Navigation Menu:** Smooth scroll to all sections:
  - Home
  - About Me
  - Skills
  - Education
  - Experience
  - Projects
  - Certifications
  - Languages
  - Contact
- **Social Icons:** GitHub and LinkedIn (only these two as requested)
- **Responsive:** Hamburger menu on mobile devices

### Theme Support

The sidebar and all sections support both light and dark themes:
- **Light Theme:** Clean white background with subtle purple/pink accents
- **Dark Theme:** Dark purple/pink gradient backgrounds
- Toggle button is prominently displayed in the sidebar

### Circular Images

- Sidebar profile image is circular
- Hero section image is also circular with animated glow effect

## Need Help?

All customizable values are in `/src/config/portfolio-config.ts`. Simply update the values there, and your changes will automatically reflect throughout the entire portfolio!
