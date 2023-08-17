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
