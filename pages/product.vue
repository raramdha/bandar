<template>
<div>
    <div>
        <TestNavbar />
            <div class="card">
                <div class="row">
                    <aside class="col-sm-5">
                        <article class="gallery-wrap p-3">
                            <div class="img-big-wrap">
                                <img src="https://via.placeholder.com/480" alt="">   
                            </div>
                        </article>
                    </aside>
                    <aside class="col-sm-7">
                        <article class="card-body p-5">
                            <h3 class="product-title mb-3">{{ product.name }}</h3>
                            <p class="price-detail-wrap">
                                <span class="price h3 text-secondary">
                                    <span class="rupiah">Rp </span>
                                    <span class="harga">{{ product.price }}</span>
                                </span>
                                <span>per ton</span>
                            </p>
                            <dl class="item-property">
                                <dt>Deskripsi</dt>
                                <dd><p>{{ product.deskripsi }}</p></dd>
                            </dl>
                            <dl class="param-feature"> 
                                <dt>Pengiriman dari:</dt>
                                <dd>{{ product.location }}</dd>
                            </dl>
                            <hr>
                            <div class="row">
                                <div class="col-sm-4">
                                    <dl class="param param-inline">
                                        <dt>Jumlah (ton): </dt>
                                        <dd>
                                            <input type="number" class="form-control text-center mt-2"
                                            :value="quantity" @input="onSelectQuantity(product.id)" min="0">
                                        </dd>
                                    </dl>
                                </div>
                                <div class="col-sm-8">
                                    <dl class="param param-inline">
                                        <dt>Keterangan Produk: </dt>
                                        <dd>
                                            <textarea class="form-control mt-2" id="exampleFormControlTextarea1" rows="3" placeholder="Contoh: warna kulit buah hijau tua (maks. 250 karakter)"></textarea>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <nuxt-link to="/checkout"><button class="btn btn-success mr-4" @click="addToCart(product.id)"> Pesan Sekarang </button></nuxt-link>
                            <button class="btn btn-success"  @click="addToCart(product.id)"> Tambahkan ke Keranjang </button>
                        </article>
                    </aside>
                </div>
            </div>
        <Footer />
    </div>
</div>
</template>

<script>
import TestNavbar from '~/components/TestNavbar.vue'
import Footer from '~/components/Footer.vue'
export default {
    name: 'product',
    components : {
        TestNavbar,
        Footer
    },
    validate ({ params }) {
        return /^\d+$/.test(params.id)
    },
    data() {
        return {
            product: {},
        }
    },
    mounted() {
        this.product = this.$store.getters.getProductById(this.$route.params.id);
        this.selected = this.product.quantity;
    },
    computed: {
        isAddedBtn () {
        return this.product.isAddedBtn;
        }
    },
    methods: {
        addToCart (id) {
            let data = {
                id: id,
                status: true
            }
            this.$store.commit('addToCart', id);
            this.$store.commit('setAddedBtn', data);
        },
        onSelectQuantity(id) {
            let data = {
                id: id,
                quantity: parseInt(event.target.value)
            }
            this.$store.commit('quantity', data);
        }
    }
}
</script>

<style>
.card {
    margin-top: 100px;
    margin-left: 50px;
    margin-right: 50px;
}
</style>