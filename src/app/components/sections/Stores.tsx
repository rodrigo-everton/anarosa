import { Button } from "@/app/components/Button";

const stores = [
  {
    title: "Livros Autorais",
    description:
      "Livros de Ana Rosa, com temas variados e histórias envolventes.",
  },
  {
    title: "Mary Kay",
    description:
      "Produtos de beleza e cuidados com a pele, com consultoria personalizada.",
  },
  {
    title: "Amazon",
    description:
      "Venda de garagem: livros usados e outros acessórios.",
  },
];

export function Stores() {
  return (
    <section id="servicos" className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-normal text-red">
            Lojas
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-black sm:text-4xl">
            Explore os diversos produtos à venda.
          </h2>
          <p className="mt-4 text-base leading-7 text-black-secondary/70">
            Livros autorais, usados e produtos de beleza, todos disponíveis aqui.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <article
              key={store.title}
              className="overflow-hidden rounded-lg border border-black-secondary/10 bg-white hover:opacity-80 hover:border-red hover:border-2"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-white-secondary">
                <span className="text-sm font-semibold text-black-secondary/35">
                  Foto do servico
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-red">
                  {store.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black-secondary/80">
                  {store.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
