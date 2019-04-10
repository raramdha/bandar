<template>
            <div class="row mt-3">
                <div class="col-md-2">
                    <nuxt-link to="/product"><img src="https://via.placeholder.com/100" alt="" class="image-product text-middle"></nuxt-link>
                </div>
                <div class="col-md-3">
                    <nuxt-link to="/product"><strong>{{ productName }}</strong><br></nuxt-link>
                    Jumlah<br>
                    No. Pemesanan<br>
                    Waktu Pemesanan<br>
                    Waktu Pembayaran<br>
                    Pembayaran Selesai<br>
                </div>
                <div class="col-md-3">
                    <br>
                    {{ jumlah }}<br>
                    {{ orderId }}<br>
                    {{ orderDate }}<br>
                    {{ payDate }}<br>
                    {{ finishDate }}<br>
                </div>
                <div class="col-md-4">
                    <div class="price text-right">
                        <strong class="text-right">{{ totalPay }}</strong>
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
        },
        finishDate: {
            type: String,
            required: true
        }
    }  
}
</script>

<style>

</style>