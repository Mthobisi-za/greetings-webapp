module.exports = function businessLogic() {
  var records = [];
  var all = []
  var userName;
  var userLang;
  var count = 0;
  //updated user values

  function setUserNameAndLang(data) {
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
        userFix();
        function langFix(){
                if (data.Group == "English") {
                return (userLang = "Hello");
                } else if (data.Group == "Sesotho") {
                return (userLang == "Dumela");
                } else if (data.Group == "Isizulu") {
                return (userLang = "Sawbona");
                } else {
                return ""
                }
        }
        langFix()
  }

  function getData() {
    return {
      userLang,
      userName,
      count
    };
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
    getNames
  };
};
