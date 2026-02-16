# Website Testing Checklist - Swiss Hospitality Company

## Navigation Bar (Fixed at Top)
**Expected Layout:**
- Fixed position at top of page with navy blue background (rgba(15, 28, 60, 0.95))
- Backdrop blur effect
- Border at bottom: subtle white border (10% opacity)
- Contains logo on left: circular gold badge with "S" + "SWISS HOSPITALITY Company" text
- Desktop navigation links (hidden on mobile): Features, Our Visionary Leader, About Us, Our Solutions, Previous Experiences, Why Choose Us
- Mobile hamburger menu on small screens
- All links should have hover effect (change to gold color)

**What to Check:**
- [ ] Navbar stays fixed when scrolling
- [ ] Logo displays correctly with gold circle and navy "S"
- [ ] Desktop menu shows all 6 navigation links
- [ ] Links turn gold on hover
- [ ] Mobile menu icon appears on small screens
- [ ] Mobile menu expands/collapses when clicked

---

## 1. Hero Section
**Expected Layout:**
- Full viewport height (`min-h-screen`)
- Navy background (#0f1c3c)
- Centered content
- Decorative dot pattern in background (very subtle, 5% opacity)
- Two glowing gold orbs: top-right and bottom-left (blurred circles)
- Bottom gradient fade to white

**Typography:**
- Small gold text at top: "Swiss Hospitality Company" (uppercase, wide letter spacing)
- Main heading: "Welcome to" / "the World of" (with gold gradient) / "Hospitality"
  - Font sizes: 5xl on mobile, 7xl on tablet, 8xl on desktop
  - "the World of" should have gold gradient effect
- Subtitle in white/60% opacity
- "Schedule a Meeting" button: gold background, navy text, rounded full, hover effects

**What to Check:**
- [ ] Hero section takes full viewport height
- [ ] Background is dark navy blue
- [ ] Decorative elements visible (subtle dot pattern, glowing orbs)
- [ ] "Welcome to the World of Hospitality" displays across 3 lines
- [ ] "the World of" has gold gradient effect
- [ ] Button is gold with navy text
- [ ] Button has hover effect (slightly lighter gold, shadow appears)
- [ ] Bottom fade gradient to white visible

---

## 2. Solutions We Provide Section
**Expected Layout:**
- White background
- Section header centered: "What We Do" (gold, uppercase) + "Solutions We Provide" (navy)
- Gold underline bar (20px wide, centered)
- 3 columns grid (stacks on mobile)
- Cards have light gray background, rounded corners, hover effects

**3 Solution Cards:**
1. **Advisory Services** (Lightbulb icon)
   - 13 bullet points
2. **Project Management** (Folder/Kanban icon)
   - 8 bullet points
3. **Community Engagement & Development** (Users icon)
   - 6 bullet points

**Card Styling:**
- Light gray background (#f7f7f7)
- Icon in gold-tinted box (top of card)
- Title in navy, changes to white on hover
- Bullet points: small gold circles, gray text, changes to white/70% on hover
- Entire card background changes to navy on hover
- Smooth transition (500ms)
- Shadow appears on hover

**What to Check:**
- [ ] Section has white background
- [ ] Header shows "Solutions We Provide" in large navy text
- [ ] Gold decorative line under header
- [ ] 3 cards display side-by-side on desktop
- [ ] Each card has correct icon (Lightbulb, Folder, Users)
- [ ] All bullet points display correctly
- [ ] Hovering a card changes background to navy
- [ ] Text colors invert on hover (navy→white)
- [ ] Smooth animation when hovering
- [ ] Cards stack vertically on mobile

---

## 3. Previous Experiences Section
**Expected Layout:**
- Navy background (#0f1c3c)
- Section header: "Track Record" (gold, uppercase) + "Previous Experiences with:" (white)
- Gold underline bar
- Subtitle text in white/60%
- 3 circular progress indicators in a row
- Decorative glowing orb (top-right, gold)
- Copyright line at bottom: "Swiss Hospitality Company©" (gold, uppercase, wide tracking)

**3 Circular Progress Indicators:**
1. 40% - Government Organizations (gold: #c8a44e)
2. 40% - Giga and Mega Projects and Initiatives (lighter gold: #e0c878)
3. 20% - Private Sector (darker gold: #a88a3a)

**Circle Animation:**
- Should animate when section scrolls into view (threshold: 30%)
- Circles fill clockwise from top
- Percentage numbers count up from 0 to target value
- Animation duration: 1.5 seconds, ease-in-out

**What to Check:**
- [ ] Section has navy background
- [ ] Header "Previous Experiences with:" displays in white
- [ ] Gold decorative line visible
- [ ] 3 circular progress indicators visible
- [ ] Circles show correct percentages (40%, 40%, 20%)
- [ ] Each circle has different gold shade
- [ ] Circles animate when scrolling into view
- [ ] Numbers count up from 0
- [ ] Label text displays below each circle
- [ ] Copyright text at bottom in gold
- [ ] Layout responsive (circles stack on mobile)

---

## 4. Most Delivered Solutions Section
**Expected Layout:**
- Cream background (#f5f1ea)
- Section header: "Our Expertise" (gold, uppercase) + "Most Delivered Solutions" (navy)
- Gold underline bar
- Solution tags centered, wrapping to multiple rows
- Maximum width container (4xl)

**8 Solution Tags:**
1. Strategy Development
2. Regulation and Benchmark
3. Market Analysis
4. Community Engagement
5. PMO
6. Partnerships Forging
7. Scholarships
8. Academies & Schools Advisory

**Tag Styling:**
- White background
- Gold border (20% opacity)
- Navy text
- Rounded full (pill shape)
- Generous padding (8px vertical, 32px horizontal)
- Small shadow
- Hover: background changes to navy, text to white, border to navy
- Smooth transition (300ms)

**What to Check:**
- [ ] Section has cream/beige background
- [ ] Header "Most Delivered Solutions" displays correctly
- [ ] 8 tags display in centered, wrapped layout
- [ ] Tags have pill shape (fully rounded)
- [ ] Tags have white background with subtle gold border
- [ ] Hovering changes tag to navy background with white text
- [ ] Tags wrap nicely on smaller screens
- [ ] Spacing between tags is consistent

---

## 5. About Us Section
**Expected Layout:**
- White background
- 2-column grid (left: header + stats, right: content text)
- Stacks to single column on mobile

**Left Column:**
- "Who We Are" (gold, uppercase)
- "About Us" heading (navy, large)
- Gold underline bar (left-aligned)
- 3 stat boxes in a row:
  - 40% Government
  - 40% Giga Projects
  - 20% Private Sector
- Light gray backgrounds, rounded corners

**Right Column:**
- 3 paragraphs of body text
- Gray text (#666666)
- Large font size (18px)
- Relaxed line height

**What to Check:**
- [ ] Section has white background
- [ ] 2-column layout on desktop
- [ ] Left column shows "About Us" heading
- [ ] 3 stat boxes display correctly with percentages
- [ ] Right column shows 3 paragraphs
- [ ] Text is readable with good line height
- [ ] Layout stacks on mobile (header+stats on top, text below)
- [ ] Stat boxes have light gray background

---

## 6. Why Choose Us Section
**Expected Layout:**
- Navy background (#0f1c3c)
- Section header: "Based on what our clients say..." (gold, uppercase) + "Why Choose Us?" (white)
- Gold underline bar
- 6 cards in grid: 2 columns on tablet, 3 columns on desktop
- Decorative glowing orb (bottom-left, gold)

**6 Reason Cards:**
1. **Award-Winning** (Award icon)
2. **Global & Diverse Teams** (Globe icon)
3. **Transformational Approach** (TrendingUp icon)
4. **Strategic Partnerships** (Handshake icon)
5. **Results-Driven** (Target icon)
6. **Sustainable Impact** (ShieldCheck icon)

**Card Styling:**
- Semi-transparent white background (5% opacity)
- Backdrop blur
- White border (10% opacity)
- Rounded corners (2xl)
- Icon in gold-tinted box at top
- White title text
- Description in white/60%
- Hover: background opacity increases to 10%
- Smooth transition (300ms)

**What to Check:**
- [ ] Section has navy background
- [ ] Header "Why Choose Us?" in white
- [ ] 6 cards visible
- [ ] Cards display in 3 columns on desktop
- [ ] Each card has correct icon
- [ ] Card titles: Award-Winning, Global & Diverse Teams, etc.
- [ ] Cards have frosted glass effect (semi-transparent)
- [ ] Hover increases card background opacity
- [ ] Icons are in gold color
- [ ] Description text is dimmed white (60% opacity)
- [ ] Cards stack to 2 columns on tablet, 1 column on mobile

---

## 7. Footer Section
**Expected Layout:**
- Dark navy background (#0a1530)
- Top border: white/10%
- 3-column grid (stacks on mobile)
- Bottom copyright bar with border separator

**3 Columns:**
1. **Brand Section:**
   - Logo: gold circle with "S" + company name
   - Tagline text (dimmed white)

2. **Quick Links:**
   - "QUICK LINKS" heading (uppercase)
   - 4 links: About Us, Our Solutions, Previous Experiences, Why Choose Us
   - Links turn gold on hover

3. **Contact:**
   - "CONTACT" heading (uppercase)
   - Email: info@swisshospitality.sa
   - Website: www.swisshospitality.sa
   - Links turn gold on hover

**Bottom Bar:**
- Border separator (white/10%)
- Copyright text: "SWISS HOSPITALITY COMPANY© 2026. All rights reserved."
- Centered text
- Dimmed white (40% opacity)

**What to Check:**
- [ ] Footer has dark navy background
- [ ] 3 columns visible on desktop
- [ ] Logo matches navbar logo
- [ ] Quick Links section shows 4 links
- [ ] Contact section shows email and website
- [ ] Links have hover effect (turn gold)
- [ ] Copyright text at bottom with current year
- [ ] Layout stacks on mobile (vertical columns)
- [ ] Text is readable but dimmed

---

## Responsive Breakpoints to Test

### Mobile (< 768px)
- [ ] Navbar shows hamburger menu
- [ ] Hero text sizes down appropriately
- [ ] Solutions cards stack vertically
- [ ] Experiences circles stack vertically
- [ ] Solution tags wrap naturally
- [ ] About section stacks (stats on top, text below)
- [ ] Why Choose Us cards stack to 1 column
- [ ] Footer columns stack vertically

### Tablet (768px - 1024px)
- [ ] Solutions cards may show 2 columns or stack
- [ ] Experiences circles in a row or stacked
- [ ] Why Choose Us shows 2 columns
- [ ] Footer shows 3 columns or stacks

### Desktop (> 1024px)
- [ ] Navbar shows all links
- [ ] Solutions shows 3 columns
- [ ] Experiences shows 3 circles in a row
- [ ] Why Choose Us shows 3 columns
- [ ] All sections properly centered with max-width

---

## Animation & Interaction Tests

- [ ] Smooth scroll when clicking navigation links
- [ ] Hero button has hover effect (shadow appears)
- [ ] Solution cards animate on hover (background changes to navy)
- [ ] Experience circles animate when scrolling into view
- [ ] Solution tags animate on hover
- [ ] Why Choose Us cards have hover effect
- [ ] Footer links turn gold on hover
- [ ] All transitions are smooth (no janky animations)

---

## Color Palette Reference

- **Navy:** #0f1c3c
- **Navy Light:** #162247
- **Navy Dark:** #0a1530
- **Gold:** #c8a44e
- **Gold Light:** #d4b76a
- **Gold Dark:** #b08f3a
- **Cream:** #f5f1ea
- **White:** #ffffff
- **Gray 100:** #f7f7f7
- **Gray 600:** #666666

---

## Typography Reference

- **Font Family:** Inter (Google Fonts)
- **Weights Used:** 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Heading Sizes:** 
  - Hero: text-5xl to text-8xl (responsive)
  - Section Headers: text-4xl to text-5xl
  - Card Titles: text-xl
- **Small Text:** Uppercase with wide letter-spacing (0.3em) for labels

---

## Common Issues to Look For

- [ ] Images not loading (if any were added)
- [ ] Icons not displaying (lucide-react dependency)
- [ ] Fonts not loading (Inter from Google Fonts)
- [ ] Hover states not working
- [ ] Animations not triggering
- [ ] Layout breaking on specific screen sizes
- [ ] Text overflow or truncation
- [ ] Color contrast issues (readability)
- [ ] Links not working (anchor links with #)
- [ ] Mobile menu not opening/closing
- [ ] Circular progress not animating
- [ ] Gradient text not displaying (Safari/Firefox compatibility)

---

## Browser Compatibility Testing

Test in:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS/iOS)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

---

## Performance Checks

- [ ] Page loads quickly
- [ ] No layout shift during load
- [ ] Animations are smooth (60fps)
- [ ] No console errors
- [ ] Images optimized (if any)
- [ ] Fonts load without flash of unstyled text

---

## Accessibility Checks

- [ ] All interactive elements keyboard accessible
- [ ] Links have proper focus states
- [ ] Sufficient color contrast ratios
- [ ] Semantic HTML structure
- [ ] Alt text on images (if any added)
- [ ] Aria labels on mobile menu button
