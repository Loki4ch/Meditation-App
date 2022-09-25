export const validateForm = (formValues) => {
    let isValid = true;
    const errors = {};
    if (!formValues.name) {
        isValid = false;
        errors.login = 'Name is mandatory';
    } else if (formValues.name.length > 43) {
        isValid = false;
        errors.login = 'Name is too long';
    }
    if (!isValid) return errors;
}