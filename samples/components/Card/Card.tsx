import React from 'react'
import styles from './Card.module.scss'

interface CardProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  image?: string
  imageAlt?: string
  variant?: 'default' | 'outlined' | 'elevated'
  onClick?: () => void
  className?: string
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  image,
  imageAlt = '',
  variant = 'default',
  onClick,
  className = '',
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    onClick ? styles.clickable : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={cardClasses} onClick={onClick}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={imageAlt} className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </article>
  )
}

export default Card
