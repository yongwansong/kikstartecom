document.addEventListener('DOMContentLoaded', function (){
    document.querySelectorAll('.learn_more').forEach(button => {
        button.addEventListener('click', function(){
          console.log('fdfdfdfd')
          button.closest('.product-metaobjects_list').querySelector('.modal').classList.remove('hidden');
        })
    })
    
    document.querySelectorAll('.modal-content').forEach(element =>{
        element.querySelector('.close').addEventListener('click', function(){
            element.closest('.modal').classList.add('hidden');
        })
    })


});

