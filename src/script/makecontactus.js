import ownerImg from "../assets/images/ownerimg.jpg";
import managerImg from "../assets/images/managerimg.jpg";
import flrInchImg from "../assets/images/flrinchimg.png";
import ceoImg from "../assets/images/ceoimg.jpg";



export function makeContactUs(){
    let content = document.querySelector("#content");
    let str = ``;
    str = `<h1><span id="brand-name"><em>fun</em></span>KEY Restaurant</h1><h2><em>Contact US!</em></h2>`
    content.innerHTML = str;

    str = `<div class="card" id="owner-card">
            <img class="avatar-image" id="owner-img">
            <div>
                <p><strong>Owner Name</strong></p>
                <p>email id: owner@null.void.com</p>
                <p>Phone: 555-555-5555</p>
            </div>
        </div>
        <div class="card" id="manager-card">
            <img class="avatar-image" id="manager-img">
            <div>
                <p><strong>Manager Name</strong></p>
                <p>email id: manager@null.void.com</p>
                <p>Phone: 555-555-5554</p>
            </div>
        </div>
        <div class="card" id="floor-incharge-card">
            <img class="avatar-image" id="flrinch-img">
            <div>
                <p><strong>Floor In-charge</strong></p>
                <p>email id: flr-incharge@null.void.com</p>
                <p>Phone: 555-555-5553</p>
            </div>
        </div>
        <div class="card" id="ceo-card">
            <img class="avatar-image" id="ceo-img">
            <div>
                <p><strong>Chief Eexec Off.</strong></p>
                <p>email id: ceo@null.void.com</p>
                <p>Phone: 555-555-5552</p>
            </div>
        </div>`

    content.innerHTML += str;

    document.querySelector("#owner-img").src = ownerImg;
    document.querySelector("#manager-img").src = managerImg;
    document.querySelector("#flrinch-img").src = flrInchImg;
    document.querySelector("#ceo-img").src = ceoImg;

    document.querySelector("#btn-home").disabled = false;
    document.querySelector("#btn-menu").disabled = false;
    document.querySelector("#btn-contact-us").disabled = true;
}