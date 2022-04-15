<template>
  <div class="row select ">
     <div>
       <a class="col-sm-3 select__nav" href="/#/page-formation">Formation diplomante</a>

       <a class="col-sm-3 select__nav" href="/Singnup#/signup">Formation certifiante</a>

       <a class="col-sm-3 select__nav" href="/Singnup#/signup">Formation libre</a>
  </div>

  </div>
</template>
<script>
export default {
  name: "Formation",
  created() {},
  data() {
    return {
    };
  }
  }
</script>
<style lang="scss" scoped>
[class*="col"] {
  background-color: lightgreen;
  border: 2px solid black;
  border-radius: 6px;
  line-height: 40px;
  text-align: center; }
.select {
  width: auto;
  height: auto;
  display: flex;
  color:black;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 10px 10px 10px; }
  .select__nav:nth-child(1) {
    margin: 10px 10px 10px 10px;
    background-image: linear-gradient(to right, #f5edd6, #abc7fe, #719bff, #3d6cfa, #4560e6); }
    .select__nav:nth-child(1):hover {
      transform: scale(0.75); }
  .select__nav:nth-child(2) {
    margin: 10px 10px 10px 10px;
    background-image: linear-gradient(to right, #f5edd6, #abc7fe, #719bff, #3d6cfa, #4560e6); }
    .select__nav:nth-child(2):hover {
      transform: scale(0.75); }
  .select__nav:nth-child(3) {
    margin: 10px 10px 10px 10px;
    background-image: linear-gradient(to right, #f5edd6, #abc7fe, #719bff, #3d6cfa, #4560e6); }
    .select__nav:nth-child(3):hover {
      transform: scale(0.75); }
</style>
