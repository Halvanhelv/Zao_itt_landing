    document.querySelector(".tab_price_choice").addEventListener("click", fprice);

    function fprice(event) {
        console.log(event);
        if (event.target.className == "price_b") {


            var dataprice = event.target.getAttribute("data-price");
            var price_b = document.getElementsByClassName("price_b");

            for (var a = 0; a < price_b.length; a++)

            {
                price_b[a].classList.remove('active_2');


            }


            event.target.classList.add("active_2");
            var priceBody = document.getElementsByClassName("main_price");

            for (var i = 0; i < priceBody.length; i++) {
                if (dataprice == i) {
                    priceBody[i].style.display = "grid";

                    var price_body = document.getElementById('tabs_bodys');
                    price_body.style.display = "grid";

                } else {
                    priceBody[i].style.display = "none";

                }
            }
        }
    }
