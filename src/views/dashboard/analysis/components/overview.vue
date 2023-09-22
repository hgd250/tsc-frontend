
<template>
  <div style="padding:30px;">
    <div id="mountNode" style="margin-top: 20px;"></div>

  </div>

</template>

<script>
import G6 from '@antv/g6'
import axios from 'axios'

export default {
  data() {
    return {
      nodes: [ ],
      edges: [ ],
      activeIndex:1
      }
    }
  ,
  async mounted(){
     await this.getNodeData();
   },
  methods: {
   getNodeData(){
      var res =  axios.get("http://54.211.182.203:8080/getAllHomelessForDashboard/");
      res.then((x)=>{
         console.log(x.data)
          var members = x.data.nodes.map(function( node){
            return node.id

            });
         this.initG6(x.data,members)
     });
    },


  initG6(data,members){
var container = document.getElementById('mountNode');
var width = container.scrollWidth ;
var height = container.scrollHeight || 500;


var graph = new G6.Graph({
  container: container,
  width ,
  height ,
  layout: {
    type: 'fruchterman',
    gravity: 5,
    speed: 5,
    // for rendering after each iteration
    tick: () => {
      graph.refreshPositions()
      hull2.updateData(hull2.members);
    }
  },
defaultEdge: {
    type: 'circle-running',
    fill:'#87BBF1',
    style: {
      lineWidth: 1,
      stroke: '#bae7ff',
      endArrow: true,
    },
  },
  defaultNode: {
    type: 'donut',
    size: 30,
    style: {
    fill: 'steelblue' ,
    stroke: '#EBF2FF',
       lineWidth: 1,
     },
  },
  modes: {
    default: ['drag-canvas'],
  },
});

graph.data({
  nodes: data.nodes,
  edges: data.edges.map(function (edge, i) {
    edge.id = 'edge' + i;
    return Object.assign({}, edge);
  }),
});

graph.render();

graph.on('node:dragstart', function (e) {
  graph.layout();
  refreshDragedNodePosition(e);
});
graph.on('node:drag', function (e) {
  refreshDragedNodePosition(e);
});
graph.on('node:dragend', function (e) {
  e.item.get('model').fx = null;
  e.item.get('model').fy = null;

});
  var hull2 =  graph.createHull({
  id: 'leafNode-hull1',
  members,
  padding: 10,
  style: {
  fill: '#87EAEF',
  stroke: 'green',
  },
  });
    graph.on('node:mouseenter', (e) => {
       var members =  hullMember(e.item._cfg.id,data)
       hull2.updateData(members);
   });
  graph.on('node:click', (e) => {
  this.$router.push('/dashboard/homeless');
  });
if (typeof window !== 'undefined')
  window.onresize = () => {
    if (!graph || graph.get('destroyed')) return;
    if (!container || !container.scrollWidth || !container.scrollHeight) return;
    graph.changeSize(container.scrollWidth, container.scrollHeight);
  };
  }
  }
}

function hullMember(node,data) {
  var hullmem = [];
  for (var i=0;i<data.nodes.length;i++)
  {
      if(data.nodes[i].id==node )
      hullmem.push(data.nodes[i].id);
  }
   for (var i=0;i<data.edges.length;i++)
  {
      if(data.edges[i].target==node )
      hullmem.push(data.edges[i].source);
  }

  return hullmem;
}
function refreshDragedNodePosition(e) {
  var model = e.item.get('model');
  model.fx = e.x;
  model.fy = e.y;
}
var realEdgeOpacity = 0.2;

    </script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
