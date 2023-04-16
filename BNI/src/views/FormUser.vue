<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  name: 'FormUser',
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
    ...mapActions(useCounterStore, ['addUser'])
  }
}
</script>

<template>
  <div class="form">
    <div id="form" className="container text-center">
      <h2>Add User</h2>
      <form id="form" @submit.prevent="addUser(this.input)">
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
