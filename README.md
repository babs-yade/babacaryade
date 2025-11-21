# Portfolio Babacar Samba Yatte

Portfolio professionnel de **Babacar Samba Yatte** - Product Designer & Brand Strategist basé à Dakar, Sénégal.

## ✨ Fonctionnalités

- 🎨 Design moderne et responsive
- 💬 Assistant chat intelligent (fonctionne sans API externe)
- 📱 Optimisé pour tous les appareils
- ⚡ Performance optimisée
- ♿ Accessible (ARIA, navigation clavier)
- 🔍 SEO optimisé

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <votre-repo-url>
cd brand

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Configuration optionnelle

Pour activer l'API Gemini (optionnel) :

1. Créez un fichier `.env.local` à la racine
2. Ajoutez votre clé API :
```
GEMINI_API_KEY=votre_cle_api_ici
```

**Note :** Le chat fonctionne parfaitement sans API Gemini grâce au système de règles intelligent.

## 📦 Scripts disponibles

```bash
npm run dev      # Démarrer le serveur de développement
npm run build    # Construire pour la production
npm run preview  # Prévisualiser le build de production
```

## 🎯 Sections du portfolio

- **Hero** : Section d'accueil avec présentation
- **À propos** : Présentation détaillée
- **Expérience** : Parcours professionnel
- **Compétences** : Skills techniques et soft skills
- **Portfolio** : Galerie Bento avec toutes les créations
- **Témoignages** : Avis clients
- **FAQ** : Questions fréquentes
- **Contact** : Formulaire et coordonnées

## 🛠️ Technologies utilisées

- **React 19** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Styling utility-first
- **Google Gemini API** (optionnel) - Assistant IA

## 📁 Structure du projet

```
brand/
├── components/          # Composants React
│   ├── About.tsx
│   ├── AIChat.tsx
│   ├── BentoPortfolio.tsx
│   └── ...
├── services/            # Services (chat, API)
│   ├── chatService.ts
│   └── geminiService.ts
├── public/              # Assets statiques
│   └── images/
│       ├── creas/      # Toutes les créations
│       └── yade.png    # Photo de profil
├── index.html
├── vite.config.ts
└── package.json
```

## 🌐 Déploiement

Consultez le fichier **[DEPLOY.md](./DEPLOY.md)** pour les instructions complètes de déploiement sur :
- Vercel (recommandé)
- Netlify
- GitHub Pages

### Déploiement rapide sur Vercel

```bash
npm i -g vercel
vercel
```

## 📝 Licence

Ce projet est privé et appartient à Babacar Samba Yatte.

## 📧 Contact

- **Email** : babacarsambayatte@gmail.com
- **Téléphone** : +221 77 055 54 45
- **Localisation** : Dakar, Sénégal

---

**Créé avec ❤️ par Babacar Samba Yatte**
