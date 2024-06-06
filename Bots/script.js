document.getElementById('NumberBot').addEventListener('submit', function (e) {
    e.preventDefault();

    const BotID = document.getElementById('Bot-ID').value;
    const Description = document.getElementById('Description').value;
    const CurrencyUnit = document.getElementById('currency-selector').value;
    const TotalAmount = document.getElementById('total-amount').value;
    const Payer = document.getElementById('payer').value;
    let money;
    
    if (CurrencyUnit === "toman") {
        money = "T";
    }
    if (CurrencyUnit === "lira") {
        money = "TL";
    }
    if (CurrencyUnit === "trx") {
        money = "TRX";
    }
    if (CurrencyUnit === "usdt") {
        money = "USDT";
    }
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const formattedNumber = formatNumber(TotalAmount);

    // const resultText = `فروش نات کوین\nآیدی : ${id}\nمقدار نات کوین : ${coinAmount}\nقیمت فروخته شده : ${soldPrice}\nمقدار پرداخت شده به مشتری : ${paidAmount}\nسود : ${profit} تومن`;
    const resultText = 
    // ` Bot ID : ${BotID} \n Total Amount : ${formattedNumber} ${money} \n Payer : ${Payer}`
    `🤖 خرید از بات 🤖\n\n💡 Bot ID : ${BotID} \n\n💬 Description : ${Description} \n\n💲 Total Amount : ${formattedNumber} ${money} \n\n💳 Payer : ${Payer} \n\n🆔 Factor ID : `
    document.getElementById('result-text').value = resultText;
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
});

/* document.getElementById('copy-button').addEventListener('click', function () {
    const resultText = document.getElementById('result-text');
    resultText.select();
    document.execCommand('copy');
    alert('متن کپی شد!');
    */
document.getElementById('copy-button').addEventListener('click', function () {
    const resultText = document.getElementById('result-text');
    resultText.select();
    document.execCommand('copy');
    alert('متن کپی شد!');
});
