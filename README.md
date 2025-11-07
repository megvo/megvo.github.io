# GitHub Pages Starter (with D3, p5, and embeds)

This is a clean, minimal starter you can deploy **for free** with GitHub Pages and extend with any custom code (D3.js, p5.js, iframes, etc.).

## Quick Start

1. Create a new repository on GitHub (e.g., `my-portfolio`).
2. Download this starter and **upload all files** to your repo root (`index.html` should be at the top level).
3. In your repo: **Settings → Pages → Build and deployment**  
   - Source: **Deploy from a branch**  
   - Branch: **main** / `/ (root)`  
4. Wait for the deployment to finish, then visit the URL GitHub provides (e.g., `https://user.github.io/my-portfolio`).

## Custom Domain (Optional)
- Add your domain in **Settings → Pages → Custom domain**.
- Create a `CNAME` file with your domain or let GitHub create it.
- Update DNS: point your domain’s `A` record to GitHub Pages IPs, and `www` CNAME to `your-username.github.io`.

## Where to put your code
- HTML: `index.html`
- CSS: `assets/css/styles.css`
- JavaScript: `assets/js/` (D3 demo is in `d3-demo.js`, p5 sketch in `p5-sketch.js`)
- Images: `assets/img/`

## Embedding
- **D3.js**: edit `assets/js/d3-demo.js` or add new files.
- **p5.js**: edit `assets/js/p5-sketch.js`.
- **iframes**: replace the example iframe with your prototype (Observable, Figma, Framer, etc.).

## Notes
- This is static and fast. No build step. You can add frameworks later if needed.
- If you want markdown pages or blog posts, we can convert this to Jekyll later without breaking the design.
