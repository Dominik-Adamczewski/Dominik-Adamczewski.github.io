<template>
  <div class="my-4 relative rounded-xl overflow-hidden">
    <img :src="isMobileOrTablet ? img.tablet : img.desktop" alt="test" class="w-full rounded-xl" :class="{ 'border-2': isSelected, 'border-proj-17-red': isSelected }">
    <div class="text-gray-400 mt-6">{{ category }}</div>
    <div class="text-proj-17-rose-500 font-bold">{{ name }}</div>
    <span class="text-proj-17-red font-bold">{{ price.toFixed(2) }}</span>
    <AddToCartBtn class="absolute bottom-20 left-1/2 -translate-x-1/2" @update-amount="updateCartState" :is-active="isSelected" />
  </div>

</template>

<script>
import AddToCartBtn from './AddToCartBtn.vue';
import { useProductsStore } from "@/stores/ProductsStore";

export default {
  components: { AddToCartBtn },
  props: {
    name: {
      type: String,
      required: true,
    },
    shortName: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      productsStore: useProductsStore(),
      productAmount: null,
      isMobileOrTablet: false,
    }
  },
  methods: {
    updateCartState(amount) {
      this.productAmount = amount;
      const dataObj = {
        shortName: this.shortName,
        amount: amount,
        price: this.price,
        longName: this.name,
        img: this.img,
      };
      amount ? this.productsStore.addProductToCart(dataObj) : this.productsStore.removeProductFromCart(dataObj);
    },
    updateDeviceType() {
      this.isMobileOrTable = window.innerWidth < 1024;
    }
  },
  computed: {
    isSelected() {
      return this.productsStore.isProductInTheCart(this.shortName);
    }
  },
  mounted() {
    this.updateDeviceType();

    window.addEventListener('resize', this.updateDeviceType);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>

<style>

</style>