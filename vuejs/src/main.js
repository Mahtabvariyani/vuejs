const template = `<div> {{name}}</div>`;

const data = function data() {
  return {
    title: "Vue3 Tutorial",
    name: "Mah",
  };
};

const App = { data, template };
Vue.createApp(App).mount("#vue");
