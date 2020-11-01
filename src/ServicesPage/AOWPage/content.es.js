import React from 'react'
import { pricesES as prices } from '../../constants'

export default () => (
  <>
    <h1>PADI Advanced Open Water Diver</h1>
    <p>
      Y lo mejor de todo es que se aprende buceando: la práctica prevalece sobre la teoría. Realizarás cinco inmersiones de entrenamiento que te llevarán un poco más lejos, al confrontarte con nuevas situaciones que antes te parecían límite, o al ponerte a prueba con tareas técnicas, como la búsqueda y recuperación de un objeto. Al finalizar el curso te sentirás un buceador más experimentado, lo que aumentará tu confianza.
    </p>

    <p>
      ¿Qué se necesita para empezar?
    </p>

    <ul>
      <li>Estar certificado como OWD</li>
      <li>Edad mínima: 15 años (12 años, para los Junior AOW)</li>
    </ul>

    <h3>¿Cuánto tiempo lleva?</h3>
    <p>
      De 2 a 3 días.
    </p>

    <h3>¿En qué consiste?</h3>
    <p>
      En cinco buceos de entrenamiento en la Gran Barrera Maya. Dos de ellos son obligatorios: Navegación subacuática y el Buceo profundo (a 30 metros). Los tres restantes son a elección del estudiante. Dadas las condiciones de Costa Maya, nuestras sugerencias incluyen:
    </p>

    <ul>
      <li>Identificación de peces. ¿Has visto un pez todavía desconocido en el Caribe mexicano? Fantástico, ponle un nombre.</li>
      <li>Buceador multinivel. Aprende a optimizar tu valioso tiempo de fondo.</li>
      <li>Buceo nocturno. Disfruta de un aspecto insospechado del arrecife mientras te sientes como en la Luna.</li>
      <li>Desarrollo de la flotabilidad. Controla tus cambios de profundidad usando solo los pulmones.</li>
      <li>Búsqueda y recuperación. ¿Perdiste algo en el fondo? No hay problema.</li>
    </ul>

    <p>
      #MADdivesUcrazy
    </p>

    <h3>Adventure Diver</h3>
    <p>
      Si consideras que apuntarte a un curso Advanced es demasiado para tus vacaciones en Mahahual, existe la posibilidad de que completes las 5 inmersiones de aventura del curso poco a poco. Y con solo hacer 3, obtienes la certificación de Adventure Diver.
    </p>

    <p>
      El sistema <a href="https://padi.com">PADI</a> te permite ir uniendo buceos según te convenga. ¿Te apetece sentir la narcosis al bucear profundo? ¿Prefieres hacer un listado de los peces existentes en la Costa Maya? Eres tú quien decide.
    </p>

    <h3>El curso incluye</h3>
    <p>
      Todos los materiales, instrucción, equipo, manual y certificación.
    </p>

    <h3>Duración</h3>
    <p>
      De 2 a 3 días.
    </p>

    <h3>Precios</h3>
    <p>
      Advanced Open Water: {prices.aow} pesos
    </p>

    <p>
      Adventure Diver: {prices.advd} pesos
    </p>

    <h2>¿Te queda alguna duda? <a href="/contacto">Pregúntanos</a>.</h2>
  </>
)
