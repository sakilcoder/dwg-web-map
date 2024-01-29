mapboxgl.accessToken = 'pk.eyJ1Ijoic2FraWxjb2RlcmdlbyIsImEiOiJjbGZ6cjhzY2YwaGlvM2ZtdHQ0MDhyZXk3In0.n7VG5pOCWzDc7Q5qzUfd-A'; // public
        const map = new mapboxgl.Map({
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [-78.261496966, 44.302257902],
            zoom: 16,
            pitch: 45,
            bearing: -17.6,
            container: 'map',
            antialias: true
        });

        map.on('style.load', () => {
            // Load custom icons
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

                    map.addSource('plot-building', {
                        type: 'geojson',
                        data: 'data/plot-building.json'
                    });

                    map.addLayer({
                        'id': 'plot-building-layer',
                        'type': 'fill',
                        'source': 'plot-building',
                        'paint': {
                            'fill-color': '#ff0000',
                            'fill-opacity': 0.5,
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
                            'icon-image': ['match', ['get', 'status'], 'Available', 'green-icon', 'red-icon'], // Choose icon based on "status"
                            'icon-size': 1,
                            'icon-allow-overlap': true,
                            'text-field': ['get', 'p_id'],
                            'text-font': ['Open Sans Regular'],
                            'text-size': 12,
                            'text-anchor': 'top',
                            'text-allow-overlap': true
                        }
                    });


                });
            });
        });