
//Bai 1
function bai1(){
    let input = prompt('Nhập chuỗi 5 số nguyên')
    console.log(input);
    let arr = input.split('')
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]===arr[j]) {
                delete arr[j]
                delete arr[i]
            }
        }
    }
    console.log(arr);
    let maxNumber = 0
    let newArr = arr.filter(item=>{
        if (maxNumber>item) {
            return maxNumber
        }else{
            maxNumber = item
        }
    })
    console.log(maxNumber);
}

//Bai 2
// function bai2(){
//     let input = prompt('Nhập chuỗi 5 số nguyên')
//     console.log(input);
//     let arr = input.split('')
//     console.log(arr)
//     let total = 0
//     let newArr = arr.filter(item=>{
//         if (item%item==0 && item%1==0 && item != 1) {
//             return item
//         }
//     })
//     console.log(newArr);
// }
//Bai 3


//Bai 4
function bai4(){
    let input = prompt('Nhập chuỗi')
    // console.log(input);
    let arr = input.split('')
    // console.log(arr)
    let newArr = arr.filter(item=>{
        return isNaN(item)
    })
    let str = newArr.join('')
    console.log(str);
}
//Bai 5
function bai5(){
    let input = prompt('Nhập chuỗi')
    // console.log(input);
    let arr = input.split(' ')
    console.log(arr)
    let outPut = ''
    arr.forEach(item=>{
        let a =item.split('')
        a.reverse()
        let b = a.join('')
        console.log(b);
        outPut += b + " "
    })
    console.log(outPut);
}