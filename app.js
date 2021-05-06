var shop = [
    {
      title: 'Concentrated probiotic',
      image: './prdImg/ProbioticInUse.jpg',
      price: '75',
      description: 'Natural products'
    },

    {
      title: 'Pumkin Powder',
      image: './prdImg/pumkinPwdr.png',
      price: '45',
      description: 'Natural food'
    },
    {
      title: 'Hip joint chew',
      image: './prdImg/hipJointChew.png',
      price: '65',
      description: 'Natural food'
    },
    {
      title: 'Probiotic Powder',
      image: './prdImg/probioticPwder.png',
      price: '75',
      description: 'Natural food'
    },
    {
      title: 'Dog toy',
      image: './prdImg/dogToy.jpg',
      price: '35',
      description: 'natural material'
    },
    {
      title: 'Dog Chew',
      image: './prdImg/doyChew.jpg',
      price: '25',
      description: 'natural material'
    },
    {
      title: 'Food dispenser',
      image: './prdImg/foodDispenser.jpg',
      price: '25-160',
      description: '100% natural material'
    },
    {
      title: 'Monkey',
      image: './prdImg/monkey.jpg',
      price: '55',
      description: '100% natural material'
    },
    {
      title: 'Natural pet',
      image: './prdImg/natPet.jpg',
      price: '45',
      description: '100% natural material'
    },
    {
    title: 'Bird toy',
    image: './prdImg/parrotToy.jpg',
    price: '45',
    description: '100% natural material'
    },
    {
      title: 'Doggy bandana',
      image: './prdImg/blueCollar.png',
      price: '35',
      description: '100% natural material'
     },
     {
      title: 'Tie',
      image: './prdImg/sailorTie.png',
      price: '25',
      description: '100% natural material'
     },
     {
      title: 'White bandana',
      image: './prdImg/white-collar.jpg',
      price: '35',
      description: '100% natural material'
     },
  
    
    ]
    
    var postHTML = " "
  

  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product col-4 ' + '"><span> <h5>' + shop[i].title + '</h5>'
        var image = '<img class=\'monaLisa\' src="' + shop[i].image + '"/>'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-info"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML