const fs = require('fs');
const exec = require('child_process').execSync;
const chalk = require('chalk');
const Promise = require('bluebird');

const iconfont = require('iconfont-builder');
const SketchTool = require('sketch-tool');
const Component = require('./Component');

const exportFiles = ({ file, output, type, clear }) => {
  const sketch = new SketchTool({
    file: file,
  });

  if (clear) {
    exec(`rm -rf ${output}`);
  }

  return sketch.exportCall(type, {
    output,
    formats: 'svg',
  });
};

const exportIconfont = ({ src, output, clear }) => {
  const svgs = fs.readdirSync(src).filter(item => /\.svg$/.test(item));
  const fontName = 'iconfont';

  if (clear) {
    exec(`rm -rf ${output}`);
  }

  const icons = svgs.map((item, index) => ({
    name: item.replace('.svg', ''),
    file: item,
    codepoint: 61441 + index,
  }));

  return iconfont({
    icons,
    src,
    fontName,
    descent: 0,
    dest: output,
  }).then(() => {
    const params = {
      output: src,
      clear,
      fontName,
      icons: icons.map(icon => ({
        name: icon.name,
        file: icon.file,
        code: icon.codepoint,
        hexCode: icon.codepoint.toString(16),
      })),
    };

    const createComponent = new Component(params);
    const actions = [
      createComponent.createStyle(),
      createComponent.createHtml(),
    ];

    return Promise.all(actions).then(() => {
      console.log('👌  all the Components created');
    }).error(err => {
      console.error(chalk.red.bold('☹️  Components created failed'));
      console.error(chalk.red.bold(`    ${err.message}`));
    });
  });
};

module.exports = {
  exportFiles,
  exportIconfont,
};
