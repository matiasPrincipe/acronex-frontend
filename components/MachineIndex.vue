<template>
  <div>
    <NavBar
      @selected="getMachines($event)"
    />
    <div class="section color-grey">
      <div class="color-grey">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <b-table
              v-if="totalMachines"
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
              :selected.sync="selected"
              @dblclick="openMachineInfo()"
            >
              <b-table-column
                v-slot="props"
                field="description"
              >
                <div class="columns">
                  <div class="column is-1">
                  </div>
                  <div class="column is-10">
                    {{ props.row.description }}
                  </div>
                  <div class="column is-1">
                    <span v-if="props.row.moving" class="green-dot"></span>
                    <span v-else class="red-dot"></span>
                  </div>
                </div>
              </b-table-column>
            </b-table>
         </div>
        </div>
        <b-modal v-model="isModalMachineActive" style="width: auto" scroll="keep">
          <MachineShow
            :machine="machine"
          />
        </b-modal>
      </div>
    </div>
  </div>
</template>
<style scoped>
 .color-grey {
   color: #e4e4e4;
 }
 .derecha {
   text-align: right;
 }
.red-dot {
  height: 30px;
  width: 30px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
}
.green-dot {
  height: 30px;
  width: 30px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
}
.expanded {
  width: 100%;
}
</style>
<script>

import MachineShow from "./MachineShow"
import NavBar from "./NavBar"

export default {
  name: 'MachineIndex',
  components: {
    MachineShow,
    NavBar
  },
  data () {
    return {
      page: 1,
      itemsPerPage: 10,
      isLoading: false,
      description: '',
      machine: {
        data: null
      },
      selected: null,
      machines: [],
      totalMachines: 0,
      isModalMachineActive: false
    }
  },
  methods: {
    getMachines (description) {
      this.isLoading = true
      this.$axios
        .$get('api/machines',
          { params: {
              description: description,
              itemsPerPage: this.itemsPerPage,
              page: this.page
            }
          })
        .then((response) => {
          this.machines = response.result.docs
          this.totalMachines = response.result.totalDocs
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
    openMachineInfo () {
      if (this.selected && this.selected._id) {
        this.$axios.
          $get(`api/machines/${this.selected._id}`)
          .then((response) => {
            console.log('primer resp',response);
            this.machine = response.machine
            return this.$axios.$get(`api/last/${this.machine._id}`)
          })
          .then((response) => {
            console.log(response);
            this.machine.data = response.machineData
          })
          .catch((error) => {
            const msg = error.message ?? 'Error en servidor'
            this.$buefy.dialog.alert({
              title: 'Error',
              msg,
              type: 'is-danger',
              hasIcon: true
            })
          })
          .finally(() => {
            this.isModalMachineActive = true
            this.isLoading = false
          })
      }
    }


    // getMachineData (machineId) {
    //   await this.$axios.
    //     $get(`api/last/${machineId}`)
    //     .then((response) => {
    //       this.machine.data = response.machineData.machineData
    //     })
    //     .catch((error) => {
    //       const msg = error.message ?? 'Error en servidor'
    //       this.$buefy.dialog.alert({
    //         title: 'Error',
    //         msg,
    //         type: 'is-danger',
    //         hasIcon: true
    //       })
    //     })
    // },
  }
}
</script>
