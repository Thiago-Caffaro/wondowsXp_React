//PADRÃO DE ADIÇÃO DE TEXTOS: Para adicionar um texto, será preciso informar o id do elemento como parâmetro, e ser informado o conteudo no array "textos",
//na respectiva posição (a mesma do npumero do id)

const NewVideoContent = (props) =>{
    //Esta função irá criar a estrutura da janela de texto, retornando-a
    //Também receberá o id do elemento para ter seu conteudo identificado
    return(
        <div class="video-container">
            <video controls>
                <source src={props.videoSrc} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </div>
    );
  };
const newVideoFunc = (id) => {
    //Esta função guarda todos os textos dentro do array "textos", e então lê o id fornecido, retirando o notepad dele e sobrando apenas o número
    var videos = [
        <NewVideoContent videoSrc="/wondowsXp_React/videos/10 FORBIDDEN Sorting Algorithms.mp4" />,
        <NewVideoContent videoSrc="/wondowsXp_React/videos/15 Sorting Algorithms in 6 Minutes.mp4" />,
        <NewVideoContent videoSrc="/wondowsXp_React/videos/16 Sorts - Color Circle.mp4" />,
        <NewVideoContent videoSrc="/wondowsXp_React/videos/Calculus_Trailer_.mp4" />,
        <NewVideoContent videoSrc="/wondowsXp_React/videos/Congruent Angles Anime OP - A Cruel Angle's Thesis.mp4" />,
        <NewVideoContent videoSrc="/wondowsXp_React/videos/Ellipse-billiard simulation.mp4" />,
        <NewVideoContent videoSrc="/wondowsXp_React/videos/Feynman-_what differs physics from mathematics_.mp4" />,
        <NewVideoContent videoSrc="/wondowsXp_React/videos/How to Program the TI 84 Plus CE with Quadratic Formula.mp4" />,
        <NewVideoContent videoSrc="/wondowsXp_React/videos/J. Robert Oppenheimer_ _I am become Death.mp4" />,
        <NewVideoContent videoSrc="/wondowsXp_React/videos/Math is Art.mp4" />,
        <NewVideoContent videoSrc="/wondowsXp_React/videos/Running “Hello World!” in 10 VISUAL Programming Languages!.mp4" />
    ]
    let videoAcessadoIndex = parseInt(id.replace('video', ''));
    var videoContent = videos[videoAcessadoIndex];
    console.log(videoContent);

    //O número serve como index do array de textos, onde irá guardar o texto do respectivo numero do id, e retornará
    return videoContent;
};
  
export default newVideoFunc;