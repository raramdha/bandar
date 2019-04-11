<template>
    <nav class="navbar navbar-expand-md fixed-top navbar-transparent" ref="navbar-color">
        <nuxt-link to="/test">
            <a class="navbar-brand text-white" href="#">Bandar</a>
        </nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Tentang Bandar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Mitra Petani</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link text-white">Cara Berbelanja</a>
                </li>
                <nuxt-link to="/catalogue" tag="li">
                    <a class="nav-link text-white" href="#">Katalog Hasil Panen</a>
                </nuxt-link>
            </ul>
            <ul class="navbar-nav ml-auto">
                <nuxt-link to="/checkout" tag="li">
                    <a href="#" class="nav-link nav-link-icon text-white">
                        <span><font-awesome-icon icon="shopping-cart"/></span>
                        <span :class="[numProductsAdded > 0 ? 'badge badge-warning' : '']">{{ numProductsAdded }}</span>
                    </a> 
                </nuxt-link>
                <nuxt-link to="/signup" tag="li">
                    <a href="#" v-if="!isUserLoggedIn" class="nav-link text-white">Daftar</a>
                </nuxt-link>
                <nuxt-link to="/login" tag="li">
                    <a v-if="!isUserLoggedIn" href="#" class="nav-link text-white">Masuk</a>               
                </nuxt-link>
                <li v-if="isUserLoggedIn" class="nav-item dropdown">
                    <b-dropdown variant="link" extra-toggle-classes="text-white" right>
                        <template slot="button-content">
                        <font-awesome-icon icon="user-circle" class="text-white"/>
                        <span class="text-white">{{ getUsername }}</span></template>
                        <b-dropdown-item><nuxt-link to="/dashboard">Dashboard</nuxt-link></b-dropdown-item>
                        <b-dropdown-item href="#">Logout</b-dropdown-item>
                    </b-dropdown>
                </li>
            </ul> 
        </div>
    </nav>
</template>

<script> 
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

export default {
    data() {
        return {
            lastKnownScrollPosition: 0,
        }
    },
    computed: {
        isUserLoggedIn() {
            return this.$store.getters.isUserLoggedIn;
        },
        getUserName () {
			let name = this.$store.getters.getUserName;
			
			if (name === '') {
				return 'user';
			} else {
				return name;
			}
        },
        numProductsAdded() {
             return this.$store.getters.productsAdded.length;
        }
    },
    methods: {
        handleScroll() {
            const newBg = 'navbar-green';
            let colorNavbar = this.$refs['navbar-color'];

            if(process.browser) {
                if(window.scrollY > 500) {
                    colorNavbar.classList.add(newBg);
                } else {
                    colorNavbar.classList.remove(newBg);
                }
            }
        },
        scrollListener() {
            resizeThrottler(this.handleScroll);
        }
        
    },
    created() {
        if(process.browser) {
            window.addEventListener('scroll', this.scrollListener);
        }
    },
    mounted() {
        this.handleScroll();
    },
    destroyed() {
        if(process.browser) {
            window.removeEventListener('scroll', this.scrollListener);
        }
    }
}
</script>

<style scoped>
.navbar-transparent {
    background-color: transparent;
}

.navbtn {
    justify-content: center;
    align-items: center;
}

.navbar-green {
    background-color: #098840;
}
</style>