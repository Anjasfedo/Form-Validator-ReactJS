import { useState } from "react"

const InputForm = ({inputDataUser}) => {

    const [inputUser, setInputUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })


    const handleChangeInput = (event) => {
        const {name, value} = event.target;
        setInputUser({
            ...inputUser,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        inputDataUser(inputUser)
    }

    return (
        <form action="" onSubmit={handleSubmit} className='p-6 flex flex-col gap-8 text-xl font-bold text-gray-700'>
            <div className='flex flex-col gap-2 '>
                <label htmlFor="inputName">Name</label>
                <input type="text" name="name" value={inputUser.name} onChange={handleChangeInput} id="inputName" className='p-1 shadow-md hover:shadow-black mx-1 font-semibold rounded-md ring-1 ring-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-900' />
                {/* <span className='text-sm mx-1 text-red-600 font-extrabold'>Error</span> */}
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="inputEmail">Email</label>
                <input type="email" name="email" value={inputUser.email} onChange={handleChangeInput} id="inputEmail" className='p-1 shadow-md hover:shadow-black mx-1 font-semibold rounded-md ring-1 ring-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-900' />
                {/* <span className='text-sm mx-1 text-red-600 font-extrabold'>Error</span> */}
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="inputPassword">Pasword</label>
                <input type="password" name="password" value={inputUser.password} onChange={handleChangeInput} id="inputPassword" className='p-1 shadow-md hover:shadow-black mx-1 font-semibold rounded-md ring-1 ring-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-900' />
                {/* <span className='text-sm mx-1 text-red-600 font-extrabold'>Error</span> */}
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="inputConfirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" value={inputUser.confirmPassword} onChange={handleChangeInput} id="inputConfirmPassword" className='p-1 shadow-md hover:shadow-black mx-1 font-semibold rounded-md ring-1 ring-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-900' />
                {/* <span className='text-sm mx-1 text-red-600 font-extrabold'>Error</span> */}
            </div>
            <button type='submit' className='px-4 py-2 w-fit bg-blue-700 ring-2 ring-white shadow-md hover:shadow-black rounded-lg text-white self-center'>
                Submit
            </button>
        </form>
    )
}

export default InputForm