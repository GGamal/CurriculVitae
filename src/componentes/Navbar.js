import "./../css/componentes/Navbar.css"

// const iconogm = document.querySelector('.iconogm')
// iconogm.addEventListener("onclick", function(){
//     iconogm.style.backgroundImage = "url('/public/img/phanteon.jpg')"
// })
    


const Navbar = (props) => {
    return (
        
            <div className='holder nav'>

                <h4 className="iconogm">C.V</h4>
                
                <a href='#inicio'>Inicio</a>
                <a href='#porfolio'>Porfolio</a>
                <a href='#estudios'>Estudios</a>
                <a href='#skills'>Habilidades</a>
                <a href='#contacto'>Contacto</a>
           
                
                    
                   
 
                
            </div>


        
    );

}
export default Navbar;