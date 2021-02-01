function intRange(min, max) {
    return min + Math.floor((Math.random() * ((max - min) + 1)));
}

export default intRange;