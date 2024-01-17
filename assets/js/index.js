const map = L.map('map').setView([44.303163, -78.262237], 17);
map.options.minZoom = 16;
// var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
//   maxZoom: 20,
//   subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
// }).addTo(map);

var basemapCarto = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: '',
            maxZoom: 20,
        });
        var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }).addTo(map);
        var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        });
        var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        });

        var basemaps = {
            "Hybrid": googleHybrid,
            "Street": googleStreets,
            "Terrain": googleTerrain,
            "Carto": basemapCarto,

        };
        L.control.layers(basemaps).addTo(map);
        

var parcelStyle = {
  fillColor: '#fae094',
  fillOpacity: 1,
  color: '#c8ba92',
  weight: 1,
  opacity: 1,
};

L.geoJSON(buildings, {
  style: parcelStyle,
  onEachFeature: function (feature, layer) {

    // layer.bindTooltip('Available', {
    //   permanent: true,
    //   direction: "center",
    //   opacity: 1,
    //   className: 'label-tooltip'
    // });

  }
}).addTo(map);


L.geoJSON(centers, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, {
      radius: 7,
      fillColor: 'green',
      fillOpacity: 1,
      color: 'black',
      weight: 1,
      opacity: 1,
    });

  },
  onEachFeature: function (feature, layer) {
    
    layer.bindTooltip(feature.properties.p_id + '', {
      permanent: true,
      direction: "center",
      opacity: 1,
      className: 'label-tooltip-center'
    });

    var popup = L.popup();
    let str_popup = '<p style="font-weight:bold; font-size: 10px">' + feature.properties.p_id + ' - Available</p>';
    popup.setContent(str_popup);
    layer.bindPopup(popup);
  }
}).addTo(map);
