import React, { useState } from 'react'
import Layout from '../layouts'
import Form from '../components/form'
import Button from '../components/button'
import { signIn } from './api'
import Cookies from 'js-cookie'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnChange = e => {
    const { name, value } = e.target
    const split = name.split('signin-form-')
    eval(split[1])(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {username: email, password}
    const res = await signIn(body)
    if (res.status != 200) {
      alert('Something went wrong, please try again')
    }
    const data = await res.json()
    Cookies.set('token', data)
    window.location.href = '/'
  }

  const obj = [
    {type: 'text', placeholder: 'Email', value: email},
    {type: 'password', placeholder: 'Password', value: password}
  ].map(o => {
    o.key = `signin-form-set${o.placeholder}`
    return o
  })

  return(
    <Layout title='Sign In Page'>
      <main>
        <h1>Sign In</h1>
        <div className='form-container'>
          <form>
            <Form list={obj} handleOnChange={handleOnChange}/>
            <div onClick={handleSubmit}><Button label='Sign In'/></div>
          </form>
        </div>
      </main>
    </Layout>
  )
}

export default SignIn