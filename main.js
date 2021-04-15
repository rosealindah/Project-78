var images=["family_book_front.png","cartoon_papa.png","mumma.png" ,"me.png" ,"shrey.png"]
var names=["family_book","dad","mom", "me", "shrey"]
var i=0
function change_image(){
    i++;
if(i>5){i=0}
document.getElementById("image1").src=images[i];
document.getElementById("head1").innerHTML=names[i];
};
