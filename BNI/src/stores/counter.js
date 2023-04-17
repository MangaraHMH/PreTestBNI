import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    users: [],
    user: {}
  }),
  actions: {
    async fetchUser() {
      try {
        const response = await fetch(
          'https://dummyjson.com/users?select=firstName,lastName,email,username'
        )
        const data = await response.json()
        this.users = data
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: 'linear-gradient(to right, #FF0000, #1A0000)'
          },
          duration: 3000
        }).showToast()
      }
    },

    async fetchUserById(id) {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`)
        const data = await response.json()
        this.user = data
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: 'linear-gradient(to right, #FF0000, #1A0000)'
          },
          duration: 3000
        }).showToast()
      }
    },

    async addUser(input) {
      try {
        await fetch('https://dummyjson.com/users/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: { input }
        })
        this.router.push('/')
        Toastify({
          text: 'Succes Add User',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)'
          },
          duration: 3000
        }).showToast()
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: 'linear-gradient(to right, #FF0000, #1A0000)'
          },
          duration: 3000
        }).showToast()
      }
    },

    async editUser(id, input) {
      try {
        await fetch(`https://dummyjson.com/users/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          data: { input }
        })
        this.router.push('/')
        Toastify({
          text: 'Succes Edit User',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)'
          },
          duration: 3000
        }).showToast()
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: 'linear-gradient(to right, #FF0000, #1A0000)'
          },
          duration: 3000
        }).showToast()
      }
    },

    async deleteUser(id) {
      try {
        await fetch(`https://dummyjson.com/users/${id}`, {
          method: 'DELETE'
        })
        Toastify({
          text: 'Succes Delete User',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)'
          },
          duration: 3000
        }).showToast()
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: 'linear-gradient(to right, #FF0000, #1A0000)'
          },
          duration: 3000
        }).showToast()
      }
    }
  }
})
