<template>
    <div>
    <TestNavbar />
    <main class="mt-5">
        <div class="container">
            <table v-if="!isCheckoutSection" id="cart" class="table table-hover table-condensed">
                <thead>
                    <tr>
                        <th class="text-center" style="width: 75%">Produk</th>
                        <th class="text-center" style="width: 12%">Harga</th>
                        <th class="text-center" style="width: 15%">Jumlah (ton)</th>
                        <th style="width: 5%"></th>
                    </tr>
                </thead>
                <tbody v-for="product in products" :key="product.id">
                    <tr>
                        <td data-th="Produk">
                            <div class="row">
                                <div class="col-sm-3 hidden-xs">
                                    <img class="img-responsive" src="https://via.placeholder.com/100" alt="">
                                </div>
                                <div class="col-sm-9 justify-content-center">
                                    <h5>{{ product.name }}</h5>
                                    <p>{{ product.deskripsi }}</p>
                                </div>
                            </div>
                        </td>
                        <td data-th="Harga" class="text-center">Rp {{ product.price }}</td>
                        <td data-th="Jumlah" class="text-center">
                            {{ product.quantity > 0 ?  `${product.quantity}` : ''}}                            
                        </td>
                        <td class="actions" data-th="">
                            <button class="btn btn-warning btn-sm" @click="removeFromCart(product.id)"><font-awesome-icon icon="trash-alt" /></button> 
                        </td>
                    </tr>
                    <div v-if="products.length === 0">
                        <p class="justify-content-center">Keranjang Anda kosong</p>
                    </div>
                </tbody>
                <tfoot class="mt-2">
                    <tr>
                        <td><nuxt-link to="/catalogue"><button class="btn btn-warning">Kembali ke Katalog</button></nuxt-link></td>
                        <td class="visible-md text-right" colspan="2"><strong>Total  Rp {{ total }}</strong></td>
                        <td><button v-show="products.length > 0 && !isCheckoutSection" class="btn btn-success btn-block" @click="checkBuy">Checkout</button></td>
                    </tr>
                    <tr>  
                    </tr>
                </tfoot> 
            </table>
            <div v-if="isCheckoutSection" class="card justify-content-center">
                <div class="card-body text-center">
                    <h4>Info Pembayaran</h4>
                    <div class="card-text">
                        <h6>Silahkan melakukan pembayaran melalui</h6>
                        <h6><strong>Transfer Bank BCA</strong></h6>
                        <br>
                        <h6>Nomor Rekening Tujuan:</h6>
                        <h6><strong>0123456789</strong></h6>
                        <h6><strong>PT Crowde Membangun Bangsa</strong></h6>
                        <br>
                        <h6>Nominal yang harus dibayarkan:</h6>
                        <h6><strong>Rp {{ total }}</strong></h6>
                        <br>
                        <br>
                        <p>Mohon kirimkan email konfirmasi pembayaran ke email
                            <strong>info@crowde.co</strong> dengan subjek Nama Pemilik Rekening_Nomor Pemesanan
                        </p>
                        </div>
                
                </div>

            </div>
        </div>
    </main>
    <Footer/>       
    </div>
    
</template>

<script>

import TestNavbar from '~/components/TestNavbar.vue'
import Footer from '~/components/Footer.vue'
export default {
    components: {
        TestNavbar,
        Footer
    },
    data() {
        return {
            isCheckoutSection: false
        }
    },
    computed: {
        products() {
            return this.$store.getters.productsAdded;
        },
        total() {
            let productsAdded = this.$store.getters.productsAdded,
                pricesArray = [],
                totalPrice = '',
                quantity = 1;

            productsAdded.forEach(product => {
				if (product.quantity >= 1) {
					quantity = product.quantity;
				}
				pricesArray.push((product.price * quantity));
                });
                
                totalPrice = pricesArray.reduce((a, b) => a + b, 0);
            return totalPrice;
        },
        isUserLoggedIn() {
			return this.$store.getters.isUserLoggedIn;
        },
        isUserSignedUp() {
            return this.$store.getters.isUserSignedUp;
        }
    },
    methods: {
        checkBuy() {
            if(this.isUserLoggedIn || this.isUserSignedUp) {
                this.isCheckoutSection = true;
            }
        },
        removeFromCart (id) {
			let data = {
					id: id,
					status: false
			}
			this.$store.commit('removeFromCart', id);
			this.$store.commit('setAddedBtn', data);
		}
    }
    

}
</script>

<style scoped>

#cart {
    margin-top: 100px;
}
.table {
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

img-responsive {
    margin-right: 20px;
}

.table>tbody>tr>td, .table>tfoot>tr>td{
    vertical-align: middle;
}
@media screen and (max-width: 600px) {
    table#cart tbody td .form-control{
		width:20%;
		display: inline !important;
	}
	.actions .btn{
		width:36%;
		margin:1.5em 0;
	}
	
	.actions .btn-info{
		float:left;
	}
	.actions .btn-danger{
		float:right;
	}
	
	table#cart thead { display: none; }
	table#cart tbody td { display: block; padding: .6rem; min-width:320px;}
	table#cart tbody tr td:first-child { background: #333; color: #fff; }
	table#cart tbody td:before {
		content: attr(data-th); font-weight: bold;
		display: inline-block; width: 8rem;
	}
	
	table#cart tfoot td{display:block; }
	table#cart tfoot td .btn{display:block;}
	
}

.card {
    margin-top: 100px;
    margin-left: 350px;
    margin-right: 350px;
}

</style>