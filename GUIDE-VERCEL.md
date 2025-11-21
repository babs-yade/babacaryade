# 🚀 Guide Étape par Étape - Déploiement sur Vercel

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir :
- ✅ Un compte GitHub (gratuit)
- ✅ Votre projet commité sur GitHub
- ✅ Le build fonctionne localement (`npm run build`)

---

## 📝 ÉTAPE 1 : Préparer votre projet sur GitHub

### 1.1 Créer un repository GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le bouton **"+"** en haut à droite → **"New repository"**
3. Remplissez :
   - **Repository name** : `portfolio-babacar-yade` (ou le nom de votre choix)
   - **Description** : "Portfolio professionnel - Product Designer & Brand Strategist"
   - **Visibilité** : Public ou Private (votre choix)
   - ⚠️ **NE COCHEZ PAS** "Initialize with README" (vous avez déjà des fichiers)
4. Cliquez sur **"Create repository"**

### 1.2 Pousser votre code sur GitHub

Ouvrez votre terminal dans le dossier du projet :

```bash
# Initialiser git si ce n'est pas déjà fait
git init

# Ajouter tous les fichiers
git add .

# Faire le premier commit
git commit -m "Initial commit - Portfolio ready for deployment"

# Ajouter le remote GitHub (remplacez USERNAME et REPO_NAME)
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO_NAME.git

# Pousser sur GitHub
git branch -M main
git push -u origin main
```

**Note** : Si vous avez déjà un repo Git, utilisez :
```bash
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO_NAME.git
git push -u origin main
```

---

## 🌐 ÉTAPE 2 : Créer un compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"** ou **"Log In"**
3. Choisissez **"Continue with GitHub"** (recommandé)
4. Autorisez Vercel à accéder à votre compte GitHub
5. Complétez votre profil si nécessaire

---

## 🎯 ÉTAPE 3 : Importer votre projet

### 3.1 Démarrer l'importation

1. Une fois connecté, vous verrez le **Dashboard Vercel**
2. Cliquez sur le bouton **"Add New..."** → **"Project"**
   - Ou directement sur **"Import Project"** si visible

### 3.2 Sélectionner votre repository

1. Vous verrez la liste de vos repositories GitHub
2. **Trouvez votre repository** (celui que vous venez de créer)
3. Cliquez sur **"Import"** à côté de votre repo

---

## ⚙️ ÉTAPE 4 : Configurer le projet

Vercel détecte automatiquement Vite, mais vérifiez la configuration :

### 4.1 Configuration automatique (généralement correcte)

Vercel devrait détecter :
- **Framework Preset** : Vite
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **Install Command** : `npm install`

✅ **Si c'est correct, passez à l'étape 4.2**

### 4.2 Configuration manuelle (si nécessaire)

Si la détection automatique ne fonctionne pas :

1. Cliquez sur **"Override"** à côté de Framework Preset
2. Sélectionnez **"Vite"** dans la liste
3. Vérifiez que :
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`

### 4.3 Variables d'environnement (OPTIONNEL)

Si vous voulez utiliser l'API Gemini :

1. Cliquez sur **"Environment Variables"**
2. Cliquez sur **"Add"**
3. Ajoutez :
   - **Name** : `GEMINI_API_KEY`
   - **Value** : Votre clé API Gemini
4. Cliquez sur **"Save"**

⚠️ **Note** : Le chat fonctionne sans cette variable grâce au système de règles.

---

## 🚀 ÉTAPE 5 : Déployer

1. Vérifiez que toutes les configurations sont correctes
2. Cliquez sur le bouton **"Deploy"** en bas de la page
3. ⏳ Attendez 30-60 secondes pendant le déploiement

Vous verrez :
- Installation des dépendances
- Build du projet
- Déploiement sur le CDN

---

## ✅ ÉTAPE 6 : Vérifier le déploiement

### 6.1 Voir votre site en ligne

Une fois le déploiement terminé :

1. Vous verrez un message **"Congratulations!"**
2. Cliquez sur **"Visit"** ou sur l'URL fournie
3. Votre portfolio est maintenant en ligne ! 🎉

L'URL sera quelque chose comme :
```
https://votre-projet.vercel.app
```

### 6.2 Tester votre site

Vérifiez que tout fonctionne :
- ✅ La page d'accueil s'affiche
- ✅ Les images se chargent
- ✅ La navigation fonctionne
- ✅ Le chat répond
- ✅ Le portfolio s'affiche
- ✅ Le site est responsive

---

## 🔄 ÉTAPE 7 : Déploiements automatiques

### 7.1 Comment ça fonctionne

Maintenant, **chaque fois que vous poussez du code sur GitHub** :

1. Vercel détecte automatiquement le changement
2. Lance un nouveau build
3. Déploie la nouvelle version
4. Vous recevez une notification

### 7.2 Faire une mise à jour

```bash
# Modifier vos fichiers
# ...

