'use strict'
//1)მოცემულია სტრინგი: let info= ‘Good day”, 
// ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუელებით.
let info= 'Good day'
let newInfo = info.slice(5,8)
console.log(newInfo);

//2)დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს
let something = (a)=>a.length
let doSomething = something('what a wonderful world')
console.log(doSomething);
 

// 3)Prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? 
// სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში. 
// როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. 
// თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.
// let capitalOfGeorgia = prompt("What is a capital of Georgia?")
// let corectAnswer = "tbilisi";
// let lowercasAnswer = capitalOfGeorgia.toLowerCase();
// if (lowercasAnswer == corectAnswer) {
  // console.log("სწორია");
// } else {
  // console.log("არასწორია");
// }

//4)მოცემულია: let link = “https://google.com”. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ indexof მეთოდის საშუალებით 
// არის თუ არა ამ ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს.

let link = 'https://google.com'
function link2(elements) {
  let link3 = elements.indexOf('https://')
  if (link3==-1) {
    console.log('არა არ მოიცავს');
  }else{
    console.log('კი მოიცავს');
  }
}
link2(link)

//5)მოცემულია მასივი,  let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  
// splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მავივრად ჩასვით “strawberry”. 
let fruits = ['apple', 'mango', 'avocado','kiwi'] 
fruits.splice(fruits.length-2,1,'strawberry')
console.log(fruits);

//6)შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
// მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
// მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენ
let plasMines = [5,25,89,120,36] 
plasMines.push('javascript','python')
plasMines.unshift('html','css')
console.log(plasMines.length);
plasMines.shift()
plasMines.pop()

//7)შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;
//გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;
let fruit = ['ფორთოხალი','ბანანი', 'მსხალი' ]
console.log(fruit);
fruit.push('ვაშლი','ანანასი')
console.log(fruit);
fruit.unshift('საზამთრო')
console.log(fruit);
fruit.splice(3,0,'მანგო')
fruit.shift(); fruit.pop()
console.log(fruit);

//8)მოცემულია მასივი let array =[1, 2, 3, 4, 5]. Splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].
let array =[1, 2, 3, 4, 5]
array.splice(3,0,'a,b,c')
console.log(array);

// 9)მოცემულია მასივი:
// let arr = [1, 2, 3, 4, 5];
// Foreach საშუალებით გამოთვალეთ რიცხვების ჯამი
let array2 = [1, 2, 3, 4, 5]
let sum2=0
array2.forEach(element2 => {sum2+=element2});
console.log(sum2);

// 10)მოცემულია მასივი: Let  array = [12, 24, 3, 6, 9, 15, 18, 27];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;
let division = [12, 24, 3, 6, 9, 15, 18, 27].map((x)=>x/3)
console.log(division);

// 11)მოცემულია მასივი:let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let languagesNew = languages.filter((x)=>x.length>3) 
console.log(languagesNew);

// 12)Მოცემულია მასივი: let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let wordsNew = words.filter((ab)=>ab.includes('m')||ab.includes('M'))
console.log(wordsNew);

// 13)შეამოწმეთ მოცელუმ მასივში let arr = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით.
let arr = [-1, -2, -3, 4]
let statment = (numbb)=>numbb>0
let result = arr.some(statment)
console.log(result);

//15)მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. 
// ( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ ეს სტრინგი გადაიყავნოთ რიცხვში)
// let number="12345"
let transformNumber="12345".split("")
console.log(transformNumber);
let numResult = transformNumber.map(Number)
let sum = 0
for (let element of numResult) {
    sum = element + sum;
}
console.log(sum);

//16)მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array1 =[“hello1”, 14,24, “hello2”] გამოიტანეთ მარტო ციფრები;

let newArray = ['hello1', 14,24, 'hello2'].filter((numbers)=>typeof numbers=='number')
console.log(newArray);

//17)მოცემულია მასიცი:let array2 = [14, 150, 'css', null, 'javascript', 25];
// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: 
// თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. 
// თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. 
// სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

 let numbArray=[14, 150, 'css', 'javascript', 25].map(items=>
    {if (typeof items == 'number'){
    return items*items
  } else if(typeof items=='string'){
    return items.toUpperCase()
  } return items
}) 
console.log(numbArray);