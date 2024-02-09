export default function TabButton({children, isSelected, ...props}) {
    // vanilla js event
//    document.querySelector('button').addEventListener('click', () => {})
    /*
    function handleClick() {
        console.log("Hello, World!");
    }

     */
    console.log("TabButton got called");
    return (
        <li>
            <button className={ isSelected ? 'active' : undefined} {...props}>{children} </button>
        </li>
    );
}