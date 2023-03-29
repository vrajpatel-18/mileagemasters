class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="wrapper1">
        <nav>
          <a href="index.html"><img src="../images/logos/logosquareblack.png" alt="logo" class="headerLogo"></a>
          <ul>
            <i class='bx bx-window-close' onclick="hideMenu()"></i>
            <li class="headerLink"><a href="index.html" onclick="hideMenu()">Home</a></li>
            <li class="headerLink"><a href="shop.html" onclick="hideMenu()">Buy</a></li>
            <li class="headerLink"><a href="sell.html" onclick="hideMenu()">Sell/Trade</a></li>
            <li class="headerLink"><a href="about.html" onclick="hideMenu()">About</a></li> 
            <li class="headerLink"><a href="contact.html" onclick="hideMenu()">Contact</a></li>
          </ul>
        </nav>
        <i class='bx bx-menu'onclick="showMenu()"></i>
      </div>
    `
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col1">
              <h4>Contact us:</h4>
              <ul>
                <li><span class="material-icons">mail</span> mileagemasters@gmail.com</li>
                <li><span class="material-icons">call</span> (630) 428-6000</li>
                <li><span class="material-icons">location_on</span> 2360 95th St</li>
              </ul>
            </div>
            <div class="footer-col2 anim">
              <h4><a href="shop.html">Shop</a></h4>
              <ul>
                <li><a href="shop.html">View all listings</a></li>
                <li><a href="loanestimator.html">Loan estimator</a></li>
              </ul>
            </div>
            <div class="footer-col2 anim">
              <h4><a href="sell.html">Sell / Trade</a></h4>
            </div>
            <div class="footer-col2 anim">
              <h4><a href="about.html">About</a></h4>
              <ul>
                <li><a href="contact.html">Contact form</a></li>
                <li><a href="about.html">Hours</a></li>
              </ul>
            </div>
            <div class="footer-col2">
              <h4>Other</h4>
              <ul>
                <li><a href="salesreps.html">Sales representatives</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="contestinfo.html">Contest Info</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>Copyright © 2022 Mileage Masters</p>
        </div>
      </footer>    
    `;
    }
}

customElements.define("my-header", MyHeader);
customElements.define("my-footer", MyFooter);


function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}


//EXAMPLE
/*
let make_model_year = {
  make: "",
  model: "",
  year: ,
  trim: "",
  transmission: "",
  cylinders: ,
  horsepower: ,
  fuelType: "",
  cityMPG: ,
  hwyMPG: ,
  driveType: "",
  carType: "",
  color: "",
  condition: "",
  miles: ,
  price:
};
*/


let audi_q7_2018 = {
    make: "Audi",
    model: "Q7",
    year: 2018,
    trim: "2.0T Premium Plus Sport Utility 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 252,
    fuelType: "Gasoline",
    cityMPG: 19,
    hwyMPG: 25,
    driveType: "AWD",
    carType: "SUV",
    color: "Black",
    condition: "Good",
    miles: 48592,
    price: 28076,
    imgUrl: "https://i.ytimg.com/vi/5XiHhOsTbaw/maxresdefault.jpg"
};

let honda_civic_2014 = {
    make: "Honda",
    model: "Civic",
    year: 2014,
    trim: "LX Sedan 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 143,
    fuelType: "Gasoline",
    cityMPG: 30,
    hwyMPG: 39,
    driveType: "FWD",
    carType: "Sedan",
    color: "Silver",
    condition: "Fair",
    miles: 134629,
    price: 7889,
    imgUrl: "http://cdn.carbuzz.com/car-thumbnails/700x375/5000/400/5440.jpg"
};

let bmw_m3_2021 = {
    make: "BMW",
    model: "M3",
    year: 2021,
    trim: "Sedan 4D",
    transmission: "Manual",
    cylinders: 6,
    horsepower: 473,
    fuelType: "Gasoline",
    cityMPG: 16,
    hwyMPG: 23,
    driveType: "RWD",
    carType: "Sedan",
    color: "Black",
    condition: "Excellent",
    miles: 27402,
    price: 71901,
    imgUrl: "https://cdn.motor1.com/images/mgl/9q9ob/s1/manhart-bmw-m3-and-m4.jpg"
};

let nissan_rogue_2011 = {
    make: "Nissan",
    model: "Rogue",
    year: 2011,
    trim: "S 4dr",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 170,
    fuelType: "Gasoline",
    cityMPG: 22,
    hwyMPG: 28,
    driveType: "FWD",
    carType: "SUV",
    color: "Gray",
    condition: "Fair",
    miles: 140432,
    price: 13998,
    imgUrl: "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/chrome/white/2011NIS010a_640_01"
};

let audi_q5_2022 = {
    make: "Audi",
    model: "Q5",
    year: 2022,
    trim: "45 TFSI S line Prestige Sport Utility 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 261,
    fuelType: "Gasoline",
    cityMPG: 23,
    hwyMPG: 28,
    driveType: "AWD",
    carType: "SUV",
    color: "Silver",
    condition: "Very Good",
    miles: 18364,
    price: 47457,
    imgUrl: "https://inv.assets.sincrod.com/ChromeColorMatch/us/WHITE_cc_2022AUS020032_01_1280_L5L5x640.jpg"
};


let nissan_240sx_1996 = {
    make: "Nissan",
    model: "240SX",
    year: 1996,
    trim: "Couple 2D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 155,
    fuelType: "Gasoline",
    cityMPG: 18,
    hwyMPG: 24,
    driveType: "RWD",
    carType: "Coupe",
    color: "Red",
    condition: "Good",
    miles: 80352,
    price: 4358,
    imgUrl: "https://bringatrailer.com/wp-content/uploads/2019/11/1996_nissan_240sx_15760973374555a9cc8a83e2a39aDSC_0117-e1576099232672.jpg?fit=940%2C627"
};

let bentley_mulsanne_2016 = {
    make: "Bentley",
    model: "Mulsanne",
    year: 2016,
    trim: "Speed Sedan 4D",
    transmission: "Automatic",
    cylinders: 8,
    horsepower: 505,
    fuelType: "Gasoline",
    cityMPG: 11,
    hwyMPG: 18,
    driveType: "RWD",
    carType: "Sedan",
    color: "Blue",
    condition: "Very Good",
    miles: 126392,
    price: 151477,
    imgUrl: "https://media.ed.edmunds-media.com/bentley/mulsanne/2016/oem/2016_bentley_mulsanne_sedan_base_fq_oem_1_1600.jpg"
};
let dodge_durango_2017 = {
    make: "Dodge",
    model: "Durango",
    year: 2017,
    trim: "SXT Sport Utility 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 293,
    fuelType: "Gasoline",
    cityMPG: 18,
    hwyMPG: 25,
    driveType: "AWD",
    carType: "SUV",
    color: "White",
    condition: "Excellent",
    miles: 81550,
    price: 17579,
    imgUrl: "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002486/1C4RDHAG1JC439133/ced9946882e663c8e3ae494d8595f15e.jpg"
};

let bmw_z4_2009 = {
    make: "BMW",
    model: "Z4",
    year: 2009,
    trim: "30i Roadster 2D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 255,
    fuelType: "Gasoline",
    cityMPG: 19,
    hwyMPG: 29,
    driveType: "RWD",
    carType: "Convertible",
    color: "Black",
    condition: "Good",
    miles: 83721,
    price: 12876,
    imgUrl: "https://bringatrailer.com/wp-content/uploads/2021/10/2009_bmw_z4_roadster_sdrive_3-0_6_speed_manual_16335309204d627911IMG_3817.jpg?fit=940%2C627"
};

