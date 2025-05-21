import{
    IconPhoto,
    IconToolsKitchen2,
    IconDesk,
    IconPool,
    IconBrandCarbon,
    IconSailboat,
    IconWifi,
    IconParking,
    IconAlarmSmoke,
    IconDog
} from '@/assets/icones'
import { Accommodation } from '@/types/AirbnbDados'

interface AcomodacaoDetalhesProps {
    accomodation: Accommodation
}

const AcomodacaoDetalhes = (
    props: AcomodacaoDetalhesProps
) => {

    const acomodacao = props.accomodation

    return (
        <div className="w-full py-4">
            <h2 className="text-xl font-semibold">{acomodacao.location.description}</h2>

            <ul className="flex flex-row gap-2">
                <li>10 hóspedes</li>
                <li>&middot;</li>
                <li>5 quartos</li>
                <li>&middot;</li>
                <li>5 camas</li>
                <li>&middot;</li>
                <li>6 banheiros</li>
            </ul>

            <h2 className="pt-4 text-xl font-semibold">O que esse lugar oferece?</h2>
            <ul className='py-6 grid grid-cols-2 items-center gap-y-6'>
                <li className='flex gap-1.5'>
                    <IconPhoto />
                    <span>Vista para as montanhas</span>
                </li>
                <li className='flex gap-1.5'>
                    <IconToolsKitchen2 />
                    <span>Cozinha</span>
                </li>
                <li className='flex gap-1.5'>
                    <IconDesk />
                    <span>Espaço de trabalho exclusivo</span>
                </li>
                <li className='flex gap-1.5'>
                    <IconPool />
                    <span>Piscina privativa</span>
                </li>
                <li className='flex gap-1.5'>
                    <IconBrandCarbon />
                    <span>Alarme de segurança p/ gás</span>
                </li>
                <li className='flex gap-1.5'>
                    <IconSailboat />
                    <span>Vista para as águas</span>
                </li>
                <li className='flex gap-1.5'>
                    <IconWifi />
                    <span>Wi-Fi rápido (83 Mbps)</span>
                </li>
                <li className='flex gap-1.5'>
                    <IconParking />
                    <span>Estacionamento incluido</span>
                </li>
                <li className='flex gap-1.5'>
                    <IconDog />
                    <span>Permitido animais</span>
                </li>
                <li className='flex gap-1.5'>
                    <IconAlarmSmoke />
                    <span>Detector de fumaça</span>
                </li>
            </ul>

        </div>
    )
}

export default AcomodacaoDetalhes