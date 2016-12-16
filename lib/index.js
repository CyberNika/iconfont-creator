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

  return sketch.exportCall(type, {
    output,
    formats: 'svg',
  });
};

const exportIconfont = ({ src, output, clear }) => {
  const svgs = fs.readdirSync(src).filter(item => /\.svg$/.test(item));

  if (clear) {
    exec(`rm -rf ${output}`);
  }

  return iconfont({
    icons: svgs.map((item, index) => ({
      name: item.replace('.svg', ''),
      file: item,
      codepoint: 6000 + index,
    })),
    src,
    fontName: 'iconfont',
    descent: 0,
    dest: output,
  });
};

module.exports = {
  exportFiles,
  exportIconfont,
};
