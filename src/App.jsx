import { Card } from "./Card";
import { CardCombos } from "./CardCombos";

export default function App() {
    const menu = [
        {
            titulo: "Pollo y Waffles",
            imagen: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=300&auto=format&fit=crop",
            info: "Combinación clásica con nuestro personaje de waffle distintivo.",
            precio: 12.99,
            art: 1,
        },
        {
            titulo: "Helado bañado en Chocolate",
            imagen: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=300",
            info: "Dulces retro bañados a mano con varios ingredientes y chispas.",
            precio: 4.5,
            art: 2,
        },
        {
            titulo: "Pizza Retro Clásica",
            imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300&auto=format&fit=crop",
            info: "Pizza de pepperoni con queso derretido, receta original de los años 80.",
            precio: 15.99,
            art: 3,
        },
        {
            titulo: "Hamburguesa Doble de Queso",
            imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300&auto=format&fit=crop",
            info: "Jugosa hamburguesa de carne de res con doble queso cheddar y salsa secreta.",
            precio: 9.5,
            art: 4,
        },
        {
            titulo: "Papas Fritas con Queso",
            imagen: "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=300",
            info: "Nuestras papas fritas crujientes bañadas en deliciosa salsa de queso cheddar.",
            precio: 5.99,
            art: 5,
        },
        {
            titulo: "Malteada de Fresa Retro",
            imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=300&auto=format&fit=crop",
            info: "Clásica malteada de fresa coronada con crema batida y una cereza.",
            precio: 6.99,
            art: 6,
        },
    ];

    const combos = [
        {
            id: 1,
            tipo: "sencillo",
            valor: "básico",
            precio: 4.99,
            cantidad: "una bola de helado",
            size: "soda pequeña",
        },
        {
            id: 2,
            tipo: "doble",
            valor: "popular",
            precio: 7.99,
            cantidad: "dos bolas de helado",
            size: "soda mediana",
        },
        {
            id: 3,
            tipo: "triple",
            valor: "mejor valor",
            precio: 10.99,
            cantidad: "tres bolas de helado",
            size: "soda grande",
        },
    ];

    return (
        <>
            <header className="flex h-24 px-15 uppercase justify-between items-center border-b-4">
                <div className="flex gap-4">
                    <span className="bg-primary w-10 h-10 rounded-3xl border-4 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#221e10"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-tools-kitchen-3"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
                            <path d="M14 8a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" />
                            <path d="M17 12v9" />
                        </svg>
                    </span>
                    <h2 className="italic font-black text-3xl cursor-pointer">
                        Retro Food
                    </h2>
                </div>
                <nav>
                    <ul className="flex gap-14 font-black cursor-pointer">
                        <li>inicio</li>
                        <li>menú</li>
                        <li>ubicación</li>
                        <li>contacto</li>
                    </ul>
                </nav>
                <button className="bg-primary font-black uppercase py-2 px-5 cursor-pointer [border:var(--border-retro)] shadow-retro rounded-4xl hover:translate-y-1 hover:shadow-none transition-all">
                    pedir ahora
                </button>
            </header>

            <section className="flex items-center px-22 py-14">
                <img
                    className="w-120 cursor-pointer [border:var(--border-retro)] shadow-retro rounded-4xl hover:translate-y-1 hover:shadow-none transition-all"
                    src="https://www.clipartmax.com/png/middle/46-467488_pizza-steve-by-mrtheamazingdude-on-deviantart-imagen-de-pizza-steve.png"
                    alt="Personaje"
                />
                <div className="px-14">
                    <h1 className="italic font-black text-7xl uppercase">
                        pizza por porción
                    </h1>
                    <p className="font-medium py-6 text-2xl">
                        Ven a disfrutar de las luces de neón y las vibras retro
                        en persona. Hemos diseñado un espacio que se siente como
                        una cafetería de los años 50 con un toque moderno. Pizza
                        fresca, cerveza artesanal fría y los mejores clásicos en
                        la rockola.
                    </p>
                    <button className="bg-primary font-black uppercase py-4 px-8 cursor-pointer [border:var(--border-retro)] shadow-retro rounded-4xl hover:translate-y-1 hover:shadow-none transition-all">
                        como llegar
                    </button>
                </div>
            </section>

            <section className="px-22">
                <h2 className="text-3xl font-black uppercase text-shadow-(--shadow-text)">
                    lo mejor de nuestro menú
                </h2>
                <div className="py-12 flex flex-wrap gap-10">
                    {menu.map(({ titulo, imagen, info, precio, art }) => {
                        return (
                            <Card
                                key={art}
                                titulo={titulo}
                                imagen={imagen}
                                parrafo={info}
                                precio={precio}
                            />
                        );
                    })}
                </div>
            </section>

            <section className="px-22">
                <h2 className="text-3xl font-black uppercase text-shadow-(--shadow-text)">
                    combos de soda y helado
                </h2>
                <div className="py-12 flex gap-10">
                    {combos.map(
                        ({ id, tipo, valor, cantidad, precio, size }) => {
                            return (
                                <CardCombos
                                    key={id}
                                    tipo={tipo}
                                    valor={valor}
                                    cantidad={cantidad}
                                    precio={precio}
                                    size={size}
                                />
                            );
                        },
                    )}
                </div>
            </section>

            <section className="px-22 pb-20">
                <h2 className="text-3xl font-black uppercase text-shadow-(--shadow-text)">
                    visitanos
                </h2>
                <div className="flex justify-between items-start">
                    <div className="w-xl">
                        <p className="font-semibold opacity-75 py-6 text-lg">
                            Ven a disfrutar de las luces de neón y las vibras
                            retro en persona. Hemos diseñado un espacio que se
                            siente como una cafetería de los años 50 con un
                            toque moderno. Pizza fresca, cerveza artesanal fría
                            y los mejores clásicos en la rockola.
                        </p>
                        <div className="flex gap-2 items-center pb-4.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="#f4c32f"
                                class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
                            </svg>
                            <p className="font-black italic uppercase">
                                calle retro 123, distrito neón, ciudad pizza
                            </p>
                        </div>
                        <div className="flex gap-2 items-center pb-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="#f4c32f"
                                class="icon icon-tabler icons-tabler-filled icon-tabler-clock"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
                            </svg>
                            <p className="font-black italic uppercase">
                                abierto todos los días: 11 AM - 12 AM
                            </p>
                        </div>
                        <button className="bg-primary font-black uppercase italic py-4 px-8 cursor-pointer [border:var(--border-retro)] shadow-retro rounded-4xl hover:translate-y-1 hover:shadow-none transition-all">
                            cómo llegar
                        </button>
                    </div>
                    <img
                        className="w-125 h-70 cursor-pointer [border:var(--border-retro)] shadow-retro rounded-4xl hover:translate-y-1 hover:shadow-none transition-all"
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600"
                        alt="Lugar"
                    />
                </div>
            </section>
            <footer className="px-22 bg-bg-dark pt-12 pb-8 border-t-primary border-t-8">
                <div className="pb-10 flex items-start justify-between">
                    <div className="w-1/4">
                        <div className="flex gap-4 mb-5">
                            <span className="bg-primary w-7 h-7 p-1.5 rounded-3xl flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#221e10"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-tools-kitchen-3"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
                                    <path d="M14 8a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" />
                                    <path d="M17 12v9" />
                                </svg>
                            </span>
                            <h2 className="italic uppercase font-black text-xl cursor-pointer text-primary">
                                Retro Food
                            </h2>
                        </div>
                        <p className="text-bg-light/60">
                            Sirviendo la mejor pizza por porción y postres retro
                            desde 1985. Nuestros personajes pueden ser de
                            caricatura, pero nuestro sabor es muy real.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-primary uppercase italic font-black mb-5">
                            navegación
                        </h2>
                        <ul className="uppercase text-bg-light/90 flex flex-col gap-2.5">
                            <li>inicio</li>
                            <li>menú</li>
                            <li>ubicación</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-primary uppercase italic font-black mb-5">
                            síguenos
                        </h2>
                        <div className="flex gap-3">
                            <span className="bg-black/35 w-10 h-10 rounded-4xl flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#f8f8f5"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-share"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M8.7 10.7l6.6 -3.4" />
                                    <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
                            </span>
                            <span className="bg-black/35 w-10 h-10 rounded-4xl flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#f8f8f5"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                                </svg>
                            </span>
                            <span className="bg-black/35 w-10 h-10 rounded-4xl flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#f8f8f5"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
                                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M16.5 7.5v.01" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-primary uppercase italic font-black mb-5">
                            boletín
                        </h2>
                        <input
                            className="bg-black/35 text-bg-light rounded-4xl border-2 border-bg-light/20 px-4 mb-3"
                            placeholder="TU CORREO"
                            type="text"
                            name="correo"
                            id="correo"
                        />
                        <button className="bg-primary italic uppercase rounded-4xl font-black text-sm py-1">
                            suscribirse
                        </button>
                    </div>
                </div>
                <div className="border-b border-bg-light opacity-20"></div>
                <p className="text-bg-light/60 font-medium uppercase text-sm tracking-widest text-center py-7">
                    &copy; 2024 retro food pizza co. todos los derechos
                    reservados.
                </p>
            </footer>
        </>
    );
}
