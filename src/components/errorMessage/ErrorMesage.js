import img from './error.gif'


const ErrorMesage = () => {
    return (
        <img style={{display: 'block', width: "250px", height: "250px", objectFit: 'contain', margin: "0 auto"}} src={img} alt="Error"/>
        
    )
}

export default ErrorMesage;