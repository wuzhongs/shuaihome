<template>
  <div class="alipay">
      <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <loading></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import Loading from "../components/Loading.vue";
import OrderHeader from './../components/OrderHeader'
export default {
  name: "alipay",
  components: {
    Loading,
    OrderHeader
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: ""
    };
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      this.axios
        .post("pay", {
          orderId: this.orderId, //订单id
          orderName: "打磨帅", //订单名称
          amount: "0.1", //单位分
          payType: 1 //1支付宝 2微信
        })
        .then(res => {
          this.content = res.content;
          setTimeout(() => {
            document.forms[0].submit();
          }, 100);
        });
    }
  }
};
</script>
<style lang="scss">
.alipay {
  // background: red;
}
</style>