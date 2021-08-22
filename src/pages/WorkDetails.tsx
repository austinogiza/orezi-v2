import styled from "styled-components"
import {projectTitle} from 'styles/TextStyles'
import { Wrapper } from "container/Container"
import React, { useEffect, useState } from "react"
import { workDetailUrl } from "api/constants"
import axios from "axios"
import PageLoading from "components/PageLoading"
import { useParams } from "react-router"


interface WorkDetailsProps{
    title: string,
    featured_image:any,
    length:string,
    software:string,
    role:string,
    outcome:string,
    overview:string,
    top_text:string,
    problem_statement:string,
    bottom_text:string,

}

interface RouteParams{
    slug: string
}

const WorkDetails:React.FC<WorkDetailsProps> = props => {


   
    const [work, setWork]=useState<WorkDetailsProps | null>(null)
    const [loading,setLoading] = useState<boolean>(false)
    
    const {slug}= useParams<RouteParams>()
 
const fetchWork=()=>{
    setLoading(true)
    axios.get(workDetailUrl(slug))
    .then(res=>{
        setWork(res.data)
        setLoading(false)
    })
    .catch(err=>{
        setLoading(false) 
    })

}
  

    useEffect( ()=>{
    
        fetchWork()

}, [slug])


    return (
    <>
{loading?
<>
<PageLoading/>
</>:

<>

{work &&
    <Body>
        

            <Wrapper>

                <MainTitle>{work.title}</MainTitle>
                <MainImage src={work.featured_image} alt={``}/>

                <Topsection className=' w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 my-10'>

                    <Role>
                        <h1>Role</h1>
                        <p>{work.role}</p>
                    </Role>
                    
                    <Role>
                        <h1>Length</h1>
                        <p>{work.length}</p>
                    </Role>
                    
                    <Role>
                        <h1>Tools used</h1>
                        <p>{work.software}</p>
                    </Role>
                    
                    <Role>
                        <h1>Outcome</h1>
                        <p>{work.outcome}</p>
                    </Role>
                </Topsection>

                <Overview>
                    <h1>Overview</h1>
                    <p>{work.overview}</p>
<div dangerouslySetInnerHTML={{__html: work.top_text}}/>



                </Overview>
                <Overview>
                    <h1>Problem Statement</h1>
                    <p>{work.problem_statement}</p>
                    <div dangerouslySetInnerHTML={{__html: work.bottom_text}}/>

                </Overview>


            </Wrapper>
            
        </Body>
}

</>
}
    </>

    )
}

const Body = styled.div`
  color: #fff ;
`
const MainTitle = styled(projectTitle)`
text-align: center;
margin:24px 0;

`
const MainImage = styled.img`
margin:16px 0 40px 0;
max-width:956px;
max-height:640px;
width:100%;
height:100%;
`
const Topsection = styled.div``
const Role = styled.div`
margin: 16px 0;

h1{
font-family:"DM Serif Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 1.3;
text-align: left;

}
p{
    font-family: "GGX88";
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: 1.6;
text-align: left;
margin: 8px 0;

}
`
      
const Overview = styled.div`
margin: 16px 0;

h1{

    font-family: "DM Serif Display";
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 1.4;
letter-spacing: 0em;
text-align: left;
margin: 16px 0;

}

h2{

    font-family: "DM Serif Display";
font-size: 28px;
font-style: normal;
margin: 16px 0;
font-weight: 400;
line-height: 1.6;
letter-spacing: 0em;
text-align: left;

}

h3{
    font-family: "DM Serif Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 33px;
margin: 16px 0;
letter-spacing: 0em;
text-align: left;

}
p{
    font-family: "GGX88";
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 1.6;
letter-spacing: 0em;
margin: 16px 0;
text-align: left;

}

img{
    min-height: 300px;

max-width: 959px;
margin: 16px 0;
width:100%;

}

a{
    transition: 0.3s ease-in;
    :hover{
        color: #F5AD00;
    }
}
`


export default WorkDetails
