# Server Components Client issue reproduction

### "TypeError: Cannot read properties of undefined (reading 'call')"

I'm seeing this error when importing `App.client.js` file into `_app.server.js`.

To reproduce (on branch `import-client-from-app-server`):

1. `git checkout import-client-from-app-server`
2. `pnpm install`
2. `pnpm dev`
3. Open a browser
4. Note the error `TypeError: Cannot read properties of undefined (reading 'call')`

