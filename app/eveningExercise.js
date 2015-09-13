exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

 exports = (typeof window === 'undefined') ? global : window;

 /**
  * This file defines an object with some methods. Some of these methods are
  * populated incorrectly; your job is to fix them. Other methods are not
  * populated at all; your job is to fill them out.
  */

 exports.eveningExerciseAnswers = {
   indexOf : function(arr, item) {
     var index = 0;
     index = arr.indexOf(item);
     return index;


   },

   sum : function(arr) {
     var test = (eval(arr.join('+')));
     return test ;

   },

   remove : function(arr, item) {
     return arr.filter(function(element){
       return element !== item;
     });
 }

   },

   reverseString : function(str) {
     return str.split('').reverse().join('');
   },

   longestSubString : function(str) {


     var string = str.split(" ");
     var longest = 0;
     var word = null;
     for (var i = 0; i < string.length; i++) {
         if (longest < string[i].length) {
             longest = string[i].length;
             word = string[i];
         }
     }
     return word;

   },

   letterMoveForward : function(str) {
     var letter = str.replace(/[a-z]gi, function(c) {
       switch (c) {
         case 'z': return 'a';
         case 'Z': return 'A';
         default: return String.fromCharCode(1 + c.charCodeAt(0));
       }
     });
     return letter

   },

   capitalizeWords : function(str) {
     // return str.split(' ').toUpperCase().join(' ')
     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

   }
 };
