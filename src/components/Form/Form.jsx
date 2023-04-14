import { useState } from 'react';
import validation from './validation';
import style from './Form.module.css';

const Form = ( {login} ) => {


const [userData, setUserData] = useState ({
    email: '',
    password: ''
});

const [errors, setErrors] = useState ({
    email: '',
    password: ''
})

const handleChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })

    setErrors(
        validation({
            ...userData,
            [event.target.name]: event.target.value
        })
    )
}

const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);

}


    return (
        <div className= {style.login}>
        <form onSubmit = {handleSubmit} className = {style.form}>
            <img src = 'https://wallpapercave.com/dwp1x/wp4945619.jpg' alt = 'rym' className={style.img}/>
            <label htmlFor= 'email'>Email</label>
            <input
            type = 'text' 
            name = 'email'
            value = {userData.email}
            onChange = {handleChange}
            />
            {errors.email && <p style={{color: 'yellow'}}>{errors.email}</p>}

            <label htmlFor = 'password'>Password</label>

            <input 
            type = 'password' 
            name = 'password'
            value = {userData.password}
            onChange = {handleChange}
            />
            {errors.password && <p style={{color: 'yellow'}}>{errors.password}</p>}

            <button onClick = {handleSubmit}>Submit</button>
            
        </form>
        </div>
    )
} 

export default Form; 