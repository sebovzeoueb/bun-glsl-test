import glsl from 'bun-plugin-glsl';

const build = () => Bun.build({
    entrypoints: ["./browser.ts"],
    outdir: "./dist/",
    plugins: [glsl()],
    sourcemap: 'linked'
  });

await build()