import {useState} from 'react'

const Section = ({title,description,isVisible,setVisibleSection,hideSection}) =>{
    return <div className='border border-black p-2 m-2'>
        <h3 className="text-xl" >{title}</h3>
        {isVisible && <p>{description}</p> }
       {isVisible === true ? (<button onClick={()=>{
            hideSection()
        }}>Hide</button>) :
               (<button onClick={()=>{
                setVisibleSection()
        }}>Show</button>)
        }
    </div>
}

const Instamart = ()=>{
    const [visibleSection, setVisibleSection] = useState('about');

    function modifyTeam(key){
        setVisibleSection(key)
    }
    function modifyAbout(key){
        setVisibleSection(key)
    }

    function hideSection(){
        setVisibleSection('')
    }
    return <div>
        <h1>Welcome to Instamart</h1>
        <Section title={"About Instamart"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} isVisible={visibleSection === 'about'} setVisibleSection = {()=> modifyAbout('about')} hideSection = {()=>hideSection()}></Section>

        <Section title={"Team Instamart" } description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."} isVisible={visibleSection === 'team'} setVisibleSection = {()=>modifyTeam('team')} hideSection = {()=>hideSection()}></Section>

        <Section title={"Career Instamart" } description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."} isVisible={visibleSection === 'career'} setVisibleSection = {()=>modifyTeam('career')} hideSection = {()=>hideSection()}></Section>
        </div>
}

export default Instamart