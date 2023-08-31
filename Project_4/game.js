let number;

const Generate_number = () => {
    let n1 = Math.random();

    let n2 = n1 * 100; //this is to generate a two digit number.

    n2 = Math.trunc(n2);  //this is to remove all value after decimal.

    n2 = (n2 % 10) + 1; //this will print number from 1 to 10 (+1)--> bec 0 will be included.

    number = n2;

    console.log(number);
}

// Generate_number();


const Generate_number_btn_click = () => {
    document.querySelector("#section1").style.display = "none";
    document.querySelector("#section2").style.display = "none";
    document.querySelector("#section3").style.display = "block";

    setTimeout(() => {
        Generate_number();
        document.querySelector("#field").value = " ";  //after calling this func again and again it will give blank space to fill value again.
        document.querySelector("#section1").style.display = "none";
        document.querySelector("#section2").style.display = "block";
        document.querySelector("#section3").style.display = "none";
    }, 3000);

};

//check number function 

const check_number = ()=>{
    let value = document.querySelector("#field").value;
    if (value == number) {
        alert("congrats, you won the game");
    }
    else{
        alert("OOps!! your Guess is wrong");
    }

    Generate_number_btn_click();
    
}