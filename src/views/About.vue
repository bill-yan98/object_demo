<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Graph />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Graph from '@/components/echarts/Graph.vue'

@Component({
  components: {
    Graph
  }
})
export default class About extends Vue {

}
</script>
