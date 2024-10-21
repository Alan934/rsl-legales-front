"use client";
import Link from "next/link";
import { Formik } from "formik";
import { useState } from "react";
import { usePostDataMutation } from "@/app/redux/services/formApi";
import SelectOption from "./SelectOption";
import { useGetServiciosFormQuery } from "@/app/redux/services/serviciosRequeridos";

export default function Form() {
  interface FormValues {
    nombreCompleto: string;
    email: string;
    servicioId: number;
    telefono: string;
    mensaje: string;
  }

  const [formSuccess, setFormSuccess] = useState(false);
  const [postData, {}] = usePostDataMutation();

  const { data: servicios, isLoading, error } = useGetServiciosFormQuery();

  if(error){
    return(
      <div className="flex justify-center items-center">
        <span>Ocurrio un error al listar el formulario!</span>
      </div>
    )
  }

  return (
    <>
      <Formik
        initialValues={{
          nombreCompleto: "",
          email: "",
          servicioId: 0,
          telefono: "",
          mensaje: "",
        }}
        validate={(valores) => {
          const errores: Partial<FormValues> = {};

          if (!valores.nombreCompleto) {
            errores.nombreCompleto = "Por favor ingrese un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreCompleto)) {
            errores.nombreCompleto =
              "El nombre solo puede contener letras y espacios";
          }

          if (!valores.email) {
            errores.email = "Por favor ingrese un correo electrónico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El correo solo puede contener letras, números, puntos, guiones, guion bajo y @";
          }

          if (!valores.servicioId) {
            errores.servicioId = 0;
          }

          if (!valores.telefono) {
            // Validación añadida
            errores.telefono = "Por favor ingrese un número de teléfono";
          } else if (!/^\d{10}$/.test(valores.telefono)) {
            // Valida un número de 10 dígitos
            errores.telefono = "El teléfono debe tener 10 dígitos";
          }

          if (!valores.mensaje) {
            errores.mensaje = "Por favor ingrese un mensaje";
          }

          return errores;
        }}
        onSubmit={async (values, { resetForm }) => {
          setFormSuccess(true);
          setTimeout(() => {
            setFormSuccess(false);
          }, 4000);
          resetForm();
          
          await postData(values).unwrap();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <div className="flex flex-col items-center justify-center bg-[#E6E4E1] px-9">
            <form
              id="contactForm"
              className="mx-auto max-w-[1280px] bg-white p-8 rounded-2xl shadow-md m-8"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold mb-6 text-center uppercase">
                ¿Tenés más dudas? Completá este formulario y nosotros nos
                contactaremos
              </h2>

              <div className="flex flex-col mb-4">
                <label
                  htmlFor="nombreCompleto"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombreCompleto"
                  name="nombreCompleto"
                  placeholder="Bonnie Green"
                  className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={values.nombreCompleto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.nombreCompleto && errors.nombreCompleto && (
                  <p className="text-red-600">{errors.nombreCompleto}</p>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="bonniegreen@gmail.com"
                  className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <p className="text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <label
                  htmlFor="servicioId"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Servicio Requerido
                </label>
                <select
                  id="servicioId"
                  name="servicioId"
                  className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-inherit"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.servicioId.valueOf()}
                >
                  {isLoading ? (
                    <option value={0} hidden>
                      Listando Servicios...
                    </option>
                  ) : (
                    <>
                      <option value={0} hidden>
                        Seleccione un Servicio
                      </option>

                      {servicios?.map((servicio,index) => (
                        <SelectOption
                          valorOption={servicio.id}
                          tituloOption={servicio.nombreServicio}
                          key={index}
                        />
                      ))}
                    </>
                  )}
                </select>

                {touched.servicioId && errors.servicioId && (
                  <p className="text-red-600">{errors.servicioId}</p>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <label
                  htmlFor="telefono"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Teléfono
                </label>
                <input
                  type="text"
                  id="telefono"
                  name="telefono"
                  placeholder="1234567890"
                  className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={values.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.telefono && errors.telefono && (
                  <p className="text-red-600">{errors.telefono}</p>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <label
                  htmlFor="mensaje"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  ¡Expláyate más sobre el tema de consulta!
                </label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  placeholder="Escribe aquí..."
                  className="px-3 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={values.mensaje}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.mensaje && errors.mensaje && (
                  <p className="text-red-600">{errors.mensaje}</p>
                )}
              </div>

              <p className="text-xs">
                Al enviar este formulario, acepta nuestros{" "}
                <span className="text-[#3ABEF7] underline">
                  <Link href="#">términos y condiciones</Link>
                </span>{" "}
                y nuestra{" "}
                <span className="text-[#3ABEF7] underline">
                  <Link href="#">política de privacidad</Link>
                </span>
                , que explica cómo podemos recopilar, utilizar y divulgar su
                información personal, incluso a terceros.
              </p>

              <button
                type="submit"
                disabled={Object.keys(errors).length > 0}
                className="p-2 mt-8 bg-[#3A5E9299] text-white bg-newOrange mx-auto flex rounded-lg shadow-md cursor-pointer"
              >
                Enviar Formulario
              </button>
              {formSuccess && (
                <p className="text-green-500 text-center m-3">
                  Formulario enviado con éxito
                </p>
              )}
            </form>
          </div>
        )}
      </Formik>
    </>
  );
}