let alfaromeo_stelvio_2021 = {
    make: "Alfa Romeo",
    model: "Stelvio",
    year: 2021,
    trim: "Quadrifoglio Sport Utility 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 505,
    fuelType: "Gasoline",
    cityMPG: 17,
    hwyMPG: 23,
    driveType: "AWD",
    carType: "SUV",
    color: "Red",
    condition: "Fair",
    miles: 30911,
    price: 57900,
    imgUrl: "https://media.evo.co.uk/image/private/s--LI80ZDpx--/v1588169352/evo/2020/04/ALP_4875.jpg"
};
let toyota_camry_2014 = {
    make: "Toyota",
    model: "Camry",
    year: 2014,
    trim: "LE Sedan 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 178,
    fuelType: "Gasoline",
    cityMPG: 25,
    hwyMPG: 35,
    driveType: "FWD",
    carType: "Sedan",
    color: "Gray",
    condition: "Excellent",
    miles: 108459,
    price: 10941,
    imgUrl: "https://i.ytimg.com/vi/TrEN5f_xH9A/maxresdefault.jpg"
};
let honda_odyssey_2020 = {
    make: "Honda",
    model: "Odyssey",
    year: 2020,
    trim: "EX Minivan 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 280,
    fuelType: "Gasoline",
    cityMPG: 19,
    hwyMPG: 28,
    driveType: "FWD",
    carType: "Minivan",
    color: "Light Gray",
    condition: "Good",
    miles: 47824,
    price: 27984,
    imgUrl: "https://hips.hearstapps.com/hmg-prod/images/honda-odyssey-0150-1200x800-1596474650.jpg"
};

