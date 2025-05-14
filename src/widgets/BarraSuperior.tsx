import BotaoIcone from "@/components/BotaoIcone"
import Logo from "@/components/logo"
import { IconUserCircle } from "@tabler/icons-react"
import Link from "next/link"

const BarraSuperior = () => {
    return (
        <div className="container py-6 mx-auto flex justify-between items-center">

          <Logo />

          

          <div className="flex gap-6">
            <Link className="font-semibold" href="/">Acomodações</Link>
            <Link className="opacity-60" href="/">Experiências</Link>
          </div>

          <BotaoIcone
          icone={(
            <IconUserCircle
                aria-label="ícone de usuário"
                size={20}
            />
          )} >
            Entrar
          </BotaoIcone>

        </div>
    )
}

export default BarraSuperior