<!doctype html>
<html>
<head>
   <title>How to start</title>
   <!-- <script src="../scheduler/dhtmlxscheduler.js" type="text/javascript"></script>-->
	<script src="{{ asset('codebase/dhtmlxscheduler.js') }}" type="text/javascript"></script>
<link href="{{ asset('codebase/dhtmlxscheduler.css') }}" rel="stylesheet" type="text/css" />
   <!-- <link rel="stylesheet" href="../scheduler/dhtmlxscheduler.css" type="text/css"> -->
</head>


<style type="text/css" media="screen">
	html, body{
		margin:0px;
		padding:0px;
		height:100%;
		overflow:hidden;
	}	
</style>


<body onload="init();">


<div id="scheduler_here" class="dhx_cal_container" style='width:100%; height:100%;'>
    <div class="dhx_cal_navline">
        <div class="dhx_cal_prev_button">&nbsp;</div>
        <div class="dhx_cal_next_button">&nbsp;</div>
        <div class="dhx_cal_today_button"></div>
        <div class="dhx_cal_date"></div>
        <div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div>
        <div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div>
        <div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div>
    </div>
    <div class="dhx_cal_header"></div>
    <div class="dhx_cal_data"></div>       
</div>


<script type="text/javascript">

var events = [
{id:1, text:"Meeting",   start_date:"07/11/2015 14:00",end_date:"07/11/2015 17:00"},
{id:2, text:"Conference",start_date:"07/18/2015 12:00",end_date:"07/18/2015 19:00"},
{id:3, text:"Interview", start_date:"07/24/2015 09:00",end_date:"07/24/2015 10:00"}
];

  function init() {
  	//scheduler.config.xml_date="%Y-%m-%d %H:%i";
  	scheduler.init('scheduler_here', new Date(),"month");
  	scheduler.parse(events, "json");//takes the name and format of the data source
  }

</script>

</body>
</html>