let nissan_leaf_2021 = {
    make: "Nissan",
    model: "LEAF",
    year: 2021,
    trim: "S PLUS Hatchback 4D",
    transmission: "Single Speed",
    cylinders: "n/a",
    horsepower: 241,
    fuelType: "Electric",
    cityMPG: 118,
    hwyMPG: 97,
    driveType: "FWD",
    carType: "Hatchback",
    color: "White",
    condition: "Very Good",
    miles: 18231,
    price: 26811,
    imgUrl: "https://www.topgear.com/sites/default/files/cars-car/image/2021/10/LEAF10%20SV%20-%20018.jpg?w=1280&h=720"
};
let hyundai_ioniqelectric_2018 = {
    make: "Hyundai",
    model: "Ioniq Electric",
    year: 2018,
    trim: "Limited Hatchback 4D",
    transmission: "Single Speed",
    cylinders: "n/a",
    horsepower: 118,
    fuelType: "Electric",
    cityMPG: 150,
    hwyMPG: 122,
    driveType: "FWD",
    carType: "Hatchback",
    color: "White",
    condition: "Fair",
    miles: 44021,
    price: 18747,
    imgUrl: "https://images.hgmsites.net/hug/2018-hyundai-ioniq_100616442_h.jpg"
};
let honda_claritypluginhybrid_2021 = {
    make: "Honda",
    model: "Clarity Plug-In Hybrid",
    year: 2021,
    trim: "Sedan 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 103,
    fuelType: "Hybrid",
    cityMPG: 44,
    hwyMPG: 40,
    driveType: "FWD",
    carType: "Sedan",
    color: "Silver",
    condition: "Good",
    miles: 24131,
    price: 28692,
    imgUrl: "https://media.ed.edmunds-media.com/honda/clarity/2020/oem/2020_honda_clarity_sedan_touring-plug-in-hybrid_fq_oem_1_1280.jpg"
};
let ford_explorer_2009 = {
    make: "Ford",
    model: "Explorer",
    year: 2009,
    trim: "Eddie Bauer Sport Utility 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 210,
    fuelType: "Gasoline",
    cityMPG: 13,
    hwyMPG: 19,
    driveType: "AWD",
    carType: "SUV",
    color: "Black",
    condition: "Good",
    miles: 151304,
    price: 4504,
    imgUrl: "https://static.cargurus.com/images/forsale/2023/01/03/23/07/2010_ford_explorer-pic-8650040279366840184-1024x768.jpeg"
};
let chrysler_pacifica_2017 = {
    make: "Chrysler",
    model: "Pacifica",
    year: 2017,
    trim: "LX Minivan 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 287,
    fuelType: "Gasoline",
    cityMPG: 18,
    hwyMPG: 28,
    driveType: "FWD",
    carType: "Minivan",
    color: "Red",
    condition: "Excellent",
    miles: 84211,
    price: 15322,
    imgUrl: "https://i.gaw.to/vehicles/photos/08/04/080463_2017_chrysler_Pacifica.jpg?640x400"
};
let dodge_charger_2020 = {
    make: "Dodge",
    model: "Charger",
    year: 2020,
    trim: "SXT Sedan 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 292,
    fuelType: "Gasoline",
    cityMPG: 19,
    hwyMPG: 30,
    driveType: "RWD",
    carType: "Sedan",
    color: "Black",
    condition: "Good",
    miles: 43235,
    price: 23483,
    imgUrl: "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11001967/2C3CDXBG9LH139679/5ddaffddb0869c12b8e7cd4bd03349cb.jpg"
};
let toyota_highlander_2016 = {
    make: "Toyota",
    model: "Highlander",
    year: 2016,
    trim: "Limited Sport Utility 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 270,
    fuelType: "Gasoline",
    cityMPG: 18,
    hwyMPG: 24,
    driveType: "AWD",
    carType: "SUV",
    color: "Gray",
    condition: "Fair",
    miles: 86342,
    price: 20010,
    imgUrl: "https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2019/04/2014_Toyota_Highlander_LTD_Plat_21-1500x900.jpg"
};
let toyota_corolla_1997 = {
    make: "Toyota",
    model: "Corolla",
    year: 1997,
    trim: "Sedan 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 100,
    fuelType: "Gasoline",
    cityMPG: 22,
    hwyMPG: 27,
    driveType: "FWD",
    carType: "Sedan",
    color: "Gray",
    condition: "Excellent",
    miles: 157342,
    price: 1703,
    imgUrl: "https://media.ed.edmunds-media.com/toyota/corolla/1996/oem/1996_toyota_corolla_sedan_dx_fq_oem_1_500.jpg"
};
let honda_accord_2019 = {
    make: "Honda",
    model: "Accord",
    year: 2019,
    trim: "EX-L Sedan 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 192,
    fuelType: "Gasoline",
    cityMPG: 30,
    hwyMPG: 38,
    driveType: "FWD",
    carType: "Sedan",
    color: "Blue",
    condition: "Good",
    miles: 56323,
    price: 24086,
    imgUrl: "https://www.cnet.com/a/img/resize/3e6a3aefa86a83e56d1e43c57b87396cec3514f7/hub/2019/04/10/ed910d79-d4ea-43ea-8595-5eeaa4952d2d/2019-honda-accord-sport-20t-26.jpg?auto=webp&fit=crop&height=675&width=1200"
};
let hyundai_elantra_2013 = {
    make: "Hyundai",
    model: "Elantra",
    year: 2013,
    trim: "GS Coupe 2D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 148,
    fuelType: "Gasoline",
    cityMPG: 27,
    hwyMPG: 37,
    driveType: "FWD",
    carType: "Coupe",
    color: "White",
    condition: "Very Good",
    miles: 109304,
    price: 5391,
    imgUrl: "https://media.ed.edmunds-media.com/hyundai/elantra/2013/oem/2013_hyundai_elantra_sedan_gls_fq_oem_1_1600.jpg"
};
let mitsubishi_eclipse_2001 = {
    make: "Mitsubishi",
    model: "Eclipse",
    year: 2001,
    trim: "GS Coupe 2D",
    transmission: "Manual",
    cylinders: 6,
    horsepower: 147,
    fuelType: "Gasoline",
    cityMPG: 20,
    hwyMPG: 27,
    driveType: "FWD",
    carType: "Coupe",
    color: "Orange",
    condition: "Fair",
    miles: 143511,
    price: 1622,
    imgUrl: "https://cloud.leparking.fr/2022/12/30/04/05/mitsubishi-eclipse-buy-2011-mitsubishi-eclipse-gs-bridgeton-mo-orange_8685924444.jpg"
};
let volkswagen_tiguan_2014 = {
    make: "Volkswagen",
    model: "Tiguan",
    year: 2014,
    trim: "2.0T SE Sport Utility 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 200,
    fuelType: "Gasoline",
    cityMPG: 21,
    hwyMPG: 26,
    driveType: "FWD",
    carType: "SUV",
    color: "White",
    condition: "Fair",
    miles: 82086,
    price: 7729,
    imgUrl: "https://hips.hearstapps.com/autoweek/assets/s3fs-public/2014_tiguan_3251.jpg"
};
let subaru_impreza_2010 = {
    make: "Subaru",
    model: "Impreza",
    year: 2010,
    trim: "2.5i Sedan 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 170,
    fuelType: "Gasoline",
    cityMPG: 20,
    hwyMPG: 26,
    driveType: "AWD",
    carType: "Sedan",
    color: "White",
    condition: "Excellent",
    miles: 124250,
    price: 6834,
    imgUrl: "https://cdn.jdpower.com/Models/640x480/2010-Subaru-ImprezaWagon-GT.jpg"
};
let chevrolet_camaro_2017 = {
    make: "Chevrolet",
    model: "Camaro",
    year: 2017,
    trim: "SS Convertible 2D",
    transmission: "Automatic",
    cylinders: 8,
    horsepower: 455,
    fuelType: "Gasoline",
    cityMPG: 17,
    hwyMPG: 27,
    driveType: "RWD",
    carType: "Convertible",
    color: "Orange",
    condition: "Good",
    miles: 73307,
    price: 22595,
    imgUrl: "https://autonxt.net/wp-content/uploads/2017/11/autocontentexp.comDSC09987_2500-08231a80668bb1c976db04a377dd128556fdd239.jpg"
};
let dodge_viper_2005 = {
    make: "Dodge",
    model: "Viper",
    year: 2005,
    trim: "SRT10 Convertible",
    transmission: "Manual",
    cylinders: 10,
    horsepower: 500,
    fuelType: "Gasoline",
    cityMPG: 11,
    hwyMPG: 19,
    driveType: "RWD",
    carType: "Convertible",
    color: "Orange",
    condition: "Excellent",
    miles: 68596,
    price: 63148,
    imgUrl: "https://cdn.dealeraccelerate.com/stlouis/1/1078/8904/1920x1440/2005-dodge-viper-srt-10-copperhead-edition"
};
let infiniti_q_1999 = {
    make: "INFINITI",
    model: "Q",
    year: 1999,
    trim: "Q45 Sedan 4D",
    transmission: "Automatic",
    cylinders: 8,
    horsepower: 266,
    fuelType: "Gasoline",
    cityMPG: 16,
    hwyMPG: 22,
    driveType: "RWD",
    carType: "Sedan",
    color: "Blue",
    condition: "Very Good",
    miles: 159094,
    price: 2138,
    imgUrl: "https://consumerguide.com/wp-content/uploads/2014/07/98804021990111.jpg"
};
let acura_rdx_2012 = {
    make: "Acura",
    model: "RDX",
    year: 2012,
    trim: "Sport Utility 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 240,
    fuelType: "Gasoline",
    cityMPG: 19,
    hwyMPG: 24,
    driveType: "FWD",
    carType: "SUV",
    color: "Red",
    condition: "Very Good",
    miles: 112986,
    price: 9007,
    imgUrl: "https://picolio.auto123.com/art-images/145058/Acura-RDX-2008_i01.jpg"
};
let bmw_i3_2018 = {
    make: "BMW",
    model: "i3",
    year: 2018,
    trim: "Hatchback 4D",
    transmission: "Automatic",
    cylinders: "n/a",
    horsepower: 170,
    fuelType: "Electric",
    cityMPG: 129,
    hwyMPG: 106,
    driveType: "RWD",
    carType: "Hatchback",
    color: "White",
    condition: "Fair",
    miles: 40248,
    price: 17725,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/2018_BMW_i3_facelift_%281%29.jpg"
};
let bmw_x6_2011 = {
    make: "BMW",
    model: "X6",
    year: 2011,
    trim: "xDrive35i Sport Utility 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 300,
    fuelType: "Gasoline",
    cityMPG: 16,
    hwyMPG: 23,
    driveType: "AWD",
    carType: "SUV",
    color: "White",
    condition: "Good",
    miles: 131570,
    price: 9841,
    imgUrl: "https://www.edmunds.com/assets/m/for-sale/38-5uxku2c34h0n85545/img-1-600x400.jpg"
};
let chrysler_300_2013 = {
    make: "Chrysler",
    model: "300",
    year: 2013,
    trim: "300S Sedan 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 300,
    fuelType: "Gasoline",
    cityMPG: 19,
    hwyMPG: 31,
    driveType: "RWD",
    carType: "Sedan",
    color: "White",
    condition: "Very Good",
    miles: 114103,
    price: 9715,
    imgUrl: "https://images.hgmsites.net/hug/2013-chrysler-300-motown-edition_100413991_h.jpg"
};
let porsche_911_1994 = {
    make: "Porsche",
    model: "911",
    year: 1994,
    trim: "RS America Coupe 2D",
    transmission: "Manual",
    cylinders: 6,
    horsepower: 247,
    fuelType: "Gasoline",
    cityMPG: 15,
    hwyMPG: 23,
    driveType: "RWD",
    carType: "Coupe",
    color: "Gray",
    condition: "Excellent",
    miles: 59466,
    price: 51900,
    imgUrl: "https://bringatrailer.com/wp-content/uploads/2019/10/1994_porsche_911_rs_america_15700441329f98764da1994-Porsche-RS-America-20-e1572461162517.jpg?fit=930%2C620"
};
let subaru_legacy_1992 = {
    make: "Subaru",
    model: "Legacy",
    year: 1992,
    trim: "L Sedan 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 130,
    fuelType: "Gasoline",
    cityMPG: 19,
    hwyMPG: 26,
    driveType: "FWD",
    carType: "Sedan",
    color: "Gray",
    condition: "Excellent",
    miles: 159149,
    price: 1593,
    imgUrl: "https://www.autodetective.com/uploads/photos/subaru/legacy/1992/54748.jpg"
};
let infiniti_fx_2005 = {
    make: "INFINITI",
    model: "FX",
    year: 2005,
    trim: "FX35 Sport Utility 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 280,
    fuelType: "Gasoline",
    cityMPG: 15,
    hwyMPG: 20,
    driveType: "AWD",
    carType: "SUV",
    color: "Black",
    condition: "Very Good",
    miles: 145708,
    price: 4916,
    imgUrl: "http://www.2040-cars.com/_content/cars/images/98/362598/001.jpg"
};
let audi_s8_2017 = {
    make: "Audi",
    model: "S8",
    year: 2017,
    trim: "Sedan 4D",
    transmission: "Automatic",
    cylinders: 8,
    horsepower: 605,
    fuelType: "Gasoline",
    cityMPG: 15,
    hwyMPG: 24,
    driveType: "AWD",
    carType: "Sedan",
    color: "Blue",
    condition: "Fair",
    miles: 73305,
    price: 41891,
    imgUrl: "https://www.quattroworld.com/wp-content/uploads/2015/11/news-2016-audi-rs7-performance-european-3.jpeg"
};
let bentley_arnage_2009 = {
    make: "Bentley",
    model: "Arnage",
    year: 2009,
    trim: "R Sedan 4D",
    transmission: "Automatic",
    cylinders: 8,
    horsepower: 450,
    fuelType: "Gasoline",
    cityMPG: 10,
    hwyMPG: 14,
    driveType: "RWD",
    carType: "Sedan",
    color: "Black",
    condition: "Excellent",
    miles: 54233,
    price: 54256,
    imgUrl: "https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/224685/224685_Front_3-4_Web.jpg"
};
let nissan_pathfinder_2015 = {
    make: "Nissan",
    model: "Pathfinder",
    year: 2015,
    trim: "S Sport Utility 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 260,
    fuelType: "Gasoline",
    cityMPG: 20,
    hwyMPG: 27,
    driveType: "2WD",
    carType: "SUV",
    color: "Gray",
    condition: "Fair",
    miles: 97593,
    price: 8550,
    imgUrl: "https://media.ed.edmunds-media.com/nissan/pathfinder/2015/oem/2015_nissan_pathfinder_4dr-suv_platinum_fq_oem_1_1600.jpg"
};
let mitsubishi_mirage_2021 = {
    make: "Mitsubishi",
    model: "Mirage",
    year: 2021,
    trim: "ES Hatchback 4D",
    transmission: "Manual",
    cylinders: 3,
    horsepower: 76,
    fuelType: "Gasoline",
    cityMPG: 33,
    hwyMPG: 41,
    driveType: "FWD",
    carType: "Hatchback",
    color: "Blue",
    condition: "Good",
    miles: 30917,
    price: 10457,
    imgUrl: "https://www.autotrader.com/wp-content/uploads/2020/11/2020-mitsubishi-mirage-front-3qtr.jpg"
};
let chevrolet_blazer_2022 = {
    make: "Chevrolet",
    model: "Blazer",
    year: 2022,
    trim: "RS Sport Utility 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 308,
    fuelType: "Gasoline",
    cityMPG: 19,
    hwyMPG: 26,
    driveType: "AWD",
    carType: "SUV",
    color: "Black",
    condition: "Fair",
    miles: 18557,
    price: 38471,
    imgUrl: "https://www.autoinfluence.com/wp-content/uploads/2021/09/2022-Chevy-Blazer-Black.jpg"
};
let toyota_supra_1998 = {
    make: "Toyota",
    model: "Supra",
    year: 1998,
    trim: "Turbo Hatchback Coupe 2D",
    transmission: "Manual",
    cylinders: 6,
    horsepower: 320,
    fuelType: "Gasoline",
    cityMPG: 16,
    hwyMPG: 21,
    driveType: "RWD",
    carType: "Coupe",
    color: "Black",
    condition: "Excellent",
    miles: 78242,
    price: 109975,
    imgUrl: "https://bringatrailer.com/wp-content/uploads/2021/08/1998_toyota_supra_1632446217071ceae91998_toyota_supra_163074041198764da50122415-db57-487f-b0ee-b5b8287d64aa-FXDluP.jpg?fit=940%2C627"
};
let infiniti_q70_2016 = {
    make: "INFINITI",
    model: "Q70",
    year: 2016,
    trim: "3.7 Sedan 4D",
    transmission: "Automatic",
    cylinders: 6,
    horsepower: 330,
    fuelType: "Gasoline",
    cityMPG: 18,
    hwyMPG: 26,
    driveType: "RWD",
    carType: "Sedan",
    color: "Gray",
    condition: "Fair",
    miles: 92032,
    price: 15963,
    imgUrl: "https://wieck-infiniti-production.s3.amazonaws.com/photos/61fee64e4ceff28eedd3eaaa0dec1240e4982323/preview-928x522.jpg"
};
let mazda_mx5miata_2013 = {
    make: "MAZDA",
    model: "MX-5 Miata",
    year: 2013,
    trim: "Club Convertible Coupe 2D",
    transmission: "Manual",
    cylinders: 4,
    horsepower: 167,
    fuelType: "Gasoline",
    cityMPG: 21,
    hwyMPG: 28,
    driveType: "RWD",
    carType: "Convertible",
    color: "Red",
    condition: "Good",
    miles: 88092,
    price: 11675,
    imgUrl: "https://static.cargurus.com/images/site/2013/02/14/15/19/2013_mazda_mx-5_miata-pic-8298895868305376919-640x480.jpeg"
};  
let acura_ILX_2018 = {
    make: "Acura",
    model: "ILX",
    year: 2018,
    trim: "Sedan 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 201,
    fuelType: "Gasoline",
    cityMPG: 25,
    hwyMPG: 35,
    driveType: "FWD",
    carType: "Sedan",
    color: "Blue",
    condition: "Good",
    miles: 67896,
    price: 15780,
    imgUrl: "https://cdn.carbuzz.com/gallery-images/2018-acura-ilx-carbuzz-444376.jpg"
};
let toyota_prius_2011 = {
    make: "Toyota",
    model: "Prius",
    year: 2011,
    trim: "One Hatchback 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 134,
    fuelType: "Hybrid",
    cityMPG: 51,
    hwyMPG: 48,
    driveType: "FWD",
    carType: "Hatchback",
    color: "Yellow",
    condition: "Excellent",
    miles: 114345,
    price: 8210,
    imgUrl: "https://priuschat.com/attachments/72416/"
};
let volkswagen_jetta_2021 = {
    make: "Volkswagen",
    model: "Jetta",
    year: 2021,
    trim: "1.4T S Sedan 4D",
    transmission: "Automatic",
    cylinders: 4,
    horsepower: 147,
    fuelType: "Gasoline",
    cityMPG: 29,
    hwyMPG: 39,
    driveType: "FWD",
    carType: "Sedan",
    color: "Gray",
    condition: "Very Good",
    miles: 30990,
    price: 19196,
    imgUrl: "https://file.kelleybluebookimages.com/kbb/base/house/2021/2021-Volkswagen-Jetta-FrontSide_VWJET2101_640x480.jpg"
};


