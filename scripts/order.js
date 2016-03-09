$(document).ready(function() {
	$('select').material_select();
	$('.modal-trigger').leanModal();

	for(var i=0; i<menu.Stores.length; i++){
		var addOption = $('<option></option>').val(i).text(menu.Stores[i].StoreName);
		$('#locationSelect').append(addOption);
	}

	$("#locationSelect").change(function () {
		var store = $( "#locationSelect option:selected" ).val();
		$('#pizzaSelect').empty();
		$('#pizzaSelect').append($('<option></option>').attr('disabled','disabled').attr('selected','selected').text("Choose a pizza"))
		for(var i=0; i<menu.Stores[store].Menu.length; i++){
			var addOption = $('<option></option>').val(i).text(menu.Stores[store].Menu[i].PizzaName);
			$('#pizzaSelect').append(addOption);
		}
		subtotals = 0;
		$('#priceSubtotals').empty();
		$('#modalText').empty();
		$('.totalPrice').append().text("Total: $0.00");
	});
	
	$("#pizzaSelect").change(function () {
		var store = $( "#locationSelect option:selected" ).val();
		var pizza = $( "#pizzaSelect option:selected" ).val();
		var price = menu.Stores[store].Menu[pizza].Price;
		$('#pizzaCost').empty();
		$('#pizzaCost').append().text(price);
	});
	
	$("#addPizza").click(function(){
		var store = $( "#locationSelect option:selected" ).val();
		var pizza = $( "#pizzaSelect option:selected" ).val();
		var price = menu.Stores[store].Menu[pizza].Price;
		$('#priceSubtotals').append("<br>" + menu.Stores[store].Menu[pizza].PizzaName + ": " + price);
		$('#modalText').append("<br>" + menu.Stores[store].Menu[pizza].PizzaName + ": " + price);
		subtotals += price;
		$('.totalPrice').empty();
		$('.totalPrice').append("Total: $" + precise_round(subtotals, 2));
		console.log(subtotals);
	});
});

function precise_round(num, decimals) {
var t=Math.pow(10, decimals);   
 return (Math.round((num * t) + (decimals>0?1:0)*(Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
    }

var subtotals = 0;
var menu = jQuery.parseJSON( '{"Stores": [{"StoreName":"Little Roman\'s","Menu": [{"PizzaName":"Cheese", "Price":8.99},{"PizzaName":"Pepperoni", "Price":10.99},{"PizzaName":"Ultimate", "Price":12.99}]},{"StoreName":"Poker Cards","Menu": [{"PizzaName":"Cheese", "Price":8.99},{"PizzaName":"Pepperoni", "Price":10.99},{"PizzaName":"Ultimate", "Price":12.99},{"PizzaName":"Spicy", "Price":11.99},{"PizzaName":"Meatser", "Price":12.99}]},{"StoreName":"The Cicilian\'s","Menu": [{"PizzaName":"Funky Medina", "Price":9.99},{"PizzaName":"Big Green", "Price":9.99},{"PizzaName":"Meat", "Price":8.99},{"PizzaName":"Spicy Meat", "Price":9.99},{"PizzaName":"Stinky", "Price":10.99}]},{"StoreName":"Mike\'s Pies","Menu": [{"PizzaName":"Steak", "Price":11.99},{"PizzaName":"Steak and Cheese", "Price":13.99},{"PizzaName":"Steak and Cheese and Veggies", "Price":14.99}]},{"StoreName":"Hoang\'s Pizzeria","Menu": [{"PizzaName":"Cheese", "Price":7.99},{"PizzaName":"Fish", "Price":9.99},{"PizzaName":"Ultimate Fish", "Price":11.99}]},{"StoreName":"Harry Gary\'s Pizza Pie","Menu": [{"PizzaName":"Harry Gary\'s Pie", "Price":10.99}]},{"StoreName":"Tiny Pizzas","Menu": [{"PizzaName":"Cheesey!", "Price":5.99},{"PizzaName":"Red!", "Price":6.99},{"PizzaName":"Spicy Oink!", "Price":8.99},{"PizzaName":"Oink!", "Price":6.99},{"PizzaName":"Fungi!", "Price":7.99},{"PizzaName":"Tangy!", "Price":6.99},{"PizzaName":"Spicy!", "Price":6.99},{"PizzaName":"Sweet!", "Price":8.99}]},{"StoreName":"Bad JuJu\'s Pizzas","Menu": [{"PizzaName":"Good", "Price":10.99},{"PizzaName":"Bad", "Price":12.99},{"PizzaName":"Ugly", "Price":14.99}]}]}' );
console.log(menu);