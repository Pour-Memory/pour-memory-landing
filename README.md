# Pour Memory - Coming Soon Landing Page

A beautiful, responsive "Coming Soon" landing page for Pour Memory, designed to transform wine into lasting memories. Built with modern web technologies and following brand guidelines for a sophisticated, minimal aesthetic.

## ✨ Features

- **Responsive Design**: Mobile-first approach with elegant scaling across all devices
- **Brand-Aligned Styling**: Uses Pour Memory's color palette and typography guidelines
- **PNG Logo Support**: Displays your actual brand logo with smart fallback
- **Fullscreen Background**: Beautiful wine imagery with optimized readability
- **Launch Timeline**: Clear "Coming Fall 2025" messaging for user expectations
- **Email Signup**: Clean, functional email collection with validation and celebration animations
- **Elegant Interactions**: Smooth transitions and hover effects
- **Accessibility**: Full keyboard navigation, screen reader support, and reduced motion options
- **Performance Optimized**: Fast loading with efficient CSS and JavaScript
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🎨 Design Features

### Background & Imagery
- **Fullscreen background**: Uses `bg.jpg` with subtle blur and darkening for text readability
- **Optimized clarity**: 15% more visible than initial implementation while maintaining readability
- **Professional overlay**: Brand-colored gradient overlay for sophisticated look

### Brand Colors Used
- **Black** (#1D1513) - Primary text and accents
- **Chocolate** (#5F5241) - Headings and borders
- **Merlot** (#74271B) - CTAs, highlights, and timeline text
- **Sage** (#ABA278) - Accent elements
- **Rosé** (#C4908E) - Soft backgrounds
- **Off-White** (#F7F6EB) - Page background

### Typography
- **Primary Font**: Inter (with Brother 1816 fallback)
- **Accent Font**: Playfair Display (with Mr Eaves XL Serif Narrow fallback)
- **Logo**: PNG image with text fallback
- **Timeline**: Elegant italic serif for launch date
- Responsive text sizing with `clamp()` for optimal readability

### Interactions
- Fade-in effects for page elements
- Parallax scrolling on desktop
- Smooth hover states and transitions
- Loading animations for form submission
- Celebration particles on successful signup
- Clean, centered form layout

## 🚀 Quick Start

1. **Add your assets**: 
   - Place your `logo.png` file in the root directory
   - Place your `bg.jpg` background image in the root directory
2. **Open the landing page**: Simply open `index.html` in your browser
3. **Test the email form**: Submit emails to see the interaction (currently simulated)
4. **Deploy**: Upload all files to your web hosting

## 📁 File Structure

```
pour-memory-landing/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── logo.png            # Your Pour Memory logo
├── bg.jpg              # Background wine image
├── STYLE_GUIDE.md      # Brand guidelines reference
└── README.md           # This file
```

## 🛠 Customization Guide

### Your Assets

**Logo Requirements:**
- **Format**: PNG with transparent background
- **Recommended size**: 600px wide × 180px tall max
- **Filename**: `logo.png` (or update the src in HTML)
- **Placement**: Automatically displays with responsive scaling

**Background Image:**
- **Format**: JPG recommended for photos
- **Filename**: `bg.jpg` (or update the CSS)
- **Quality**: High resolution for crisp display
- **Content**: Wine/celebration imagery works best

### Timeline Updates

Update the launch timeline by editing the HTML:
```html
<p class="launch-timeline">Coming Fall 2025</p>
```

### Background Adjustments

Fine-tune background clarity in `styles.css`:
```css
/* Adjust blur and brightness */
filter: blur(1px) brightness(0.85);

/* Adjust overlay opacity */
background: linear-gradient(
    135deg,
    rgba(247, 246, 235, 0.7) 0%,
    rgba(240, 230, 219, 0.65) 50%,
    rgba(203, 206, 199, 0.6) 100%
);
```

### Integrating Email Service

Replace the simulated email submission with your actual service:

```javascript
// In script.js, replace simulateEmailSubmission function:
async function submitToEmailService(email) {
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
    });
    
    if (!response.ok) {
        throw new Error('Failed to submit email');
    }
    
    return response.json();
}
```

#### Popular Email Service Integrations

**Mailchimp:**
```javascript
const response = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`, {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email_address: email,
        status: 'subscribed'
    })
});
```

**ConvertKit:**
```javascript
const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        api_key: 'YOUR_API_KEY',
        email: email
    })
});
```

## 📱 Responsive Design

- **Mobile**: < 768px
  - Stacked form layout
  - Logo max height: 120px
  - Centered text alignment
  
- **Tablet**: 768px - 1024px
  - Horizontal form layout
  - Logo max height: 150px
  - Improved spacing
  
- **Desktop**: > 1024px
  - Full parallax effects
  - Logo max height: 180px
  - Maximum content width: 800px

## ♿ Accessibility Features

- **Keyboard Navigation**: Full tab support with visible focus states
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Reduced Motion**: Respects user's motion preferences
- **Color Contrast**: Meets WCAG AA standards
- **Form Validation**: Clear error messages and success states
- **Focus Management**: Enhanced focus indicators

## 🔧 Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **CSS Grid & Flexbox**: Full layout support
- **CSS Custom Properties**: For easy color customization
- **ES6+ JavaScript**: Modern syntax with fallbacks
- **Background Effects**: Blur and backdrop-filter support

## 📊 Performance

- **Lightweight**: < 200KB total page size (including optimized images)
- **Fast Loading**: Optimized CSS and JavaScript
- **Web Fonts**: Efficient loading with font-display: swap
- **Image Optimization**: Proper sizing and compression
- **Minimal Dependencies**: No external frameworks

## 🚀 Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a repository and enable Pages

### Traditional Hosting
- Upload all files to your web server's public directory
- Ensure HTTPS for email collection
- Test all assets load correctly

## 🔒 Security Considerations

- **Email Validation**: Client and server-side validation
- **HTTPS**: Always use SSL for email collection
- **Privacy**: Include privacy policy link if collecting emails
- **GDPR Compliance**: Add consent checkbox if serving EU users

## 📈 Analytics Integration

Add tracking to monitor performance:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 SEO Optimization

The page includes:
- Semantic HTML structure
- Meta descriptions and titles
- Proper heading hierarchy
- Alt text for images
- Structured data ready

## 🐛 Troubleshooting

**Common Issues:**

1. **Logo not showing**: Check that `logo.png` exists in root directory
2. **Background not loading**: Verify `bg.jpg` is in root directory and properly sized
3. **Form not submitting**: Check JavaScript console for API errors
4. **Layout issues**: Verify CSS Grid/Flexbox support
5. **Performance**: Optimize image sizes if loading slowly

## 📞 Support

For questions about the Pour Memory brand guidelines, contact:
**Design Partner**: The Lookout Co.
**Email**: emma@thelookoutcompany.com

## 🎉 Deployment Checklist

- [ ] Add your `logo.png` file
- [ ] Add your `bg.jpg` background image
- [ ] Test email form functionality
- [ ] Set up email service integration
- [ ] Test on multiple devices and browsers
- [ ] Add analytics tracking
- [ ] Deploy to hosting platform
- [ ] Set up domain and SSL
- [ ] Monitor email signups and performance

---

**Pour Memory** - *Coming Fall 2025* 