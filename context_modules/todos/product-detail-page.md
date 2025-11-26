# Product Detail Page - Implementation Todo List

## Phase 1: Setup & Infrastructure

- [ ] Create product detail route at `src/client/routes/products/$productId.tsx`
- [ ] Create components directory structure:
  - [ ] `src/client/components/layout/`
  - [ ] `src/client/components/product/`
  - [ ] `src/client/components/icons/`
- [ ] Create product-specific styles at `src/client/styles/product-detail.css`
- [ ] Define design tokens (CSS variables) for colors, spacing, and borders

## Phase 2: Layout Components

- [ ] Implement `StatusBar` component (time, signal, battery indicators)
- [ ] Implement `Header` component with:
  - [ ] Back button/icon
  - [ ] Page title ("Detail")
  - [ ] Favorite/heart icon button

## Phase 3: Product Display Components

- [ ] Implement `ProductImage` component
  - [ ] Hero image with rounded corners
  - [ ] Shadow styling
  - [ ] Responsive sizing
- [ ] Implement `ProductHeader` component
  - [ ] Product name display
  - [ ] Temperature indicator (Ice/Hot)
  - [ ] Feature icons row (spicy, coffee bean, gift)
- [ ] Implement `RatingDisplay` component
  - [ ] Star icon
  - [ ] Rating score (e.g., 4.8)
  - [ ] Review count (e.g., 830)

## Phase 4: Content Components

- [ ] Implement `DescriptionSection` component
  - [ ] Product description text
  - [ ] "Read More" expandable functionality
  - [ ] Text truncation logic
- [ ] Implement `SizeSelector` component
  - [ ] Radio button group (S, M, L)
  - [ ] Active state styling
  - [ ] Size selection state management

## Phase 5: Action Components

- [ ] Implement `PriceDisplay` component
  - [ ] Price formatting
  - [ ] Currency symbol
  - [ ] Styling with primary color
- [ ] Implement `BuyButton` component
  - [ ] Primary CTA styling
  - [ ] "Buy Now" text
  - [ ] Click handler
  - [ ] Loading/disabled states

## Phase 6: Icons

- [ ] Create `BackIcon` component
- [ ] Create `HeartIcon` component (with filled/unfilled states)
- [ ] Create `SpicyIcon` component
- [ ] Create `CoffeeBeanIcon` component
- [ ] Create `GiftIcon` component
- [ ] Create `StarIcon` component (for ratings)

## Phase 7: Integration & Styling

- [ ] Connect components in main route file
- [ ] Apply CSS styles matching Figma design:
  - [ ] Background color (#FEF5EE)
  - [ ] Primary color (#C67C4E)
  - [ ] Text colors and typography
  - [ ] Spacing and layout
  - [ ] Border radius values
- [ ] Ensure mobile-first responsive design
- [ ] Add hover/focus states for interactive elements

## Phase 8: Backend Integration

- [ ] Create Product entity/model with Remult
- [ ] Define product data structure (name, description, price, image, etc.)
- [ ] Create API endpoint for fetching product by ID
- [ ] Integrate TanStack Query for product data fetching
- [ ] Add loading and error states

## Phase 9: Testing & Polish

- [ ] Test all interactive elements
- [ ] Verify responsive behavior
- [ ] Test navigation (back button, routing)
- [ ] Validate size selection functionality
- [ ] Test "Read More" expansion
- [ ] Verify data loading from backend
- [ ] Cross-browser testing
- [ ] Accessibility review (keyboard navigation, ARIA labels)

## Design Tokens Reference

```css
--color-primary: #C67C4E        /* Orange/brown CTA */
--color-secondary: #FEF5EE      /* Light peach background */
--color-text-primary: #2F2D2C   /* Dark text */
--color-text-secondary: #9B9B9B /* Gray text */
--color-accent: #F9A84D         /* Star rating */
--color-border: #DEDEDE         /* Button borders */
--border-radius-lg: 16px
--border-radius-md: 12px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
```

## Notes

- Use existing project patterns (React + TypeScript + CSS)
- Follow TanStack Router conventions for routing
- Use Remult for type-safe backend API
- No Tailwind - use plain CSS or CSS Modules
- Mobile-first approach matching iOS design
