function convertFunctions(fn) {
  let starter, functionName, functionBody, parameters, clousure;
  let finalString = "";

  if (fn.match("function")) {
    starter = findSpecificChar(fn, "{");

    functionBody = fn.substr(starter, fn.length);
    functionName = fn.substr(0, starter);
    functionName = functionName.replace("function", "").trim();

    clousure = findSpecificChar(functionName, "(");
    parameters = functionName.substr(clousure, functionName.length).trim();
    functionName = functionName.substr(0, clousure).trim();
    if (functionName.length === 0) {
      finalString = "() => {}";
    } else {
      finalString =
        "const " + functionName + " = " + parameters + " => " + functionBody;
    }
  } else {
    fn = fn.trim();

    starter = findSpecificChar(fn, "=");
    clousure = findSpecificChar(fn, '(');

    functionName = fn.substr(0, starter);
    functionName = functionName.trim().split(' ');
    functionName = functionName[functionName.length-1]

    starter = findSpecificChar(fn, "{");
    functionBody = fn.substr(starter, fn.length);

    fn = fn.replace(functionBody,"")
    fn = fn.substr(clousure,fn.length)
    fn = fn.replace("=>",'').trim();

    parameters = fn


    finalString = "function " + functionName 
    if(functionName === "()"){
        finalString = "function " + functionName + " " + functionBody
    }else{
        finalString = "function " + functionName + parameters + " " +functionBody
    }
    

  }

  return finalString;
}

function findSpecificChar(word, char) {
  for (let index = 0; index < word.length; index++) {
    if (word.charAt(index) === char) return index;
  }
}

function filterSpecificChar(word, char) {
  word = word.filter((string) => {
    return string != char;
  });

  return word;
}

convertFunctions(  `()=>{}`);
convertFunctions(  `() => {}`);
convertFunctions(  `name=()=>{}`);
convertFunctions(  `const name=()=>{}`);
convertFunctions(  `const name = () => {}`);
convertFunctions(    `var name = (str, num) => {console.log(str, num);}`);

