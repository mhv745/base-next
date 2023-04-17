import { forwardRef } from 'react'

const InputForm = ({ label, error, name, type = 'text', ...props }, ref) => {
    return (
        <div className="flex flex-col w-full">
            {label && <label className='text-left px-2' htmlFor={name}>{label}</label>}
            <input
                ref={ref}
                className="border rounded-md flex-1 max-w-sm px-2 py-1"
                type={type}
                name={name}
                {...props}
            /><div className='flex w-full h-4 overflow-hidden text-left' >
            {error && 
                <span className="relative text-red-500 text-xs px-2 truncate">{error}</span>
            }</div>
        </div>
    )
}

export default forwardRef(InputForm)
