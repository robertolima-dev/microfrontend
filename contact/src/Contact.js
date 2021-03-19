import React from 'react'
import { Jumbotron, Button } from 'reactstrap'

const Contact = () => {

    return(
        <div>
            <Jumbotron>
                <h1 className="display-3">Contato</h1>
                <hr className="my-2" />
                <p>Componente Contato do microfrontend</p>
                <p className="lead">
                    <Button color="primary">Clique aqui</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Contact