let volvo_v70_2006 = {
    make: "Volvo",
    model: "V70",
    year: 2006,
    trim: "2.4T FWD",
    transmission: "Automatic",
    cylinders: 5,
    horsepower: 168,
    fuelType: "Gasoline",
    cityMPG: 22,
    hwyMPG: 29,
    driveType: "FWD",
    carType: "Wagon",
    color: "Silver",
    condition: "Fair",
    miles: 220849,
    price: 3583,
    imgUrl: "https://static.cargurus.com/images/forsale/2022/12/14/07/20/2006_volvo_v70-pic-3987302449415657689-1024x768.jpeg"
};

let tradeSelected = false;

//ACCORDION JS FUNCTIONALITY
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


function hideMenu() {
    const ul = document.querySelector('ul');
    ul.style.right = '-170px';
    ul.style.transition = '1s';
}

function showMenu() {
    const ul = document.querySelector('ul');
    ul.style.right = '0';
    ul.style.transition = '1s';
}

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});


function buildCard(car) {
    let cards = document.getElementById("cards");
    // let card = document.createElement("div");
    // let section1 = document.createElement("div");
    // let section2 = document.createElement("div");
    // card.classList.add("card");
    // section1.classList.add("card-section");
    // section2.classList.add("card-section");

  //   section1.innerHTML = `
  //   <img src="${car.imgUrl}">
  //   <h3>${car.year} ${car.make} ${car.model}</h3>
  //   <h6>Miles: ${car.miles.toLocaleString("en-US")}
  //     <br>Price: $${car.price.toLocaleString("en-US")}
  //   </h6>
  // `;
  //   section2.innerHTML = `
  //   <p>Trim: ${car.trim}
  //     <br>Transmission: ${car.transmission}
  //     <br>Cylinders: ${car.cylinders}
  //     <br>HP: ${car.horsepower}
  //     <br>Fuel Type: ${car.fuelType}
  //     <br>City MPG: ${car.cityMPG}
  //     <br>Highway MPG: ${car.hwyMPG}
  //     <br>Drive Type: ${car.driveType}
  //     <br>Car Type: ${car.carType}
  //     <br>Color: ${car.color}
  //     <br>Condition: ${car.condition}
  //   </p>
  // `;

    // card.appendChild(section1);
    // card.appendChild(section2);

    let cardTemplate = `
  <div class="card-wrapper">
  <div class="card bg-dark">
    <img src="${car.imgUrl}" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title carFullName">${car.year} ${car.make} ${car.model}</h5>
        <div class="row">
            <div class="col-6">
            <span class="small fw-light">Miles</span>
                <br>
                <span class="h4 carMiles">${car.miles.toLocaleString("en-US")}</span>
            </div>
            <div class="col-6">
            <span class="small fw-light">Price</span>
                <br>
                <span class="h4 carPrice">$${car.price.toLocaleString("en-US")}</span>
                </div>
        </div>
                        
<div class="additional-info mt-4">
<table class="table table-borderless table-dark small">
<tr>
    <td>Trim</td>
    <td class="carTrim">${car.trim}</td>
</tr>
<tr>
    <td>Transmission</td>
    <td class="carTransmission">${car.transmission}</td>
</tr>
<tr>
    <td>Cylinders</td>
    <td class="carCylinders">${car.cylinders}</td>
</tr>
<tr>
    <td>HP</td>
    <td class="carHorsepower">${car.horsepower}</td>
</tr>
<tr>
    <td>Fuel Type</td>
    <td class="carFuelType">${car.fuelType}</td>
</tr>
<tr>
    <td>City MPG</td>
    <td class="carCityMPG">${car.cityMPG}</td>
</tr>
<tr>
    <td>Highway MPG</td>
    <td class="carHwyMPG">${car.hwyMPG}</td>
</tr>
<tr>
    <td>Drive Type</td>
    <td class="carDriveType">${car.driveType}</td>
</tr>
<tr>
    <td>Car Type</td>
    <td class="carCarType">${car.carType}</td>
</tr>
<tr>
    <td>Color</td>
    <td class="carColor">${car.color}</td>
</tr>
<tr>
    <td>Condition</td>
    <td class="carCondition">${car.condition}</td>
</tr>
</table>
                        
</div>
</div>
  </div>
</div>
`
    let newEL = document.createElement("div")
    newEL.className = ('col-lg-3 col-md-6 car-card-col')
    newEL.innerHTML = cardTemplate
    cards.appendChild(newEL);
}

