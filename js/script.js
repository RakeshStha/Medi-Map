var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 27.597256056882415, lng: 85.31948317008779},
        zoom: 17
    });

    //call marker function
    addMarker({lat:27.597256056882415,lng:85.31948317008779});
    addMarker({lat:27.5976411567244,lng:85.32435651634849});
    addMarker({lat:27.600731889166706,lng:85.31349128502795});
    addMarker({lat:27.599277175518917,lng:85.31882351620831});
   

    //add marker function
    function addMarker(coords){
        var marker = new google.maps.Marker({
            position:coords,
            map:map,
            icon:'./img/pharmacy.png',
        });
    }
}