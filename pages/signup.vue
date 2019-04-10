<template>
    <div>
        <MainNavbar />
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6 mt-5">
                    <div class="card">
                        <header class="card-header">
                            <h5 class="card-title mt-2">Daftar Akun</h5>
                        </header>
                        <article class="card-body">
                            <form @submit="checkForm" action="#" method="post">
                                <div v-if="!isUserSignedUp">
                                    <div class="form-group">
                                        <label>Nama Perusahaan</label>
                                        <input v-model="name" type="text" class="form-control" placeholder="PT Nama Perusahaan">
                                    </div>
                                    <div class="form-group">
                                        <label>E-mail Perusahaan</label>
                                        <input v-model="email" type="email" class="form-control" placeholder="name@office.com">
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input v-model="password" type="password" class="form-control" placeholder="*********">
                                    </div>
                                    <div class="form-group">
                                        <label>Konfirmasi Password</label>
                                        <input v-model="confPassword" type="password" class="form-control" placeholder="*********">
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success btn-block" > Daftar </button>
                                    </div>
                                </div>
                            </form>
                        </article>
                        <div class="border-top card-body text-center">
                            Punya akun? <a href="#">Log In</a>
                        </div>
                    </div>
                </div>
                <div v-if="isUserSignedUp" class="alert alert-success" role="alert">
                    Selamat datang {{ name }}! Akun Anda berhasil dibuat
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import MainNavbar from '~/components/MainNavbar.vue'
import Footer from '~/components/Footer.vue'
export default {
    components : {
        MainNavbar,
        Footer
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confPassword: '',
            isFormSuccess: false
        };
    },
    computed: {
        isUserSignedUp () {
        return this.$store.getters.isUserSignedUp;
        },
    },
    methods: {
        checkForm (e) {
        e.preventDefault();
        if (this.name && this.email && this.password && this.repeatPassword) {
            this.isFormSuccess = true;
            this.$store.commit('setUserName', this.name);
            this.$store.commit('isUserSignedUp', this.isFormSuccess);
            this.$store.commit('isUserLoggedIn', this.isFormSuccess);
        }
        }
    }
}
</script>

<style>
label {
    float: left;
}

    
</style>