// The ymaps.ready() function will be called when
    // all API components are loaded and the DOM tree is ready.
    ymaps.ready(init);
    function init(){
        // Creating the map.
        var myMap = new ymaps.Map("map", {
            // Map center coordinates.
            // Default order: "latitude, longitude".
            // To avoid determining map center coordinates manually,
            // use the Coordinate Detection tool.
            center: [43.23362301, 44.74379050],
            // Zoom level. Valid values:
            // from 0 (whole world) to 19.
            zoom: 17
        });
    }

document.getElementsByClassName("map_toggle")[1].addEventListener("click",fmaps)
document.getElementsByClassName("map_toggle")[0].addEventListener("click",fmaps)

function fmaps(event)
{
    var maps = document.getElementById('map');
    
    
    if(maps.style.display=="none")
        {
            maps.style.display = "grid";
        }
    else
        {
          maps.style.display ="none";  
        }
} 