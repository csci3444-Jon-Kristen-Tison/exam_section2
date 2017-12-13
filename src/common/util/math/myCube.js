module.exports = {
    toNumber: function(inpNumber) {
        var num = NaN; // Not A Number

        if (typeof inpNumber === "number") {
            num = inpNumber;
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            num = Number(inpNumber);
        }

        return num;
    },

    toCube: function(inpNumber) {
        var num = NaN;

        if (typeof inpNumber === "number") {
            num = inpNumber;
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            num = Number(inpNumber);
        }

        return (num * num * num);
    }
}