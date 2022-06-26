// Code your solution here
function findMatching(driverNames, string) {
    return driverNames.filter(function (name) {
        return (name.toLowerCase() === string.toLowerCase());
    });
}

function fuzzyMatch(driverNames, string) {
    return driverNames.filter(function (name) {
        return (name.slice(0,string.length) === string);
    });
}

function matchName(driver, string) {
    return driver.filter(function (element) {
        return (element.name === string);
    });
}