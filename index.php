<?php
    // $sconn=new mysqli('localhost','root','','health_records');
    session_start();
    date_default_timezone_set("Asia/Kolkata");
    // echo date("Y-m-d"). date("h:i:sa");
    // if($sconn->connect_error){
    //     $sconn_checker=0;
    //     echo "<script>console.log('Error while connectting to Server');</script>";
    //     die;
    // }
    // else{
    //     echo'<script>console.log("Connected to Main Server");</script>';
    //     $sconn_checker=1;
    // }    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HEALTH MONITORING</title>
    <link rel="stylesheet" href="./stylesheets/style.css">
    <link rel="icon" href="./images/icon2.ico" type="image/ico" sizes="16x16">

</head>
<body>
    
    <div class="upper">
        <button id="upbtn" type="submit">History</button>
    </div>
    <div class="main displayFlex">
        <div class="mainInside">
            <form method="post" class="form">
                <div class="formInside form1">
                    <!-- <div class="formInside1">
                        <text>Name</text>
                    </div> -->
                    <div class="formInside2I">
                        <div class="dropdown">
                            <div placeholder="Name" class="inputclass0">Name</div>
                            <input type="text" id="inputhidden" hidden name="name" value="none">
                            <div class="dropdown-content">
                              <span class="nameSpan" value="mb">M Bharmal</span>
                              <span class="nameSpan" value="fb">F Bharmal</span>                              
                            </div>
                          </div>
                    </div>
                </div>
                <div class="formInside formInside2I form2">
                    <div class="formInside1">
                        <text>BP </text>
                    </div>
                    <div class="formInside2">
                        <input placeholder="Systolic (Upper)" type="text" class="inputclass" name="bpupper" id="bpupper">
                        <input placeholder="Systolic (Lower)" type="text" class="inputclass" name="bplower" id="bplower">
                    </div>
                </div>
                <div class="formInside formInside2I form3">
                    <div class="formInside1">
                        <text>Sugar</text>
                    </div>
                    <div class="formInside2 ">
                        <input placeholder="Fasting" type="text" class="inputclass" name="sugarfast" id="sugarfast">
                        <input placeholder="After 2 hours" type="text" class="inputclass" name="sugarafter2" id="sugarafter2">
                    </div>
                </div>
                <div class="formInside form4">
                    <div class="formInside1">
                        <text>Information</text>                        
                    </div>
                    <div class="formInside2">
                        <input placeholder="Date" type="date" class="inputclass" name="date" id="date">
                        <input placeholder="Weight (in KG)" type="number" class="inputclass" name="weight" id="weight">
                    </div>
                </div>
                <div class="formInside form5">
                    <div class="formInside1">
                        
                    </div>
                    <div class="formInside2">
                        <button class="subbtn" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div id="status" class="status">
            
        </div>
    </div>
    <div id="records" class="records">
        <div class="historyInside">
            <span class="cross" id="cross">
                <div class="line1"></div>
                <div class="line2"></div>
            </span>
            <select class="inputclass0 historySelect">
                <option class="historyOption"  disabled selected value>Select Name</option>
                <option class="historyOption">M Bharmal</option>
                <option class="historyOption">F Bharmal</option>
            </select>
            <div class="historyTable">
                <table>                   
                    
                </table>
            </div>
        </div>
    </div>
</body>
</html>
<script src="./scripts/script.js"></script>
<script src="https://cdn.example.com/sqlserver.js"></script>
<?php
       
       
                        
                    if($_SERVER['REQUEST_METHOD']=="POST"){                        
                        $name=$_POST["name"];                        
                        $nvalue=0;
                        if($name=='M Bharmal')
                        $nvalue='mb';
                        else if($name='F Bharmal')
                        $nvalue='fb';                        
                        if($nvalue){
                            $filename = 'records.json';
                            $inp = file_get_contents($filename);                            
                            $tempArray = json_decode($inp, true);                           
                            $Data = new stdClass(); 
                            $Data->name = $name;
                            $Data->bpupper = $_POST["bpupper"];;
                            $Data->bplower = $_POST["bplower"];
                            $Data->sugarfast = $_POST["sugarfast"];
                            $Data->sugarafter2=$_POST["sugarafter2"];
                            $Data->date=$_POST["date"];
                            $Data->weight=$_POST["weight"];
                            $Data->nvalue=$nvalue;
                            $Data->Datestamp=date("Y-m-d");
                            $Data->Timestamp=date("h:i:sa");
                            $tempArray[] = $Data;
                            $jsonData = json_encode($tempArray);
                            file_put_contents($filename, $jsonData);                           
                            
                            echo "<script>
                            alert('Your data is been recorded Successfully')
                            window.location.href='/health/public';                                
                            </script>";
                                
                                exit;
                            }
                        }
                    
            
        
    
?>