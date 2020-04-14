import React from 'react'

export default function AnimateonScroll(props) {
    return (
        <div
        data-aos={props.aos}
        data-aos-offset={props.aosOffset}
        data-aos-delay={props.aosDelay}
        data-aos-duration={props.aosDuration}
        data-aos-easing={props.aosEasing}
        data-aos-mirror={props.aosMirror}
        data-aos-once={props.aosOnce}
        data-aos-anchor-placement={props.aosAnchorPlacement}
        >
            {props.children}
        </div>
    )
}

AnimateonScroll.defaultProps = {
    aos: "fade-up",
    aosOffset: "50",
    aosDelay: "500",
    aosDuration: "1000",
    aosEasing: "ease-in-out",
    aosMirror: "true",
    aosOnce: "true",
    aosAnchorPlacement: "top-center",
}
