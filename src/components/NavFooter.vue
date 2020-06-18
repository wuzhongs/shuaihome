<template>
  <div class="footer">
    <div class="footer-log">
      <img src="/imgs/logo-footer.png" alt />
      <p>树ai商城</p>
    </div>
    <div class="footer-link">
      <a href>我的主页</a>
      <span>|</span>
      <a href>想找个工作咯</a>
      <span>|</span>
      <a href>前端</a>
      <span>|</span>
      <a href>哈哈哈哈哈哈</a>
      <span>|</span>
      <!-- <a href=""></a><span>|</span> -->
    </div>
    <div class="copyright">
      Copyright @2019
      <span class="domain">www.github.com</span>  All Rights Reserved
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer"
};
</script>
<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-log {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
      .domain{
          color: #FF6600;
      }
  }
}
</style>