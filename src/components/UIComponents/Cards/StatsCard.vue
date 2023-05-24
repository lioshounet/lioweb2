<template>
  <div class="card card-stats">
    <div class="card-header">
      <slot name="icon" class="iconClass"></slot>
    </div>
    <div class="card-content" :style="thisstyle">
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

    var rArrQ = [
      "#fbf8cc",
      "#fde4cf",
      "#ffcfd2",
      "#f1c0e8",
      "#cfbaf0",
      "#a3c4f3",
      "#90dbf4",
      "#8eecf5",
      "#98f5e1",
      "#b9fbc0",
    ]

    var rArrS = [
      "#001219",
      "#005f73",
      "#0a9396",
      "#94d2bd",
      "#e9d8a6",
      "#ee9b00",
      "#ca6702",
      "#bb3e03",
      "#ae2012",
      "#9b2226",
    ]


    this.thisstyle = {
      "background-color": rArrS[Math.floor(Math.random() * rArrS.length)],
      "color": '#fff'
    };

  },
}



</script>
<style lang="scss" scoped>
.card-header {
  border-radius: 15% !important;
  background-color: #fff !important;

  .iconClass {
    content-visibility: auto;
    width: 61px;
    height: 61px;
    border-radius: 15%;
  }
}
</style>
