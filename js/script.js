const key = "andkj*FEA$,";

const queryParams = function(params){
    let result = "?";
    for (i=0; i<params.length; i++){
        result += `${params[i][0]}=${params[i][1]}`;
        if (i!=params.length-1){
            result += "&";
        }
    }
    return result
};

const getData = function(){
    const httpRequest = new XMLHttpRequest();

    // Add event
    httpRequest.addEventListener('readystatechange', function(){
        if (httpRequest.readyState==4){
            // Select text
            data = JSON.parse(httpRequest.responseText)["classroom"]
            
            for (let i=0; i<data.length; i++){
                let node = document.createElement("li");
                let textNode = document.createTextNode(data[i]);
                node.appendChild(textNode);
                document.querySelector(".list").appendChild(node)
            }
                
            
        }
    });

    httpRequest.open("GET", "https://classroom-intec.herokuapp.com/available"+queryParams([["key", key]]));
    httpRequest.send(null);
}

const refreshData = function(){
    // Select text
    let text = document.querySelector(".list");
    text.innerText = "";
};