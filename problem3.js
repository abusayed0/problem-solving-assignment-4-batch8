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
        else if(firstElement > secondElement){
            return [firstElement, secondElement];
        }
        else{
            return [secondElement, firstElement];
        }
    }
}
