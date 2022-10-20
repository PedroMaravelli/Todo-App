import * as S from './styles'
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'
import {Link} from 'react-router-dom'



function Header(props) {
    return(
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt=''></img>
            </S.LeftSide>
            <S.RightSide>
                    
                

                <Link to='/'><button type='submit'>Inicio</button></Link>
                <div className='dividir'></div>
                <a href='/'><button type='submit'>Nova Tarefa</button></a>
            
                <button><img  src={bell} alt=''></img> <span>3</span></button>
                

                

            </S.RightSide>
        </S.Container>
    )

}

export default Header