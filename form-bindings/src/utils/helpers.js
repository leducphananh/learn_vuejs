export const validate = (objectValues, rules) => {
    const error = {};

    rules.forEach((rule) => {
        const { fieldName, test } = rule;
        const errorMessage = test(objectValues[fieldName]);
        if (errorMessage) {
            error[fieldName] = errorMessage;
        }
    });

    return error;
};

const isRequired = (fieldName, message) => {
    return {
        fieldName,
        test: (value) =>
            value.trim() !== "" ? "" : message || "Vui lòng nhập trường này",
    };
};

const isEmail = (fieldName, message) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return {
        fieldName,
        test: (value) =>
            regex.test(value) ? "" : message || "Vui lòng nhập đúng email",
    };
};

const isDate = (fieldName, message) => {
    const regex = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
    return {
        fieldName,
        test: (value) =>
            regex.test(value)
                ? ""
                : message || "Vui lòng nhập đúng định dạng ngày",
    };
};

const isPhoneNumber = (fieldName, message) => {
    const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return {
        fieldName,
        test: (value) =>
            regex.test(value)
                ? ""
                : message || "Vui lòng nhập đúng số điện thoại",
    };
};

const minLength = (fieldName, min, message) => {
    return {
        fieldName,
        test: (value) =>
            value.trim().length >= min
                ? ""
                : message || `Vui lòng nhập tối thiểu ${min} kí tự`,
    };
};

export const Rules = {
    isRequired,
    isEmail,
    isDate,
    isPhoneNumber,
    minLength,
};

export const defaultUser = {
    id: "",
    name: "",
    gender: "Male",
    dob: "",
    phone: "",
    email: "",
    address: "",
    description: "",
    courses: [],
};
