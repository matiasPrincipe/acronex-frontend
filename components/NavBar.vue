<template>
    <b-navbar class="is-info" centered>
      <template #brand>
        <b-navbar-item>
          <img src="../assets/logo-full.png">
        </b-navbar-item>
        <b-navbar-item>
          <img src="../assets/unimap_blanco.png">
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item
          href="#"
        >
          <b-input
            class="is-info"
            v-model="description"
            placeholder="Buscar..."
            @icon-click="$emit('selected', description)"
            @blur="$emit('selected', description)"
            @keyup.enter="$emit('selected', description)"
            type="search"
            icon-clickable
            icon="magnify"
          >
          </b-input>
        </b-navbar-item>
      </template>
    </b-navbar>
</template>
<style scoped>
</style>
<script>

export default {
    name: 'NavBar',
    data () {
        return {
            description: ''
        }
    }
}
</script>
