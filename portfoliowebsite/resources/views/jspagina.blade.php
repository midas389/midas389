<!DOCTYPE html>
<html>

<head>
    <title>website 1</title>
    <link rel="stylesheet" type="text/css" href="main.css" />


</head>

<body>
    <div><a href="https://hz.nl/"><img class="hzicon" src="foto's/hzlogo.png"></a></div>
    <ul class="ulnav">
        <li class="linav"><a href="index">Home</a></li>
        <li class="linav"><a href="info">Midas</a></li>
        <li class="linav"><a class="active" href="dashboard">Dashboard</a></li>
        <li class="linav"><a href="motivatie">Mijn motivatie</a></li>
        <li class="linav" class="active"><a href="jspagina">Javascript</a></li>
        <li class="linav"><a href="Beroepsbeeld">Beroepsbeeld</a></li>
    </ul>

    <div class="layout">




        <div id="puzzelProbeer">
          
        </div>
        <div id="puzzelAf" style="display: none;">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            
        </div>
        <div>
            <p id="finish"></p>
            <p id="counter">je hebt nog 5 pogingen</p>
        </div>
        <div id = "imgdiv"></div>







    </div>
    <script src="jspagina2.js"></script>
</body>

</html>