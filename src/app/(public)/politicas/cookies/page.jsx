import { setMetadata } from '@/src/app/metadatas'
import { empresa } from '@/utils/data'

export const metadata = {
    ...setMetadata({
        title: 'Políticas de cookies',
        description: `Página de políticas de cookies de ${empresa.nombre}`,
    }),
    robots: 'noindex, nofollow',
}

export default function Legal() {
    return (
        <div className="container m-auto px-4 politicas">
            <h1>Políticas de cookies</h1>
            <h2>Condiciones Legales</h2>

            <p>
                De acuerdo con la normativa vigente en materia de protección de datos así como en
                materia de servicios de la sociedad de la información y de comercio electrónico, el
                usuario acepta que los datos personales aportados en el momento de su registro, o
                cualquier otro facilitado a {empresa.nombre} para su acceso a algunos de los
                servicios del portal web (tienda, suscripción a foros, chats, concursos…), sean
                incorporados a ficheros titularidad de esta Asociación, con la finalidad de
                facilitar la prestación de los servicios solicitados, para la correcta
                identificación de los usuarios que solicitan servicios personalizados en el portal,
                para la realización de estudios estadísticos de los usuarios registrados en el
                portal que permitan diseñar mejoras en los servicios prestados, para la gestión de
                tareas básicas de administración, así como para mantenerle informado, bien por
                correo electrónico bien por cualquier otro medio, de novedades, relacionadas con{' '}
                {empresa.nombre}.
            </p>

            <p>
                En el caso de comunicaciones a través de correo electrónico o medio equivalente, el
                usuario presta su consentimiento expreso para el envío de publicidad a través de
                dicho medio.
            </p>

            <p>
                {empresa.nombre} se compromete al cumplimiento de su obligación de secreto de los
                datos de carácter personal y de su deber de tratarlos con confidencialidad, y asume,
                a estos efectos, las medidas de índole técnica, organizativa y de seguridad
                necesarias para evitar su alteración, pérdida, tratamiento o acceso no autorizado,
                de acuerdo con lo establecido en la Ley Orgánica 15/1999 de 13 de diciembre, de
                Protección de Datos de Carácter Personal, y demás legislación aplicable.
            </p>

            <p>
                El usuario responderá, en cualquier caso, de la veracidad de los datos facilitados,
                reservándose {empresa.nombre} el derecho a excluir de los servicios registrados a
                todo usuario que haya facilitado datos falsos, sin perjuicio de las demás acciones
                que procedan en Derecho.
            </p>

            <p>
                Cualquier usuario registrado puede en cualquier momento ejercer el derecho a
                acceder, rectificar y, en su caso, cancelar sus datos de carácter personal
                suministrados mediante petición escrita dirigida a {empresa.nombre}.
            </p>

            <h2>Cookies</h2>

            <p>
                El acceso a este sitio puede implicar la utilización de cookies. Las cookies son
                pequeñas cantidades de información que se almacenan en el navegador utilizado por
                cada usuario para que el servidor recuerde cierta información que posteriormente
                pueda utilizar. Esta información permite identificarle a usted como un usuario
                concreto y permite guardar sus preferencias personales, así como información técnica
                como puedan ser visitas o páginas concretas que visite. Aquellos usuarios que no
                deseen recibir cookies o quieran ser informados antes de que se almacenen en su
                ordenador, pueden configurar su navegador a tal efecto.
            </p>

            <p>
                La mayor parte de los navegadores de hoy en día permiten la gestión de las cookies
                de 3 formas diferentes:
            </p>
            <ol style={{ listStyleType: 'number' }}>
                <li>Las cookies no se aceptan nunca.</li>
                <li>El navegador pregunta al usuario si se debe aceptar cada cookie.</li>
                <li>Las cookies se aceptan siempre.</li>
            </ol>
            <p>
                El navegador también puede incluir la posibilidad de especificar mejor qué cookies
                tienen que ser aceptadas y cuáles no.{' '}
            </p>

            <p>
                En concreto, el usuario puede normalmente aceptar alguna de las siguientes opciones:
                rechazar las cookies de determinados dominios; rechazar las cookies de terceros;
                aceptar cookies como no persistentes (se eliminan cuando el navegador se cierra);
                permitir al servidor crear cookies para un dominio diferente. Además, los
                navegadores pueden también permitir a los usuarios ver y borrar cookies
                individualmente.
            </p>

            <h2>Web Beacons</h2>

            <p>
                Este sitio puede albergar también web beacons (también conocidos por web bugs). Los
                web beacons suelen ser pequeñas imágenes de un pixel por un pixel, visibles o
                invisibles colocados dentro del código fuente de las páginas web de un sitio. Los
                Web beacons sirven y se utilizan de una forma similar a las cookies.{' '}
            </p>

            <p>
                Además, los web beacons suelen utilizarse para medir el tráfico de usuarios que
                visitan una página web y poder sacar un patrón de los usuarios de un sitio.
            </p>

            <h2>Terceros</h2>

            <p>
                En algunos casos, compartimos información sobre los visitantes de este sitio de
                forma anónima o agregada con terceros como puedan ser anunciantes, patrocinadores o
                auditores con el único fin de mejorar nuestros servicios. Todas estas tareas de
                procesamiento serán reguladas según las normas legales y se respetarán todos sus
                derechos en materia de protección de datos conforme a la regulación vigente.
            </p>

            <p>
                Este sitio mide el tráfico con diferentes soluciones que pueden utilizar cookies o
                web beacons para analizar lo que sucede en nuestras páginas.
            </p>

            <p>
                Este sitio también puede albergar publicidad propia, de afiliados, o de redes
                publicitarias. Esta publicidad se muestra mediante servidores publicitarios que
                también utilizan cookies para mostrar contenidos publicitarios afines a los
                usuarios. Cada uno de estos servidores publicitarios dispone de su propia política
                de privacidad, que puede ser consultada en sus propias páginas web.
            </p>
        </div>
    )
}
