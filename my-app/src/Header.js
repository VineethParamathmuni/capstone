import Nav from './Nav';

export default function Header(props){
    return(
        <>
            <header>
                <img src={props.src} alt="Logo" width="100px" height="100px"></img>
                <Nav/>
            </header>
        </>
    )
}