import React , {useState} from 'react'
import st from './users.module.scss'
import {Button, Modal , Form} from "react-bootstrap"


function Users() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

      const [isShowEdit, setIsShowEdit] = useState(false);
    // const [sidebar] = useState(false)
    
    return (
        // <div className = {`${sidebar ? `${st.users} active` : `${st.users}`}`}>
        <div className = {`${st.users}`} >
    <Button variant="primary" onClick={handleShow}  className= {`{${st.btn__add}}`} style ={{float:'right'}}>
       + Добавить пользователей
    </Button>

            <table class="table table-striped mt-5">
                <thead>
                    <tr>
                        <th> 
                        <form>
                        <input type="checkbox" name="name" />
                        </form>
                        </th>
                        <th>Имя</th>
                        <th>Предметы</th>
                        <th>Доход</th>
                        <th>Телефонный номер</th>
                        <th>Статус</th>
                        <th>Роль</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                      <td> 
                      <form>
                        <input type="checkbox" name="name" />
                      </form>
                      </td>
                      <td>
                      <div className= {`${st.cover__avatar} d-flex justify-content-space-around`} >
                       <a>
                           <i className= "fas fa-user"></i>
                       </a>
                       <div className={`${st.ml} d-block`}>
                       <h6 className = "name">Alexander Pierce</h6>
                           <p>alexander@paper.com</p>
                       </div>
                    </div>
                    </td>
                      <td>2</td>
                      <td>256</td>
                      <td>+92 333 123 136</td>
                      <td><p><i class="fas fa-circle blink"></i>Inactive</p></td>
                      <td><span className={`${st.admin}`}> Administrator</span>
                      <span className={`${st.eye}`}><i class="far fa-eye eye"></i></span>
                      <span onClick={handleShow}> <i class="fas fa-pencil-alt alt"></i></span>
                      </td>
                    </tr>
                  <tr>
                    <td> 
                      <form>
                        <input type="checkbox" name="name" />
                      </form>
                      </td>
                      <td>
                      <div className= {`${st.cover__avatar} d-flex justify-content-space-around`} >
                       <a>
                           <i className= "fas fa-user"></i>
                       </a>
                       <div className={`${st.ml} d-block`}>
                       <h6 className = "name">Alexander Pierce</h6>
                           <p>alexander@paper.com</p>
                       </div>
                    </div>
                    </td>
                      <td>2</td>
                      <td>256</td>
                      <td>+92 333 123 136</td>
                      <td><p><i class="fas fa-circle blink"></i>Inactive</p></td>
                      <td><span className={`${st.admin}`}> Administrator</span>
                      <span className={`${st.eye}`}><i class="far fa-eye"></i></span>
                      <span onClick={handleShow}> <i class="fas fa-pencil-alt"></i></span></td>
                    </tr>
                   <tr>
                    <td> 
                      <form>
                        <input type="checkbox" name="name" />
                      </form>
                      </td>
                      <td>
                      <div className= {`${st.cover__avatar} d-flex justify-content-space-around`} >
                       <a>
                           <i className= "fas fa-user"></i>
                       </a>
                       <div className={`${st.ml} d-block`}>
                       <h6 className = "name">Alexander Pierce</h6>
                           <p>alexander@paper.com</p>
                       </div>
                    </div>
                    </td>
                      <td>2</td>
                      <td>256</td>
                      <td>+92 333 123 136</td>
                      <td><p><i class="fas fa-circle blink"></i>Inactive</p></td>
                      <td><span className={`${st.admin}`}> Administrator</span>
                      <span className={`${st.eye}`}><i class="far fa-eye"></i></span>
                      <span  onClick={handleShow}> <i class="fas fa-pencil-alt"></i></span>
                     </td>
                    </tr>
                     </tbody>
            </table>        

            <Modal show={show} onHide={handleClose}>
             <Modal.Header>
                 <Modal.Title>Введите вашу информацию</Modal.Title>
               </Modal.Header>
             <Modal.Body>
                <Form>
              <Form.Group controlId="formName">
              <Form.Label>Имя</Form.Label>
              <Form.Control type="text" />
              
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
              <Form.Label>Электронное письмо</Form.Label>
              <Form.Control type="e-mail" />
              
              </Form.Group>
              <Form.Group controlId="formItems">
              <Form.Label>Предметы</Form.Label>
              <Form.Control type="number" />
              
              </Form.Group>
              <Form.Group controlId="formBasicPhone">
              <Form.Label>Телефонный номер</Form.Label>
              <Form.Control type="tel" />
              
              </Form.Group>
              <Form.Group controlId="formBasicStatus">
              <Form.Label>Статус</Form.Label>
              <Form.Control type="text" />
              
              </Form.Group>

              <Form.Group controlId="formBasicRole">
              <Form.Label>Роль</Form.Label>
              <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">

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
            </div>
  
   )
}

export default Users;
