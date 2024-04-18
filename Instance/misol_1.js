
function range(){

    for (let year = 2000; year <= 2050; year++) {

        let jan1st = new Date(year, 0, 1);
        let dayOfWeek = jan1st.getDay();

        if (dayOfWeek === 6) {
            console.log(year);
        }
    }
}

range()


