
export const formatDate = () => {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
export const checkInputsValidation = (name: string, email: string, phone: string) => {
    if (isNameValid(name) == 'has-error') {
        alert('Check name input')
        return;
    }
    if (isEmailValid(email) == 'has-error') {
        alert('Check email input')
        return;
    }
    if (isPhoneValid(phone) == 'has-error') {
        alert('Check phone input')
        return;
    }
    return true;
}
export const isNameValid = (name: string) => {
    let final = "";
    /^[a-z]+$/i.test(name)
        ? (final = "has-success")
        : (final = "has-error");
    return final;
}

export const isEmailValid = (email: string) => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let final = ''
    reg.test(email)
        ? final = "has-success"
        : final = "has-error";
    return final;
}

export const isPhoneValid = (phone: string) => {
    return /^\d+$/.test(phone) ? "has-success" : "has-error"
}
