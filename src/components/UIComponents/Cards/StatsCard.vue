<template>
  <div class="card card-stats">
    <div class="card-header" :style="thisstyle">
      <slot name="icon"></slot>
    </div>
    <div class="card-content">
      <slot name="title"></slot>
    </div>
    <div class="card-footer">
      <div class="stats">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'stats-card',
  props: {
    color: {
      type: String,
      default: 'orange'
    }
  },
  data() {
    return {
      rcolor: "",
      thisstyle: {},
    }

  },
  created() {

    var rArr = [
      "#355070",
      "#6d597a",
      "#b56576",
      "#e56b6f",
      "#eaac8b",]


    this.thisstyle = {
      "background-color": rArr[Math.floor(Math.random() * rArr.length)]
    };

    this.rcolor = rArr[Math.floor(Math.random() * rArr.length)];
    console.log(this.rcolor);
  },
}



</script>
<style></style>
