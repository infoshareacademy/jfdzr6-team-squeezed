
import { NavBarClientPanel } from "../components/ClientPanel/NavBarClientPanel/NavBarClientPanel";
import { AddOffer } from "../components/ClientPanel/AddOffer/AddOffer";
import { Footer } from '../components/Footer/Footer';

export const NewOffer = () => {

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>

            <AddOffer />
            <Footer></Footer>
        </div>
    );


};

