var app = new Vue({
    el: '#app',

    // our data object
    data: {
      brand: "Vue Master",
      product: "Socks",
      description: 'A pair of warm, fuzzy socks',
      image: "C:\\Users\\sahar.azimi\\OneDrive - Abrigo\\Pictures\\vmSocks-green-onWhite.jpg",
      inventory: 8,
      OnSale: true,
      details: ["80% cotton", "20% Polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "C:\\Users\\sahar.azimi\\OneDrive - Abrigo\\Pictures\\vmSocks-green-onWhite.jpg"
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "C:\\Users\\sahar.azimi\\OneDrive - Abrigo\\Pictures\\vmSocks-blue-onWhite.jpg"
        }
      ],
      sizes: ["S", "M", "L", "XL", "2XL"],
      cart: 0,
      
      inStock: true,
      
      link: "https://www.amazon.com/"
    },
    // methods
    methods: {
      addToCart: function () {  // function is declared as anonymous
        this.cart += 1
      },
      updateProduct: function (variantImage) {
        this.image = variantImage
      },
      subtractFromCart () {
        if (this.cart != 0)
         this.cart -= 1
      }, 
    },
    // computerd property
    computed: {
      title () {
        return this.brand + ' ' + this.product
      }
    },
  })