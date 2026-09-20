# Reepham College Computing Hub

A static, responsive homepage for the Reepham College Computing Department. It is ready for GitHub Pages and requires no build step.

## Publish on GitHub Pages

1. Upload `index.html` and the complete `assets` folder to the root of the repository.
2. Open **Settings → Pages** in GitHub.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.

## Update links

Edit the `href` on the relevant course or resource card in `index.html`. The search terms for each card are held in its `data-search` attribute.

## Files

- `index.html` — page content and links
- `assets/site.css` — responsive design
- `assets/site.js` — mobile navigation, search and filters
- `assets/computing-logo.png` — Computing Department logo
