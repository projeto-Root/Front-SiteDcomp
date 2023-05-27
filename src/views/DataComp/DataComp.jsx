import React from 'react'
import './DataComp.css'

const DataComp = () => {
  return (
    <div className='containerbi'>
       <h2 style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '2rem' }}>DATACOMP</h2>
      <p style={{ 
        textAlign: 'justify', 
        marginTop: '1rem'
      }}>
        O DataComp é um serviço desenvolvido pelo Project Root, focado em oferecer uma análise de Business Intelligence a respeito de dados relacionados ao Departamento de Computação. É possível visualizar graficamente a distribuição dos professores nas áreas da computação, além de verificar relações entre essas áreas e subáreas.
      </p>
        <iframe title="painel-profs" width="800" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiNzJhM2VlZjUtYmVhMi00NGE2LTk2N2EtY2U1MTI0NDQ4MDExIiwidCI6IjhlNTRmODJjLTBmOWQtNGE2Ny1iNTZlLTk5M2I3Y2ExOWVmMiJ9" frameborder="1" allowFullScreen="true"></iframe>
    </div>
  )
}

export default DataComp