function map(arr, func) {
	const newArr = []
	
	arr.forEach( function (val) {
		newArr.push(func(val))
	})

	return newArr
}

function addOne(num) {return  num + 1}

const x = [0,1,2,3]

console.log(map(x, addOne))
