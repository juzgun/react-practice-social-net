export const required = (value) => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLenghtCreator = (maxLength) => (value) => {
    if (value && value.lenght > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}