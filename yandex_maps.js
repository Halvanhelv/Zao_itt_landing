// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [43.23362301, 44.74379050],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
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