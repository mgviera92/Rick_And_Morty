const validation = (userData) => {
    let errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        errors.email = 'El email ingresado no es correcto';
    }
    if (!userData.email) {
        errors.email = 'El nombre de usuario no puede estar vacío'
    }
    if (userData.email.length > 35) {
        errors.email = 'El nombre de usuario no puede tener más de 35 caracteres'
    }

    if (!/\d/.test(userData.password)) {
        errors.password = 'La contraseña debe tener al menos un número'
    }
    if (userData.password.length > 10 || userData.password.length < 6) {
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
    }
    return errors;
}

export default validation;