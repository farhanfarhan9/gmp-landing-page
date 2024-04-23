"use client";
import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
const ContactNow = () => {
  const [name, setname] = useState("");
  const [surname, setsurname] = useState("");
  const [email, setemail] = useState("");
  const router = useRouter();

  function hadlesubmit(e: SyntheticEvent) {
    e.preventDefault();
    const text = `Saya ingin meminta Company Profile perusahaan Anda. Bisakah Anda mengirimkannya kepada saya melalui WhatsApp? Saya tertarik untuk mempelajari lebih lanjut tentang perusahaan Anda.\n\nTerima kasih sebelumnya!\n\nSalam, ${name}`;
    const message = encodeURIComponent(text);
    const url = "https://api.whatsapp.com/send?phone=&text=" + message;
    // router.push(

    // );
    window.open(url, "__blank");
  }
  return (
    <>
      <form onSubmit={hadlesubmit}>
        <div className="mb-9">
          <input
            value={name}
            type="text"
            name="name"
            required
            onChange={(e) => setname(e.target.value)}
            placeholder="Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-9">
          <input
            value={surname}
            onChange={(e) => setsurname(e.target.value)}
            type="text"
            name="surname"
            placeholder="Surname"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-9">
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-9"></div>
        <div>
          <button className="w-full hover:shadow-form rounded-md bg-green-800 border-4 py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactNow;
