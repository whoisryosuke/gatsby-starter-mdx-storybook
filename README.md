# Gatsby Starter MDX Storybook

A template to easily create landing pages or a blog using the [GatsbyJS](http://gatsbyjs.org/docs/) framework to generate a static React powered PWA. It's lightning fast, SEO friendly, and deploys directly to a CDN like Github Pages or [Netlify](http://netlify.com).

You create content your using MDX, a mix of Markdown and JSX, allowing you to import and use React components inside of your Markdown (and much more). And you can create those React components inside Storybook, an isolated development environment for coding more accessible components.

🔎 Check out the [how-to-use MDX file](content/pages/how-to-use.mdx) to see MDX in action!

## Features

- 🎛 MDX
- 📖 Storybook
- 🔏 Typescript
- 💄 Styled Components
- 📦 Styled System
- ⚙️ Rebass
- ☎️ SEO component
- 🐦 Twitter embeds
- 📱 PWA
- ✈️ Offline-ready
- 📇 RSS
- 📝 Setup for blogs
- 📡 Webpack aliasing
- 👕 Prettier + ESLint + Markdown Lint
- 🔌 Nodemon

## Structure

- [Home](src/pages/index.js)
- [MDX Pages](content/pages/how-to-use.mdx)
- Blog
- - [Pagination Archive](src/templates/blog-archive.js)
- Tags
- - [Tag Archives](src/templates/tags.js)
- [About (React page example)](src/pages/about.js)

## Post Format / Fields

```markdown
---
title: Deploy a Static React Blog using GatsbyJS and Github
date: '2018-03-21'
section: blog
cover_image: './bulma-css-framework@1x.jpg'
tags:
  [
    'design',
    'development',
    'react',
    'github',
    'gatsbyjs',
    'ssg',
    'static site generator',
  ]
---

Your post here
```

- Section can be `blog` or `page`.
- Tags must be array
- Body content can include Markdown, HTML, or JSX.

## Plugins

### [Twitter](https://www.gatsbyjs.org/packages/gatsby-plugin-twitter/?=)

Seamlessly embed Tweets into posts by copying the blockquote portion of the embed code to your Markdown file. Don't copy the linked JS file, the plugin handles that automatically.

### [Manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/?=)

Configure in `gatsby-config.js`.

### [RSS Feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/?=)

Configure in `gatsby-config.js`.

## Development

Running on GatsbyJS, an SSG that creates static React apps.

1. `npm install`
2. `npm run develop`

## Deployment

### Github Pages

We locally build the files, then deploy using an NPM script that updates a specific Git repo branch called `gh-pages`.

To enable this, just initialize a git repo in the project, commit your changes, and add your Github repo as a remote repo. Make sure to label the remote as `origin`, otherwise the Gatsby deploy won't know which repo to push to.

**Deploy site to `origin` remote repo:**

`npm run deploy`

#### Creating or editing content

1. `git pull` from remote origin to ensure you have the latest posts and to merge any conflicts.
2. Add a new folder to `content/pages` or `content/blog` named after your post. This will be converted to the slug of the article -- you don't need to 'kebab-case' your title, but keep the format in mind.
3. Create a MDX file in the folder. Make sure to use previous files as a template to include all the appropriate frontmatter fields (listed above).
4. Fill out the post, optionally add a cover image (see next step for handling images)
5. For any images, include them in the same folder as the post's Markdown and link locally using `<img src="./my-image.jpg" />`. Or add them to the `/static/assets/` folder and it'll be accessible at `http://yourwebsite-or-localhost.com/assets/your-img.jpg`.
6. Run `npm run deploy` in the project root to deploy to Github Pages. Or commit code to Github's master branch to trigger a Netlify deploy.

### Netlify

This site is also capable of deploying on Netlify. Simply login to Netlify, create a new app, and point to this repository. Follow the steps, make sure Netlify is running `gatsby build` and pointing to the `/public` directory. This also allows you to use the Netlify CMS, since it requires a server for OAuth2 support and hosting on Netlify allows you re-build on each edit (rather than building from you personal machine and deploying from there).

## Todo

- [] Add property to frontmatter for layout, then render each component based on that (or default) in `gatsby-node.js`. Would allow users to break convention and have different header/footers depending on the page (as well as any styles/code they want to include in the new layout).
- [] Integrate with flat-file CMS that supports MDX for easier authoring. ~~Netlify CMS doesn't support Typescript~~

## Credits

- [GatsbyJS](http://gatsbyjs.org)
- [ReactJS](http://reactjs.org)
- [Styled Components](http://styled-components.com)
- [Styled System](https://github.com/styled-system/styled-system)
- [gatsby-starter-typescript-rebass-netlifycms](https://github.com/damassi/gatsby-starter-typescript-rebass-netlifycms/)
