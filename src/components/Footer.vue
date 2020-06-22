<template>
    <div class = "fluid-container footer">
      <b-navbar type="light" variant="light" >
        <hr>
        <img src="../assets/footer.png" class="footer-logo" align="left">
      </b-navbar>
    </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>

  .footer-logo{
    max-height: 2em;
  }
  .footer > *:last-child{
    margin-bottom: 0px;
  }
  .footer{

    max-height: 4em;
    width: 100%;
  }
</style>
