// var titles = document.getElementsByClassName('title');

// how to convert an html to an array
// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));


// Array.from(titles).forEach(function(item){
//    console.log(item);
// })

// var btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn){
//    btn.addEventListener('click', function(e){
//       const li = e.target.parentElement;

//       li.parentNode.removeChild(li);
//    });
// });


// delete books
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
   if(e.target.className == 'delete') {
      const li = e.target.parentElement;
      list.removeChild(li)
   };
});


// add book-list 
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
   e.preventDefault();  /*prevent d page from refreshing to initial after deleting something*/
   const value = addForm.querySelector('input[type="text"]').value;


   // create elements
   const li = document.createElement('li');
   const bookName = document.createElement('span');
   const deleteBtn = document.createElement('span');

   // add content (textContent)
   deleteBtn.textContent = 'delete';
   bookName.textContent = value; 

   // add classes
   bookName.classList.add('name');
   deleteBtn.classList.add('delete');

   // append to document (nesting them to eachother)
   li.appendChild(bookName);
   li.appendChild(deleteBtn);
   list.appendChild(li);

});