import Navigation from './Navigation';

function Layout({ children }) {

    return(
        <>
            <header className='w-full absolute top-0 left-0 bg-white flex justify-between'>
                <p>Logo</p>
                <Navigation />
            </header>
            <main className='bg-teal flex flex-col md:flex-row'>
                {children}
                <p>hej</p>
            </main>
        </>
    )
}

export default Layout;