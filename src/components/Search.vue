<template>
  <div class="search-bar">
    <b-card title="Поиск" bg-variant="light">
      <hr>
      <b-input-group description="Ищите по ключевым словам, названиям мест и т.д.">
        <b-form-input placeholder="Места, ключевые слова, т.д."
                      />
        <b-input-group-append>
          <b-button variant="dark">
            <span><fa-icon icon="search" /></span>
          </b-button>
        </b-input-group-append>
      </b-input-group>
      <br>
      <b-form-group label="Посещаемые места">
        <b-form-checkbox-group inline
          id = "types-group"
          v-model="selected"
          :options="options"
          name="place-type" />
      </b-form-group>

      <label style="margin-right: 1em"> Количество мест </label>
      <b-form inline >
        <b-input-group prepend="от " size="sm" id="range-selector">
          <b-input id="inline-form-input-username" type="number"></b-input>
        </b-input-group>
        <b-input-group prepend="до " size="sm" id="range-selector">
          <b-input id="inline-form-input-username" type="number" ></b-input>
        </b-input-group>
      </b-form>
      <br>
      <label style="margin-right: 1em"> Продолжительность маршрута </label>
      <b-form inline >
        <b-input-group prepend="от " size="sm" id="range-selector">
          <b-input id="inline-form-input-username" type="number"></b-input>
        </b-input-group>
        <b-input-group prepend="до " size="sm" id="range-selector">
          <b-input id="inline-form-input-username" type="number" ></b-input>
        </b-input-group>
      </b-form>
      <br>
      <b-button block variant="dark"  type="submit">
        Подобрать маршрут
      </b-button>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data(){
      return{
        selected: [],
        options: [
          { text: 'Музеи', value: 'музей' },
          { text: 'Парки', value: 'парк' },
          { text: 'Галереи', value: 'галерея' },
          { text: 'Рестораны', value: 'ресторан' },
          { text: 'Бары', value: 'бар' },
        ]
      }
    }
  }
</script>

<style scoped>
  .search-bar{
    margin-top: 1em;
  }

  #range-selector{
    width: 7em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
  }
</style>
