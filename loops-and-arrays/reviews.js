var reviews = [4, 2, 5, 5.9, 1];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("Average of reviews  is " + total / reviews.length);
