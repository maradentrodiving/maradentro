import React from 'react'
import { pricesES as prices } from '../../constants'

export default () => (
  <>
    <h1>Buceo nocturno</h1>
    <p>
      Es precisamente esa sensación -sumergirse en la oscuridad- la que hace particularmente emocionante al buceo nocturno. Como humanos experimentamos un doble reto: respirar bajo el agua y movernos en la oscuridad, pues nuestra herencia genética nos alerta desde el subconsciente que lo mismo podemos ser cazadores o presa. Sin embargo, no hay peligro real mientras la excitación de la caza se mantiene, esta vez en forma de lo que seamos capaz de descubrir con el haz de nuestras linternas, apenas un paréntesis entre la nada y la nada.
    </p>

    <p>
      Como por ejemplo los pulpos, uno de los trofeos más apreciados ya que son difíciles de sorprender y si sucede, darán todo un espectáculo de astucia, cambiando constantemente de forma y color. También encontraremos cangrejos rey, confiados en su apariencia de roca musgosa de la que penden fuertes tenazas. O langostas y pequeños camarones, caracolas arrastradas por el arenal por ermitaños, estrellas de mar de aspecto extraterrestre encaramadas sobre las gorgonias a las que devoran… las posibilidades son más numerosas de lo que cabría imaginarse. Y como atractivo garantizado un arrecife de colores más vivos y variados de lo que puedan apreciarse durante el día; no solo lo iluminamos con luz blanca, sino que a la noche los pólipos del coral salen a alimentarse, dándole un aspecto impresionante.
    </p>

    <p>
      ¿Te animas a descubrir el lado oscuro del arrecife? Antes de la puesta del sol preparamos los equipos, llegamos caminando al fin del muelle y desde allí solo un paso de gigante y un nado en superficie nos separa de una experiencia inolvidable.b
    </p>

    <h3>Precio</h3>
    <p>
      {prices.nocturno} (incluye equipo, menos linterna: {prices.linterna} pesos).
    </p>

    <h3>Restricciones</h3>
    <p>
      Mínimo dos personas
    </p>

    <p>
      ¿Quieres hacer un buceo nocturno pero no tienes el entrenamiento? Te <a href="/contacto">explicamos</a> cómo.
    </p>
  </>
)
