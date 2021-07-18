window.onload = () =>
	
	{
	
		document.querySelector('#calculate').onclick = calculateTip;
	}

function calculateTip() {
	
	let amount = document.querySelector('#amount').value;
	let persons = document.querySelector('#persons').value;
	let service = document.querySelector('#services').value;

	console.log(service);
	
    if (amount === "" || amount <= 0 ){

		alert("Please enter amount");
        return;
      }

    if (persons === "" || persons <= 0){
        alert("Please enter number of guests");
        return;
    }  

	let total = (amount * service) / persons;
	total = total.toFixed(2);

	if (persons > '1'){
		document.querySelector('#single').innerHTML = 'Each Tip' ;
	}
	document.querySelector('#total').innerHTML = '$' + total;
}
