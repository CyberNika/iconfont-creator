const Promise = require('bluebird');
const path = require('path');
const fs = Promise.promisifyAll(require('fs'));
const exec = require('child_process').execSync;
const handlebars = require('handlebars');
const exists = fs.existsSync;

// TODO: add Vue/React components
class Component {
  constructor({ icons, fontName, output, clear }) {
    const distPath = path.resolve(output, 'components');

    if (clear) {
      exec(`rm -rf ${distPath}`);
    }

    if (!exists(distPath)) {
      exec(`mkdir ${distPath}`);
    }

    // delete .html created by iconfont-builder
    exec(`rm ${path.resolve(output, 'fonts/iconfont.html')}`);

    this.icons = icons;
    this.fontName = fontName || 'iconfont';
    this.distPath = distPath;
    this.timestamp = new Date().getTime();

    this.compileTemplate = (tpl, data) => {
      const templatePath = path.resolve(__dirname, `../template/${tpl}.hbs`);

      return fs.readFileAsync(templatePath)
      .then(res => res.toString())
      .then(res => {
        const template = handlebars.compile(res);
        return template(data);
      });
    };
  }

  createStyle() {
    return this.compileTemplate('style', {
      fontName: this.fontName,
      icons: this.icons,
      timestamp: this.timestamp,
    }).then(res => {
      return fs.writeFileAsync(path.resolve(this.distPath, 'iconfont.css'), res);
    });
  }

  createHtml() {
    return this.compileTemplate('html', {
      style: './iconfont.css',
      icons: this.icons,
    }).then(res => {
      return fs.writeFileAsync(path.resolve(this.distPath, 'index.html'), res);
    });
  }

  createVue() {
    return this.compileTemplate('vue', {
      icons: this.icons,
    }).then(res => {
      return fs.writeFileAsync(path.resolve(this.distPath, 'Icon.vue'), res);
    });
  }

  createReact() {
    return this.compileTemplate('react', {
      icons: this.icons,
    }).then(res => {
      return fs.writeFileAsync(path.resolve(this.distPath, 'Icon.jsx'), res);
    });
  }

  createRN() {
    return this.compileTemplate('react-native', {
      icons: this.icons,
    }).then(res => {
      return fs.writeFileAsync(path.resolve(this.distPath, 'Icon.js'), res);
    });
  }
}

module.exports = Component;
