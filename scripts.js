window.addEventListener("DOMContentLoaded", function(){
    let divider = document.createElement('div');
    let att = document.createAttribute("class");
    att.value = "header-container";
    divider.setAttributeNode(att);

    let h1 = document.createElement('h1');
    let texth1 = document.createTextNode("This is a toilet");
    h1.appendChild(texth1);
    let att1 = document.createAttribute("class");
    att1.value = "h1";
    h1.setAttributeNode(att1);

    let h2 = document.createElement('h2');
    let texth2 = document.createTextNode("This is a second toilet");
    h2.appendChild(texth2);
    let att2 = document.createAttribute("class");
    att2.value = "h2";
    h2.setAttributeNode(att2);

    let h3 = document.createElement('h3');
    let texth3 = document.createTextNode("This is a tertiary toilet");
    h3.appendChild(texth3);
    let att3 = document.createAttribute("class");
    att3.value = "h3";
    h3.setAttributeNode(att3);

    let h4 = document.createElement('h4');
    let texth4 = document.createTextNode("This is a quartenary toilet");
    h4.appendChild(texth4);
    let att4 = document.createAttribute("class");
    att4.value = "h4";
    h4.setAttributeNode(att4);

    let h5 = document.createElement('h5');
    let texth5 = document.createTextNode("This is a quinary toilet");
    h5.appendChild(texth5);
    let att5 = document.createAttribute("class");
    att5.value = "h5";
    h5.setAttributeNode(att5);

    let h6 = document.createElement('h6');
    let texth6 = document.createTextNode("This is a senary toilet");
    h6.appendChild(texth6);
    let att6 = document.createAttribute("class");
    att6.value = "h6";
    h6.setAttributeNode(att6);

    let btn = document.createElement("button");
    let btntext = document.createTextNode("Click to add new list item");
    btn.appendChild(btntext);
    let att_btn = document.createAttribute("class")
    att_btn.value = "bottom";
    btn.setAttributeNode(att_btn);

    let color_array = ["#3B3247", "#006D8E", "#EEDCC4", "#B53021", "#421717", "#50527A", "#F9F4B1", "#A0C7AA"]
    let count = 0;
    h1.addEventListener("dblclick", function(){
        h1.style.color = color_array[count];
        if (count == 7) {
            count = 0
        } else{
        count++
        }
    })
    
    let list_count = 1;
    let ul_item = document.createElement("ul");
    btn.addEventListener('click', function() {
        add_list_item ();
    })

    function add_list_item() { 
        let list_item = document.createElement("li");
        let listtext = document.createTextNode(`This is list item ${list_count}`);
        list_count++
        list_item.appendChild(listtext);
        ul_item.appendChild(list_item);
        divider.appendChild(ul_item);
        list_item.addEventListener('click', list_clicked);
        list_item.addEventListener('dblclick', list_remover);
    }

    let list_color_count = 0
    function list_clicked(e) {
        e.currentTarget.style.color = color_array[list_color_count];
        if (list_color_count == 7) {
            list_color_count = 0
        } else{
        list_color_count++
        }
    }

    function list_remover(e) {
        element = e.currentTarget;
        element.parentNode.removeChild(element);
    }


    divider.appendChild(h1);
    divider.appendChild(h2);
    divider.appendChild(h3);
    divider.appendChild(h4);
    divider.appendChild(h5);
    divider.appendChild(h6);
    divider.appendChild(btn);
    document.body.appendChild(divider);
});