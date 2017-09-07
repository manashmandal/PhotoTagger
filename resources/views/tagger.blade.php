@extends('master')


@section('content')



<!-- <div class="row"> -->
    
    <div class="row" style="margin-bottom: 15px;">
        <div class="col-xs-2 text-center">
            <button id="leftBtn" type="button" class="btn3d btn btn-lg btn-success"><i class="fa fa-chevron-left" aria-hidden="true"></i>                
                </button>            
        </div>

        <div class="col-xs-8 text-center" id="image_div">
            <img id="image_placeholder" style="max-height: 350px; max-width: 350px;"src="https://lh3.googleusercontent.com/Yh6ZlCb8dQIDIwAWbwd2jboFCyTqq8wc2xbLMs9ykYemOX3vjOTtT6Npfbk-jFkCciwY=w300">
            </img>
        </div>

        <div class="col-xs-2 text-center">
                <button id="rightBtn" type="button" class="btn3d btn btn-lg btn-primary"><i class="fa fa-chevron-right" aria-hidden="true"></i>                
                </button>
        </div>
    </div>

    <div class="row">
    
        <div class="col-xs-12 text-center col-xs-offset-3">   

            <div class="col-xs-2 text-center">
                    <input id="typeSelectionInput" type="checkbox" data-size="large" data-toggle="toggle" data-onstyle="danger" data-offstyle="success" data-on="Male" data-off="Female">
            </div>

            <div class="[ form-group ] col-xs-2 text-center" style="margin-top: 5px;">
                    <input type="checkbox" name="fancy-checkbox-danger" id="fancy-checkbox-danger" autocomplete="off" />
                    <div class="[ btn-group ]">
                        <label for="fancy-checkbox-danger" class="[ btn btn-danger ]">
                            <span class="[ glyphicon glyphicon-ok ]"></span>
                            <span> </span>
                        </label>
                        <label for="fancy-checkbox-danger" class="[ btn btn-default active ]">
                            Invalid Image
                        </label>
                    </div>
            </div>

            <div class="col-xs-2 text-left" style="margin-top: -7px; margin-bottom: 10px;">
                    <button id="saveBtn" type="button" style="margin-left: 5px;" class="btn3d btn btn-lg btn-primary"><i class="fa fa-floppy-o" aria-hidden="true"></i></button>
                </div>
        </div>
    </div>


    <div class="row">
        <div class="col-xs-12">
                <div id="infoalert" class="alert alert-success" role="alert">
                        Information Alert
                </div>
        </div>
    </div>
<!-- </div> -->

@stop