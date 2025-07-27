"use client"
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/mvgqanww', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError('Hubo un error al enviar el formulario. Intenta nuevamente.');
      }
    } catch {
      setError('Hubo un error al enviar el formulario. Intenta nuevamente.');
    }
    setLoading(false);
  };

  return (
    <section className="py-12 px-4 flex flex-col items-center bg-transparent border border-gray-700 rounded-2xl shadow-md mt-10 backdrop-blur-md">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">¿Quieres trabajar conmigo?</h2>
      <p className="mb-6 text-lg text-gray-300 text-center max-w-xl">
        Si buscas servicios web, desarrollo a medida o tienes una idea que quieres llevar a la realidad, ¡contáctame! Completa el formulario y te responderé a la brevedad con una cotización personalizada.
      </p>
      {submitted ? (
        <div className="text-green-400 font-semibold text-center">¡Gracias por tu mensaje! Te responderé pronto.</div>
      ) : (
        <form className="w-full max-w-md flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Honeypot field para protección contra bots */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />
          <input
            type="text"
            name="nombre"
            required
            placeholder="Nombre"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Correo electrónico"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="mensaje"
            required
            placeholder="Cuéntame tu idea, requerimientos o dudas..."
            rows={5}
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Solicitar Cotización'}
          </button>
          {error && <div className="text-red-400 text-center mt-2">{error}</div>}
        </form>
      )}
    </section>
  );
};

export default Contact;
