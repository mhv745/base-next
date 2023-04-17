import { setMetadata } from '@/src/app/metadatas'
import { empresa } from '@/src/utils/data'
import Link from 'next/link'

export const metadata = {
    ...setMetadata({
        title: 'Aviso legal',
        description: `Página de aviso legal de ${empresa.nombre}`,
    }),
    robots: 'noindex, nofollow',
}

export default function Legal() {
    return (
        <div className="container m-auto px-4 politicas">
            <h1>Aviso legal</h1>
            <h2>Información corporativa</h2>
            <p>
                Datos Legales: {empresa.nombre}, en cumplimiento de la Ley 34/2002, de 11 de julio,
                de Servicios de la Sociedad de la Información y de Comercio Electrónico CIF:{' '}
                {empresa.cif} Sede Social: {empresa.direccion}
            </p>
            <p>
                Aviso legal sobre protección de datos y/o recogida del consentimiento para el
                tratamiento de datos de carácter personal sobre sus datos Responsable:{' '}
                {empresa.nombre} Finalidades del tratamiento: Mantener comunicación con clientes,
                asociados, proveedores, empleados o informarle de novedades, ofertas comerciales
                relacionadas con nuestra actividad. Legitimación: Por ejecución de un contrato o en
                interés legítimo de {empresa.nombre} Procedencia de los datos: Los datos que
                tratamos son siempre facilitados por el interesado. Categoría de los datos:
                Información comercial y datos identificativos. Destinatarios de sus datos: datos
                personales se transferirán a los siguientes destinatarios:
            </p>
            <ol style={{ listStyleType: 'number' }}>
                <li>
                    Cualquier tercero que proporcione servicios de tratamiento de datos a{' '}
                    {empresa.nombre} para el normal desarrollo de sus funciones.
                </li>
                <li>
                    A terceras empresas, como asesorías contables, fiscales, crédito y caución, etc…
                    con fines administrativos.
                </li>
                <li>
                    El usuario acepta que todos sus datos de carácter personal sean íntegramente
                    cedidos a {empresa.nombre} desde el momento en que el usuario haya iniciado la
                    contratación del servicio de pago aplazado ofrecido por ésta última en el
                    momento de elegir la forma de pago. Esta aceptación se extiende a terceras
                    entidades que tuvieran que acceder a los ficheros para el buen fin del contrato.
                </li>
            </ol>
            <p>
                Durante cuanto tiempo almacenaremos sus datos: Hasta que nos indique lo contrario,
                dejen de ser de utilidad para el fin que lo recabamos o exista un imperativo legal
                que así lo exija. Decisiones automatizadas: No tomamos ninguna decisión de forma
                automatizada. Elaboración de perfiles: No elaboramos perfiles en base a sus datos
                personales. Correos comerciales: No enviamos correos comerciales no solicitados
                (SPAM) a empresas ni particulares obteniendo sus datos de forma fraudulenta.
            </p>
            <h2>Sobre sus derechos</h2>
            <p>Como interesado, tiene derecho a ejercer los siguientes derechos: Acceso: </p>
            <p>Tiene derecho a que le informemos de lo siguiente:</p>
            <ol style={{ listStyleType: 'number' }}>
                <li>Puede tener copia de los datos personales objeto del tratamiento. </li>
                <li>
                    Los fines del tratamiento, las categorías de datos personales que se traten y
                    las posibles comunicaciones de datos y sus destinatarios.
                </li>
                <li>
                    De ser posible, el plazo de conservación de sus datos. De no serlo, el criterio
                    para determinar ese plazo.
                </li>
                <li>
                    Del derecho a solicitar la rectificación o supresión de sus datos, la limitación
                    al tratamiento u oponerse al mismo.
                </li>
                <li>Del derecho a presentar una reclamación ante la Autoridad de Control.</li>
                <li>
                    Si se produce una transmisión internacional de datos, recibir información de las
                    garantías adecuadas.
                </li>
                <li>
                    De la existencia de decisiones automatizadas (incluyendo perfiles), la lógica
                    aplicada y la consecuencia de este tratamiento.
                </li>
            </ol>
            <p>
                Rectificación: Tiene derecho, además de rectificar los datos inexactos, a que se
                completen los datos personales incompletos, inclusive mediante una declaración
                adicional.
            </p>
            <h2>Supresión:</h2>
            <p>También conocido como “Derecho al Olvido”. Con este derecho podrá solicitarnos:</p>
            <ol style={{ listStyleType: 'number' }}>
                <li>
                    La supresión de los datos personales sin dilación indebida cuando concurra
                    alguno de los supuestos contemplados, como el tratamiento ilícito de datos o la
                    desaparición de la finalidad que motivó el tratamiento o recogida.
                </li>
                <li>
                    No obstante existen algunas excepciones. Por ejemplo, cuando prevalezca el
                    derecho de información o de expresión.
                </li>
            </ol>
            <p>
                Oposición: Mediante este derecho podrá oponerse al tratamiento de sus datos cuando:
            </p>
            <ol style={{ listStyleType: 'number' }}>
                <li>
                    Por motivos relacionados con su situación personal, debe cesar el tratamiento de
                    sus datos, salvo que se acredite un interés legítimo o sea necesario para el
                    ejercicio o defensa de reclamaciones.
                </li>
                <li>El tratamiento tenga por objeto la mercadotecnia directa.</li>
            </ol>
            <p>Limitación: Este derecho le permite:</p>
            <ol style={{ listStyleType: 'number' }}>
                <li>
                    Solicitarnos que suspendamos el tratamiento de sus datos en los siguientes
                    supuestos:
                    <ol style={{ listStyleType: 'lower-latin' }}>
                        <li>
                            Que se impugne la exactitud de los datos mientras se verifica la misma
                            por el responsable.
                        </li>
                        <li>
                            Si ha ejercitado su derecho de oposición, mientras verificamos que
                            nuestros derechos prevalezcan sobre los suyos.
                        </li>
                    </ol>
                </li>
                <li>
                    Solicitarnos que conservemos sus datos cuando: a) El tratamiento de datos sea
                    ilícito y se oponga a la supresión de sus datos y solicite en su lugar la
                    limitación de su uso. b) Ya no necesitemos sus datos para los fines del
                    tratamiento, pero Ud. los necesite para la formulación, ejercicio o defensa de
                    reclamaciones
                </li>
            </ol>
            <p>
                Portabilidad: Este derecho le permite recibir sus datos en un formato estructurado
                de uso común y lectura mecánica y poder transmitirlo a otro responsable, siempre que
                sea técnicamente posible.
            </p>
            <p>
                No ser objeto de decisiones automatizadas: Tiene derecho a no ser objeto de
                decisiones basadas únicamente en el tratamiento automatizado, incluida la
                elaboración de perfiles, que produzca efectos jurídicos o le afecte. Se exceptúa lo
                anterior cuando:
            </p>
            <ol style={{ listStyleType: 'number' }}>
                <li>Sea necesario para la elaboración o ejecución de un contrato.</li>
                <li>
                    Esté permitido por el derecho de la U.E. o de los estados miembros con medidas
                    adecuadas para salvaguardar sus derechos y libertades.
                </li>
                <li>Tengamos su consentimiento.</li>
            </ol>
            <p>
                Reclamar ante la autoridad de control: Si entiende que sus derechos no son
                debidamente respetados, puede dirigirse a la Agencia Española de Protección de
                Datos.
            </p>
            <h2>{empresa.nombre}</h2>
            <p>
                El usuario acepta que todos sus datos de carácter personal sean íntegramente cedidos
                a {empresa.nombre} desde el momento en que el usuario haya iniciado la contratación
                del servicio de pago aplazado ofrecido por ésta última en el momento de elegir la
                forma de pago.
            </p>
            <p>
                Esta aceptación se extiende a terceras entidades que tuvieran que acceder a los
                ficheros para el buen fin del contrato.
            </p>
            <p>
                Para poder ejercitar estos derechos sólo tiene que enviarnos un email o mandarnos
                una carta, identificándose debidamente mediante copia de su DNI o carné de conducir.
                Deberá de especificar qué derecho o derechos desea ejercer y su motivación. Recibirá
                contestación con nuestra resolución en el plazo legalmente establecido.
            </p>
            <p>
                Si usted no desea recibir nuestra información, póngase en contacto con nosotros
                enviando un correo electrónico a la siguiente dirección:
                <Link href={`mailto:${empresa.email}`}>{empresa.email}</Link>
            </p>
        </div>
    )
}
