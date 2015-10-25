<!DOCTYPE html>
<html>

  <head>
    <link href="http://s3.amazonaws.com/codecademy-content/courses/ltp/css/shift.css" rel="stylesheet">
    
    <link rel="stylesheet" href="http://s3.amazonaws.com/codecademy-content/courses/ltp/css/bootstrap.css">
      
    <link href="jquery-ui.min.css" rel="stylesheet" type="text/css" />
      
    <link rel="stylesheet" href="main.css">
      
      
    <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

    <script src="jssor.slider.min.js"></script>
            
      
    <script>
      jssor_slider1_starter = function (containerId) {
          var options = { $AutoPlay: true };
        var jssor_slider1 = new $JssorSlider$(containerId, options);
      };
    </script>
      
    
  </head>

  <body>
      <div class="jumbotron">
        <div class="container">
            <image src="pics/logo.gif"></image>
            <h1><bold>At Home School</bold></h1>
            <p>英語を楽しく勉強しましょう！</p>
            <p>電話：042-651-7162</p>
        </div>
    </div> 
      
    <div class="container">
        <ul class="nav nav-pills nav-justified red">
          <li role="presentation" class="active"><a href="index.html">ホーム</a></li>
          <li role="presentation"><a href="#">クラス写真</a></li>
          <li role="presentation"><a href="#">アクティブ</a></li>
          <li role="presentation"><a href="#">塗り絵</a></li>
          <li role="presentation"><a href="access.html">アクセス</a></li>
          <li role="presentation"><a href ="#">料金表</a></li>
        </ul>
    </div>
      
<!--      <?php include 'header.php'; ?>-->
      
    </body>
    
    <div class="container">
  <h2>問い合わせ</h2>
  <form role="form">
      <div class="form-group">
      <label for="pwd">名前：</label>
      <input type="name" class="form-control" id="name" placeholder="Enter name">
    <div class="form-group">
      <label for="email">メール：</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email">
    </div>
    </div>
      <div class="form-group">
  <label for="comment">質問など</label>
  <textarea class="form-control" rows="5" id="comment" placeholder="Enter comments here"></textarea>
</div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</div>
    
    
<!--
    <div class="input-form">
        <div class="container">
            <form>
                名前：<br>
                <input type="text" name="firstname">
                <br>
                メール：<br>
                <input type="text" name="email">
                <br>
                コメント、質問など：<br>
                <input type="text" name="comments">
                
                <textarea rows="5" cols="80" id="TITLE">
                </textarea>
                <br><br>
                <input type="submit" value="Submit">
                
                </form>
        </div>
    </div>
-->
</html>