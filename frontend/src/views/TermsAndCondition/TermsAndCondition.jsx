import React from "react";
import TopBar from "../../componentes/TopBar/TopBar";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
const TermsAndCondition = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <div className="flex justify-center items-center">
        <div className="max-w-[1100px] px-6 py-6 space-y-6">
          <h1 className="text-xl">Terminos y condiciones</h1>
          <p className="text-left text-gray-600">
            Política de Privacidad - Zuch Properties Última Actualización:
            17/11/2023 <br/><br/>En Zuch Properties, la privacidad y seguridad de nuestros
            usuarios son de máxima importancia. Esta Política de Privacidad
            describe cómo recopilamos, usamos y protegemos la información
            personal proporcionada por los usuarios de nuestros servicios. <br/><br/><br/>1.
            Información que Recopilamos: <br/><br/>1.1. Información Personal: Podemos
            recopilar información personal, como nombres, direcciones de correo
            electrónico, números de teléfono, y otra información relevante para
            brindar nuestros servicios. <br/><br/>1.2. Información de Uso: Recopilamos
            información sobre la forma en que los usuarios interactúan con
            nuestra plataforma, incluidas las páginas visitadas, el tiempo de
            visita y otras estadísticas relevantes. <br/><br/><br/>2. Uso de la Información:
            <br/><br/>2.1. Mejora de Servicios: Utilizamos la información recopilada para
            mejorar la calidad de nuestros servicios, personalizar la
            experiencia del usuario y optimizar nuestras operaciones. <br/><br/>2.2.
            Comunicación: Podemos utilizar la información de contacto
            proporcionada para enviar actualizaciones, noticias relevantes y
            responder a consultas de usuarios. <br/><br/><br/>3. Compartir Información: <br/><br/>3.1.
            Con Brokers y Clientes: Zuch Properties facilita la conexión entre
            brokers y clientes, compartiendo información relevante para
            facilitar estas conexiones. <br/><br/>3.2. Terceros de Confianza: Podemos
            compartir información con terceros de confianza que nos ayudan a
            operar y mejorar nuestros servicios. <br/><br/><br/>4. Seguridad de la Información:
            <br/><br/> 4.1. Implementamos medidas de seguridad adecuadas para proteger la
            información personal de nuestros usuarios. Sin embargo, ninguna
            transmisión por Internet o almacenamiento electrónico es
            completamente segura.<br/><br/><br/> 5. Cookies y Tecnologías Similares: <br/><br/>5.1.
            Utilizamos cookies y tecnologías similares para mejorar la
            experiencia del usuario, realizar análisis y personalizar el
            contenido. Al utilizar nuestros servicios, aceptas el uso de estas
            tecnologías. <br/><br/><br/>6. Acceso y Control de la Información: <br/><br/>6.1. Los
            usuarios tienen derecho a acceder, corregir o eliminar su
            información personal. Pueden gestionar sus preferencias de
            comunicación a través de la configuración de la cuenta. <br/><br/><br/>7. Cambios
            en la Política de Privacidad: <br/><br/>7.1. Nos reservamos el derecho de
            actualizar esta Política de Privacidad. Cualquier cambio se
            notificará a los usuarios a través de nuestro sitio web u otros
            medios apropiados. <br/><br/><br/>8. Contáctenos: <br/><br/>8.1. Si tienes preguntas o
            inquietudes sobre esta Política de Privacidad, contáctanos a través
            de zuchproperties@gmail.com. <br/><br/> Al utilizar los servicios de
            Zuch Properties, aceptas los términos de esta Política de
            Privacidad. <br/>
          </p>
          <p className="text-gray-700 text-center"><br/>Atentamente, Santiago Antúnez Muñoz CEO, Zuch Properties</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndCondition;
