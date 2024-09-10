function showAnswer(response) {
   console.log(response); 
}


let apiKey = "o84c2a432ct7ef09733306be2507e42f";
let context = "provide a short and concise answer"; 
let prompt = "Who the first female president was?"

let apiUrl =
`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("procesing");
axios.get(apiUrl).then(showAnswer);