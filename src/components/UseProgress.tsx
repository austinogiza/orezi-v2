import create from "zustand"

export const UseProgress = create((set)=>({
    isAnimating:false,
    setIsAnimating: (isAnimating:any)=> set(()=>({isAnimating}))
})) 