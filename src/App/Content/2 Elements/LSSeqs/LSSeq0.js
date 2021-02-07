// IMPORTS ////////////////////////////////////////////////////////////////
// Import libraries ------------------------------------------------------
import {useEffect} from "react";

// Import components ----------------------------------------------------
import LayerSection from "../../1 Sections/0 Section Tools/LayerSection";
import TextHeader0 from "../Text/Text Headers/TextHeader0";
import Paragraph0 from "../Text/Paragraphs/Paragraph0";

// Import settings ----------------------------------------------------
import {maxWidth, gridHeight} from "../../../settings";

// COMPONENT /////////////////////////////////////////////////////////////
function LSSeq0({width, height, initialHeight, components, type}) {
    
    // SEQUENCE ///////////////////////////////////////////////////////
    // useEffect(()=> {


    // },[]);
    const offset = Math.floor((maxWidth/width) * 4) ;
    let layerSections = [];
    let sectionComponents = [];
    let h = initialHeight;

    components.forEach((c)=> {

        let currentComponent;

        if (c.type === "p") {
            const componentHeight = c.spatial + Math.floor((maxWidth/width) * c.spatial);
            currentComponent = (
                <Paragraph0 width={width}
                    spatial={[1, h, 18, componentHeight]}
                >{c.text}</Paragraph0>
            );
            h += componentHeight + 1;
        }

        sectionComponents.push(currentComponent);

        if (h > gridHeight) {
            layerSections.push(
                <LayerSection type={type} containerSize={{width: width, height: height}}>
                    {sectionComponents}
                </LayerSection>
            );
            // for(let i = 1; i < Math.floor(h / gridHeight); i++) {
            //     layerSections.push(<LayerSection type={type} containerSize={{width: width, height: height}} />)
            // }
            h -= gridHeight * Math.floor(h / gridHeight);
            sectionComponents = [];
        };

    });

    layerSections.push(
        <LayerSection type={type} containerSize={{width: width, height: height}}>
            {sectionComponents}
        </LayerSection>
    );

    // return (
    //     <div></div>
    // );

    // while(i < c.length) {

        // while (height <= gridHeight) {
        //     let currentComponent;

        //     // Paragraphs
        //     if (c[i].type === "p") {
        //         currentComponent = (
        //             <Paragraph0 width={width} 
        //                 spatial={[1, height, 18, c[i].spatial]}
        //             >{c[i].text}</Paragraph0>
        //         );
        //     }

        //     sectionComponents.push(currentComponent);

        //     height = gridHeight + 1;
        // }

        // layerSections.push(
        //     <LayerSection type={type} containerSize={{width: width, height: height}}>
        //         <Paragraph0 width={width} spatial={[0, 7, 18, 8]}>
        //             Here is a paragraph
        //         </Paragraph0>
        //     </LayerSection>
        // );

        // i = c.length;
    // }

    // RENDER /////////////////////////////////////////////////////////
    return (
        layerSections
    );
};

// EXPORTS /////////////////////////////////////////////////////////////////
export default LSSeq0;