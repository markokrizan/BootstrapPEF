
//json hosted on myjson.com
//http://myjson.com/150yfb
//https://api.myjson.com/bins/150yfb

var prosecnaOcena = 0.0;
var ime = '';
var prezime = '';   
    
    
function posaljiZahtev(){  
        console.log("pritisnuto dugme");
        var brInd = $('#brojIndeksaInput').val().trim();
        console.log(brInd);     
        if(brInd != ""){
            
            $.ajax({
                type: 'GET',
                url : 'https://api.myjson.com/bins/150yfb',
                dataType: 'json',
                success: function(response){
                    console.log("usao u ajax");
                    console.log(response);
                    for(var i = 0; response.length; i++){
                        //console.log(response[i].br_ind);
                        
                        if (brInd == response[i].br_ind){
                            var rbr = i;
                            //console.log(rbr);
                            //console.log(response[rbr].grade);
                            prosecnaOcena = response[rbr].grade;
                            ime = response[rbr].first_name;
                            prezime = response[rbr].last_name;
                            console.log(prosecnaOcena);
                            //alert(prosecnaOcena);
                            console.log(ime);
                            console.log(prezime);
                            document.getElementById("rezultatPretrage").innerHTML = "Просечна оцена " + prezime + " " + ime + " је " + prosecnaOcena + ".";
                           
                        }
                        
                        
                    }
                    
                    
            }
                
                
            });
            
        }
        
}    
    
    













