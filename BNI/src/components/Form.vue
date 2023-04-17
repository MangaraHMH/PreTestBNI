<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  name: 'Form',
  props: ['page'],
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
  computed: {
    ...mapState(useCounterStore, ['user']),
    title() {
      if (this.page === 'add') {
        return 'Add User'
      } else {
        return 'Edit User'
      }
    },
    formInput() {
      if (this.page === 'add') {
        this.input
      } else {
        this.input.firstName = this.user.firstName
        this.input.lastName = this.user.lastName
        this.input.username = this.user.username
        this.input.email = this.user.email
      }
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['addUser', 'editUser', 'fetchUserById']),
    handleSubmit() {
      if (this.page === 'add') {
        this.addUser()
      } else {
        this.editUser(this.user.id, this.input)
      }
    }
  },
  created() {
    if (this.page === 'edit') {
      this.fetchUserById(this.$route.params.id)
    }
  }
}
</script>

<template>
  <div class="form">
    <div id="form" className="container text-center">
      <h2>{{ title }}</h2>
      <form id="form" @submit.prevent="handleSubmit()">
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
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="form-kosong"
            placeholder="Enter email here"
            autocomplete="off"
            v-model="formInput"
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

#form-kosong {
  display: none;
}
</style>
