const btn = document.querySelector('button')

const main = document.querySelector('main')



btn.addEventListener('click', function(){


  for(i=1; i<=100; i++){
    if(i%3 == 0 && i%5 == 0){
    let box = document.createElement('div')
    main.append(box)
    box.classList.add('box')
    box.append('fizzbuzz')
  }else if(i%3 == 0){
    let box = document.createElement('div')
    main.append(box)
    box.classList.add('box')
    box.append('fizz')
  }else if(i%5 == 0){
    let box = document.createElement('div')
    main.append(box)
    box.classList.add('box')
    box.append('buzz')
  }else{
    let box = document.createElement('div')
    main.append(box)
    box.classList.add('box')
    box.append(i)
  }
  }


})

