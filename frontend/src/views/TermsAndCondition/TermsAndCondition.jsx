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
          <h1 className="text-xl">Términos y Condiciones</h1>
          <p className="text-left text-gray-600">
          Términos y Condiciones - Zuch Properties Última Actualización:
            17/11/2023 <br/><br/>Bienvenido a Zuch Properties, la
            plataforma que facilita la conexión entre clientes y brokers en el
            mundo inmobiliario. Antes de utilizar nuestros servicios, es
            importante que leas y comprendas nuestros términos y condiciones. Al
            acceder y utilizar nuestro sitio web o servicios, aceptas estar
            legalmente vinculado por estos términos. <br/><br/>1. Servicios de Zuch
            Properties: <br/><br/>1.1. Zuch Properties actúa como intermediario digital,
            facilitando la conexión entre clientes y brokers en el ámbito
            inmobiliario. <br/><br/>1.2. Nuestros servicios incluyen marketing digital,
            promoción de propiedades, y la creación de conexiones estratégicas
            entre compradores y vendedores. <br/><br/>2. Responsabilidades del Usuario:
            <br/><br/>2.1. Al utilizar Zuch Properties, aceptas utilizar los servicios de
            manera ética y legal. <br/><br/>2.2. Eres responsable de cualquier contenido
            que publiques o compartas a través de nuestra plataforma. <br/><br/>3.
            Relación con Brokers y Clientes: <br/><br/>3.1. Zuch Properties no es un
            agente inmobiliario ni un corredor. No somos responsables de las
            transacciones entre brokers y clientes. <br/><br/>3.2. Zuch Properties se
            reserva el derecho de modificar o retirar la conexión entre
            cualquier usuario, broker o cliente, si se considera que viola estos
            términos. <br/><br/>4. Comisiones y Pagos: <br/><br/>4.1. Zuch Properties puede cobrar
            comisiones por servicios específicos. Estos detalles se
            especificarán claramente antes de la utilización del servicio. <br/><br/>4.2.
            Los pagos deben realizarse según los términos acordados. Zuch
            Properties no se responsabiliza de las transacciones financieras
            entre brokers y clientes. <br/><br/>5. Privacidad y Seguridad: <br/><br/>5.1. Zuch
            Properties se compromete a proteger la privacidad de los usuarios.
            Consulta nuestra Política de Privacidad para obtener información
            detallada. <br/><br/>5.2. Aunque implementamos medidas de seguridad, no
            podemos garantizar la seguridad completa de la información
            transmitida a través de nuestra plataforma. <br/><br/>6. Terminación de
            Cuenta: <br/><br/>6.1. Zuch Properties se reserva el derecho de suspender o
            cerrar cuentas que violen estos términos y condiciones. <br/><br/>6.2. Puedes
            cerrar tu cuenta en cualquier momento, sujeto a las obligaciones
            contractuales existentes. Estos términos y condiciones pueden
            actualizarse periódicamente. Es responsabilidad del usuario revisar
            regularmente los términos actuales. Al continuar utilizando Zuch
            Properties después de cualquier cambio, aceptas los términos
            modificados. Si tienes alguna pregunta o inquietud, contáctanos a
            través de: Zuchproperties@gmail.com
          </p>
          <p className="text-gray-700 text-center">
            <br />
            Atentamente, Santiago Antúnez Muñoz CEO, Zuch Properties
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndCondition;
