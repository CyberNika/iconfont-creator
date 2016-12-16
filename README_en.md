# iconfont-creator

A simply CLI tool to create Iconfont and Icon Component from Sketch or SVGs.

[简体中文](./README.md)

## Installation

Prerequisites: Node.js ( >= 5.8.0 preferred ). 4.x should also work, but we haven't test it yet.

`$ npm install -g iconfont-creator`

If prompt permissions are insufficient, please use `$ sudo npm install -g iconfont-creator`.

## Usage

### create Iconfont from a Sketch file

`$ iconfont-creator sketch <sketch-file-path> [-o [output-path]>] [-t [slices-or-artboards]] [-c]`

- `<sketch-file-path>`
  - required, Sketch file's directory
- `-o [output-path]`
  - optional, iconfont created path, default `dist` in current directory
- `-t [slices-or-artboards]`
  - optional ( `slices` or `artboards` ), according to what for Sketch to export SVGs, `slices` (default) or `artboards`
- `-c`
  - optional, clear output directory before create

### create Iconfont from SVGs

`$ iconfont-creator svg <svg-directory> [-o <output-path>] [-c]`

- `<svg-directory>`
  - SVG files' directory
- `-o <output-path>`
  - optional, iconfont created path, default `<svg-directory>/fonts`
- `-c`
  - optional, clear output directory before create

### TODO

- add create Icon Component command
- combine `sketch` and `svg` command
