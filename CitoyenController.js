// CitoyenController.js
// Import citoyen model
Citoyen = require('./CitoyenModel');

// Handle view contact info
exports.view = function (req, res) {
    
    Citoyen.find({cin: req.params.cin}, function (err, citoyen) {
        if (err)
            res.send(err);
        console.log(citoyen.length);
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        if(citoyen.length > 0)
        {
            res.json({
                code: true,
                data: citoyen
            });

            
        }else{
            res.json({
                code: false,
                message: "numero de carte inexistant"
            });
        }

       
    });
};

exports.setup = function (req, res) {
    
    Citoyen.insertMany([
        {
            cin: 98765421,
            name: 'frioui islem',
            genre: 'male',
            infos: [
                {
                    recherche: 'à arreter',
                    ajust: false,
                    cause: 'pension',
                    date: '2021-12-23'
                },
                {
                    recherche: 'à arreter',
                    ajust: true,
                    cause: 'vol',
                    date: '2017-10-11'
                }
            ],
        },
        {
            cin: 12356987,
            name: 'bourigua yosra',
            genre: 'femelle',
            infos: [
            ],
        },
        {
            cin: 12345678,
            name: 'bedhief youssef',
            genre: 'male',
            infos: [
                {
                    recherche: 'à arreter',
                    ajust: false,
                    cause: 'bagarre',
                    date: '2018-11-05'
                }
            ],
        },
        {
            cin: 11111111,
            name: 'haji yassine',
            genre: 'femelle',
            infos: [
                {
                    recherche: 'à arreter',
                    ajust: true,
                    cause: 'bagarre',
                    date: '2018-11-05'
                }
            ],
        }
    ]).then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });        

       
    };

