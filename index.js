// Code your solution here
function findMatching(drivers, driverName) {
let findIt = drivers.filter(driver => driver.toLowerCase() === driverName.toLowerCase() )
    if (findIt){
        return findIt
    }

}

function fuzzyMatch(drivers, letter){
    return drivers.filter((driver) => driver.startsWith(letter))
}

function matchName(drivers, driverName){
return drivers.filter(driver => driver.name.toLowerCase() === driverName.toLowerCase())
}