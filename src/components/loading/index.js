import st from './loading.module.scss'

export default function Loading () {
    return (
        <div className={st.loading}>
            <div className={st.loading__main}></div>
        </div>
    )
}