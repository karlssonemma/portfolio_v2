import Navigation from './Navigation';

function Layout({ children }) {

    const px = 'px-4 md:px-9'

    return(
        <>
            <header className={`
                bg-white 
                w-full 
                absolute top-0 left-0 
                flex justify-between 
                ${px}
            `}>
                <p>Logo</p>
                <Navigation />
            </header>
            <main className={`
                bg-teal 
                min-h-screen 
                flex justify-center items-center
                flex-col md:flex-row 
                ${px}
            `}>
                {children}
            </main>
        </>
    )
}

export default Layout;