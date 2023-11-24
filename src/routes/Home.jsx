import { } from "react";
import '../styles/Home.scss';



export default function Home( ) {
    
    
    
    return(
        <>
            <main className="container">
                <div className="superior">
                    <div className="geral_esquerdo">
                        
                        <div className="geral_interno_esquerdo">
                            
                            <figure>
                                <img className="imagem_fila"  src="src\assets\filaSUS.jpg" alt="" />
                            </figure>
                            
                            
                            <div className="problema_geral">
                                <div className="problema">
                                    <h2 className="h2_problema"><strong>
                                        A Super Lotação dos Hospitais
                                    </strong></h2>

                                    <p className="p_problema">
                                        A saúde na nossa cidade enfrenta desafios diários, com superlotações nos hospitais resultando em atendimento precário e longas filas, proporcionando uma experiência negativa aos cidadãos.
                                    </p>
                                </div>
                                

                            </div>

                        </div>
                    </div>
                        
                    <div className="geral_direito">
                        <div className="geral_interno_direito">
                            <section className="sobre">
                                <h2 className="h2_titulo"><strong>
                                    O que é a Solução?
                                </strong></h2>

                                <p>
                                    Desenvolveremos um aplicativo de saúde para monitorar e exibir em tempo real a fila de espera em hospitais. Isso melhorará a experiência dos pacientes, fornecendo informações sobre espera estimada, status do hospital e opção de agendamento remoto. 
                                </p>
                            </section>
                            
                            <section className="sobre">
                                <h2 className="h2_titulo"><strong>
                                    Objetivo
                                </strong></h2>
                                <p>
                                    O resultado esperado com o desenvolvimento do aplicativo é que os usuários tenham mais comodidade, praticidade, facilidade e diminuam a ansiedade associada a espera na fila dos hospitais, promovendo uma melhor experiencia para os pacientes, dessa forma, evitamos superlotação em hospitais e insatisfação do atendimento na fila de espera. 
                                </p>
                            </section>
                            
                            <section className="sobre">
                                <h2 className="h2_titulo"><strong>
                                    Como Funcionará 
                                </strong></h2>
                                
                                <p>
                                    O desenvolvimento do aplicativo de saúde inicia-se com a coleta de dados hospitalares, seguido pelo design da interface. A integração com sistemas hospitalares em tempo real e parcerias são cruciais. Implementa-se um sistema de notificação para manter os usuários informados e, finalmente, adiciona-se a opção de agendar consultas remotamente, priorizando a conveniência do usuário.
                                </p>
                            </section>
                        
                        
                        </div>

                        
                    </div>
                </div>
                
                <div className="inferior">
                
                    <div className="vantagem">
                                
                        <h1><strong>Vantagens</strong></h1>
                                
                        <div className="vantagem_int">
                            <div className="vantagem1">
                                <h3><strong>Redução do Estresse e Ansiedade</strong></h3>
                                <p>Fornecendo informações em tempo real sobre a fila de espera nos hospitais, o aplicativo ajuda os usuários a planejarem melhor suas visitas, reduzindo o estresse e a ansiedade associados à espera.</p>
                            </div>

                            <div className="vantagem1">
                                <h3> <strong>Otimização do Tempo e Recursos</strong></h3>
                                <p>A capacidade de agendar consultas remotamente e receber notificações sobre a proximidade do atendimento permite que os pacientes otimizem seu tempo, contribuindo para uma utilização mais eficiente dos recursos hospitalares e reduzindo a superlotação.</p>
                            </div>

                            <div className="vantagem1">
                                <h3><strong>Experiência do Paciente Aprimorada</strong></h3>
                                <p>A interface intuitiva do aplicativo e a transparência sobre o estado dos hospitais proporcionam uma experiência mais positiva, facilitando o acesso a informações relevantes durante o atendimento médico. Isso impacta positivamente na satisfação do paciente e na percepção geral da qualidade dos serviços de saúde.</p>
                            </div>    

                        </div>
                    </div>
                </div>
            </main>               

            


        </>
    )
}