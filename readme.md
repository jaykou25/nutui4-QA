### 安装步骤
pnpm i

pnpm run dev:h5

### 问题描述

公司有一个项目使用的是 nutui3, 大部分的业务都已经写完了. 

现在有一个新的需求需要用到 Uploader 组件的上传视频功能, 但是在 nutui3 里 Uploader 组件不支持视频上传, 但是在 nutui4 里是支持的.

我想在原来项目 nutui3 的基础上使用 nutui4 里的组件. 

我使用 npm 依赖重命名的办法将 nutui 的库名称重命名成 nutui4:  `pnpm i nutui4@npm:@nutui/nutui-taro`

然后在页面中正常导入使用 `import { Uploader } from nutui4`

在小程序端使用没有问题, 但是编绎到 h5 端后, 当点击上传按钮准备上传的时候出现报错:

`_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__.default.chooseImage is not a function`

我猜想是库重命名了之后, Taro 相关的 api 没有被编绎的原因, 我应该如果更改呢? 求教!