import React from 'react';
import FilterCard from '../../components/FilterCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as S from './styles';
import TaskCard from '../../components/TaskCard';



function Home() {
    const tasks = [{ "done": false, "created": "2021-10-23T20:05:31.643Z", "_id": "101", "macaddress": "9191", "type": 5, "title": "Futebol Com a Galera", "description": "Jogar Futebol", "when": "10/05/2021", "__v": 0 },
    { "done": false, "created": "2021-10-23T20:05:31.643Z", "_id": "102", "macaddress": "6666", "type": 2, "title": "Comprar Café", "description": "Café é Vida", "when": "11/05/2021", "__v": 0 }]

    
    let title = ['Hoje', 'Semana', 'Todos', 'Ano', 'Mês']
    
    return (
        <S.Container>
            
            <Header ></Header>

            <S.FilterArea>
                <FilterCard title={title} actived={false}></FilterCard>
                

            </S.FilterArea>

            <S.Title>
                <h3>TAREFAS</h3>
            </S.Title>
            <S.Content>
                <TaskCard task={tasks}></TaskCard>
            </S.Content>
            <Footer></Footer>
        </S.Container>
    )
}

export default Home;
