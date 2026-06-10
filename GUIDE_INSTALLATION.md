# 📚 Guide d'Installation et de Configuration

## Étape 1️⃣: Cloner le dépôt

```bash
git clone https://github.com/DAVY2603/page-flip.git
cd page-flip
```

## Étape 2️⃣: Structure du projet

```
page-flip/
├── index.html              # Page HTML principale
├── css/
│   └── style.css          # Feuille de styles
├── js/
│   └── script.js          # Script JavaScript avec StPageFlip
├── images/                # Dossier pour les images
├── README.md              # Documentation principale
├── GUIDE_INSTALLATION.md  # Ce fichier
├── package.json           # Configuration npm
└── .gitignore            # Fichiers à ignorer
```

## Étape 3️⃣: Lancer le serveur local

### Option A: Avec Python (recommandé si Python est installé)
```bash
python -m http.server 8000
```

### Option B: Avec Node.js
```bash
npm install
npm start
```

### Option C: Avec Node.js (http-server)
```bash
npm install -g http-server
http-server
```

## Étape 4️⃣: Accéder à l'application

Ouvrez votre navigateur et allez à:
```
http://localhost:8000
```

## Étape 5️⃣: Personnaliser votre catalogue

### Modifier le contenu des pages

1. Ouvrez le fichier `js/script.js`
2. Recherchez la section "Créer les pages du catalogue"
3. Modifiez le contenu HTML de chaque page

Exemple:
```javascript
const page2 = document.createElement('div');
page2.className = 'page page-2';
page2.innerHTML = `
    <div style="padding: 40px; text-align: center;">
        <h2>Votre contenu ici</h2>
        <p>Vos informations</p>
    </div>
`;
pageFlip.addPage(page2);
```

### Ajouter des images

1. Créez un dossier `images/` s'il n'existe pas
2. Ajoutez vos images
3. Référencez-les dans vos pages:

```html
<img src="images/ma-image.jpg" alt="Description" style="max-width: 100%;">
```

### Modifier les styles

Personnalisez les couleurs et le design dans `css/style.css`:

```css
body {
    background: linear-gradient(135deg, #votre-couleur1 0%, #votre-couleur2 100%);
}
```

## Étape 6️⃣: Configuration avancée de StPageFlip

Dans `js/script.js`, vous pouvez ajuster les paramètres:

```javascript
const pageFlip = new PageFlip(
    document.getElementById('book-container'),
    {
        width: 550,              // Largeur de chaque page
        height: 700,             // Hauteur de chaque page
        size: 'fixed',          // 'fixed' ou 'stretch'
        minWidth: 300,          // Largeur minimale
        maxWidth: 800,          // Largeur maximale
        minHeight: 400,         // Hauteur minimale
        maxHeight: 1000,        // Hauteur maximale
        maxShadowBlur: 20,      // Intensité de l'ombre
        showCover: true,        // Afficher la couverture
        mobileScrollSupport: true, // Support mobile
        usePortrait: true,      // Mode portrait
    }
);
```

## Étape 7️⃣: Déployer en ligne

### Option A: GitHub Pages

1. Allez dans les paramètres de votre dépôt
2. Sélectionnez "Pages" dans le menu latéral
3. Sous "Source", choisissez "main" (ou votre branche par défaut)
4. Cliquez sur "Save"

Votre site sera disponible à: `https://DAVY2603.github.io/page-flip`

### Option B: Netlify

1. Connectez-vous à [Netlify](https://netlify.com)
2. Faites glisser-déposer votre dossier `page-flip`
3. Ou connectez votre dépôt GitHub et déployez automatiquement

### Option C: Vercel

1. Connectez-vous à [Vercel](https://vercel.com)
2. Importez votre dépôt GitHub
3. Cliquez sur "Deploy"

## Étape 8️⃣: Contrôles et interactions

### Clavier
- **Flèche droite (→)**: Page suivante
- **Flèche gauche (←)**: Page précédente

### Souris
- **Clic sur le coin bas-droit**: Page suivante
- **Clic sur le coin bas-gauche**: Page précédente
- **Clic et glisser**: Feuilleter la page

### Mobile
- **Glissement vers la gauche**: Page suivante
- **Glissement vers la droite**: Page précédente

## 🚀 Conseils et astuces

### 1. Ajouter plus de pages
```javascript
const pageN = document.createElement('div');
pageN.className = 'page page-2';
pageN.innerHTML = `<div>Votre contenu</div>`;
pageFlip.addPage(pageN);
```

### 2. Personnaliser l'apparence des pages
Créez des classes CSS dans `css/style.css`:
```css
.page-custom {
    background: white;
    border: 2px solid #ddd;
}
```

### 3. Ajouter des événements
```javascript
pageFlip.on('flip', (object) => {
    console.log('Page actuelle: ' + object.data);
});
```

### 4. Utiliser des images de haute qualité
Optimisez vos images pour le web (JPG ou WebP)

### 5. Tester sur mobile
Utilisez les outils de développement de votre navigateur (F12) pour tester le mode mobile

## 📞 Besoin d'aide?

- [Documentation officielle StPageFlip](https://github.com/Nillyz/page-flip)
- [Exemples](https://nillyz.github.io/page-flip/)
- [Page-flip CDN](https://unpkg.com/page-flip@latest/dist/page-flip.umd.js)

## ✅ Checklist de déploiement

- [ ] Contenu des pages personnalisé
- [ ] Images optimisées et téléchargées
- [ ] Styles CSS ajustés à vos couleurs
- [ ] Lien de contact correct
- [ ] Testé sur desktop et mobile
- [ ] Déployé en ligne (GitHub Pages, Netlify, etc.)
- [ ] Lien de partage configuré

Bonne chance avec votre catalogue KENI! 🎉
