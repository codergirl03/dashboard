import React, {useState} from 'react'
import st from './viloyat.module.scss'
import {Button, Modal ,Form} from "react-bootstrap"

function Viloyat(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    
    return (
        <div className = {st.viloyat}>
    
        <Button variant="primary" onClick={handleShow}  className= {`{${st.btn__add}}`} style ={{float:'right'}}>
                + Добавлять
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        <Modal.Title>Введите ваш регион </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="formUz">
        <Form.Label>Узбекский</Form.Label>
        <Form.Control type="text" />
   
        </Form.Group>
        <Form.Group controlId="formRU">
        <Form.Label>Pусский</Form.Label>
        <Form.Control type="text" />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
        Закрывать
        </Button>
        <Button variant="primary" onClick={handleClose}>
        Сохранить изменения
        </Button>
      </Modal.Footer>
    </Modal>
        
        <table className="table table-striped mt-5">
                 <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td> 
                     <p>Tashkent</p>
                      </td>
                      <td>
                        <button className = {`${st.addstate} btn`}>+</button>
                    </td>
                    </tr>
                    <tr>
                      <td> 
                     <p>Tashkent</p>
                      </td>
                      <td>
                        <button className = {`${st.addstate} btn`}>+</button>
                    </td>
                    </tr>
                    <tr>
                      <td> 
                     <p>Tashkent</p>
                      </td>
                      <td>
                        <button className = {`${st.addstate} btn`}>+</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Viloyat;
