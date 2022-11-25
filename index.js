// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(n){
    return(function(x){
        return n*x
    })
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectingDrivers(arrayOfDrivers,callback){
    return callback(arrayOfDrivers)
}