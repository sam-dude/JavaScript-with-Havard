function doSomethingAsync(callback) {
	setTimeout( function() {callback(1)}, 1000)
}

doSomethingAsync(console.log)
console.log("hello world!")
