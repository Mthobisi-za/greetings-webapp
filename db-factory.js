
 module.exports = function dbLogic(pool){
    async function getData(res){
    var obj;
    var arg;
    var array;
    var names = new Promise((resolve, reject) =>{
        resolve(pool.query("selct * from connecttb"))
    })
    .then(value =>{
        console.log(value.rows);
        return value.rows
    }).catch(err =>{
        console.log(err)
    })
    return names
}
    /*
  pool
      .query("SELECT * FROM connecttb")
      .then(res => {
          try {
             arg = res.rows
          obj = {}
          array = []
          //var obj = {}
          var name = res.rows[res.rows.length -1]
          obj["userName"] = name.name;
          obj["userLang"] = name.language;
          //obj["count"] = name.count; */
          //----counter function 
          /*
          } catch (error) {
              obj['count'] = 0;
          }
            })
        .then(resp =>{
          
            })
        .catch(err => console.log(err));

        ///count data
        pool
        .query("SELECT DISTINCT name FROM connecttb")
        .then(resp => {
            try {
               obj["count"] = resp.rows.length 
            } catch (error) {
                obj["count"] = 0
            }
            
        }).then(response =>{
            res.render("index", {data : obj});
        })
        .catch(err => console.log(err)) */ 
        /*
    function setData(lang, name, count){
        var promise = new Promise((resolve, reject)=>{
            resolve(pool.query("INSERT INTO connecttb (name,language,count) VALUES($1, $2,$3)", [name,lang, count]))
        }) 
        .then()
        .catch(err => console.log(err))
 
    }
    function getGreeted(){
        var record
        var obj;
        function setData(res){
                pool
                    .query("SELECT DISTINCT name FROM connecttb")
                    .then(resp => {
                        record = []
                        obj = resp.rows.length;
                        resp.rows.forEach(ele =>{
                            record.push({name : ele.name});
                        })
                    }).then(response =>{
                        console.log(record)
                        res.render('greeted', {data: record})
                    })
                    .catch(err => console.log(err)) 
        }
       
        return{
            setData

        }

    } */
    return {getData}
}