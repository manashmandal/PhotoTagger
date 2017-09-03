@extends('master')


@section('content')



<div class="row">
    
    <div class="row" style="margin-bottom: 10px;">
        <div class="col-xs-2 text-center">
            <button id="leftBtn" type="button" class="btn3d btn btn-lg btn-success"><i class="fa fa-chevron-left" aria-hidden="true"></i>                
                </button>            
        </div>

        <div class="col-xs-8 text-center">
            <img style="max-height: 350px; max-width: 350px;"src="https://lh3.googleusercontent.com/Yh6ZlCb8dQIDIwAWbwd2jboFCyTqq8wc2xbLMs9ykYemOX3vjOTtT6Npfbk-jFkCciwY=w300">
            </img>
        </div>

        <div class="col-xs-2 text-center">
                <button id="rightBtn" type="button" class="btn3d btn btn-lg btn-primary"><i class="fa fa-chevron-right" aria-hidden="true"></i>                
                </button>
        </div>
    </div>

    <div class="row" style="margin-bottom: 10px;">
        <div class="col-xs-12 text-center">
            <div class="button-group">
                <input id="typeSelectionInput" type="checkbox" data-size="large" data-toggle="toggle" data-onstyle="danger" data-offstyle="success" data-on="Male" data-off="Female">

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
</div>

@stop