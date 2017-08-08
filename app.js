// function rond(a) {
    //      return a.html('<img src="circle.jpg" alt="rond">')
    // };

$("#myModal").modal("show");

    $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})


    var star = ($(this).html('<img src="star.png" alt="star">'));
    // var caseVide = 0;
    var count = 0;
    // console.log("hi");
    
    
    $(".case").click(function() {
        
        
        
        if ($(this).html() === "") {
            if (count%2 === 0) {
                //  rond($(this));
                //  console.log(rond);
                ($(this).html("<img src='circle.jpg' alt='rond'>"));
            } else {
                
                ($(this).html('<img src="star.png" alt="star">'));
            }
            count++;
        }
    });
    



var combiWin = {
    11 : [[11, 12, 13], [11, 21, 31], [11, 22, 33]],
    12 : [[11, 12, 13], [12, 22, 32]],
    13 : [[13, 22, 31], [13, 23, 33], [11, 12, 13]],
    21 : [[11, 21, 31], [21, 22, 23]],
    22 : [[11, 22, 33], [12, 22, 32], [13, 22, 31], [21, 22, 23]],
    23 : [[21, 22, 23], [13, 23, 33]],
    31 : [[13, 22, 31], [31, 32, 33], [11, 21, 31]],
    32 : [[31, 32, 33], [12, 22, 32]],
    33 : [[11,22,33], [13, 23, 33], [31, 32, 33]]
}

var joueur1 = ($("#Username").add("#joueur1").val());
var joueur2 = 2;
var currentId = this.id; //<-----pareil que var currentId = ($(this).attr("id"));
var partieGagnante = combiWin = [currentId];


function addPlayer()
{
    $("#Username1").text("#joueur1"); 
}

function testGagnant() {
if (condition) 
    {
   console.log("hi");
    
}


//dès que je trouve une combiWin :
return true;

}




    $("#vider").click(function() {
        $(".case").empty();
        count = 0;
    });







    
    
    // $(".case").click(function(){
        //     console.log("hi");
        //     count++;
        
        //     if ($(this).html() === ""){
            //         if(count%2 === 0){
                //             console.log(this);
                //         // position = ($(this).data('position'));
                //         // data.push(position);
                //             ($(this).html("<img class='image img-responsive' width='150' height='100' src='circle.jpg'/>"));
                
                //     } else  {
                    
                    //             ($(this).html("<img class='image img-responsive' width='150' height='100' src='star.png'/>"));
                    
                    //         }
                    //     }
                    
                    // });
                    
                    
                    
                    
                    
                    // var src = ($('#img').attr('src') === 'circle.jpg') ? 'star.png' : 'circle.jpg';
                    // $('#img').attr('src', src);
                    // // $(this).html("src");
                    
                    
                    