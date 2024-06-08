
'use strict'


var gPlaces

_createPlaces()

function getPlaces() {
    return gPlaces
}


//$same every crud
function removePlace(placeId) {
    const idx = gPlaces.findIndex((place) => place.id === placeId)
    gPlaces.splice(idx, 1)
    
}

//2
function addPlace(name, lat, lng, zoom) {
    const place = _createPlace(name, lat, lng, zoom)
    gPlaces.unshift(place)
    //   _savePlacesToStorage()
    return place
}

// find id (at 4 too) $same evrey crud
function getPlaceById(placeId) {
    const place = gPlaces.find((place) => place.id === placeId)
    return place
}

//$same evrey crud
//3 id for deleting & specfic
function _createPlace(name, lat, lng, zoom) {
    return {
        id: makeId(),
        name,
        lat,
        lng,
        zoom,
    }
}

//4
function _createPlaces() {
    var places

    // Nothing in storage? generate demo data
    if (!places || !places.length) {
        places = []
        for (let i = 0; i < 2; i++) {
            places.push(_createPlace('Place ' + i, 32.1416 + i / 100, 34.831213 + i / 100, 13))
        }
    }
    gPlaces = places
    // _savePlacesToStorage()
}

