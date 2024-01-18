
// tsc --init to initialize and create a tsconfig file.
// Within the tsconfig we uncommented the rootDir and outDir. 
// Whenever I run the tsc command it will look for TS files in the rootDir and will create an output(index.js) to the ourDir.
// Dist usually stands for distribution

// In order to avoid writing tsc each time we want to compile our files we can write tsc --watch
// This will automatically compile our files whenever we hit save
// We can do the same with node, it will then watch for changes in the index.js file. Write node --watch dist/index.js (in this case)

console.log("hello world");
