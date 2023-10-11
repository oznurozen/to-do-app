import Header from './components/Header';
import Content from './components/Content';
import './App.css';
import Footer from './components/Footer';
import { TodoProvider } from './contexts/ToDoContext';



function App() {
  return (
    <TodoProvider>
      <section className='todoapp'>
        <Header/>
        <Content/>
    
      </section>    
      <Footer/>
    </TodoProvider>
    
  );
}

export default App;
