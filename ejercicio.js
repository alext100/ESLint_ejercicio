function kebabCaseToCamelCase(string) {
    const regex = /[A-Z]/g;

    if (string === "") {
        return "You must provide some text";
    }

    if (string.includes("_")) {
        return "The text contains underscores";
    }

    if (string.match(regex)) {
        return "The text contains capital letters";
    }

    const strToArray = string.split("-");

    const stringInCamelCase = strToArray.map(item => item[0].toUpperCase() + item.slice(1));

    return stringInCamelCase.join("");
}