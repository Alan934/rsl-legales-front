"use client";
import Image from "next/image";
import Link from "next/link";
import MapWrapper from "../map/MapWrapper/MapWrapper";
import { useState } from "react";
import { useGetFooterByIdQuery } from "@/app/redux/services/footerApi";
import { formatUrl } from "@/app/utils/urlUtils";

interface FooterProps {
  id: number;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  const { data, error } = useGetFooterByIdQuery(id);
  const [openSubcategories, setOpenSubcategories] = useState<{
    [key: number]: boolean;
  }>({});

  if (error) return <p>Error loading footer</p>;

  const toggleSubcategory = (subcategoryId: number) => {
    setOpenSubcategories((prevState) => ({
      ...prevState,
      [subcategoryId]: !prevState[subcategoryId],
    }));
  };
  // Obtener el año actual
  const currentYear = new Date().getFullYear();
  return (
    <> 
      <div className="flex bg-[#D9D9D9] pt-16 pb-14 ">
        <div className="grid tablet:grid-cols-4 movil:grid-cols-2 grid-cols-1  max-w-[1156px] mx-auto">
          {data?.categoriafooters.map((categoria) => (
            <div key={categoria.id} className="flex flex-col items-start mt-4">
              <h3 className="font-normal text-xl">
                {categoria.titleCategoriaFooter}
              </h3>
              <div className="flex flex-col gap-4 mt-6"> 
                {categoria.subcategoriafooters.map((subcategoria) => (
                  <div key={subcategoria.id}>
                    <div
                      className="cursor-pointer flex items-center gap-2"
                      onClick={() => toggleSubcategory(subcategoria.id)}
                    >
                      {subcategoria.urlIconSubCategoriaFooter && (
                        <Image
                          src={subcategoria.urlIconSubCategoriaFooter}
                          alt={subcategoria.nombreSubCategoriaFooter}
                          title={subcategoria.nombreSubCategoriaFooter}
                          width={24}
                          height={24}
                          className="ml-2"
                        />
                      )}

                      {
                      subcategoria.id === 9 ? (
                        // Si subcategoria.id es 9
                        <Link href="https://wa.me/+5492612795816">
                          <h4 className="text-lg">
                            {subcategoria.nombreSubCategoriaFooter}
                          </h4>
                        </Link>
                      ) 
                      :
                      subcategoria.id === 1   || subcategoria.id === 5 ? (
                        <Link href="#servicios">
                          <h4 className="text-lg">
                            {subcategoria.nombreSubCategoriaFooter}
                          </h4>
                        </Link>
                      )
                      :
                      subcategoria.id === 4 ? (
                        <Link href="#faq">
                          <h4 className="text-lg">
                            {subcategoria.nombreSubCategoriaFooter}
                          </h4>
                        </Link>
                      )
                      :
                      subcategoria.id === 17 ?(
                        <h4 className="whitespace-normal break-words text-[17px]">
                          {subcategoria.nombreSubCategoriaFooter}
                        </h4>

                      )
                      : 
                      (
                        // Para cualquier otro caso
                        <h4 className="whitespace-normal break-words text-lg">
                          {subcategoria.nombreSubCategoriaFooter}
                        </h4>
                      )} 
                    </div>
                    {openSubcategories[subcategoria.id] && (
                      <div className="pl-4 flex flex-col gap-2">
                        {subcategoria.items &&
                          Array.isArray(subcategoria.items) &&
                          subcategoria.items.length > 0 &&
                          subcategoria.items.map((item) =>
                            item.subtituloItem ? (
                              <a
                                key={item.id}
                                href={item.subtituloItem}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-darkBlue text-xs font-bold"
                              >
                                {item.urlIconItem ? (
                                  <div className="flex items-center gap-2">
                                    <Image
                                      src={item.urlIconItem}
                                      alt={item.tituloItem}
                                      title={item.tituloItem}
                                      width={24}
                                      height={24}
                                    />
                                    <p className="whitespace-normal break-words">
                                      {item.tituloItem}
                                    </p>
                                  </div>
                                ) : (
                                  <span className="whitespace-normal break-words">
                                    {item.tituloItem}
                                  </span>
                                )}
                              </a>
                            ) : (
                              <Link
                                key={item.id}
                                href={`/${formatUrl(item.tituloItem)}`}
                                className="text-darkBlue text-xs font-bold"
                              >
                                {item.urlIconItem ? (
                                  <div className="flex items-center gap-2">
                                    <Image
                                      src={item.urlIconItem}
                                      alt={item.tituloItem}
                                      title={item.tituloItem}
                                      width={24}
                                      height={24}
                                    />
                                    <p className="whitespace-normal break-words">
                                      {item.tituloItem}
                                    </p>
                                  </div>
                                ) : (
                                  <span className="whitespace-normal break-words">
                                    {item.tituloItem}
                                  </span>
                                )}
                              </Link>
                            )
                          )}
                      </div>
                    )}
                  </div>
                ))}
                {categoria.id === 5 && <MapWrapper />}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-center mx-auto  border-t border-[#929292]  bg-[#D9D9D9]  p-4 w-full">
          <p>&copy;RTS ARGENTINA 2018-{currentYear}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
