'use strict'

let gMap = null//1
let gMarkers = []
let gCoords


function onInit() {
    initMap()
    renderPlaces()
    console.log('hh');
}

//also 1 first render it
function renderPlaces() {
    const places = getPlaces()
    const strHtmls = places.map(place => `
              <li>${place.name}
              <button onclick="onRemovePlace('${place.id}')">X</button>
              <button onclick="onPanToPlace('${place.id}')">Go</button>
              </li>`
    )

    document.querySelector('.places-list').innerHTML = strHtmls.join('')
}



function initMap() {
    const elMap = document.querySelector('.map-container')
    const defaultLoc = { lat: 29.5503645, lng: 34.9522761 }

    gMap = new google.maps.Map(elMap, {
        zoom: 8,
        center: defaultLoc,
    })

    // var marker = new google.maps.Marker({
    //     position: { lat: 29.5503645, lng:  34.9522761 },
    //     title: ' test marker'
    // }
    // )
    // marker.setMap( gMap)

    // console.log('gMap:', gMap)

    gMap.addListener('click', ev => {
        const name = prompt('Place name?', 'Place 1')
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        addPlace(name, lat, lng, gMap.getZoom())
        renderPlaces()
    })

    // const locationButton = document.createElement('button')
    // locationButton.innerText = 'Click to go home 🏡'
    // locationButton.classList.add('custom-map-control-button')
    // gMap.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton)
    // locationButton.addEventListener('click', onPanToUserLoc)

    // renderMarkers()
}



// function onRemovePlace(placeId) {
//     const place = getPlaceById(placeId)
//     gMap.setCenter({ lat: place.lat, lng: place.lng })
//     gMap.setZoom(place.zoom)
// }


function onPanToPlace(placeId) {
    const place = getPlaceById(placeId)
    gMap.setCenter({ lat: place.lat, lng: place.lng })
    gMap.setZoom(place.zoom)
}


//$ 4
function onRemovePlace(placeId) {
    removePlace(placeId)
    renderPlaces()
    // renderMarkers()
}

function renderMarkers() {
    const places = getPlaces()
    // remove previous markers
    gMarkers.forEach(marker => marker.setMap(null))
    // every place is creating a marker
    gMarkers = places.map(place => {
        return new google.maps.Marker({
            position: place,
            map: gMap,
            title: place.name
        })
    })
}


