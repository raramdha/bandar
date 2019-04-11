<template>
    <div>
        <TestNavbar />
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6 mt-5">
                    <div class="card" v-if="!isUserLoggedIn">
                        <header class="card-header">
                            <h5 class="card-title mt-2 text-center">Masuk</h5>
                        </header>
                        <article class="card-body">
                            <form @submit="checkForm" action="#" method="post">
                                <div >
                                    <div class="form-group">
                                        <label>E-mail Perusahaan</label>
                                        <input v-model="email" type="email" class="form-control" placeholder="name@office.com">
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input v-model="password" type="password" class="form-control" placeholder="*********">
                                    </div>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> Ingat saya
                                        </label>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success btn-block" > Masuk </button>
                                    </div>
                                </div>
                                
                            </form>
                        </article>
                        <div>
                            <button type="button" class="btn btn-link">Lupa Password?</button>
                            <nuxt-link to="/signup">
                                <button type="button" class="btn btn-link">Daftar</button>
                            </nuxt-link>
                         </div>
                    </div>
                </div>
                <div v-if="isUserLoggedIn" class="alert alert-success" role="alert">
                    Login berhasil!
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import TestNavbar from '~/components/TestNavbar.vue'
import Footer from '~/components/Footer.vue'
export default {
    components : {
        TestNavbar,
        Footer
    },
    data() {
        return {
            email: '',
            password: '',
            isFormSuccess: false
        };
    },
    computed: {
        isUserLoggedIn() {
            return this.$store.getters.isUserLoggedIn;
        }
    },
    methods: {
        checkForm(e) {
            e.preventDefault();
            
            if(this.email && this.password) {
                this.isFormSuccess = true;
                this.$store.commit('isUserLoggedIn', this.isFormSuccess);
                this.$router.push( { name: 'main' });
            }
        }
    }
}
</script>

<style scoped>
label {
    float: left;
}
.btn-link {
    color: #098840;
    text-decoration: none;
}
.btn-link:hover {
    color:grey;
}

    
</style>