const hour = new Date().getHours();

let greeting;

if(hour < 12){
    greeting = "Good Morning";
}
else if(hour < 17){
    greeting = "Good Afternoon";
}
else{
    greeting = "Good Evening";
}

document.getElementById("greeting").textContent = `${greeting}, Owner 👋`;

const today = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
document.getElementById("date").textContent =
today.toLocaleDateString("en-IN", options);

const ctx =
document.getElementById("revenueChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun"
        ],

        datasets: [{
            label: "Revenue",

            data: [
                285000,
                312000,
                298000,
                341000,
                367000,
                384500
            ],
            backgroundColor:"#C9A84C",
            borderRadius:8
        }]
    }
});