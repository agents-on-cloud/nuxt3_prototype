<template>
  <div class="text-center conainer">
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:item.calories="{ item }">
        <v-chip :color="getColor(item.columns.calories)">
          HERE ID {{ item.columns.calories }}
        </v-chip>
      </template>
      <template v-slot:item.name="{ item }">
        <p class="hover-clickable">{{ item.columns.name }}</p>
      </template>
    </v-data-table>

    <p>Local State: {{ testNumber }} ----- Store State: {{ counter }}</p>

    <div>
      <v-btn @click="add"> increase</v-btn>
      <v-btn @click="getPokis">
        {{ pokimons.length ? "hide" : "get" }} pokimons</v-btn
      >
    </div>

    <v-card class="mx-auto mt-5" max-width="500">
      <v-list-item
        v-for="item in headers"
        :key="item.title"
        :title="item.align"
        subtitle="..."
      ></v-list-item>
    </v-card>
  </div>
</template>

<script>
import { useMainModule } from "../store/index";
let mainStore = {};
export default {
  data() {
    return {
      testNumber: 0,

      headers: [
        {
          title: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          key: "name",
          class: "primary white--text subtitle-1",
        },
        {
          title: "Calories",
          key: "calories",
          class: "primary white--text subtitle-1",
        },
        {
          title: "Fat (g)",
          key: "fat",
          class: "primary white--text subtitle-1",
        },
        {
          title: "Carbs (g)",
          key: "carbs",
          class: "primary white--text subtitle-1",
        },
        {
          title: "Protein (g)",
          key: "protein",
          class: "primary white--text subtitle-1",
        },
        {
          title: "Iron (%)",
          key: "iron",
          class: "primary white--text subtitle-1",
        },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
      headerProps: {
        class: "custom-header-row",
      },
      pokimons: [],
    };
  },
  computed: {
    counter() {
      return mainStore.counter;
    },
  },
  created() {
    mainStore = useMainModule();
    this.getPokis();
  },
  methods: {
    add() {
      mainStore.increaseCounterAction();
      this.testNumber = this.testNumber + 1;
      console.log(mainStore.counter, "count map");
      console.log(mainStore.getCounter, "double");
    },
    getPokis() {
      if (this.pokimons.length) return (this.pokimons = []);
      this.pokimons = mainStore.getPokimons;
    },
    getColor(calories) {
      if (calories > 400) return "red";
      else if (calories > 200) return "orange";
      else return "green";
    },
  },
};
</script>

<style lang="css" scoped>
.table-header-color {
  background-color: #194569 !important;
  color: aliceblue !important;
  /* height: 80px; */
}

.conainer {
  width: 90%;
  margin: 50px auto;
}

.hover-clickable {
  color: #0000;
  background: linear-gradient(90deg, #1095c1 50%, #000 0) var(--_p, 100%) / 200%
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  transition: 0.4s;
  cursor: pointer;
  width: max-content !important;
}
.hover-clickable:hover {
  --_p: 0%;
}
</style>
