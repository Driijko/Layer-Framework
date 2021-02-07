// IMPORTS //////////////////////////////////////////////////////////
// Import components ----------------------------------------------
import LayerSection from "../../0 Section Tools/LayerSection";
import Frame2 from "../../../2 Elements/Formal/Frames/Frame2";
import TextHeader0 from "../../../2 Elements/Text/Text Headers/TextHeader0";
import Paragraph0 from "../../../2 Elements/Text/Paragraphs/Paragraph0";
import LSSeq0 from "../../../2 Elements/LSSeqs/LSSeq0";
import Link from "../../../2 Elements/Links/Link";

// COMPONENT ////////////////////////////////////////////////////////////
function HomePageLayer1({
    width, height, tabIndex, enterKey, triggerExit, setModalOpen, modalOpen
}) {

    // RENDER /////////////////////////////////////////////////////////////
    return (

<>
    <LayerSection type="fixed" containerSize={{width: width, height: height}}>
        <Frame2 spatial={[0, 0, 20, 30]} width={width} />
        <TextHeader0 level={2} spatial={[0, 0, 20, 5]} width={width} >
            <h2>Flow</h2>
        </TextHeader0>

        <Link width={width} spatial={[4, 20, 12, 5]}
            linkType={{type: "section", linkTo: "/demo/features", triggerExit:triggerExit}}
            linkStyle={{number: 0, colors: ["white", "magenta"]}}
            focus={tabIndex === 1} enterSelect={tabIndex === 1 && enterKey}
        >EXPLORE</Link>
    </LayerSection>

    {/* <LSSeq0 width={width} height={height} initialHeight={20} type="column"
        components={[
            {type: "p", spatial: 4,
            text: `Flow is a web-design framework: a tool which assists a developer 
                    in creating a website.`
            },
            {type: "p", spatial: 5,
            text: `So what makes Flow different from other web-design frameworks? 
            There are a few specific features which make Flow unique. `
            },
            {type: "p", spatial: 10,
            text: `The most obvious feature of Flow is that it emphasizes 
            aesthetically-driven design, including animated and interactive page 
            transitions, backgrounds, links and buttons. Flow is motivated by the belief 
            that web design should always be beautiful and stylish, and that website creation
            is an artform as much as it is engineering and design.`
            },
            {type: "p", spatial: 9,
            text: `Flow also utilizes Uniform Responsive Design, a technique which allows 
            website layouts to scale smoothly across a wide range of devices, from tiny 
            mobile phones to 4K monitors. Uniform Responsive Design provides developers with
            precision and flexibility in tackling the tricky problem of website layout.`
            },
            {type: "p", spatial: 10,
            text: `Lastly, Flow involves it's own internal conception of website structure 
            and how different web elements can affect each other, including specific designs 
            for text, links, buttons, menus, articles, and modal layers. The emphasis in
            Flow is to maximize the potential for web elements to interact in surprising,
            interesting and helpful ways`
            },
            
        ]}
    /> */}

    {/* <LayerSection type="column" containerSize={{width: width, height: height}} >

        <Paragraph0 width={width} spatial={[1, 7, 18, 5 + (width/960)]}>
            Flow is a web-design framework: <br/>a software tool that assists
            developers in creating websites.
        </Paragraph0>

        <Paragraph0 width={width} 
            spatial={[1, 7 + 5 + Math.floor(width/960) + 1, 18, 6 + (width/960)]}>
            It handles a variety of technical problems specific to this task: 
            from responsive design layouts to integrated user controls.
        </Paragraph0>

    </LayerSection>

    <LayerSection type="column" containerSize={{width: width, height: height}} >
        <Paragraph0 width={width} spatial={[1, 4, 18, 11]}>
            But at the heart of Flow is a philosophy of aesthetics-driven web design.
        </Paragraph0>

        <Paragraph0 width={width} spatial={[1, 19, 18, 14]}>
            It handles a variety of technical problems specific to this task: 
            from responsive design layouts to integrated user controls.
        </Paragraph0>
    </LayerSection> */}
</>

    );
};

// EXPORTS ///////////////////////////////////////////////////////////////
export default HomePageLayer1;