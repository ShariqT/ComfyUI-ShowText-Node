import { app as l } from "../../../scripts/app.js";
import { ComponentWidgetImpl as p, addWidget as d } from "../../../scripts/domWidget.js";
import { defineComponent as m, ref as u, onMounted as x, createElementBlock as f, openBlock as _, createElementVNode as c, toDisplayString as g, unref as h, withDirectives as w, vModelText as v } from "vue";
import { useI18n as y } from "vue-i18n";
const C = { class: "show-text-container" }, k = { class: "text-display" }, E = /* @__PURE__ */ m({
  __name: "VueExampleComponent",
  props: {
    widget: {}
  },
  setup(e) {
    const { t: o } = y(), t = u(""), s = e.widget.node;
    return x(() => {
      var i;
      const n = (i = s.widgets) == null ? void 0 : i.find((a) => a.name === "text_input");
      if (n) {
        t.value = n.value || "";
        const a = n.callback;
        n.callback = function(r) {
          t.value = r || "", a && a(r);
        };
      }
    }), (n, i) => (_(), f("div", C, [
      c("h3", null, g(h(o)("show-text.title")), 1),
      c("div", k, [
        w(c("textarea", {
          "onUpdate:modelValue": i[0] || (i[0] = (a) => t.value = a),
          readonly: "",
          class: "text-box",
          rows: "10",
          cols: "40"
        }, null, 512), [
          [v, t.value]
        ])
      ])
    ]));
  }
}), b = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, n] of o)
    t[s] = n;
  return t;
}, M = /* @__PURE__ */ b(E, [["__scopeId", "data-v-b5de51cf"]]), S = l;
S.registerExtension({
  name: "show-text",
  getCustomWidgets(e) {
    return {
      CUSTOM_TEXT_DISPLAY(o) {
        const t = {
          name: "text_display",
          type: "show-text"
        }, s = new p({
          node: o,
          name: t.name,
          component: M,
          inputSpec: t,
          options: {}
        });
        return d(o, s), { widget: s };
      }
    };
  },
  nodeCreated(e) {
    if (e.constructor.comfyClass !== "show-text") return;
    const [o, t] = e.size;
    e.setSize([Math.max(o, 350), Math.max(t, 400)]);
    
    const originalDraw = e.onDrawForeground || function() {};
    let displayText = "";
    
    e.onDrawForeground = function(ctx) {
      originalDraw.call(this, ctx);
      
      if (displayText) {
        ctx.save();
        ctx.fillStyle = "#ffffff";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(displayText, this.size[0] / 2, 30);
        ctx.restore();
      }
    };
    
    const updateDisplay = () => {
      const textWidget = e.widgets?.find(w => w.name === "text_input");
      if (textWidget && textWidget.value) {
        displayText = textWidget.value;
        e.setDirtyCanvas(true, true);
      } else {
        const textInput = e.inputs?.find(i => i.name === "text_input");
        if (textInput && textInput.value !== undefined) {
          displayText = String(textInput.value);
          e.setDirtyCanvas(true, true);
        }
      }
    };
    
    setTimeout(updateDisplay, 500);
    
    const originalOnConnect = e.onConnectInput;
    e.onConnectInput = function(...args) {
      const result = originalOnConnect ? originalOnConnect.apply(this, args) : undefined;
      setTimeout(updateDisplay, 500);
      return result;
    };
    
    const originalOnExecute = e.onExecute;
    e.onExecute = function(...args) {
      const result = originalOnExecute ? originalOnExecute.apply(this, args) : undefined;
      updateDisplay();
      return result;
    };
    
    const originalOnPropertyChanged = e.onPropertyChanged;
    e.onPropertyChanged = function(property, value) {
      const result = originalOnPropertyChanged ? originalOnPropertyChanged.apply(this, arguments) : undefined;
      if (property === "text_input") {
        displayText = String(value || "");
        e.setDirtyCanvas(true, true);
      }
      return result;
    };
    
    const originalSetValue = e.setValue;
    e.setValue = function(value, slot) {
      const result = originalSetValue ? originalSetValue.apply(this, arguments) : undefined;
      if (slot === 0 || slot === "text_input") {
        displayText = String(value || "");
        e.setDirtyCanvas(true, true);
      }
      return result;
    };
  }
});
