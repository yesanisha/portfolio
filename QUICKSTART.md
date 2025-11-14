# 🚀 Quick Start Guide

Welcome to your awesome new portfolio! Here's how to get started:

## 🎯 First Steps

1. **Start the development server:**
   ```bash
   cd portfolio
   npm run dev
   ```

2. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

3. **You should see:**
   - Your beautiful portfolio with strawberry theme 🍓
   - A cat following your cursor 🐱
   - Smooth animations and transitions

## ✏️ Customization Guide

### Update Your Information

1. **Personal Details** (`components/Hero.js`):
   - Change name, title, location
   - Update social media links
   - Modify the greeting message

2. **About Section** (`components/About.js`):
   - Write your bio
   - Update stats (cities, projects, etc.)
   - Customize interest cards

3. **Skills** (`components/Skills.js`):
   - Add/remove skills
   - Update skill categories
   - Change tech stack

4. **Experience** (`components/Experience.js`):
   - Add your work experiences
   - Update education details
   - Modify dates and descriptions

5. **Projects** (`components/Projects.js`):
   - Add your projects
   - Include GitHub links
   - Add live demo URLs

6. **Travel** (`components/Travel.js`):
   - Add cities you've visited
   - Update travel stats
   - Add memorable moments

7. **Contact** (`components/Contact.js`):
   - Update email, phone
   - Add social media links
   - Customize CTA messages

### Styling Changes

**Colors** (`tailwind.config.js`):
```js
// Change the strawberry theme colors
strawberry: {
  500: '#your-color', // Main color
  // Add more shades
}
```

**Fonts** (`app/layout.js`):
```js
// Import different Google fonts
import { YourFont } from 'next/font/google'
```

## 🎮 Easter Eggs Reference

Your portfolio includes these hidden features:

1. **Interactive Cat**: Clicks 10 times = surprise
2. **Keyboard Shortcuts**: Ctrl+Shift+S
3. **Konami Code**: ↑↑↓↓←→←→BA
4. **Double Click**: Anywhere on page
5. **Right Click**: Bottom-right strawberry
6. **Hover Effects**: Tooltips everywhere
7. **Console Messages**: Check browser console
8. **Hidden Elements**: Throughout the site

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Drag the `.next` folder to Netlify

### Other Platforms

Most Next.js hosting platforms work out of the box!

## 🛠️ Common Tasks

### Adding a New Section

1. Create component in `/components`
2. Import in `app/page.js`
3. Add to navigation in `components/Navigation.js`

### Changing Theme Color

Update these files:
- `tailwind.config.js` - Color definitions
- `app/globals.css` - Global styles
- Components using `strawberry-` classes

### Adding Images

1. Place images in `/public/images`
2. Reference: `/images/your-image.jpg`
3. Use Next.js `<Image>` component for optimization

## 🐛 Troubleshooting

**Server won't start?**
```bash
rm -rf node_modules
npm install
npm run dev
```

**Styling not working?**
- Check Tailwind config
- Clear browser cache
- Restart dev server

**Animations laggy?**
- Reduce number of animated elements
- Check browser performance
- Disable some easter eggs

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## 💡 Tips

- Test on multiple devices
- Check mobile responsiveness
- Optimize images before adding
- Keep content updated
- Share your portfolio link!

## 🎉 You're All Set!

Your portfolio is ready to impress! Update the content, deploy it, and share it with the world!

Need help? Check the README.md or reach out!

Happy coding! 🍓✨

---

Made with ❤️ by Anisha Kumari
