import { useState, useRef, useEffect } from 'react'
import debounce from 'lodash/debounce'

const useCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [showLeftArrow, setShowLeftArrow] = useState(true)
    const [showRightArrow, setShowRightArrow] = useState(true)

    useEffect(() => {
        const handleResize = debounce(() => {
            checkArrowVisibility()
        }, 50)

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const checkArrowVisibility = () => {
        if (carouselRef.current) {
            setShowLeftArrow(carouselRef.current.scrollLeft > 0)
            setShowRightArrow(
                carouselRef.current.scrollWidth - carouselRef.current.clientWidth >
                    carouselRef.current.scrollLeft,
            )
        }
    }

    const scrollHandler = (scrollOffset: number) => {
        if (carouselRef.current) {
            // const wrapperWidth = carouselRef.current.offsetWidth
            const childWidth = carouselRef.current.firstElementChild?.clientWidth || 0
            const newScrollLeft = carouselRef.current.scrollLeft + scrollOffset * childWidth
            setScrollLeft(newScrollLeft)
            carouselRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            })
        }
    }

    const handleScroll = () => {
        if (carouselRef.current) {
            setScrollLeft(carouselRef.current.scrollLeft)
            checkArrowVisibility()
        }
    }

    return {
        handleScroll,
        scrollHandler,
        carouselRef,
        showLeftArrow,
        showRightArrow,
        scrollLeft,
    }
}

export default useCarousel
