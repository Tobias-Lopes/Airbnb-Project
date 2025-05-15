import { IconSearch } from "@tabler/icons-react"

const BarraPesquisa = () => {
    return (
        <div className="
            border border-gray-200
            flex items-center rounded-full px-3 py-2
            w-full max-w-2xl mx-auto
            shadow-lg shadow-gray-200
        ">
            <input className="w-full focus: outline-0 px-3" 
            type="text" placeholder="Digite sua pesquisa" />
            <button className="
                bg-red-500 rounded-full p-2
            ">
                <IconSearch
                aria-label="Pesquisa"
                size={32}
                color="white"
            />
            </button>
        </div>
    )
}

export default BarraPesquisa