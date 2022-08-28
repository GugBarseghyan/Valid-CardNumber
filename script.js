const content = document.querySelector(".content");
let memory = 0;

function viewChanges(){
        memory = 0
        const inputt = document.querySelector("#insertedText");
        if(inputt.value === ""){
            content.innerHTML =`<h1>Text input is empty!!<br>Plase write for continue!</p>`
        }else if(inputt.value.length !== 16){
            content.innerHTML =`<h1>Something goes WRONG!!<br>Write number with 16 caracters!</h1>`
        }else if (inputt.value.length === 16){
            const valuee = inputt.value.toString().split('');
            const input = valuee.map(Number);
    
            for(let i = 0; i < input.length;  i++){
                if(i%2 !== 0){
                    memory = memory + input[i];
                }else{
                    if(input[i] === 5){
                        memory = memory + 1
                    }else if(input[i] === 6){
                        memory = memory + 3
                    }else if(input[i] === 7){
                        memory = memory + 5
                    }else if(input[i] === 8){
                        memory = memory + 7
                    }else if(input[i] === 9){
                        memory = memory + 9
                    }else{
                        memory = memory +  (input[i] * 2) 
                    }
                }
            }
            content.innerHTML = `<h1>${memory}</h1>`
            let valueofAnswer = memory.toString().split("");
            if(valueofAnswer[1] === "0"){
                content.innerHTML = `<h1>It is valid:  ${memory}</h1>`
            }else{
                content.innerHTML = `<h1>It isn't valid:  ${memory}</h1>`
            }
        }
}