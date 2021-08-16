module.exports = function businessLogic() {
  var records = [];
  var all = []
  var userName;
  var userLang;
  var count = 0;
  let message;
  //updated user values

  function setUserNameAndLang(data) {
    var statement = "Group" in data;
        function userFix() {
                var num = records.indexOf(data.name); 
                if(num == -1){
                    count = count + 1;
                    userName = data.name;
                    all.push(userName)
                    records.push(userName)
                }  else{
                    userName = data.name;
                    all.push(userName)
              }
        }  
        function langFix(){
                if (data.Group === "English") {
                return userLang = "Hello";
                }  else if (data.Group === "Isizulu") {
                return userLang = "Sawbona";
                } else if (data.Group === 'Sesotho') {
                return userLang = "Dumela";
                }else {
                return ""
                }
        }
        
        var hasNum = /\d/;
        
       if(data.name == "" || data.name.startsWith(" ")){
        message = "Please enter your name"
       } else if(hasNum.test(data.name)){
          message = "Please enter name that does not have numbers" 
       }else{
        if(statement){
          userFix();
          langFix();
          message = ""
        }else {
          if(message !== undefined|| message == "Please enter name that does not have numbers" || message =="Please enter your name"){
            message = message + " and select language"
          }else{
            message = "Please select language"
          }
          
        }
       }
  }

  function getData() {
    return {
      userLang,
      userName,
      count,
      
    };
  }
  function getErrors(){
    return{
      message
    }
  }
  function getGreeted(){
  var correct = [];
    for(let i = 0; i < records.length; i++){
      correct.push({name: records[i]})
    }
    return correct
  }
  function getNames(name){
    var correct = [];
    for(let i = 0; i < all.length; i++){
      if(all[i] == name){
        correct.push(all[i])
      } else{

      }
    } var num = correct.length;
    return {correct, num, name}
  }
  return {
    setUserNameAndLang,
    getData,
    getGreeted,
    getNames,
    getErrors
  };
};
