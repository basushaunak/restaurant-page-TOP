import cornet01 from "../assets/images/cornet01.jpg";
import cornet02 from "../assets/images/cornet02.jpg";
import cornet03 from "../assets/images/cornet03.jpg";
import cupcak01 from "../assets/images/cupcak01.jpg";
import cupcak02 from "../assets/images/cupcak02.jpg";
import custrd01 from "../assets/images/custrd01.jpg";
import custrd02 from "../assets/images/custrd02.jpg";
import fritas01 from "../assets/images/fritas01.jpg";
import sndwzb01 from "../assets/images/sndwzb01.jpg";
import pcmbbs01 from "../assets/images/pcmbbs01.jpg";
import salasa01 from "../assets/images/salasa01.jpg";
import lambap01 from "../assets/images/lambap01.jpg";
import lambst01 from "../assets/images/lambst01.jpg";
import panzpc01 from "../assets/images/panzpc01.jpg";
import pastac01 from "../assets/images/pastac01.jpg";
import pastcc01 from "../assets/images/pastcc01.jpg";
import bsmric01 from "../assets/images/bsmric01.jpg";

export function makeMenu(){
    let content = document.querySelector("#content");
    let str = ``;
    str = `<h1><span id="brand-name"><em>fun</em></span>KEY Restaurant</h1><h2>Our <em>mouth-watering<em> Menu</h2>`
    content.innerHTML = str;   

    content.innerHTML += `<h2 class="menu-heading">Desserts</h2><div class="menu-grid" id="dessert-menu-grid"></div>`;
    let obj = document.querySelector("#dessert-menu-grid");
    populateGrid(getDesserts,obj);

    content.innerHTML += `<h2 class="menu-heading">Brunch</h2><div class="menu-grid" id="brunch-menu-grid"></div>`;
    obj = document.querySelector("#brunch-menu-grid");
    populateGrid(getBrunches,obj);

    content.innerHTML += `<h2 class="menu-heading">Main Course</h2><div class="menu-grid" id="maincourse-menu-grid"></div>`;
    obj = document.querySelector("#maincourse-menu-grid");
    populateGrid(getMainCourses,obj);

    document.querySelector("#btn-home").disabled = false;
    document.querySelector("#btn-menu").disabled = true;
    document.querySelector("#btn-contact-us").disabled = false;
}

function getMainCourses(){
 	let menu=[];
    menu.push(["Basmati Rice Plain", "bsmric01", "A plate of cooked Basmati Rice", 45, 200, "100g"]);
    menu.push(["Salmon avocado and asparagus salad", "salasa01","A bowl with salad",90, 25,"125g"]);
	menu.push(["Kimchi fritters with avocado salsa", "fritas01", "Kimchi fritters with avocado salsa", 90, 55,"100g"]);
    menu.push(["Marinated pork chops with panzanella", "panzpc01", "Marinated pork chops with panzanella", 290, 155,"100g"]);
    menu.push(["Best slow cooker lamb stew", "lambst01", "Lamb stew", 490, 150,"200g"]);
    menu.push(["Lamb shank and apple tagine", "lambap01", "Lamb shank and apple tagine", 130, 250,"80g"]);
    return menu;
}

function getBrunches(){
 	let menu=[];
    menu.push(["Creamy French onion chicken pasta bake", "pastac01", "A bowl of pasta", 270, 58,"100g"]);
    menu.push(["Zebra Sandwitch", "sndwzb01", "A sanwitch", 25, 38,"70g"]);
    menu.push(["Jerk pork chops with mango and black bean salad", "pcmbbs01", "Jerk pork chops with salad", 190, 55,"170g"]);
    menu.push(["5 Ingredient creamy chicken pasta", "pastcc01","Cooked pasta in a bowl", 490, 105,"100g"]);
    return menu;
}

function getDesserts(){
 	let menu=[];
 	menu.push(["Fruit Custard", "custrd01", "Fruit Custard", 120, 185,"100g"]);
    menu.push(["Custard","custrd02", "Custard", 90, 145,"100g"]);
 	menu.push(["Chocolate Cornetto", "cornet01","Chocolate Cornetto", 50, 245,"100g"]);
    menu.push(["Butterscotch Cornetto", "cornet02", "Butterscotch Cornetto", 50, 225,"100g"]);
    menu.push(["Vanila Cornetto", "cornet03","Vanila Cornetto", 50, 225,"100g"]);
    menu.push(["Moist Vanilla Cupcake", "cupcak01","Moist Vanilla Cupcake", 50, 35,"50g"]);
    menu.push(["Super Moist Chocolate Cupcake", "cupcak02", "Super Moist Chocolate Cupcake", 50, 40,"50g"]);
    return menu;
}

function assignSource(element,value){
    switch(value){
        case "custrd01":
            element.src = custrd01;
            break;
        case "custrd02":
            element.src = custrd02;
            break;
        case "cornet01":
            element.src = cornet01;
            break;
        case "cornet02":
            element.src = cornet02;
            break;
        case "cornet03":
            element.src = cornet03;
            break;
        case "cupcak01":
            element.src = cupcak01;
            break;
        case "cupcak02":
            element.src = cupcak02;
            break;
        case "pastac01":
            element.src = pastac01;
            break;
        case "sndwzb01":
            element.src = sndwzb01;
            break;
        case "pcmbbs01":
            element.src = pcmbbs01;
            break;
        case "pastcc01":
            element.src = pastcc01;
            break;
        case "bsmric01":
            element.src = bsmric01;
            break;
        case "salasa01":
            element.src = salasa01;
            break;
        case "fritas01":
            element.src = fritas01;
            break;
        case "panzpc01":
            element.src = panzpc01;
            break;
        case "lambst01":
            element.src = lambst01;
            break;
        case "lambap01":
            element.src = lambap01;
            break;
    }
}

function populateGrid(mealType,obj){
    let imgElement;
    let array = mealType();
    let str;
    for(let i=0;i<array.length;i++){
        str=`<img id="${array[i][1]}" class="item-image" alt="${array[i][2]}">`;
        str += `<div>
                    <p class="item-title">${array[i][0]}</p>
                    <p>Price: ${array[i][3]}<p>
                    <p>Calories: ${array[i][4]} per ${array[i][5]}<p>
                </div>`
        obj.innerHTML += str;
        imgElement = document.getElementById(array[i][1]);
        assignSource(imgElement,array[i][1]);
    }
}