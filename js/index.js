function calculateDiscount() {
    const product1 = parseFloat(document.getElementById('product1').value) || 0;
    const product2 = parseFloat(document.getElementById('product2').value) || 0;
    const product3 = parseFloat(document.getElementById('product3').value) || 0;
    const product4 = parseFloat(document.getElementById('product4').value) || 0;
    const product5 = parseFloat(document.getElementById('product5').value) || 0;

    const subtotal = product1 + product2 + product3 + product4 + product5;
    document.getElementById('subtotal').value = subtotal.toFixed(2);

    let discountPercentage = 0;

    if (subtotal >= 13000) {
        discountPercentage = 40;
    } else if (subtotal >= 9000) {
        discountPercentage = 30;
    } else if (subtotal >= 5000) {
        discountPercentage = 20;
    } else if (subtotal >= 1000) {
        discountPercentage = 10;
    }

    const discountAmount = (subtotal * discountPercentage) / 100;
    const total = subtotal - discountAmount;

    document.getElementById('discount').value = discountAmount.toFixed(2);
    document.getElementById('total').value = total.toFixed(2);

    document.getElementById('discountLabel').innerText = `Descuento ${discountPercentage}%`;
}

function resetForm() {
    document.getElementById('discountLabel').innerText = 'Descuento 0%';
}