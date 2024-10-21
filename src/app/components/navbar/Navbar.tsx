"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useGetDataQuery } from "@/app/redux/services/navbarApi";
import Link from "next/link";

export default function Navbar() {
  const { data, error, isLoading } = useGetDataQuery(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú
  };

  return (
    <>
      <div className="w-full px-20 bg-white flex justify-between items-center mx-auto pt-8 pb-4">
        <div className="tablet:hidden">
          <Image
            src="/menu.svg"
            alt="menu"
            width={40}
            height={40}
            onClick={toggleMenu} // Abre/cierra el menú al hacer clic
            data-geolocalization="-32.87194646008121, -68.82772021189432"
          />
        </div>

        <div>
          <Image src="/rsl.jpeg" alt="logo" width={150} height={39} />
        </div>

        <div className="hidden tablet:flex">
          <ul className="flex gap-[54px]">
            {data?.map((item) => (
              <li className="text-xl text-[#000617]" key={item.id}>
                <Link href={item.href}>
                  {item.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menú desplegable para móvil y tablet (vertical) */}
      {isMenuOpen && (
        <div className="tablet:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 p-4">
            {data?.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="text-xl text-[#000617]">
                  {item.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
