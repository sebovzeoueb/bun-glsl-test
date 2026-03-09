# bun-glsl-test

To install dependencies:

```bash
bun install
```

## How to use GLSL plugin

### By preloading

This only works when you're directly running a file from Bun. `preload.ts` is referenced in `bunfig.toml` and will load the plugin before running the file.

If you do `bun run ./index.ts` you will see the expected result.

### In HTML file server

Bun allows you to serve an HTML file directly, there's a `serve.static` property not referenced in the main `bunfig.toml` documentation which allows you to specify plugins to use when bundling scripts from the page.

Note that the plugin is instantiated and exported in `glsl.ts` which is referenced in `bunfig.toml`. It didn't appear to be possible to reference the plugin package directly. To achieve the same result as `index.ts` we have to reference the `default` property of the object return by the plugin, see `browser.ts`.

To see this method in action, do `bun run ./serve.ts`.

### Build script

You can include plugins by calling the bundler from a script instead of the CLI, however the downside here is that you can't use watch mode. To see an example of this use `bun run build.ts`. Note that once again we use `browser.ts` where the `default` property is referenced in the script. If you look at the resulting JavaScript you will see that the shader is correctly inlined into the script (minus the part where you have to access `default`)