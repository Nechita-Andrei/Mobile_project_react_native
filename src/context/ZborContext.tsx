import {createContext, useContext} from "react";

export enum ZBOR_STATUS{
    ON_TIME,
    DELAYED,
    POSTPONED,
    CANCELED
}

export interface IZbor{
    title: string,
    status: ZBOR_STATUS
}

export interface IZborContext{
    addZbor: (data: IZbor)=>void;

}

const ZborContext=createContext<IZborContext>({
    addZbor: ()=>{ },
});

export const useZborContext= () : IZborContext =>useContext(ZborContext);

export default ZborContext;