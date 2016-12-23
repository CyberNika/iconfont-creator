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
  - 必选参数，Sketch 文件的路径
- `-o [output-path]`
  - 选填参数，文件导出目录，默认为当前目录下的 `dist` 文件夹，默认会在当前目录下的 `components` 文件夹中生成 html 和 css 文件
- `-t [slices-or-artboards]`
  - 选填参数（`slices` 或 `artboards`），依照切片或画板进行导出 SVG，默认为 `slices`
- `-c`
  - 选填参数，是否在生成 Iconfont 前清空导出目录

### 从 SVG 生成 Iconfont

`$ iconfont-creator svg <svg-directory> [-o <output-path>] [-c]`

- `<svg-directory>`
  - SVG 文件的目录
- `-o <output-path>`
  - 选填参数，文件导出目录，默认为 `<svg-directory>/fonts`，默认会在当前目录下的 `components` 文件夹中生成 html 和 css 文件
- `-c`
  - 选填参数，是否在生成 Iconfont 前清空导出目录

### TODO

- 添加 Icon 组件的生成
- 合并 `sketch` 和 `svg` 命令
