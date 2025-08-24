/*
// this custom render is a m,anual representsion of  recat render function
function customrender(reactelement, container){
    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    domelement.setAttribute('href',reactelement.props.href)
    domelement.setAttribute('target',reactelement.props.target)
    container.appendChild(domelement)

}

//react element is an object here before rendering components react stores it like this inside a object.
const reactelement = {
    type: 'a',
    props: {
        href:'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit people'
}

//main_cont stores reference of root elment of html as original react


const main_cont = document.querySelector('#root');
 
//this is a render function call that is used to render all elements of html , css or js
customrender(reactelement, main_cont)   */

/*workflow summary

reactelement = virtual DOM object (blueprint of UI).

customrender = renderer (converts blueprint → real DOM).

main_cont = mounting point (where UI is placed).

React itself does this automatically with React.createElement() and ReactDOM.createRoot().render() — you just simulated it manually 🎉.

*/

// better version of this custom react

function custom_render(reactelement,container){
    const domelement = document.createElement(reactelement.type);
    domelement.innerHTML=reactelement.children;
    for (const key in reactelement.props) {
        domelement.setAttribute(key,reactelement.props[key])           
    }
    container.appendChild(domelement);
}
   


const reactelement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    children:'click to visit google website'
}

const main_container = document.querySelector('#root');
custom_render(reactelement,main_container);



