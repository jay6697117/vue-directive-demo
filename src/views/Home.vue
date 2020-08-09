<template>
  <div class="home">
    <img v-mypos:[positionInfo]="positionType" alt="Vue logo" height="50" src="../assets/logo.png" />
    <hr />
    <button class="btn" @click="disAddTopBottom">垂直+</button>
    <button class="btn" @click="disSubTopBottom">垂直-</button>
    <button class="btn" @click="disAddLeftRight">水平+</button>
    <button class="btn" @click="disSubLeftRight">水平-</button>
    <hr />
    <div>
      input1:
      <input type="text" v-red />
    </div>
    <div>
      input2:
      <input type="text" v-focus />
    </div>
    <div v-mydirective:arg1.mdr1.mdr2="msg"></div>
    <hr>
    <div ref="positionRef"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      msg: 'hello world',
      //v-position指令配置项
      // positionType: { type: 'absolute', zIndex: 999 },
      positionType: { type: 'fixed', zIndex: 999 },
      positionInfo: [
        { dir: 'top', dis: 5 },
        { dir: 'right', dis: 5 }
      ]
    };
  },
  methods: {
    disAddTopBottom() {
      this.$set(this.positionInfo[0], 'dis', this.positionInfo[0].dis + 5);
    },
    disSubTopBottom() {
      this.$set(this.positionInfo[0], 'dis', this.positionInfo[0].dis - 5);
    },
    disAddLeftRight() {
      this.$set(this.positionInfo[1], 'dis', this.positionInfo[1].dis + 5);
    },
    disSubLeftRight() {
      this.$set(this.positionInfo[1], 'dis', this.positionInfo[1].dis - 5);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.home {
  height: 1500px;
  position: relative;
  top: 0;
  left: 0;
}

.btn {
  position: relative;
  top: 0;
  left: 0;
  z-index: 9999;
}
</style>
