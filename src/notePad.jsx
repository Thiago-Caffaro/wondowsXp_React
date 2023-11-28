//PADRÃO DE ADIÇÃO DE TEXTOS: Para adicionar um texto, será preciso informar o id do elemento como parâmetro, e ser informado o conteudo no array "textos",
//na respectiva posição (a mesma do npumero do id)

const NewNotePadContent = (props) =>{
    //Esta função irá criar a estrutura da janela de texto, retornando-a
    //Também receberá o id do elemento para ter seu conteudo identificado
    return(
      <div id={props.id} className='notePad'>
        <nav id='notePadtopBar'>
          <ul>
            <li className='navItem'>Arquivo</li>
            <li className='navItem'>Editar</li>
            <li className='navItem'>Formato</li>
            <li className='navItem'>Visualização</li>
            <li className='navItem'>Ajuda</li>
          </ul>
        </nav>
        <textarea id="notePadContent">
            {/*Aqui estará o conteudo do bloco de notas, sendo esse, o que for colocando dentro do elemento <NewNotePadContent/>*/}
            {props.children}
        </textarea>
      </div>
      
    );

  };
  const notePadContentFunc = (id) => {
    //Esta função guarda todos os textos dentro do array "textos", e então lê o id fornecido, retirando o notepad dele e sobrando apenas o número
    var textos = [
      <NewNotePadContent>
      Como eu começo? Bom, eu nunca pensei que a melhor amizade que eu já tive, tenho e que eu ainda vou ter, começaria em um fórum da internet. Eu realmente não consigo colocar em palavras o quanto você é importante pra mim. Eu realmente tenho muito a agradecer, então Obrigado por me ajudar em todos os momentos difíceis que eu já passei, por me apoiar em várias das escolhas que eu tomei, por me ajudar a decidir coisas muito importantes pra mim, você sabe que eu sou bem indeciso. Pelo que eu percebo, eu não sou merecedor de uma amizade tão foda assim. Muito obrigado por ter entrado na minha vida.
    </NewNotePadContent>,//0
    <NewNotePadContent>
      Então, a gente pode se desentender as vezes, discordar em vários tópicos, e sermos diferentes em quase todos os fatores, mas eu tenho absoluta certeza de 2 coisas, uma delas é que lá no fundo, bem lá no fundo, eu sei que você não me odeio realmente, e eu também não. A segunda é que você é a única pessoa na história que conseguiria e conseguiu fazer amizade comigo sendo do jeito que você é, normalmente eu tenho medo desse tipo de pessoa. Eu gosto de você, obrigado por tudo.
    </NewNotePadContent>,//1
    <NewNotePadContent>
      Tá, a gente pode não conversar muito e quando conversamos eu sinto que você é meio seca comigo, mas isso não vem ao caso. O ponto é, você é uma pessoa incrível que certamente eu tenho orgulho de chamar de amiga, muito obrigado.
    </NewNotePadContent>,//2
    <NewNotePadContent>
      Eu sinto que a nossa amizade é meio exótica, tá a gente discorda em vários pontos , principalmente o fato de você fumar por favor para com isso, mas eu acho vc uma pessoa muito importante pra mim, NN sei o que eu faria se começassem a implicar comigo e vc não estivesse do lado kkk, brincadeiras a parte, vc é especial pra mim, obrigado por tudo.
    </NewNotePadContent>,//3
    <NewNotePadContent>
      Eu sei que nós não temos a melhor das relações e que quase NN nos falamos por que vocês ficam o dia todo no trabalho, mas mesmo com tudo isso eu ainda amo vocês, mesmo com toda essa cobrança e expectativas altas, eu amo muito vocês
    </NewNotePadContent>,//4
    <NewNotePadContent>
      Eu sinceramente não tenho palavras pra descrever o quão importante você foi pra mim, me ajudando a passar por muitos momentos difíceis, me levando pra passear na sua moto quando eu estava triste, e simplesmente estando lá pra me ouvir e me aconselhar, você não tem ideia do quanto isso me ajudou. Não sei o que seria da minha vida se você não existe, sinceramente eu estaria perdido. Muito obrigado por ser o melhor irmão do mundo.
    </NewNotePadContent>,//5
    <NewNotePadContent>
      1- Contas da Internet: maracujáémuitobomeudiriaqueéamelhorfruta
      2-Internet de casa: ovizinhoqueroubarainternetvairecebersetemisseisdogovernonaportadafrente
    </NewNotePadContent>,//6
    <NewNotePadContent>
      
    </NewNotePadContent>//7
    ]
    let textoAcessado = parseInt(id.replace('notePad', ''));
    var notePadContent = textos[textoAcessado];
    //O número serve como index do array de textos, onde irá guardar o texto do respectivo numero do id, e retornará
    return notePadContent;
  }
  
  export default notePadContentFunc;
