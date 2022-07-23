const sass = require('sass');
const fs = require('fs');

const result = sass.compile('styles.scss');
fs.writeFile('styles.css', result.css, (err) => {
    if (err) {
        console.log(err);
    }
});