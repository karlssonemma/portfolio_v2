import Caption from './Caption';
import Navigation from './Navigation';


let px = 'px-8 lg:px-32'
let headerHeight = 'h-16';
let top = 'top-16';

function Layout({ children }) {

    return(
        <>
            <Header />
            <main className={`
                bg-white
                relative ${top}
                min-h-screen
                min-w-screen
                h-max-content
                flex justify-center items-center md:items-start
                flex-col md:flex-row 
                gap-32
                ${px}
                py-24
            `}>
                {children}
            </main>
        </>
    )
};

const Header = () => {
    return(
        <header className={`
                bg-gradient-to-b from-white to-transparent
                ${headerHeight}
                w-full 
                fixed top-0 left-0 
                flex justify-between items-center 
                z-10
                ${px}
            `}>
            <Caption>Emma Karlsson</Caption>
            <Navigation />
        </header>
    )
}

export default Layout;