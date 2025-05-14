import React from "react"

interface BotaoIconeProps{
    icone: React.ReactNode
    children: React.ReactNode

}

const BotaoIcone = ( props: BotaoIconeProps ) => {
    return (
        <>
            <button className="rounded-xl border-2 flex items-center gap-2 p-2 px-4 py-2 hover:border-gray-400">
                <span>{props.icone}</span>
                <span>{props.children}</span>
            </button>
        </>
    )
}

export default BotaoIcone