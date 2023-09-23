//var cars = [{"CommonName":"Ford","CreatedOn":"2015-03-23","DateAvailableToPublic":"2015-01-01","Make":"FORD","ManufacturerName":"FORD MOTOR COMPANY","ParentCompanyName":"","URL":"http:\/\/www.ford.com\/","UpdatedOn":null,"VehicleType":"Incomplete Vehicle"}];


// var cars = [{"MakeId":449,"MakeName":"MERCEDES-BENZ","VehicleTypeId":2,"VehicleTypeName":"Passenger Car"},{"MakeId":449,"MakeName":"MERCEDES-BENZ","VehicleTypeId":3,"VehicleTypeName":"Truck"},{"MakeId":449,"MakeName":"MERCEDES-BENZ","VehicleTypeId":5,"VehicleTypeName":"Bus"},{"MakeId":449,"MakeName":"MERCEDES-BENZ","VehicleTypeId":7,"VehicleTypeName":"Multipurpose Passenger Vehicle (MPV)"},{"MakeId":449,"MakeName":"MERCEDES-BENZ","VehicleTypeId":10,"VehicleTypeName":"Incomplete Vehicle"},{"MakeId":465,"MakeName":"MERCURY","VehicleTypeId":2,"VehicleTypeName":"Passenger Car"},{"MakeId":465,"MakeName":"MERCURY","VehicleTypeId":3,"VehicleTypeName":"Truck"},{"MakeId":465,"MakeName":"MERCURY","VehicleTypeId":7,"VehicleTypeName":"Multipurpose Passenger Vehicle (MPV)"},{"MakeId":465,"MakeName":"MERCURY","VehicleTypeId":10,"VehicleTypeName":"Incomplete Vehicle"},{"MakeId":928,"MakeName":"FABRICACION Y COMERCIALIZACION PENA","VehicleTypeId":6,"VehicleTypeName":"Trailer"},{"MakeId":945,"MakeName":"CAPSTONE COMMERCE","VehicleTypeId":6,"VehicleTypeName":"Trailer"},{"MakeId":1820,"MakeName":"COMMERCIAL TRAILER","VehicleTypeId":6,"VehicleTypeName":"Trailer"},{"MakeId":2350,"MakeName":"MERCH MOTORCYCLE CO.","VehicleTypeId":1,"VehicleTypeName":"Motorcycle"},{"MakeId":2351,"MakeName":"MERCHANT'S TRAILERS AND GRILLS","VehicleTypeId":6,"VehicleTypeName":"Trailer"},{"MakeId":4977,"MakeName":"STRICK COMMERCIAL TRAILER","VehicleTypeId":6,"VehicleTypeName":"Trailer"},{"MakeId":5416,"MakeName":"CA. COMMERCIAL TRAILER","VehicleTypeId":6,"VehicleTypeName":"Trailer"},{"MakeId":5804,"MakeName":"COMMERCIAL STRUCTURES","VehicleTypeId":6,"VehicleTypeName":"Trailer"},{"MakeId":6983,"MakeName":"J & T MERCHANDISE INC","VehicleTypeId":6,"VehicleTypeName":"Trailer"},{"MakeId":7008,"MakeName":"COMMERCIAL MOBILE SYSTEMS","VehicleTypeId":6,"VehicleTypeName":"Trailer"},{"MakeId":8306,"MakeName":"COMMERCIAL MANUFACTURING & INDUSTRIAL, CO.","VehicleTypeId":6,"VehicleTypeName":"Trailer"},{"MakeId":8959,"MakeName":"BIVOUAC COMMERCIAL VEHICLES","VehicleTypeId":6,"VehicleTypeName":"Trailer"},{"MakeId":9539,"MakeName":"COMMERCIAL VEHICLES CV","VehicleTypeId":6,"VehicleTypeName":"Trailer"}];
// console.log(cars[1]);

import fetch from 'node-fetch';
const apiURL = 'https://swapi.dev/api/people/2'
fetch(apiURL)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        console.log(`all data receive was successful`);
    });
console.log('Getting data');