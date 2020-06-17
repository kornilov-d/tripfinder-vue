<template>
    <div class = "footer">
      <hr>
      <b-container>
        <b-row>
          <b-col cols="6" sm="6" md="4" lg="3" xl="3">
            <img src="../assets/footer.png" class="footer-logo">
          </b-col>
          <b-col cols="6" sm="6" md="8" lg="9" xl="9">

          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  .footer{
    width: 100%;
  }
  .footer-logo{
    max-height: 2em;
  }

  .footer{
    margin-bottom: 1.5em;
    max-height: 4em;
  }
</style>
