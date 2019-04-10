<template>
    <div>
        <img class="card-img-top" src="https://via.placeholder.com/1280x960" alt="">
        <div class="card-body">
            <h5 class="card-title">
                {{ product.name }}
            </h5>
            <font-awesome-icon icon="map-marker-alt" />
                <span>{{ product.location }}</span>        
                <p>Rp {{ product.price }} per ton</p>
            <button class="float-right btn btn-sm btn-success" v-if="!product.isAddedToCart" @click="addToCart(product.id)">Beli</button>       
        </div>
        <nuxt-link
        class="details"
        :to="{
            name: 'product',
            params: {
            id: product.id,
            location: product.location,
            name: product.name,
            price: product.price,
            isAddedBtn: product.isAddedBtn
            }
        }"
        >
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['product'],
    computed: {
    isUserLogged () {
      return this.$store.getters.isUserLoggedIn;
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
        }
    }
}
</script>

<style>
.details {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.details:hover {
    border: 1px solid #51bafc;
}

a:hover {
    color: #4cbb7c;
}

.card-body {
    padding: 10px;
    align-items: center;
    justify-content: center;
}

.btn {
    margin-bottom: 10px;
}


    
</style>