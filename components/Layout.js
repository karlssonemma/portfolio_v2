import Header from './Header';


let px = 'px-8 lg:px-32'
let headerHeight = 'h-16';
let top = 'top-16';

function Layout({ children }) {

    return(
        <>
            <Header 
                height={headerHeight}
                px={px}
            />
            <main className={`
                bg-white
                relative ${top}
                min-h-screen
                min-w-screen
                h-max-content
                flex justify-center items-center md:items-start
                flex-col md:flex-row 
                gap-32
                py-24
            `}>
                {children}
            </main>
        </>
    )
};


export default Layout;