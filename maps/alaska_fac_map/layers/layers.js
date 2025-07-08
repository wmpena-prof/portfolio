var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_BoundaryFootprintImage_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal.alaska.gov/arcgis/services/ahri_2020_rgb_cache/MapServer/WMSServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Boundary/Footprint/Image',
                            popuplayertitle: 'Boundary/Footprint/Image',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BoundaryFootprintImage_1, 0]);
var format_KANA_2 = new ol.format.GeoJSON();
var features_KANA_2 = format_KANA_2.readFeatures(json_KANA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANA_2.addFeatures(features_KANA_2);
var lyr_KANA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KANA_2, 
                style: style_KANA_2,
                popuplayertitle: 'KANA',
                interactive: true,
    title: 'KANA<br />\
    <img src="styles/legend/KANA_2_0.png" /> Clinic<br />\
    <img src="styles/legend/KANA_2_1.png" /> Landfill<br />\
    <img src="styles/legend/KANA_2_2.png" /> Raw Water Storage<br />\
    <img src="styles/legend/KANA_2_3.png" /> Water Storage Tank<br />\
    <img src="styles/legend/KANA_2_4.png" /> Water Treatment Plant<br />\
    <img src="styles/legend/KANA_2_5.png" /> Raw Water Storage Tank<br />\
    <img src="styles/legend/KANA_2_6.png" /> Sewage Lagoon<br />\
    <img src="styles/legend/KANA_2_7.png" /> Hydroelectric Plant<br />\
    <img src="styles/legend/KANA_2_8.png" /> Honey Bucket Disposal Site<br />\
    <img src="styles/legend/KANA_2_9.png" /> Backwash Lagoon<br />\
    <img src="styles/legend/KANA_2_10.png" /> Power Plant<br />\
    <img src="styles/legend/KANA_2_11.png" /> Sewage Treatment Plant<br />\
    <img src="styles/legend/KANA_2_12.png" /> Lift Station<br />\
    <img src="styles/legend/KANA_2_13.png" /> Well House<br />\
    <img src="styles/legend/KANA_2_14.png" /> Pump Station<br />\
    <img src="styles/legend/KANA_2_15.png" /> Washeteria<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_BoundaryFootprintImage_1.setVisible(true);lyr_KANA_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BoundaryFootprintImage_1,lyr_KANA_2];
lyr_KANA_2.set('fieldAliases', {'Region': 'Region', 'Community': 'Community', 'Facility': 'Facility', });
lyr_KANA_2.set('fieldImages', {'Region': 'TextEdit', 'Community': 'TextEdit', 'Facility': 'TextEdit', });
lyr_KANA_2.set('fieldLabels', {'Region': 'inline label - visible with data', 'Community': 'inline label - visible with data', 'Facility': 'inline label - visible with data', });
lyr_KANA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});