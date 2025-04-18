function changeText(){
    document.getElementById("myDiv").textContent = "Javascript is Fun to write";
}

function changeStyle(){
    const div = document.getElementById("myDiv");
    div.style.backgroundColor = "blue";
    div.style.color = "white";
    div.style.fontWeight = "bold";
}

function toggleElement(){
    let existing = document.getElementById("newText");

    if(existing){
        existing.remove();
    }
    else{
        const newElement = document.createElement("p");
        newElement.id = "newText";
        newElement.textContent = "Javascript adds responsiveness to a website!!"
        newElement.style.color = "gray";
        newElement.style.textAlign = "center";
        newElement.style.margin = "20px auto"
        document.body.appendChild(newElement);
    }
}