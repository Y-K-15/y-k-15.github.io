# y-k-15 Portfolio

This is a personal portfolio website built with Astro and Tailwind CSS.

## 🛠 Project Structure

- `src/site.config.ts`: **The single source of truth for site content.** Edit this file to update profile info, projects, links, and writings.
- `src/pages/index.astro`: The main page layout and structure.
- `src/components/`: Reusable UI components (Card, Button, etc.).
- `src/styles/global.css`: Global styles and Tailwind directives.

## 📝 How to Update

1.  **Edit Content:** Open `src/site.config.ts` and modify the JSON objects.
    - `profile`: Your name, title, and bio bullets.
    - `links`: Social media links.
    - `featured`: Your top 3 projects.
    - `projects`: Other projects list. Set `isPrivate: true` for non-public work.
    - `writings`: Your latest blog posts (manual entry).
    - `contact`: Google Form URL.
2.  **Preview:** Run `npm run dev` to see changes locally.
3.  **Publish:** Commit and push to the `main` branch.

## 🚀 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions.

1.  Push changes to `main`:
    ```bash
    git add .
    git commit -m "Update content"
    git push origin main
    ```
2.  The workflow in `.github/workflows/astro.yml` will trigger, build the site, and deploy the `dist` folder to GitHub Pages.

## 💻 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
