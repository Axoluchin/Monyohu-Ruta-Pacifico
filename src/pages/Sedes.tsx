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
    name: "Culiacán",
    telefonos: ["667 749 6931", "667 172 1162"],
  },
  {
    name: "Irapuato | Salamanca",
    telefonos: ["462 660 1289", "462 635 6264"],
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
