import calicomp from "./../assets/callicompSemNome.svg";
import BUGADOS1 from "./../assets/BUGADOS1.png";
import LOGOSOFTEAMSVG from "./../assets/LOGOSOFTEAM.svg";
import { lorem } from './utils_content_messages'

export const dataRepresents = [
    {
        name: 'Calicomp',
        describe: 'O CaliComp é uma representação estudantil que foi criada com o intuito de ajudar e representar todos os estudantes que fazem parte dos cursos de computação.',
        img: calicomp,
        link: '/represents/calicomp'
    },
    {
        name: 'SofTeam',
        describe: 'A SofTeam é a Empresa Júnior de Computação da Universidade Federal de Sergipe, onde a mesma atua no desenvolvimentos de Websites, Sistemas, Aplicativos e até mesmo Jogos.',
        img: LOGOSOFTEAMSVG,
        link: '/represents/softeam'
    },
    {
        name: 'Atlética',
        describe: 'A Associação Atlética Acadêmica de Computação Bugados, foi fundada em agosto de 2022, onde a mesma nasceu com o grande objetivo de fortalecer a comunidade acadêmica e enriquecer a vivência universitária dos estudantes de computação da Universidade Federal de Sergipe.',
        img: BUGADOS1,
        link: '/represents/bugados'
    }
]