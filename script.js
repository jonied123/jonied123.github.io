let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
let randomEnglishWord;

function addVocabulary() {
    dictionary[englishText.value] = germanText.value;
    englishText.value = '';
    germanText.value = '';

    localStorage.setItem('dictionary', JSON.stringify(dictionary));
    render();
}

function render() {
    vocabularyList.innerHTML = '';
    for (let key in dictionary) {
        vocabularyList.innerHTML += '<li>' + key + ' | ' + dictionary[key] + '</li>'
    }
}

function showVocabulary() {
    //creates an arry with the keys of the JSON
    let obj_keys = Object.keys(dictionary);
    //random key gets saved
    randomEnglishWord = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    EnglishWord.innerHTML= `${randomEnglishWord}?`;

}

function compare() {
    if(inputGerman.value == dictionary[randomEnglishWord]){
        inputGerman.innerHTML = '';
        trueFalse.innerHTML = "Richtig!!";
        showVocabulary();
    }else{
        //inputGerman.innerHTML = '';
        trueFalse.innerHTML = "Falsch!!";
    }

}