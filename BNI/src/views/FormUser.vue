<script>
import Form from '../components/Form.vue'
export default {
  name: 'FormUser',
  components: { Form },
  data() {
    return {
      page: 'add'
    }
  }
}
</script>

<template>
  <Form :page="page" />
</template>
