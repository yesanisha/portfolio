# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### ✅ FIXED: Tailwind CSS PostCSS Error

**Error Message:**
```
Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin...
```

**Solution Applied:**
We downgraded from Tailwind CSS v4 to v3 which is more stable with Next.js 16.

If you encounter this issue again:
```bash
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@3 postcss@latest autoprefixer@latest
npm run dev
```

---

## Other Common Issues

### 1. Module Not Found Errors

**Problem:** Components not found or import errors

**Solution:**
```bash
# Check jsconfig.json exists with correct path aliases
# Restart the dev server
npm run dev
```

### 2. Styling Not Appearing

**Problem:** Tailwind classes not working

**Solutions:**
1. Check `tailwind.config.js` content paths:
   ```js
   content: [
     './app/**/*.{js,jsx}',
     './components/**/*.{js,jsx}',
   ]
   ```

2. Ensure `globals.css` has Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. Clear Next.js cache:
   ```bash
   rm -rf .next
   npm run dev
   ```

### 3. Animations Not Working

**Problem:** Framer Motion animations not showing

**Solutions:**
1. Ensure component has 'use client' directive at top
2. Check Framer Motion is installed:
   ```bash
   npm install framer-motion
   ```

### 4. Port Already in Use

**Problem:** Error: Port 3000 is already in use

**Solution:**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### 5. Build Errors

**Problem:** npm run build fails

**Solutions:**
1. Clear cache and rebuild:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. Check for console.log statements in components (should be fine, but remove if causing issues)

3. Verify all imports are correct

### 6. Images Not Loading

**Problem:** Images showing broken

**Solutions:**
1. Check image path is correct: `/images/filename.jpg`
2. Ensure image exists in `public/images/`
3. Use Next.js Image component:
   ```jsx
   import Image from 'next/image'
   <Image src="/images/photo.jpg" width={500} height={500} alt="Description" />
   ```

### 7. Cat Not Moving

**Problem:** Interactive cat not following cursor

**Solution:**
- This is a client component, ensure 'use client' is at the top
- Check browser console for errors
- Verify Framer Motion is installed

### 8. Easter Eggs Not Working

**Problem:** Keyboard shortcuts or easter eggs not triggering

**Solutions:**
1. Check browser console for JavaScript errors
2. Ensure EasterEggs component is imported in page.js
3. Try in different browser (some shortcuts might conflict)

### 9. Mobile Menu Not Opening

**Problem:** Hamburger menu doesn't work on mobile

**Solution:**
- Check Navigation.js has 'use client' directive
- Verify AnimatePresence from Framer Motion is imported
- Test on actual mobile device, not just browser resize

### 10. Deployment Errors

**Problem:** Build succeeds locally but fails on Vercel/Netlify

**Solutions:**
1. Check environment variables are set correctly
2. Verify Node version compatibility:
   ```json
   // In package.json
   "engines": {
     "node": ">=18.0.0"
   }
   ```

3. Check build logs for specific errors

### 11. Slow Performance

**Problem:** Website loads slowly or animations are laggy

**Solutions:**
1. Optimize images (compress, use WebP)
2. Reduce number of floating strawberries
3. Use production build: `npm run build && npm start`
4. Check browser performance tab

### 12. React Hydration Errors

**Problem:** Console shows hydration mismatch warnings

**Solutions:**
1. Ensure server and client render the same content
2. Don't use browser-only APIs during initial render
3. Use `useEffect` for client-only code

## Development Tips

### Clear Everything and Start Fresh
```bash
# Nuclear option - clears everything
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Check for Updates
```bash
# See outdated packages
npm outdated

# Update packages
npm update
```

### Debug Mode
```bash
# Run with more verbose output
DEBUG=* npm run dev
```

### Test Production Build Locally
```bash
npm run build
npm start
```

## Getting Help

If you're still stuck:

1. **Check Error Message:** Read the full error carefully
2. **Search Google:** Copy the error message
3. **Check Documentation:**
   - [Next.js Docs](https://nextjs.org/docs)
   - [Tailwind Docs](https://tailwindcss.com/docs)
   - [Framer Motion Docs](https://www.framer.com/motion/)

4. **Check Browser Console:** Often shows helpful errors
5. **Check Terminal:** Server logs show build issues

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Clear cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json && npm install

# Check for security issues
npm audit
npm audit fix
```

## System Requirements

- **Node.js:** 18.0.0 or higher
- **npm:** 8.0.0 or higher
- **Operating System:** macOS, Windows, Linux
- **Browser:** Chrome, Firefox, Safari, Edge (latest versions)

## Still Having Issues?

1. Make sure you're in the correct directory: `/portfolio`
2. Check that all files were created correctly
3. Verify internet connection (for npm install)
4. Try a different terminal/command prompt
5. Restart your computer (seriously, sometimes helps!)

## Contact

If you continue to experience issues:
- Check the GitHub issues
- Review the documentation files
- Reach out for help with specific error messages

---

**Current Status:** ✅ All systems working!
- Tailwind CSS v3 installed
- Next.js 16 running smoothly
- Development server on http://localhost:3000

Happy coding! 🍓✨
