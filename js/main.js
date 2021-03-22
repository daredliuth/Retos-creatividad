function show(selec)
{
    switch (selec)
    {
        case 1:
            document.getElementById("Home").style.display = "none";
            document.getElementById("1").style.display = "grid";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";
            break;
        case 2:
            document.getElementById("Home").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "grid";
            document.getElementById("3").style.display = "none";
            break;
        case 3:
            document.getElementById("Home").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "grid";
            break;
        default:
            document.getElementById("Home").style.display = "grid";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";
            break;
    }
}
function Inicio()
{
    document.getElementById("Home").style.display = "grid";        
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
}
