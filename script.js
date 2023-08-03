let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};


function addVocabulary() {
    dictionary[englishText.value] = germanText.value;
    englishText.value = '';
    germanText.value = '';

    localStorage.setItem('dictionary', JSON.stringify(dictionary));
}

function render() {
    for (let key in dictionary) {
        vocabularyList.innerHTML += '<li>'+key+ ' | '+ dictionary[key]+'</li>'
    }
}