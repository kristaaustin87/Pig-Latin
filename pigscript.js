/*get input*/
document.getElementById("submit").addEventListener("click", function(){
    var message = document.getElementById("message").value;
    
    /*remove special characters*/
    message = message.replace(/[<>\\\/]/g, "");
    
    /*Split array by spaces*/
    var messageArray = message.split(" ");
    
    /*for loop splits each word by letter*/
    for(i = 0; i < messageArray.length; i++){
    	var wordArray = messageArray[i].split("");
    	
    	/*remove first letter*/
    	var firstLetter = wordArray.shift();
    		/*lowercase for first letter and uppercase for second letter if word was capitalized*/
    		if(firstLetter == firstLetter.toUpperCase()){
    			firstLetter = firstLetter.toLowerCase();
    			var newFirstLetter = wordArray.shift();
    			newFirstLetter = newFirstLetter.toUpperCase();
    			wordArray.unshift(newFirstLetter);
    			}
    		
    		/*remove punctuation if there*/	
    		var last = wordArray.length - 1;
    		if(wordArray[last] == "." || wordArray[last] == "," || wordArray[last] == "!" || wordArray[last] == "?"){
    			var punc = true;
    			var wordPunc = wordArray.pop();
    		}
    		
    	/*add first letter +ay and, punctuation if it was there, to the end of the array*/	
    	if(punc == true){
    	wordArray.push(firstLetter, "a", "y", wordPunc);
    	punc = false;
    	}
    	else{
    	wordArray.push(firstLetter, "a", "y");
    	}
    	
    	/*put the modified word back together and into message array*/
    	messageArray[i] = wordArray.join("");
    }
    
    /*join message array into string*/
    var pigLatin = messageArray.join(" ");
    
    /*return string to doc*/
    document.getElementById("translation").innerHTML = pigLatin;
});