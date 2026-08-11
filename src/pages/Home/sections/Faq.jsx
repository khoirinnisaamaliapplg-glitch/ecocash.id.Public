import React, { useState } from "react";
import { FAQ_DATA } from "../../../constants/dummyData";

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(1); // Default membuka FAQ nomor 1

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Bagian Teks Kiri (Sticky) */}
        <div className="space-y-6 lg:sticky lg:top-28">
          <span className="inline-block px-5 py-2 bg-teal-500/10 text-eco-dark text-sm font-bold rounded-full tracking-wide">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Apa itu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-dark to-sky-accent">
              EcoCash.id?
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed font-body">
            EcoCash membantu masyarakat, sekolah, industri, dan pemerintah
            mengelola sampah secara modern, transparan, dan berkelanjutan.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed font-body">
            Dengan sistem digital terintegrasi, EcoCash mengubah sampah menjadi
            sumber daya yang memiliki nilai ekonomi sekaligus mendukung
            lingkungan yang lebih baik.
          </p>
        </div>

        {/* Bagian Accordion Kanan */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                onClick={() => toggleFaq(faq.id)}
                className={`bg-white rounded-3xl p-6 transition-all duration-300 cursor-pointer group ${
                  isOpen
                    ? "border-2 border-teal-500/30 shadow-xl shadow-teal-500/5"
                    : "border border-slate-200 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h4
                    className={`font-bold text-lg font-heading transition-colors ${
                      isOpen
                        ? "text-eco-dark"
                        : "text-slate-700 group-hover:text-eco-dark"
                    }`}
                  >
                    {faq.q}
                  </h4>

                  <div
                    className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-orange-500/10 text-[#f97316] rotate-180"
                        : "bg-slate-50 text-slate-400 group-hover:bg-teal-500/10 group-hover:text-eco-dark"
                    }`}
                  >
                    {isOpen ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4 text-slate-600 leading-relaxed pr-8 font-body animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
