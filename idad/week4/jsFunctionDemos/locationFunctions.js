document.getElementById("checkLocationBtn").addEventListener("click", checkLocation);

let locationResult = document.getElementById("locationSpan");
let addressResult = document.getElementById("addressSpan");

const locationOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}

function checkLocation(){
  navigator.geolocation.getCurrentPosition(foundLocation, locationError, locationOptions);
}

function foundLocation(pos){
  console.log(pos);
  locationResult.textContent = `${pos.coords.latitude}, ${pos.coords.longitude}`;
  getMapData(pos.coords.latitude, pos.coords.longitude);
}

function locationError(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

async function getMapData(lat, long){
  const url = `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${long}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    parseMapInfo(result.features[0]);
  } catch (error) {
    console.error(error.message);
  }
}

function parseMapInfo(mapFeatures){
  addressResult.textContent = mapFeatures.properties.display_name;
  console.log(mapFeatures);
}