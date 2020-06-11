import React from 'react'
import Layout from '../layouts'
import Card from '../components/card'

const Index = () => {
  const list = [
    {label: 'Science Plan', description: 'View all science plan list', href: '/science-plan'},
    {label: 'Create New', description: 'Add new science plan', href: '/create'},
    {label: 'Validate', description: 'Change science plan permission', href: '/validate'},
    {label: 'Testing Plan', description: 'Test a new science plan', href: '/testing-plan'},
  ].map(obj => {
    obj.key = `home-card-link-${obj.label}`
    return obj
  })

  return(
    <Layout title='Home Page'>
      <main>
        <h1 className="title">Welcome to <a href="/">ITCS431</a><br/>Web Application</h1>
        <Card list={list}/>
      </main>
    </Layout>
  )
}

export default Index