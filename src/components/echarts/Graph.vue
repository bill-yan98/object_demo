<template>
  <div class="box">
      <div id="container"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Graph extends Vue {
    data = {
      nodes: [
        {
          id: 'node1', // String，该节点存在则必须，节点的唯一标识
          label: 'icon'
        },
        {
          id: 'node2', // String，该节点存在则必须，节点的唯一标识
          label: '我是APT',
          description: '192.168.1.1'
        },
        {
          id: 'node3', // String，该节点存在则必须，节点的唯一标识
          label: '我是防火墙',
          description: '192.168.1.1'
        },
        {
          id: 'node4', // String，该节点存在则必须，节点的唯一标识
          label: '防火墙',
          description: '192.168.1.1'
        },
        {
          id: 'node5', // String，该节点存在则必须，节点的唯一标识
          label: 'SOAR联动',
          description: '192.168.1.1'
        },
        {
          id: 'node6', // String，该节点存在则必须，节点的唯一标识
          label: 'SOAR联动',
          description: '192.168.1.1'
        },
        {
          id: 'node7', // String，该节点存在则必须，节点的唯一标识
          label: 'SOAR联动',
          description: '192.168.1.1'
        }
      ],
      edges: [
        {
          source: 'node1', // String，必须，起始点 id
          target: 'node2', // String，必须，目标点 id
          label: 'SOAR联动'
          // value: 1,
        },
        {
          source: 'node2', // String，必须，起始点 id
          target: 'node1', // String，必须，目标点 id
          label: 'SOAR联动'
          // value: 2,
        },
        {
          source: 'node1', // String，必须，起始点 id
          target: 'node3', // String，必须，目标点 id
          label: 'SOAR联动'
          // value: 3,
        },
        {
          source: 'node1', // String，必须，起始点 id
          target: 'node4', // String，必须，目标点 id
          label: 'SOAR联动'
          // value: 4,
        },
        {
          source: 'node1', // String，必须，起始点 id
          target: 'node5', // String，必须，目标点 id
          label: 'SOAR联动'
          // value: 5,
        },
        {
          source: 'node1', // String，必须，起始点 id
          target: 'node6', // String，必须，目标点 id
          label: 'SOAR联动'
          // value: 5,
        },
        {
          source: 'node1', // String，必须，起始点 id
          target: 'node7', // String，必须，目标点 id
          label: 'SOAR联动'
          // value: 5,
        }
      ]
    }

    $G6: any;

    mounted () {
      this.option()
    }

    option () {
      const container = document.getElementById('container')
      const width = (container as HTMLElement).scrollWidth
      const height = (container as HTMLElement).scrollHeight || 500
      const graph = new this.$G6.Graph({
        container: 'container',
        width,
        height,
        fitCenter: true,
        layout: {
          type: 'force',
          preventOverlap: true,
          controlPoints: true,
          nodeSpacing: 35,
          nodeStrength: 100,
          linkDistance: 100
        },
        defaultNode: {
          type: 'rect',
          size: [80, 40],
          labelCfg: {
            position: 'center'
          }
        },
        defaultEdge: {
          type: 'quadratic',
          autoRotate: true,
          style: {
            stroke: '#91d5ff',
            endArrow: {
              path: 'M 0,0 L 12, 6 L 9,0 L 12, -6 Z',
              fill: '#91d5ff'
              // d: -20,
            }
          }
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node']
        }
      })
      this.data.nodes.map((node: any, i) => {
        if (i === 0) {
          node.fx = width / 2,
          node.fy = height / 2
          node.type = 'dount'
          node.size = 180
          node.donutAttrs = {
            prop1: 10,
            prop2: 20,
            prop3: 25
          }
          node.labelCfg = {
            position: 'bottom',
            offset: -40,
            style: {
              fontSize: 20,
              // fill: '#ccc',
              fontWeight: 500
            }
          }
          node.donutColorMap = {
            prop1: '#8eaade',
            prop2: '#5c7cb8',
            prop3: '#1e3f7d'
          },
          node.icon = {
            show: true,
            img: 'https://g.alicdn.com/cm-design/arms-trace/1.0.155/styles/armsTrace/images/TAIR.png',
            width: 70,
            height: 70
          }
        } else {
          node.type = 'modelRect'
          node.size = [250, 80]
        }
        return Object.assign({}, node)
      })
      this.data.edges.map((edge: any, i) => {
        edge.id = 'edge' + i
        return Object.assign({}, edge)
      })
      graph.data(this.data) // 读取 Step 2 中的数据源到图上
      graph.render() // 渲染图；
    }
}
</script>

<style lang="scss" scoped>

</style>
