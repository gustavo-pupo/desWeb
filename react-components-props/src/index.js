import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const App = () => {
    return(
        <div className='container border mt-2'>
            <div className='row'>
                <div className='col-12'>
                     <h1 className='text-center'>AAAAAAAAAAAAAAAAAA</h1>
                </div>
            </div>
            <div className='row'>
                <div className="col-xl-3 col-lg-6">
                    <div className="border p-4">Pedido 1</div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="border p-4">Pedido 1</div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="border p-4">Pedido 1</div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="border p-4">Pedido 1</div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="border p-4">Pedido 1</div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="border p-4">Pedido 1</div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="border p-4">Pedido 1</div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="border p-4">Pedido 1</div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root') 
)
