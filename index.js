const colors = require('@radix-ui/colors');
const hbs = require('handlebars');
const fs = require('fs');

const cleanColors = Object.keys(colors).filter(colorName => colorName.match(/^[a-z]+$/));
console.info(`Color Palette: \n - ${cleanColors.join('\n - ')}`);
console.info(`Colors Count: ${cleanColors.length}`);
const data = {
    colors: cleanColors.map(color => ({value: color, name: color[0].toUpperCase() + color.substr(1), }))
}

const text = fs.readFileSync('./ui.hbs', {encoding: 'utf-8', flag: 'r'});
const template = hbs.compile(text);
const render = template(data);

fs.writeFileSync('./ui.html', render);
console.info('Done')

