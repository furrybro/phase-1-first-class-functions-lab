// Code your solution in this file!
// const returnFirstTwoDrivers = (drivers) => {
//     return [drivers[0], drivers[1]]
// };

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
}

const selectingDrivers = []
selectingDrivers[0] = returnFirstTwoDrivers;
selectingDrivers[1] = returnLastTwoDrivers;

function createFareMultiplier(int) {
    return (fare) => fare * int;
 }

 const fareDoubler = createFareMultiplier(2);

 const fareTripler = createFareMultiplier(3);

 function selectDifferentDrivers(drivers, driverSelectingFunction) {
     return driverSelectingFunction(drivers);
 }