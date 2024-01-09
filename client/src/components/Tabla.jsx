import './componentes.css';

export default function Tabla() {
    return (
        <>
            <div className='tabla-container'>
                <table >
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido Materno</th>
                        <th>Apellido Paterno</th>
                        <th>Edad</th>
                        <th>Sexo</th>
                        <th>Correo Electronico</th>
                        <th>Curp</th>
                    </tr>
                </table>
            </div>
        </>
    )
}