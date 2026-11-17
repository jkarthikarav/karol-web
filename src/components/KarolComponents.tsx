import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

export type KarolButtonVariant = 'filled-j'|'filled-a'|'filled-k'|'tonal-j'|'tonal-a'|'tonal-k'|'elevated'|'outlined'|'text';
export interface KarolButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{variant?:KarolButtonVariant;size?:'large'|'medium';fitContent?:boolean}
export function KarolButton({variant='filled-j',size='large',fitContent=false,className='',children,...props}:KarolButtonProps){
  return <button className={['karol-button',`karol-button--${variant}`,`karol-button--${size}`,fitContent?'karol-button--fit':'',className].filter(Boolean).join(' ')} {...props}>{children}</button>;
}
export interface KarolTextCardProps{children:ReactNode;align?:'top'|'bottom'}
export function KarolTextCard({children,align='bottom'}:KarolTextCardProps){
  return <article className={`karol-text-card ${align==='top'?'karol-text-card--top':''}`}>{children}</article>;
}
export interface KarolImageTextCardProps{image:string;imageAlt:string;eyebrow?:string;title:string;description:string;actionLabel?:string}
export function KarolImageTextCard({image,imageAlt,eyebrow,title,description,actionLabel='Learn more'}:KarolImageTextCardProps){
  return <article className="karol-card-grid"><div className="karol-image-card"><img src={image} alt={imageAlt}/></div><div className="karol-text-card">{eyebrow&&<p className="karol-type-label">{eyebrow}</p>}<h3 className="karol-type-heading">{title}</h3><p className="karol-type-body">{description}</p>{actionLabel&&<KarolButton fitContent>{actionLabel}</KarolButton>}</div></article>;
}
export interface KarolImageFeatureCardProps{image:string;title:string;description?:string;fullWidth?:boolean}
export function KarolImageFeatureCard({image,title,description,fullWidth=false}:KarolImageFeatureCardProps){
  const style={'--karol-card-image':`url("${image}")`} as CSSProperties;
  return <article className={`karol-image-feature ${fullWidth?'karol-image-feature--full':''}`} style={style}><div className="karol-image-feature__content"><h3 className="karol-type-heading">{title}</h3>{description&&<p className="karol-type-body">{description}</p>}</div></article>;
}
