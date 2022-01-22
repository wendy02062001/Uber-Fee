function Validation () {
    this.checkValid = function (value, tagWarn) {
        var numbReg = /^[0-9]+$/;
        if (value.trim() === '' || !value.match(numbReg)) {
            document.querySelector(tagWarn).innerHTML = 'Hãy điền thông tin với số không âm';
            document.querySelector(tagWarn).focus();
            return false;
        } else {
            document.querySelector(tagWarn).innerHTML = '';
            return true;
        }
    }
}