document.getElementById('NumberBot').addEventListener('submit', function (e) {
    e.preventDefault();

    let CustomerUserName = document.getElementById('Customer-Username').value;
    let CustomerNumID = document.getElementById('Customer-NumID').value;
    let PlanSelect = document.getElementById('plan-selector').value;
    let VirtualCardSelector = document.getElementById('VirtualCard-selector').value;
    let VirtualCardCost = document.getElementById('VirtualCardCost').value;
    let Vnumber = document.getElementById('Vnumber').value;
    let VNumCost = document.getElementById('VNumCost').value;
    let AccountExpiry = document.getElementById('AccountExpiry').value;
    let SoldPrice = document.getElementById('Sold-Price').value;

    let Profit = SoldPrice - VirtualCardCost;
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    VirtualCardCost = formatNumber(VirtualCardCost);
    VNumCost = formatNumber(VNumCost);
    SoldPrice = formatNumber(SoldPrice);
    Profit = formatNumber(Profit);
    // const formattedNumber = formatNumber(TotalAmount);
    const resultText = `Customer User Name : ${CustomerUserName} \n Customer Num ID : ${CustomerNumID} \n Plan Select : ${PlanSelect} \n Virtual Card Selector : ${VirtualCardSelector} \n Virtual Card Cost ${VirtualCardCost} \n Vnumber : ${Vnumber} \n VNumCost : ${VNumCost} \n Account Expiry ${AccountExpiry} \n Sold Price : ${SoldPrice} \n Profit : ${Profit}`;
    document.getElementById('result-text').value = resultText;
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
});

document.getElementById('copy-button').addEventListener('click', function () {
    const resultText = document.getElementById('result-text');
    resultText.select();
    document.execCommand('copy');
    alert('متن کپی شد!');
});