# Commit et push
git add .
git commit -m "Mise à jour du portfolio"
git push origin main

# Vercel déploie automatiquement ! 🚀
```

---

## 🌍 ÉTAPE 8 : Ajouter un domaine personnalisé (OPTIONNEL)

### 8.1 Ajouter votre domaine

1. Dans votre projet Vercel, allez dans **"Settings"**
2. Cliquez sur **"Domains"**
3. Entrez votre domaine (ex: `babacaryade.com`)
4. Suivez les instructions pour configurer les DNS

### 8.2 Configuration DNS

Vercel vous donnera des enregistrements DNS à ajouter :
- **Type A** : Point vers les IPs Vercel
- **Type CNAME** : Point vers `cname.vercel-dns.com`

---

## 📊 ÉTAPE 9 : Suivre les performances

### 9.1 Analytics (Gratuit)

1. Dans votre projet, allez dans **"Analytics"**
2. Activez **"Web Analytics"** (gratuit)
3. Voyez les statistiques de visite

### 9.2 Logs et erreurs

1. Allez dans **"Deployments"**
2. Cliquez sur un déploiement
3. Voyez les logs de build et les erreurs éventuelles

---

## 🛠️ Résolution de problèmes

### Problème : Le build échoue

**Solution** :
1. Vérifiez les logs dans Vercel
2. Testez localement : `npm run build`
3. Vérifiez que toutes les dépendances sont dans `package.json`

### Problème : Les images ne s'affichent pas

**Solution** :
1. Vérifiez que les images sont dans `public/images/`
2. Utilisez des chemins absolus : `/images/...`
3. Vérifiez la casse des noms de fichiers

### Problème : Erreur 404 sur les routes

**Solution** :
1. Vérifiez que `vercel.json` est présent
2. La configuration de redirection devrait être automatique

### Problème : Variables d'environnement

**Solution** :
1. Allez dans **Settings** → **Environment Variables**
2. Ajoutez vos variables
3. **Redéployez** le projet (Settings → Redeploy)

---

## 📱 Commandes utiles

### Via Vercel CLI (Optionnel)

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer depuis le terminal
vercel

# Déployer en production
vercel --prod

# Voir les logs
vercel logs

# Lister les projets
vercel ls
```

---

## 🎉 Félicitations !

Votre portfolio est maintenant en ligne sur Vercel !

### Prochaines étapes

1. ✅ Partagez votre portfolio
2. ✅ Testez sur différents appareils
3. ✅ Surveillez les performances
4. ✅ Mettez à jour régulièrement

### Liens utiles

- **Dashboard Vercel** : https://vercel.com/dashboard
- **Documentation Vercel** : https://vercel.com/docs
- **Support Vercel** : https://vercel.com/support

---

## 💡 Astuces

1. **Prévisualisation** : Chaque Pull Request GitHub crée automatiquement une preview
2. **Rollback** : Vous pouvez revenir à une version précédente dans "Deployments"
3. **Notifications** : Configurez les notifications email/Slack dans Settings
4. **Team** : Invitez des collaborateurs dans Settings → Team

---

**Besoin d'aide ?** Consultez la [documentation Vercel](https://vercel.com/docs) ou leur [support](https://vercel.com/support)

