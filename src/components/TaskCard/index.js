import React from 'react';
import * as S from './styles';

import typeIcons from '../../utils/typeIcons';

function TaskCard(props) {

  return (
    <>
      {props.task.map((name, i)=>
        <S.Container key={i} done={name.done}>
          <S.TopCard>
            <img src={typeIcons[name.type]} alt="Icone da Tarefa"/>
            <h3>{name.title}</h3>
          </S.TopCard>
          <S.BottomCard>
            <strong>{name.when}</strong>
          </S.BottomCard>
        </S.Container>
        
        )}
    </>
  )
}

export default TaskCard;
