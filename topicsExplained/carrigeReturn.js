/**
 * ? Carriage Returns means ---> moving the cursor back to the start of the same line
 * ? Hello
 * ? ^ (cursor goes back to start)
 * ? World  → overwrites "Hello"
 * ? when we do carriage return the cursor came to the front and overwrites the previous
 * ? typewritter
 */
console.log("makeer\rWorld");
console.log("Hellow\fWorld");

/**
 * ? Form feed ---> means move to a new page historically used in printers
 * ? Mostly invisible, printer
 */
