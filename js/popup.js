const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mouseenter', 'plot-building-layer', (e) => {
    map.getCanvas().style.cursor = 'pointer';
    const properties = e.features[0].properties;
    const popupContent = `<strong>${properties.p_id}</strong>`;
    popup.setLngLat(e.lngLat).setHTML(popupContent).addTo(map);
});

map.on('mouseleave', 'plot-building-layer', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
});