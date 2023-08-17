function findAddress(obj) {

    let streetNum = obj.street !== undefined ? obj.street : "__";
    let houseArea = obj.house !== undefined ? obj.house : "__";
    let societyTitle = obj.society !== undefined ? obj.society : "__";

    const addressStr = streetNum + "," + houseArea + "," + societyTitle;

    return addressStr;

}
