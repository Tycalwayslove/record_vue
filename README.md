# record_vue

#### 前言

这个项目就是用来记录日常开发中遇到的各种问题以及自己写的一些小 demo。之前一直在有道云笔记中写东西，但是发现写完自己并没有去整理，所以创建这个仓库，用作二次复习和记录。

#### 步骤

###### 1.代码规范

> 参考 [vue 风格指南](https://cn.vuejs.org/v2/style-guide/)

- 文件夹命名规范
  - 文件夹采用“大驼峰命名法”
- 文件命名规范
  - 文件名采用“大驼峰命名法”
- 组件名命名规范
  - 组件名应该始终是多个单词的，根组件 App 除外。
  - 基础组件名以 base 前缀开头
  - 单例组件名 （拥有单个活跃实例的组件）使用 The 前缀
  - 模板中组件命名为 kebab-case
- ID 命名
  - 小驼峰命名法
- class 命名
  - kebab-case
- 函数名命名规范
- 变量命名规范
- vue 文件方法声明顺序

```
  - components
  - props
  - data
  - created
  - mounted
  - activited
  - update
  - beforeRouteUpdate
  - metods
  - filter
  - computed
  - watch
```

- 注释

```
 <!--公用组件：数据表格
    /**
    * 组件名称
    * @module 组件存放位置
    * @desc 组件描述
    * @author 组件作者
    * @date 2017年12月05日17:22:43
    * @param {Object} [title]    - 参数说明
    * @param {String} [columns] - 参数说明
    * @example 调用示例
    *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
        */
     -->
```

- 其他 - 推荐使用 vscode 作为开发工具，共用 一套规范，并且使用 prettier + eslint 自动格式化代码
  - > vscode + eslint + Prettier 自动格式化代码（.eslintrc.js 配置） [参考配置文章](https://monkeywie.github.io/2018/08/03/vscode-vue-eslint-prettier/)
