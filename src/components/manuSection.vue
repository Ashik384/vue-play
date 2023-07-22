<script setup>
const menuimage = "/src/assets/img/tablesetting.jpg";
const menuTitle = "Our Menu";
const topSell = "color: #ffc0cb";
const topSellWeight = "font-weight: 700";

const foodMenu = [
  {
    id: 1,
    name: "Bread Basket",
    details: "Assortment of fresh baked fruit breads and muffins 5.50",
    topSell: true
  },
  { 
    id: 2,
    name: "Honey Almond Granola with Fruits",
    details: "Assortment of fresh baked fruit breads and muffins 5.50",
    topSell: false
  },
  {
    id: 3,
    name: "Belgian Waffle",
    details: "Vanilla flavored batter with malted flour 7.50",
    topSell: false
  },
  {
    id: 4,
    name: "Scrambled eggs",
    details: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
    topSell: false
  },
  {
    id: 5,
    name: "Blueberry Pancakes",
    details: "With syrup, butter and lots of berries 8.50",
    topSell: true
  },
];

</script>

<template>
  <div class="w3-row w3-padding-64" id="menu">
    <div class="w3-col l6 w3-padding-large">
      <h1 class="w3-center" :class="topSell">{{ menuTitle }}</h1>
      <br />

      <span v-for="item in foodMenu" :key="item.id">
        <h4 :style="true == item.topSell ? [topSell, topSellWeight] : '' " >{{ item.name }}</h4>
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

<style scoped>
</style>
