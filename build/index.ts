import esbuild from 'esbuild';



esbuild.build({
  entryPoints: ['src/'],
  outfile: 'dist/',
  // plugins: [minifyTemplates(), writeFiles()], // <--
  // bundle: true,
  sourcemap: false,
  // write: false, // <-- important!
  minify: true,
});