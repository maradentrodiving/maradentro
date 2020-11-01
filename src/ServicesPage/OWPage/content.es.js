import React from 'react'
import { pricesES as prices, instagramURL } from '../../constants'

export default () => (
  <>
    <h1>PADI Open Water Diver</h1>
    <p>
      Bienvenido, vamos a darte una sólida formación como buceador. Aprenderás mucho y de la manera más segura y divertida. Una vez que estés certificado, sabrás cómo planificar las inmersiones por ti mismo, cuidar de tu equipo, aplicar los protocolos de seguridad, bucear eficientemente y respetar el ecosistema submarino. Un mundo de posibilidades se abre para ti en <a href={instagramURL}>los arrecifes</a> más espectaculares del Caribe mexicano
    </p>

    <p>
      ¿Qué se necesita para empezar?
    </p>

    <ul>
      <li>Buen estado de salud. Un certificado médico es preferible, pero no obligatorio.</li>
      <li>Edad mínima de 10 años, en caso del Junior Open Water.</li>
    </ul>

    <h3>¿Cuánto tiempo llevará?</h3>
    <p>
      Todos los cursos <a href="https://padi.com">PADI</a> se basan en el avance del estudiante, por lo que no hay un tiempo máximo. En Mar Adentro Diving damos una atención personalizada, por lo que un promedio de 3 días es suficiente para completarlo de manera satisfactoria.
    </p>

    <h3>¿De qué se trata?</h3>
    <p>
      El curso se divide en teoría y práctica. La primera supone el estudio de un manual y visionado de vídeos. La práctica se compone de A) ejercicios en el agua poco profunda a pie de playa que ayudan a familiarizarse con el equipo y aprender las técnicas de seguridad y B) cuatro inmersiones en la Gran Barrera Maya: dos a 12 metros y dos a 18 metros.
    </p>

    <h3>¿Qué incluye?</h3>
    <p>
      Todos los materiales de estudio, instrucción, equipo y certificación.
    </p>

    <p>
      <strong>Duración:</strong> 3 días promedio.
    </p>

    <p>
      <strong>Precio:</strong> {prices.ow} pesos.
    </p>
  </>
)
