import { Teleport, defineComponent, h } from "vue";
import { useNuxtApp } from "../nuxt.js";
export default defineComponent({
  name: "NuxtTeleportIslandSlot",
  props: {
    name: {
      type: String,
      required: true
    },
    /**
     * must be an array to handle v-for
     */
    props: {
      type: Object
    }
  },
  setup(props, { slots }) {
    const nuxtApp = useNuxtApp();
    const islandContext = nuxtApp.ssrContext?.islandContext;
    if (!islandContext) {
      return () => slots.default?.();
    }
    islandContext.slots[props.name] = {
      props: props.props || []
    };
    return () => {
      const vnodes = [h("div", {
        style: "display: contents;",
        "data-island-uid": "",
        "data-island-slot": props.name
      })];
      if (slots.fallback) {
        vnodes.push(h(Teleport, { to: `island-fallback=${props.name}` }, slots.fallback()));
      }
      return vnodes;
    };
  }
});
