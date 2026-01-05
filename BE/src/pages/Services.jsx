import React from "react";


export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Courier & Logistics",
            desc: "Government, hospital, and corporate delivery contracts executed with precision.",
          },
          {
            title: "Credit Repair",
            desc: "Strategic credit restoration and financial positioning.",
          },
          {
            title: "Business Formation",
            desc: "LLCs, business accounts, funding access, and compliance.",
          },
        ].map((s) => (
          <div key={s.title} className="border p-8">
            <h3 className="font-semibold text-xl mb-3">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