let selectedCar = {};
let allCars = [
    audi_q7_2018,
    honda_civic_2014,
    bmw_m3_2021,
    nissan_rogue_2011,
    audi_q5_2022,
    nissan_240sx_1996,
    bentley_mulsanne_2016,
    dodge_durango_2017,
    bmw_z4_2009,
    alfaromeo_stelvio_2021,
    toyota_camry_2014,
    honda_odyssey_2020,
    nissan_leaf_2021,
    hyundai_ioniqelectric_2018,
    honda_claritypluginhybrid_2021,
    ford_explorer_2009,
    chrysler_pacifica_2017,
    dodge_charger_2020,
    toyota_highlander_2016,
    toyota_corolla_1997,
    honda_accord_2019,
    hyundai_elantra_2013,
    mitsubishi_eclipse_2001,
    volkswagen_tiguan_2014,
    subaru_impreza_2010,
    chevrolet_camaro_2017,
    dodge_viper_2005,
    infiniti_q_1999,
    acura_rdx_2012,
    bmw_i3_2018,
    bmw_x6_2011,
    chrysler_300_2013,
    porsche_911_1994,
    subaru_legacy_1992,
    infiniti_fx_2005,
    audi_s8_2017,
    bentley_arnage_2009,
    nissan_pathfinder_2015,
    mitsubishi_mirage_2021,
    chevrolet_blazer_2022,
    toyota_supra_1998,
    infiniti_q70_2016,
    mazda_mx5miata_2013,
    acura_ILX_2018,
    toyota_prius_2011,
    volkswagen_jetta_2021,
    volvo_v70_2006
];


//LOAN ESTIMATOR FUNCTIONALITY
function carLoanEstimator(price, downPayment, interestRate, loanTerm) {
    let loanAmount = price - downPayment;
    let monthly = loanAmount / loanTerm;
    let monthlyPayment = monthly * (1 + (interestRate / 100))
    return monthlyPayment;
}

if (document.getElementById("calculate") != null) {
    document.getElementById("calculate").addEventListener("click", function () {
        let price = document.getElementById("price").value;
        let downPayment = document.getElementById("downPayment").value;
        let interestRate = document.getElementById("interestRate").value;
        let loanTerm = document.getElementById("loanTerm").value;

        if (price == "" || downPayment == "" || interestRate == "" || loanTerm == "") return;

        document.getElementById("result").innerHTML = `$${carLoanEstimator(price, downPayment, interestRate, loanTerm).toFixed(2).toLocaleString("en-US")}`;
    });
}


let validCars = [];

let allMakes = [];
let allYears = [];
let allFuelTypes = [];
let allCarTypes = [];
let allColors = [];
let allConditions = [];

function buildArrays() {
    allCars.forEach(car => {
        if (allMakes.indexOf(car.make) === -1) allMakes.push(car.make);
        if (allYears.indexOf(car.year) === -1) allYears.push(car.year);
        if (allFuelTypes.indexOf(car.fuelType) === -1) allFuelTypes.push(car.fuelType);
        if (allCarTypes.indexOf(car.carType) === -1) allCarTypes.push(car.carType);
        if (allColors.indexOf(car.color) === -1) allColors.push(car.color);
        if (allConditions.indexOf(car.condition) === -1) allConditions.push(car.condition);
    });
    allMakes.sort();
    allYears.sort((a, b) => a - b);
    allFuelTypes.sort();
    allCarTypes.sort();
    allColors.sort();
    allConditions.sort();
}

