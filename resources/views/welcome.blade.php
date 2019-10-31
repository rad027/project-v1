<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <!--<link rel="shortcut icon" href="{{ config('app.favicon') }}" type="image/x-icon">
  <link rel="icon" href="{{ config('app.favicon') }}" type="image/x-icon">-->

  <title>{{ config('app.name') }}</title>
  <meta name="author" content="Roldhan Dasalla(iNew Works)" />
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link href="{{ url('/fontawesome/css/all.css') }}" rel="stylesheet">
  <link rel="stylesheet" href="{{ mix('/css/app.css').'?v='.md5(microtime()) }}">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini">
<div id="app">
  <index v-if="!$auth.check()"></index>
  <logged v-else></logged>
  <div class="d-flex justify-content-center position-absolute" v-if="reloader_pane" style="top:50%;left:50%;">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>  
</div>

<!-- REQUIRED SCRIPTS -->
<script src="{{ mix('/js/app.js').'?v='.md5(microtime()) }}"></script>
</body>
</html>