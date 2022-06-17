<template>
    <div class="card" v-if="machine">
        <div class="notification">
            <div class="columns">
            <div class="column is-8">
                <p class="title is-4">{{ machine.description }}</p>
            </div>
            <div class="column is-4">
                <div class="derecha">{{ machine._id }}</div>
            </div>
            </div>
        </div>
        <div class="card-content">
            <div class="columns">
            <div class="column is-5">
                <div class="media-content espacio">
                    <p class="title is-6">Empresa</p>
                    <p class="subtitle is-6">{{ machine.empresa }}</p>
                </div>
                <div class="media-content espacio">
                    <p class="title is-6">Clase</p>
                    <p class="subtitle is-6">{{ machine.clase }}</p>
                </div>
                <div class="media-content espacio">
                    <p class="title is-6">Estado</p>
                    <p class="subtitle is-6" v-if="machine.moving"><span class="green-dot espacio-derecho"></span>En movimiento</p>
                    <p class="subtitle is-6" v-else><span class="red-dot espacio-derecho"></span>Detenido</p>
                </div>
                <div class="media-content">
                    <p class="title is-6">Última actualización</p>
                    <p class="subtitle is-6">{{ fecha(machine.lastUpdate) }}</p>
                </div>
            </div>
            <div class="column is-7">
                <div class="media-content">
                    <div class="box" v-if="machine.data.general">
                        <p class="title is-5 centro">General</p>
                        <div class="columns">
                        <div class="column is-6">
                            <p>Cosechando</p>
                            <p>Batería interna</p>
                            <p>Batería vehículo</p>
                            <p>Uso Combustible</p>
                        </div>
                        <div class="column is-6">
                            <p>{{ machine.data.general.cosechando ? 'Si' : 'No' }}</p>
                            <p>{{ machine.data.general.bateriaInterna ? machine.data.general.bateriaInterna : '-'}}</p>
                            <p>{{ machine.data.general.bateriaVechiculo ? machine.data.general.bateriaVechiculo : '-'}}</p>
                            <p>{{ machine.data.general.usoCombustible ? machine.data.general.usoCombustible : '-'}}</p>
                        </div>
                        </div>
                    </div>
                    <div class="box" v-if="machine.data.clima">
                        <p class="title is-5 centro">Clima</p>
                        <div class="columns">
                        <div class="column is-6">
                            <p>Temperatura</p>
                            <p>Humedad</p>
                            <p>Dirección del viento</p>
                            <p>Velocidad del viento</p>
                        </div>
                        <div class="column is-6">
                            <p>{{ machine.data.clima.temperatura ? machine.data.clima.temperatura : '-'}}</p>
                            <p>{{ machine.data.clima.humedad ? machine.data.clima.humedad : '-'}}</p>
                            <p>{{ machine.data.clima.direccionViento ? machine.data.clima.direccionViento : '-'}}</p>
                            <p>{{ machine.data.clima.velocidadViento ? machine.data.clima.velocidadViento : '-'}}</p>
                        </div>
                        </div>
                    </div>
                    <div class="box" v-if="machine.data.operacion">
                        <p class="title is-5 centro">Clima</p>
                        <div class="columns">
                        <div class="column is-6">
                            <p>Velocidad</p>
                            <p>Presión</p>
                            <p>Producto / hectárea</p>
                            <p>Ancho</p>
                        </div>
                        <div class="column is-6">
                            <p>{{ machine.data.operacion.velocidad ? machine.data.operacion.velocidad : '-'}}</p>
                            <p>{{ machine.data.operacion.presion ? machine.data.operacion.presion : '-'}}</p>
                            <p>{{ machine.data.operacion.productoHectarea ? machine.data.operacion.productoHectarea : '-'}}</p>
                            <p>{{ machine.data.operacion.ancho ? machine.data.operacion.ancho : '-'}}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
 .espacio {
  margin-bottom: 15px;
 }
 .espacio-derecho {
  margin-right: 5px;
 }
 .centro {
   text-align: center;
 }
 .derecha {
   text-align: right;
 }
.red-dot {
  height: 15px;
  width: 15px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
}
.green-dot {
  height: 15px;
  width: 15px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
}
</style>
<script>

export default {
    name: 'MachineShow',
    props: { machine: { type: Object, required: false } },
    data () {
        return {
        }
    },
    methods: {
        fecha (d) {
            const da = new Date(d);
            return da.toLocaleString()
        }
    }
}
</script>