function buildFilters() {
    let dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        let menu = dropdown.querySelector(".menu");
        let tempArr;
        if (dropdown.classList.contains("makes")) tempArr = allMakes;
        else if (dropdown.classList.contains("years")) tempArr = allYears;
        else if (dropdown.classList.contains("fuel-types")) tempArr = allFuelTypes;
        else if (dropdown.classList.contains("car-types")) tempArr = allCarTypes;
        else if (dropdown.classList.contains("colors")) tempArr = allColors;
        else if (dropdown.classList.contains("conditions")) tempArr = allConditions;
        else if (dropdown.classList.contains("sort")) return;
        tempArr.forEach(element => {
            let line = document.createElement("li");
            line.appendChild(document.createTextNode(element));
            line.classList.add("filter-line");
            menu.appendChild(line);
        });
        if (tempArr.length >= 7) {
            menu.classList.add("scroll");
        }
    });
}

function buildBoard(carsArr) {
    carsArr.forEach(car => {
        buildCard(car);
    })
}

function clearBoard() {
    $(".card").remove();
    $(".car-card-col").remove();
}

function addNoCarMessage() {
    let mes = document.createElement("div");
    mes.classList.add("noCarMessage");
    mes.innerHTML = `<h2>No cars were found</h2>`;
    document.getElementById("cards").appendChild(mes);
}

function removeNoCarMessage() {
    if (document.querySelector(".noCarMessage") != null) {
        $(".noCarMessage").remove();
    }
}

function checkValidCars() {
    validCars = [];
    let make = document.querySelector(".makes").querySelector(".selected");
    let year = document.querySelector(".years").querySelector(".selected");
    let fuelType = document.querySelector(".fuel-types").querySelector(".selected");
    let carType = document.querySelector(".car-types").querySelector(".selected");
    let color = document.querySelector(".colors").querySelector(".selected");
    let condition = document.querySelector(".conditions").querySelector(".selected");

    if (make.innerHTML == "Make") make = null;
    if (year.innerHTML == "Year") year = null;
    if (fuelType.innerHTML == "Fuel Type") fuelType = null;
    if (carType.innerHTML == "Car (Body) Type") carType = null;
    if (color.innerHTML == "Color") color = null;
    if (condition.innerHTML == "Condition") condition = null;

    allCars.forEach(car => {
        if (make != null) {
            if (!make.innerHTML.includes(car.make)) return;
        }
        if (year != null) {
            if (!year.innerHTML.includes(car.year)) return;
        }
        if (fuelType != null) {
            if (!fuelType.innerHTML.includes(car.fuelType)) return;
        }
        if (carType != null) {
            if (!carType.innerHTML.includes(car.carType)) return;
        }
        if (color != null) {
            if (!color.innerHTML.includes(car.color)) return;
        }
        if (condition != null) {
            if (condition.innerHTML !== (car.condition)) return;
        }
        validCars.push(car);
    });

    if (validCars.length == 0) addNoCarMessage();
}

function applySort() {
    if (document.querySelector(".sort").querySelector(".active") != null) {
        let filter = document.querySelector(".sort").querySelector(".active").innerHTML;
        let tempArr = validCars;
        if (filter == "Price (ascending)") {
            tempArr.sort((a, b) => {
                if (a.price < b.price) return -1;
                else if (a.price > b.price) return 1;
                return 0;
            });
        }
        if (filter == "Price (descending)") {
            tempArr.sort((a, b) => {
                if (a.price < b.price) return 1;
                else if (a.price > b.price) return -1;
                return 0;
            });
        }
        if (filter == "Mileage (ascending)") {
            tempArr.sort((a, b) => {
                if (a.miles < b.miles) return -1;
                else if (a.miles > b.miles) return 1;
                return 0;
            });
        }
        if (filter == "Mileage (descending)") {
            tempArr.sort((a, b) => {
                if (a.miles < b.miles) return 1;
                else if (a.miles > b.miles) return -1;
                return 0;
            });
        }
        if (filter == "Year (ascending)") {
            tempArr.sort((a, b) => {
                if (a.year < b.year) return -1;
                else if (a.year > b.year) return 1;
                return 0;
            });
        }
        if (filter == "Year (descending)") {
            tempArr.sort((a, b) => {
                if (a.year < b.year) return 1;
                else if (a.year > b.year) return -1;
                return 0;
            });
        }
        validCars = tempArr;
    }
}

function refreshBoard() {
    if (document.querySelector(".makes") != null) {
        clearBoard();
        removeNoCarMessage();
        checkValidCars();
        applySort();
        buildBoard(validCars);
    }
    //Add href to each card and update buycar.html page when clicked
document.querySelectorAll(".car-card-col").forEach(card => {
    card.addEventListener("click", function(){
        selectedCar.carFullName = card.querySelector(".carFullName").innerHTML;
        selectedCar.carMiles = card.querySelector(".carMiles").innerHTML;
        selectedCar.carPrice = card.querySelector(".carPrice").innerHTML;
        selectedCar.carTrim = card.querySelector(".carTrim").innerHTML;
        selectedCar.carTransmission = card.querySelector(".carTransmission").innerHTML;
        selectedCar.carCylinders = card.querySelector(".carCylinders").innerHTML;
        selectedCar.carHorsepower = card.querySelector(".carHorsepower").innerHTML;
        selectedCar.carFuelType = card.querySelector(".carFuelType").innerHTML;
        selectedCar.carCityMPG = card.querySelector(".carCityMPG").innerHTML;
        selectedCar.carHwyMPG = card.querySelector(".carHwyMPG").innerHTML;
        selectedCar.carDriveType = card.querySelector(".carDriveType").innerHTML;
        selectedCar.carCarType = card.querySelector(".carCarType").innerHTML;
        selectedCar.carColor = card.querySelector(".carColor").innerHTML;
        selectedCar.carCondition = card.querySelector(".carCondition").innerHTML;
        selectedCar.img = card.querySelector(".card-img-top").src;
        sessionStorage.setItem("selectedCar", JSON.stringify(selectedCar));
        window.location = "buycar.html";
    });
});
}


//EXAMPLE CARD HTML
/*
  <div class="card">
    <div class="card-section">
      <img src="https://i.ytimg.com/vi/5XiHhOsTbaw/maxresdefault.jpg">
      <h3>2018 Audi Q7</h3>
      <h6>Miles: 48592
        <br>Price: $28,076
      </h6>
    </div>
    <div class="card-section">
      <p>Trim: 2.0T Premium Plus Sport Utility 4D
        <br>Transmission: Automatic
        <br>Cylinders: 4
        <br>HP: 252
        <br>Fuel Type: Gasoline
        <br>City MPG: 19
        <br>Highway MPG: 25
        <br>Drive Type: AWD
        <br>Car Type: SUV
        <br>Color: Black
        <br>Condition: Good
      </p>
    </div>
  </div>
*/

function init() {
    buildArrays();
    buildFilters();
    refreshBoard();
}


init();


