import { useState } from "react"
import { BackgroundContainer, MainContainer, PageContainer, PagesContainer } from "./style"


const LoginPage = () => {
const [offset, setOffset] = useState(0)

const handleOffset = ()=> {
    setOffset((prev) => {
        if(prev === 0) return -432
        else return 0
    })
    console.log(offset)
}

    return (
        // this is the background
        <BackgroundContainer> 
            {/* this is the main display */}
            <MainContainer>
                {/* this is the main container containing both pages */}
                <PagesContainer style={{translate: `${offset}px`}}>
                    <PageContainer>Login</PageContainer>
                    <PageContainer>Sign-Up</PageContainer>
                </PagesContainer>
            </MainContainer>
            <button onClick={handleOffset}>Hanji?</button>
        </BackgroundContainer>
    )
}

export default LoginPage