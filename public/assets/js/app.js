$(document).ready(function(){
    
    // Variables
    const addQuestion = $('#add-question');
    const seeAllQuestions = $('#see-all-questions');
    const goToHome = $('#go-to-home');

    // Callbacks
    function addQuestionToDb(event) {
        event.preventDefault();

        console.log('Test');
    }
    
    function goToAllQuestions(event) {
        event.preventDefault();

        location.replace("/AllQuestions")
    }

    function goToHomePage(event) {
        event.preventDefault();

        location.replace("/")
    }

    // Event
    addQuestion.click(addQuestionToDb);
    seeAllQuestions.click(goToAllQuestions);
    goToHome.click(goToHomePage)

});