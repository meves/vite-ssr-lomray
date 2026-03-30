import styles from './Link.module.css'
import cn from 'classnames'

export const Link = ({ 
  children, href, className 
}: { 
  children: React.ReactNode, href: string, className?: string 
}) => {
  return (
    <a 
      className={cn(styles.link, className)} 
      href={href}        
    >
      {children}
    </a>
  )
}