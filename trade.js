function buildCarsSelector() {
    listCars(allCars)
}

function listCars(carsArr) {
    carsArr.forEach((car, index) => {
        addToList(car, index)
    })
}

function addToList(car, index) {
    // set UID to car element for displaying
    car.uid = index

    let el = document.createElement("option")
    el.value = `${car.year} ${car.make} ${car.model}`;
    el.innerText =
        `[Miles: ${car.miles.toLocaleString("en-US")}, Price: $${car.price.toLocaleString("en-US")}]`
    el.id = car.uid
    document.getElementById("carsList").appendChild(el);
}

function detectSelectedCar() {
    $('#car-search').on('input', function () {
        let opt = $('option[value="' + $(this).val() + '"]');
        opt.length ? paintCar(opt.attr('id')) : paintCar(-1)
    });
}

function paintCar(car) {
    console.log(car)
    car = allCars[car]
    if (car === -1 || car === undefined) {
        $("#car-placeholder").empty().append("<div class='p-5 text-center'>No Car Selected</div>")
    } else {
        //calculate value of cars
        let inPrice = parseInt(document.getElementById("in_price").value)
        let calc = car.price -  inPrice
        let adjs;
        if (calc < -200){
            adjs = `You will get $${calc * -1} in adjustment`
        }else if(calc > 200){
            adjs = (`You will pay $${calc} in adjustment`)
        }else{
            adjs = (`No adjustments required, prices are considered equal`)
        }

        let carTemplate = `<div class="row">
                             <div class="col-lg-6 mb-4">
                                  <img src="${car.imgUrl}" alt="" class="img-fluid rounded">
                                  <div class="bg-dark mt-3 p-3 rounded-3">${adjs}</div>
                             </div>
                                                    <div class="col-lg-6 p-md-4 mb-4">
                                                        <h5 class="card-title">${car.year} ${car.make}
                                                            ${car.model}</h5>
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <span class="small fw-light">Miles</span>
                                                                <br>
                                                                <span class="h4">${car.miles.toLocaleString("en-US")}</span>
                                                            </div>
                                                            <div class="col-6">
                                                                <span class="small fw-light">Price</span>
                                                                <br>
                                                                <span class="h4">$${car.price.toLocaleString("en-US")}</span>
                                                            </div>
                                                        </div>
                                                        <br>
                                                        <table class="table table-borderless text-light fw-light w-100 small p-4">
                                                            <tr>
                                                                <td class="w-50">Trim</td>
                                                                <td>${car.trim}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Transmission</td>
                                                                <td>${car.transmission}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Cylinders</td>
                                                                <td>${car.cylinders}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>HP</td>
                                                                <td>${car.horsepower}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Fuel Type</td>
                                                                <td>${car.fuelType}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>City MPG</td>
                                                                <td>${car.cityMPG}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Highway MPG</td>
                                                                <td>${car.hwyMPG}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Drive Type</td>
                                                                <td>${car.driveType}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Car Type</td>
                                                                <td>${car.carType}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Color</td>
                                                                <td>${car.color}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Condition</td>
                                                                <td>${car.condition}</td>
                                                            </tr>
                                                        </table>
                                                        
                                                    </div>
                                                </div>`
        $("#car-placeholder").empty().append(carTemplate)
        $("#submit-trade").show()


    }


}

window.onload = () => {
    $("#submit-trade").hide()
    buildCarsSelector();
    detectSelectedCar()
}
