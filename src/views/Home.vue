<template>
  <div class="home">
    {{ todos }}
    <br />
    {{ numberOfCompuletedTodo }}
  </div>
  <button @click="addTodo">Submit</button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    numberOfCompuletedTodo() {
      return this.todos.filter((todo: any) => todo.checked).length;
    },
  },
  methods: {
    addTodo() {
      this.$store.commit('ADD_TODO', 'AAAAA');
    }
  }
})
export default class Home extends Vue {}
</script>
