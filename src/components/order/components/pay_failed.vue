<style scoped>
.failed{
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 1px solid #E9E9E9;
    padding: 16px 14px;
    text-align: left;
    min-height: 491px;
    line-height: 40px;
}
.failed_text .text1{font-size: 18px;color: #C9514A;font-weight: bold;}
.failed_text .text2{font-size: 14px;color: #333333;}
</style>
<template>
<div>
    <div class="failed">
      <div>
          <img src="@/assets/image/组 362@2x.png" width="118" height="118">
      </div>
      <div class="failed_text">
          <div class="text1">支付失败</div>
          <div class="text2">如您已经扣款成功，请咨询客服了解详细情况</div>
      </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  created() {

  },
  methods: {
  }
};
</script>
