export function CardCombos({ tipo, valor, precio, cantidad, size }) {
    return (
        <div className="w-md p-7 [border:var(--border-retro)] shadow-retro rounded-[50px] hover:translate-y-1 hover:shadow-none transition-all hover:bg-primary group">
            <div className="flex items-center justify-between font-black">
                <p className="text-xl italic uppercase">{tipo}</p>
                <p className="border-4 bg-primary uppercase text-xs rounded-4xl px-2 py-1 group-hover:bg-black group-hover:text-white group-hover:border-black">
                    {valor}
                </p>
            </div>
            <div className="flex items-end my-2">
                <h2 className="text-4xl font-black italic">{precio}</h2>
                <p className="text-sm font-semibold uppercase">por orden</p>
            </div>
            <span className="bg-black w-full h-1 my-4 block"></span>
            <div className="font-bold uppercase text-sm">
                <div className="mb-3 flex items-center gap-2">
                    <span className="bg-black w-5.5 h-6 rounded-4xl border-4 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#f4c32f"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-check"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                    </span>
                    <p>{cantidad}</p>
                </div>
                <div className="mb-6 flex items-center gap-2">
                    <span className="bg-black w-5.5 h-6 rounded-4xl border-4 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#f4c32f"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-check"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                    </span>
                    <p>{size}</p>
                </div>
            </div>
            <button className="border-4 rounded-4xl uppercase cursor-pointer font-black text-xs w-full py-3 group-hover:bg-bg-light hover:bg-primary">
                select
            </button>
        </div>
    );
}
