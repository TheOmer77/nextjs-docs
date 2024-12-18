---
title: Categories
category: usage
---

Categories are labels that can be used as a way to group and organize pages based on their content or purpose.

Categories and their display names can be defined in `data/config.json`. The `categories` field in this file is an object where keys are category IDs, and their values are the display names shown to the user.

Each page can be assigned a category - this is done by setting the `category` field of the page to the desired category ID. If a page does not have a `category` field, or its category value isn't one of the category IDs defined in `data/config.json`, it is considered uncategorized and displayed at the top of the sidebar.

For example, if a page is configured as follows:

```md
---
title: Very cool page
category: category
---
```

And `data/config.json` looks like this:

```json
{
  "categories": {
    "category": "This is a category"
  }
}
```

This page will be displayed in the sidebar under the "This is a category" category.
