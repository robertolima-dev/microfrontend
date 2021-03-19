import React from 'react'
import { Jumbotron, Button } from 'reactstrap'

const Home = () => {

    return(
        <div>
            <Jumbotron>
                <h1 className="display-3">Home</h1>
                <hr className="my-2" />
                <p>Componente Home do microfrontend</p>
                <p className="lead">
                    <Button color="primary">Clique aqui</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Home