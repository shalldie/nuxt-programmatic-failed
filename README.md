# nuxt-programmatic-failed

> SHOW ERROR

    Failed to show Nuxt.js app after 5 reloads

    Your Nuxt.js app could not be shown even though the webpack build appears to have finished.

    Try to reload the page manually, if this problem persists try to restart your Nuxt.js dev server.

## Step to show error

```bash
$ npm i

$ npm run dev
```

## How i fix this:

```bash

# 1. reset
$ rm -rf node_modules

$ rm package-lock.json

# 2. install nuxt first
$ npm i nuxt --save

# 3. install another two modules second
$ npm i @nuxt/typescript-build @nuxt/typescript-runtime --save

# 4. install other modules at last
$ npm i

# 5. it works!!
$ npm run dev

```

    So i think, the order of deps that matters!
