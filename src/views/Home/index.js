import React, {useState} from 'react';
import FilterCard from '../../components/FilterCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as S from './styles';
import TaskCard from '../../components/TaskCard';
import api from '../../services/api';



function Home() {
    
    const [filterActived, setFilterActived] = useState('all');

    const [taskList, setTaskList] = useState([])
    api.get('/task/filter/all/321654').then(response=>{
     setTaskList(response.data)
    })

    
    let title = ['Hoje', 'Semana', 'Todos', 'Ano', 'Mês']

    
    return (
        <S.Container>
            
            <Header ></Header>

            <S.FilterArea>
                <button onClick={()=> setFilterActived('today')}>
                    <FilterCard title='Hoje' actived={filterActived === 'today'}></FilterCard>
                </button>  
                <button onClick={()=> setFilterActived('week')}>  
                    <FilterCard title='Semana' actived={filterActived === 'week'}></FilterCard>
                </button>
                <button onClick={()=> setFilterActived('all')}>  
                    <FilterCard title='Todos' actived={filterActived === 'all'}></FilterCard>
                </button>
                <button onClick={()=> setFilterActived('year')}>  
                    <FilterCard title='Ano' actived={filterActived === 'year'}></FilterCard>
                </button>
                <button onClick={()=> setFilterActived('month')}> 
                    <FilterCard title='Mês' actived={filterActived === 'year'}></FilterCard>
                </button>

            </S.FilterArea>

            <S.Title>
                <h3>TAREFAS</h3>
            </S.Title>
            <S.Content>
            {taskList.map((t)=>(
                  <TaskCard key={t._id} type={t.type} title={t.title} when={t.when} done={t.done}/>
                ))}
            </S.Content>
            <Footer></Footer>
        </S.Container>
    )
}

export default Home;
