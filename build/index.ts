import esbuild from 'esbuild';



esbuild.build({
  entryPoints: ['src/motdParser.ts'],
  outfile: 'dist/motdParser.js',
  // plugins: [minifyTemplates(), writeFiles()], // <--
  // bundle: true,
  sourcemap: false,
  // write: false, // <-- important!
  minify: true,
});