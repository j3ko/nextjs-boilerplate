This is an opinionated [Next.js](https://nextjs.org/) boilerplate project with the following dependencies:

- [zustand](https://github.com/pmndrs/zustand) (state management)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss) (css framework)
- [daisyui](https://daisyui.com/docs/install/) (css components)
- [eslint](https://github.com/eslint/eslint)/[prettier](https://github.com/prettier/prettier) (code style)
- [release-please-action](https://github.com/google-github-actions/release-please-action) (automated versioning and changelog)

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Code Style

Eslint and prettier are used to standardize code style. Other ancillary packages used include:

- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

To lint the project:

```bash
yarn lint
```

To fix most linting issues:

```bash
yarn format
```

Workflows have been included to lint the project on pull request and push to main/develop branches. Git hooks have also been added via husky to ensure direct pushes to main/develop branches are linted.

## Git messages and Releases

Git messages conform to the [conventional commits](https://www.conventionalcommits.org) specification.

The repository is intended to have a linear develop/main git history. Pull requests are squashed and committed to develop and the commit message is defaulted from the pull request title and description.

Releases are handled via [release-please-action](https://github.com/google-github-actions/release-please-action).
