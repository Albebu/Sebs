import LeftBar from "./LeftBar";
import Navegation from './Navegation'
import Content from "./Content";
import Rightbar from "./RightBar";
import Controls from "./Controls";

const MainContent = ({ profileImage, profileName }) => {
    return(
        <>
            <Navegation profileImage={profileImage} profileName={profileName}></Navegation>
            <div className="grid grid-cols-[1fr_4fr_1fr]">
                <LeftBar></LeftBar>
                <Content></Content>
                <Rightbar></Rightbar>
            </div>
            <Controls></Controls>
        </>
        
    );
}

export default MainContent;