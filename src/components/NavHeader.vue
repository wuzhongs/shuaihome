<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="userName">{{userName}}</a>
          <a href="javascript:;" v-if="!userName" @click="login">登录</a>
          <a href="javascript:;" v-if="userName" @click="logout">退出</a>
          <a href="javascript:;" v-if="userName" @click="goOrderList">我的订单</a>
          <!-- <a href="javascript:;" v-if="!userName">购物车</a> -->
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>
            购物车 ({{cartCount}})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in productList" :key="index">
                  <a :href="'/#/product/id'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi</span>
            <!-- <div class="children"></div> -->
          </div>
          <div class="item-menu">
            <span>红米电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" class="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
  data() {
    return {
      // userName: this.$store.state.username,
      productList: []
    };
  },
  computed: {
    userName() {
      return this.$store.state.username;
    },
    cartCount() {
      return this.$store.state.cartCount;
    }
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    }
  },
  mounted() {
    this.getProductsList();
    let params = this.$route.params;
    if (params && params.from == "login") {
      this.getCartCount();
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.axios.post("/user/logout").then(() => {
        let path = location.hash;
        this.$cookie.set("userId", "", { expires: "-1" });
        this.$store.dispatch("saveUserName", "");
        this.$store.dispatch("saveCartCount", 0);
        this.$message.success("退出成功");
        if (path != "#/index") {
          window.location.href = "/#/login";
        }
      });
    },
    goOrderList() {
      this.$router.push("/order/list");
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        this.$store.dispatch("saveCartCount", res);
      });
    },
    getProductsList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012"
          }
        })
        .then(res => {
          console.log(res);
          if (res.list.length >= 6) {
            this.productList = res.list.slice(0, 6);
          } else {
            this.productList = res.list;
          }
        });
    },
    goToCart() {
      this.$router.push("/cart");
    }
  }
};
</script>
<style lang="scss" >
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        //  border-style: solid dotted dashed double;
        margin-right: 0;
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          display: inline-block;
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();
      position: relative;

      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
        }
        .children {
          position: absolute;
          top: 112px;
          left: 0;
          width: 1126px;
          height: 0;
          opacity: 0;
          border-top: 1px solid #e5e5e5;
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          z-index: 10;
          overflow: hidden;
          transition: all 0.5s;
          background-color: #ffffff;
          .product {
            float: left;
            width: 16.6%;
            height: 220px;
            font-size: 12px;
            line-height: 12px;
            text-align: center;
            position: relative;
            a {
              display: inline-block;
            }
            img {
              width: auto;
              height: 111px;
              margin-top: 26px;
            }
            .pro-img {
              height: 137px;
            }
            .pro-name {
              font-weight: bold;
              margin-top: 19px;
              margin-bottom: 8px;
              color: $colorB;
            }
            .pro-price {
              color: $colorA;
            }
            &:before {
              content: " ";
              position: absolute;
              top: 28px;
              right: 0;
              border-left: 1px solid $colorF;
              height: 100px;
              width: 1px;
            }

            &:last-child::before {
              display: none;
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            display: inline-block;
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>