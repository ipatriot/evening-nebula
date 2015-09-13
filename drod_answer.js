exports = (typeof window === 'undefined') ? global : window;

 /**
  * This file defines an object with some methods. Some of these methods are
  * populated incorrectly; your job is to fix them. Other methods are not
  * populated at all; your job is to fill them out.
  */

 exports.eveningExerciseAnswers = {
   indexOf : function(arr, item) {
     for (var i = 0; i < arr.length ;i++) {
       if (arr[i] === item) {
         return i;
       }
     }
     return -1;
   },

   sum : function(arr) {
     var sum = 0;
     for (var i = 0; i < arr.length ;i++) {
       sum += arr[i];
     }
     return sum;
   },

   remove : function(arr, item) {
     for (var i = 0;i < arr.length ;i++) {
       if (arr[i] === item) {
         arr.splice(i, 1);
       }
     }
     return arr;
   },

   reverseString : function(str) {
     var reverseString = [];
     var arrStr = str.split("");
     for (var i = 0;i < arrStr.length ;i++) {
       reverseString.unshift(arrStr[i]);
     }
     return reverseString.join("");
   },

   longestSubString : function(str) {
     var substrings = str.split(" ");
     var longest = substrings[0];
     for (var i = 1;i < substrings.length;i++) {
       if (substrings[i].length > longest.length) {
         longest = substrings[i];
       }
     }
     return longest;
   },

   letterMoveForward : function(str) {
     var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
     var old_str = str.split("");
     var new_str = [];
     var currentLetterIndex, nextLetterIndex, nextLetter;
     for (var i = 0;i < old_str.length;i++) {
       currentLetterIndex = alphabet.indexOf(old_str[i]);
       if (currentLetterIndex === -1) {
         nextLetter = old_str[i];
       } else {
         nextLetterIndex = (currentLetterIndex + 1) % 26;
         nextLetter = alphabet[nextLetterIndex];
       }
       new_str.push(nextLetter);
     }
     return new_str.join("");
   },

   capitalizeWords : function(str) {
     var substrings = str.split(" ");
     var newString = [];
     var capitalizedSubstring;
     for (var i = 0;i < substrings.length;i++) {
      capitalizedSubstring = substrings[i].charAt(0).toUpperCase() + substrings[i].slice(1);
      newString.push(capitalizedSubstring);
     }
     return newString.join(" ");
   }
 };
