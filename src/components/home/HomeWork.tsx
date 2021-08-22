import styled from "styled-components"
import {Wrapper} from 'container/Container'
import WorkCard from "components/WorkCard"
import { FC, useEffect, useState } from "react"
import PageLoading from "components/PageLoading"
import {workUrl} from 'api/constants'
import axios from "axios"




interface WorkArray{
  id?: string, 
  title?: string, 
  featured_image?: any, 
  description?:string,
  slug?:string, 

}

const HomeWork:FC<WorkArray> = props => {

const [loading, setLoading]=useState<boolean>(true)
const [works, setWorks]=useState<WorkArray[]>([])
 

 const fetchWorks=()=>{
  setLoading(true)
  axios.get(workUrl)
  .then(res=>{
    setWorks(res.data)
    setLoading(false)
  })
  .catch(err=>{

  })
}

  
      useEffect(()=>{
        fetchWorks()
       
      }, [])
      

    return (
        <Body className=' mt-10 mb-14'>
          {loading? 
          
        <>
     {loading && [1,2,3,4].map((load,index)=>
      
      <PageLoading key={index}/>)}
        </>:
        
        <>
        
        {works && works.length > 0&& <>
 <Wrapper className="">

{works.map(work=>
 <WorkCard key={work.id} link={`/work/${work.slug}`} title={work.title} text={work.description} 
 src={work.featured_image}/>
)}
      </Wrapper>
        </>}



</>
          } 
        </Body>
    )
}




const Body = styled.div`
height: 100%;
width: 100%;
min-height: 300px;
`


export default HomeWork
