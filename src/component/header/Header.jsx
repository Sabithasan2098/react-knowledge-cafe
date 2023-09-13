import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between p-4 items-center border-b-2 md:max-w-6xl mx-auto'>
             <h1 className='text-6xl   mt-10 font-bold'>knowledge Cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;