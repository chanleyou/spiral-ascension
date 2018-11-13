const spiral = (number, clockwise = true) => {

	let output = [];

	for (let i = 0; i < number; i++) {
		let row = [];
		for (let y = 0; y < number; y++) {
			let number = 'z';
			row.push(number);
		}

		output.push(row);
	}

	let x = 0;
	let y = 0;

	let n = 1;
	let direction = 'right';



	while (n <= number * number) {
		output[y][x] = n;
		n += 1;

		if (direction === 'right') {

			if (x + 1 < number) {
				if (output[y][x + 1] === 'z') {
					x += 1;
				} else {
					direction = 'down';
					y += 1;
				}
			} else {
				direction = 'down';
				y += 1;
			}

		} else if (direction === 'down') {

			if (y + 1 < number) {
				if (output[y + 1][x] === 'z') {
					y += 1;
				} else {
					direction = 'left';
					x -= 1;
				}
			} else {
				direction = 'left';
				x -= 1;
			}

		} else if (direction === 'left') {

			if (x - 1 >= 0) {
				if (output[y][x - 1] === 'z') {
					x -= 1;
				} else {
					direction = 'up';
					y -= 1;
				}
			} else {
				direction = 'up';
				y -= 1;
			}

		} else if (direction === 'up') {

			if (y - 1 >= 0) {
				if (output[y - 1][x] === 'z') {
					y -= 1;
				} else {
					direction = 'right';
					x += 1;
				}
			} else {
				direction = 'right';
				x += 1;
			}
		}
	}

	console.log(output);
}

spiral(process.argv[2]);