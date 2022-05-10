# Server Components Client issue reproduction

## Two possibly related issues:

### 1. "This Hook is not supported in Server Components"

I'm seeing this error when using `useState` in a `.client.js` file.

The import chain is: `_app.server.js` -> `App.js` -> `App.client.js` -> `Foo.client.js` -> `useState`

To reproduce:

1. `pnpm install`
2. `pnpm dev`
3. Open a browser
4. Note the server component error, coming from a client file `Foo.client.js` using `useState`

### 2. "TypeError: Cannot read properties of undefined (reading 'call')"

I'm seeing this error when importing `App.client.js` file into `_app.server.js`.

To reproduce (on branch `import-client-from-app-server`):

1. `git checkout import-client-from-app-server`
2. `pnpm install`
2. `pnpm dev`
3. Open a browser
4. Note the error `TypeError: Cannot read properties of undefined (reading 'call')`


