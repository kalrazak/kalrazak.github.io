# Haikal - GitHub Pages Site

This is a Next.js project configured for GitHub Pages deployment.

## Development

```bash
npm run dev
```

## Deployment

### Option 1: Manual Deployment
```bash
npm run deploy
```

### Option 2: Automatic Deployment (Recommended)
1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages

## Configuration

Before deploying, make sure to:

1. **Update the basePath** in `next.config.ts`:
   - Replace `'your-repo-name'` with your actual GitHub repository name
   - For example: if your repo is `https://github.com/username/my-site`, use `'/my-site'`

2. **Enable GitHub Pages** in your repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)
   - Folder: `/ (root)`

3. **Enable GitHub Actions**:
   - Go to Settings > Actions > General
   - Ensure "Allow all actions and reusable workflows" is selected

## Project Structure

- `src/app/` - Next.js app directory
- `src/components/` - React components
- `public/` - Static assets
- `.github/workflows/` - GitHub Actions workflows

## Technologies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- GitHub Pages
