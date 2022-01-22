var uber = {
    carType: '',
    distance: '',
    waitTime: '',
    distancePrice: 0,
    waitPriceUnit: 0,
    waitTimePrice: 0,
    totalAmt: 0,

    // checkValid: function (dInput, tInput) {
    //     if (this.distance < 0 || this.waitTimewaitTime < 0 || dInput.value.trim() === "" || tInput.value.trim() === ""
    //         || dInput.value.trim().match(/^[0-9.,\b]+$/) == null || tInput.value.trim().match(/^[0-9.,\b]+$/) == null) {
    //         alert('Hãy điền các thông tin với giá trị dương');
    //         if (tInput.value.trim() === "" || this.waitTime < 0 || tInput.value.trim().match(/^[0-9.,\b]+$/) == null) tInput.focus();
    //         else dInput.focus();
    //         return false;
    //     } return true;

    // }
}

var validate = new Validation();
var valid = true;

document.getElementById('tinhTien').onclick = function () {
    uber.carType = document.querySelector('input[name="selector"]:checked').id;
    uber.distance = parseFloat(document.getElementById('soKM').value.trim().replace(",", "."));
    uber.waitTime = parseFloat(document.getElementById('thoiGianCho').value.trim().replace(",", "."));

    var distanceInput = document.getElementById('soKM');
    var waitTimeInput = document.getElementById('thoiGianCho');

    // var isValid = uber.checkValid(distanceInput, waitTimeInput);

valid &= validate.checkValid(distanceInput.value, '#kmWarn');

console.log(distanceInput.value);

    if (isValid) {
        if (uber.carType === 'uberX') {
            if (uber.distance < 1) {
                uber.distancePrice = 8000;
            } else if (uber.distance <= 20) {
                uber.distancePrice = 8000 + 12000 * (uber.distance - 1.0);
            } else {
                uber.distancePrice = 8000 + 12000 * 19 + 10000 * (uber.distance - 20);
            }

            uber.waitPriceUnit = 2000;
            uber.totalAmt = uber.distancePrice + uber.waitTime * 2000;

        } else if (uber.carType === 'uberSUV') {
            if (uber.distance < 1) {
                uber.distancePrice = 9000;
            } else if (uber.distance <= 20) {
                uber.distancePrice = 9000 + 14000 * (uber.distance - 1.0);
            } else {
                uber.distancePrice = 9000 + 14000 * 19 + 12000 * (uber.distance - 20);
            }

            uber.waitPriceUnit = 3000;
            uber.totalAmt = uber.distancePrice + uber.waitTime * 3000;
        } else {
            if (uber.distance < 1) {
                uber.distancePrice = 10000;
            } else if (uber.distance <= 20) {
                uber.distancePrice = 10000 + 16000 * (uber.distance - 1.0);
            } else {
                uber.distancePrice = 10000 + 16000 * 19 + 14000 * (uber.distance - 20);
            }

            uber.waitPriceUnit = 4000;
            uber.totalAmt = uber.distancePrice + uber.waitTime * 4000;
        }

        uber.waitTimePrice = uber.waitTime * uber.waitPriceUnit;
        document.getElementById('xuatTien').innerHTML = Math.round(uber.totalAmt);
        document.getElementById('divThanhTien').style.display = 'block';

    } else document.getElementById('divThanhTien').style.display = 'none';
}

document.getElementById('inHoaDon').onclick = function () {
    if (document.getElementById('xuatTien').innerHTML.trim() === '') alert('Vui lòng bấm nút tính tiền trước');
    else {
        document.getElementById('billKM').innerHTML = uber.distance + ' km';
        document.getElementById('billKMAmt').innerHTML = uber.distancePrice + ' VNĐ';

        document.getElementById('billTime').innerHTML = uber.waitTime + ' phút';
        document.getElementById('billTimeOne').innerHTML = uber.waitPriceUnit + '/phút';
        document.getElementById('billTimeAmout').innerHTML = uber.waitTimePrice + ' VNĐ';
        document.getElementById('billTotalAmt').innerHTML = uber.totalAmt.toFixed(2) + ' VNĐ';
        document.getElementById('billFinalTotal').innerHTML = Math.round(uber.totalAmt) + ' VNĐ';

        document.getElementById('exampleModalCenter').classList.add('fade');
    }
    
}