//DROPDOWN FUNCTIONS
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".filter-line");
    const selected = dropdown.querySelector(".selected");

    select.addEventListener("click", () => {
        let tempBool = menu.classList.contains("menu-open");
        document.querySelectorAll(".menu").forEach(menus => {
            menus.classList.remove("menu-open");
        })
        document.querySelectorAll(".caret").forEach(caret => {
            caret.classList.remove("caret-rotate");
        })
        if (!tempBool) {
            caret.classList.add("caret-rotate");
            menu.classList.add("menu-open");
        } else {
            caret.classList.remove("caret-rotate");
            menu.classList.remove("menu-open");
        }
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            if (!option.classList.contains("active")) {
                if (!dropdown.classList.contains("sort")) {
                    let label = "";
                    if (dropdown.querySelectorAll(".active") != null) {
                        if (dropdown.querySelectorAll(".active").length >= 1) {
                            let tempArr = selected.innerText.split(", ");
                            tempArr.push(option.innerText);
                            if (typeof (tempArr[0]) == "number") tempArr.sort((a, b) => a - b);
                            else tempArr.sort();
                            for (let x = 0; x < tempArr.length; x++) {
                                if (x == 0) label += tempArr[x];
                                else label += `, ${tempArr[x]}`;
                            }
                        } else {
                            label = option.innerText;
                        }
                    }
                    selected.innerText = label;
                    caret.classList.remove("caret-rotate");
                    menu.classList.remove("menu-open");
                    option.classList.add("active");
                    refreshBoard();
                } else {
                    selected.innerText = option.innerText;
                    caret.classList.remove("caret-rotate");
                    menu.classList.remove("menu-open");
                    options.forEach(option => {
                        option.classList.remove("active");
                    });
                    option.classList.add("active");
                    refreshBoard();
                }
            } else {
                if (dropdown.querySelectorAll(".active").length == 1) {
                    let defaultText = "";
                    if (dropdown.classList.contains("makes")) defaultText = "Make";
                    else if (dropdown.classList.contains("years")) defaultText = "Year";
                    else if (dropdown.classList.contains("fuel-types")) defaultText = "Fuel Type";
                    else if (dropdown.classList.contains("car-types")) defaultText = "Car (Body) Type";
                    else if (dropdown.classList.contains("colors")) defaultText = "Color";
                    else if (dropdown.classList.contains("conditions")) defaultText = "Condition";
                    else if (dropdown.classList.contains("sort")) defaultText = "Sort By";

                    selected.innerText = defaultText;
                    caret.classList.remove("caret-rotate");
                    menu.classList.remove("menu-open");
                    options.forEach(option => {
                        option.classList.remove("active");
                    });
                    refreshBoard();
                } else {
                    let label = "";
                    let tempArr = selected.innerText.split(", ");
                    tempArr.splice(tempArr.indexOf(option.innerText), 1);
                    if (typeof (tempArr[0]) == "number") tempArr.sort((a, b) => a - b);
                    else tempArr.sort();
                    for (let x = 0; x < tempArr.length; x++) {
                        if (x == 0) label += tempArr[x];
                        else label += `, ${tempArr[x]}`;
                    }
                    selected.innerText = label;
                    caret.classList.remove("caret-rotate");
                    menu.classList.remove("menu-open");
                    option.classList.remove("active");
                    refreshBoard();
                }
            }
        });
    });
});

window.onclick = function (event) {
    if (!event.target.matches(".select") && !event.target.matches(".filter-line")) {
        document.querySelectorAll(".menu").forEach(menus => {
            menus.classList.remove("menu-open");
        });
        document.querySelectorAll(".caret").forEach(caret => {
            caret.classList.remove("caret-rotate");
        })
    }
}


if (document.querySelector(".clear") != null) {
    document.querySelector(".clear").addEventListener("click", function () {
        let makes = document.querySelector(".makes")
        makes.querySelector(".selected").innerHTML = "Make";
        if (makes.querySelector(".active")) makes.querySelectorAll(".active").forEach(a => {
            a.classList.remove("active");
        });

        let years = document.querySelector(".years")
        years.querySelector(".selected").innerHTML = "Year";
        if (years.querySelector(".active")) years.querySelectorAll(".active").forEach(a => {
            a.classList.remove("active");
        });

        let fuelTypes = document.querySelector(".fuel-types")
        fuelTypes.querySelector(".selected").innerHTML = "Fuel Type";
        if (fuelTypes.querySelector(".active")) fuelTypes.querySelectorAll(".active").forEach(a => {
            a.classList.remove("active");
        });

        let carTypes = document.querySelector(".car-types")
        carTypes.querySelector(".selected").innerHTML = "Car (Body) Type";
        if (carTypes.querySelector(".active")) carTypes.querySelectorAll(".active").forEach(a => {
            a.classList.remove("active");
        });

        let colors = document.querySelector(".colors")
        colors.querySelector(".selected").innerHTML = "Color";
        if (colors.querySelector(".active")) colors.querySelectorAll(".active").forEach(a => {
            a.classList.remove("active");
        });

        let conditions = document.querySelector(".conditions")
        conditions.querySelector(".selected").innerHTML = "Condition";
        if (conditions.querySelector(".active")) conditions.querySelectorAll(".active").forEach(a => {
            a.classList.remove("active");
        });

        refreshBoard();
    });
}





window.onload = function(){
    if(document.querySelector(".outerCarDiv") != null){
        selectedCar = JSON.parse(sessionStorage.selectedCar);
        document.querySelector(".carFullName").innerHTML = selectedCar.carFullName;
        document.querySelector(".carMiles").innerHTML = selectedCar.carMiles;
        document.querySelector(".carPrice").innerHTML = selectedCar.carPrice;
        document.querySelector(".carTrim").innerHTML = selectedCar.carTrim;
        document.querySelector(".carTransmission").innerHTML = selectedCar.carTransmission;
        document.querySelector(".carCylinders").innerHTML = selectedCar.carCylinders;
        document.querySelector(".carHorsepower").innerHTML = selectedCar.carHorsepower;
        document.querySelector(".carFuelType").innerHTML = selectedCar.carFuelType;
        document.querySelector(".carCityMPG").innerHTML = selectedCar.carCityMPG;
        document.querySelector(".carHwyMPG").innerHTML = selectedCar.carHwyMPG;
        document.querySelector(".carDriveType").innerHTML = selectedCar.carDriveType;
        document.querySelector(".carCarType").innerHTML = selectedCar.carCarType;
        document.querySelector(".carColor").innerHTML = selectedCar.carColor;
        document.querySelector(".carCondition").innerHTML = selectedCar.carCondition;
        document.querySelector(".img-fluid").src = selectedCar.img;
    }
    updateColorblind();

    if(window.location != "sell.html"){
        tradeSelected = false;
        sessionStorage.setItem("trade", tradeSelected);
    }
}




let colorblindSetting = 0;

if(document.querySelector(".none") != null){
    document.querySelector(".none").addEventListener("click", function(){
        colorblindSetting = 0;
        sessionStorage.setItem("colorblind", colorblindSetting);
        updateColorblind();
    })
}

if(document.querySelector(".prot") != null){
    document.querySelector(".prot").addEventListener("click", function(){
        colorblindSetting = 1;
        sessionStorage.setItem("colorblind", colorblindSetting);
        updateColorblind();
    })
}

if(document.querySelector(".deut") != null){
    document.querySelector(".deut").addEventListener("click", function(){
        colorblindSetting = 2;
        sessionStorage.setItem("colorblind", colorblindSetting);
        updateColorblind();
    })
}

if(document.querySelector(".trit") != null){
    document.querySelector(".trit").addEventListener("click", function(){
        colorblindSetting = 3;
        sessionStorage.setItem("colorblind", colorblindSetting);
        updateColorblind();
    })
}


function applyNormal(){
    let newPrimary = "#e3311d";
    document.querySelector(":root").style.setProperty("--primary-color", `${newPrimary}`);
    document.querySelector(".headerLogo").src = "../images/logos/logosquareblack.png";
}

