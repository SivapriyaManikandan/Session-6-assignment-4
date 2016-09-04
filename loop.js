var emparray =[5] 
emparray[0] = {       "name" : "Sivapriya",
        "age" : 28,
            "salary" : 18800,
                "address" : {
                    "city" : "Coimbatore","State" : "Tamilnadu","Pin" : 600158
                        
                            
                },
                }; 
     emparray[1] = {
    "name" : "Manikandan",
        "age" : 33,
            "salary" : 135800,
                "address" : {
                    "city" : "Bangalore","State" : "Karnataka","Pin" : 560048
                                    
                },
                }; 
emparray[2] = {
    "name" : "Madhav",
        "age" : 22,
            "salary" : 70000,
                "address" : {
                    "city" : "Bangalore","State" : "Karnataka","Pin" : 560048
                                    
                },
                }; 
emparray[3] = {
    "name" : "Swathi",
        "age" : 25,
            "salary" : 100000,
                "address" : {
                    "city" : "Chennai","State" : "Tamilnadu","Pin" : 600103
                                    
                },
                };
emparray[4] = {
    "name" : "Balaji",
        "age" : 24,
            "salary" : 75000,
                "address" : {
                    "city" : "Trivandram","State" : "Kerala","Pin" : 620018
                                    
                },
                }; 
alert("for in loop");
for (var key in emparray){
    console.log(emparray[key]);
}