var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_lineworking_1 = new ol.format.GeoJSON();
var features_lineworking_1 = format_lineworking_1.readFeatures(json_lineworking_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lineworking_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lineworking_1.addFeatures(features_lineworking_1);
var lyr_lineworking_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lineworking_1, 
                style: style_lineworking_1,
                interactive: true,
                title: '<img src="styles/legend/lineworking_1.png" /> line-working'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_lineworking_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_lineworking_1];
lyr_lineworking_1.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', });
lyr_lineworking_1.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrOn': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'DocUpdate': '', 'DocId': '', });
lyr_lineworking_1.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', });
lyr_lineworking_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});