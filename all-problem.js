function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please input a vaild number."
    }
    else {
        const result = Math.pow(number, 3);
        return result;
    }
}

function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Only string type input allowed.";
    }
    else {
        const isString1ContainString2 = string1.includes(string2);
        if (isString1ContainString2 === true) {
            return true;
        }
        else {
            return false;
        }
    }
}

function sortMaker(arr) {
    const firstElement = arr[0];
    const secondElement = arr[1];
    if (firstElement < 0 || secondElement < 0) {
        return "Invalid Input";
    }
    else {
        if (firstElement === secondElement) {
            return "equal";
        }
        else if (firstElement > secondElement) {
            return [firstElement, secondElement];
        }
        else {
            return [secondElement, firstElement];
        }
    }
}

function findAddress(obj) {

    let streetNum = obj.street !== undefined ? obj.street : "__";
    let houseArea = obj.house !== undefined ? obj.house : "__";
    let societyTitle = obj.society !== undefined ? obj.society : "__";

    const addressStr = streetNum + "," + houseArea + "," + societyTitle;

    return addressStr;

}

function canPay(changeArray, totalDue) {

    if (changeArray.length < 1) {
        return "you have no money";
    }
    else {
        let totalTakaHave = 0;
        for (let i = 0; i < changeArray.length; i++) {
            const currentElement = changeArray[i];
            totalTakaHave += currentElement;
        }
        if (totalTakaHave >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }
}

