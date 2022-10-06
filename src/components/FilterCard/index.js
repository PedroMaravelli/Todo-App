import React from 'react';
import * as S from './styles';

import filter from '../../assets/filter.png';

function FilterCard(props) {

  return (
    <>
      {props.title.map((name, i) =>
        <S.Container key={i} actived={props.actived}>

          <span>{name}</span>
          <img src={filter} alt="Filtro" />


        </S.Container>
      )
      }
    </>
  )

}

export default FilterCard;
