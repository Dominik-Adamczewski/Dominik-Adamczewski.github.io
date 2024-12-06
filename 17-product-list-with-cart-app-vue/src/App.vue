<template>
  <div class="p-6 lg:p-10 bg-proj-17-rose-100 md:flex md:justify-center">
    <div class="lg:flex lg:items-start lg:max-w-full gap-4">
      <div class="lg:flex lg:flex-col lg:basis-2/3 xl:basis-3/4">
        <h1 class="text-3xl font-bold">Desserts</h1>
        <ProductsList :productsData="products" />
      </div>
      <div class="lg:basis-1/3">
        <CartView :productsDetailedInformation="{ productsChanges, allProductsAmount }" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from "./components/ProductsList.vue";
import CartView from "./components/CartView.vue";
import { useProductsStore } from "@/stores/ProductsStore";
import { mapActions, mapState } from 'pinia'; 
export default {
  name: "App",
  components: { ProductsList, CartView },
  methods: {
    ...mapActions(useProductsStore, ['getPossibleProducts']),
  },
  computed: {
    ...mapState(useProductsStore, ['products', 'cartProducts', 'selectedProducts']),
  },
  mounted() {
    this.getPossibleProducts();
  }
};
</script>