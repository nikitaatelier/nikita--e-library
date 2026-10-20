# Leaf & Lore — E-Library SPA

A modern, responsive single-page E-Library System built with React, Vite, React Router and custom CSS.

## Features

- Responsive premium light theme
- Sticky responsive navbar
- Home / Browse / Borrow / Contact routes
- Search books by title, author, or category
- Category and sorting filters
- Reusable BookCard component
- Borrow form with selected-book state
- Frontend-only success confirmation
- Contact form UI with success state
- Google Fonts: DM Sans + Playfair Display
- Soft shadows, rounded cards, doodles and subtle hover animations
- No backend required

## Folder structure

```text
e-library-spa/
├── public/
├── src/
│   ├── components/
│   │   ├── BookCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── books.js
│   ├── pages/
│   │   ├── Browse.jsx
│   │   ├── Borrow.jsx
│   │   ├── Contact.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Run in VS Code

1. Extract the ZIP.
2. Open the extracted `e-library-spa` folder in VS Code.
3. Open the VS Code terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the localhost URL shown by Vite.

## Build for production

```bash
npm run build
npm run preview
```

The project uses dummy book data and frontend-only forms, so no database or backend is required.
