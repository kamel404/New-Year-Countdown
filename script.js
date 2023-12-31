
    var targetDate = new Date('Jan 1, 2024 00:00:00').getTime();

    function newYear(){
        var current = new Date().getTime();
        differrence = targetDate - current;

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(differrence / (day));
        var h = Math.floor(differrence % (day)) / (hour);
        var m = Math.floor(differrence % (hour)) / (minute);
        var s = Math.floor(differrence % (minute)) / (second);

        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = Math.floor(h);
        document.getElementById('minute').innerText = Math.floor(m);
        document.getElementById('second').innerText = Math.floor(s);
    }

    setInterval(function () {
        newYear();
    }, 1000)