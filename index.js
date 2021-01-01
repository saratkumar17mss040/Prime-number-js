const [name, dob] = document.querySelectorAll('input[type="text"]');
const checkBtn = document.querySelector('button');
const output = document.querySelector('p');
const loader = document.querySelector('i');
checkBtn.addEventListener('click', checkPrime);

function checkPrime() {
	const dobNumber = Number(dob.value.replace('/', ''));
	setTimeout(() => loader.classList.add('fa', 'fa-circle-o-notch', 'fa-spin'));
	setTimeout(() => {
		if (name.value.length === 0) {
			output.innerText = 'Please enter your name !';
			output.style.color = 'rgb(255, 101, 132)';
		} else if (
			dob.value[2] !== '/' ||
			isNaN(dobNumber) ||
			dobNumber <= 0 ||
			dobNumber === 1
		) {
			output.innerText = 'Please enter the correct format !';
			output.style.color = 'rgb(255, 101, 132)';
		} else {
			output.classList.remove('output-load');
			const dobString = dobNumber.toString();
			console.log(dobString);
			let isPrime = true;
			let date = undefined;
			let month = undefined;
			// 1 will be jan then 2 will be feb and so on
			const monthDays = {
				1: 31,
				2: 29,
				3: 31,
				4: 30,
				5: 31,
				6: 30,
				7: 31,
				8: 31,
				9: 30,
				10: 31,
				11: 30,
				12: 31,
			};

			if (dobString.length === 3) {
				date = parseInt(dobString[0]);
				month = parseInt(dobString.slice(1));
			} else if (dobString.length === 4) {
				date = parseInt(dobString.slice(0, 2));
				month = parseInt(dobString.slice(2, 4));
			}

			if (date === 1) {
				output.innerText = `${name.value} your birthday ${date} is neither prime nor composite number !`;
				output.style.color = 'rgb(255, 101, 132)';
			} else if (monthDays[month] >= date) {
				for (let i = 2; i < date; i++) {
					if (date % i === 0 && name.value) {
						isPrime = false;
						break;
					}
				}
				if (isPrime) {
					output.innerText = `${name.value} your birthday ${date} is a prime number !`;
					output.style.color = 'rgb(108, 99, 255)';
				} else {
					output.innerText = `${name.value} your birthday ${date} is not a prime number !`;
					output.style.color = 'rgb(255, 101, 132)';
				}
			} else {
				output.innerText =
					'Please enter a valid day or month or make sure the format is correct !';
				output.style.color = 'rgb(255, 101, 132)';
			}
		}
		output.style.fontWeight = 'bold';
	}, 200);
	setTimeout(
		() => loader.classList.remove('fa', 'fa-circle-o-notch', 'fa-spin'),
		350
	);
}
