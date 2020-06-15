var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

mapboxgl.accessToken = 'sk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrYjUzbXNhNTBsd2Eycm82YzEwZ3VtcHQifQ.APV_H2lhZp-6L4e-9hw5XA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/kornilovd/ckb3rp2vo0uli1ipf98kzhkaf'
})
