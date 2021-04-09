const array = ["Q", "J", "K", "A", "2", "3"];
    for(let i = 0; i < array.length; i++) {
        if(carta === "3") {
            console.log(array[0]);
            break;
        } else if(carta === array[i]) {
            console.log(array[i+1]);
        }
    }