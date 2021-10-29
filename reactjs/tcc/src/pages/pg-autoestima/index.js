//import {Link} from 'react-router-dom'
import {Container} from './styled';
import Cabecalho from  '../../componentes/comum/cabecalho'
import img1 from  '../../assets/imagens/pg-autoestima-fx1.png'
import img2 from  '../../assets/imagens/pg-autoestima-fx2.png'
import img3 from  '../../assets/imagens/pg-autoestima-fx3.png'
import img4 from  '../../assets/imagens/pg-autoestima-fx4.png'
import img5 from  '../../assets/imagens/pg-autoestima-fx5.png'
import img6 from  '../../assets/imagens/pg-autoestima-fx6.png'

export default function Autoestima ()
{
    return(
        <Container>
            <Cabecalho/>
          
            <div className="container">

                <div className="faixa1">

                    

                    <div className="conteudo">

                        <div className="conteudo-texto1">

                            <div className="titulo">Autoestima</div>

                            <div className="subtitulo">Veja algumas formas de aumentar a sua  autoestima, ame teu corpo, teu cabelo, teu  jeito, a tua essência, VOCÊ É INCRÍVEL !!</div>

                        </div>
                        
                        <div className="imga2">
                        <img className="autoestima2" src={img1} alt=""/>
                        </div>

                    </div>

                </div>

                <div className="faixa2">

                <div className="faixa2-img">
                    <img src={img2} alt=""/>
                </div>

                <div className="faixa2-conteudo">

                    <div className="faixa2-texto1"> Seu corpo é sua casa </div>

                    <div className="faixa2-texto2"> Teu corpo é arte, tuas estrias são ondas do mar 
                        tatuadas em tua pele, é ele que carrega as sua histórias, as suas vitórias e mostra a mulher incrível que você é, as suas curvas saõ únicas, não deixe ninguém machuca-lo, você é preciosa </div>

                </div>

                </div>

                <div className="faixa3">

                <div className="faixa3-conteudo">

                <div className="faixa3-titulo">Cabelo, cabelo meu...</div>

                <div className="faixa3-texto2">Ame o teu cabelo, cada um tem seu jeitinho de ser, de algumas são mais enrolado de outras mais liso, ou ate cheio de “ondinhas”, mas todos eles são unicos, com a sua propria textura e cores, alguns são todos coloridos, outros mais “branquinhos”, mas todos são perfeitos do seu jeito.</div>

                </div>

                <div className="faixa3-img">
                <img src={img3}  alt=""/>
                </div>

                </div>

                <div className="faixa4">

                <div className="faixa4-img">
                    <img src={img4}  alt=""/>
                </div>

                <div className="faixa4-conteudo">

                    <div className="faixa4-texto1">O seu tempo</div>

                    <div className="faixa4-texto2">Tire tempo pra você,  assita um filme, faça uma nova receita, saia para passear, arrume-se pra você,  e veja o quão linda és, veja a mulher incrível e guerreira que você é</div>

                </div>

                </div>

                <div className="faixa5">

                <div className="faixa5-conteudo">

                    <div className="faixa5-texto1">Uma guerreira</div>

                    <div className="faixa5-texto2">Nunca deixe ninguém te dizer que não vai conseguir , você é forte, você consegue,  vai conquistar os teus sonhos e mostrar essa nova mulher para o mundo, não tenha medo </div>

                </div>

                <div className="faixa5-img">
                    <img src={img5} alt=""/>
                </div>

                </div>

                <div className="faixa6">

                <div className="faixa6-img">
                <img src={img6} alt=""/>
                </div>

                
                
                <div className="faixa6-texto">LUTE COMO  UMA GUERREIRA!!!</div>
                </div>   
                </div>

                        </Container>
                    )
                }
