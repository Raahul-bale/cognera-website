# Project Structure Documentation

This document provides a comprehensive overview of the Cognera website project structure, explaining what each file and folder contains and their features.

---

## 📁 Root Directory

### Configuration Files

| File | Purpose | Features |
|------|---------|----------|
| `package.json` | Node.js dependencies and scripts | Lists all npm packages, build scripts, and project metadata |
| `next.config.js` | Next.js configuration | Framework settings and build configuration |
| `tailwind.config.js` | Tailwind CSS configuration | Custom theme settings and design system |
| `postcss.config.js` | PostCSS configuration | CSS processing pipeline |
| `jsconfig.json` | JavaScript/TypeScript configuration | Path aliases and compiler options |

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview and setup instructions |
| `AUTHENTICATION_SETUP.md` | Authentication system documentation |
| `MODULAR_STRUCTURE.md` | Architecture and modular design docs |
| `VERCEL_DEPLOYMENT.md` | Vercel deployment guide |
| `COLOR_GRADIENTS.md` | Color palette and gradient reference |
| `PROJECT_STRUCTURE.md` | This file - project structure documentation |

### Asset Directories

| Directory | Purpose | Contents |
|-----------|---------|----------|
| `public/` | Static assets served directly | Favicons, images, icons |
| `img/` | Additional image assets | Logo files, favicon variants |

---

## 📁 `src/` - Source Code Directory

### `src/app/` - Next.js App Router Pages

This directory contains all Next.js pages and API routes using the App Router pattern.

#### Main Pages

| File | Route | Features |
|------|-------|----------|
| `app/page.js` | `/` (Home) | Homepage entry point, renders HomePage component |
| `app/layout.js` | Root layout | Global layout wrapper, metadata, fonts, viewport settings |
| `app/globals.css` | Global styles | Tailwind imports, custom CSS, **background animations**, responsive utilities, keyframe animations |
| `app/error.js` | Error boundary | Global error handling UI |
| `app/not-found.js` | 404 page | Custom 404 error page |

#### Authentication Pages

| File | Route | Features |
|------|-------|----------|
| `app/login/page.js` | `/login` | Login page with Suspense boundary for useSearchParams |
| `app/signup/page.js` | `/signup` | User registration page |

#### Other Pages

| File | Route | Features |
|------|-------|----------|
| `app/contact/page.js` | `/contact` | Contact form and information page |

#### API Routes (`app/api/`)

##### Authentication API (`app/api/auth/`)

| File | Route | Method | Features |
|------|-------|--------|----------|
| `api/auth/login/route.js` | `/api/auth/login` | POST | User login with email/password, JWT token generation, cookie setting |
| `api/auth/register/route.js` | `/api/auth/register` | POST | User registration, password validation, user creation |
| `api/auth/logout/route.js` | `/api/auth/logout` | POST | User logout, cookie clearing |

##### OAuth API (`app/api/auth/oauth/`)

| File | Route | Method | Features |
|------|-------|--------|----------|
| `api/auth/oauth/google/route.js` | `/api/auth/oauth/google` | GET | Google OAuth authentication flow |
| `api/auth/oauth/microsoft/route.js` | `/api/auth/oauth/microsoft` | GET | Microsoft OAuth authentication flow |

---

## 📁 `src/components/` - React Components

### Layout Components (`components/layout/`)

| File | Features |
|------|----------|
| `layout/Header.js` | - Responsive navigation bar<br>- Dropdown menus (Platform, Solutions, Resources, Pricing)<br>- Mobile hamburger menu<br>- Logo and branding<br>- Login/Signup buttons<br>- Active state management |
| `layout/Footer.js` | - Footer links and navigation<br>- Social media icons<br>- Language selector<br>- **Large animated brand name**<br>- **Scroll-based animations** (opacity and translateY based on scroll)<br>- Responsive layout<br>- Gradient text effect on brand name |

### Section Components (`components/sections/`)

