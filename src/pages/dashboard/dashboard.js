import React , {useState}  from 'react'
import st from './dashboard.module.scss'


function Dashboard(){
    const [sidebar] = useState(false)
      
    
    return(
        <div className ={`${sidebar ? `${st.cover} active` : `${st.cover}`}`}>
        <div className= {`${st.cards} d-flex w-100 justify-content-between p-3`}>
        <div className={`${st.cover__card} ml-5`} style={{width: '20%'}}>
            <div className= {`${st.card1} row rounded p-2`}> 
                <div className={`${st.words} col-md-8 `}>
                    <h6 className={st.text__white}>Active Sessions</h6>
                    <h5 className={st.text__white}>1,500</h5>
                    <div className={`${st.progress} progress`}>
                         <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style = {{width : '20%'}}>
                              <span className="sr-only">70% Complete</span>
                         </div>
                    </div>
                    
                </div>
                <div className={`${st.img} col-md-4`}>
                    <i className={`${st.cube} far fa-sticky-note fs-1 text-secondary mt-4`}></i>
                </div>
            </div>
        </div>
        <div className={st.cover__card} style={{width: '20%'}}>
            <div className={`${st.card1} row rounded p-2`}>
                <div className={`${st.words} col-md-8 `}>
                    <h6 className={st.text__white}>Общий доход</h6>
                    <h5 className={st.text__white}>1,500</h5>
                    <div className={`${st.progress} progress`}>
                         <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style = {{width : '50%'}} >
                              <span className="sr-only">70% Полный</span>
                         </div>
                    </div>
                </div>
                <div className={`${st.img} col-md-4`}>
                    <i className={`${st.cube} fas fa-envelope-open-text fs-1 text-secondary mt-4`}></i>
                </div>
            </div>
        </div>
        <div className={st.cover__card} style={{width: '20%'}}>
            <div className={`${st.card1} row rounded p-2`}>
                <div className={`${st.words} col-md-8 `}>
                    <h6 className={st.text__white}>Средняя цена</h6>
                    <h5 className={st.text__white}>1,500</h5>
                    <div className={`${st.progress} progress`}>
                         <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style = {{width : '70%'}}>
                              <span className="sr-only">70% Полный</span>
                         </div>
                    </div>
                </div>
                <div className={`${st.img} col-md-4`}>
                    <i className={`${st.cube} far fa-clock fs-1 text-secondary mt-4`}></i>
                </div>
            </div>
        </div>
        <div className={st.cover__card} style={{width: '20%'}}>
            <div className={`${st.card1} row bg rounded p-2`}>
                <div className={`${st.words} col-md-8 `}>
                    <h6 className={st.text__white}>Добавить на карту</h6>
                    <h5 className={st.text__white}>1,500</h5>
                    <div className={`${st.progress} progress`}>
                         <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style = {{width : '20%'}} >
                              <span className="sr-only">70% Полный</span>
                         </div>
                    </div>
                </div>
                <div className={`${st.img} col-md-4`}>
                    <i className={`${st.cube} far fa-envelope-open fs-1 text-secondary mt-4`}></i>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    )
}

export default Dashboard;