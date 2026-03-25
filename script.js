function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function toggleMenu() {
  document.getElementById("navLinks")?.classList.toggle("active");
}

// Reviews system
const form = document.getElementById("reviewForm");
const list = document.getElementById("reviewsList");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    const data = {
      name: name.value,
      review: review.value,
      rating: rating.value
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(data);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    displayReviews();
    form.reset();
  });
}

function displayReviews(){
  if(!list) return;

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  list.innerHTML = "";

  reviews.forEach(r=>{
    list.innerHTML += `<p><strong>${r.name}</strong> (${r.rating}★)<br>${r.review}</p>`;
  });
}

displayReviews();
