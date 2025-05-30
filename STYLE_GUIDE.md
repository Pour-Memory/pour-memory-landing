# Pour Memory Website Style Guide

_Transforming wine into a keepsake. Savor the story._

---

## 🌱 Brand Overview

Pour Memory is a lifestyle brand that blends sentimentality with functionality. The website experience should reflect the warmth, sophistication, and creativity embedded in the brand's DNA. Visuals, voice, and interactions should all reinforce our mission: turning wine into lasting memories.

---

## 🎨 Color Palette

| Name         | HEX      | Usage                          |
|--------------|----------|--------------------------------|
| Black        | #1D1513  | Primary text, accents          |
| Chocolate    | #5F5241  | Headings, borders, backgrounds |
| Merlot       | #74271B  | CTAs, highlights, icons        |
| Sage         | #ABA278  | Accents, hover states          |
| Rosé         | #C4908E  | Backgrounds, soft accents      |
| Sunshine     | #DFC48B  | Detail highlights              |
| Misty Blue   | #CBCEC7  | Secondary backgrounds          |
| Beige        | #F0E6DB  | Card backgrounds, overlays     |
| Off-White    | #F7F6EB  | Page backgrounds               |

**Usage Tips:**
- Use Merlot and Chocolate for strong emotional accents and focal points.
- Use Misty Blue, Beige, and Off-White to create a calm, nostalgic foundation.
- Keep high contrast in CTA buttons and form elements using Merlot or Black on light backgrounds.

---

## 🖋 Typography

### Headings

```css
font-family: 'Brother 1816', sans-serif;
font-weight: 400;
text-transform: uppercase;
```

- H1: 36pt
- H2: 30pt
- H3: 24pt

### Subheadings / Accents

```css
font-family: 'Mr Eaves XL Serif Narrow', serif;
font-style: italic;
font-weight: 400;
```

- Size: 24pt

### Body Copy

```css
font-family: 'Brother 1816', sans-serif;
font-weight: 400;
```

- Size: 15pt
- Sentence case

---

## 🔠 Logo Usage

- **Primary Logo**: Horizontal layout for desktops, headers, signage.
- **Secondary Logo**: Vertical layout for mobile headers and narrow spaces.
- **Minimum Size**: 2” tall x 5” wide

### 🚫 Don'ts:
- Don’t warp or stretch
- Don’t recolor
- Don’t crop or re-layout
- Don’t add drop shadows

---

## 🔖 Brand Marks

Use icon-style marks as:
- Favicons
- Watermarks
- Social avatars
- App icons
- Journal corner embellishments

---

## 💬 Tone of Voice

- **Warm, thoughtful, and polished**
- Avoid slang or overly corporate language
- Inspire nostalgia, celebration, and connection
- Use active, personal, and emotionally resonant phrasing

### Sample Copy Snippets

> “Every bottle has a story—let’s preserve it together.”

> “A toast to the night you’ll want to remember.”

> “Your memories belong somewhere beautiful.”

---

## 🧩 UI Elements

### Buttons

- **Primary CTA**: Merlot background, Off-White text
- **Secondary CTA**: Transparent with Chocolate border/text
- Rounded corners: `border-radius: 12px`

**Hover states:**
- Darken background or lighten border
- Add subtle shadow

### Forms

- Fields: Rounded inputs, Beige background
- Labels: Chocolate or Sage
- Submit buttons: Merlot or Sage
- Error states: Merlot text

---

## 🖼 Imagery Style

- Candid, natural light photography
- Showcase real moments: gifting, writing, sharing wine
- Color grading should lean warm, earthy, and nostalgic
- Avoid overly posed or sterile stock images

---

## 📱 Responsive Guidelines

- **Mobile-first design**
- Use the secondary logo in mobile headers
- Reduce font sizes by ~20% for small screens
- Stack CTAs and navigation with generous spacing
- Prioritize thumb-friendly tap targets

---

## 💡 Content Guidelines

- Include journaling prompts on product pages
- Encourage storytelling: testimonials, memory submissions
- Use elegant but accessible language in onboarding and tutorials

---

## 🔗 Useful Assets

- Fonts: `Brother 1816`, `Mr Eaves XL Serif Narrow`
- Logos: `/assets/logos/primary.svg`, `/assets/logos/secondary.svg`
- Color Tokens: defined in `/styles/colors.scss`

---

## 📬 Contact

Design Partner: The Lookout Co.  
Questions? Contact: emma@thelookoutcompany.com

---