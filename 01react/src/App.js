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
        props.onChangeMode(Number(event.target.id));
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

function Create(){
  return <article>
    <h2>Create</h2>
    <form>
      <p><input type="text" name="title" placeholder='title'/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}

function App() {
  //const _mode = useState ('WELCOME'); //초기값
  //const mode = _mode[0]; //상태의 값을 읽음
  //const setMode = _mode[1]; //setmode를 통해서 값을 바꿈

  const [mode, setMode] = useState ('WELCOME');
  const [id, setId] = useState (null);
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
    let title, body =null;
    for(let i = 0; i < topics.length; i++){
      if(topics[i].id === id){
        title=topics[i].title;
        body=topics[i].body;
      }
    }
    content= <Article title={title} body={body}></Article>
  }
  else if (mode === 'CREATE'){
    content= <Create></Create>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <a href="/create" onClick={event=>{
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
    </div>

  );
}

export default App;
