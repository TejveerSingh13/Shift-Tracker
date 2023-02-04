import OverView from "../../components/OverView/Overview";
import Summary from "../../components/Summary/Summary";
import AddShifts from "../AddShifts/AddShifts";
import { HomePageContainer } from "./style";


const HomePage = () => {
    return(
        <HomePageContainer>
            <Summary />
            <AddShifts />
            <OverView />
        </HomePageContainer>
    );
}
export default HomePage