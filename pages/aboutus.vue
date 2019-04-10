<template>
    <div> 
        <TestNavbar />
        <div class="container mt-5">
            <section id="about">

            </section>

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
    }
}
</script>