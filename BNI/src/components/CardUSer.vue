<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  name: 'CardUser',
  props: ['items'],
  methods: {
    ...mapActions(useCounterStore, ['deleteUser'])
  }
}
</script>

<template>
  <div class="col">
    <div class="card" style="width: 15rem">
      <div class="card-body">
        <p>
          {{ items.firstName }} <span>{{ items.lastName }}</span>
        </p>
        <p>{{ items.username }}</p>
        <p>{{ items.email }}</p>
        <div class="menus">
          <a
            href="#"
            class="btn btn-primary"
            @click.prevent="this.$router.push(`/edit/${items.id}`)"
            >Edit</a
          >
          <a href="#" class="btn btn-danger" @click.prevent="deleteUser(items.id)">Delete</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  gap: 20px;
  margin-bottom: 20px;
}
</style>
