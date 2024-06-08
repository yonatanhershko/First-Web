
'use strict'


var gPlaces
const PLACES_STORAGE_KEY = 'places'

_createPlaces()

function getPlaces() {
    return gPlaces
}

//$same every crud
function removePlace(placeId) {
    const idx = gPlaces.findIndex((place) => place.id === placeId)
    gPlaces.splice(idx, 1)
    _savePlacesToStorage()
    
}

//2
function addPlace(name, lat, lng, zoom) {
   
    const place = _createPlace(name, lat, lng, zoom)
    gPlaces.unshift(place)
    renderMarkers()
      _savePlacesToStorage()
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
    var places = loadFromStorage(PLACES_STORAGE_KEY)


    // Nothing in storage? generate demo data
    if (!places || !places.length) {
        places = []
        for (let i =1; i < 3; i++) {
            places.push(_createPlace('Place ' + i, 29.5503645 , 34.831213 + i / 100, 12))
        }
    }
    gPlaces = places
    _savePlacesToStorage()
}

//6$
function _savePlacesToStorage() {
    saveToStorage(PLACES_STORAGE_KEY, gPlaces)
  }