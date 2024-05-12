import React from 'react'

type Error = {
  message?: string
}

type TextInputProps = React.ComponentPropsWithRef<'input'> & {
  label?: string
  error?: Error
  containerClasses?: string
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ label, error, containerClasses, ...rest }, ref) => {
  const bgClass = error?.message ? `bg-red-600/[0.3]` : `bg-transparent`
  const borderClass = error?.message ? `border-red-600` : `border-lightSlate-200/[0.1] dark:border-lavender-200/[0.1]`
  const labelClass = error?.message ? `text-red-600` : `text-black/[0.8] dark:text-slate-400`
  return (
    <div className={containerClasses}>
      <label className={`text-xs font-bold ${labelClass}`}>{label}</label>
      <input ref={ref} {...rest} className={`w-full ${bgClass} ${borderClass} flex h-10 border border-input px-3 py-2 text-sm outline-none disabled:cursor-not-allowed`} />
      <div className='text-xs text-red-600 font-semibold '>{error?.message}</div>
    </div>
  )
})

export default TextInput
