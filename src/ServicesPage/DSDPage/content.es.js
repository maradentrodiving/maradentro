import React from 'react'
import { pricesES as prices, tripAdvisorURL, instagramURL } from '../../constants'

export default () => (
  <>
    <h1>Bautismo de buceo</h1>
    <p>
      En el bautismo de buceo, o DSD (Discover Scuba Diving), aprenderás ejercicios básicos, te familiarizarás con el equipo de buceo, te sumergirás en <a href={instagramURL}>los arrecifes de coral</a> más hermosos de Quintana Roo y… ¡querrás repetir!
    </p>

    <p>
      EL DSD no es un curso, sino el entrenamiento mínimo necesario para bucear sin estar certificado y es ideal si no se dispone de tiempo para el <a href="/servicios/padi-open-water-diver">Open Water</a> o solo se quiere probar el buceo con SCUBA. Y si te gusta y quieres hacerte buceador, el DSD te servirá como parte del curso al continuar con nosotros u otro centro PADI.
    </p>

    <p>
      Para el bautismo solo precisas:
    </p>

    <ul>
      <li>Tener 10 años o más.</li>
      <li>Un aceptable estado de salud.</li>
      <li>Saber nadar es aconsejable, pero no necesario.</li>
    </ul>

    <p>
      Recibirás una introducción teórica de la fisiología del buceo y sus reglas (cómo respirar, cómo compensar, señales subacuáticas, cómo moverse…), aprenderás el funcionamiento del equipo SCUBA y, en la playa de Mahahual, en agua donde se hace pie, realizarás 3 ejercicios que te ayudarán a sentirte seguro.
    </p>

    <p>
      Después nuestra embarcación te llevará en cinco minutos a una hermosa sección del arrecife, donde disfrutarás de la inmersión bajo el cuidado constante de tu instructor. ¡Prepárate para descubrir un mundo nuevo y fascinante!
    </p>

    <p>
      <a href={tripAdvisorURL}>#MADdivesUcrazy</a>, si te queda alguna duda, <a href="/contacto">contácatanos</a>.
    </p>

    <h3>¿Cuánto dura?</h3>
    <p>
      Sobre 3 horas. La inmersión en sí depende del consumo de aire de cada participante, siendo 45’ el promedio.
    </p>

    <h3>¿Cuánto cuesta?</h3>
    <p>
      ${prices.dsd} pesos.
    </p>

    <p>
      Si se desea hacer un segundo buceo (Repeat SCUBA), ${prices.dsdRepeat} pesos.
    </p>
  </>
)
