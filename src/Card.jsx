import { useState } from "react";

export function Card({ imagen, titulo, parrafo, precio }) {
    const [isClick, setIsClick] = useState(false);

    const imgClick = () => {
        setIsClick(!isClick);
    };

    return (
        <div className="flex p-6 gap-8 w-lg cursor-pointer [border:var(--border-retro)] shadow-retro rounded-[50px] hover:translate-y-1 hover:shadow-none transition-all">
            <img
                className="rounded-4xl border-4 w-34 h-44 object-cover"
                src={imagen}
                alt="Muestra"
                onClick={imgClick}
            />
            <div className="flex flex-col justify-center">
                <h3 className="font-black text-2xl uppercase">{titulo}</h3>
                <p className="font-semibold opacity-85 py-3">{parrafo}</p>
                <p className="font-black italic text-yellow-400 bg-bg-dark w-max h-max px-4 py-0.5 rounded-4xl">
                    ${precio}
                </p>
            </div>
        </div>
    );
}
