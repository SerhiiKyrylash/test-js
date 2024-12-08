
//находим нужные элементы
const textareaList = document.querySelector('.textarea');
const form = document.querySelector('#form');
const inputField = document.querySelector('#input-field');
const deleteBtn = document.querySelector('#delete');
const  btnName = document.querySelector('.btn-sortName')
const  btnValue = document.querySelector('.btn-sortValue')



form.addEventListener('submit',formHandler);
function formHandler(event){
    event.preventDefault() //отмена стандартного повидение браузера,перезагрузки
    const taskText = inputField.value;// получаем значение,текс поля ввода
    const arr = taskText.split('=');//розделяю на части по символу "=" на массив

    if(arr.length === 2){                 //проверяем условие на 2 элемента в массиве
        const  key = arr[0].trim();    // записываем первые элемент масива, без пробелов в key(ключ)
        const  value = arr[1].trim();  // второй value(значение)
        if( key !=='' && value !=='' ){    //проверяем что строки не пустые



            const  div = document.createElement('div'); //создаем элемент
            div.className = 'output' ; // класс элементу
             //создаем чекбокс
            const checkbox = document.createElement('input');
            checkbox.type ='checkbox'; //создаем тип
            checkbox.className = 'item-checkbox' ;// создаем класс



            const p = document.createElement('p');// создаем елемент
            p.innerText = `${key}=${value}`; // в <p> добавляем текст через обратные скопки
            p.dataset.key = key; //добаляем атрибуты data-key,
            p.dataset.value = value; //data-value


            //Добавляем параграф с текстом и чекбокс у выше созданый <div>, .
            div.appendChild(p)
            div.appendChild(checkbox)

            textareaList.appendChild(div); // в основный контейнер добавляем <div>

            // очищаем поле ввода для нового ввода.
            inputField.value ='';
            //фокус на поле ввода
            inputField.focus();
        }


    }


   }

//Удаляем элементы
deleteBtn.addEventListener('click', function (){
 const checkbox = document.querySelectorAll('.item-checkbox'); //находим
 for(let item of checkbox){        //перебераем
     if(item.checked){         //проверяем условие, отмечин или нет
         item.closest('div').remove()    //удаля если отмечин
     }
 }
});


//сортируем по key
btnName.addEventListener('click', function (){
    const items = Array.from(textareaList.querySelectorAll('.output'))

    items.sort((a,b)=>{
        const keyA =a.querySelector('p').dataset.key;
        const keyB = b.querySelector('p').dataset.key;
        return keyA.length-keyB.length;
    })

    textareaList.innerHTML = '';

    for(let item of items){

        textareaList.appendChild(item);

    }
});


//сортируем по value
btnValue.addEventListener('click',function (){

    const items = Array.from(textareaList.querySelectorAll('.output'))//находим и переобразуем в массив
    items.sort((a,b)=>{                                           //сортируем по атрибуту
        const keyA =a.querySelector('p').dataset.value;          // находи атрибут элемента <p>
        const keyB = b.querySelector('p').dataset.value;
        return keyA.length-keyB.length;                           //сравниваем длину строки, возвращаем
    })
// очищаям старый контейне
    textareaList.innerHTML = '';
//добавляем новые отсортированные элементы
    for(let item of items){

        textareaList.appendChild(item);

    }

});



