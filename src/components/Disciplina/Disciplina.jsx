import React, { useEffect, useState } from 'react'
import "./Disciplina.css"
import { Ciencia, Sistemas, Engenharia  } from '../../utils/util_disciplinas'
import { Select } from 'antd'
import { Option } from 'antd/es/mentions'
import { useLocation } from 'react-router-dom'

const Disciplina = ({initialCourse}) => {
    const [curso, setCurso] = useState(initialCourse) 
    const [periodo, setPeriodo] = useState("Primeiro_Periodo")
    const [disciplinas, setDisciplinas] = useState([])
    const periodos = ['Primeiro_Periodo', 'Segundo_Periodo', 'Terceiro_Periodo', 'Quarto_Periodo', 'Quinto_Periodo', 'Sexto_Periodo', 'Setimo_Periodo','Oitavo_Periodo','Nono_Periodo','Decimo_Periodo']

    const getDisciplinas = () => {
        if (periodo == 'Primeiro_Periodo') {
            setDisciplinas(curso.Primeiro_Periodo);
          } else if (periodo == 'Segundo_Periodo') {
            setDisciplinas(curso.Segundo_Periodo);
          } else if (periodo == 'Terceiro_Periodo') {
            setDisciplinas(curso.Terceiro_Periodo);
          } else if (periodo == 'Quarto_Periodo') {
            setDisciplinas(curso.Quarto_Periodo);
          } else if (periodo == 'Quinto_Periodo') {
            setDisciplinas(curso.Quinto_Periodo);
          } else if (periodo == 'Sexto_Periodo') {
            setDisciplinas(curso.Sexto_Periodo);
          } else if (periodo == 'Setimo_Periodo') {
            setDisciplinas(curso.Setimo_Periodo);
          } else if (periodo == 'Oitavo_Periodo') {
            setDisciplinas(curso.Oitavo_Periodo);
          } else if (periodo == 'Nono_Periodo') {
            setDisciplinas(curso.Nono_Periodo);
          } else if (periodo == 'Decimo_Periodo') {
            setDisciplinas(curso.Decimo_Periodo);
          } else {
            console.log('Período inválido');
          }
          
    }

    const changePeriodo = (periodo) => {
        setPeriodo(periodo.target.value)
        console.log(periodo)
    }

    useEffect(() => {
        getDisciplinas()
    },[periodo])


    return(
        <div>
            <div className='cards'>
                <div className='dados-curriculo'>
                    <h1 className='titulo-dados-curriculo'>Dados do Currículo</h1>
                    
                    <p className='info-dados-curriculo'>Código: {curso.Dados_Curriculo.Codigo} </p>
                    <p className='info-dados-curriculo'>Matriz Curricular: {curso.Dados_Curriculo.Matriz} </p>
                    <p className='info-dados-curriculo'>Período Letivo de Entrada em Vigor: {curso.Dados_Curriculo.Periodo} </p>
                    <p className='info-dados-curriculo'>Carga Horária: {curso.Dados_Curriculo.CargaH}</p>
                    <p className='info-dados-curriculo'>Prazos em Período Letivo: {curso.Dados_Curriculo.Prazo}</p>
                    <p className='info-dados-curriculo'>Créditos em Períodos Letivos: {curso.Dados_Curriculo.Creditos} </p>
                        
                </div>

                <div className='estrutura-curricular'>
                    <select onChange={changePeriodo} className='titulo-estrutura-curricular'>
                        {periodos && periodos.map((x) => <option value={x}>{x}</option>)}
                    </select>
                    <hr />
                    <h2 className='subtitulo-estrutura-curricular'>Estrutura Curricular</h2>
                    {disciplinas && disciplinas.map((disciplina) => {
                        return(
                            <div>
                                <hr />
                                <p className='info-dados-estrutura'> {disciplina} </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            

            <div className='requisitos'>
                <img src={curso.Img} alt="" />
            </div>

            <div className='chefe-curso'>
                <h1>Coordenador do curso</h1>
                <img src={curso.Chefe} alt="" className='icone-chefe-curso' />
            </div>
        </div>
    )
}

export default Disciplina