# TasteNest – Home page (React + Vite + Tailwind)

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

- All copy, prices and image URLs live in `src/data/content.js` (food images only; swap URLs for local files in `src/assets` anytime).
- `SmartImage` shows a food-emoji fallback if an image URL fails.
- Chef photos are icon/initial placeholders in `Experts.jsx` – replace `<ChefAvatar/>` with an `<img>` when real assets are ready.
- Breakpoints: mobile (<640), tablet (640+), desktop (1024+); content max-width 1200px.
