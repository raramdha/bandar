export const state = () => ({
        ongkir: 50000,
        products: [{
            id: 1,
            name: "Mangga",
            category: "Pertanian",
            location: "Indramayu",
            price: 100000,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            isAddedToCart: false,
            isAddedBtn: false,
            quantity: 1
        },
        {
            id: 2,
            name: "Tomat",
            category: "Pertanian",
            location: "Malang",
            price: 110000,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            isAddedToCart: false,
            isAddedBtn: false,
            quantity: 1
        },
        {
            id: 3,
            name: "Cabai",
            category: "Pertanian",
            location: "Karawang",
            price: 100000,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            isAddedToCart: false,
            isAddedBtn: false,
            quantity: 1
        },
        {
            id: 4,
            name: "Jagung",
            category: "Pertanian",
            location: "Sukabumi",
            price: 120000,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            isAddedToCart: false,
            isAddedBtn: false,
            quantity: 1
        },
        {
            id: 5,
            name: "Ayam",
            category: "Peternakan",
            location: "Bogor",
            price: 100000,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            isAddedToCart: false,
            isAddedBtn: false,
            quantity: 1
        },
        {
            id: 6,
            name: "Cabai",
            category: "Pertanian",
            location: "Karawang",
            price: 100000,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            isAddedToCart: false,
            isAddedBtn: false,
            quantity: 1
        },
        {
            id: 7,
            name: "Wortel",
            category: "Pertanian",
            location: "Sukabumi",
            price: 110000,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            isAddedToCart: false,
            isAddedBtn: false,
            quantity: 1
        },
        {
            id: 8,
            name: "Tomat",
            category: "Pertanian",
            location: "Malang",
            price: 120000,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            isAddedToCart: false,
            isAddedBtn: false,
            quantity: 1
        },
        {
            id: 9,
            name: "Cabai",
            category: "Pertanian",
            location: "Karawang",
            price: 110000,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            isAddedToCart: false,
            isAddedBtn: false,
            quantity: 1
        },
        {
            id: 10,
            name: "Jagung",
            category: "Pertanian",
            location: "Sukabumi",
            price: 100000,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            isAddedToCart: false,
            isAddedBtn: false,
            quantity: 1
        },
        {
            id: 11,
            name: "Udang",
            category: "Perikanan",
            location: "Cirebon",
            price: 100000,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            isAddedToCart: false,
            isAddedBtn: false,
            quantity: 1
        },
        {
            id: 12,
            name: "Cabai",
            category: "Pertanian",
            location: "Karawang",
            price: 100000,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            isAddedToCart: false,
            isAddedBtn: false,
            quantity: 1
        }
        ],
        userInfo: {
            isLoggedIn: false,
            isSignedUp: false,
            hasSearched: false,
            name: '',
            productNameSearched: ''
        }
        
})

export const getters = {
        productsAdded: state => {
            return state.products.filter(el => {
                return el.isAddedToCart;
            });
        },
        getUserName: state => {
            return state.userInfo.name;
        },
        getProductById: state => id => {
            return state.products.find(product => product.id == id);
        },
        isUserLoggedIn: state => {
            return state.userInfo.isLoggedIn;
        },
        isUserSignedUp: state => {
            return state.userInfo.isSignedUp;
        },
        quantity: state => {
            return state.products.quantity; 
        },
        pertanian: state => filter(state.products, 'category', 'Pertanian'),
        peternakan: state => filter(state.products, 'category', 'Peternakan'),
        perikanan: state => filter(state.products, 'category', 'Perikanan'),
}

export const mutations = {
        addToCart: (state, id) => {
            state.products.forEach(el => {
                if(id === el.id) {
                    el.isAddedToCart = true;
                }
            });
        },
        setAddedBtn: (state, data) => {
            state.products.forEach(el => {
              if (data.id === el.id) {
                el.isAddedBtn = data.status;
              }
            });
        },
        removeFromCart: (state, id) => {
            state.products.forEach(el => {
              if (id === el.id) {
                el.isAddedToCart = false;
              }
            });
        },
        isUserLoggedIn: (state, isUserLoggedIn) => {
            state.userInfo.isLoggedIn = isUserLoggedIn;
        },
        isUserSignedUp: (state, isSignedUp) => {
            state.userInfo.isSignedUp = isSignedUp;
        },
        setHasUserSearched: (state, hasSearched) => {
            state.userInfo.hasSearched = hasSearched;
        },
        setUserName: (state, name) => {
            state.userInfo.name = name;
        },
        setProductNameSearched: (state, nameSearched) => {
            state.userInfo.productNameSearched = nameSearched;
        },
        quantity: (state, data) => {
            state.products.forEach(el => {
                if(data.id === el.id) {
                    el.quantity = data.quantity;
                }
            });
        }
}


