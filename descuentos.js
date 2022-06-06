const coupon = [
    {
        name: "cupon_1",
        discount: 15
    },
    {
        name: "cupon_2",
        discount: 30
    },
    {
        name: "cupon_3",
        discount: 50
    }
]



function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isValidCoupon = coupon => coupon.name == couponValue;
    const userCoupon = coupon.find(isValidCoupon);

    if(!userCoupon){
        alert(`El cupón ${couponValue} no es valido`)
    }else {
        const descuento = userCoupon.discount

        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = `El precio con descuento son: $${precioConDescuento}`
    }
}

