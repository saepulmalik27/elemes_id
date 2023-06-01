import React, { useRef, useEffect } from 'react'

type CLickOutsideProps = {
    children: React.ReactNode
    behaviorfunc: () => void
}

const ClickOutside : React.FC<CLickOutsideProps> = (props) => {
    const wrapperRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event : any) => {
            if (
                
                wrapperRef.current &&
                // @ts-ignore
                !wrapperRef.current.contains(event.target)
            ) {
                props.behaviorfunc()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [wrapperRef])
    return <div ref={wrapperRef}>{props.children}</div>
}

export default ClickOutside
