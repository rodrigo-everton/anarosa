import Image from "next/image";
import { Button } from "@/app/components/Button";
import links from "../../links.json";

export function Hero() {
  return (
    <section className="bg-white-secondary m-6 border-0 rounded">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-normal text-red">
            Ana Rosa
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Texto aqui
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-black-secondary/80 sm:text-lg">
            texto aqui
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href= {links.whatsapp} size="lg" className="gap-2" variant="red">
              <Image
                src="/whatsapp-logo.svg"
                alt="WhatsApp Logo"
                width={20}
                height={20}
                className="size-5 object-contain"
              />
              Falar no WhatsApp
            </Button>

            <Button
              href="#lojas"
              variant="ghostblack"
              size="lg"
              className=""
            >
              Ver lojas
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <Image
            src="/foto1.svg"
            alt="foto de Ana Rosa"
            width={960}
            height={720}
            className="h-auto w-full rounded-lg object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
