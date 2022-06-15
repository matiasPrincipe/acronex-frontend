<template>
  <div>
    <b-navbar class="is-link">
        <template #brand>
            <b-navbar-item>
              <img src="../assets/logo-full.png">
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item
              href="#"
              centered
            >
              <b-input v-model="description"></b-input>
            </b-navbar-item>
        </template>
        <template #end>
            <b-navbar-item tag="div">
              <div class="buttons">
                <b-button
                  :loading="isLoading"
                  class="button is-primary"
                  @click="getMachines()"
                >
                  buscar
                </b-button>
              </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <div class="section color-grey">
      <div class="color-grey">
        <b-table
          is-narrowed
          :data="machines"
          :loading="isLoading"
          :current-page="page"
          paginated
          backend-pagination
          :total="totalMachines"
          :per-page="itemsPerPage"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page"
          @page-change="onPageChange"
        >
          <b-table-column
            v-slot="props"
            field="_id"
          >
            {{ props.row._id }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            field="description"
            numeric
          >
            ({{ props.row.description }})
          </b-table-column>
          <b-table-column
            v-slot="props"
            field="moving"
          >
            {{ props.row.moving }}
          </b-table-column>
          <b-table-column
            v-slot="props"
          >
            <div class="buttons">
              <b-button
                :loading="isLoading"
                class="button is-primary"
                @click="openMachineInfo(props.row._id)" 
              >
                buscar
              </b-button>
            </div>
          </b-table-column>
        </b-table>
        <b-modal v-model="isModalMachineActive" :width="640" scroll="keep">
            <div class="card" v-if="machine">
              <div class="notification is-primary">
                This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
              </div>
              <div class="card-content">
                <div class="columns">
                  <div class="column is-5">
                    <div class="media-content">
                        <p class="title is-6">Empresa</p>
                        <p class="subtitle is-6">{{ machine.empresa }}</p>
                    </div>
                    <div class="media-content">
                        <p class="title is-6">Empresa</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
                  <div class="column is-7">
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<style scoped>
 .color-grey {
   color: #e4e4e4;
 }
</style>
<script>
export default {
  name: 'MachineIndex',
  data () {
    return {
      page: 1,
      itemsPerPage: 10,
      isLoading: false,
      description: '',
      machine: null,
      machines: [],
      totalMachines: 0,
      isModalMachineActive: false
    }
  },
  methods: {
    getMachines () {
      this.isLoading = true
      this.$axios.
        $get('api/machine')
        .then((response) => {
          this.machines = response.machines
          this.totalMachines = response.machines.length
        })
        .catch((error) => {
          const msg = error
          this.$buefy.dialog.alert({
            title: 'Error',
            msg,
            type: 'is-danger',
            hasIcon: true
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    onPageChange (page) {
      this.page = page
      this.getMachines()
    },
    openMachineInfo (id) {
      const dir = `api/machine/${id}` 
      this.$axios.
        $get(dir)
        .then((response) => {
          this.machine = response.machine
          console.log('machine:',response)
          this.isModalMachineActive = true
        })
        .catch((error) => {
          const msg = error
          this.$buefy.dialog.alert({
            title: 'Error',
            msg,
            type: 'is-danger',
            hasIcon: true
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
