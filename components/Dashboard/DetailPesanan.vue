<template>
            <div class="row mt-3">
                <div class="col-md-2">
                    <a href="#"><img src="https://via.placeholder.com/100" alt="" class="productimg"></a>
                </div>
                <div class="col-md-3">
                    <nuxt-link to="/product"><strong>{{ productName }}</strong><br></nuxt-link>
                    Jumlah<br>
                    No. Pemesanan<br>
                    Waktu Pemesanan<br>
                    Waktu Pembayaran<br>
                </div>
                <div class="col-md-3">
                    <br>
                    {{ jumlah }}<br>
                    {{ orderId }}<br>
                    {{ orderDate }}<br>
                    {{ payDate }}<br>
                </div>
                <div class="col-md-4">
                    <div class="price text-right">
                        <strong class="text-right">{{ totalPay }}</strong>
                    </div>
                    <div class="status text-right mt-2">
                        <img src="~/static/pay.png" alt="" class="icon-status">
                        <img src="~/static/delivery-truck.png" alt="" class="icon-status">
                        <img src="~/static/package.png" alt="" class="icon-status">
                    </div>
                    <div class="received text-right mt-2">
                        <button class="btn btn-sm btn-success btn-received">Pesanan Diterima</button>
                    </div>
                </div>
            </div>
</template>
<script>
export default {
    props: {
        productImage: {
            type: String,
            required: true
        },
        productName: {
            type: String,
            required: true
        },
        totalPay: {
            type: String,
            required: true
        },
        jumlah: {
            type: String,
            required: true
        },
        orderId: {
            type: String,
            required: true
        },
        orderDate: {
            type: String,
            required: true
        },
        payDate: {
            type: String,
            required: true
        }
    }  
}
</script>

<style>
.productimg {
    border-radius: 3px;
}
.icon-status {
    width: 30px;
    height: 30px;
}
    
</style>
