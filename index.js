const driversNames = ["Bobby", 'Sammy', 'Sally', 'Annette', "Sarah", 'bobby'];

function findMatching(driversNames, driverName) {
    return driversNames.filter ( (driver) => {
        return driver.toLowerCase() === driverName.toLowerCase();
    })
}

function fuzzyMatch(arr, string) {
    let newArr = [];
    if (arr.map((item) => item.substring(0, 2) === string)) {
        return (newArr = arr.filter((item) => item.substring(0, 2) === string));
    }
}

function matchName (arr1, string) {
    const match = arr1.filter(obj => {
        if(obj.name === string) {
            return obj;
        }
    })
    return match;
}