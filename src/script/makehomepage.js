import heroImage from "../assets/images/restaurant.jpg";

export function makeHomePage(){
    let content = document.querySelector("#content");
    let str = ``;
    str = `<h1><span id="brand-name"><em>fun</em></span>KEY Restaurant</h1><div id="hero-img-div"><img src="#" alt="Inside of empty restaurant" id="hero-img"></div>`
    content.innerHTML = str;
    // let obj = document.createElement("div");
    // obj.id = "hero-img-div";
    // content.appendChild(obj);
    let tmpObj = document.querySelector("#hero-img");
    tmpObj.src = heroImage;
    content.innerHTML += `<p><span class="first-char">L</span>orem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, architecto assumenda possimus rem doloribus impedit vel mollitia, optio natus sint quibusdam ipsa illo officia facilis, inventore odio ipsum rerum repudiandae!
            Iure, earum? Quod reiciendis amet beatae dolore, eum adipisci esse dolor repudiandae explicabo minus corporis quibusdam eaque illo, dolores magni maxime nesciunt distinctio necessitatibus porro suscipit qui. Minima, assumenda modi.
            Optio numquam iure inventore iste excepturi nemo possimus ea ut, aut, recusandae harum illo et suscipit quae laborum, animi aliquid laboriosam eveniet vitae? Doloremque ea neque veniam? Nisi, atque cupiditate?
            At quam labore alias assumenda, ab tempore deleniti molestiae quibusdam dolorem omnis voluptatem ratione accusantium? Iure iste nesciunt numquam sapiente animi labore provident ipsa, unde possimus eos, similique cumque atque?</p>
            <p><span class="first-char">R</span>eprehenderit, architecto assumenda possimus rem doloribus impedit vel mollitia, optio natus sint quibusdam ipsa illo officia facilis, inventore odio ipsum rerum repudiandae!
            Iure, earum? Quod reiciendis amet beatae dolore, eum adipisci esse dolor repudiandae explicabo minus corporis quibusdam eaque illo, dolores magni maxime nesciunt distinctio necessitatibus porro suscipit qui. Minima, assumenda modi.
            Optio numquam iure inventore iste excepturi nemo possimus ea ut, aut, recusandae harum illo et suscipit quae laborum, animi aliquid laboriosam eveniet vitae? Doloremque ea neque veniam? Nisi, atque cupiditate?
            At quam labore alias assumenda, ab tempore deleniti molestiae quibusdam dolorem omnis voluptatem ratione accusantium? Iure iste nesciunt numquam sapiente animi labore provident ipsa, unde possimus eos, similique cumque atque?</p>
            <p><span class="first-char">O</span>fficia facilis, inventore odio ipsum rerum repudiandae!
            Iure, earum? Quod reiciendis amet beatae dolore, eum adipisci esse dolor repudiandae explicabo minus corporis quibusdam eaque illo, dolores magni maxime nesciunt distinctio necessitatibus porro suscipit qui. Minima, assumenda modi.
            Optio numquam iure inventore iste excepturi nemo possimus ea ut, aut, recusandae harum illo et suscipit quae laborum, animi aliquid laboriosam eveniet vitae? Doloremque ea neque veniam? Nisi, atque cupiditate?
            At quam labore alias assumenda, ab tempore deleniti molestiae quibusdam dolorem omnis voluptatem ratione accusantium? Iure iste nesciunt numquam sapiente animi labore provident ipsa, unde possimus eos, similique cumque atque?</p>`
    // image.src = heroImage;
    // tmpObj.addChild(obj);
    document.querySelector("#btn-home").disabled = true;
    document.querySelector("#btn-menu").disabled = false;
    document.querySelector("#btn-contact-us").disabled = false;

}