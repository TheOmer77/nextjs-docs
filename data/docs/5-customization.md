---
title: Customization
category: usage
---

## Site configuration

The `config.json` file in the `data/` directory defines various site-wide properties:

- `title` - Site title, appearing by default as the home page's `<title>`, as well as in the Nav's header.
- `titleTemplate` - Template for the `<title>` of pages.
- `links` - An array of links that will appear in the navbar, such as your git repo or social media. Each object in the array must be in the structure of:
  ```ts
  { href: string, label: string, type: string }
  ```
  In this example site the only type is `github`, but you can add additional types in `@/components/layout/nav/links.mdx`.
- `categories` - An object where keys are category IDs and values are display names, as described in the [categories page](/docs/categories).

## Special pages

{/* TODO: Remove this section */}

The following files are special pages which will be displayed in specific situations:

- `index.mdx` - Home page of this docs site. It will be displayed when navigating to the root of the site (`/`).
- `_not-found.mdx` - The "404 not found" error page of the site, which will be displayed when attempting to navigate to a URL of a page that doesn't exist. If not present, a default error page will be used.
