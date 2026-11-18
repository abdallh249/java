
import { vehicles } from "./data.js";


export function getVehiclesByBrand(brand) {
    return vehicles.filter(vehicle =>
        vehicle.brand.toLowerCase() === brand.toLowerCase()
    );
}


export function getVehicleById(id) {
    return vehicles.find(vehicle => vehicle.id === id);
}


export function getAvailableVehicles() {
    return vehicles.filter(vehicle =>
        vehicle.status === "Available"
    );
}


export function areAllPricesValid() {
    return vehicles.every(vehicle =>
        Number.isFinite(vehicle.price) && vehicle.price > 0
    );
}


export function isAnyVehicleAvailable() {
    return vehicles.some(vehicle =>
        vehicle.status === "Available"
    );
}


export function getAveragePrice() {
    const total = vehicles.reduce(
        (sum, vehicle) => sum + vehicle.price, 0
    );

    return total / vehicles.length;
}


export function getTotalInventoryValue() {
    return vehicles.reduce(
        (total, vehicle) => total + vehicle.price, 0
    );
}


export function getBrandsAndModels() {
    return vehicles.map(({ brand, model }) => ({
        brand,
        model
    }));
}



export function getVehiclesByPriceRange(min, max) {
    return vehicles.filter(vehicle =>
        vehicle.price >= min && vehicle.price <= max
    );
}


export function getVehiclesByYear(year) {
    return vehicles.filter(vehicle =>
        vehicle.year === year
    );
}


export function getMostExpensiveVehicle() {
    return vehicles.reduce((mostExpensive, current) =>
        current.price > mostExpensive.price
            ? current
            : mostExpensive
    );
}

export function getCheapestAvailableVehicle() {
    const available = getAvailableVehicles();

    if (available.length === 0) {
        return null;
    }

    return available.reduce((cheapest, current) =>
        current.price < cheapest.price
            ? current
            : cheapest
    );
}


export function getInventoryStatistics() {

    const totalVehicles = vehicles.length;

    const availableVehicles = vehicles.filter(
        vehicle => vehicle.status === "Available"
    ).length;

    const reservedVehicles = vehicles.filter(
        vehicle => vehicle.status === "Reserved"
    ).length;

    const soldVehicles = vehicles.filter(
        vehicle => vehicle.status === "Sold"
    ).length;

    const averagePrice = getAveragePrice();

    const totalValue = getTotalInventoryValue();

    return {
        totalVehicles,
        availableVehicles,
        reservedVehicles,
        soldVehicles,
        averagePrice,
        totalValue
    };
}
