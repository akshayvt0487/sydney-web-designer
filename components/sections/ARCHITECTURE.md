# Section Components Architecture

Visual guide to understanding how the section components fit together.

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Page Components Layer                     │
│  (app/services/*/page.tsx, app/page.tsx, etc.)              │
└────────────────────┬────────────────────────────────────────┘
                     │ imports
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              Section Components Layer                        │
│         /components/sections/                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ HeroSection  │  │FeaturesGrid  │  │ProcessSteps  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐                                           │
│  │ FAQSection   │                                           │
│  └──────────────┘                                           │
└────────────────────┬────────────────────────────────────────┘
                     │ consumes
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                   Data Layer                                 │
│                  /lib/data/                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  heroes.ts   │  │ features.ts  │  │processes.ts  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐                                           │
│  │   faqs.ts    │                                           │
│  └──────────────┘                                           │
└────────────────────┬────────────────────────────────────────┘
                     │ uses
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                Design System Layer                           │
│            /app/globals.css                                  │
│  • Colors (orange, navy, gray)                              │
│  • Typography (Manrope, Work Sans)                          │
│  • Buttons (.btn-primary, .btn-secondary)                   │
│  • Cards (.card)                                            │
│  • Grids (.grid-2, .grid-3, .grid-4)                       │
│  • Utilities (spacing, responsive)                          │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

### HeroSection

```
HeroSection
├── Background (gradient + decorative elements)
├── Container
│   ├── Badge (optional)
│   │   ├── Pulse indicator (optional)
│   │   ├── Icon (optional)
│   │   └── Text
│   ├── Heading
│   │   ├── Main heading
│   │   └── Subheading (optional)
│   ├── Description
│   ├── Buttons
│   │   ├── Primary button (popup or link)
│   │   └── Secondary button (link)
│   ├── Scroll Indicator (optional)
│   └── Stats Grid (optional)
│       └── Stat items
│           ├── Number
│           ├── Label
│           └── Description (optional)
```

### FeaturesGrid

```
FeaturesGrid
├── Container
│   ├── Section Header (optional)
│   │   ├── Title
│   │   └── Description
│   └── Grid (2, 3, or 4 columns)
│       └── Feature Card (repeated)
│           ├── Icon Container
│           │   └── FontAwesome Icon
│           ├── Title
│           ├── Description
│           └── Link indicator (if has link)
```

### ProcessSteps

```
ProcessSteps
├── Container
│   ├── Section Header (optional)
│   │   ├── Title
│   │   └── Description
│   └── Steps Container
│       └── Step (repeated)
│           ├── Connector Line (optional, except last)
│           ├── Step Indicator
│           │   ├── Numbered variant: Gradient circle with number
│           │   └── Icon variant: Icon in circle
│           └── Step Content
│               ├── Title
│               └── Description
```

### FAQSection

```
FAQSection
├── Container
│   ├── Section Header (optional)
│   │   ├── Title
│   │   └── Description
│   └── FAQ List
│       └── FAQ Item (repeated)
│           ├── Question
│           │   ├── Question icon
│           │   └── Question text
│           ├── Answer
│           └── Border separator (except last)
```

---

## Data Flow

### 1. Content Creation
```
Developer writes content
    ↓
Add to /lib/data/*.ts files
    ↓
Export as typed data structures
```

### 2. Component Consumption
```
Import component from /components/sections
    ↓
Import data from /lib/data
    ↓
Pass data to component as prop
    ↓
Component renders with design system styles
```

### 3. Example Flow
```
heroes.ts
  └─→ webDesign: HeroConfig
        └─→ <HeroSection data={heroes.webDesign} />
              └─→ Renders hero with orange theme
                    └─→ Uses .btn-primary, gradient bg, etc.
```

---

## Type System

```
┌─────────────────────────────────────────────────────────────┐
│                   TypeScript Interfaces                      │
└─────────────────────────────────────────────────────────────┘

/lib/data/heroes.ts
├── HeroBadge
├── HeroButton
└── HeroConfig
    └── Used by: HeroSection

/lib/data/features.ts
├── Feature
└── FeatureGroup
    └── Used by: FeaturesGrid

/lib/data/processes.ts
├── ProcessStep
└── ProcessFlow
    └── Used by: ProcessSteps

/lib/data/faqs.ts
├── FAQ
└── FAQGroup
    └── Used by: FAQSection

/components/sections/*
├── Each component exports its Props interface
└── Additional helper types (e.g., HeroStat)
```

---

## Responsive Behavior

```
Desktop (≥1024px)
├── FeaturesGrid: Full columns (2, 3, or 4)
├── ProcessSteps: Vertical with connectors visible
├── FAQSection: Full width (max-w-4xl)
└── HeroSection: Large text, stats in grid

Tablet (768px - 1023px)
├── FeaturesGrid: 4-col → 2-col, others unchanged
├── ProcessSteps: Same as desktop
├── FAQSection: Same as desktop
└── HeroSection: Medium text, stats in grid

Mobile (<768px)
├── FeaturesGrid: All → 1 column
├── ProcessSteps: 1 column, connectors hidden
├── FAQSection: Full width, compact spacing
└── HeroSection: Smaller text, stats in 2 columns
```

---

## Styling Architecture

### Class Hierarchy

```
globals.css (Base Styles)
├── CSS Variables (--primary-orange, --primary-navy, etc.)
├── Typography (h1-h6, p, work sans/manrope)
├── Buttons (.btn, .btn-primary, .btn-secondary, .btn-lg)
├── Cards (.card)
├── Grids (.grid-2, .grid-3, .grid-4)
└── Utilities (.text-center, spacing, etc.)
    ↓
Tailwind CSS (Utility Classes)
├── Layout (flex, grid, container)
├── Spacing (p-*, m-*, gap-*)
├── Colors (text-*, bg-*, border-*)
├── Typography (text-*, font-*)
└── Effects (hover:*, transition-*, transform-*)
    ↓
Component-Specific (Inline Classes)
├── Unique layouts per component
├── Hover effects and animations
├── Responsive modifiers (md:, lg:)
└── Component states (group-hover:, etc.)
```

### Color System

```
Primary Orange (#f59e0b)
├── Buttons (primary)
├── Icons
├── Accents
├── Hover states
└── Gradient elements

Primary Navy (#1e293b)
├── Headings
├── Dark backgrounds
├── Text
└── Borders

Text Light (#64748b)
├── Body text
├── Descriptions
└── Secondary text

Background (#f8fafc)
└── Alternate sections (.bg-secondary)
```

---

## File Organization

```
/components/sections/
├── Core Components (Production Code)
│   ├── FeaturesGrid.tsx       (118 lines)
│   ├── ProcessSteps.tsx       (110 lines)
│   ├── FAQSection.tsx         (95 lines)
│   ├── HeroSection.tsx        (185 lines)
│   └── index.ts               (15 lines)
│
├── Testing & Examples
│   └── __tests__.tsx          (118 lines)
│
└── Documentation
    ├── QUICKSTART.md          (Quick reference)
    ├── README.md              (Full documentation)
    ├── EXAMPLES.md            (Usage examples)
    └── ARCHITECTURE.md        (This file)

Total: 681 lines of TypeScript/React code
```

---

## Integration Points

### With Existing Components

```
Section Components
├── Uses CTASection (existing)
├── Works with StatsGrid (existing)
├── Replaces ServiceHeroSection (legacy)
└── Complements PortfolioCarousel (existing)
```

### With Next.js App Router

```
app/
├── page.tsx (Homepage)
│   └── Uses: HeroSection, FeaturesGrid, ProcessSteps, FAQSection
├── services/
│   ├── custom-web-design/page.tsx
│   │   └── Uses: HeroSection, FeaturesGrid, ProcessSteps, FAQSection
│   └── seo-sydney/page.tsx
│       └── Uses: HeroSection, FeaturesGrid, ProcessSteps, FAQSection
└── layout.tsx
    ├── Imports globals.css (design system)
    └── Loads Font Awesome (for icons)
```

---

## Performance Characteristics

```
Server-Side Rendering (SSR)
├── All components render on server
├── No client-side JavaScript (except buttons)
├── Fast initial page load
└── SEO-friendly HTML

Build Time
├── TypeScript compilation
├── Tailwind JIT compilation
├── Tree-shaking unused CSS
└── Code splitting per page

Runtime
├── Minimal JavaScript
├── No external dependencies
├── Optimized CSS
└── Fast re-renders (prop-based)
```

---

## Extension Points

### Adding New Variants

```
1. Component Level
   ├── Add new prop to interface
   ├── Implement conditional rendering
   └── Update documentation

2. Data Level
   ├── Add new fields to data interface
   ├── Update existing data
   └── Export helper functions

3. Style Level
   ├── Add new CSS classes to globals.css
   ├── Use in component templates
   └── Test responsive behavior
```

### Creating New Components

```
1. Create component file
   ├── /components/sections/NewComponent.tsx
   ├── Export props interface
   └── Add JSDoc comments

2. Create data structure
   ├── /lib/data/newdata.ts
   ├── Define interfaces
   └── Export data objects

3. Update barrel export
   ├── Add to /components/sections/index.ts
   └── Export component and types

4. Document
   ├── Update README.md
   ├── Add examples to EXAMPLES.md
   └── Update this architecture doc
```

---

## Design Principles

### 1. Composition Over Configuration
- Small, focused components
- Combine components for complex layouts
- Flexible props for customization

### 2. Data-Driven Rendering
- Centralized data in `/lib/data/`
- Components consume typed data
- Single source of truth

### 3. Design System First
- All styles from globals.css
- Consistent colors, spacing, typography
- Reusable utility classes

### 4. Type Safety
- Full TypeScript coverage
- Exported interfaces
- IntelliSense support

### 5. Performance
- Server-side rendering
- Minimal JavaScript
- Optimized CSS

### 6. Developer Experience
- Clear, simple APIs
- Comprehensive documentation
- Real-world examples

---

## Component Communication

```
Parent Page
    ↓ (props)
Section Component
    ↓ (renders)
DOM Elements
    ↓ (user interaction)
Browser Events
    ↓ (onClick, data-popup)
Next.js Router / Popup System
```

---

## Testing Strategy

### Component Tests
```
__tests__.tsx
├── Renders all components
├── Uses real data
├── Visual verification
└── Manual testing in browser
```

### Type Tests
```
TypeScript Compiler
├── Type checking
├── Interface validation
├── Import resolution
└── No compilation errors
```

### Integration Tests
```
Real Pages
├── Test on actual service pages
├── Verify responsive design
├── Check cross-browser
└── Validate accessibility
```

---

## Maintenance Workflow

### Updating Content
```
1. Edit data file in /lib/data/
2. Save and rebuild
3. Changes apply everywhere automatically
```

### Adding New Page
```
1. Add data to /lib/data/ files
2. Create page in app/
3. Import and use components
4. Done!
```

### Modifying Components
```
1. Update component in /components/sections/
2. TypeScript validates changes
3. Rebuild
4. All pages get updates
```

### Design Changes
```
1. Update globals.css
2. Changes apply to all components
3. Maintain consistency across site
```

---

This architecture enables rapid, consistent development while maintaining high code quality and design standards.
