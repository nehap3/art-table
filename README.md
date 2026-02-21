```md
# Art Institute Artwork Table

This project is a React and TypeScript application built using Vite.  
It displays artwork data from the Art Institute of Chicago API in a table with server-side pagination and persistent row selection.

## Features

- Server-side pagination using API
- PrimeReact DataTable integration
- Multiple row selection using checkboxes
- Selection persists when navigating between pages
- Select and deselect all rows on the current page
- Custom selection of N rows from the current page
- Clean and responsive UI

## Tech Stack

- React
- TypeScript
- Vite
- PrimeReact
- Art Institute of Chicago API

## API Used

https://api.artic.edu/api/v1/artworks?page=1

## Project Setup

Clone the repository:

```

git clone <your-github-repo-link>

```

Go to project folder:

```

cd <project-folder>

```

Install dependencies:

```

npm install

```

Run the development server:

```

npm run dev

```

Open in browser:

http://localhost:5173

## Build for Production

```

npm run build

```

## Live Demo

Add your Netlify deployment link here

## Repository

Add your GitHub repository link here

## Notes

- Data is fetched page by page using server-side pagination
- Only current page data is stored
- Selection is maintained using row keys
- No bulk prefetching of other pages
- Custom selection is limited to current page rows

## Author

Neha Pal
```

* write a short submission message for recruiter
* give interview explanation of your selection logic
* help with Netlify deploy steps if stuck

Just tell me.
