<script lang="ts">
import {computed, defineComponent, h} from "vue";
import {icons} from "@/components/SVGIcon/icons.ts";

export default defineComponent({
  name: "SVGIcon",
  props: {
    icon: {type: String, required: true},
  },
  setup(props, {attrs}) {
    const svgParts = computed(() => {
      const rawSvg = icons[props.icon];
      if (!rawSvg) return null;
      const parser = new DOMParser();
      const doc = parser.parseFromString(rawSvg, "image/svg+xml");
      return doc.documentElement;
    })
    const svgAttributes = computed(() => {
      if (!svgParts.value) return {};

      // Convert NamedNodeMap to a plain object
      const attrsObject: Record<string, string> = {};
      Array.from(svgParts.value.attributes).forEach((attr) => {
        attrsObject[attr.name] = attr.value;
      });

      return attrsObject;
    });
    const svgContent = computed(() => {
      return svgParts.value?.innerHTML
    })

    return () => {
      if (!svgContent.value) return null;

      // Render the SVG as innerHTML inside a container
      return h('svg', {
        innerHTML: svgContent.value,
        class: attrs.class,
        ...svgAttributes.value
      });
    };
  }
});
</script>
