const fs = require('fs');
const exec = require('child_process').execSync;

const iconfont = require('iconfont-builder');
const SketchTool = require('sketch-tool');

const exportFiles = ({ file, output, type, clear }) => {
  const sketch = new SketchTool({
    file: file,
  });

  if (clear) {
    exec(`rm -rf ${output}`);
  }

  sketch.exportCall(type, {
    output,
    formats: 'svg',
  });
};

const exportIconfont = ({ path }) => {
  const svgs = fs.readdirSync(path).filter(item => /\.svg$/.test(item));

  iconfont({
    icons: svgs.map((item, index) => ({
      name: item.replace('.svg', ''),
      file: item,
      codepoint: 6000 + index,
    })),
    src: path,
    fontName: 'iconfont',
    descent: 0,
    dest: path,
  }).then();
};

module.exports = {
  exportFiles,
  exportIconfont,
};
