import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";

export default function Home() {
    return <main className="w-full h-screen ">
        <div className="w-full h-72 bg-cover bg-center bg-blend-multiply bg-slate-500/50 mb-[-30px]" style={{ backgroundImage: `url('/bgmap.png')` }} />

        <div className="w-3/5 mx-auto bg-white rounded-md shadow-lg p-8 gap-6 text-center flex flex-col">
            <div className="w-full flex flex-row gap-5  text-gray-400 child-hover:text-black font-semibold child:transition-all">
                <p className="text-black">Pesquisar imóveis</p>
                <p>Histórico</p>
                <p>Favoritos</p>
            </div>
            <div className="flex flex-row gap-6">
                <Input
                    label="Digite o endereço"
                    className={"grow"}
                />
                <Button
                >Pesquisar</Button>
            </div>
        </div>

        <div className="w-4/5 m-auto mt-10 flex flex-col gap-10">
            <h3 className="text-2xl font-bold">Categorias</h3>

            <div className="flex flex-row gap-4">
                <div className="w-1/3 bg-white rounded-md shadow-lg p-4">
                    <h4 className="text-xl font-bold">Casa</h4>
                    <p>Encontre a casa dos seus sonhos</p>
                </div>
                <div className="w-1/3 bg-white rounded-md shadow-lg p-4">
                    <h4 className="text-xl font-bold">Apartamento</h4>
                    <p>Encontre o apartamento dos seus sonhos</p>
                </div>
                <div className="w-1/3 bg-white rounded-md shadow-lg p-4">
                    <h4 className="text-xl font-bold">Terreno</h4>
                    <p>Encontre o terreno dos seus sonhos</p>
                </div>
            </div>
        </div>
    </main>
}
