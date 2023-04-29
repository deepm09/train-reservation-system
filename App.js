


var citylist=["Mumbai",
"Kolkata",
"Delhi",
"Chennai",
"Bangalore",
"Hyderabad",
"Ahmadabad",
"Pune",
"Surat",
"Kanpur",
"Jaipur",
"Lucknow",
"Nagpur",
"Patna",
"Indore",
"Vadodara",
"Bhopal",
"Coimbatore",
"Ludhiana",
"Kochi",
"Visakhapatnam",
"Agra",
"Varanasi",
"Meerut",
"Nashik",
"Allahabad",
"Amritsar",
"Rajkot"];


let v;

var mat = Array(36);
for (var i = 0; i < 36; i++) {
    mat[i] = new Array(18);
}
for(var i=0;i<36;i++)
{
    for(var j=0;j<36;j++)
    {
        mat[i][j]=0;
    }
}
function insert_mat(i,j,w)
{
    mat[i][j]=parseInt(w);
}

let adjList;


function graph(vertices)
{
    v = vertives;
    initAdjList();
}

function initAdjList()
{
    adjList = new Array(v);
    for(let i=0;i<v;i++){
        adjList[i] = [];
    }
}

function addEdge(u,v){
    adjList[u].push[v];
}

function printPaths1(s,d)
{
    let isVisited = new Array(v);
    for(let i=0;i<v;i++)
        isVisited[i]=false;
         var pathList = [];

        // add source to path[]
        pathList.push(citylist[s]);

        // Call recursive utility
        printPaths(s, d, isVisited, pathList);
}

function book()
{
    window.location.replace("/train-booking.html");
}

// A recursive function to print
    // all paths from 'u' to 'd'.
    // isVisited[] keeps track of
    // vertices in current path.
    // localPathList<> stores actual
    // vertices in the current path

    var row=1;
function printsinglePathlist(localPathList,sum)
    {
        const d = new Date();
        var hour = d.getHours();
        var multiplier;
        if(hour>8 && hour<20)
        {
            multiplier=33;
        }
        else
        {
            multiplier=40;
        }
    var display = document.getElementById("example");
    var newrow = display.insertRow(row);
    var cell1 = newrow.insertCell(0);
    var cell2= newrow.insertCell(1);
    var cell3= newrow.insertCell(2);
    cell1.innerHTML = localPathList;
    cell2.innerHTML = sum*multiplier;
    cell3.innerHTML = "<button class='btn btn-primary' onclick='book()'>Book</button>";
    row++;
}
  
function printPaths(u,d,isVisited,localPathList)
{
    if (u == (d)) {
        var sum=0;
            var len=localPathList.length;
            
            for(var k=0;k<len-1;k++) {
                sum=sum+mat[parseInt(citylist.indexOf(localPathList[k]))][parseInt(citylist.indexOf(localPathList[k+1]))];
            }
            printsinglePathlist(localPathList,sum);
          
       
            // if match found then no need to
            // traverse more till depth
            return;
        }

        // Mark the current node
        isVisited[u] = true;

        // Recur for all the vertices
        // adjacent to current vertex
        for (let i=0;i< adjList[u].length;i++) {
            if (!isVisited[adjList[u][i]]) {
                // store current node
                // in path[]
                localPathList.push(citylist[adjList[u][i]]);
                printPaths(adjList[u][i], d,
                isVisited, localPathList);

                // remove current node
                // in path[]
                localPathList.splice(localPathList.indexOf
                (adjList[u][i]),1);
            }
        }

        // Mark the current node
        isVisited[u] = false;
}

// Driver program
// Create a sample graph
Graph(36);
addEdge(0, 1);
addEdge(1,0);
addEdge(1,2);
addEdge(2,1);
addEdge(2, 3);
addEdge(3,2);
addEdge(3, 4);
addEdge(4,3);
addEdge(3, 7);
addEdge(7,3);
addEdge(4, 7);
addEdge(7,4);
addEdge(4, 5);
addEdge(5,4);
addEdge(5, 6);
addEdge(6,5);
addEdge(5, 7);
addEdge(7,5);
addEdge(6, 9);
addEdge(9,6);
addEdge(7, 9);
addEdge(9,7);
addEdge(7, 8);
addEdge(8,7);
addEdge(7, 10);
addEdge(10,7);
addEdge(7, 11);
addEdge(11,7);
addEdge(11, 10);
addEdge(10,11);
addEdge(11, 12);
addEdge(12,11);
addEdge(11, 13);
addEdge(13,11);
addEdge(12, 14);
addEdge(14,12);
addEdge(12, 15);
addEdge(15,12);
addEdge(10, 16);
addEdge(16,10);
addEdge(10, 17);
addEdge(17,10);
addEdge(16, 17);
addEdge(17,16);

         insert_mat(0, 1, 2000);
         insert_mat(1,2,1500);
         insert_mat(2, 3, 4000);
         insert_mat(3, 4, 2500);
         insert_mat(3, 7, 1300);
         insert_mat(4, 7, 900);
         insert_mat(4, 5, 2100);
         insert_mat(5, 6, 1500);
         insert_mat(5, 7, 1700);
         insert_mat(6, 9, 2200);
         insert_mat(7, 8, 700);
         insert_mat(7, 9, 1000);
         insert_mat(7, 11, 1500);
         insert_mat(11, 10, 300);
         insert_mat(11, 12, 600);
         insert_mat(11, 13, 1000);
         insert_mat(12, 14, 1400);
         insert_mat(12, 15, 2100);
         insert_mat(10, 16, 1900);
         insert_mat(10, 17, 3000);
         insert_mat(16, 17, 1400);
         insert_mat(1, 0, 4200);
         insert_mat(2,1,1200);
         insert_mat(3, 2, 600);
         insert_mat(4, 3, 400);
         insert_mat(7, 3, 1300);
         insert_mat(7, 4, 900);
         insert_mat(5, 4, 2100);
         insert_mat(6, 5, 1500);
         insert_mat(7, 5, 1700);
         insert_mat(9, 6, 2200);
         insert_mat(8, 7, 700);
         insert_mat(9, 7, 1000);
         insert_mat(11, 7, 1500);
         insert_mat(10, 11, 300);
         insert_mat(12, 11, 600);
         insert_mat(13, 11, 1000);
         insert_mat(14, 12, 1400);
         insert_mat(15, 12, 2100);
         insert_mat(16, 10, 1900);
         insert_mat(17, 10, 3000);
         insert_mat(17, 16, 1400);
         

function elementFromHtml(html)
{
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstElementChild;

}



document.getElementById('farebtn').addEventListener('click', function(event) {


    var s = parseInt(document.getElementById("source").value);
    var d = parseInt(document.getElementById("destination").value);
    printAllPaths(s,d);
    event.preventDefault();
});