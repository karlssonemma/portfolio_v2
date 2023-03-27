import Navigation from './Navigation';

const Drawer = ({ isOpen, closeDrawer }) => {

    const open = isOpen ? '' : '-translate-x-full';

    return(
        <div className={`w-4/5 h-screen bg-teal fixed transition ease-in-out duration-500 z-20 p-mobile ${open}`}>
            <div onClick={() => closeDrawer()} className={`bg-black absolute top-0 right-0 translate-x-full w-screen h-screen ${isOpen ? 'opacity-30 block' : 'opacity-0 hidden'} transition-color duration-1000 ease-in-out`}></div>
            <Navigation />
        </div>
    )
};

export default Drawer;