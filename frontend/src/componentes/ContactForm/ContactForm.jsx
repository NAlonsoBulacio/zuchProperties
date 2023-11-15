import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });
  const [success, setSuccess] = useState('false')
  useEffect(() => {
    setSuccess(false);
  }, []);
  const serviceId = "service_d3be1jm";
  const templateId = "template_s5qu5dh";
  const apiKey = "2MjSYyOi2hn-e8l4w";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(serviceId, templateId, formData, apiKey).then(
      (response) => {
        console.log("Correo electrónico enviado con éxito", response);
        // Puedes mostrar un mensaje de éxito o redirigir al usuario a una página de confirmación.
      },
      (error) => {
        console.error("Error al enviar el correo electrónico", error);
        // Puedes mostrar un mensaje de error al usuario.
      }
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    });
    alert("¡Mensaje enviado exitosamente!");
    setSuccess(true)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="justify-center items-center h-auto md:h-screen max-w-[1600px] shadow-lg md:shadow-xl"
    >
      <div className="py-0 md:py-4">
        <div className="px-8 w-full ">
          <h1
            className="font-outfit-800 text-center md:text-left text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            style={{ color: "#1f1f1f" }}
          >
            CONTACTANOS
          </h1>
        </div>
        <div className="ml-0 md:px-8">
          <p
            className="font-roboto-500 font-bold text-center md:text-left text-lg md:text-2xl"
            style={{ color: "#001659" }}
          >
            Para recibir el mejor asesoramiento para tu próxima obra de
            construcción
          </p>
        </div>
        <div className="w-full max-w-6xl p-8 font-roboto-300">
          <div className="sm:flex pr-4">
            <div className="w-full sm:w-1/2 mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-left font-bold text-lg"
                style={{ color: "#1daaba" }}
              >
                ¿Cuál es tu nombre y apellido?
              </label>
              <input
                className="w-full bg-gray-200 rounded-md"
                style={{ padding: "16px" }}
                placeholder="Ingresá tu nombre y apellido"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full sm:w-1/2 ml-0 sm:ml-4 mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-left font-bold text-lg"
                style={{ color: "#1daaba" }}
              >
                Correo Electrónico:
              </label>
              <input
                className="w-full bg-gray-200 rounded-md"
                style={{ padding: "16px" }}
                placeholder="Ingresá tu Correo Electrónico"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-left font-bold text-lg"
              style={{ color: "#1daaba" }}
            >
              Asunto
            </label>
            <input
              className="w-full bg-gray-200 rounded-md"
              style={{ padding: "16px" }}
              placeholder="Ingresá el asunto del mensaje"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block mb-2 text-left font-bold text-lg"
              style={{ color: "#1daaba" }}
            >
              Número de contacto
            </label>
            <input
              className="w-full bg-gray-200 rounded-md"
              style={{ padding: "16px" }}
              placeholder="Ingresá el tu número de contacto"
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="block mb-2 text-left font-bold text-lg"
              style={{ color: "#1daaba" }}
            >
              Mensaje
            </label>
            <textarea
              className="w-full bg-gray-200 rounded-md"
              style={{ padding: "16px" }}
              placeholder="Ingresá tu mensaje"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end relative">
            <button
              className="py-2 px-4 mt-2 text-white text-lg font-semibold w-full md:w-1/5 rounded-md transform transition-transform hover:scale-105"
              type="submit"
              style={{ backgroundColor: "#1f1f1f", padding: "12px" }}
            >
              {success ? 'Enviado' : 'Enviar'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
