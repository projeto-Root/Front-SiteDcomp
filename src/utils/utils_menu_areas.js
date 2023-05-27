/*Import dos icons de cada áreas*/
import eng from "../assets/engenharia-de-software.png";
import info from "../assets/informatica-em-saude.png";
import apren from "../assets/aprendizado-de-maquina.png";
import arqui from "../assets/arquitetura-de-computadores.png";
import banco from "../assets/banco-de-dados.png";
import cienDados from "../assets/ciencia-de-dados.png";
import compGra from "../assets/computacao-grafica.png";
import compMus from "../assets/computacao-musical.png";
import edu from "../assets/educacao-em-engenharia-de-software.png";
import infoEdu from "../assets/informatica-educativa.png";
import artificial from "../assets/inteligencia-artificial.png";
import iot from "../assets/internet-das-coisas.png";
import jogos from "../assets/jogos-educativos-computacionais.png";
import lab from "../assets/laboratorios-virtuais-de-ensino.png";
import lingua from "../assets/linguagem-de-programacao.png";
import mine from "../assets/mineracao-de-dados.png";
import modelAp from "../assets/modelagem-de-aparencia.png";
import modelSimu from "../assets/modelagem-e-simulacao-de-sistemas.png";
import molda from "../assets/moldagem-e-avaliacao-de-desempenho-de-sistemas.png";
import otiComb from "../assets/otimizacao-combinatoria.png";
import otiMult from "../assets/otimizacao-multiobjetivo.png";
import proceImg from "../assets/processamento-de-imagens-digitais.png";
import proceLin from "../assets/processamento-de-linguagem-natural.png";
import programacao from "../assets/programacao-linear-inteira.png";
import redes from "../assets/redes-de-computadores.png";
import sistDis from "../assets/sistemas-distribuidos.png";
import sistEmb from "../assets/sistemas-embarcados.png";
import smart from "../assets/smart-cities.png";
import teoria from "../assets/teoria-da-computacao.png";
import visao from "../assets/visao-computacional.png";

/*Import das imagens de cada área*/

