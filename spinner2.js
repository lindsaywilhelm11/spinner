const spinner = () => {
    let start = 100;
    let spin = ['\r|   ', '\r/   ', '\r\\   ', '\r|   ']
    for (let position of spin) {
        setTimeout(() => {
            process.stdout.write(position);
        }, start)
        start += 200;
    }
}

spinner();

// setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 100);
  
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300);
  
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 500);
  
//   setTimeout(() => {
//     process.stdout.write('\r\\   '); 
//   }, 700);

//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 900);
  
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 1100);
  
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 1300);
  
//   setTimeout(() => {
//     process.stdout.write('\r\\   '); 
//   }, 1500);

//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 1700);