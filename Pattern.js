
# Solid Rectangle
*****
*****
*****
*****
*****
   
<script>
  
const rows= Number(window.prompt("No of Rows??", ""));
const columns= Number(window.prompt("No of Columns ??", ""));
   for(let i =0;i<rows;i++){
   document.write("*")
      for(let j=1;j<columns;j++){
            document.write("*");}
            document.write("<br/>")
         }
      
  </script>

# Right Angle Triangle

*
**
***
****
*****

<script>
for(let i=0;i<5;i++){
  for(let j=0;j<=i;j++){
    document.write("*");
  }
  document.write("<br>")
}
</script>

# Inverted Right Angle Triangle

*****
****
***
**
*

<script>
for(let i=5;i>1;i--){
  for(let j=1;j<=i;j++){
    document.write("*");
  }
  document.write("<br>")
}
</script>

# Left Angle Triangle
    *
   **
  ***
 ****
*****
   
<script>
for(let i=1;i<=5;i++){
  for(let k=1;k<=5-i;k++){
  document.write("&nbsp;&nbsp;")}
     for(let j=1;j<=i;j++){
     document.write("*")}
document.write("<br>")
}
</script>


# pyramid
      *
      **
     ***
     ****
     *****

   
   <script>
   
  for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
      document.write("&nbsp;&nbsp;")
    }
    for(let k=1;k<=i;k++){
      document.write("*")
    }
    for(let l=2;l<=i;l++){
      document.write("*")
    }
    document.write("<br>")
  }
    </script>
