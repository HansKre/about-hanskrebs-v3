# My About me page

## Creating thumbnail images

### Under macOS

```bash
# create lowres images
mkdir lowres
sips -Z 640 -.jpg -o ./lowres/
sips -Z 640 -.jpeg -o ./lowres/
sips -Z 640 -.png -o ./lowres/
sips -Z 640 -.gif -o ./lowres/
# add _lowres as suffix
cd lowres
for filename in -; do mv -v "${filename}" "${filename%.-}_lowres.${filename##-.}"; done;
# move
cd ..
mv ./lowres/- ./
# remove folder
rm -r lowres
```

## Using `.webp`-format

- Good tutorial: [Embracing modern image formats](https://www.joshwcomeau.com/performance/embracing-modern-image-formats/)
- [`webp` Manual](https://developers.google.com/speed/webp/download)

### Webp Installation under macOS

Don't use the `brew` formula for installing `webp` if you want to use it for compressing `gif` images. For compressing `gif` images, you need the `gif2webp` package, which is not part of the `brew`-`webp` formula unfortunately.

Instead, install `webp` manually:

```bash
wget https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-1.2.1-mac-10.15.tar.gz  -O /tmp/libwebp-1.2.1-mac-10.15.tar.gz
tar -C /tmp -zxvf /tmp/libwebp-1.2.1-mac-10.15.tar.gz
sudo mv /tmp/libwebp-1.2.1-mac-10.15/bin/- /usr/local/bin/
rm /tmp/libwebp-1.2.1-mac-10.15.tar.gz
rm -r /tmp/libwebp-1.2.1-mac-10.15
```

### `webp cli` Usage

#### Single image

```bash
# -q 75 is the default
cwebp -q 80 image.jpg -o image.webp
gif2webp animated.gif -o animated.webp
```

#### Batch-mode for images

```bash
# all png-files
for filename in -.png; do cwebp -q 80 "${filename}" -o "${filename%.-}.webp"; done;
# all jpg-files
for filename in -.jpg; do cwebp -q 80 "${filename}" -o "${filename%.-}.webp"; done;
# all png-files with _lowres suffix
for filename in -_lowres.png; do cwebp -q 80 "${filename}" -o "${filename%.-}.webp"; done;
```

#### Batch-mode for gif

```bash
# all gif-files
for filename in -.gif; do gif2webp -q 80 "${filename}" -o "${filename%.-}.webp"; done;
# all gif-files with _lowres suffix
for filename in -_lowres.gif; do gif2webp -q 80 "${filename}" -o "${filename%.-}.webp"; done;
```

### Safari-Fallback

Safari still does not support `webp`-format: [https://caniuse.com/webp](https://caniuse.com/webp)
![alt text](docs/webp-browser-support.png)

So if we simply converted and replaced all of our images and updated our code from this:

```jsx
<img src='image.jpg' />
```

to this:

```jsx
<img src='image.webp' />
```

This would work fine in browsers like Chrome or Firefox. But it wouldn't work for Safari (and apparently neither for IE11).

We can use following fallback as a solution:

```jsx
<picture>
  <source srcSet='image.webp' type='image/webp' />
  <img src='fallback.jpg' />
</picture>
```

From now on, the `picture` element does the heavy lifting for us: if it sees a browser with missing support for the `image/webp`-type, it automatically serves the fallback-resource. Neat ????

### Further reading

- [`<source>`-tag with media queries](https://medium.com/front-end-weekly/html-picture-tag-in-practice-png-and-webp-formats-5a3fc51b5998)
- [detect webp support with js](https://ourcodeworld.com/articles/read/630/how-to-detect-if-the-webp-image-format-is-supported-in-the-browser-with-javascript)
- [detect webp support with @supports query](https://stackoverflow.com/questions/60913711/how-to-use-webp-images-and-support-safari)

## Paralax Scroll

- [`react-scroll-parallax`](https://www.npmjs.com/package/react-scroll-parallax)
- [`react-scroll-parallax`-storybook](https://react-scroll-parallax-next.surge.sh/?path=/story/parallaxbanner--with-parallax-disabled)

## Mail forwarding

- Let's say, we wanted to have mails sent to hans@mydomain.com to our private hans@gmail.com mailbox. To set this up, we need to setup a `MX`-record at out `DNS`-management.
- In my case, `netlify` is taking care of all the `DNS`-management.
- We first setup a forwarding with [improvmx.com](https://improvmx.com/), for example: hans@hanskrebs.me shall be forwarded to some private mail.
- Then, we need to setup the `MX`-records in the `netlify`-console as described in this [guide](https://improvmx.com/guides/netlify/) from improvmx.
- And that's it! Just note that you can't use this adress for outgoing e-mails.

## Safari-Fixes

- [Safari Image Size Auto Height CSS](https://stackoverflow.com/questions/10760243/safari-image-size-auto-height-css)

For those who --needs to use height auto-- and --parent of image is set to `display: flex`--, this trick will help.

`image { align-self: flex-start; }`

If your parent of image has set flex-direction: column, you need to do this instead.

`image { justify-self: flex-start; }`

## Setup Airbnb Style Guide

- Install VSCode Extensions: --Lint--
- Install VSCode Extensions: --Prettier--
- Install packages: `npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier`
- [Option] Install plugin and rules for `node`: `npm i -D eslint-plugin-node eslint-config-node`
- Install `javascript`-version of Airbnb Style Guide: `npx install-peerdeps --dev eslint-config-airbnb`
  - if this throws a dependency-error, install latest versions of deps manually: `npm i -D eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`
- [Optional] Install `typescript`-version of Airbnb Style Guide: [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)

  - Install dependencies:

  ```bash
  npm install eslint-config-airbnb-typescript \
            @typescript-eslint/eslint-plugin@^4.29.3 \
            @typescript-eslint/parser@^4.29.3 \
            --save-dev
  ```

  - Within your ESLint config file:

  ```json
  extends: [
    'airbnb',
  + 'airbnb-typescript'
  ]
  ```

  - Configure the ESLint TypeScript parser

  ```json
  {
    extends: ['airbnb', 'airbnb-typescript'],
  + parserOptions: {
  +   project: './tsconfig.json'
  + }
  }
  ```

- Setup project-local Linting-Rules: `npx eslint --init`
- Choose `json` for format of config-file
- In the end, choose --'Airbnb'---Option, when asked --'Which style guide do you want to follow?'--
- Changes to `.eslintrc.json`:

  - In the `extends` property add: `"extends": ["plugin:react/recommended", "airbnb", "plugin:import/react"],`
  - In the `settings` property add:

  ```json
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  ```

  - Add all installed eslint-plugins from your `package.json`, for example with plugins for `Typescript` and `Cypress`:

  ```json
  "plugins": [
          "cypress",
          "import",
          "jsx-a11y",
          "node",
          "prettier",
          "react",
          "react-hooks",
          "@typescript-eslint"
      ],
  ```

- [Optional]: Setup project-local Prettier Rules: Create `.prettierrc`-file in your project-root and add rules in there.
- [Optional]: Ignoring locally: Create `.prettierignore` in project-root and use `.gitignore`-synthax, i.e. `-.md` to ignore all `markdown` files. Example `.prettierignore`-file:

```.prettierignore
# Ignore artifacts:
build
coverage

# Ignore all Markdown files:
-.md
```

- [Optional] Create local `.eslintignore` file, example:

```eslintignore
!--/.eslintrc-
node_modules-
dist
-.svg
-.ico
-.json
.gitignore
-.md
-.log
-.lock
```

- Add following settings to `settings.json`:

```json
"eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "typescriptreact"
  ]
```

- Restart VSCode to make sure all linting-errors are properly shown
- [Optional] Manually lint all folders in project folder and output them to terminal: `npx eslint . --ext .js,.jsx,.ts,.tsx`
- [Optional] Add linting-script to `package.json` under `scripts`:

```json
"scripts": {
  "lint": "npx eslint . --ext .js,.jsx,.ts,.tsx",
  "lint:fix": "npx eslint . --ext .js,.jsx,.ts,.tsx --fix"
}
```

## Improve ESLint Performance

### Analyse current performance

```bash
$TIMING=1 npm run lint
# or `TIMING=1 eslint` if it is installed globally.
Rule                               | Time (ms) | Relative
:----------------------------------|----------:|--------:
@typescript-eslint/no-implied-eval |  5763.875 |    92.2%
import/no-cycle                    |   116.765 |     1.9%
@typescript-eslint/indent          |    54.890 |     0.9%
no-unused-vars                     |    26.089 |     0.4%
import/no-extraneous-dependencies  |    22.567 |     0.4%
@typescript-eslint/no-redeclare    |    20.651 |     0.3%
import/extensions                  |    17.254 |     0.3%
no-redeclare                       |    15.520 |     0.2%
react/no-unused-prop-types         |     7.384 |     0.1%
react/jsx-fragments                |     6.872 |     0.1%
```

### Improving performance

1. deactivate rules (at least during development to improve lint-on-typing experience)
2. Use `--cache` option

## Git stash

- `git stash` stashes changes to tracked files or staged changes. Stash works like a first-in-last-out stack.
- `git stash -u` inclused untracked files
- `git stash -a` inclued ignored files
- `git stash list` lists all stashes
- `git stash show` shows stash-diffs
- `git stash show -p` shows full stash-diffs
- `git stash pop` applies changes from last stash and pops changes from stash-stack
- `git stash apply` applies changes and keeps them in the stash-stack (useful to apply same changes on multiple branches)

[Source](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)

## Backlog

- parallax background for other work cards
- (?) landing page: on iPhone -> remote friendliness after page loaded -> jumps to beginning of page??
- landing page: blinking countdown animation before curtain opens
- About me: fade in left, then right with delay, both from below
- Photography -> horizontal scroll
  - [full-page example](https://s2d46.csb.app/)
  - [codesandbox](https://codesandbox.io/s/s2d46)
- HANS KREBS: [flipping letters](https://codesandbox.io/s/sim2r)
- Refactor:
  - Nomenklatur: Button.component.tsx
  - Wrappen:
    - `<MyHeader>Foo</MyHeader>`
    - `<LayoutContainer>???.</LayoutContainer>`
- animations
  - scroll-to-position // spring transformation
  - [parallax-inspirations](https://www.awwwards.com/inspiration/search?text=parallax&type=element)
  - implement for my landing-page [amazing entrance-animation from youtube](https://www.youtube.com/watch?v=3QrkCmsfewM)
- feature: color-palette selector component
- reverse engineer [secondary](https://www.wix.com/logo/maker/esh/zoe-editor?industry={"industry":"3d95f5101a3e882ac54beba2_a28c5e5ea1945e5fa4ca1728_portfolio","isCustom":false}&tags=creative,modern&selectedWebsiteId=3&logoId=c8caec57-43ad-442a-8851-771896c38b0e&logoPurpose=website&referralAdditionalInfo=arenaSplitPage) color pallette
- contact: fill space between social icons with dots
  - [stackoverflow](https://stackoverflow.com/questions/5476673/css-justify-text-fill-space-with-dots)
  - [codepen](https://codepen.io/Kseso/pen/fxrsL)
  - [SVG Line Between Divs](https://codepen.io/berky93/pen/vKmkWG)

### Alternative to `jss`

- using jss, makeStyles, props, typescript is very verbose to have to pass props to makestyles because they need to be typed
- own CSS file is not ideal because variables and JavaScript cannot be used at all; this is even less ideal than verbose code as described above
- `next.js` is bundles [`styled-jsx`](https://github.com/vercel/next.js/tree/canary/examples/with-styled-jsx), which also supports `server-side-rendering`. That should be an option to look into further.
  - con: can't use js-variables in styles!
- `react inline styles`
  - con: can't use `:hover`

### Digest of Alternatives

- `jss` vs. `styled-components` - paradigms:
  - `jss` is more like the traditional CSS-approach of styling by adding & removing classes. You can create fine-grained CSS-classes and merge a list of class-names.
  - `styled-components` is about creating purpose based, ready styled components
  - Usually, even in `jss`, you do not add or remove class-names when using react, but rather, styling happens with one single CSS-class controled by props.
- [styled-components](https://github.com/styled-components/styled-components)
- [linaria](https://github.com/callstack/linaria)
  - [linaria with next.js](https://github.com/vercel/next.js/tree/canary/examples/with-linaria)
- [styletron](https://github.com/styletron/styletron)
- according to [State of CSS Report 2020](https://2020.stateofcss.com/en-US/report/):
  - more than 44% haven't heard of `jss` and >13% would not use it again (compared to `styled-components`: >11%, >16%)
  - >18% used it and >26% would like to learn it (compared to `styled-components`: >49%, >24%)
  - Developer-Experience seems to strongly tend into direction of `styled-components`
  - ![css-in-jss-experience](https://stateofx-images.netlify.app/captures/css2020/en-US/css_in_js_experience_marimekko.png)
