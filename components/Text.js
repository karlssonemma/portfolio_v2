export default function Text({ children, classes }) {
    return(
        <p className={`text-sm tracking-wide ${classes}`}>
            {children}
        </p>
    )
}