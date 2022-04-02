let money = 106.800;
let total = 104.200;
console.log("sizda", (money) * 1000, "so'm pul bor");
if (total + 5 < money) {

    if (total / 1000 >= 0) {
        console.log("Yo'l haqi =", Math.round(total) * 1000, "so'm");
    }
} else {
    console.log("cho'ntagingizda doim kamida 5.000 so'm ortiqcha yursin");
}
if (money < total) {
    console.log("pulingiz yetmayapti");
} else {
    console.log("sizda", money * 1000 - Math.round(total) * 1000, "so'm pul qoldi")
}