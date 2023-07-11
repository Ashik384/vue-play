<script setup>
const menuimage = "/src/assets/img/tablesetting.jpg";
const menuTitle = "Our Menu";

const foodMenu = [
  {
    name: "Bread Basket",
    details: "Assortment of fresh baked fruit breads and muffins 5.50",
  },
  {
    name: "Honey Almond Granola with Fruits",
    details: "Assortment of fresh baked fruit breads and muffins 5.50",
  },
  {
    name: "Belgian Waffle",
    details: "Vanilla flavored batter with malted flour 7.50",
  },
  {
    name: "Scrambled eggs",
    details: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
  },
  {
    name: "Blueberry Pancakes",
    details: "With syrup, butter and lots of berries 8.50",
  },
];

</script>

<template>
  <div class="w3-row w3-padding-64" id="menu">
    <div class="w3-col l6 w3-padding-large">

      <h1 class="w3-center">{{ menuTitle }}</h1>
      <br />

      <span v-for="item in foodMenu" :key="item.name">
        <h4>{{ item.name }}</h4>
        <p class="w3-text-grey">{{ item.details }}</p>
        <br />
      </span>
      

      
    </div>

    <div class="w3-col l6 w3-padding-large">
      <img
        :src="menuimage"
        class="w3-round w3-image w3-opacity-min"
        alt="Menu"
        style="width: 100%"
      />
    </div>
  </div>
</template>

<style scoped></style>
