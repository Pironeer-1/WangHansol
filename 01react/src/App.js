import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
  </article>
}
function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis=[]
  for (let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}
      </a>
      </li>);
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function App() {
  //const _mode = useState ('WELCOME'); //초기값
  //const mode = _mode[0]; //상태의 값을 읽음
  //const setMode = _mode[1]; //setmode를 통해서 값을 바꿈

  const [mode, setMode] = useState ('WELCOME');

  const topics=[
    {id:1, title: 'html', body: 'html is ...'},
    {id:2, title: 'css', body: 'css is ...'},
    {id:3, title: 'js', body: 'javascript is ...'},
  ]
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, web"></Article>
  }
  else if (mode === 'READ'){
    content= <Article title="READ" body="Hello, read"></Article>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        setMode('READ');
      }}></Nav>
      {content}
    </div>

  );
}

export default App;