| File | Features |
|------|----------|
| `sections/Hero.js` | - Main hero section with title and subtitle<br>- Call-to-action buttons<br>- Responsive text sizing<br>- Full-width mobile layout |
| `sections/ProblemSection.js` | - Problem statement display<br>- Challenge list with icons<br>- Dark gradient card design |
| `sections/SolutionSection.js` | - Three-layer solution architecture<br>- Data, Insights, and Action layers<br>- Gradient cards for each layer |
| `sections/FeatureGrid.js` | - 6 feature cards in grid layout<br>- Icons and descriptions<br>- Gradient backgrounds (slate, indigo, blue)<br>- Hover effects |
| `sections/HowItWorks.js` | - 4-step process explanation<br>- Numbered steps with icons<br>- Card-based layout<br>- Responsive grid |
| `sections/ValueProposition.js` | - Three-layered approach display<br>- Customizable items list<br>- Text-based presentation |
| `sections/DemoForm.js` | - Contact/demo request form<br>- First name, last name, email, phone<br>- Company size selector<br>- Terms and conditions checkbox<br>- Light theme form design |
| `sections/FinalCTA.js` | - Final call-to-action section<br>- "Book a Demo" button<br>- Gradient card background |
| `sections/CTA.js` | - Generic call-to-action component |
| `sections/SocialAuth.js` | - Social authentication buttons<br>- Google and Microsoft OAuth<br>- "OR" divider between options |
| `sections/PromotionalCard.js` | - Promotional banner/card<br>- Gradient ribbon design<br>- SVG-based graphics |

### UI Components (`components/ui/`)

