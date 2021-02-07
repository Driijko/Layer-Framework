const components = [{type: "p"}];
const gridHeight = 30;
const initialHeight = 7;

let layerSections = [];
let sectionComponents = [];
let i = 0;
let height = initialHeight;

// return (
//     <div></div>
// );

while(i < components.length) {

    while (height <= gridHeight) {
        if (components[i].type === "p") {
            console.log("hi");
        }
        height = (gridHeight + 1);
    }

    i = components.length;
};

