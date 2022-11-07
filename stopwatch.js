window.onload = function(){
    /*variables for controls*/
var b1 = document.getElementById("start");
var b11 = document.getElementById('start2')
var b2 = document.getElementById("stop");
var b3 = document.getElementById("reset");



/*variables for counter*/
var b4 = document.getElementById("milliseconds");
var b5 = document.getElementById("seconds");
var b6 = document.getElementById("minutes");
var b7 = document.getElementById("hours");
var colin = document.getElementById("collin");
var colin2 = document.getElementById("collin2");
var colin3 = document.getElementById("collin3");
var center = document.getElementById("center");
var pos = document.getElementById('position')
var add01 = document.getElementById('add0(1)');
var add02 = document.getElementById('add0(2)');
var add03 = document.getElementById('add0(3)');
var add04 = document.getElementById('add0(4)');


b4.innerHTML = ('00');
colin.innerHTML = ('.')
b5.innerHTML = ('00');
collin2.innerHTML = (":")
b6.innerHTML = ('00');
collin3.innerHTML = (":")
b7.innerHTML = ('00');
/*counter css*/
center.style.textAlign = 'center';
b4.style.fontSize = '65px';
b4.style.display = 'inline';
add01.style.display = 'inline';
add01.style.fontSize = '65px';
collin.style.fontSize = '65px';
collin.style.display = 'inline';
b5.style.fontSize = '65px';
b5.style.display = 'inline';
add02.style.display = 'inline';
add02.style.fontSize = '65px';
collin2.style.fontSize = '65px';
collin2.style.display = 'inline';
b6.style.fontSize = '65px';
b6.style.display = 'inline';
add03.style.display = 'inline';
add03.style.fontSize = '65px';
collin3.style.fontSize = '65px';
collin3.style.display = 'inline';
b7.style.fontSize = '65px';
b7.style.display = 'inline';
add04.style.display = 'inline';
add04.style.fontSize = '65px';




/*controls click events*/
b1.addEventListener("click",bb1);
/*b11.addEventListener('click', bb11)*/
b2.addEventListener("click",bb2);
b3.addEventListener("click",bb3);


/*necessary for stopping counter*/
var function_is_stopped = 0;
    
/*
i = milliseconds
b = seconds
c = minutes
h = hours
*/
var c = 0;
var b = 0;  
var i = 0;
var h = 0;




/* functions
bb1 = start
bb2 = stop
bb3 = reset 
bb11 = start (displays after stopping)
*/
function bb1(){
    
    b1.removeEventListener("click", bb1);
    b11.removeEventListener("click", bb11);


    setInterval(()  =>{/*millisecond */
        if (function_is_stopped == 1) {
            return;
        }
        i++
        b4.innerHTML =(i);
        
        if(i==60){
            i=0;
            
        }
    },10);

            setInterval(() => {/*seconds */
                if (function_is_stopped == 1) {
                    return;
                }
                b++
                b5.innerHTML = (b);
                if(b==60){
                    b=0;   
                }
                
            
            }, 1000);

            setInterval(() => {/*minutes */
                if (function_is_stopped == 1) {
                    return;
                }
                c++
                b6.innerHTML = (c);
                if(c==60){
                    c=0;
                }
            }, 60000);
            setInterval(() => {/*hours */
                if (function_is_stopped == 1) {
                    return;
                }
                h++
                b7.innerHTML = (h);
                if(h==99){
                    h=0;
                }
            }, 3600000 );

        
    

    
};
function bb2(){
    window.alert= ('known issue when hitting start the timer speeds up and stops after 3 ');
    function_is_stopped = 1;
b4.innerHTML = (i);
    
b5.innerHTML = (b);
b6.innerHTML = (c);
b7.innerHTML = (h);
b1.style.display = 'none';
b11.style.display = 'inline';
b11.addEventListener('click', bb11)





}
function bb3(){ /*reset timer */
location.reload()
}
function bb11(){
    function_is_stopped = 0;
    b11.addEventListener("click",bb1);
}

};