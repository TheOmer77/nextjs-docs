---
title: Customization
category: usage
---

## Site configuration

The `config.json` file in the `data/` directory defines various site-wide properties. In addition to [categories](/docs/categories), the following properties can be defined:

- `title` - Site title, appearing by default as the home page's `<title>`, as well as in the Nav's header.
- `titleTemplate` - Template for the `<title>` of pages.

## Special pages

The following files are special pages which will be displayed in specific situations:

- `index.mdx` - Home page of this docs site. It will be displayed when navigating to the root of the site (`/`).
- `_not-found.mdx` - The "404 not found" error page of the site, which will be displayed when attempting to navigate to a URL of a page that doesn't exist. If not present, a default error page will be used.

## Navbar customization

The navbar can be customized by editing the following files:

- `_nav-links.mdx` - Optional links that will appear after the search button in the navbar, such as links to your git repo, social media, etc.
  Within it you can use the `<NavLink>` component, an icon button which works as a link (`<a>`).
