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
