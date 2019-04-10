<template>
    <form class="form-inline" style="width: 750px" role="form" method="post" action="">
        <div class="input-group">
            <input type="text" class="form-control search-form"
                v-model="value"
                placeholder="Cari produk"
                @keyup="search(value)"
            >
            <span class="input-group-btn">
                <button type="submit" class="btn btn-warning search-btn" data-target="#search-form">
                    <font-awesome-icon icon="search" class="search-icon" />
                </button>
            </span>
        </div> 
    </form>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        search(value) {
            if(value.length > 0) {
                this.$store.commit('setHasUserSearched', true);
                this.$store.commit('setProductTitleSearched', value)
            } else {
                this.$store.commit('setHasUserSearched', false);
				this.$store.commit('setProductTitleSearched', '');
            }
        }
    }
    
}
</script>

<style scoped>
form {
    width: 750px;
}
.search-form {
    border-radius: 30px 0px 0px 30px;
}

.search-btn {
    border-radius: 0px 30px 30px 0px;
    cursor:pointer;
}

    
</style>