var cards = ["1.png", "2.png", "3.png", "3.png", "4.png", "5.png", "2.png", "6.png", "1.png", "5.png", "6.png", "4.png"];

// console.log(cards);   //sprawdzanie co jest w tablicy

var c0=document.getElementById('k0');
var c1=document.getElementById('k1');
var c2=document.getElementById('k2');
var c3=document.getElementById('k3');
var c4=document.getElementById('k4');
var c5=document.getElementById('k5');
var c6=document.getElementById('k6');
var c7=document.getElementById('k7');
var c8=document.getElementById('k8');
var c9=document.getElementById('k9');
var c10=document.getElementById('k10');
var c11=document.getElementById('k11');

c0.addEventListener("click", function(){ revealCard(0);});
c1.addEventListener("click", function(){ revealCard(1);});
c2.addEventListener("click", function(){ revealCard(2);});
c3.addEventListener("click", function(){ revealCard(3);});
c4.addEventListener("click", function(){ revealCard(4);});
c5.addEventListener("click", function(){ revealCard(5);});
c6.addEventListener("click", function(){ revealCard(6);});
c7.addEventListener("click", function(){ revealCard(7);});
c8.addEventListener("click", function(){ revealCard(8);});
c9.addEventListener("click", function(){ revealCard(9);});
c10.addEventListener("click", function(){ revealCard(10);});
c11.addEventListener("click", function(){ revealCard(11);});

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;


function revealCard(nr)
{
	var opacityValue = $('#k'+nr).css('opacity');
	
	//alert('Opacity: '+opacityValue);
	
	if (opacityValue != 0 && lock == false)
	{
		lock = true;
		
		//alert(nr);
	
		var obraz = "url(img/" + cards[nr] + ")";
		
		$('#k'+nr).css('background-image', obraz);
		$('#k'+nr).addClass('cardA');
		$('#k'+nr).removeClass('card');
		
		if(oneVisible == false)
		{
			//first card
			
			oneVisible = true;
			visible_nr = nr;
			lock = false;
		}
		else
		{
			//second card
			
			if(cards[visible_nr] == cards[nr])
			{
								
				setTimeout(function() { hide2Cards(nr, visible_nr) }, 750);
				
			}
			else
			{
								
				setTimeout(function() { restore2Cards(nr, visible_nr) }, 1000);
			}
			
			turnCounter++;
			$('.score').html('Turn counter: '+turnCounter);
			oneVisible = false;
		}
		
	}
	
}

function hide2Cards(nr1, nr2)
{
	$('#k'+nr1).css('opacity','0');
	$('#k'+nr2).css('opacity','0');
	pairsLeft--;
	if(pairsLeft==0)
	{
		$('.board').html('<h1>You win!<br />Done in '+turnCounter+' turns</h1>');
	}
	
	lock=false;
}
function restore2Cards(nr1,nr2)
{
		$('#k'+nr1).css('background-image', 'url(img/background.png)');
		$('#k'+nr1).addClass('card');
		$('#k'+nr1).removeClass('cardA');
		
		$('#k'+nr2).css('background-image', 'url(img/background.png)');
		$('#k'+nr2).addClass('card');
		$('#k'+nr2).removeClass('cardA');
		
		lock=false;
}



