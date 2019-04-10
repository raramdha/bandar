<template>
    <div>
    <TestNavbar />
    <div class="container main">
        <h3>Dashboard Pengguna</h3>
        <div class="row mt-3">
            <div class="col-sm-3 userphoto justify-content-center text-center">
                <img class="img-circle img-responsive" src="https://via.placeholder.com/150x150" alt="">
            </div>
            <div class="col-sm-9">
                <div class="row mt-5">
                    <h5>PT Nama Perusahaan</h5>
                </div>
                <tabs>
                    <tab name="Detail Pesanan" :selected="true">
                        <DetailPesanan
                            v-for="orderDetail in orderDetails"
                            :key="orderDetail.orderId"
                            :productName="orderDetail.productName"
                            :totalPay="orderDetail.totalPay"
                            :jumlah="orderDetail.jumlah"
                            :orderId="orderDetail.orderId"                        
                            :orderDate="orderDetail.orderDate"
                            :payDate="orderDetail.payDate"
                        />
                    </tab>
                    <tab name="Riwayat Pemesanan">
                        <RiwayatPesanan
                            v-for="orderHistory in orderHistories"
                            :key="orderHistory.orderId"
                            :productName="orderHistory.productName"
                            :totalPay="orderHistory.totalPay"
                            :jumlah="orderHistory.jumlah"
                            :orderId="orderHistory.orderId"
                            :orderDate="orderHistory.orderDate"                        
                            :payDate="orderHistory.payDate"
                            :finishDate="orderHistory.finishDate"
                        />
                    </tab>
                    <tab name="Data Perusahaan">
                        <CompanyData />
                    </tab>
                </tabs>
            </div>
        </div>
    </div>
    <Footer />
    </div>
</template>

<script>
import TestNavbar from '~/components/TestNavbar.vue'
import DetailPesanan from '~/components/Dashboard/DetailPesanan.vue'
import RiwayatPesanan from '~/components/Dashboard/RiwayatPesanan.vue'
import CompanyData from '~/components/Dashboard/CompanyData.vue'
import Tabs from '~/components/Dashboard/Tabs.vue'
import Tab from '~/components/Dashboard/Tab.vue'
import Footer from '~/components/Footer.vue'
export default {
    components: {
        TestNavbar,
        CompanyData,
        DetailPesanan,
        RiwayatPesanan, 
        Tabs,
        Tab,
        Footer
    },
    data() {
        return {
        orderDetails: [{
                productName: "Cabai",
                totalPay: "Rp 1234567",
                jumlah: "10 ton",
                orderId: "100001",
                orderDate: "11-02-2019 10:01",
                payDate: "11-02-2019 12:21"
            },
            {
                productName: "Tomat",
                totalPay: "Rp 1234567",
                jumlah: "20 ton",
                orderId: "100002",
                orderDate: "11-02-2019 10:01",
                payDate: "11-02-2019 12:21"
            },
            {
                productName: "Bawang Merah",
                    totalPay: "Rp 1234567",
                jumlah: "10 ton",
                orderId: "100003",
                orderDate: "11-02-2019 10:01",
                payDate: "11-02-2019 12:21"
            }
            ],
            orderHistories: [{
                productName: "Cabai",
                totalPay: "Rp 1234567",
                jumlah: "10 ton",
                orderId: "100001",
                orderDate: "11-02-2019 10:01",
                payDate: "11-02-2019 12:21",
                finishDate: "14-02-2019 16:16"
            },
            {
                productName: "Tomat",
                totalPay: "Rp 1234567",
                jumlah: "20 ton",
                orderId: "100002",
                orderDate: "11-02-2019 10:01",
                payDate: "11-02-2019 12:21",
                finishDate: "14-02-2019 16:16"
            },
            {
                productName: "Bawang Merah",
                totalPay: "Rp 1234567",
                jumlah: "10 ton",
                orderId: "100003",
                orderDate: "11-02-2019 10:01",
                payDate: "11-02-2019 12:21",
                finishDate: "14-02-2019 16:16"
            }]
        }
    }
}
</script>

<style>


.main {
    margin-top: 100px;
}

tabs {
    box-sizing: border-box;
    display: flex;
    padding: 10px;
    box-shadow: 0 48px 80px -32px rgba(0,0,0,0.3);
}



a {
    color: #292f33;
}
a:hover {
    color: gray;
    text-decoration: none;
}
.img-circle {
    border-radius: 50%;
    justify-content: center;
    align-items: center;
}

</style>