

function isAnagram(str1 ,  str2){

    if (str1.length !== str2.length) {
        return false;
    }
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str1.split("").sort().join("");

    return sortedStr1 === sortedStr2;

}

var word1 = "vile";
var word2 = "evil";

var word1 = "silent";
var word2 = "listen";

var word1 = "gram";
var word2 = "aram";

var word1 = "mom";
var word2 = "tom";

if (isAnagram(word1 , word2)) {
    console.log(`${word1} and ${word2} are anagram.`);
} else {
    console.log(`${word1} and ${word2} are not anargram.`);
}

