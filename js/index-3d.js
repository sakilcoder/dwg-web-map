mapboxgl.accessToken = 'pk.eyJ1Ijoic2FraWxjb2RlcmdlbyIsImEiOiJjbGZ6cjhzY2YwaGlvM2ZtdHQ0MDhyZXk3In0.n7VG5pOCWzDc7Q5qzUfd-A'; // public
const map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-78.261496966, 44.302257902],
    zoom: 16,
    pitch: 45,
    bearing: -17.6,
    container: 'map',
    antialias: true
});

map.on('style.load', () => {
    
    const layers = map.getStyle().layers;
        const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout['text-field']
        ).id;

        map.addLayer(
            {
                'id': 'add-3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            },
            labelLayerId
        );
    map.loadImage('images/mapbox-marker-icon-20px-green.png', (error, greenIcon) => {
        if (error) throw error;
        map.loadImage('images/mapbox-marker-icon-20px-red.png', (error, redIcon) => {
            if (error) throw error;

            map.addImage('green-icon', greenIcon);
            map.addImage('red-icon', redIcon);

            map.addSource('outline', {
                type: 'geojson',
                data: 'data/outline.json'
            });

            map.addLayer({
                'id': 'outline-layer',
                'type': 'line',
                'source': 'outline',
                'paint': {
                    'line-width': 3,
                    'line-color': '#c1c1c1'
                }
            });

            map.addSource('project-outline', {
                type: 'geojson',
                data: 'data/project-outline.json'
            });

            map.addLayer({
                'id': 'project-outline-layer',
                'type': 'line',
                'source': 'project-outline',
                'paint': {
                    'line-width': 3,
                    'line-color': '#c1c1c1'
                }
            });

            map.addSource('existing-projects', {
                type: 'geojson',
                data: 'data/existing-projects.json'
            });

            map.addLayer({
                'id': 'existing-projects-layer',
                'type': 'line',
                'source': 'existing-projects',
                'paint': {
                    'line-width': 1,
                    'line-color': '#c1c1c1',
                    'line-dasharray': [4, 2, 1, 2]
                }
            });

            map.addSource('infiltration', {
                type: 'geojson',
                data: 'data/infiltration.json'
            });

            map.addLayer({
                'id': 'infiltration-layer',
                'type': 'fill',
                'source': 'infiltration',
                'paint': {
                    'fill-width': 2,
                    'fill-color': '#00ffff'
                }
            });

            map.addSource('blueline', {
                type: 'geojson',
                data: 'data/blueline.json'
            });

            map.addLayer({
                'id': 'blueline-layer',
                'type': 'line',
                'source': 'blueline',
                'paint': {
                    'line-width': 3,
                    'line-color': '#03114b'
                }
            });

            map.addSource('side-road', {
                type: 'geojson',
                data: 'data/side-road.json'
            });

            map.addLayer({
                'id': 'side-road-layer',
                'type': 'line',
                'source': 'side-road',
                'paint': {
                    'line-width': 1,
                    'line-color': '#c1c1c1'
                }
            });

            map.addSource('road', {
                type: 'geojson',
                data: 'data/road.json'
            });

            map.addLayer({
                'id': 'road-layer',
                'type': 'line',
                'source': 'road',
                'paint': {
                    'line-width': 2,
                    'line-color': '#c1c1c1'
                }
            });

            map.addSource('roadl', {
                type: 'geojson',
                data: 'data/roadl.json'
            });

            map.addLayer({
                'id': 'roadl-layer',
                'type': 'line',
                'source': 'roadl',
                'paint': {
                    'line-width': 2,
                    'line-color': '#c1c1c1',
                    'line-dasharray': [4, 2, 1, 2]
                }
            });

            map.addSource('miscline', {
                type: 'geojson',
                data: 'data/miscline.json'
            });

            map.addLayer({
                'id': 'miscline-layer',
                'type': 'line',
                'source': 'miscline',
                'paint': {
                    'line-width': 2,
                    'line-color': '#c1c1c1',
                    'line-dasharray': [4, 2, 1, 2]
                }
            });

            map.addSource('septic-tank', {
                type: 'geojson',
                data: 'data/septic-tank.json'
            });

            map.addLayer({
                'id': 'septic-tank-layer',
                'type': 'fill',
                'source': 'septic-tank',
                'paint': {
                    'fill-width': 1,
                    'fill-color': '#c1c1c1'
                }
            });

            map.addSource('plot-circle', {
                type: 'geojson',
                data: 'data/plot-circle.json'
            });

            map.addLayer({
                'id': 'plot-circle-layer',
                'type': 'line',
                'source': 'plot-circle',
                'paint': {
                    'line-width': 1,
                    'line-color': '#c1c1c1'
                }
            });

            map.addSource('plot-misc', {
                type: 'geojson',
                data: 'data/plot-misc.json'
            });

            map.addLayer({
                'id': 'plot-misc-layer',
                'type': 'line',
                'source': 'plot-misc',
                'paint': {
                    'line-width': 1,
                    'line-color': '#c1c1c1',
                    'line-dasharray': [2, 2]
                }
            });

            map.addSource('blocks', {
                type: 'geojson',
                data: 'data/blocks.json'
            });

            map.addLayer({
                'id': 'blocks-line-layer',
                'type': 'line',
                'source': 'blocks',
                'paint': {
                    'line-width': 3,
                    'line-color': '#9d9d9d',
                    'line-dasharray': [2, 2]
                }
            });

            map.addLayer({
                'id': 'blocks-layer',
                'type': 'fill',
                'source': 'blocks',
                'paint': {
                    'fill-opacity': 0
                }
            });

            map.addSource('plot-building', {
                type: 'geojson',
                data: 'data/plot-building.json'
            });

            map.addLayer({
                'id': 'plot-building-layer',
                'type': 'fill-extrusion',
                'source': 'plot-building',
                'paint': {
                    'fill-extrusion-color': '#ff0000',
                    'fill-extrusion-opacity': 0.5,
                    'fill-extrusion-height': 3
                }
            });

            map.addSource('road-point', {
                type: 'geojson',
                data: 'data/road-point.json'
            });

            map.addLayer({
                'id': 'road-point-layer',
                'type': 'symbol',
                'source': 'road-point',
                'layout': {
                    'text-field': ['get', 'name'],
                    'text-font': ['Open Sans Regular'],
                    'text-size': 12,
                }
            });

            map.addSource('blocks-center', {
                type: 'geojson',
                data: 'data/blocks-center.json'
            });

            map.addLayer({
                'id': 'blocks-center-layer',
                'type': 'symbol',
                'source': 'blocks-center',
                'layout': {
                    'text-field': ['get', 'name'],
                    'text-font': ['Open Sans Regular'],
                    'text-size': 12,
                }
            });

            map.addSource('building-centers', {
                type: 'geojson',
                data: 'data/building-centers.json'
            });

            map.addLayer({
                'id': 'building-centers-icon-layer',
                'type': 'symbol',
                'source': 'building-centers',
                'layout': {
                    // 'icon-image': ['match', ['get', 'status'], 'Available', 'green-icon', 'red-icon'],
                    // 'icon-size': 1,
                    // 'icon-allow-overlap': true,
                    'text-field': ['get', 'p_id'],
                    'text-font': ['Open Sans Regular'],
                    'text-size': 12,
                    'text-anchor': 'top',
                    'text-allow-overlap': true
                }
            });

            map.on('mousemove', 'blocks-layer', function(e) {
                map.getCanvas().style.cursor = 'pointer';

                var features = e.features;
                if (!features || features.length === 0) {
                    return;
                }
                
                var name = features[0].properties.name;
                var lot_area = features[0].properties.lot_area;
                var forntage = features[0].properties.forntage;
                var intend_use = features[0].properties.intend_use;
                var frontage_info = forntage == "-"? "" : `Frontage: <strong>${forntage}</strong> (m/ft)<br/>`;

                var info = `<h4>${name}</h4>
                            Lot Area: <strong><em>${lot_area}</strong> (ha/acre)</em><br/>
                            ${frontage_info}
                            Intended Use: <strong>${intend_use}</strong><br/>
                        `;
                document.getElementById('info').innerHTML=info;
            });
            
            map.on('mouseleave', 'blocks-layer', function(e) {
                map.getCanvas().style.cursor = '';
                document.getElementById('info').innerHTML='';
            });

            map.on('mousemove', 'plot-building-layer', function(e) {
                map.getCanvas().style.cursor = 'pointer';

                var features = e.features;
                if (!features || features.length === 0) {
                    return;
                }
                
                var name = features[0].properties.p_id;
                var lot_area = features[0].properties.lot_area;
                var forntage = features[0].properties.forntage;
                var intend_use = features[0].properties.intend_use;
                var frontage_info = forntage == "-"? "" : `Frontage: <strong>${forntage}</strong> (m/ft)<br/>`;

                var info = `<h4>Lot ${name}</h4>
                            Lot Area: <strong><em>${lot_area}</strong> (ha/acre)</em><br/>
                            ${frontage_info}
                            Intended Use: <strong>${intend_use}</strong><br/>
                        `;
                document.getElementById('info').innerHTML=info;
            });
            
            map.on('mouseleave', 'plot-building-layer', function(e) {
                map.getCanvas().style.cursor = '';
                document.getElementById('info').innerHTML='';
            });

            map.on('mousemove', 'road-layer', function(e) {
                map.getCanvas().style.cursor = 'pointer';

                var features = e.features;
                if (!features || features.length === 0) {
                    return;
                }
                
                var name = features[0].properties.name;
                if(name!=null){
                    var lot_area = features[0].properties.lot_area;
                    var forntage = features[0].properties.forntage;
                    var intend_use = features[0].properties.intend_use;
                    var frontage_info = forntage == "-"? "" : `Frontage: <strong>${forntage}</strong> (m/ft)<br/>`;
    
                    var info = `<h4>Lot ${name}</h4>
                                Lot Area: <strong><em>${lot_area}</strong> (ha/acre)</em><br/>
                                ${frontage_info}
                                Intended Use: <strong>${intend_use}</strong><br/>
                            `;
                    document.getElementById('info').innerHTML=info;
                }
                
            });
            
            map.on('mouseleave', 'road-layer', function(e) {
                map.getCanvas().style.cursor = '';
                document.getElementById('info').innerHTML='';
            });


        });
    });
});

map.addControl(new mapboxgl.NavigationControl(), 'top-left');
