function rollDice(){
    const numsDice=document.getElementById('numsDice').value;
    const resultsDiv=document.getElementById('results');
    const diceImagesDiv=document.getElementById('dice-images');
    const values=[];
    const images=[];

    for(let i=0;i<numsDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}" class="dice-image">`);
    }

    resultsDiv.textContent=`You rolled: ${values.join(', ')}`;
    diceImagesDiv.innerHTML=images.join(' ');

}