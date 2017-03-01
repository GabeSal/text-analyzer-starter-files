// splits text into words
function splitText(text) {
  var splitWords = text.toLowerCase();
  var words = splitWords.split(/ /g).sort();
  return words;
}

// calculates average word length
function averageWordLength (words) {
  var totalLength = words.join("").length;
  return (totalLength / words.length).toFixed(2);
}

// counts distinctive words
function uniqueWordCount(words) {
  var uniqueWords = [];
  for(var i = 0; i < words.length; i++) {
    if (uniqueWords.indexOf(words[i]) === -1) {
      uniqueWords.push(words[i]);
    }
  }
  return uniqueWords.length;
}

// reports the all analytics
function wordReport(text) {
  var words = splitText(text);
  var avgWordLength = averageWordLength(words);
  var countedWords = words.length;
  var uniqueWords = uniqueWordCount(words);

  var textReport = $(".js-text-report");
  textReport.find('.js-word-count').text(countedWords);
  textReport.find('.js-unique-word-count').text(uniqueWords);
  textReport.find('.js-avg-word-length').text(avgWordLength + " characters");

  textReport.removeClass('hidden');

}

// removes whitespace and special characters text
function normalizeText(words) {
  var text = words.replace( /[,.!?-]+/g, "" );
  var noSpace = text.replace( /\s+/g, " " );
  return noSpace;
}

// watches for form to be submitted
function formSubmission() {
  $(".js-text-form").submit(function(event) {
    event.preventDefault();
    var userText = $(this).find("#user-text").val();
    wordReport(normalizeText(userText));
  });
}

// waits for window to load before 'readying' this function
$(function() {
  formSubmission();
})