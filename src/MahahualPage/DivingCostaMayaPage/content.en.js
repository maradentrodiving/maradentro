import React from 'react'
import { pricesES as prices } from '../../constants'
import mahahualDiveSites from './mahahual-dive-sites.jpg'
// import styles from './DivingCostaMayaPage.module.css'

export default () => (
  <>
    <img src={mahahualDiveSites} />

    <h1>Inmersiones en la Gran Barrera Maya/Mahahual</h1>
    <p>
      Consideramos buceo local a un segmento de barrera arrecifal que se extiende a lo largo de10 kms de costa y que comprende hasta seis paisajes subacuáticos distintos y tres rangos de profundidad.
    </p>

    <p>
      Todos los buceos (salvo el nocturno) son desde embarcación. La ratio máxima DM/buceador es 1:5.
    </p>

    <p>
      Equipo completo incluido, salvo computadora de buceo y linterna.
    </p>

    <h3>Precios:</h3>
    <p>
      1 tanque: {prices.unTanque} pesos.
    </p>

    <p>
      2 tanques: {prices.dosTanques} pesos.
    </p>

    <p>
      3 tanques: {prices.tresTanques} pesos.
    </p>

    <p>
      4 tanques: {prices.cuatroTanques} pesos.
    </p>

    <p>
      Pack de 6 tanques: {prices.cuatroTanques} pesos.
    </p>

    <p>
      1 tanque en buceo nocturno: {prices.nocturno} pesos, linterna {prices.linterna}.
    </p>
  </>
)
