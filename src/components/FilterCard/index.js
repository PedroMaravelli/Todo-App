import React from 'react';
import * as S from './styles';

import filter from '../../assets/filter.png';

function FilterCard(props) {

  return (
    <>
          <S.Container  actived={props.actived}>

            <span>{props.title}</span>
            <img src={filter} alt="Filtro" />


          </S.Container>
      
        
      
      
      
    </>
  )

}

export default FilterCard;
