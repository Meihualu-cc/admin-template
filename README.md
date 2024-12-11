

### 2.安装依赖

```bash
cd min-xs-admin
```

推荐使用`pnpm`

```bash
pnpm i
```

`npm`安装

```bash
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
# 如果下载依赖慢可以使用淘宝镜像源安装依赖
npm install --registry=https://registry.npm.taobao.org

```

### 3.运行

```bash
npm run dev
```

### 4.打包

```bash
npm run build
```


```base
.
├── build                         #全局公共配置目录
├── public                        #公共静态文件目录
├── src                           #项目代码目录
│   ├── App.vue                   #主vue模块
│   ├── assets                    #项目静态文件目录
│   ├── components                #公共组件
│   ├── config                    #项目配置
│   ├── enum                      #枚举
│   ├── layouts                   #布局目录
│   ├── locales                   #国际化配置
│   ├── instruct                  #指令
│   ├── main.js                   #入口文件
│   ├── router                    #路由
│   ├── server                    #请求存放目录
│   ├── store                     #vuex
│   ├── styles                    #公共样式
│   ├── utils                     #公共方法
│   └── views                     #存放vue页面目录
├── LICENSE
├── README.md
├── .editorconfig                 #规范编译器编码样式文件
├── .env.development              #开发环境变量
├── .env.production               #生产环境变量
├── .env.staging                  #测试环境变量
├── .eslintrc.js                  #esLint配置文件
├── .eslintrcignore               #esLint忽略配置文件
├── stylelint.config.js           #styleLint配置文件
├── .stylelintignore              #styleLint忽略配置文件
├── commitlint.config.js          #commitLint配置文件
├── prettier.config.js            #prettier配置文件
├── .prettierignore               #prettier忽略配置文件
├── index.html                    #根模板
├── jsconfig.json
├── package-lock.json
├── package.json
└── vite.config.js                #vite配置文件
```
