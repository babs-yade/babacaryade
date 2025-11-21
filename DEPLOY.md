# Guide de Déploiement - Portfolio Babacar Yade

Ce guide vous explique comment déployer le portfolio en ligne sur différentes plateformes.

## 🚀 Préparation avant déploiement

### 1. Testez le build localement

```bash
# Installer les dépendances
npm install

# Tester le build
npm run build

# Prévisualiser le build
npm run preview
```

### 2. Vérifiez les fichiers importants

- ✅ Toutes les images sont dans `public/images/`
- ✅ Le fichier `.env.local` n'est PAS commité (déjà dans `.gitignore`)
- ✅ Le build fonctionne sans erreur

## 📦 Déploiement sur Vercel (Recommandé)

### Option 1 : Via l'interface Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub/GitLab/Bitbucket
3. Cliquez sur "New Project"
4. Importez votre repository
5. Vercel détectera automatiquement Vite
6. Cliquez sur "Deploy"

**Configuration automatique :**
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework Preset: Vite

### Option 2 : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour la production
vercel --prod
```

### Variables d'environnement sur Vercel

1. Allez dans Settings > Environment Variables
2. Ajoutez `GEMINI_API_KEY` (optionnel, pour l'API Gemini)
3. Redéployez

## 🌐 Déploiement sur Netlify

### Option 1 : Via l'interface Netlify

1. Allez sur [netlify.com](https://netlify.com)
2. Connectez-vous avec GitHub
3. Cliquez sur "Add new site" > "Import an existing project"
4. Sélectionnez votre repository
5. Configuration :
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Cliquez sur "Deploy site"

### Option 2 : Via Netlify CLI

```bash
# Installer Netlify CLI
npm i -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod
```

### Variables d'environnement sur Netlify

1. Allez dans Site settings > Environment variables
2. Ajoutez `GEMINI_API_KEY` (optionnel)
3. Redéployez

## 🔷 Déploiement sur GitHub Pages

### Configuration

1. Installez `gh-pages` :
```bash
npm install --save-dev gh-pages
```

2. Ajoutez dans `package.json` :
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Dans `vite.config.ts`, ajoutez :
```typescript
base: '/nom-de-votre-repo/',
```

4. Déployez :
```bash
npm run deploy
```

## 🔧 Variables d'environnement

### Variables nécessaires (optionnelles)

- `GEMINI_API_KEY` : Clé API Gemini pour l'assistant IA (optionnel, le chat fonctionne sans)

### Configuration selon la plateforme

**Vercel/Netlify :**
- Ajoutez les variables dans les paramètres du projet
- Elles seront disponibles lors du build

**GitHub Pages :**
- Les variables d'environnement ne sont pas supportées
- Le chat utilisera le système de règles par défaut

## ✅ Checklist avant déploiement

- [ ] Le build fonctionne localement (`npm run build`)
- [ ] Toutes les images s'affichent correctement
- [ ] Le chat fonctionne (avec ou sans API Gemini)
- [ ] Les liens de navigation fonctionnent
- [ ] Le site est responsive
- [ ] Les métadonnées SEO sont correctes
- [ ] Le fichier `.env.local` n'est PAS commité

## 🐛 Résolution de problèmes

### Les images ne s'affichent pas

Vérifiez que les images sont dans `public/images/` et utilisent des chemins absolus `/images/...`

### Erreur 404 sur les routes

Assurez-vous que les redirections sont configurées (déjà dans `vercel.json` et `netlify.toml`)

### Le build échoue

1. Vérifiez les erreurs dans le terminal
2. Assurez-vous que toutes les dépendances sont installées
3. Vérifiez la version de Node.js (recommandé: Node 18+)

## 📝 Notes importantes

- Le chat fonctionne **sans API Gemini** grâce au système de règles
- Si vous ajoutez `GEMINI_API_KEY`, le chat utilisera l'API Gemini automatiquement
- Tous les fichiers dans `public/` sont servis à la racine
- Le build optimise automatiquement les assets

## 🎉 Après le déploiement

1. Testez toutes les fonctionnalités sur le site en ligne
2. Vérifiez les performances avec Google PageSpeed
3. Testez sur différents appareils
4. Partagez votre portfolio !

---

**Besoin d'aide ?** Consultez la documentation de votre plateforme de déploiement.

