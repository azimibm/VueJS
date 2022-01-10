var app = new Vue({
    el: '#app',

    // our data object
    data: {
      brand: "Vue Master",
      product: "Socks",
      selectedVariant: 0, 
      description: 'A pair of warm, fuzzy socks',
      //inventory: 8,
      
      details: ["80% cotton", "20% Polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantQuantity: 10, 
          variantImage: "C:\\Users\\sahar.azimi\\OneDrive - Abrigo\\Pictures\\vmSocks-green-onWhite.jpg"
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantQuantity: 0, 
          variantImage: "C:\\Users\\sahar.azimi\\OneDrive - Abrigo\\Pictures\\vmSocks-blue-onWhite.jpg"
        }
      ],
      sizes: ["S", "M", "L", "XL", "2XL"],
      cart: 0,
      OnSale: true,
      //inStock: true,
      
      link: "https://www.amazon.com/"
    },
    // methods
    methods: {
      addToCart: function () {
        this.cart += 1
      },
      updateProduct: function (index) {
        this.selectedVariant = index
        console.log(index)
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
      },
      image() {
        return this.variants[this.selectedVariant].variantImage
      }, 
      inStock() {
         return this.variants[this.selectedVariant].variantQuantity
      },
      sale() {
        if (this.OnSale) {
          return this.brand + ' ' + this.product + ' are on sale'
        } 
        return this.brand + ' ' + this.product + ' are not on sale'
      }
    }
  })