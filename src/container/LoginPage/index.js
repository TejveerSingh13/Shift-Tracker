import { useState, useEffect } from "react"
import { BackgroundContainer, MainContainer, PageContainer, PagesContainer } from "./style"
import LoginForm from "../../components/LoginForm"
import useScreenWidth from "../../components/useScreenWidth"


const LoginPage = () => {

const width = useScreenWidth()
const [offset, setOffset] = useState(0)

const handleOffset = ()=> {
    setOffset((prev) => (prev === 0 ? (width > 558 ? -432 : -332) : 0));
}

useEffect(() => {
    if (width <= 558 && offset === -432) {
        setOffset(-332);
    } else if (width > 558 && offset === -332) {
        setOffset(-432);
    }
  }, [width, offset]);

    return (
        // this is the background
        <BackgroundContainer> 
            {/* this is the main display */}
            <MainContainer>
                {/* this is the main container containing both pages */}
                <PagesContainer style={{translate: `${offset}px`}}>
                    <PageContainer><LoginForm signup={handleOffset}/></PageContainer>
                    <PageContainer>Sign-Up</PageContainer>
                </PagesContainer>
            </MainContainer>
            <button onClick={handleOffset}>Hanji?</button>
        </BackgroundContainer>
    )
}

export default LoginPage