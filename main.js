
import { vehicles } from "./data.js";

import {
    getVehiclesByBrand,
    getVehicleById,
    getAvailableVehicles,
    areAllPricesValid,
    isAnyVehicleAvailable,
    getAveragePrice,
    getTotalInventoryValue,
    getBrandsAndModels,
    getVehiclesByPriceRange,
    getVehiclesByYear,
    getMostExpensiveVehicle,
    getCheapestAvailableVehicle,
    getInventoryStatistics
} from "./vehicleUtils.js";


const inventoryName = "Vehicle Inventory System";
let totalVehicles = vehicles.length;

console.log(`Welcome to ${inventoryName}`);
console.log(`Total Vehicles: ${totalVehicles}`);


const { brand, model, price } = vehicles[0];

console.log(
    `First Vehicle: ${brand} ${model} - ${price} NIS`
);


const newVehicle = {
    ...vehicles[0],
    id: 16,
    model: "Tiggo 9",
    price: 150000
};

console.log("New Vehicle:", newVehicle);


function displayVehicles(...vehicleList) {
    console.log("Vehicle List:", vehicleList);
}

displayVehicles(...vehicles.slice(0, 3));



console.log("\n--- PART 2 ---");


console.log("Chery Vehicles:");
console.log(getVehiclesByBrand("Chery"));


console.log("Vehicle with ID 5:");
console.log(getVehicleById(5));


console.log("Available Vehicles:");
console.log(getAvailableVehicles());


console.log(
    "All Prices Valid:",
    areAllPricesValid()
);


console.log(
    "Any Vehicle Available:",
    isAnyVehicleAvailable()
);


console.log(
    `Average Price: ${getAveragePrice().toLocaleString()} NIS`
);


console.log(
    `Total Inventory Value: ${getTotalInventoryValue().toLocaleString()} NIS`
);


console.log("Brands and Models:");
console.log(getBrandsAndModels());



console.log("\n--- PART 3 ---");


console.log("Vehicles between 70000 and 100000 NIS:");
console.log(getVehiclesByPriceRange(70000, 100000));


console.log("Vehicles from 2024:");
console.log(getVehiclesByYear(2024));


console.log("JAECOO Vehicles:");
console.log(getVehiclesByBrand("JAECOO"));


console.log("Most Expensive Vehicle:");
console.log(getMostExpensiveVehicle());


console.log("Cheapest Available Vehicle:");
console.log(getCheapestAvailableVehicle());


console.log("Inventory Statistics:");

const statistics = getInventoryStatistics();

console.table(statistics);
