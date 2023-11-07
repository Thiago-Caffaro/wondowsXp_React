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
        <NewNotePadContent>AAAA</NewNotePadContent>,//0
        <NewNotePadContent>BBBB</NewNotePadContent>//1
    ]
    let textoAcessado = parseInt(id.replace('notePad', ''));
    var notePadContent = textos[textoAcessado];
    //O número serve como index do array de textos, onde irá guardar o texto do respectivo numero do id, e retornará
    return notePadContent;
  }
  
  export default notePadContentFunc;
