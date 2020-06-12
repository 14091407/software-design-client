import { HOST, PORT, PROD } from '../../configs'
import fetch from 'node-fetch'
import Cookies from 'js-cookie'

const domain = `${HOST}:${PORT}`

module.exports = {
  signIn: async (body) => {
    const res = await fetch(`${domain}/api/login`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
    return res
  },

  createSciPlan: async (body) => {
    console.log(body)
    const res = await fetch(`${domain}/api/addsciplan`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "token": Cookies.get('token')
      },
    })
    return res
  },

  getSciPlan: async (body) => {
    const res = await fetch(`${domain}/api/getsciplan`, {
      method: 'GET',
      headers: {},
    })
    return res
  }
}



// getSciPlan: async (body) => {
//   const res = await fetch(`${domain}/api/getsciplan`, {
//     method: 'GET',
//     headers: {},
//   })
//   return res
// },

// validate: async (body) => {
//   const res = await fetch(`${domain}/api/validate`, {
//     method: 'POST',
//     body: JSON.stringify(body),
//     headers: { "Content-Type": "application/json" },
//   })
//   return res
// },

// deleteSciPlan: async (body) => {
//   const res = await fetch(`${domain}/api/delete/{id}`, {
//     method: 'POST',
//     body: JSON.stringify(body),
//     headers: { "Content-Type": "application/json" },
//   })
//   return res
// }