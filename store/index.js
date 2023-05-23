import { defineStore } from "pinia";
import mainModule from "./module/testModel.js";

export const useMainModule = defineStore("mainModule", {
  state: () => mainModule.state,
  getters: mainModule.getters,
  actions: mainModule.actions,
});
