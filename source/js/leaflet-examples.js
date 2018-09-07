var map, stanfordMlk, apostle, princetonMap, bnf, iiifLayers, scottlandBagpipe;

map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0
});

stanfordMlk = L.tileLayer.iiif('https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json', {
  attribution: '<a href="http://searchworks.stanford.edu/view/hg676jb4964">Martin Luther King Jr. & Joan Baez march to integrate schools, Grenada, MS, 1966</a>'
}).addTo(map);

apostle = L.tileLayer.iiif('https://ids.lib.harvard.edu/ids/iiif/25286610/info.json', {
  attribution: '<a href="http://via.lib.harvard.edu/via/deliver/deepcontentItem?recordId=olvwork576793%2CVIT.BB%3A4906794">Apostle: Anonymous sculptor of Florence, 15th century (1401-1500)</a>'
});

bnf = L.tileLayer.iiif('https://gallica.bnf.fr/iiif/ark:/12148/btv1b84539771/f1/info.json', {
  attribution: '<a href="http://gallicalabs.bnf.fr/ark:/12148/btv1b84539771">ManuscritKalîla et Dimna, avec de nombreuses',
  fitBounds: false
});

acrobata = L.tileLayer.iiif('https://libimages.princeton.edu/loris2/pudl0033/2007/04003/00000001.jp2/info.json', {
  attribution: '<a href="http://pudl.princeton.edu/objects/pz50gw22j">Acrobata Marroquí - Lorenzo Homar</a>',
  quality: 'gray'
});

scottlandBagpipe = L.tileLayer.iiif('https://images.is.ed.ac.uk/luna/servlet/iiif/UoEwmm~2~2~77099~164515/info.json');

iiifLayers = {
  'Martin Luther King Jr. & Joan Baez ...': stanfordMlk,
  'The provinces of New York and N...': princetonMap,
  'Apostle: Anonymous sculptor of Fl...': apostle,
  'ManuscritKalîla et Dimna, avec de...': bnf,
  'Acrobata Marroquí': acrobata,
  'A Compleat Theory of the Scots Highland Bagpipe': scottlandBagpipe
};

//L.control.layers(iiifLayers).addTo(map);
