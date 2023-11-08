// git add .
// git commit -m "Adicionado um comentario de exemplo"
// git push
// npm run deploy

import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';

import notePadContentFunc from './notePad';

import './css/barraDeTarefas.css';
import './css/desktop.css';
import './css/menuIniciar.css';
import './css/blankWindow.css';
import './css/folder.css';
import './css/notePad.css';

function BlankWindow(props) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleDragStop = (e, data) => {
    setWindowPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable
      handle=".topBar"
      bounds={
        isMaximized
          ? { top: 0, left: 0, right: 0, bottom: 0 }
          : { top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight }
      }
      disabled={isMaximized}
      position={isMaximized ? { x: 0, y: 0 } : windowPosition}
      onStop={handleDragStop}
    >
      <div className={`janela ${isMaximized ? 'maximized' : ''}`} data-status="restaurado">
        <div className="topBar">
        <div className="area-buttons">
          <button aria-label="Minimize" /*onClick={props.minimizeWindow}*/></button>
          <button aria-label="Maximize" ref={props.elementRef} onClick={toggleMaximize}></button>
          <button id="closeBtn" aria-label="Close" onClick={props.closeWindow}></button>
        </div>
        </div>

        <div className="janela_body">
          {props.content}
        </div>
      </div>
    </Draggable>
  );
}
const Separador = () => {
  return(
    <div className='separadorItemIniciar'></div>
  );
}
const App = () => {
  const elementRef = useRef(null);
  const [isBlankWindowOpen, setBlankWindowOpen] = useState(false);
  const [isMenuIniciarOpen, setMenuIniciarOpen] = useState(false); // Estado para controlar a visibilidade do menu Iniciar
  const [content, setContent] = useState('Conteúdo Padrão'); // Estado para controlar o conteúdo da janela body
  const [progColor, setProgColor] = useState('transparent');
  const [programaSelecionado, setProgramaSelecionado] = useState(null);
  const [activeWindowZIndex, setActiveWindowZIndex] = useState(1);



  const handleSingleClick = (id) => {
    console.log(`Clicado no programa: ${id}`);
    if (programaSelecionado === id) {
      // Se o programa já estiver selecionado, deselecione-o
      setProgramaSelecionado(null);
    } else {
      // Caso contrário, selecione o programa
      setProgramaSelecionado(id);
    }
  };

  const handleDoubleClick = (id) => {
    switchProg(id);
  };
  
  const NewProgIcon = (props) => {
    const isSelected = programaSelecionado === props.id;

    if (!props.type){
      return (
        <div className={`prog ${isSelected ? 'selected' : ''}`} 
          id={props.id} 
          style={{ backgroundColor: progColor[props.id]}} 
          onClick={() => {
            setTimeout(() => {
              handleSingleClick(props.id);
            }, 200); // 200 milissegundos
          }} 
          onDoubleClick={() => handleDoubleClick(props.id)}
        >
          <img src={props.imgSrc} alt={props.children} />
          <span>{props.children}</span>
        </div>
      );
    }
    else if (props.type == 'itemIniciar'){
      return (
        <li className='listaIniciarItem prog' id={props.id} onClick={() => switchProg(props.id)}>
            <img src={props.imgSrc} alt={props.children} />
            <span>
              <strong id='title'>{props.title}</strong>
              <p id='subTitle'>{props.children}</p>
            </span>
        </li>
      );
    }else if (props.type == 'itemTarefas'){
      return (
        <div className={`prog ${isSelected ? 'selected' : ''}`} 
          id={props.id} 
          style={{ backgroundColor: progColor[props.id]}} 
          onClick={() => switchProg(props.id)} 

        >
          <img src={props.imgSrc} alt={props.children} />
          <span>{props.children}</span>
        </div>
      );
    }

  };
  
  function switchProg(id) {
    setBlankWindowOpen(true);
    updateContent(id);
    setActiveWindowZIndex(activeWindowZIndex + 1);
  }

  

  const updateContent = (id) => {
    var explorerContent = 
      <iframe src='/wondowsXp_React/programas/googleCopia/navegador.html'></iframe>
    ;

    var pcContent = 
      <iframe src='/wondowsXp_React/index.html'></iframe>
    ;

    var cmdContent = 
      <iframe src='/wondowsXp_React/programas/cmd/cmd.html'></iframe>
    ;

    var folderContent = 
    <div id='content'>
      <div id='topFolderBar'>
        <img src='/wondowsXp_React/images/top.png'></img>
      </div>
      <div id='sideFolderBar'>
        <img src='/wondowsXp_React/images/side.png'></img>
      </div>
      <div id='bloco'>
      <NewProgIcon type="itemIniciar" id="explorer" imgSrc="/wondowsXp_React/images/icons/internet-explorer-8.png">
        Internet Explorer
      </NewProgIcon>
      <NewProgIcon type="itemIniciar" id="explorer" imgSrc="/wondowsXp_React/images/icons/internet-explorer-8.png">
        Internet Explorer
      </NewProgIcon>
      </div>
    </div>
    ;

    
    if (id === 'explorer') {
      setContent(explorerContent);
    } else if (id === 'pc') {
      setContent(pcContent);
    } else if (id === 'cmd') {
      setContent(cmdContent);
    } else if (id === 'folder') {
      setContent(folderContent);
    } else if (id.includes('notePad')) {//checa se na id do elemento, exite a palavra notePad (os ids desse elemento são por exemplo "notePad1")
      setContent(notePadContentFunc(id));
    } else {
      setContent('Conteúdo Padrão');
    }
  };

  const toggleMenuIniciar = () => {
    setMenuIniciarOpen(!isMenuIniciarOpen);
  };

  return (
    <div id="wondos_vista">
      <div id="desktop">
        <NewProgIcon id="explorer" imgSrc="/wondowsXp_React/images/icons/internet-explorer-8.png">
          OutsideNet Searcher
        </NewProgIcon>
        <NewProgIcon id="pc" imgSrc="/wondowsXp_React/images/icons/pc.png">
          Pc
        </NewProgIcon>
        <NewProgIcon id="cmd" imgSrc="/wondowsXp_React/images/icons/cmd.png">
          CMD
        </NewProgIcon>
        <NewProgIcon id="folder" imgSrc="/wondowsXp_React/images/icons/folder.png">
          Pasta teste
        </NewProgIcon>
        <NewProgIcon id="notePad0" imgSrc="/wondowsXp_React/images/icons/notePad.png">
          Anotação teste 1
        </NewProgIcon>
        <NewProgIcon id="notePad1" imgSrc="/wondowsXp_React/images/icons/notePad.png">
          Anotação teste 2
        </NewProgIcon>
      
      {isBlankWindowOpen && (
        
        <BlankWindow
          closeWindow={() => setBlankWindowOpen(false)}
          content={content} 
          bounds={{
            top: 0,
            left: 0,

          }}
          elementRef={elementRef} 
          style={{ zIndex: activeWindowZIndex }}
        />
      )}
      </div>
      
      {isMenuIniciarOpen && (
        <div id="menuIniciar">
          <div id="topoIniciar">
            <div id='perfil'>
              <img id='avatar' src='https://i.redd.it/tb3mnb7dzcd51.jpg'></img>
              <strong id='user'>Jimmy</strong>
            </div>
          </div>
          <div id="conteudoIniciar">
            <div id="conteudoIniciarEsq">
              <ul id='listaIniciar'>
                <NewProgIcon 
                title="Explorer" 
                type="itemIniciar" 
                id="explorer" 
                imgSrc="/wondowsXp_React/images/icons/internet-explorer-8.png">Internet Explorer</NewProgIcon>
                <NewProgIcon 
                title="Explorer" 
                type="itemIniciar" 
                id="explorer" 
                imgSrc="/wondowsXp_React/images/icons/internet-explorer-8.png">Internet Explorer</NewProgIcon>
                <Separador />
                <NewProgIcon 
                title="Explorer" 
                type="itemIniciar" 
                id="explorer" 
                imgSrc="/wondowsXp_React/images/icons/internet-explorer-8.png">Internet Explorer</NewProgIcon>
              </ul>
            </div>
            <div id="conteudoIniciarDir">
              <ul id='listaIniciar'>
              <NewProgIcon 
                title="Explorer" 
                type="itemIniciar" 
                id="explorer" 
                imgSrc="/wondowsXp_React/images/icons/internet-explorer-8.png">Internet Explorer</NewProgIcon>
              </ul>
            </div>
          </div>
          <div id="footerIniciar"></div>
        </div>
      )}
        {/* Barra inferiror*/}
        <div id="barraTarefas">
            {/* Botão do menu inicar */}
            <div id="btnIniciar" onClick={toggleMenuIniciar}>
                <img src="/wondowsXp_React/images/icons/Windows-icon.png" alt="inicar"/>
                <span>Iniciar</span>
                {/* Iniciar */}
            </div>

            {/* Programas da barra inferiror */}
            <div id="progTarefas">
              <NewProgIcon 
                  title="Explorer" 
                  type="itemTarefas" 
                  id="explorer" 
                  imgSrc="/wondowsXp_React/images/icons/internet-explorer-8.png"
                >
                  Internet Explorer
              </NewProgIcon>
            </div>

            <div id="ferramentas">
                <div className="ferramenta">
                    <img src="/wondowsXp_React/images/icons/ModernXP-03-System-Lock-icon.png" alt="lock"/>
                </div>
                <div className="ferramenta">
                    <img src="/wondowsXp_React/images/icons/ModernXP-03-System-Lock-icon.png" alt="lock"/>
                </div>
                <div className="ferramenta">
                    <img src="/wondowsXp_React/images/icons/ModernXP-03-System-Lock-icon.png" alt="lock"/>
                </div>
                <div className="ferramenta" id="relogio">
                    16:12
                </div>
            </div>
         </div>
         </div>
  );
};
export default App;
