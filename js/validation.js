function Validation () {
    this.checkValid = function (value, tagWarn) {
        var numbReg = /^[0-9.,\b]+$/;
        if (value.trim() === '' || !value.trim().match(numbReg)) {
            document.querySelector(tagWarn).innerHTML = 'Hãy điền thông tin với số không âm';
            return false;
        } else {
            document.querySelector(tagWarn).innerHTML = '';
            return true;
        }
    }
}