import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";

export default function Home() {
  return (
   <>
      <div>
        <BarraSuperior />
        <BarraPesquisa />
      </div>

      <hr className="mt-5"/>

      <div className="border-green-600 border-2 mt-10">Área conteúdos</div>
      <div className="border-purple-600 border-2">Rodapé</div>
   </> 
  );
}
