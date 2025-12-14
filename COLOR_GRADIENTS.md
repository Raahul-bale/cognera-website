# Color Gradients Reference

This document lists all color gradients used throughout the Cognera website.

## Primary Brand Colors

### Main Purple (#7440FA)
- **Hex**: `#7440FA`
- **RGB**: `rgb(116, 64, 250)`
- **Usage**: Primary brand color, buttons, links, hover states

### Background Colors
- **Dark Background**: `#080707`
- **Card Background**: `#1a1a1a`
- **Darker Card**: `#0a0a0a`
- **Light Form Background**: `#f5f5f0`

---

## Header Gradients

### Navigation Bar
```css
/* Default state */
linear-gradient(to bottom, #000000, #7440FA)

/* With active dropdown */
linear-gradient(to bottom, #000000 0%, #7440FA 100%)
```

### Dropdown Menus
```css
linear-gradient(to bottom, #7440FA 0%, #7440FA 5%, #5a2fc7 20%, #3d1f8f 40%, #1a1a1a 100%)
```
- **Color stops**:
  - 0%: `#7440FA` (Purple)
  - 5%: `#7440FA` (Purple)
  - 20%: `#5a2fc7` (Darker Purple)
  - 40%: `#3d1f8f` (Deep Purple)
  - 100%: `#1a1a1a` (Dark Gray)

### Mobile Menu
```css
linear-gradient(to bottom, #000000, #7440FA)
```

---

## Footer Gradients

### Footer Background
```css
linear-gradient(to bottom, #7440FA, #000000)
```

### Footer Brand Text Gradient
```css
linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.4))
```
- **Color stops**:
  - Start: `rgba(255,255,255,0.95)` (95% white)
  - End: `rgba(255,255,255,0.4)` (40% white)

---

## Hero Section Gradients

### Hero Background Shapes (Animated)
```css
/* Hero Shape 1 */
linear-gradient(#7440FA, #8B5CF6)
- From: #7440FA (Purple)
- To: #8B5CF6 (Lighter Purple)

/* Hero Shape 2 */
linear-gradient(#7440FA, #A78BFA)
- From: #7440FA (Purple)
- To: #A78BFA (Light Purple)

/* Hero Shape 3 */
linear-gradient(#7440FA, #7C3AED)
- From: #7440FA (Purple)
- To: #7C3AED (Violet)
```

---

## Section Component Gradients

### Problem Section
```css
bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]
```
- **Direction**: Bottom-right
- **From**: `#1a1a1a` (Dark Gray)
- **To**: `#0a0a0a` (Darker Gray)

### Solution Section Layers

#### Layer 1 - Data Layer
```css
bg-gradient-to-br from-slate-700/90 to-slate-800/90
```
- **From**: `slate-700` at 90% opacity
- **To**: `slate-800` at 90% opacity

#### Layer 2 - Insights Layer
```css
bg-gradient-to-br from-indigo-700/90 to-indigo-800/90
```
- **From**: `indigo-700` at 90% opacity
- **To**: `indigo-800` at 90% opacity

#### Layer 3 - Action Layer
```css
bg-gradient-to-br from-blue-700/90 to-blue-800/90
```
- **From**: `blue-700` at 90% opacity
- **To**: `blue-800` at 90% opacity

### Feature Grid Gradients

#### Feature 1 - Screen Time Intelligence
```css
bg-gradient-to-br from-slate-700/90 to-slate-800/90
```

#### Feature 2 - App Switching Flows
```css
bg-gradient-to-br from-indigo-700/90 to-indigo-800/90
```

#### Feature 3 - Flow State Detection
```css
bg-gradient-to-br from-blue-700/90 to-blue-800/90
```

#### Feature 4 - Behaviour Cohorts
```css
bg-gradient-to-br from-slate-600/90 to-slate-700/90
```

#### Feature 5 - Distraction Mapping
```css
bg-gradient-to-br from-indigo-600/90 to-indigo-700/90
```

#### Feature 6 - Privacy-Safe Analytics
```css
bg-gradient-to-br from-blue-600/90 to-blue-700/90
```

### How It Works Section
```css
bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]
```

### How It Works Icon Background
```css
bg-gradient-to-br from-slate-600 to-slate-700
```
- **From**: `slate-600`
- **To**: `slate-700`

### Final CTA Section
```css
bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]
```

---

## Promotional Card Gradients

### Ribbon Gradient (Dark)
```css
linear-gradient(to right, 
  #ef4444 0%,    /* Red */
  #f472b6 30%,   /* Pink */
  #ec4899 60%,   /* Rose */
  #a855f7 100%   /* Purple */
)
```

### Ribbon Gradient (Light)
```css
linear-gradient(to right,
  #f87171 0%,    /* Light Red */
  #f9a8d4 30%,   /* Light Pink */
  #f472b6 60%,   /* Pink */
  #c084fc 100%   /* Light Purple */
)
```

---

## Color Palette Summary

### Primary Colors
- **Purple**: `#7440FA` (Main brand color)
- **Light Purple**: `#8B5CF6`, `#A78BFA`, `#7C3AED`
- **Dark Purple**: `#5a2fc7`, `#3d1f8f`

### Neutral Colors
- **Black**: `#000000`
- **Dark Gray**: `#080707`, `#0a0a0a`, `#1a1a1a`
- **White**: `#ffffff`, `rgba(255,255,255,0.95)`, `rgba(255,255,255,0.4)`

### Accent Colors
- **Slate**: `slate-600`, `slate-700`, `slate-800` (with 90% opacity)
- **Indigo**: `indigo-600`, `indigo-700`, `indigo-800` (with 90% opacity)
- **Blue**: `blue-600`, `blue-700`, `blue-800` (with 90% opacity)

### Special Colors
- **CTA Button**: `#3399CC` (Light Blue)
- **Form Background**: `#f5f5f0` (Light Beige)

---

## Gradient Directions Used

1. **`to bottom`** - Vertical gradients (Header, Footer)
2. **`to right`** - Horizontal gradients (Promotional ribbons)
3. **`to-br`** (bottom-right) - Diagonal gradients (Cards, Sections)

---

## Usage Examples

### CSS Implementation
```css
/* Example: Header gradient */
background: linear-gradient(to bottom, #000000, #7440FA);

/* Example: Card gradient */
background: linear-gradient(to bottom right, #1a1a1a, #0a0a0a);
```

### Tailwind Classes
```html
<!-- Example: Feature card -->
<div class="bg-gradient-to-br from-slate-700/90 to-slate-800/90">
  <!-- Content -->
</div>
```

---

## Notes

- All gradients use smooth color transitions
- Opacity values (90%) are used for semi-transparent overlays
- The primary brand color `#7440FA` appears in most gradients
- Dark backgrounds (`#1a1a1a`, `#0a0a0a`) are used for depth and contrast
- White gradients with opacity are used for text effects in the footer



