<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,subindex) in item" :key="subindex">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub? sub.img:'/imgs/item-box-1.png'" alt />
                      {{sub ? sub.name : "小米9"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="menu-item">
              <a href>电视 盒子</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,subindex) in item" :key="subindex">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub? sub.img:'/imgs/item-box-1.png'" alt />
                      {{sub ? sub.name : "小米9"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href>笔记本 平板</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,subindex) in item" :key="subindex">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub? sub.img:'/imgs/item-box-1.png'" alt />
                      {{sub ? sub.name : "小米9"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href>家电 插线板</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,subindex) in item" :key="subindex">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub? sub.img:'/imgs/item-box-1.png'" alt />
                      {{sub ? sub.name : "小米9"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href>出行 穿戴</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,subindex) in item" :key="subindex">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub? sub.img:'/imgs/item-box-1.png'" alt />
                      {{sub ? sub.name : "小米9"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href>智能 路由器</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,subindex) in item" :key="subindex">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub? sub.img:'/imgs/item-box-1.png'" alt />
                      {{sub ? sub.name : "小米9"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href>电源 配件</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,subindex) in item" :key="subindex">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub? sub.img:'/imgs/item-box-1.png'" alt />
                      {{sub ? sub.name : "小米9"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href>生活 箱包</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,subindex) in item" :key="subindex">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub? sub.img:'/imgs/item-box-1.png'" alt />
                      {{sub ? sub.name : "小米9"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="'/#/product/'+item.id">
              <img :src="item.img" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="(item,index) in sdsList" :key="index">
          <img v-lazy="item.img" alt />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt />
        </a>
      </div>
      <div class="test">
        <div class="test-left"></div>
        <div class="test-right"></div>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <div>
          <h2>手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="'/#/product/35">
                <img v-lazy="'/imgs/mix-alpha.jpg'" alt />
              </a>
            </div>
            <div class="list-box">
              <div class="list" v-for="(arr,index) in phoneList" :key="index">
                <div class="item" v-for="(item,j) in arr" :key="j">
                  <span :class="{'new-pro':j%2 == 0}">新品</span>
                  <div class="item-img">
                    <img v-lazy="item.mainImage" alt />
                  </div>
                  <div class="item-info">
                    <h3>{{item.name}}</h3>
                    <p>{{item.subtitle}}</p>
                    <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="large"
      :showModal="showModal"
      v-on:submit="goToCart"
      v-on:cancel="showModal = false"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>
<script>
import ServiceBar from "../components/ServiceBar.vue";
import modal from "../components/Modal.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
    modal
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "42",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi k20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动4G专区" }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      sdsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      phoneList: [
        [1, 1, 1, 1],
        [1, 1, 1, 1]
      ],
      showModal: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14
          }
        })
        .then(res => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    addCart(id) {
     
      this.axios
        .post("/carts", {
          productId: id,
          selected: true
        })
        .then((res) => {
             this.showModal = true
             this.$store.dispatch("saveCartCount", res.cartTotalQuantity);
        })
        .catch(() => {
          this.showModal = true;
        });
    },
    goToCart() {
      this.$router.push("/cart");
    }
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    }
  }
};
</script>
<style lang="scss" >
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
// .test{
//   display: flex;
//   justify-content: space-between;
//   width: 250px;
//   height: 100px;
//   border: 1px solid black;
//   .test-left{
//     background-color: blue;
//     width: 100px;
//     height: 100px;
//     margin-left: 20px;
//   }
//   .test-right{
//     background-color: red;
//     width: 100px;
//     height: 100px;
//     margin-right: 20px;
//   }
// }
.index {
  .swiper-box {
    // position: relative;
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      background: #55585a7a;
      padding-top: 26px;
      box-sizing: border-box;
      .menu-wrap {
        // background: green;
        .menu-item {
          width: 264px;
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            display: block;
            &:after {
              content: "  ";
              position: absolute;
              right: 30px;
              top: 17.5px;
              @include bgImg(20px, 20px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            display: none;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                width: 241px;
                display: inline-block;
                padding-left: 23px;
                img {
                  height: 35px;
                  width: 42px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
                a {
                  color: $colorB;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 157px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $colorF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          height: 619px;
          width: 224px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
              }
            }
            .item-info {
              h3 {
                font-size: 14px;
                color: $colorB;
                line-height: 14px;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $colorJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  content: " ";
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>