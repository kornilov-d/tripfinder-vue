<template>
  <div class="mgl-map-wrapper">
    <MglMap
      id="map"
      container = "map"
      :zoom="13"
      :center="[points[1].longitude,points[1].latitude]"
      :map-style.sync="mapStyle"
      :access-token="accessToken">
      <MglAttributionControl />
      <MglNavigationControl position="top-right"/>

      <MglMarker v-for="point in points" :coordinates='[point.longitude, point.latitude]' >
        <div slot="marker">
        <b-avatar  :text=point.position variant="primary" size="3em"></b-avatar>
        </div>
      </MglMarker>

    </MglMap>
  </div>
</template>

<script>
  import axios from 'axios'
  import { API_URL } from '../main'
  import mapboxgl, { Marker } from 'mapbox-gl'
  import {MglMap, MglPopup, MglGeojsonLayer, MglMarker, MglAttributionControl, MglNavigationControl, MglGeolocateControl} from 'vue-mapbox'
  import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
  import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

  export default {
    name: 'RouteMap',
    components: {
      MglMap,
      MglGeolocateControl,
      MglNavigationControl,
      MglAttributionControl,
      MglGeojsonLayer,
      MglMarker,
      MglPopup
    },
    data () {
      return {
        accessToken: 'pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw',
        mapStyle: 'mapbox://styles/kornilovd/ckblkalnx0ivc1iqrnv52cl2u',
        mapboxDir: null,
        points: [],

        settings: {
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
        'line-join': 'round',
          'line-cap': 'round'
      },
        'paint': {
        'line-color': '#888',
          'line-width': 8
      },
        },
        geojson: {
          "type": "geojson",
          "data": [
            {
              "type": "Feature",
              "weight_name": "routability",
              "legs": [
                {
                  "summary": "набережная реки Карповки, Большой проспект П.С.",
                  "steps": [],
                  "distance": 3091.802,
                  "duration": 676.386,
                  "weight": 676.386
                },
                {
                  "summary": "Большая Пушкарская улица, Каменноостровский проспект",
                  "steps": [],
                  "distance": 2991.196,
                  "duration": 570.783,
                  "weight": 570.783
                },
                {
                  "summary": "проспект Медиков, Каменноостровский проспект",
                  "steps": [],
                  "distance": 2078.999,
                  "duration": 556.312,
                  "weight": 556.312
                },
                {
                  "summary": "Каменноостровский проспект, Австрийская площадь",
                  "steps": [],
                  "distance": 1389.805,
                  "duration": 341.475,
                  "weight": 341.475
                }
              ],
              "geometry": {
                "coordinates": [
                  [
                    30.316925,
                    59.969727
                  ],
                  [
                    30.317472,
                    59.969822
                  ],
                  [
                    30.31749,
                    59.969852
                  ],
                  [
                    30.318781,
                    59.969696
                  ],
                  [
                    30.318165,
                    59.968414
                  ],
                  [
                    30.317312,
                    59.968029
                  ],
                  [
                    30.315525,
                    59.967983
                  ],
                  [
                    30.311573,
                    59.968506
                  ],
                  [
                    30.310577,
                    59.968845
                  ],
                  [
                    30.309534,
                    59.969917
                  ],
                  [
                    30.310671,
                    59.969429
                  ],
                  [
                    30.310259,
                    59.969109
                  ],
                  [
                    30.311573,
                    59.968506
                  ],
                  [
                    30.314116,
                    59.968143
                  ],
                  [
                    30.313969,
                    59.967785
                  ],
                  [
                    30.313091,
                    59.966385
                  ],
                  [
                    30.299061,
                    59.957775
                  ],
                  [
                    30.300779,
                    59.957024
                  ],
                  [
                    30.303833,
                    59.958889
                  ],
                  [
                    30.303585,
                    59.958988
                  ],
                  [
                    30.303354,
                    59.95908
                  ],
                  [
                    30.303833,
                    59.958889
                  ],
                  [
                    30.312784,
                    59.964489
                  ],
                  [
                    30.308105,
                    59.969505
                  ],
                  [
                    30.307644,
                    59.969994
                  ],
                  [
                    30.30327,
                    59.975628
                  ],
                  [
                    30.308624,
                    59.976646
                  ],
                  [
                    30.309559,
                    59.978012
                  ],
                  [
                    30.31263,
                    59.978092
                  ],
                  [
                    30.314339,
                    59.97747
                  ],
                  [
                    30.314392,
                    59.977531
                  ],
                  [
                    30.314339,
                    59.97747
                  ],
                  [
                    30.317686,
                    59.976627
                  ],
                  [
                    30.317686,
                    59.975861
                  ],
                  [
                    30.314255,
                    59.970989
                  ],
                  [
                    30.314116,
                    59.968143
                  ],
                  [
                    30.313969,
                    59.967785
                  ],
                  [
                    30.313314,
                    59.966557
                  ],
                  [
                    30.311749,
                    59.96558
                  ],
                  [
                    30.314037,
                    59.963188
                  ],
                  [
                    30.311605,
                    59.962402
                  ],
                  [
                    30.311279,
                    59.962635
                  ],
                  [
                    30.310253,
                    59.962357
                  ],
                  [
                    30.311279,
                    59.962635
                  ],
                  [
                    30.311605,
                    59.962402
                  ],
                  [
                    30.314037,
                    59.963188
                  ],
                  [
                    30.316935,
                    59.960175
                  ],
                  [
                    30.316669,
                    59.959858
                  ],
                  [
                    30.31715,
                    59.959946
                  ],
                  [
                    30.312241,
                    59.965225
                  ],
                  [
                    30.312429,
                    59.965485
                  ]
                ],
                "type": "LineString"
              },
              "distance": 9551.803,
              "duration": 2144.957,
              "weight": 2144.957
            }
          ],
          "waypoints": [
            {
              "distance": 3.005,
              "name": "",
              "location": [
                30.316925,
                59.969727
              ]
            },
            {
              "distance": 7.564,
              "name": "",
              "location": [
                30.303585,
                59.958988
              ]
            },
            {
              "distance": 38.252,
              "name": "",
              "location": [
                30.314392,
                59.977531
              ]
            },
            {
              "distance": 18.262,
              "name": "",
              "location": [
                30.310253,
                59.962357
              ]
            },
            {
              "distance": 20.909,
              "name": "улица Льва Толстого",
              "location": [
                30.312429,
                59.965485
              ]
            }
          ],
          "code": "Ok",
          "uuid": "n2KXQaYnKFNsosCC__De3Yxv5FVoQZ934_GGdj8mqC0tppQBzuc8og=="
        }
      }
    },
    created () {
      this.id = this.$route.params.id
      axios.get(`${API_URL}/api/points/`, {
        headers: { 'Content-Type': 'application/json' },
        params: { 'route': this.id }
      })
        .then( response => {
          this.points = response.data
        })
    },

    mounted () {
        this.createMap()
        this.points.map((map) =>{
        const LngLat = [points.longitude, points.latitude]
        new mapboxgl.Marker()
          .setLngLat(LngLat)
          .addTo(map)
      })
    },
    methods: {

      createMap: function () {
        mapboxgl.accessToken = this.accessToken
        // init the map
        this.map = new mapboxgl.Map({
          container: 'map',

          style: this.mapStyle,
          country_label: 'ru',
          minzoom: 1.3,
          center: [30.4206030, 59.9943420],
          zoom: 10,
        })


        map.addControl(new MapboxDirections({
          accessToken: this.accessToken,
          language: 'ru',
          interactive: false,
          unit: 'metric',
          steps: true,
          geocoder: {
            language: 'ru'
          },
        }))
      },
    }


  }
</script>

<style>
  #map{
    margin-top: 0em;
    height: 87vh;
    width: 100%;
    border-radius: 8px;
  }
  .mgl-map-wrapper {
    height: 100%;
    position: relative;
    width: 100%;
  }
  .mgl-map-wrapper .mapboxgl-map {
    height: 80vh;
    left: 0;
    position: absolute;
    top: 1.9em;
    width: 100%;
  }
</style>
