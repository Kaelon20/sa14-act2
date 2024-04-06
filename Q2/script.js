async function convertcurrency(){
    const currentcurrency = document.getElementById('currentCurrency').value;
    const convertcurrency = document.getElementById('convertedCurrency').value;


    const conversionRates = {
        'USD': { 'EUR': 0.85, 'GBP': 0.72 },
        'EUR': { 'USD': 1.18, 'GBP': 0.84 },
        'GBP': { 'USD': 1.38, 'EUR': 1.19 }
    };
}