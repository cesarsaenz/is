@extends('test.admin-layout')

@section('title')
Office CRM
@endsection

@section('content')
<div class="container-fluid" >
        <div class="col-xs-offset-2 col-xs-8">
          <div ng-view></div>
        </div>
</div>  	
@endsection

@section('footer_scripts')
  <!-- Scripts -->
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-resource.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-route.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-cookies.js"></script>

  <script src="/js/underscore-min.js"></script>
  <script src="/js/angular-catalyze.js"></script>
  <script src="/js/FileSaver.min.js"></script>
  <script src="/js/xoffice/crm/app.js"></script>

  <script src="/js/modules/authentication/services.js"></script>
  <script src="/js/modules/authentication/controllers.js"></script>

  <script src="/js/modules/home/services.js"></script>
  <script src="/js/modules/home/controllers.js"></script>

  <script src="/js/modules/office/services.js"></script>
  <script src="/js/modules/office/controllers.js"></script>

  <script src="/js/modules/events/services.js"></script>
  <script src="/js/modules/events/controllers.js"></script>

  <script src="/js/modules/eventDetails/services.js"></script>
  <script src="/js/modules/eventDetails/controllers.js"></script> 

  <script src="/js/modules/noteDetails/services.js"></script>
  <script src="/js/modules/noteDetails/controllers.js"></script>    


@endsection