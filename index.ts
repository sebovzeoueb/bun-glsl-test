import glsl from 'bun-plugin-glsl';
import mainFrag from "./main.frag"

Bun.plugin(glsl());

console.log(mainFrag)