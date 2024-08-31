import Picture1 from '../../public/images/homeImage.png'
import Picture2 from '../../public/images/homeImage.png'
import Picture3 from '../../public/images/homeImage.png'
import Picture4 from '../../public/images/homeImage.png'
import Picture5 from '../../public/images/homeImage.png'
import Picture6 from '../../public/images/homeImage.png'
import Picture7 from '../../public/images/homeImage.png'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        { src: Picture1, scale: scale4, className: "w-1/4 h-1/4" },
        { src: Picture2, scale: scale5, className: "-top-[30vh] left-[5vw] w-[35vw] h-[30vh]" },
        { src: Picture3, scale: scale6, className: "-top-[10vh] -left-1/4 w-1/5 h-[45vh]" },
        { src: Picture4, scale: scale5, className: "left-[27.5vw] w-1/4 h-1/4" },
        { src: Picture5, scale: scale6, className: "top-[27.5vh] left-[5vw] w-1/5 h-1/4" },
        { src: Picture6, scale: scale8, className: "top-[27.5vh] -left-[22.5vw] w-[30vw] h-1/4" },
        { src: Picture7, scale: scale9, className: "top-[22.5vh] left-1/4 w-[15vw] h-[15vh]" }
    ];

    return (
        <div ref={container} className="h-[300vh] relative">
            <div className="sticky top-0 overflow-hidden h-screen">
                {pictures.map(({ src, scale, className }, index) => (
                    <motion.div 
                        key={index} 
                        style={{ scale }} 
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className={`relative ${className}`}>
                            <Image
                                src={src}
                                fill
                                alt={`image-${index + 1}`}
                                placeholder='blur'
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}