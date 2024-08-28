import { INC, DEC } from "./actionType";

export const increment=(payload=1)=>({type:INC, payload})
export const decrement=(payload=1)=>({type:DEC, payload})