function applyProtanopia(){
    let newPrimary = "#7a671b";
    document.querySelector(":root").style.setProperty("--primary-color", `${newPrimary}`);
    document.querySelector(".headerLogo").src = "../images/logos/logosquareblack_protanopia.png";
}

function applyDeuteranopia(){
    let newPrimary = "#aa9402";
    document.querySelector(":root").style.setProperty("--primary-color", `${newPrimary}`);
    document.querySelector(".headerLogo").src = "../images/logos/logosquareblack_deuteranopia.png";
}

function applyTritanopia(){
    let newPrimary = "#ff005c";
    document.querySelector(":root").style.setProperty("--primary-color", `${newPrimary}`);
    document.querySelector(".headerLogo").src = "../images/logos/logosquareblack_tritanopia.png";
}


function updateColorblind(){
    colorblindSetting = sessionStorage.getItem("colorblind");
    if(colorblindSetting == 0) applyNormal();
    else if(colorblindSetting == 1) applyProtanopia();
    else if(colorblindSetting == 2) applyDeuteranopia();
    else if(colorblindSetting == 3) applyTritanopia();
}


//HEADER SCROLLING
document.addEventListener("scroll", function(){
    let wrapper1 = document.querySelector(".wrapper1");
    if(window.scrollY > 150){
        wrapper1.classList.add("scrolled");
    }
    else{
        wrapper1.classList.remove("scrolled");
    }

    //filter scrolling
    if(document.getElementById("filter") != null){
        let fil = document.getElementById("filter");
        let sea = document.querySelector(".searchContainer");
        let emp = document.querySelector(".searchEmpty");
        if(window.scrollY > 150 && window.scrollY < 4050){
            fil.classList.add("filterScrolled");
            sea.classList.add("searchScrolled");
            emp.classList.add("emptyHeight");
        }
        else{
            fil.classList.remove("filterScrolled");
            sea.classList.remove("searchScrolled");
            emp.classList.remove("emptyHeight");
        }
    }
})




if(document.querySelector(".tradeBtn") != null){
    document.querySelector(".tradeBtn").addEventListener("click", function(){
    tradeSelected = true;
    sessionStorage.setItem("trade", tradeSelected);
    window.location = "sell.html";
});
}

window.addEventListener("DOMContentLoaded", function(){
    tradeSelected = sessionStorage.getItem("trade") == "true";
    if(document.getElementById("pills-sell") != null){
        if(tradeSelected){
            switchToTrade();
        }
    }
});

function switchToTrade(){
    document.getElementById("pills-sell").classList.remove("active");
        document.getElementById("pills-sell").classList.remove("show");
        document.getElementById("pills-home-tab").classList.remove("active");
        document.getElementById("pills-trade").classList.add("active");
        document.getElementById("pills-trade").classList.add("show");
        document.getElementById("pills-profile-tab").classList.add("active");
}





//SEARCH FUNCTIONALITY
let descStrings = [];
let newAllCars = [];

allCars.forEach(car => {
    let currString = "";
    currString += car.make.toLowerCase();
    currString += " " + car.model.toLowerCase();
    currString += " " + car.year;
    currString += " " + car.fuelType.toLowerCase();
    currString += " " + car.driveType.toLowerCase();
    currString += " " + car.carType.toLowerCase();
    currString += " " + car.color.toLowerCase();
    descStrings.push(currString);
});

for(let i = 0; i < allCars.length; i++){
    let currCar = allCars[i];
    currCar.string = descStrings[i];
    newAllCars.push(currCar);
}


function updateSearch(){
    if(document.querySelector(".searchBar").value == ""){
        //reset valid cars to what filters are currently applied
        refreshBoard();
    }
    else{
        //take current valid cars array and only show cars that are valid from the search
        let search = document.querySelector(".searchBar").value;
        let searchItems = search.split(" ");
        console.log(searchItems);
        let tempValidCars = [];
        allCars.forEach(car => {
            let isValidCar = false;
            let carItems = car.string.replace(/\s/g, '');
            searchItems.forEach(item => {
                if(carItems.includes(item)) isValidCar = true;
            });
            if(isValidCar){
                tempValidCars.push(car);
            }
        });
        
        //update tempValidCars to account for filters
        validCars = [];
        let make = document.querySelector(".makes").querySelector(".selected");
        let year = document.querySelector(".years").querySelector(".selected");
        let fuelType = document.querySelector(".fuel-types").querySelector(".selected");
        let carType = document.querySelector(".car-types").querySelector(".selected");
        let color = document.querySelector(".colors").querySelector(".selected");
        let condition = document.querySelector(".conditions").querySelector(".selected");

        if (make.innerHTML == "Make") make = null;
        if (year.innerHTML == "Year") year = null;
        if (fuelType.innerHTML == "Fuel Type") fuelType = null;
        if (carType.innerHTML == "Car (Body) Type") carType = null;
        if (color.innerHTML == "Color") color = null;
        if (condition.innerHTML == "Condition") condition = null;

        tempValidCars.forEach(car => {
            if (make != null) {
                if (!make.innerHTML.includes(car.make)) return;
            }
            if (year != null) {
                if (!year.innerHTML.includes(car.year)) return;
            }
            if (fuelType != null) {
                if (!fuelType.innerHTML.includes(car.fuelType)) return;
            }
            if (carType != null) {
                if (!carType.innerHTML.includes(car.carType)) return;
            }
            if (color != null) {
                if (!color.innerHTML.includes(car.color)) return;
            }
            if (condition != null) {
                if (condition.innerHTML !== (car.condition)) return;
            }
            validCars.push(car);
        });

        if (validCars.length == 0) addNoCarMessage();


        clearBoard();
        removeNoCarMessage();
        applySort();
        buildBoard(validCars);

        document.querySelectorAll(".car-card-col").forEach(card => {
            card.addEventListener("click", function(){
                selectedCar.carFullName = card.querySelector(".carFullName").innerHTML;
                selectedCar.carMiles = card.querySelector(".carMiles").innerHTML;
                selectedCar.carPrice = card.querySelector(".carPrice").innerHTML;
                selectedCar.carTrim = card.querySelector(".carTrim").innerHTML;
                selectedCar.carTransmission = card.querySelector(".carTransmission").innerHTML;
                selectedCar.carCylinders = card.querySelector(".carCylinders").innerHTML;
                selectedCar.carHorsepower = card.querySelector(".carHorsepower").innerHTML;
                selectedCar.carFuelType = card.querySelector(".carFuelType").innerHTML;
                selectedCar.carCityMPG = card.querySelector(".carCityMPG").innerHTML;
                selectedCar.carHwyMPG = card.querySelector(".carHwyMPG").innerHTML;
                selectedCar.carDriveType = card.querySelector(".carDriveType").innerHTML;
                selectedCar.carCarType = card.querySelector(".carCarType").innerHTML;
                selectedCar.carColor = card.querySelector(".carColor").innerHTML;
                selectedCar.carCondition = card.querySelector(".carCondition").innerHTML;
                selectedCar.img = card.querySelector(".card-img-top").src;
                sessionStorage.setItem("selectedCar", JSON.stringify(selectedCar));
                window.location = "buycar.html";
            });
        });
    }
}


if(document.querySelector(".searchBar") != null){
    document.querySelector(".searchBar").addEventListener("input", function(){
        console.log('fa')
        updateSearch();
    });
}