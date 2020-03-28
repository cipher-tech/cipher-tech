function breakPoints(params, ...styles) {
    return (
        ` @media only screen and (max-width: ${params[0]}) {
            ${styles.join().replace(',', ' ')}
         }`
    )
}

export default breakPoints