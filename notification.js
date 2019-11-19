// Request permission for notifications on page load
document.addEventListener('DOMContentLoaded', function() {
    window.onload = function() {
        inactivityTime();
    }

    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
});

var inactivityTime = function() {
    var time;
    window.onload = resetTimer;
    
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function notifyMe() {
        // If notification permission is granted and the user is inactive for a set of time, display notification
        if (Notification.permission == 'granted') {
            var notification = new Notification('Your session will expire soon', {
                icon: 'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/69359306_951537921861849_5887219867148353536_o.png?_nc_cat=101&_nc_oc=AQmL-NlCoMp9O7WD-L_tAqCa84B0lQt8L1GRKLBq3fwxzUxm0Y5IpHNfnS7K_Bvka7w&_nc_ht=scontent-syd2-1.xx&oh=53aea9ed90395d732eb30776038557d8&oe=5E612C72',
                body: 'Don\'t miss out on this amazing flight deal',
            });
            notification.onclick = function() {
                window.open('https://booking.auntbetty.com.au/#/checkout/passengers');
            };
        }
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(notifyMe, 5000);
    }
};