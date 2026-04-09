'use client'

interface ContainerProps {
    ClassName ?: string
    Children: React.ReactNode
}

export default function Container({ ClassName, Children }: ContainerProps) {
    return (
        <div className={` bg-blue-500 max-w-375 mx-auto px-5${ClassName}`}>
            {Children}
        </div>
    )
}