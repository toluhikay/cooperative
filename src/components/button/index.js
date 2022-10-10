export default function Button({styles, btn, type, title, id, getPage}){
    return <button type={type} title={title} className={styles} id={id} onClick={getPage}>{btn}</button>
}