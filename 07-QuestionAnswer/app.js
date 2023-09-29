let allquiz= document.querySelectorAll('.question-answer');
let openBtn = document.querySelectorAll('#open');

/*-------------------first method------------------------*/

openBtn.forEach((allbtn) => {
    allbtn.addEventListener('click',(e)=>{
        let targetQuiz= e.currentTarget.parentElement.parentElement;
        targetQuiz.classList.toggle('show-ans');
    });

    
});

/*---------------second method----------------*/

// for(let allQuestions of Array.from(allquiz)){
//     let btn= allQuestions.querySelector('#open');
//     btn.addEventListener('click',(e)=>{
//         for(let Specificquiz of Array.from(allquiz)){
//             if(Specificquiz !== allQuestions){
//                 Specificquiz.classList.remove('show-ans');
//             }

//         }
//          allQuestions.classList.toggle('show-ans');

//     });
// }
