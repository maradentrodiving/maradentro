import React from 'react'
import { pricesES as prices } from '../../constants'

export default () => (
  <>
    <h1>Emergency First Response (EFR)</h1>
    <p>
      La mayoría de los buceadores realizan el EFR para cumplir con los requisitos previos del curso <a href="/servicios/padi-rescue-diver">Rescue Diver</a>. Luego, muchos de ellos lo encuentran útil e importante para la vida cotidiana, al sentirse preparados y con confianza para ayudar en caso de algún accidente.
    </p>

    <h3>¿En qué consiste?</h3>
    <p>
      Una vez que el instructor supervisa el estudio independiente realizado por el alumno, se pasa a la parte práctica en la que una serie de escenarios simulados requerirán la aplicación de las distintas técnicas.
    </p>

    <p>
      Aprenderás a cuidar a un paciente del mismo modo que los médicos profesionales, pero a un nivel personal. Se trata de un curso de primeros auxilios con reconocimiento internacional que debe ser refrescado cada 2 años.
    </p>

    <p>
      Adicionalmente, tienes la opción de apuntarte a un curso de administrador de oxígeno de emergencia.
    </p>

    <h3>El pago del curso incluye</h3>
    <p>
      Todos los materiales didácticos, instrucción, equipo y la certificación.
    </p>

    <p>
      <strong>Duración:</strong> 1 día.
    </p>

    <p>
      <strong>Precio:</strong> {prices.efr} pesos.
    </p>
  </>
)
