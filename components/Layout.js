import Navigation from './Navigation';

function Layout({ children }) {


    const px = 'px-4 lg:px-32'
    const headerHeight = '16';

    return(
        <>
            <header className={`
                bg-white 
                h-${headerHeight}
                w-full 
                fixed top-0 left-0 
                flex justify-between items-center 
                z-10
                ${px}
            `}>
                <p>Logo</p>
                <Navigation />
            </header>
            <main className={`
                bg-teal
                relative top-${headerHeight}
                min-h-screen
                min-w-screen
                flex justify-center items-center
                flex-col md:flex-row 
                gap-32
                ${px}
                pt-24
            `}>
                {children}
            </main>
        </>
    )
}

export default Layout;