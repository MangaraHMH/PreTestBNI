<script>
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'
import CardUser from '../components/CardUSer.vue'
export default {
  name: 'Home',
  components: { CardUser },
  computed: {
    ...mapState(useCounterStore, ['users'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchUser'])
  },
  created() {
    this.fetchUser()
  }
}
</script>

<template>
  <div class="home">
    <h1>User</h1>
    <div class="add">
      <button
        class="btn btn-primary rounded-pill"
        id="new-product"
        @click.prevent="this.$router.push('/form')"
      >
        + Add User
      </button>
    </div>
    <div class="row">
      <CardUser v-for="data in users.users" :key="data.id" :items="data" />
    </div>
  </div>
</template>

<style>
.home {
  margin-left: 12%;
  padding-bottom: 70px;
  padding-top: 20px;
}
.card-body {
  text-align: center;
}
.menus {
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
}
p {
  margin-bottom: 0;
}
.row {
  --bs-gutter-x: none;
}
.add{
  display: flex;
  justify-content: end;
  padding-right: 50px;
  padding-bottom: 20px;
}
</style>
