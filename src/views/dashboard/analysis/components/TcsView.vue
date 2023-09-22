<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div id="mountNode"></div>
</template>

<script>
  import G6 from '@antv/g6';

  export default {
    data() {
      return {
        data: {
          // 点集
          nodes: [
            {
              id: 'node0',
              size: 50,
              style: { fill: '#5B8FF9', stroke: null },
              // color: '#019680',
            },
            { id: 'node1', size: 30 },
            { id: 'node2', size: 30 },
            { id: 'node3', size: 30 },
            { id: 'node4', size: 30, isLeaf: true },
            { id: 'node5', size: 30, isLeaf: true },
            { id: 'node6', size: 15, isLeaf: true },
            { id: 'node7', size: 15, isLeaf: true },
            { id: 'node8', size: 15, isLeaf: true },
            { id: 'node9', size: 15, isLeaf: true },
            { id: 'node10', size: 15, isLeaf: true },
            { id: 'node11', size: 15, isLeaf: true },
            { id: 'node12', size: 15, isLeaf: true },
            { id: 'node13', size: 15, isLeaf: true },
            { id: 'node14', size: 15, isLeaf: true },
            { id: 'node15', size: 15, isLeaf: true },
            { id: 'node16', size: 15, isLeaf: true },
          ],
          // 边集
          edges: [
            { source: 'node0', target: 'node1' },
            { source: 'node0', target: 'node2' },
            { source: 'node0', target: 'node3' },
            { source: 'node0', target: 'node4' },
            { source: 'node0', target: 'node5' },
            { source: 'node1', target: 'node6' },
            { source: 'node1', target: 'node7' },
            { source: 'node2', target: 'node8' },
            { source: 'node2', target: 'node9' },
            { source: 'node2', target: 'node10' },
            { source: 'node2', target: 'node11' },
            { source: 'node2', target: 'node12' },
            { source: 'node2', target: 'node13' },
            { source: 'node3', target: 'node14' },
            { source: 'node3', target: 'node15' },
            { source: 'node3', target: 'node16' },
          ],
        },
      };
    },
    mounted() {
      this.getView();
    },
    methods: {
      getView() {
        const container = document.getElementById('mountNode');

        const width = container.scrollWidth;
        const height = container.scrollHeight;
        // const width = window.
        const graph = new G6.Graph({
          container: container,
          width,
          height,
          layout: {
            type: 'force',
            preventOverlap: true,
            linkDistance: (d) => {
              if (d.source.id === 'node0') {
                return 100;
              }
              return 30;
            },
            nodeStrength: (d) => {
              if (d.isLeaf) {
                return -50;
              }
              return -10;
            },
            edgeStrength: (d) => {
              if (d.source.id === 'node1' || d.source.id === 'node2' || d.source.id === 'node3') {
                return 0.7;
              }
              return 0.1;
            },
          },
          defaultNode: {
            color: '#5B8FF9',
          },
          modes: {
            default: ['drag-canvas'],
          },
        });
        // 动态设置节点样式
        // graph.node((node) => {
        //   console.log(node)
        //   return {
        //     id: node.id,
        //     type: 'rect',
        //     style: {
        //       fill: 'blue'
        //     }
        //   }
        // })
        graph.data(this.data); // 读取 Step 2 中的数据源到图上
        // 给节点下方展示额外的文字
        graph.on('afterrender', () => {
          graph.getNodes().forEach((node) => {
            const { extraText, text1 } = node.getModel();
            const bbox = node.getBBox();
            const centerX = bbox.minX + bbox.width / 2;
            const centerY = bbox.minY + bbox.height / 2;
            const textGroup = graph.get('group').addGroup();
            const texta = textGroup.addShape('text', {
              attrs: {
                text: text1,
                x: centerX,
                y: centerY + 45,
                textAlign: 'center',
                textBaseline: 'middle',
                type: 'rect',
                fill: '#000',
                cursor: 'pointer',
                fontSize: 12,
              },
            });
            textGroup.addShape('text', {
              attrs: {
                text: extraText,
                x: centerX,
                y: centerY + 25,
                textAlign: 'center',
                textBaseline: 'middle',
                fill: '#000',
                fontSize: 12,
              },
            });
            // 添加边框
            const bbox1 = texta.getBBox();
            if (bbox1.height !== 0) {
              textGroup.addShape('rect', {
                attrs: {
                  x: bbox1.x - 4,
                  y: bbox1.y - 4,
                  width: bbox1.width + 10,
                  height: bbox1.height + 8,
                  stroke: '#000',
                  lineWidth: 2,
                  cursor: 'pointer',
                  radius: 7,
                },
              });
            }
            // 指定文字的点击事件
            texta.on('click', () => {
              // 处理点击事件的逻辑
              console.log('Label clicked!');
            });
          });
        });
        graph.render(); // 渲染图
      },
    },
  };
</script>

<style>
  /* stylelint-disable-next-line selector-id-pattern */
  #mountNode {
    width: 100%;
    height: 500px;
  }
</style>
