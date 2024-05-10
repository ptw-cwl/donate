var paymentInfo = {
    wechat: {
        imagePath: "assets/img/wechat_payment_code.jpg",
        downloadPath: "assets/img/wechat_payment_code.jpg",
        buttonText: "微信支付"
    },
    alipay: {
        imagePath: "assets/img/alipay_payment_code.jpg",
        downloadPath: "assets/img/alipay_payment_code.jpg",
        buttonText: "支付宝支付"
    }
};

function generatePaymentButtons() {
    var paymentMethodsContainer = document.getElementById('payment-methods');
    paymentMethodsContainer.innerHTML = ''; 
    for (var method in paymentInfo) {
        if (paymentInfo.hasOwnProperty(method)) {
            var button = document.createElement('button');
            button.textContent = paymentInfo[method].buttonText;
            button.onclick = (function(method) {
                return function() {
                    togglePayment(method);
                };
            })(method);
            paymentMethodsContainer.appendChild(button);
        }
    }
}


generatePaymentButtons();

function togglePayment(method) {
    document.getElementById('payment-image').src = paymentInfo[method].imagePath;
    document.getElementById('download-link').setAttribute('onclick', "downloadImage('" + paymentInfo[method].downloadPath + "')");
    document.getElementById('download-link').innerHTML = '<i class="fas fa-download download-icon"></i>点击下载' + paymentInfo[method].buttonText + '二维码';
}

function downloadImage(imagePath) {
    var link = document.createElement('a');
    link.href = imagePath;
    link.download = imagePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
