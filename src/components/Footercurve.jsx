import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Footercurve() {
    const container = useRef();
    const paths = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    useEffect( () => {
        scrollYProgress.on("change", e => {
            paths.current.forEach( (path, i) => {
                path.setAttribute("startOffset", -40 + (i * 40) + (e * 40) + "%");
            })
        })
    }, [])

    return (
        <div ref={container}>
            <svg className="w-full mb-40" viewBox="0 0 250 90">
                <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
                <text className="text-[6px] font-almirego uppercase" style={{fill: "black"}}>
                    {
                        [...Array(3)].map((_, i) => {
                            return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">xterra world of robots</textPath>
                        })
                    }
                </text>
            </svg>
        </div>
    )
}