# Art Institute Artwork Table

A React + TypeScript application built with **Vite** that displays artwork data from the Art Institute of Chicago API.  
The app uses **PrimeReact DataTable** with server-side pagination and persistent row selection.

---

## Features

- Server-side pagination (fetches data page by page)
- PrimeReact DataTable integration
- Multiple row selection via checkboxes
- Selection persists when navigating between pages
- Select/Deselect all rows on the current page
- Custom selection of *N* rows from the current page via overlay panel
- Responsive and clean UI

---

## Tech Stack

- **React**  
- **TypeScript**  
- **Vite**  
- **PrimeReact**  
- **Art Institute of Chicago API**

---

## API Used

[Art Institute of Chicago API](https://api.artic.edu/api/v1/artworks?page=1)

---

## Project Setup

Clone the repository:

```bash
git clone <your-github-repo-link>
```

Navigate to the project folder:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:  
[http://localhost:5173](http://localhost:5173)

---

## Build for Production

```bash
npm run build
```

---

## Deployment Guide (Netlify)

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder to Netlify:
   - Go to [Netlify](https://www.netlify.com/).
   - Create a new site → drag & drop the `dist` folder.
   - Or connect your GitHub repo and set build command to `npm run build`, publish directory to `dist`.

3. Copy your live site URL and add it below.

---

## Live Demo

**https://art-table-typescript.netlify.app/**

---

## Repository

**https://github.com/nehap3/art-table**

---

## Notes

- Data is fetched **page by page** using server-side pagination  
- Only **current page data** is stored in state  
- Selection is maintained using **row IDs**  
- No bulk prefetching of other pages  
- Custom selection is limited to **rows available on the current page**  
- Overlay panel is used for custom row selection input  

---

##Author

**Neha Pal**