export const dataMenuAreas = {
  "Aquisição e Modelagem de Aparência": {
    content: [
      {
        icon: molda,
        img: "",
        topic: "O que é?",
        content:
          "A composição de cenas com alto grau de realismo sempre foi um forte tema de pesquisa em Computação Gráfica. Muitas vezes, gerar cenas naturais requer uma compreensão prévia dos agentes que alteram a aparência do ambiente e de como integrá-los a efeitos processados no computador. Uma das prioridades na Aquisição e Modelagem de Aparência consiste em gerar cenas com uma ótima qualidade e fidelidade visual ao mundo real. Mesmo que certas cenas renderizadas pareçam bem coerentes na simulação de efeitos fundamentais como iluminação, sombras e reflexão, muitas vezes é necessário incluir determinadas “imperfeições” para tornar os resultados mais naturais. A adição de imperfeições melhora a percepção final de uma imagem como natural.",
      },
      {
        topic: "Por que estudar Aquisição e Modelagem de Aparência?",
        content:
          "Como a variação de aparência de materiais normalmente está associada à influências físicas e químicas do ambiente, a tarefa de modelar tais efeitos não costuma ser trivial. Fenômenos como o apodrecimento de frutas e a corrosão de metais abrangem toda uma gama de características físicas e químicas determinantes na alteração visual do material em questão. A modelagem também consiste na capacidade de garantir que a informação digital permaneça acessível e com qualidades de autenticidade suficientes para que possa ser interpretada no futuro recorrendo a uma plataforma tecnológica diferente da do momento da sua criação, tendo assim um papel também de preservação histórica.",
        video: "",
      },
    ],
  },
  "Aprendizado de Máquina": {
    content: [
      {
        icon: apren,
        img: "",
        topic: "O que é?",
        content:
          "Machine Learning, traduzido como aprendizagem de máquina, é um subgrupo inserido no campo da Inteligência Artificial, sendo esta uma tecnologia e área de estudo mais ampla. Enquanto a Inteligência Artificial abrange todos os processos e resultados da engenharia envolvida na produção de uma máquina ou programa que possibilite imitar a inteligência humana, o Machine Learning diz respeito à habilidade dessa máquina de aprender “sozinha”, analisando bancos de dados independentemente da sua programação inicial. Os modelos gerados através de ML conseguem reconhecer padrões nos dados aos quais são expostos e, a partir disso, são capazes de melhorar o seu próprio desempenho. De modo geral, os algoritmos de Machine Learning podem ser divididos em três categorias principais: ML supervisionado, ML não supervisionado e aprendizado por reforço. Como o nome sugere, algoritmos supervisionados são conduzidos por um cientista de dados que possui um objetivo, espera um resultado específico e auxilia no processo de aprendizagem. No caso do processo não supervisionado, não existe uma condução constante por parte do cientista e o processo ocorre de maneira mais independente, sem um propósito ou resultado particular em vista. Já o aprendizado é o ensino que leva em conta a experiência, onde a máquina vai aprender de acordo com o que ela já errou anteriormente, buscando uma melhor performance.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "O especialista em Machine Learning é o responsável por criar cálculos que simulam o processo de decisão do cérebro de quem assiste aos filmes ou escuta as músicas. Para isso, ele irá trabalhar no processo de coleta de dados, entendimento dos padrões e, por fim, na inserção dessas informações no sistema.",
        video:
          "https://www.youtube.com/watch?v=0PrOA2JK6GQ&ab_channel=CiênciaTodoDia",
      },
    ],
  },
  "Arquitetura de Computadores": {
    content: [
      {
        icon: arqui,
        img: "",
        topic: "O que é?",
        content:
          "A Arquitetura de Computadores é o projeto conceitual e fundamental da estrutura operacional de um sistema computacional. É o estudo dos requisitos necessários para que um computador funcione e de como organizar os diversos componentes para obter melhores desempenhos. O termo Arquitetura é principalmente utilizado na construção e decoração de edificações. Ele diz respeito à forma e a estrutura de uma construção. O termo refere-se à arte ou a técnica de projetar e edificar o ambiente habitado pelo ser humano. Na Computação o termo foi adaptado para denominar a técnica de projetar e construir computadores.",
      },
      {
        topic: "Por que estudar Arquitetura de Computadores?",
        content:
          "É essencial que todos profissionais da Computação tenham pelo menos conhecimentos básicos de Arquitetura de Computadores. Saber como o computador funciona nos permitirá entender sua capacidade (e incapacidade) de resolver problemas, sobre como programá-los da melhor forma possível, como deixar o computador e os dados contidos neles mais seguros, como ganhar desempenho e o que faz ele ficar tão lento.",
        video: "https://youtu.be/z1dKDcsdofg",
      },
    ],
  },
  "Banco de Dados": {
    content: [
      {
        icon: banco,
        img: "",
        topic: "O que é?",
        content:
          "Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados DBMS. Juntos, os dados e o DBMS, juntamente com os aplicativos associados a eles, são chamados de sistema de banco de dados, geralmente abreviados para apenas banco de dados. Os dados nos tipos mais comuns de bancos de dados em operação atualmente são modelados em linhas e colunas em uma série de tabelas para tornar o processamento e a consulta de dados eficientes. Os dados podem ser facilmente acessados, gerenciados, modificados, atualizados, controlados e organizados. A maioria dos bancos de dados usa a linguagem de consulta estruturada SQL para escrever e consultar dados.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "Um profissional de análise de banco de dados é quem faz a administração dos servidores, acompanhamento de desempenho, programação de rotina, além de garantir a segurança de acesso. Este colaborador também cuidará de alguns dos KPIs estabelecidos pela empresa, identificando e solucionando determinados problemas.",
        video:
          "https://www.youtube.com/watch?v=ovnliKtbt0M&ab_channel=DevMedia",
      },
    ],
  },
  "Ciência de Dados": {
    content: [
      {
        icon: cienDados,
        img: "",
        topic: "O que é?",
        content:
          "A ciência de dados é o estudo dos dados para extrair insights significativos para os negócios. Ela é uma abordagem multidisciplinar que combina princípios e práticas das áreas de matemática, estatística, inteligência artificial e engenharia da computação para analisar grandes quantidades de dados. Essa análise ajuda os cientistas de dados a fazer e responder perguntas como o que aconteceu, por que aconteceu, o que acontecerá e o que pode ser feito com os resultados.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "Cientista de dados, ou data scientist, é um profissional analítico capacitado para reunir, interpretar, resolver problemas e comunicar toda informação relevante extraída de dados analisados das empresas armazenam informações sobre o comportamento das pessoas, sejam elas seus clientes, prospects, funcionários etc. Essa área de trabalho deve ganhar cada vez mais destaque porque, afinal, hoje em dia tudo pode se transformar em dados. O trajeto percorrido da sua casa até o trabalho gera dados. O tempo que você permanece conectado nas redes sociais gera dados.",
        video:
          "https://www.youtube.com/watch?v=ykSILAQQu6o&ab_channel=Nerdologia",
      },
    ],
  },
  "Computação Gráfica": {
    content: [
      {
        icon: compGra,
        img: "",
        topic: "O que é?",
        content:
          "A computação gráfica é a área da computação destinada à geração de imagens em geral em forma de representação de dados e informação, ou em forma de arte e recriação do mundo real. Ela pode possuir uma infinidade de aplicações para diversas áreas, desde a própria informática, ao produzir interfaces gráficas para software, sistemas operacionais e sites na Internet, quanto para produzir animações e jogos. É muito utilizada na indústria do entretenimento, engenharia, arquitetura, design, pesquisa científica e na área de comunicação.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "Quem atua no ramo da Computação Gráfica consegue desenvolver trabalhos de duas ou mais dimensões, simuladores digitais, maquetes eletrônicas e animação e educação de áudio e vídeo sendo um profissional indispensável em diferentes níveis do mercado de trabalho.",
        video:
          "https://www.youtube.com/watch?v=-4_OU95nKuU&ab_channel=Nerdologia",
      },
    ],
  },
  "Computação Musical": {
    content: [
      {
        icon: compMus,
        img: "",
        topic: "O que é?",
        content:
          "É um campo de pesquisa em ciência da computação com características multidisciplinares, voltado ao tratamento de elementos musicais por meio do computador. Trabalhos realizados neste campo envolvem conceitos como interação humano-computador, sistemas de recomendação, inteligência computacional, projeto de hardware, educação mediada por computador, sistemas interativos de tempo real, jogos digitais, realidade virtual, entre outros.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "Um profissional da área de CM pode trabalhar em diversos tópicos alguns deles são, Modelagem Acústica e Difusão, Composição Algorítmica , Vida Artificial e Música Evolutiva, Inteligência Artificial, Hardware para Áudio, Processamento de Sinais para Áudio e Musicologia Auxiliada por Computador.",
        video: "",
      },
    ],
  },
  "Educação em Engenharia de Software": {
    content: [
      {
        icon: edu,
        img: "",
        topic: "O que é?",
        content:
          "A educação em Engenharia de Software, em resumo, se aplica por conta das várias deficiências apresentadas pelos profissionais de engenharia de software recém-formados que trabalham na indústria. O método de ensino usualmente aplicado na educação em engenharia de software resume-se à extensa exposição de conteúdo e à realização de um projeto prático, que pouco reflete a situação real dos projetos existentes na indústria. Dentre as possibilidades de aproximar os estudantes a ambientes mais realísticos, a abordagem de adoção de projetos de código aberto (open source) tem-se apresentado como opção interessante, principalmente para os casos onde o contrato de cooperação com a indústria não seja viável. Diferentemente de projetos proprietários, o código e ambientes de desenvolvimento reais estão acessíveis por meio da Internet. O estudante pode estudar seu código, gerar contribuições e interagir com a comunidade de usuários e desenvolvedores do projeto.",
      },
      {
        topic: "Por que estudar Educação em Engenharia de Software?",
        content:
          "A importância em estudar educação em engenharia de software se dar pelo fato da vivência atual nas universidades não preparar totalmente o aluno para as situações atuais do mercado de trabalho, já que a engenharia de software como é passada em sala de aula muitas das vezes divergem do que realmente acontece no dia a dia em uma indústria por exemplo, o que se faz cada vez mais necessário o estudo dessa área.",
        video: "",
      },
    ],
  },
  "Engenharia de Software": {
    content: [
      {
        icon: eng,
        img: "",
        topic: "O que é?",
        content: "",
      },
      {
        topic: "O que faz um profissional da área?",
        content: "",
        video:
          "https://www.youtube.com/watch?app=desktop&v=uUCGKJni7Nk&ab_channel=Refatorando",
      },
    ],
  },
  "Informática Educativa": {
    content: [
      {
        icon: infoEdu,
        img: "",
        topic: "O que é?",
        content:
          "É a utilização de recursos computacionais, hardware e software, no processo ensino-aprendizagem. É a informática utilizada como recurso adicional, a serviço do professor e do aluno, independentemente da disciplina. Portanto, não é a substituição do professor por recursos tecnológicos, vez que o professor permanece como o principal ator do processo. Não existem regras de como aplicar a informática na educação, mas alguns fatores são determinantes para a obtenção de resultados positivos, como criatividade, planejamento, domínio de informática e tecnologias.",
      },
      {
        topic: "O que um profissional em Informática Educativa faz?",
        content:
          "Basicamente um profissional focado na área de Informática Educativa, faz uma coligação entre a parte retrógrada de ensino com o avanço da tecnologia onde, com o auxílio das novas tecnologias, seria bem mais fácil transmitir certos tipos de conteúdo em uma sala de aula,e que com isso melhoria gradativamente o aprendizado do estudante em todos os aspectos.",
        video:
          "https://www.youtube.com/watch?v=OKba9et2t2I&ab_channel=ELIANEALIRA",
      },
    ],
  },
  "Informática em Saúde": {
    content: [
      {
        icon: info,
        img: "",
        topic: "O que é?",
        content:
          "A Informática em Saúde é a área do conhecimento que trata da aplicação de conceitos e tecnologias de Informação e Comunicação (TIC) para a melhoria e transformação de sistemas, serviços e processos de Saúde. O termo eSaúde (tradução do inglês – eHealth) pode ser entendido dentro da mesma definição de informática em saúde e tem sido um termo bastante utilizado recentemente.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "Um profissional da área de eHealth pode trabalhar em diversos tópicos, alguns deles são: desenvolvimento de sistemas de informação em saúde, telemedicina, processamento de imagens médicas, processamento de sinais biológicos e outros.",
        video: "",
      },
    ],
  },
  "Inteligência Artificial": {
    content: [
      {
        icon: artificial,
        img: "",
        topic: "O que é?",
        content: "",
      },
      {
        topic: "O que faz um profissional da área?",
        content: "",
        video: "",
      },
    ],
  },
  "Internet das Coisas": {
    content: [
      {
        icon: iot,
        img: "",
        topic: "O que é?",
        content:
          "A Internet das Coisas (IoT) descreve a rede de objetos físicos incorporados a sensores, software e outras tecnologias com o objetivo de conectar e trocar dados com outros dispositivos e sistemas pela internet. Esses dispositivos variam de objetos domésticos comuns a ferramentas industriais sofisticadas. Com mais de 7 bilhões de dispositivos IoT conectados hoje, os especialistas esperam que esse número cresça para 10 bilhões em 2020 e 22 bilhões em 2025.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "O trabalho do profissional consiste em criar programas que permitem controlar dispositivos de hardware remotamente por meio de smartphones e tablets, bem como receber informação destes e conceber soluções voltadas para cada tipo de dispositivo. Para trabalhar com IoT, além de ter afinidade com matemática, é importante que o estudante tenha um perfil generalista, ou seja, seja flexível para entender um pouco de áreas que não são da sua formação básica mas com as quais, durante o trabalho, precisará dialogar.",
        video:
          "https://www.youtube.com/watch?v=Bu0m9Iq_dTI&ab_channel=TecMundo",
      },
    ],
  },
  "Jogos Educativos Computacionais": {
    content: [
      {
        icon: jogos,
        img: "",
        topic: "O que é?",
        content:
          "O desenvolvimento e em seguida a utilização de jogos educativos computacionais como recurso pedagógico está sendo cada vez mais adotado pelas instituições de Educação Infantil. Isso se deve aos benefícios advindos dessa nova forma de ensinar e aprender e, com isso, os educadores têm proporcionado um melhor ambiente de aprendizagem para os seus educandos.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "O desenvolvimento de um jogo educativo é uma atividade altamente  complexa, pois além da necessidade do desenvolvimento com o objetivo de  entreter um determinado público, é também necessário dedicar-se tempo ao conteúdo pedagógico a ser tratado no jogo e sua correlação com os demais  elementos de design do mesmo. Quem vai jogar este jogo? Onde ele será aplicado? Que recursos serão necessários para rodar o jogo? Existe orçamento para isso? É preciso uma análise profunda desse contexto para evitar que o jogo seja inviável de uso. Criar planos de contingência para que ele possa ser usado em vários contextos e entender que é uma área que exige estudo, tem técnicas para se criar um jogo, mesmo os não digitais é um norte a ser considerado pelo profissional que atua nessa área. Também que jogo faz parte do entretenimento, mas nem sempre é divertido o processo de fazê-lo.",
        video:
          "https://www.youtube.com/watch?v=IGsQzOgzjaQ&ab_channel=MovimentosDocentes",
      },
    ],
  },
  "Laboratórios Virtuais de Ensino": {
    content: [
      {
        icon: lab,
        img: "",
        topic: "O que é?",
        content:
          "Um laboratório virtual é um elemento tecnológico capaz de levar o aluno a um ambiente prático de aprendizagem simulando um ambiente real, uma situação real. Costuma-se chamar os laboratórios virtuais de Simuladores de Prática Profissional, já que a ideia é expor o aluno a uma realidade virtual de aprendizado. Essa tecnologia possui extrema precisão nas operações e medidas, possíveis erros e equívocos cometidos pelos alunos durante os procedimentos. Com a diferença de o ambiente ser controlado, sem riscos ou custos elevados.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "As plataformas são desenvolvidas por uma equipe de Tecnologia da Informação (TI) em parceria com profissionais das disciplinas que estão sendo virtualizadas. As equipes formadas por esses profissionais usam ambientes de desenvolvimento para criar vários tipos de laboratórios, simulando assim experimentos, buscando apresentar o máximo nível de imersão e compromisso com a realidade durante o uso do laboratório.",
        video:
          "https://www.youtube.com/watch?v=pweav7My8wA&ab_channel=SistemadeEnsinoCNEC",
      },
    ],
  },
  "Linguagens de Programação": {
    content: [
      {
        icon: lingua,
        img: "",
        topic: "O que é?",
        content:
          "É por onde o hardware (máquina) e o programador se comunicam. É uma linguagem formal que funciona por meio de uma série de instruções, símbolos, palavras-chave, regras semânticas e sintáticas. A linguagem de programação permite que um programador crie programas a partir de um conjunto de ordens, ações consecutivas, dados e algoritmos. As linguagens de programação foram criadas para solucionar qualquer tipo de problema na área tecnológica computacional. Acompanhando todas as tendências da tecnologia, elas estão sempre em constante evolução, buscando oferecer as mais modernas ferramentas para as mais complexas tarefas. Cada linguagem possui suas particularidades, e isso as torna adequadas para solucionar os mais diversos problemas e desenvolver inovações.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "Como o nome nos indica, a função do programador é programar. Certo, mas programar o quê? A programação em questão se refere a programas (softwares) de computador, aplicativos para smartphone e para outros dispositivos eletrônicos. Além disso, desenvolve sites e outras ferramentas para a web. Além das atribuições mencionadas acima, desenvolver sites, aplicativos e softwares para os mais variados dispositivos, o programador também atua com a manutenção dessas ferramentas, garantindo que elas continuem funcionando bem sem se tornarem obsoletas e consertando possíveis bugs da criação.",
        video: "https://youtu.be/yT22ylhonfs",
      },
    ],
  },
  "Mineração de Dados": {
    content: [
      {
        icon: mine,
        img: "",
        topic: "O que é?",
        content:
          "A mineração de dados é formada por um conjunto de ferramentas e técnicas que através do uso de algoritmos de aprendizagem ou classificação baseados em redes neurais e estatística, são capazes de explorar um conjunto de dados, extraindo ou ajudando a evidenciar padrões nestes dados e auxiliando na descoberta de conhecimento. Esse conhecimento pode ser apresentado por essas ferramentas de diversas formas: agrupamentos, hipóteses, regras, árvores de decisão, grafos, ou dendrogramas. Diariamente as empresas acumulam grande volume de dados em seus aplicativos operacionais. São dados brutos que dizem quem comprou o quê, onde, quando e em que quantidade. É a informação vital para o dia-a-dia da empresa. Se fizermos estatística ao final do dia para repor estoques e detectar tendências de compra, estaremos praticando business intelligence (BI). Se analisarmos os dados com estatística de modo mais refinado, à procura de padrões de vinculações entre as variáveis registradas, então estaremos fazendo mineração de dados. Buscamos com a MD conhecer melhor os clientes, seus padrões de consumo e motivações. A MD resgata em organizações grandes o papel do dono atendendo no balcão e conhecendo sua clientela. Através da MD, esses dados agora podem agregar valor às decisões da empresa, sugerir tendências, desvendar particularidades dela e de seu meio ambiente e permitir ações melhor informadas aos seus gestores.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "As atividades de mineração de dados são semelhantes a uma pesquisa científica, mesmo quando realizadas em outros ambientes. Parte-se de um problema, investigando suas causas e indo atrás de resoluções. O diferencial é a maneira como os dados são trabalhados: a ideia-mãe é transformar dados em conhecimento. Um dos modelos mais conhecidos sobre como fazer a mineração de dados é atribuído ao cientista Usama Fayyad.",
        video:
          "https://www.youtube.com/watch?v=dWL0jvj1PJw&ab_channel=tecnologiaemvideo",
      },
    ],
  },
  "Modelagem de Avaliação e Desempenho de Sistemas": {
    content: [
      {
        icon: modelAp,
        img: "",
        topic: "O que é?",
        content:
          "Com a evolução tecnológica experimentada nas últimas décadas, outros tipos de requisitos foram acrescentados aos sistemas que fornecem serviços aos seus usuários, tal como desempenho, aqui com a conotação de algum tipo de satisfação gerada pela eficiência na realização da tarefa. De maneira que a execução dessa tarefa possa ser mais ou menos eficiente, tomando-se algum parâmetro como critério. A maneira pela qual será avaliado o desempenho depende diretamente das características do sistema envolvido.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "A função deste profissional é modelar técnicas estatísticas e matemáticas para a compreensão dos dados e ajudar as empresas a acelerar a identificar tendências, fazer previsões e tomar decisões baseadas em dados, da forma mais eficiente possível com base em indicadores de desempenho, por exemplo, acelerando o tempo de resposta de um sistema que cumpre bem sua função, porém, apresenta uma resposta lenta em relação ao que é exigido.",
        video: "https://youtu.be/5SrZnAkoZDs",
      },
    ],
  },
  "Modelagem e simulação de sistemas": {
    content: [
      {
        icon: modelSimu,
        img: "",
        topic: "O que é?",
        content:
          "A Modelagem e Simulação de Sistemas Computacionais permite representar Sistemas Computacionais por meio de modelos de simulação e reproduzir suas cadeias de causalidade, estimar e avaliar resultados e subsidiar o processo de tomada de decisões em nível de engenharia.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "Os profissionais, que atuam nesta área, devem ser capazes de: selecionar as técnicas de modelagem e simulação mais apropriadas para o sistema em questão; desenvolver o modelo matemático e computacional do sistema analisado; e avaliar os resultados das simulações realizadas a partir do modelo desenvolvido.",
        video:
          "https://www.youtube.com/watch?v=97907MOrXZI&ab_channel=WilsonCastello",
      },
    ],
  },
  "Otimização Combinatória": {
    content: [
      {
        icon: otiComb,
        img: "",
        topic: "O que é?",
        content:
          "É um ramo da ciência da computação e da matemática aplicada que estuda problemas de otimização em conjuntos finitos. Em um problema de otimização temos uma função objetivo e um conjunto de restrições, ambos relacionados às variáveis de decisão. Os valores possíveis às variáveis de decisão são delimitados pelas restrições impostas sobre essas variáveis, formando um conjunto discreto (finito ou não) de soluções factíveis a um problema. O problema pode ser de minimização ou de maximização da função objetivo. A resposta para o problema de otimização, ou seja, o ótimo global, será o menor (ou maior) valor possível para a função objetivo para o qual o valor atribuído às variáveis não viole nenhuma restrição.",
      },
      {
        topic: "O que faz um profissional da área?",
        content: "",
        video: "",
      },
    ],
  },
  "Otimização Multiobjeto": {
    content: [
      {
        icon: otiMult,
        img: "",
        topic: "O que é?",
        content:
          "A otimização multiobjetivo é uma área de tomada de decisão de múltiplos critérios que se preocupa com problemas de otimização matemática envolvendo mais de uma função objetivo a ser otimizada simultaneamente .A otimização multiobjetivo tem sido aplicada em muitos campos da ciência, incluindo engenharia, economia e logística, onde decisões ótimas precisam ser tomadas na presença de compensações entre dois ou mais objetivos conflitantes. Minimizar o custo maximizando o conforto ao comprar um carro e maximizar o desempenho minimizando o consumo de combustível e a emissão de poluentes de um veículo são exemplos de problemas de otimização multiobjetivo envolvendo dois e três objetivos, respectivamente. Em problemas práticos, pode haver mais de três objetivos.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "Um profissional da área tem como objetivo a solução dos problemas de otimização multiobjetivo que consiste em determinar, no Espaço Objetivo Factível, o Conjunto Eficiente, um Subconjunto do Conjunto Eficiente ou ainda, Conjuntos de soluções próximas da Fronteira Pareto-Ótima. O tamanho e a complexidade dos métodos de solução encontrados em grande parte dos problemas práticos exige a intervenção de um Tomador de Decisão.",
        video:
          "https://www.youtube.com/watch?v=R3wzECA3tDI&ab_channel=AneirsonSilva",
      },
    ],
  },
  "Processamento de Linguagem Natural": {
    content: [
      {
        icon: proceLin,
        img: "",
        topic: "O que é?",
        content: "",
      },
      {
        topic: "Importância do Processamento de Linguagem Natural",
        content: "",
        video:
          "https://www.youtube.com/watch?v=vbtErRXkHqg&ab_channel=IAExpertAcademy",
      },
    ],
  },
  "Processamento de Imagens Digitais": {
    content: [
      {
        icon: proceImg,
        img: "",
        topic: "O que é?",
        content: "",
      },
      {
        topic: "O que faz um profissional da área?",
        content: "",
        video:
          "https://www.youtube.com/watch?v=T9V_axU6jU8&ab_channel=ProgramaçãoDinâmica",
      },
    ],
  },
  "Programação Linear Inteira": {
    content: [
      {
        icon: programacao,
        img: "",
        topic: "O que é?",
        content:
          "A Programação Inteira pode ser entendida como uma caso específico da Programação Linear, onde as variáveis devem ser inteiras (ou ao menos, parte destas variáveis). A rigor, o nome mais correto para a Programação Inteira é Programação Linear Inteira. Quando todas as variáveis devam possuir valores inteiros, o modelo é denominado de um problema de Programação Inteira Pura, caso contrário, é denominado de um problema de Programação Inteira Mista.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "Os profissionais que possuem conhecimento na área de programação linear inteira, fazem uso da mesma técnica de otimização, é utilizada para solucionar problemas operacionais dos mais variados tipos, tais como programação da produção, definição de mix de produção, definição de rotas, planejamento de investimentos, priorização de atendimento de pedidos, entre outros tipos de problemas.",
        video: "https://youtu.be/EFkL74og09k",
      },
    ],
  },
  "Redes de Computadores": {
    content: [
      {
        icon: redes,
        img: "",
        topic: "O que é?",
        content:
          "Redes de computadores referem-se a dispositivos de computação interconectados que podem trocar dados e compartilhar recursos entre si. Esses dispositivos em rede usam um sistema de regras, chamados de protocolos de comunicação, para transmitir informações por meio de tecnologias físicas ou sem fio. Nós e links são os blocos de construção básicos em redes de computadores. Um nó de rede pode ser um equipamento de comunicação de dados (DCE), como um modem, hub ou switch, ou um equipamento terminal de dados (DTE), como dois ou mais computadores e impressoras. Um link refere-se ao meio de transmissão que conecta dois nós. Os links podem ser físicos, como fios de cabos ou fibras ópticas, ou espaço livre usado por redes sem fio. Em uma rede de computadores em funcionamento, nós seguem um conjunto de regras ou protocolos que definem como enviar e receber dados eletrônicos por meio dos links. A arquitetura de rede de computadores define o design desses componentes físicos e lógicos. Ela fornece as especificações para os componentes físicos da rede, organização funcional, protocolos e procedimentos.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "Em outras palavras, o Técnico em Redes de Computadores é o profissional que monta, configura e faz a manutenção de computadores em rede. Ele também realiza a instalação e a configuração de dispositivos de comunicação digital e de sistemas operacionais.",
        video:
          "https://www.youtube.com/watch?v=sxp3jfaV7TA&ab_channel=ProfessoraNattane",
      },
    ],
  },
  "Sistemas Distribuídos": {
    content: [
      {
        icon: sistDis,
        img: "",
        topic: "O que é?",
        content:
          "O conceito de sistema distribuído é de um sistema que possui componentes localizados em computadores interligados em rede e que se comunicam e coordenam suas ações através da troca de mensagens entre os componentes. É comum pensarmos em componentes como sendo apenas servidores e máquinas conectadas em rede, mas quando falamos de componentes podem ser componentes de hardware ( servidores ) ou de software ( aplicações e serviços ). Os componentes interligados em rede podem estar separados por qualquer distância. No mesmo edifício de uma empresa, na mesma cidade, mesmo estado, no mesmo país ou até em continentes diferentes.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "Em geral, para um técnico fazer um sistema distribuído para se comportar como um sistema único se faz necessário o compartilhamento de dados dos sistemas componentes. Este é um elemento chave que permite às diferentes partes trabalharem juntas. Isto é comumente realizado utilizando interfaces de memória reflexiva. Com o intuito de que aconteça o compartilhamento de recursos é a principal motivação para se construir sistemas distribuídos. O recurso pode ser um componente de hardware, um disco ou impressora, um software, um serviço, um arquivo e objetos de dados de todos os tipos, áudio, vídeo, etc.",
        video: "https://www.youtube.com/watch?v=34RvRBXzvMo&ab_channel=UNIVESP",
      },
    ],
  },
  "Sistemas Embarcados": {
    content: [
      {
        icon: sistEmb,
        img: "",
        topic: "O que é?",
        content:
          "Sistemas embarcados são dispositivos com capacidade de processamento de dados e que estão inseridos em um determinado dispositivo ou produto, de forma a desempenhar uma função ou servir a uma aplicação específica. O núcleo destes sistemas são os microcontroladores, que nada mais são que unidades de processamento bastante flexíveis em termos de sua utilização e facilidade de aplicação. Um bom exemplo disto são os “smartphones” ou telefones celulares, que possuem atualmente incontáveis aplicações. Os sistemas embarcados estão irreversivelmente inseridos em nosso cotidiano e encontram aplicações não somente em produtos comerciais de prateleira, mas nas áreas de saúde, financeira, energia, recursos hídricos, comunicações, transportes, construção civil, serviços essenciais à comunidades, aeroespacial, defesa, entre outras.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "O profissional de Sistemas Embarcados pode atuar em empresas de planejamento, desenvolvendo projetos de automação, eletrônicos e computacionais. Pode atuar também em assistências técnicas e consultorias e em empresas nas áreas de tecnologia, automotiva, segurança e automação residencial, comercial e industrial.",
        video:
          "https://www.youtube.com/watch?v=XppU8kKpa6I&ab_channel=CódigoFonteTV",
      },
    ],
  },
  "Smart Cities": {
    content: [
      {
        icon: smart,
        img: "",
        topic: "O que é?",
        content:
          "Smart cities (cidades inteligentes) são sistemas de pessoas interagindo e usando energia, materiais, serviços e financiamento para catalisar o desenvolvimento econômico e a melhoria da qualidade de vida. Fazem uso da tecnologia em seu processo de planejamento com a participação dos cidadãos.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "Temas como Cidade 4.0, interação com cidadão, desburocratização, governança e gestão pública ágil permearam o segundo módulo do curso Smart City Expert. Dentro desta seara de criação e desenvolvimento de mecanismos e políticas públicas para desenvolver o “cidadão 4.0”, o trabalho do desenvolvedor de aplicativos, softwares e plataformas (geralmente ligado à TI) é essencial no incentivo e na aproximação cidadã nas decisões municipais. Ao se pensar a cidade como uma plataforma tecnológica, que interconecta todos os setores e necessidades dos cidadãos, abre-se caminho para os desafios da digitalização urbana, em que a Internet das Coisas (IOT) é uma das possibilidades aplicadas. Nesse sentido, profissionais que aplicam e adaptam tecnologias disponíveis para melhorar a gestão urbana, com Big Data, geoprocessamento e georreferenciamento, além das soluções de inteligência artificial, estão ganhando seu espaço em empresas e gestões públicas.",
        video: "https://youtu.be/dneYymnsM4M",
      },
    ],
  },
  "Teoria da Computação": {
    content: [
      {
        icon: teoria,
        img: "",
        topic: "O que é?",
        content:
          "A teoria da computação é um subcampo da ciência da computação e matemática que busca determinar quais problemas podem ser computados em um dado modelo de computação. A computação pode ser definida como a solução de um problema ou, formalmente, o cálculo de uma função por meio de um algoritmo.",
      },
      {
        topic: "O que faz um profissional da área?",
        content:
          "O cientista da computação estuda os princípios e fundamentos da computação teórica aplicada e a sua interação com o mundo real. Seu foco é construir softwares e desenvolver algoritmos, modelos computacionais e teorias computacionais para melhorar e empoderar a sociedade e os negócios.",
        video:
          "https://www.youtube.com/watch?v=H_d9uGc_K2c&ab_channel=AulasdeComputação",
      },
    ],
  },
  "Visão Computacional": {
    content: [
      {
        icon: visao,
        img: "",
        topic: "O que é?",
        content:
          "Visão computacional é a ciência e tecnologia das máquinas que enxergam. Ela desenvolve teoria e tecnologia para a construção de sistemas artificiais que obtêm informação de imagens ou quaisquer dados multidimensionais. Exemplos de aplicações incluem o controle de processos (como robôs industriais ou veículos autônomos), detecção de eventos, organização de informação, modelagem de objetos ou ambientes e interação (atrelado a interação humano-computador). A visão computacional também pode ser descrita como um complemento da visão biológica. Na visão biológica, a percepção visual dos humanos e outros animais é estudada, resultando em modelos em como tais sistemas operam em termos de processos fisiológicos. Por outro lado, a visão computacional estuda e descreve sistemas de visão artificial implementados por hardware ou software.",
      },
      {
        topic: "Usos de Visão Computacional",
        content:
          "Diversos são os usos da visão computacional, que é capaz de classificar imagens por padrões e, com isso, detectar objetos. Além disso, também rastreia objetos em vídeos, trabalhando não somente com imagens estáticas, mas também com aquelas em movimento. Ao desbloquear seu celular com o reconhecimento facial ou quando você tira uma foto segurando um documento para comprovar sua identidade, a visão computacional é a responsável por identificar um padrão entre as imagens e liberar o seu acesso. Multas de trânsito são outro exemplo da aplicação dessa tecnologia, que identifica veículos e suas placas, ligando a imagem ao dono do carro, ou mesmo em fábricas, em que há a inspeção de qualidade nas linhas de produção.",
        video:
          "https://www.youtube.com/watch?v=RSkbjZZb-1c&ab_channel=ProgramaçãoDinâmica",
      },
    ],
  },
};
