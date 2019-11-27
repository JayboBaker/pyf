# Yellowcake
Basic domain [https://kind-dubinsky-b6d849.netlify.com/]

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![dependencies](https://david-dm.org/jinksi/netlify-cms-react-starter.svg?style=flat-square)](https://david-dm.org/jinksi/gatsbro)

An opinionated starter project for creating lightning-fast websites with [Gatsby](https://gatsbyjs.org) v2 and [Netlify CMS](https://netlifycms.org) v2.

- **[Gatsby](https://gatsbyjs.org)** static site generator
- **[Netlify CMS](https://github.com/netlify/netlify-cms)** for content management

## See also

[Netlify CMS Docs](https://www.netlifycms.org/docs/)
[Netlify CMS Repo](https://github.com/netlify/netlify-cms)

## Show me the CMS!

The CMS lives at [\_\_YOUR_SITE_NAME\_\_.netlify.com/admin](https://__YOUR_SITE_NAME__.netlify.com/admin).

## Developing

1.  Clone your repo to your local machine

1.  Install dependencies

`yarn` or `npm install`

1.  Run the development server

`yarn start` or `npm run start`

If you are adding or editing content locally in the CMS, a couple of things to note:

1.  Changes will be pushed to the remote repo.

1.  You will be prompted to enter your site's url, this is necessary for Netlify Identity to manage user login. This is stored in `localStorage`, so you might have to empty your browser cache if you are switching projects but remaining on `localhost:8000`.

## Editing CMS fields

The Netlify CMS configuration is located in `public/admin/config.yml`. This is where you will configure the pages, fields, posts and settings that are editable by the CMS.

Find out more in the [Netlify CMS Docs](https://www.netlifycms.org/docs/#configuration).
