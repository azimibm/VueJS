Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
  <ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>
  `
})

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <!--p v-if="inStock">In Stock</p>-->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>

        <product-details :details="details"></product-details>

        <!--<p v-if="OnSale">
        <span>On Sale</span>
        </p> -->

        <p> {{ sale }} </p>
        <p>User is premium: {{ premium }}</p>

        <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
          :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">
          <!--<p @mouseover="updateProduct(variant.variantImage)"> {{ variant.variantColor }}</p>-->
        </div>
        <ul>
          <li v-for="size in sizes">{{ size }}</li>
        </ul>

        <!--<button v-on:click="cart += 1">Add to Cart</button>-->
        <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock}">Add to Cart</button>
        <button v-on:click="subtractFromCart">subtract from Cart</button>

        <br />
        <a :href="link" target="_blank">More products like this</a>
      </div>
    </div>
  `,
  // our data function
  data() {
    return {
      brand: "Vue Master",
      product: "Socks",
      selectedVariant: 0,
      details: ["80% cotton", "20% Polyester", "Gender-neutral"],
      description: 'A pair of warm, fuzzy socks',
      //inventory: 8,

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
      OnSale: true,
      //inStock: true,

      link: "https://www.amazon.com/"
    }
  },
  // methods
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart')
    },
    updateProduct: function (index) {
      this.selectedVariant =  index,
      console.log(index)
    },
    subtractFromCart() {
      if (this.cart != 0)
        this.cart -= 1
    }
  },
  // computerd property
  computed: {
    title() {
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
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
      return 2.99 
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: 0,
  },
  methods: {
    updateCart() {
      this.cart += 1
    }
  }
})