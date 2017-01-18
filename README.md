# iconfont-creator

一个简单的从 Sketch 文件或 SVG 生成 Iconfont 和 Icon 组件的 CLI 工具。

[English ( beta )](./README_en.md)

## 安装

此工具依赖 Node.js（>= 5.8.0，4.x 应该也可以但并未进行测试 ）。

`$ npm install -g iconfont-creator`

如果提示权限不足，请使用 `$ sudo npm install -g iconfont-creator`。

## 使用

### 从 Sketch 文件生成 Iconfont

`$ iconfont-creator sketch <sketch-file-path> [-o [output-path]>] [-t [slices-or-artboards]] [-c]`

- `<sketch-file-path>`
  - 必填参数，Sketch 文件的路径
- `-o [output-path]`
  - 选填参数，文件导出目录，默认为当前目录下的 `dist` 文件夹，默认会在当前目录下的 `components` 文件夹中生成 html 和 css 文件
- `-t [slices-or-artboards]`
  - 选填参数（`slices` 或 `artboards`），依照切片或画板进行导出 SVG，默认为 `slices`
- `-c`
  - 选填参数，是否在生成 Iconfont 前清空导出目录
- `-m`
  - 选填参数，是否生成组件，见[生成 Vue/React/React-Native 组件](#生成-vuereactreact-native-组件)

### 从 SVG 生成 Iconfont

`$ iconfont-creator svg <svg-directory> [-o <output-path>] [-c]`

- `<svg-directory>`
  - SVG 文件的目录
- `-o <output-path>`
  - 选填参数，文件导出目录，默认为 `<svg-directory>/fonts`，默认会在当前目录下的 `components` 文件夹中生成 html 和 css 文件
- `-c`
  - 选填参数，是否在生成 Iconfont 前清空导出目录
- `-m`
  - 选填参数，是否生成组件，见[生成 Vue/React/React-Native 组件](#生成-vuereactreact-native-组件)

### 生成 Vue/React/React Native 组件

生成组件非常简单，只需在生成 Iconfont 时增加 `-m` 参数即可，参数值按逗号隔开，例如：

`iconfont-creator sketch ./iconfont.sketch -m react-native,react`

即可在 `<output-path>/components` 下生成 React-Native 和 React 组件。

### TODO

- 添加解析在线 Iconfont 的功能
- 优化依赖
