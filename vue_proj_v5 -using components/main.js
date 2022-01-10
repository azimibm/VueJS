Vue.component('product-review', {
  template: `
  <form class="review-form" @submit.prevent="onSubmit">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors"> {{ error }} </li>
          </ul>
        </p>
        <p>
          <label for="name">Name:</label>
          <input id="name" v-model="name">
        </p>
        
        <p>
          <label for="review">Review:</label>      
          <textarea id="review" v-model="review"></textarea>
        </p>
        
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>           

        <p>Would you recommend this product?</p>
        <label>
          YES
          <input type="radio" value="Yes" v-model="recommend"/> 
        </label>
        <label>
          No
          <input type="radio" value="No" v-model="recommend"/>
        </label>

        <p>
          <input type="submit" value="Submit">  
        </p>    
      
    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      recommend: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      if (this.errors.length != 0) {
        this.errors.splice(0)
      }
      if (this.name && this.rating && this.review && this.recommend) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend
        }
        this.$emit('review-submitted', productReview)
        this.name = null,
          this.review = null,
          this.rating = null,
          this.recommend = null
      }
      else {
        if (!this.name) this.errors.push("Name is required.")
        if (!this.review) this.errors.push("Review is required.")
        if (!this.rating) this.errors.push("Rating is required.")
        if (!this.recommend) this.errors.push("Recommendation is required.")
      }
    }
  }
})

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
        <button v-on:click="removeFromCart">Remove from Cart</button>

        <br />
        <a :href="link" target="_blank">More products like this</a>
      </div>
      <div>
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
          <li v-for="review in reviews">
            <p>{{ review.name }}</p>
            <p>Rating: {{ review.rating }}</p>
            <p>{{ review.review }}</p>
          </li>
        </ul>
      </div>
      <product-review @review-submitted="addReview"></product-review>
    </div>
  `,
  // our data object
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
      reviews: [],
      //inStock: true,

      link: "https://www.amazon.com/"
    }
  },
  // methods
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct: function (index) {
      this.selectedVariant = index,
        console.log(index)
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
      //if (this.cart != 0)
      //this.cart -= 1
    },
    addReview(productReview) {
      this.reviews.push(productReview)
      console.log(productReview)
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
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeItem(id) {
      for (var i = this.cart.length - 1; i >= 0; i--) {
        if (this.cart[i] === id) {
          this.cart.splice(i, 1);
        }
      }
    }
  }
})