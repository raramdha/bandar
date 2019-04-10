<template>
    <div>
        <header class="hero">
            <div class="container align-items-center">
                <MainNavbar />
                <div class="col-px-0">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-md-10">
                            <h4 class="text-white my-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum, tempore?
                            </h4>
                            <a href="#" class="btn btn-success" role="button">Pesan Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
        <main class="mt-5">
            <div class="container">
                <section id="main-feature" class="text-center">
                    <h2 class="mb-5 font-weight-bold">Lorem ipsum dolor sit amet</h2>
                    <div class="row">
                        <div class="col-md-4 mb-5">
                            <img src="https://via.placeholder.com/150" alt="">
                            <h4 class="my-4 font-weight-bold">Consectetur</h4>
                            <p class="text-grey">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere obcaecati non blanditiis exercitationem architecto ipsam!
                            </p>
                        </div>
                        <div class="col-md-4 mb-1">
                            <img src="https://via.placeholder.com/150" alt="">
                            <h4 class="my-4 font-weight-bold">Consectetur</h4>
                            <p class="text-grey">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere obcaecati non blanditiis exercitationem architecto ipsam!
                            </p>
                        </div>
                        <div class="col-md-4 mb-1">
                            <img src="https://via.placeholder.com/150" alt="">
                            <h4 class="my-4 font-weight-bold">Consectetur</h4>
                            <p class="text-grey">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere obcaecati non blanditiis exercitationem architecto ipsam!
                            </p>
                        </div>
                    </div>
                </section>
                <section id="catalog" class="mt-5">
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <img src="https://via.placeholder.com/450x300" alt="transparent image" class="img-fluid">
                        </div>
                        <div class="col-md-6 mb-4">
                            <h3 class="h3 mb-3">Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Qui, ducimus magni sunt odit minus enim voluptatum. Eaque illo officiis alias!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quam eius explicabo, 
                                doloribus commodi vitae temporibus laborum magnam deserunt magni corrupti? 
                                Sapiente nisi consequatur quis magnam hic est enim cumque?
                            </p>
                            <a href="#" class="btn btn-success">Lihat Katalog Produk</a>
                        </div>
                    </div>
                </section>
                <section id="about-us" class="mt-5">
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <h3 class="h3 mb-3">Lorem ipsum dolor sit amet</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Qui, ducimus magni sunt odit minus enim voluptatum. Eaque illo officiis alias!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quam eius explicabo, 
                                doloribus commodi vitae temporibus laborum magnam deserunt magni corrupti? 
                                Sapiente nisi consequatur quis magnam hic est enim cumque?
                            </p>
                            <a href="#" class="btn btn-success">Pelajari Lebih Lanjut</a>
                        </div>
                        <div class="col-md-6 mb-4">
                            <img src="https://via.placeholder.com/450x300" alt="transparent image" class="img-fluid">
                        </div>
                    </div>
                </section>
                <section id="make-account" class="mt-5">
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <img src="https://via.placeholder.com/450x300" alt="transparent image" class="img-fluid">
                        </div>
                        <div class="col-md-6 mb-4">
                            <h3 class="h3 mb-3">Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Qui, ducimus magni sunt odit minus enim voluptatum. Eaque illo officiis alias!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quam eius explicabo, 
                                doloribus commodi vitae temporibus laborum magnam deserunt magni corrupti? 
                                Sapiente nisi consequatur quis magnam hic est enim cumque?
                            </p>
                            <a href="#" class="btn btn-success">Daftar Sekarang</a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
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
    }
}
</script>

<style>

.row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}

.hero {
    background-image: url("https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

.col-md-10 {
    position: relative;
    width: 100%;
    padding: 0px 15px;
    text-align: center;
    justify-content: center;
    margin-top: 400px;
}
    
</style>