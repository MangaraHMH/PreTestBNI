<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  name: 'Edit',
  data() {
    return {
      input: {
        firstName: '',
        lastName: '',
        username: '',
        email: ''
      }
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['editUser', 'fetchUserById'])
  },
  computed: {
    ...mapState(useCounterStore, ['user'])
  },
  created() {
    this.fetchUserById(this.$route.params.id)
    this.input.firstName = this.user.firstName
    this.input.lastName = this.user.lastName
    this.input.username = this.user.username
    this.input.email = this.user.email
  }
}
</script>

<template>
  <div class="form">
    <div id="form" className="container text-center">
      <h2>Edit User</h2>
      <form id="form" @submit.prevent="editUser(this.user.id, this.input)">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="form-first-name"
            placeholder="Enter first name here"
            autocomplete="off"
            v-model="input.firstName"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="form-last-name"
            placeholder="Enter last name here"
            autocomplete="off"
            v-model="input.lastName"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="form-username"
            placeholder="Enter username here"
            autocomplete="off"
            v-model="input.username"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="form-email"
            placeholder="Enter email here"
            autocomplete="off"
            v-model="input.email"
          />
        </div>
        <div>
          <button className="btn btn-outline-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.form {
  padding-left: 12%;
  padding-bottom: 20px;
}
</style>
