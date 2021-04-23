{
  "name": "natours",
  "version": "1.0.0",
  "description": "Landing page for natours",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",  

    use by npm run watch sass, which watches our sass files and updates the browser when a change is made by writing the new sass code to the css file linked in the html
    "name of function":"name of package to run {entry point}    {output file}  -watch"

    "watch:sass":"node-sass sass/main.scss css/style.css -w",

    using npm live server to update the browser with any changes made wil devloping 
    "devServer": "live-server",


    starts the project running watch sass and devServer parallel with each other so we only need 1 terminal window
    "start" : "npm-run-all --parallel devServer watch:sass",

    //----------------------- BUILD PROCESS ---------------------------------------
    --step 1 - compile our sass to 1 css file , uses node-sass
    "name of function":"name of package to run {entry point}    {output file}"

    "compile:sass":"node-sass sass/main.scss css/style.comp.css",

    --step 2 - concat all of our css file to 1 concat file, using npm concat

    "name of function":"concat to -output file {name} (from ) other files needed .css"

    "concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css"

    --step 3 prefix for older browsers , here we prefix for last 10 versions of browsers , uses autoprefixer which is a subset of postcss, need postcss autoprefixer and postcss-cli

    "name of function":"postcsss us the autoprefixer -b(rowser) 'for the last 10 versions' {input file } -output {output file}",

    "prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.concat.css -o css/style.prefix.css"

    --step 4 compile the code from step 3, now that its is prefixed and has all css coe needed in the project
    "name of function":"name of package to run  {entry point}    {output file}  --compress the output file "
    
    "compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed"

    --combine all steps by using the npm-run-all package make suer in the correct order!

    "name of function":"name of package to run  all scripts to run "
    "build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"

  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^10.2.5",
    "concat": "^1.0.3",
    "node-sass": "^5.0.0",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.2.12",
    "postcss-cli": "^8.3.1"
  }
}