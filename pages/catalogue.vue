<template>
    <div>
        <TestNavbar />    
        <main>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-sm-12">
                        <div class="row mt-5 mb-5 justify-content-center"> 
                            <div class="card col-sm-3" v-for="product in products" :key="product.id">
                                <CatalogContent :product="product" />
                            </div>
                        </div>
                        <div class="section" v-if="products.length === 0">
                            <p>Produk tidak ditemukan</p>
                        </div>
                         
                        <nav aria-label="Page navigation example">
                            <ul class="pagination pg-blue justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link">1</a></li>
                                <li class="page-item"><a class="page-link">2</a></li>
                                <li class="page-item"><a class="page-link">3</a></li>
                                <li class="page-item">
                                    <a class="page-link">Next</a>
                                </li>
                            </ul>
                        </nav> 
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
function getByName(list, keyword) {
    const search = keyword.trim().toLowerCase();
    if(!search.length) return list;
    return list.filter(item => item.name.toLowerCase().indexOf(search) > -1);
}


import TestNavbar from '~/components/TestNavbar.vue'
import Footer from '~/components/Footer.vue'
import CatalogContent from '~/components/CatalogContent.vue'
export default {
    components: {
        TestNavbar,
        CatalogContent,
        Footer
    },
    data() {
        return {
            id: '',
            productsFiltered: []
        };
    },
    computed: {
        products () {
            if (this.$store.state.userInfo.hasSearched) {
                return this.getProductByName();
            } else {
                return this.$store.state.products;
            }
        }
    },
    methods: {
        getProductByName () {
        let listOfProducts = this.$store.state.products,
            nameSearched = this.$store.state.userInfo.productNameSearched;
        
        return this.productsFiltered = getByName(listOfProducts, nameSearched);
        }
    }
}
</script>

<style scoped>

.container {
    margin: 0 auto;
}
a:hover {
    text-decoration: none;
}

.card {
    margin: 1.5rem;
    padding: 0;
}

.list-group-item  {
    color: black;
}

.list-group-item:hover {
    text-decoration: none;
    color: #098840;

}

</style>