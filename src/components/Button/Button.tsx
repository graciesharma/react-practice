import styles from './Button.module.css'

interface Props{
    children:string;
    onClick : () => void
    color?: 'primary' | 'secondary';
}

export const Button = ({children, onClick,color='primary'}:Props) => {
  return (
    <button className={styles.btn} onClick={onClick}>{children}</button>
  )
}
