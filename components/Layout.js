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
                min-h-[calc(100vh-4rem)]
                min-w-screen
                flex
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