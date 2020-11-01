import React from 'react'
import { en as routes } from '../routes'
// import styles from './ServicesPage.module.css'

const { mahahualPagePath } = routes

export default () => (
  <>
    <h1>Mahahual</h1>

    <h3>¿Qué podrás ver?</h3>
    <p>
      Con una visibilidad típica de 30 metros y una temperatura promedio de 28 grados C, la mayoría de nuestros sitios no presentan complicaciones técnicas para los buceadores menos experimentados y resultan ideales si quieres iniciarte en la aventura del buceo realizando un bautismo o el curso Open Water Diver. Pero hay excepciones.
    </p>

    <p>
      <a href={`${mahahualPagePath.path}/${mahahualPagePath.pages.quePodrasVer}`}>Read more</a>
    </p>

    <h3>Buceo en la Gran Barrera Maya</h3>
    <p>
      <a href={`${mahahualPagePath.path}/${mahahualPagePath.pages.divingCostaMaya}`}>Leer más</a>
    </p>

    <h3>Buceo nocturno</h3>
    <p>
      Con la llegada de la oscuridad el ritmo de la vida en el arrecife cambia drásticamente. Los peces herbívoros, predominantes durante las luminosas horas del día, buscan refugio entre las oquedades del coral para no convertirse en presa y el paisaje submarino se queda vacío de cardúmenes multicolores. Cae la noche en Mahahual y con ella los depredadores comienzan a merodear en busca de alimento en medio de una negrura líquida.
    </p>

    <p>
      <a href={`${mahahualPagePath.path}/${mahahualPagePath.pages.nocturno}`}>Read more</a>
    </p>

    <h3>Renta de yate</h3>
    <p>
      Imagina disfrutar de un arrecife solo para ti y tu grupo de compañeros. Snorkel, buceo, travesías por la Costa Maya.
    </p>

    <p>
      <a href={`${mahahualPagePath.path}/${mahahualPagePath.pages.yate}`}>Leer más</a>
    </p>
  </>
)
