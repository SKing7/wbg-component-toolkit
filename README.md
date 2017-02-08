# Component-starter-toolkit

微办公组件开发启动工具

## Install

`npm install wbg-component-toolkit -g`

##创建新组件开发环境

`wbg-ctoolkit --name xxxx`

`cd xxxx`

`npm install & bower install`

## Develop Component 

- run `npm run test` 启动开发环境

- 源码：`src`

- 访问`http://localhost:8081/test/`就可看到测试Demo

## Publish

修改`package.json`版本号

`npm publish` 发布项目到npm私有源

## 组件在项目中应用

`npm install [component-name]`

## 特性

- 支持es6
- 使用sass管理css
- scoped css
- 使用webpack对css，html，js进行压缩打包；
- test环境模拟微办公主站环境，内置bootstrapdeng，详见生成后项目下的`bower.json`

