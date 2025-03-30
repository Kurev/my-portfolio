import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import product1 from '../../assets/ecomerse.png'
import product2 from '../../assets/monlist.png'
import product3 from '../../assets/addu2.png'
import product4 from '../../assets/dailyBudie.png'
import product5 from '../../assets/clever.png'
import product6 from '../../assets/absentTracker.png'
import product7 from '../../assets/lastTaker.png'

const MyProject = () => {
    const products1: string[] = [product7, product6, product3, product4, product5, product1, product2]

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    // Change the image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % products1.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='w-[25rem] h-[25rem] rounded-2xl overflow-hidden relative shadow-xs shadow-[#553e68]'>
            {/* First Image from products1 */}
            <motion.div
                className='absolute inset-0 flex justify-center items-center'
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <img
                    src={products1[currentIndex]}
                    alt={`product1 ${currentIndex}`}
                    className='w-full h-full object-cover'
                />
            </motion.div>
        </div>
    )
}

export default MyProject
