import BarraPesquisa from "@/widgets/BarraPesquisa"
import BarraSuperior from "@/widgets/BarraSuperior"
import Rodape from "@/widgets/Rodape"

interface PageProps{
    id: string
}

export default async function Page(
   {params} : {params: Promise<PageProps>}
){
    const dados = await params
    return (
        <div>
            <header className="container mx-auto">
                <BarraSuperior />
                <BarraPesquisa />
            </header>

            <main className="container mx-auto py-6">
                <h1 className="text-3xl">Rancho da Lua, tranquilo e rodeado por montanhas</h1>
            </main>

            <footer className="bg-gray-200">
                <Rodape />
            </footer>
        </div>
    )
}