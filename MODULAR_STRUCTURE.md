# Modular Structure Documentation

This project follows a modular architecture where each component is built separately and then composed together.

## Folder Structure

```
src/
├── app/                    # Next.js App Router files
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page route
│   └── globals.css        # Global styles
│
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.js      # Site header with navigation
│   │   └── Footer.js      # Site footer with links
│   │
│   ├── sections/          # Page sections (reusable across pages)
│   │   ├── Hero.js        # Hero section with title/subtitle
│   │   ├── ValueProposition.js  # Value proposition section
│   │   └── CTA.js         # Call-to-action section
│   │
│   ├── ui/                # Reusable UI components
│   │   ├── Button.js      # Button component with variants
│   │   └── Link.js        # Link component with styling
│   │
│   └── Layout.js          # Main layout wrapper (composes Header/Footer)
│
└── pages/                 # Page components (compose sections)
    └── HomePage.js        # Home page (composes Hero, ValueProposition, CTA)
```

## Component Categories

### 1. Layout Components (`components/layout/`)
- **Header.js**: Site header with logo and navigation
- **Footer.js**: Site footer with copyright and links

### 2. Section Components (`components/sections/`)
- **Hero.js**: Hero section with customizable title and subtitle
- **ValueProposition.js**: Value proposition section with customizable items
- **CTA.js**: Call-to-action section with primary button and secondary link

### 3. UI Components (`components/ui/`)
- **Button.js**: Reusable button with variants (primary, secondary, link)
- **Link.js**: Styled link component with hover effects

## How to Add New Pages

1. Create a new section component in `src/components/sections/`
2. Create a new page component in `src/pages/` that composes the sections
3. Create a new route in `src/app/` if needed (for Next.js routing)

## Example: Creating a New Page

```javascript
// src/pages/AboutPage.js
import Hero from '@/components/sections/Hero'
import ValueProposition from '@/components/sections/ValueProposition'
import CTA from '@/components/sections/CTA'

export default function AboutPage() {
  return (
    <div>
      <Hero title="About Us" subtitle="Learn more about our mission" />
      <ValueProposition 
        title="Our Values"
        items={['Value 1', 'Value 2', 'Value 3']}
      />
      <CTA 
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />
    </div>
  )
}
```

## Benefits of This Structure

- **Modularity**: Each component is independent and reusable
- **Maintainability**: Easy to find and update specific components
- **Scalability**: Easy to add new pages and sections
- **Consistency**: Reusable UI components ensure consistent styling
- **Separation of Concerns**: Layout, sections, and UI components are clearly separated




