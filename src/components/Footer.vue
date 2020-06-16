<template>
    <div class = "footer">
      <b-container>
        <b-row>
          <hr>
          <b-col cols="6" sm="6" md="4" lg="3" xl="3">
            <img src="../assets/footer.png" class="footer-logo">
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
  .footer-logo{
    max-height: 2em;
  }

  .footer{
    margin-bottom: 1.5em;
  }
</style>
