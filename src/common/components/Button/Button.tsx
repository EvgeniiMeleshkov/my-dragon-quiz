import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import style from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type PropsType = DefaultButtonPropsType & {
  art?: boolean // add decorations
}

export const Button: React.FC<PropsType> = ({ art, className, ...restProps }) => {
  return (
    <div className={`${style.box} ${art && style['box--art']} ${className}`}>
      <button
        className={`${style.button} ${art && style.art}`}
        {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
      ></button>

      {art && (
        <div className={style['star-wrapper']}>
          <div className={`${style.star} ${style['star-big']}`}></div>
          <div className={`${style.star} ${style['star-mid']}`}></div>
          <div className={`${style.star} ${style['star-far']}`}></div>
        </div>
      )}
    </div>
  )
}
