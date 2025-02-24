import { d as s, o as t, c as a, t as r } from "./main-CTErem0S.js";
const n = { class: "text-gray-600" }, o = {
  key: 0,
  class: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300"
}, d = {
  key: 1,
  class: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300"
}, c = /* @__PURE__ */ s({
  __name: "ValueBoolean",
  props: {
    value: { type: Boolean, required: !0 },
    trueText: { type: String, default: "Yes" },
    falseText: { type: String, default: "No" }
  },
  setup(e) {
    return (l, u) => (t(), a("span", n, [
      e.value ? (t(), a("span", o, r(e.trueText), 1)) : (t(), a("span", d, r(e.falseText), 1))
    ]));
  }
});
export {
  c as default
};
