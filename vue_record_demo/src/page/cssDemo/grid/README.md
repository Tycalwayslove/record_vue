## Grid

### 基础概念

##### Grid Container

##### Grid Item

##### Grid Line

- 列网格线
- 行网格线

##### Grid Track

- 网格轨道

##### Grid Cell

- 单元

##### Grid Area

- 网格区域

### Grid 属性列表

#### Grid Container 属性

##### display

- inline-grid
- grid
- subgrid

##### grid-template-columns

##### grid-template-rows

- 写法
  - 空格代表行和列。值代表轨道大小，使用[]来命名网格线
- 新单位 fr
  - 除去固定宽高后的均分
- repeat

##### grid-template-areas（）

###### grid-area(网格区域名称)

- grid-are-name: 网格区域名字
- . 点号代表一个空网格单元
- none 没有定义网格区域

###### grid-column-gap / grid-row-gap

- 列/行之间的间距宽度

###### grid-gap

- grid-column-gap / grid-row-gap 的缩写

###### justify-items

沿着行轴对齐网格内的内容

- start
- end
- center
- stretch
