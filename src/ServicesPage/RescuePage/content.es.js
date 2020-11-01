import React from 'react'
import { pricesES as prices } from '../../constants'

export default () => (
  <>
    <h1>PADI Rescue Diver</h1>
    <p>
      Las palabras que definen la experiencia Rescue Diver son: divertida y satisfactoria. Con todo, supone la oportunidad de aprender técnicas de rescate y prevención y gestión de emergencias que nos harán sentir como auténticos profesionales.
    </p>

    <h3>¿Qué se necesita para empezar?</h3>
    <p>
      Una certificación del <a href="/servicios/padi-advanced-open-water-diver">nivel de Avanzado</a> perteneciente a cualquier asociación de buceo y haber completado un <a href="/servicios/emergency-first-response">curso de primeros auxilios</a> CPR en los últimos 24 meses. La edad mínima es de 12 años.
    </p>

    <h3>¿Cuánto tiempo supone?</h3>
    <p>
      La duración habitual del curso es de 3 a 4 días.
    </p>

    <h3>¿En qué consiste?</h3>
    <p>
      El entrenamiento te preparará para prevenir posibles problemas y, si fuera necesario, controlar emergencias en el ámbito del buceo. Durante las 4 sesiones de teoría y de práctica en el agua, aprenderás técnicas de rescate bajo el agua y en superficie como el auto rescate, la manera de tratar a un buceador con pánico, cómo elaborar planes de salvamento o cómo quitar el equipo en el agua a un buceador inconsciente y darle respiración asistida, entre otras muchas.
    </p>

    <h3>¿A dónde me lleva?</h3>
    <p>
      La certificación del nivel Rescue Diver es el prerrequisito para todos los cursos <a href="https://padi.com">PADI</a> profesionales, que empiezan con el siguiente curso, el de Dive Master.
    </p>

    <h3>El pago del curso incluye</h3>
    <p>
      Todos los materiales didácticos, instrucción, equipo y certificación.
    </p>

    <p>
      Duración: de 3 a 4 días.
    </p>

    <p>
      Precio: {prices.rescue} pesos
    </p>

    <p>
      ¿Te queda alguna duda? <a href="/contacto">Pregúntanos</a>.
    </p>
  </>
)
