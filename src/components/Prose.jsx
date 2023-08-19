import clsx from 'clsx'

export function Prose({ children, className }) {
  return (
    // <div className={clsx(className, 'prose prose-h2:text-zinc-100 prose-h3:text-zinc-100 prose-p:text-zinc-400')}>{children}</div>
    <div className={clsx(className, 'prose')}>{children}</div>
  )
}
