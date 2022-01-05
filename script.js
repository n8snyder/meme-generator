function submitMeme(event) {
    event.preventDefault();
    const imageUrl = Object.values(event.target).find(element => element.id === "imageUrl").value;
    const topText = Object.values(event.target).find(element => element.id === "topText").value;
    const bottomText = Object.values(event.target).find(element => element.id === "bottomText").value;
    const newMeme = createMemeElement(imageUrl, topText, bottomText)
    const memeList = document.getElementById("memeList");
    memeList.append(newMeme);
    event.target.reset();
}

function createMemeElement(imageUrl, topText, bottomText) {
    /*
    The meme will have the structure of
    <div class="container"> 
        <img src="..."> 
        <div class="top-text">text</div> 
        <div class="bottom-text">text</div> 
        <button>Remove</button>
    </div>
    */
    // Create container
    const newMeme = document.createElement("div");
    newMeme.className = "container";

    // Create img element
    const memeImg = document.createElement("img");
    memeImg.src = imageUrl;

    // Create top-text div element
    const topTextEle = document.createElement("div");
    topTextEle.className = "top-text";
    topTextEle.textContent = topText;

    // Create bottom-text div element
    const bottomTextEle = document.createElement("div");
    bottomTextEle.className = "bottom-text";
    bottomTextEle.textContent = bottomText;

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";
    removeButton.addEventListener("click", removeMeme);

    // Put them all in the container
    newMeme.append(memeImg);
    newMeme.append(topTextEle);
    newMeme.append(bottomTextEle);
    newMeme.append(removeButton);

    return newMeme;
}

function removeMeme(event) {
    console.log(event);
    event.target.parentElement.remove();
}

const formElement = document.querySelector("form");
formElement.addEventListener("submit", submitMeme);