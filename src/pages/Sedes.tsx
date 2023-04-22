import { useEffect, useState, useCallback } from "react";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import { Card, TextInput } from "flowbite-react";

import CardSede from "../components/CardSede";

interface sede {
  name: string;
  telefonos: string[];
}

const sedesList: sede[] = [
  {
    name: "Acapulco",
    telefonos: ["744 482 1780", "744 482 1852"],
  },
  {
    name: "Aguascalientes",
    telefonos: ["449 994 1503", "449 994 2007"],
  },
  {
    name: "Cancún",
    telefonos: ["998 138 8210", "998 138 8212"],
  },
  {
    name: "Celaya",
    telefonos: ["461 617 5004", "461 103 1098"],
  },
  {
    name: "CDMX | Tlalpan | Naucalpan",
    telefonos: ["555 312 6501", "555 312 7031"],
  },
  {
    name: "Culiacán",
    telefonos: ["667 749 6931", "667 172 1162"],
  },
  {
    name: "Irapuato | Salamanca",
    telefonos: ["462 660 1289", "462 635 6264"],
  },
  {
    name: "Lerma - Ocoyoacac",
    telefonos: ["728 103 3738", "722 688 6577"],
  },
  {
    name: "León",
    telefonos: ["477 707 9077", "477 429 5423"],
  },
  {
    name: "Mérida",
    telefonos: ["999 931 0712", "999 931 0704"],
  },
  {
    name: "Metepec | San Mateo | Xonacatlán",
    telefonos: ["722 199 5617", "722 199 3759"],
  },
  {
    name: "Metepec sucursal Sur | Mexicalcingo | Calimaya | Ixtapan de la sal | Tenancingo",
    telefonos: ["722 320 2005", "722 297 2284"],
  },
  {
    name: "Monterrey",
    telefonos: ["818 340 4230", "818 340 4578"],
  },
  {
    name: "Morelia Norte",
    telefonos: ["443 316 6924", "443 316 6951"],
  },
  {
    name: "Morelia Sur",
    telefonos: ["443 234 0110", "443 327 4542"],
  },
  {
    name: "San Luis Potosí",
    telefonos: ["444 688 8097", "444 688 8098"],
  },
  {
    name: "Toluca | Atlacomulco | Zinacantepec",
    telefonos: ["722 270 2114", "722 270 2115"],
  },
  {
    name: "Toluca sucursal Colón | Valle de Bravo | Cacalomacán | Capultitán",
    telefonos: ["722 277 8960", "722 2171276"],
  },
  {
    name: "Veracruz",
    telefonos: ["229 935 5441", "229 935 6313"],
  },
];

const Sedes = () => {
  const [textFilter, setTextFilter] = useState("");

  const filter = useCallback(
    (sede: sede) => sede.name.toLowerCase().includes(textFilter.toLowerCase()),
    [textFilter]
  );

  return (
    <div className="md:grid md:grid-cols-2 gap-10 static min-h-screen">
      <div className="px-2 md:pl-16 pt-8">
        <Card>
          <h1 className="text-center text-5xl font-bold text-mark">
            Sucursales
          </h1>
          <p className="text-center text-xl">Nuestro trabajo nos respalda</p>
          <TextInput
            icon={() => <MagnifyingGlassIcon className="text-slate-500 h-5" />}
            placeholder="Busca tu sucursal"
            onChange={(data) => setTextFilter(data.target.value)}
          />
        </Card>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-12">
          {sedesList.filter(filter).map((sede) => (
            <CardSede {...sede} key={sede.name} />
          ))}
        </div>
      </div>
      <div className="bg-landing order-1 md:order-2">
        <img
          src="/images/help.png"
          alt="Phone man"
          style={{ height: "80vh" }}
          className="self-center md:fixed  md:my-16 object-contain"
        />
      </div>
    </div>
  );
};

export default Sedes;
