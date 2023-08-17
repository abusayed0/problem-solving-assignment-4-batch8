function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please input a vaild number."
    }
    else {
        const result = Math.pow(number, 3);
        return result;
    }
}
