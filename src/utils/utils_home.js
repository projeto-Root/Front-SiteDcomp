import cc from '../assets/cc.png'
import ec from '../assets/ec.png'
import si from '../assets/si.png'
import dcomp from '../assets/dcomp.jpg'
import labinfo from '../assets/labinfo.jpg'
import audit from '../assets/audit.jpg'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'

export const dcompHomeIntroduction = `O DComp dá suporte primordialmente aos cursos de 
Bacharelado em Ciência da Computação, Bacharelado em Engenharia de Computação e Bacharelado 
em Sistemas de Informação, além da oferta de disciplinas na área de computação a diversos cursos 
da Universidade.`;

export const descriptionOfCourses = [
  {
    name: "Ciência da Computação",
    describe: `
      Computação deverá assumir um papel de racionalização, 
      desenvolvimento e automação de rotinas administrativas 
      das organizações, e no suporte aos seus sistemas de controle 
      operacional e gerencial, através da análise, projeto e implementação 
      de sistemas.`,
    img: cc,
  },
  {
    name: "Engenharia da Computação",
    describe: `
      O Engenheiro de Computação deverá ter uma sólida formação técnico-científica 
      e profissional geral que o capacite com os conhecimentos de Ciência da Computação 
      e de Engenharia Elétrica necessários ao projeto de sistemas de computação completos.`,
    img: ec,
  },
  {
    name: "Sistemas da Informação",
    describe: `
      O Bacharel em Sistemas de Informação deve ser capaz de gerenciar e desenvolver modelos 
      associados e métodos de gestão da área de sistemas de informação além de modelos empregados 
      no diagnóstico, planejamento, implementação e avaliação de projetos de sistemas de informação.`,
    img: si,
  },
];

export const descriptionOfEstructures = [
  {
    name: "Sede do Departamento de Computação",
    describe: `
      O Departamento de Computação possui um auditório, trinta salas de professores, 
      dez laboratórios, banheiros no térreo e no pavimento superior, elevador, salas de 
      reuniões e sala da secretaria.`,
    img: dcomp,
  },
  {
    name: "Laboratórios do Departamento de Computação",
    describe: `
      Atualmente o DCOMP dispõe de 10 laboratórios de informática em sua estrutura sede, 
      sendo compostos por computadores de última geração e em bom estado de conservação para 
      utilização dos alunos.`,
    img: labinfo,
  },
  {
    name: "Auditório do Departamento de Computação",
    describe: `
      O auditório possui capacidade para acomodar até 100 pessoas, servindo como um espaço para 
      palestras, mini-cursos e outros eventos relacionados à área de computação.`,
    img: audit,
  },
];

export const descriptionOfComments = [
  {
    name: "Flávia Santos",
    describe: `
    A estrutura do curso me chamou bastante atenção ao escolher cursar Sistemas de Informação, 
    os professores são muito bem qualificados, a grade de disciplinas é compatível com o que o mercado
    demanda.`,
    img: user1,
    rate: "5/5",
  },
  {
    name: "Luiz Almeida",
    describe: `
    A oportunidade de fazer parte de projetos de pesquisa e extensão do DCOMP foi algo que me preparou 
    para o mercado de trabalho e tanbém para possivelmente progredir em uma carreira como pesquisador.`,
    img: user2,
    rate: "4.5/5",
  },
];
