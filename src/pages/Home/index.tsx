import React from 'react'

import { Card, CardBody, CardHeader, CardFooter } from '@marcoslobo/vibookfinance-uikit/'

const Home = () => {
  return (
    <>
      <h1>Bem vindo</h1>
      <div style={{ padding: '32px', width: '500px' }}>
        <div style={{ padding: '32px', width: '500px' }}>
          <Card isActive>
            <CardHeader>Vibook Finance Project</CardHeader>
            <CardBody>Aqui é a vibook finance</CardBody>
            <CardFooter>Compre nossos tokens</CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home
