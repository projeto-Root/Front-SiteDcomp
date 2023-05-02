import React from "react";
import { ContatoStyle } from './ContatoStyle.css';

const Contato = () => {

    return (
        <div>
            <section className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.5393613399697!2d-37.10596498560423!3d-10.922570024978072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab242ae652ba3%3A0xd50dbbaf6974ae9b!2sDepartamento%20de%20Computa%C3%A7%C3%A3o%20-%20DCOMP%2FUFS!5e0!3m2!1spt-BR!2sbr!4v1656865523748!5m2!1spt-BR!2sbr" frameborder="0" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            

            <section className="contate-nos">
                <div className="row">
                    <div className="contact-col">
                        <div>
                            <i class="fa fa-home"></i>
                            <span>
                                <h5>Avenida Marechal Rondon Jardim, s/n</h5>
                                <p>Rosa Elze, São Cristóvão - SE</p>
                            </span>
                        </div>
                    
                    <div>
                        <i class="fa fa-phone" ></i>
                            <span>
                                <h5>(79) 3194-6678</h5>
                                <p>Segunda a Sexta, 08 às 21h</p>
                            </span>
                        </div>
                    
                    <div>
                        <i className="fa fa-envelope-o"></i>
                            <span>
                                <h5>secretaria@dcomp.ufs.br</h5>
                                <p>E-mail para contato</p>
                            </span>
                        </div>
                    </div>
                    
                        
                </div>
            </section> 
        </div>
    )
}

export default Contato;