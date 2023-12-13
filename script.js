document.body.style.overflowX = "hidden";

let homeHeader = document.getElementById("home-header");
let aboutHeader = document.getElementById("about-header");
let shopHeader = document.getElementById("shop-header");
let contactHeader = document.getElementById("contact-header");
let productHeader = document.getElementById("product-header");
let cartHeader = document.getElementById("cart-header");
let asset2 = document.getElementById("asset2");
let asset3 = document.getElementById("asset3");
let asset4 = document.getElementById("asset4");
let heroText = document.getElementById("tagline");
let asset5 = document.getElementById("asset5");
let asset6 = document.getElementById("asset6");
let heroBtn = document.getElementById("explore-btn");
let asset7 = document.getElementById("asset7");
let asset8 = document.getElementById("asset8");

window.addEventListener("scroll", () => {
  if (document.body.classList.contains("home-page")) {
    if (window.scrollY >= window.innerHeight * 1.45) {
      if (!homeHeader.classList.contains("filled")) {
        homeHeader.classList.add("filled");
      }
    } else {
      if (homeHeader.classList.contains("filled")) {
        homeHeader.classList.remove("filled");
      }
    }
  }

  if (document.body.classList.contains("about-page")) {
    if (window.scrollY >= window.innerHeight * 0.25) {
      if (!aboutHeader.classList.contains("filled")) {
        aboutHeader.classList.add("filled");
      }
    } else {
      if (aboutHeader.classList.contains("filled")) {
        aboutHeader.classList.remove("filled");
      }
    }
  }

  if (document.body.classList.contains("shop-page")) {
    if (window.scrollY >= window.innerHeight * 0.25) {
      if (!shopHeader.classList.contains("filled")) {
        shopHeader.classList.add("filled");
      }
    } else {
      if (shopHeader.classList.contains("filled")) {
        shopHeader.classList.remove("filled");
      }
    }
  }

  if (document.body.classList.contains("product-page")) {
    if (window.scrollY >= window.innerHeight * 0.15) {
      if (!productHeader.classList.contains("filled")) {
        productHeader.classList.add("filled");
      }
    } else {
      if (productHeader.classList.contains("filled")) {
        productHeader.classList.remove("filled");
      }
    }
  }

  if (document.body.classList.contains("cart-page")) {
    if (window.scrollY >= window.innerHeight * 0.25) {
      if (!cartHeader.classList.contains("filled")) {
        cartHeader.classList.add("filled");
      }
    } else {
      if (cartHeader.classList.contains("filled")) {
        cartHeader.classList.remove("filled");
      }
    }
  }

  if (document.body.classList.contains("contact-page")) {
    if (window.scrollY >= window.innerHeight * 0.2) {
      if (!contactHeader.classList.contains("filled")) {
        contactHeader.classList.add("filled");
      }
    } else {
      if (contactHeader.classList.contains("filled")) {
        contactHeader.classList.remove("filled");
      }
    }
  }

  if (document.body.classList.contains("home-page")) {
    let value = window.scrollY;
    let stopPositionVh = 150;
    let stopPosition = (stopPositionVh * window.innerHeight) / 100;
    if (value < stopPosition) {
      asset2.style.left = value * 0.25 + "px";
      asset3.style.left = value * -0.5 + "px";
      asset4.style.left = value * 0.6 + "px";
      heroText.style.marginTop = value * 1.1 + "px";
      asset5.style.marginTop = value * 0.2 + "px";
      asset6.style.marginTop = value * 0.4 + "px";
      asset6.style.left = value * -0.2 + "px";
      heroBtn.style.marginTop = value * 1.3 + "px";
      asset7.style.marginTop = value * 0.2 + "px";
      asset8.style.marginTop = value * 0.15 + "px";
    } else {
      asset2.style.left = stopPosition * 0.25 + "px";
      asset3.style.left = stopPosition * -0.5 + "px";
      asset4.style.left = stopPosition * 0.6 + "px";
      heroText.style.marginTop = stopPosition * 1.1 + "px";
      asset5.style.marginTop = stopPosition * 0.2 + "px";
      asset6.style.marginTop = stopPosition * 0.4 + "px";
      asset6.style.left = stopPosition * -0.2 + "px";
      heroBtn.style.marginTop = stopPosition * 1.3 + "px";
      asset7.style.marginTop = stopPosition * 0.2 + "px";
      asset8.style.marginTop = stopPosition * 0.15 + "px";
    }
  }
});
