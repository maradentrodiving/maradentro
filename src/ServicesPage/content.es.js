import React from 'react'
import { es as routes } from '../routes'
// import styles from './ServicesPage.module.css'

const { servicesPagePath } = routes

export default () => (
  <>
    <h1>Servicios</h1>

    <h2>Discover Scuba Diving o bautismo de buceo</h2>
    <p>
      ¿Quisieras saber cómo es respirar bajo el agua, pero no estás seguro? Cuenta con nosotros para vivir esta experiencia inolvidable. ¿Y dónde mejor sino en Mahahual?
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.dsd}`}>Leer más</a>
    </p>

    <h2>Cursos PADI</h2>

    <h3>PADI Open Water Diver</h3>
    <p>
      El curso PADI OWD es el más popular del mundo del buceo. Te permitirá descender con un guía o, por tu cuenta con un compañero, hasta una profundidad máxima de 18 metros. A nivel internacional y de por vida. ¡Tu aventura en el buceo SCUBA comienza aquí!
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.ow}`}>Leer más</a>
    </p>

    <h3>PADI Advanced Open Water Diver</h3>
    <p>
      Cinco escenarios sugerentes, cinco inmersiones en las que los arrecifes de Mahahual te harán enfrentarte a nuevas emociones. Desciende más profundo, bucea de noche, déjate llevar por la corriente... Sin duda, el PADI AOW es un curso muy atractivo.
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.aow}`}>Leer más</a>
    </p>

    <h3>PADI Rescue Diver</h3>
    <p>
      Quien decide tomar un PADI Rescue Diver está dando un paso importante que denota confianza en sí mismo como buceador. El curso nos enseña a mirar más allá de nosotros y preocuparnos por la seguridad de nuestros compañeros de inmersión.
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.rescue}`}>Leer más</a>
    </p>

    <h3>Emergency First Response (EFR)</h3>
    <p>
      Este curso reúne técnicas de resucitación cardio pulmonar (CPR por sus siglas en inglés), y un entrenamiento de primeros auxilios. Un paso grande en tu entrenamiento.
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.efr}`}>Leer más</a>
    </p>

    <h3>Especialidad de buceo profundo</h3>
    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.profundo}`}>Leer más</a>
    </p>
  </>
)
