const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();


// <% layout('/layouts/boilerplate') -%>

//     <h3>All Listings</h3>
//     <!-- <form method="GET" action="/listings/new">
//         <button>Create New Listing</button>
//     </form> -->
// <%for(let listing of allListings) { %>
//     <div class="card" style="width: 18rem;">
//   <img src="<%= listing.image.url %>" class="card-img-top" alt="listing_image">
//   <div class="card-body">
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//   </div>
// </div>
// <% } %>

//     <ul>
//         <% for(let listing of allListings) { %>
//             <li>
//                 <a href="/listings/<%= listing._id %>">
//                 <%= listing.title %>
//             </a>
//             </li>
//         <% } %>
//     </ul>



// <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
// <% for(let listing of allListings) { %>

//     <a href="/listings/<%= listing._id %>" class="listing-link">

//   <div class="card col">
//     <img src="<%= listing.image.url %>" class="card-img-top" alt="listing_image" style="height: 20rem">
//     <div class="card-img-overlay"></div>
//     <div class="card-body">
//       <p class="card-text">
//         <b><%= listing.title %></b> <br>
//         &#8377; <%= listing.price.toLocaleString("en-IN")%>
//     </p>
//     </div>
//   </div>
//   </a>
// <% } %>
// </div>


