---
title: Components & syntax
category: usage
---

The following components are available out of the box for use in Markdown and MDX:

## Alerts

Alerts are an extension of the blockquote syntax that you can use to emphasize critical information, working similarly to [how they do on GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts). To turn a blockquote into an alert, simply start it with either `[!INFO]` for info alerts, or `[!DANGER]` for danger alerts.

```md
> [!INFO]
> This is an alert with some info.

> [!INFO] **Note**
>
> There should be some important info here. Unfortunately, I couldn't come up with any.

> [!DANGER]
> This is an alert with a warning or negative message.

> [!DANGER] **Warning!**
>
> This is the most dangerous alert you have ever seen. But not really.
```

Alternatively, you can use the `<Alert>` component:

```jsx
<Alert type='info'>
  This is an alert with some info.
</Alert>
<Alert type='danger'>
  This is an alert with a warning or negative message.
</Alert>
```

#### Examples

> [!INFO]
> This is an alert with some info.

> [!INFO] **Note**
>
> There should be some important info here. Unfortunately, I couldn't come up with any.

> [!DANGER]
> This is an alert with a warning or negative message.

> [!DANGER] **Warning!**
>
> This is the most dangerous alert you have ever seen. But not really.

## Page layouts

The home & 404 error pages use special layout components by default, however these layouts can also be used in any other page.

### HomeLayout

```jsx
<HomeLayout
  title='Next.js Docs Template'
  tagline='A simple docs site powered by Next.js and ContentLayer.'
  actions={[
    { text: 'Get started', url: '/docs/basic-usage', primary: true },
    { text: 'Sample pages', url: '/sample/markdown-test' },
  ]}
/>
```

### ErrorLayout

```jsx
<ErrorLayout
  code={404}
  text="I'm not sure what you were looking for, but it's not here."
/>
```
