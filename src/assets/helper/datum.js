function Datum(date) {
    const result = new Date(date);
    return result.toDateString();
}

export default Datum;