| File | Features |
|------|----------|
| `ui/Button.js` | - Reusable button component<br>- Primary, secondary, and link variants<br>- Responsive sizing<br>- 44px minimum touch target<br>- Href support for links |
| `ui/Input.js` | - Form input component<br>- Label support<br>- Password show/hide toggle<br>- Light and dark themes<br>- Focus states<br>- 44px minimum height |
| `ui/Checkbox.js` | - Checkbox input component<br>- Label support<br>- Light and dark themes<br>- Accessible sizing |
| `ui/Link.js` | - Custom link component<br>- Styled navigation links |
| `ui/AuthCard.js` | - Authentication page wrapper<br>- Logo display<br>- Title and subtitle<br>- Matrix background integration<br>- Centered card layout |
| `ui/SocialButton.js` | - Social login buttons<br>- Google and Microsoft icons<br>- SVG-based brand icons<br>- Hover states |
| `ui/MatrixBackground.js` | - **Animated matrix grid background**<br>- Interactive hover effects (white glow on hover)<br>- Responsive grid sizing (15/20/30 based on screen size)<br>- Used in Layout and AuthCard<br>- Fixed position, full viewport coverage<br>- Dark background (#080707) |

### Core Components

| File | Features |
|------|----------|
| `ConditionalLayout.js` | - Conditionally renders Header/Footer<br>- Excludes layout on auth pages<br>- Wraps children with layout components |
| `Layout.js` | - Main layout wrapper<br>- Combines Header, children, and Footer |

---

## 📁 `src/pages/` - Page Components

These are the main page components that are rendered by Next.js routes.

| File | Route | Features |
|------|-------|----------|
| `pages/HomePage.js` | `/` | - Composes all home sections<br>- Hero, Problem, Solution, Features, How It Works, Value Prop, Demo Form, Final CTA |
| `pages/LoginPage.js` | `/login` | - Login form with email/password<br>- Social authentication options<br>- Error handling<br>- Success messages<br>- useSearchParams for query handling |
| `pages/SignUpPage.js` | `/signup` | - Registration form<br>- Full name, email, password fields<br>- Real-time password validation<br>- Terms and conditions checkbox<br>- Password requirements display |
| `pages/ContactPage.js` | `/contact` | - Contact form<br>- Company information<br>- Multiple contact methods |

---

## 📁 `src/lib/` - Utility Libraries

| File | Features |
|------|----------|
| `lib/auth.js` | - **Server-side authentication**<br>- User CRUD operations<br>- Password hashing (bcryptjs)<br>- JWT token generation/verification<br>- OAuth user creation<br>- Email/password validation<br>- **Vercel KV integration** for user storage<br>- In-memory fallback for local development |
| `lib/auth-client.js` | - **Client-side authentication utilities**<br>- Password validation rules<br>- Email validation<br>- Client-side form validation helpers |

---

## 📁 `public/` - Static Assets

| Directory/File | Purpose |
|----------------|---------|
| `public/favicon.ico` | Main favicon |
| `public/favicon-16x16.png` | 16x16 favicon |
| `public/favicon-32x32.png` | 32x32 favicon |
| `public/apple-touch-icon.png` | iOS home screen icon |
| `public/img/` | Image assets (logos, icons) |
| `public/images/` | Additional image resources |

---

## 🔑 Key Features by Category

### Authentication System
- **Files**: `lib/auth.js`, `lib/auth-client.js`, `app/api/auth/*`, `pages/LoginPage.js`, `pages/SignUpPage.js`
- **Features**: Email/password auth, OAuth (Google, Microsoft), JWT tokens, secure cookies, password validation

### User Interface
- **Files**: `components/ui/*`, `components/sections/*`
- **Features**: Responsive design, mobile-optimized, touch-friendly (44px targets), dark theme, gradient backgrounds

### Navigation
- **Files**: `components/layout/Header.js`, `components/layout/Footer.js`
- **Features**: Dropdown menus, mobile hamburger menu, active states, smooth animations

### Content Sections
- **Files**: `components/sections/*`, `pages/HomePage.js`
- **Features**: Hero section, problem/solution presentation, feature grid, how it works, demo form, CTAs

### Styling
- **Files**: `app/globals.css`, `tailwind.config.js`
- **Features**: Custom CSS, Tailwind utilities, animations, responsive breakpoints, mobile optimizations

### Background Animations
- **Files**: `components/ui/MatrixBackground.js`, `components/Layout.js`, `app/globals.css`
- **Features**: Matrix grid background, hero shape animations, scroll-based animations, interactive hover effects

### Data Storage
- **Files**: `lib/auth.js`
- **Features**: Vercel KV (Redis) for production, in-memory storage for development

---

## 🗂️ File Organization Pattern

```
src/
├── app/              # Next.js App Router (pages & API routes)
│   ├── api/          # API endpoints
│   ├── [route]/      # Page routes
│   ├── layout.js     # Root layout
│   └── globals.css   # Global styles
├── components/        # Reusable React components
│   ├── layout/       # Layout components (Header, Footer)
│   ├── sections/     # Page section components
│   └── ui/           # UI primitives (Button, Input, etc.)
├── pages/            # Page-level components
├── lib/              # Utility functions and libraries
└── styles/           # Additional stylesheets (if any)
```

---

## 🎨 Background Animations & Visual Effects

This section details all background animations and visual effects used throughout the website.

### 1. Matrix Grid Background

**Location**: `components/ui/MatrixBackground.js`  
**Used in**: `components/Layout.js`, `components/ui/AuthCard.js`

#### Features:
- **Interactive grid system** - Creates a responsive grid of squares
- **Hover effects** - Each grid item glows white on hover with shadow
- **Responsive sizing**:
  - Mobile (< 640px): 15x15 grid
  - Tablet (640px - 1024px): 20x20 grid
  - Desktop (> 1024px): 30x30 grid
- **Performance optimized** - Grid size adjusts based on screen size
- **Fixed positioning** - Covers entire viewport, behind all content
- **Dark background** - Uses `#080707` color

#### CSS Styling:
Located in `app/globals.css`:
- `.matrix-grid-container` - Grid container styles
- `.matrix-grid-item` - Individual grid square styles
- Hover state: White background with glow effect

---

### 2. Hero Shape Animations

**Location**: `app/globals.css` (lines 150-229)  
**Used in**: `components/Layout.js` (rendered as `<div id="hero-shape">`)

#### Features:
Three animated gradient blobs positioned at the center of the viewport:

##### Hero Shape 1 (`#hero-1`)
- **Size**: 60vw × 60vw (max 800px × 800px)
- **Gradient**: `linear-gradient(#7440FA, #8B5CF6)` (Purple to Light Purple)
- **Blur**: 80px
- **Opacity**: 0.6
- **Animation**: Static (no movement)

##### Hero Shape 2 (`#hero-2`)
- **Size**: 40vw × 40vw (max 500px × 500px)
- **Gradient**: `linear-gradient(#7440FA, #A78BFA)` (Purple to Light Purple)
- **Blur**: 60px
- **Opacity**: 0.5
- **Animation**: `anime2` - 8s infinite alternate
- **Movement**: Translates between positions (20%, -30%) and (-20%, 30%)

##### Hero Shape 3 (`#hero-3`)
- **Size**: 40vw × 40vw (max 500px × 500px)
- **Gradient**: `linear-gradient(#7440FA, #7C3AED)` (Purple to Violet)
- **Blur**: 60px
- **Opacity**: 0.5
- **Animation**: `anime1` - 8s infinite alternate
- **Movement**: Translates between positions (-30%, -20%) and (30%, 20%)

#### Keyframe Animations:
```css
@keyframes anime1 {
  from { transform: translate(-30%, -20%); }
  to { transform: translate(30%, 20%); }
}

@keyframes anime2 {
  from { transform: translate(20%, -30%); }
  to { transform: translate(-20%, 30%); }
}
```

#### Positioning:
- **Container**: Fixed position, centered in viewport
- **Z-index**: 1 (behind content, above background)
- **Pointer events**: None (doesn't interfere with interactions)

---

### 3. Footer Scroll Animations

**Location**: `components/layout/Footer.js`

#### Features:
- **Scroll-based opacity** - Brand name fades in/out based on scroll position
- **Transform animation** - Brand name moves up as user scrolls up
- **Scroll direction detection** - Different behavior for scrolling up vs down
- **Smooth transitions** - 0.1s ease-out transitions

#### Implementation:
- Uses `useEffect` hook with scroll event listener
- Calculates scroll progress based on footer position
- Updates opacity and translateY values dynamically
- Passive scroll listener for performance

---

### 4. Dropdown Menu Animations

**Location**: `app/globals.css` (lines 124-148)

#### Features:
- **Fade in animation** - Dropdowns fade in from top
- **Animation**: `fadeInDown` - 0.2s ease-out
- **Keyframe**: 
  - From: opacity 0, translateY(-10px)
  - To: opacity 1, translateY(0)

#### Used in:
- Header dropdown menus (Platform, Solutions, Resources, Pricing)
- Applied via CSS class on dropdown containers

---

### 5. Component Hover Effects

#### Feature Cards (`components/sections/FeatureGrid.js`)
- **Scale effect**: `hover:scale-105` on hover
- **Border glow**: Border color changes on hover
- **Shadow**: Enhanced shadow on hover

#### How It Works Cards (`components/sections/HowItWorks.js`)
- **Scale effect**: `hover:scale-105` on card
- **Icon scale**: `group-hover:scale-110` on icon container
- **Border color change**: Hover border color changes to indigo

---

### Animation Performance Considerations

1. **Matrix Grid**: Grid size reduces on smaller screens for better performance
2. **Hero Shapes**: Uses CSS transforms (GPU accelerated) for smooth animations
3. **Scroll Animations**: Uses passive event listeners
4. **Blur Effects**: Applied via CSS filter (may impact performance on older devices)

---

### Animation File Locations Summary

| Animation Type | Component File | CSS File | Usage |
|---------------|----------------|----------|-------|
| Matrix Grid | `components/ui/MatrixBackground.js` | `app/globals.css` (lines 44-122) | Layout, Auth pages |
| Hero Shapes | `components/Layout.js` | `app/globals.css` (lines 150-229) | All pages |
| Footer Scroll | `components/layout/Footer.js` | Inline styles | Footer section |
| Dropdown Fade | `components/layout/Header.js` | `app/globals.css` (lines 124-148) | Navigation menus |
| Hover Effects | Various section components | Tailwind classes | Interactive elements |

---

## 🔄 Data Flow

### Authentication Flow
1. User submits form → `pages/LoginPage.js` or `pages/SignUpPage.js`
2. Form data sent → `app/api/auth/login/route.js` or `app/api/auth/register/route.js`
3. Server processes → `lib/auth.js` (validates, hashes, stores)
4. Response with JWT → Cookie set, user redirected

### OAuth Flow
1. User clicks social button → `components/ui/SocialButton.js`
2. Redirects to → `app/api/auth/oauth/google/route.js` or `microsoft/route.js`
3. OAuth provider handles authentication
4. Callback processes → `lib/auth.js` creates/finds user
5. JWT generated → User logged in

### Page Rendering Flow
1. Route accessed → `app/[route]/page.js`
2. Page component loads → `pages/[PageName].js`
3. Components render → `components/sections/*`, `components/ui/*`
4. Layout wraps → `components/Layout.js` or `ConditionalLayout.js`
5. Header/Footer added → `components/layout/Header.js`, `Footer.js`

---

## 📝 Notes

- **Next.js 14.2.5** with App Router
- **React 18** for component rendering
- **Tailwind CSS** for styling
- **Vercel KV** for production data storage
- **JWT** for authentication tokens
- **bcryptjs** for password hashing
- All components are mobile-responsive
- Touch targets meet 44px minimum requirement
- Suspense boundaries used for dynamic content

---

## 🚀 Quick Reference

### To add a new page:
1. Create `app/[route]/page.js`
2. Create `pages/[PageName].js` component
3. Add route to navigation if needed

### To add a new API endpoint:
1. Create `app/api/[endpoint]/route.js`
2. Export GET, POST, PUT, DELETE handlers as needed

### To add a new section:
1. Create `components/sections/[SectionName].js`
2. Import and use in `pages/HomePage.js` or relevant page

### To add a new UI component:
1. Create `components/ui/[ComponentName].js`
2. Follow existing component patterns
3. Ensure mobile responsiveness

---

*Last updated: Based on current project structure*

