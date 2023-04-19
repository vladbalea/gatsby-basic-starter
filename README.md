
# Gatsby Basic Starter

This Gatsby starter includes the "hello-world" template and the [Tailwind CSS](https://tailwindcss.com/) framework for quick and easy setup of a new website. It also includes a Seo component to help optimize your pages for search engines.


## Installation

Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying this starter.

```shell
gatsby new my-project https://github.com/vladbalea/gatsby-basic-starter
```
    
## Configuration

The `siteMetadata` object in `gatsby-config.js` is mainly used for SEO and social media sharing. These metadata values can be accessed using GraphQL queries or the `useSiteMetadata` hook (from `src/hooks/use-site-metadata.jsx`).

```javascript
siteMetadata: {
    title: "Site Title",
    description: "Site Description",
    image: "",
    url: "http://localhost:8000/",
    icon: "/favicon.png",
},
```

`title`: The title of your site. This is typically displayed in the browser tab and search engine results.

`description`: A brief description of your site. This is often used by search engines to provide a summary of your site in search results.

`image`: The URL of the default image to use when sharing your site on social media platforms. This image will be used if no other image is specified for a specific page or post.

`url`: The URL of your site. This should be set to the URL of your development server during development, and the URL of your deployed site when it is live.

`icon`: The URL of the favicon for your site. This is the small icon that appears in the browser tab next to the site title.
## The Seo component for the Gatsby Head

The Seo component is intended for use within the Gatsby Head component ([learn more here](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/)), and should be included on every page.

It uses the `useSiteMetadata` hook to retrieve default metadata values from the `siteMetadata` object defined in `gatsby-config.js`. You can easily override these values by passing `title`, `description`, and `image` as props.

If you provide a `title` prop, it will be displayed in the browser tab and search engine results in the following format: `Your Custom Title - Default Title`. If you don't provide a `title` prop, the component will use the default title: `Default Title`.

For instance, at the bottom of the index page, you can use the following code:

```javascript
export const Head = () => (
    <Seo
        title="The index page"
    />
)
```

With this configuration, the index page title will be displayed as `The Index Page - Site Title` (assuming the `title` value in the `siteMetadata` object is still "Site Title").

However, if you provide `description` and/or `image` props, the defaults will be entirely replaced.
## License

This Gatsby starter is released under the [BSD Zero Clause License](https://opensource.org/license/0bsd/).