import { FunctionComponent, ReactNode } from "react";
import CabecalhoSite from "./CabecalhoSite";
import RodapeSite from "./RodapeSite";

type Props = {
    children: ReactNode
};

const PaginaComum: FunctionComponent<Props> = function (props) {
    return (
        <>
            <CabecalhoSite/>
                {props.children}
            <RodapeSite/>
        </>
    );
};

export default PaginaComum;