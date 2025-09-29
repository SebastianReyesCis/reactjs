import './App.css'
function App() {
    const numero = 2 + 2;

    const usuario = {
        nombre: 'jose',
        apellido: 'rey',
    }
    function formatearnombre(persona) {
        return persona.nombre + '' + persona.apellido
    }
    return (

        <>
        <section className='container'>
            <h1>expreisones y funciones</h1>
            <p>{formatearnombre(usuario)}</p>
            </section>
        </>
    )
}
export default App 