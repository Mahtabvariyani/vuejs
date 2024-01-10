<template>
  <h1>Heros</h1>
  <ul>
    <li v-for="(hero, index) in dcheros" :key="index">
     {{ index }}: {{ hero.name }}
    </li>
  </ul>
  <input :value="newHeros">
  <button >
    Add Hero
  </button>
</template>

<script>
export default {
  data() {
    return {
      newHeros: "Aquaman",
      dcheros: [
        {
          name: "SuperGirl",
        },
        {
          name: "SuperWoman",
        },
        {
          name: "SuperMan",
        },
        {
          name: "SuperBoy",
        },
        {
          name: "SuperKid",
        },
      ],
    };
  },
};
</script>
