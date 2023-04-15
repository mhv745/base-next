import { setMetadata } from '@/src/app/metadatas'
import Link from 'next/link'
import { informacion } from '../informacionEmpresa'

export const metadata = {
    ...setMetadata({
        title: 'Políticas de privacidad',
        description: `Página de políticas de privacidad de ${informacion.nombre}`,
    }),
    robots: 'noindex, nofollow',
}

export default function Legal() {
    return (
        <div className="container m-auto px-4 politicas">
            <h1>Políticas de privacidad</h1>
            <h2>Política de cookies</h2>
            <p>
                Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando
                visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su
                visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar
                información de carácter técnico, preferencias personales, personalización de
                contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de
                usuario, etc.
            </p>
            <p>
                El objetivo de la cookie es adaptar el contenido de la web a su perfil y
                necesidades, sin cookies los servicios ofrecidos por cualquier página se verían
                mermados notablemente. Si desea consultar más información sobre qué son las cookies,
                qué almacenan, cómo eliminarlas, desactivarlas, etc., le rogamos se dirija a este
                enlace.
            </p>
            <h2>Cookies utilizadas en este sitio web</h2>
            <p>
                Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a
                detallar el uso de cookies que hace esta web con el fin de informarle con la máxima
                exactitud posible.
            </p>
            <p>Este sitio web utiliza las siguientes cookies propias:</p>
            <p>
                Cookies de sesión, para garantizar que los usuarios que escriban comentarios en el
                blog sean humanos y no aplicaciones automatizadas. De esta forma se combate el spam.
                Este sitio web utiliza las siguientes cookies de terceros:
            </p>
            <p>
                Google Analytics: Almacena cookies para poder elaborar estadísticas sobre el tráfico
                y volumen de visitas de esta web. Al utilizar este sitio web está consintiendo el
                tratamiento de información acerca de usted por Google. Por tanto, el ejercicio de
                cualquier derecho en este sentido deberá hacerlo comunicando directamente con
                Google. Redes sociales: Cada red social utiliza sus propias cookies para que usted
                pueda pinchar en botones del tipo Me gusta o Compartir.
            </p>
            <h2>Desactivación o eliminación de cookies</h2>
            <p>
                En cualquier momento podrá ejercer su derecho de desactivación o eliminación de
                cookies de este sitio web. Estas acciones se realizan de forma diferente en función
                del navegador que esté usando. Aquí le dejamos una guía rápida para los navegadores
                más populares.
            </p>
            <h2>Notas adicionales</h2>
            <p>
                Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni
                de la veracidad de las políticas de privacidad que puedan tener los terceros
                mencionados en esta política de cookies.
            </p>
            <p>
                Los navegadores web son las herramientas encargadas de almacenar las cookies y desde
                este lugar debe efectuar su derecho a eliminación o desactivación de las mismas. Ni
                esta web ni sus representantes legales pueden garantizar la correcta o incorrecta
                manipulación de las cookies por parte de los mencionados navegadores.
            </p>
            <p>
                En algunos casos es necesario instalar cookies para que el navegador no olvide su
                decisión de no aceptación de las mismas.
            </p>
            <p>
                En el caso de las cookies de Google Analytics, esta empresa almacena las cookies en
                servidores ubicados en Estados Unidos y se compromete a no compartirla con terceros,
                excepto en los casos en los que sea necesario para el funcionamiento del sistema o
                cuando la ley obligue a tal efecto.
            </p>
            <p>
                Según Google no guarda su dirección IP. Google Inc. es una compañía adherida al
                Acuerdo de Puerto Seguro que garantiza que todos los datos transferidos serán
                tratados con un nivel de protección acorde a la normativa europea. Puede consultar
                información detallada a este respecto en este{' '}
                <Link
                    title="trato de protección"
                    rel="nofollow"
                    target="_blank"
                    href="http://safeharbor.export.gov/companyinfo.aspx?id=16626">
                    enlace
                </Link>
                .
            </p>
            <p>
                Si desea información sobre el uso que Google da a las cookies le adjuntamos este
                otro{' '}
                <Link
                    title="Sobre el uso de las cookies Google"
                    rel="nofollow"
                    target="_blank"
                    href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es&csw=1">
                    {' '}
                    enlace
                </Link>
            </p>
            <p>
                Para cualquier duda o consulta acerca de esta política de cookies no dude en
                comunicarse con nosotros a través de la sección de contacto.
            </p>
        </div>
    )
}
