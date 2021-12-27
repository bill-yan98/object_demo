<template>
  <div class="home">
    <draggable v-model="myArray" v-bind="dragOptions" group="people" @start="drag=true" @end="drag=false">
      <transition-group type="transition" :name="!drag ? 'flip-list' : null">
        <div v-for="element in myArray" :key="element.id" mrg>
          {{element.name}}
        </div>
      </transition-group>
    </draggable>
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import draggable from 'vuedraggable'

@Component({
  components: {
    HelloWorld,
    draggable
  }
})
export default class Home extends Vue {
  myArray = [
    {
      id: 1,
      name: 111
    },
    {
      id: 2,
      name: 222
    },
    {
      id: 3,
      name: 333
    },
    {
      id: 4,
      name: 444
    },
    {
      id: 5,
      name: 555
    },
    {
      id: 6,
      name: 666
    }
  ]

  get dragOptions () {
    return {
      animation: 200,
      group: 'description',
      disabled: false,
      ghostClass: 'ghost'
    }
  }

  drag = false
}
</script>

<style lang="scss" scoped>
[mrg] {
  width: 100%;
  height: 50px;
  background: #ddd;
  margin: 5px 0;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
</style>
