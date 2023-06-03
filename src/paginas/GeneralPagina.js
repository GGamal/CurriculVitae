import { NavLink } from "react-router-dom";
import "./../css/GeneralPagina.css"





const GeneralPagina = (props) => {
    return (

        <main className="holder conth ">
            
            
            <section className="presentacion" id="inicio" name="inicio">

                <h1 className="soy">Soy</h1>
                <h1 className="nombre">Gamal Maruan</h1>
                <p className="bienvenidos">BIENVENIDOS A MI PORFOLIO COMO DESARROLLADOR FRONT END</p>
                <NavLink className="linkedin" to="https://www.linkedin.com/in/gamal-maruan-5416b2224/" target="_blank">in</NavLink>

                <div className="sobremi">

                    <h1>SOBRE MI</h1>
                    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor et alias perspiciatis fuga totam? Earum, veniam?
                        Fugit rem voluptatem obcaecati. Molestias praesentium, rerum quasi excepturi nam et molestiae impedit id!</h3>
                    <h3>Lorem dsaaaaaaaaa</h3>

                </div>
            </section>

            
            <section className="porta" id="porfolio" name="porfolio">

                <h1 className="porfolio" >PORFOLIO</h1>

                <div className="tarjetas">

                    <div className="card">
                        <img src="img/phanteonc.jpg" alt="" ></img>
                        <h4>Desokupa</h4>
                        <p>Loremaasddddd</p>
                        <p>asdassssssssssss</p>

                    </div>

                    <div className="card">
                        <img src="img/phanteonp.jpg" alt="" ></img>
                        <h4>Curriculum</h4>
                        <p>Loremaasdddddddd</p>
                        <p>dsadasdddddddasd</p>

                    </div>

                    <div className="card">
                        <img src="img/phanteon.jpg" alt="" ></img>
                        <h4>tituloooo</h4>
                        <p>Loremaasddddddd</p>
                        <p>asdasssssssssssd</p>

                    </div>

                </div>

            </section>


            <section className="educacion" id="estudios" name="estudios">

                <h1 className="estudios">ESTUDIOS</h1>

                <div className="estudio">
                <h1>U.T.N Universidad Tecnológica Nacional</h1>
                <h3>Cursada hasta primer año de "Ing. En sistemas" (2017)</h3>
                </div>

                <div className="estudio">
                <h1>Colegio Universitario IES Siglo 21</h1>
                <h3>Cursado hasta el segundo año  de “Simulaciones virtuales y videojuegos” (2018-2021)</h3>
                </div>

                <div className="estudio">
                <h1>Diplomatura en programación web full stack con React Js </h1>
                <h3>noviembre 2021 – mayo 2022 (187 horas)</h3>
                </div>

                <div className="estudio">
                <h1>Argentina programa primera etapa #YoProgramo</h1>
                <h3>2021- 2022 (60 horas)</h3>
                </div>

            </section>
            
            <section className="skills" id="skills" name="skills">

                <h1 className="habilidades">HABILIDADES</h1>
                <div className="contskills">

                <h1 className="programacion">Lenguajes de programacion</h1>
                <div className="lenguajes">
                    <img src="img/iconos/html5.png" alt=""/>
                    <img src="img/iconos/css.png" alt=""/>
                    <img src="img/iconos/js.png" alt=""/>
                
                </div>

                <h1 className="fra_y_lib">Frameworks y librerias</h1>
                <div className="lenguajes">
                    <img src="img/iconos/react.png" alt=""/>
                    <img src="img/iconos/vue.png" alt=""/>
                    <img src="img/iconos/bootstrap.png" alt=""/>
                    <img src="img/iconos/quasar.png" alt=""/>
                
                </div>
                <h1 className="soft_y_herra">Software y herramientas</h1>
                <div className="lenguajes">
                    <img src="img/iconos/photoshop.png" alt="photoshop"/>
                    <img src="img/iconos/illustrator.png" alt="illustrator"/>
                    <img src="img/iconos/premiere.png" alt="premiere"/>
                    <img src="img/iconos/after-effects.png" alt="after effects"/>
                    <img src="img/iconos/audition.png" alt="audition"/>
                    <img src="img/iconos/visual-code.png" alt="visual code"/>
                
                </div>
                </div>
                

            </section>

            <section className="contacto" id="contacto" name="contacto">

                <h1 className="contactame">CONTACTAME</h1>

                <div className="contactos">
                    <img src="img/iconos/gmail.png" alt="gmail"/>
                    <h3 className="email">gamalmaruan57@gmail.com</h3>

                </div>

                <div className="contactos">
                    <img src="img/iconos/celular.png" alt="celular"/>
                    <h3>54+3516862526</h3>

                </div>

                <div className="contactos">
                    <img src="img/iconos/linkedin.png" alt="linkedin"/>
                    <NavLink className="linkedin2" to="https://www.linkedin.com/in/gamal-maruan-5416b2224/" target="_blank">Linkedin</NavLink>

                </div>

                <div className="contactos">
                    <a className="descarga" href="GamalMaruanCV.pdf" download>Descargar CV</a>
                </div>





            </section>




        </main>




    );

}

export default GeneralPagina;