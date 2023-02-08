

// function openInstagram() {
//     var counter=1
//     setTimeout(counterIncrease,3000)
    
//     function counterIncrease(){
//         counter=counter+1
//         openLink(counter)
//     }
    
// }
// function openLink(counter)
// {
//     if(counter==2)
//     {
       
        
//     } 
// }

var openInstagram  = (function() {
    
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            // do something
            setTimeout(openLink,5000)

            
        }
    };
})();


function toolTip(){
    document.getElementsByTagName("img").tooltip("")
}

function openLink() {
    open("https://www.instagram.com/varad_patil_19/")
    location.reload()

}